import Anthropic from '@anthropic-ai/sdk';
import { kbTools, executeKbTool } from '@/lib/knowledge-agent/tools';
import { SYSTEM_PROMPT, NAVIGATION_PREFIX } from '@/lib/knowledge-agent/prompts';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== 'string') {
      return Response.json({ error: 'Question is required' }, { status: 400 });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const send = (event: string, data: unknown) => {
          controller.enqueue(
            encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
          );
        };

        try {
          const apiKey = process.env.ANTHROPIC_API_KEY;
          if (!apiKey) {
            send('error', { message: 'ANTHROPIC_API_KEY not configured' });
            controller.close();
            return;
          }

          const client = new Anthropic({ apiKey });
          let messages: Anthropic.MessageParam[] = [
            { role: 'user', content: question },
          ];

          let iteration = 0;
          const maxIterations = 10;

          while (iteration < maxIterations) {
            iteration++;
            send('progress', { iteration, maxIterations });

            // kbTools is already in Anthropic format (array with name, description, input_schema)
            const response = await client.messages.create({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 4096,
              system: SYSTEM_PROMPT,
              tools: kbTools as Anthropic.Tool[],
              messages,
            });

            // Process response blocks
            const toolResults: Anthropic.ToolResultBlockParam[] = [];

            for (const block of response.content) {
              if (block.type === 'text') {
                // Extract thinking blocks
                const thinkingMatch = block.text.match(
                  /<thinking>([\s\S]*?)<\/thinking>/
                );
                if (thinkingMatch) {
                  send('thinking', { content: thinkingMatch[1].trim() });
                }

                // Send text (without thinking)
                const cleanText = block.text
                  .replace(/<thinking>[\s\S]*?<\/thinking>/g, '')
                  .trim();
                if (cleanText) {
                  send('text', { content: cleanText });
                }
              } else if (block.type === 'tool_use') {
                send('navigation', {
                  tool: block.name,
                  input: block.input,
                  prefix: NAVIGATION_PREFIX,
                });

                // Execute tool
                const result = await executeKbTool(
                  block.name,
                  block.input as Record<string, unknown>
                );

                toolResults.push({
                  type: 'tool_result',
                  tool_use_id: block.id,
                  content: result,
                });
              }
            }

            // If we have tool results, add them to messages and continue
            if (toolResults.length > 0) {
              messages = [
                ...messages,
                { role: 'assistant', content: response.content },
                { role: 'user', content: toolResults },
              ];
            }

            // Check if we're done
            if (response.stop_reason === 'end_turn') {
              break;
            }
          }

          send('done', { success: true });
        } catch (error) {
          console.error('Chat error:', error);
          send('error', {
            message:
              error instanceof Error ? error.message : 'Unknown error occurred',
          });
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Request processing error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
