'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Send, Loader2 } from 'lucide-react';
import MessageBubble from './MessageBubble';
import ThinkingIndicator from './ThinkingIndicator';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
}

interface ThinkingStep {
  type: 'thinking' | 'navigation' | 'reading';
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [thinkingSteps, setThinkingSteps] = useState<ThinkingStep[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinkingSteps]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);
    setThinkingSteps([]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: currentInput }),
      });

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      const sources: string[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('event: ')) {
            const eventType = line.slice(7);
            const dataLine = lines[lines.indexOf(line) + 1];
            if (dataLine?.startsWith('data: ')) {
              try {
                const data = JSON.parse(dataLine.slice(6));

                switch (eventType) {
                  case 'thinking':
                    setThinkingSteps((prev) => [
                      ...prev,
                      { type: 'thinking', content: data.content }
                    ]);
                    break;
                  case 'navigation':
                    setThinkingSteps((prev) => [
                      ...prev,
                      { type: 'navigation', content: `${data.tool}: ${JSON.stringify(data.input)}` }
                    ]);
                    break;
                  case 'text':
                    assistantContent += data.content;
                    break;
                  case 'done':
                    // Complete
                    break;
                  case 'error':
                    console.error('Chat error:', data.message);
                    break;
                }
              } catch {
                // Skip invalid JSON
              }
            }
          }
        }
      }

      // Extract sources from content (## Quellen section - with or without emoji)
      const quellenMatch = assistantContent.match(/##\s*(?:📋\s*)?Quellen\n([\s\S]*?)(?=\n##|$)/);
      if (quellenMatch) {
        const quellenLines = quellenMatch[1].trim().split('\n');
        for (const line of quellenLines) {
          const match = line.match(/^-\s*(.+\.md)/);
          if (match) {
            sources.push(match[1].trim());
          }
        }
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent || 'Entschuldigung, es gab ein Problem bei der Verarbeitung Ihrer Anfrage.',
        sources: sources.length > 0 ? sources : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setThinkingSteps([]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <Image
                src="/logo.png"
                alt="KI für KMU Logo"
                width={64}
                height={64}
                className="rounded-2xl mb-6 shadow-lg"
              />
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                WKO Beratungsförderung Assistent
              </h2>
              <p className="text-neutral-600 max-w-md mb-8 leading-relaxed">
                Stellen Sie Ihre Fragen zur WKO Beratungsförderung. Der Assistent durchsucht die offizielle Dokumentation und gibt präzise Antworten.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setInput('Welche Fördersätze gibt es?')}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 transition-colors duration-200"
                >
                  Fördersätze
                </button>
                <button
                  onClick={() => setInput('Wie läuft der Beratungsprozess ab?')}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 transition-colors duration-200"
                >
                  Prozessablauf
                </button>
                <button
                  onClick={() => setInput('Welche Anforderungen gibt es für Berater?')}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 transition-colors duration-200"
                >
                  Anforderungen
                </button>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
              sources={message.sources}
            />
          ))}

          {isLoading && <ThinkingIndicator steps={thinkingSteps} isActive={true} />}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-neutral-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <form onSubmit={handleSubmit} className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Stellen Sie Ihre Frage zur WKO Beratungsförderung..."
              rows={1}
              disabled={isLoading}
              className="w-full resize-none rounded-2xl border border-neutral-300 bg-white px-5 py-4 pr-14 text-[15px] leading-relaxed text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              style={{
                minHeight: '56px',
                maxHeight: '200px',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-3 bottom-3 flex items-center justify-center w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md disabled:hover:shadow-sm"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </form>
          <p className="text-xs text-neutral-500 mt-3 text-center">
            Basierend auf offiziellen WKO-Richtlinien. Für verbindliche Auskünfte wenden Sie sich an die WKO.
          </p>
        </div>
      </div>
    </div>
  );
}
