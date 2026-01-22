'use client';

import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { FileText, ExternalLink } from 'lucide-react';

interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
}

// Map of file slugs to human-readable titles
const titleMap: Record<string, string> = {
  '00-overview': 'Programmübersicht',
  '01-funding-areas': 'Förderbereiche',
  '02-process': 'Antragsprozess',
  '03-requirements': 'Voraussetzungen',
  '04-deliverables': 'Dokumentation',
  'richtlinie-beratungsfoerderung': 'Förderrichtlinie',
  'richtlinien-beratungsauftraege': 'Beratungsaufträge',
  'honorarrichtlinien': 'Honorarrichtlinien',
  'beratungsablauf': 'Beratungsablauf',
  'checkliste-digitalisierung': 'Checkliste Digitalisierung',
};

// Convert source path to wiki URL and display title
function parseSource(source: string): { url: string; title: string; category: string } {
  // Remove .md extension if present
  const cleanSource = source.replace(/\.md$/, '');

  // Check if source has category prefix (wiki/ or raw/)
  const parts = cleanSource.split('/');

  if (parts.length >= 2) {
    const category = parts[0];
    const slug = parts.slice(1).join('/');
    const title = titleMap[slug] || slug;
    return {
      url: `/wiki/${category}/${slug}`,
      title,
      category: category === 'wiki' ? 'Wiki' : 'Richtlinie',
    };
  }

  // Fallback: assume it's a wiki article
  const slug = cleanSource;
  const title = titleMap[slug] || slug;
  return {
    url: `/wiki/wiki/${slug}`,
    title,
    category: 'Wiki',
  };
}

export default function MessageBubble({ role, content, sources }: MessageBubbleProps) {
  const isUser = role === 'user';

  // Clean up content - remove Quellen section (we display it separately, handles emoji variants)
  const cleanContent = content
    .replace(/##\s*(?:📋\s*)?Quellen\n[\s\S]*?(?=\n##|$)/, '')
    .trim();

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6 ${
        isUser ? 'animate-[slideInRight_0.5s_cubic-bezier(0.16,1,0.3,1)]' : 'animate-[slideInLeft_0.5s_cubic-bezier(0.16,1,0.3,1)]'
      }`}
    >
      <div className={`max-w-[85%] md:max-w-[75%] ${isUser ? 'ml-auto' : 'mr-auto'}`}>
        {/* Message Content */}
        <div
          className={`rounded-2xl px-5 py-4 shadow-sm ${
            isUser
              ? 'bg-slate-800 text-white'
              : 'bg-white text-neutral-900 border border-neutral-200'
          }`}
        >
          {isUser ? (
            <p className="text-[15px] leading-relaxed">{content}</p>
          ) : (
            <div className="markdown-content text-[15px]">
              <ReactMarkdown
                components={{
                  // Override code blocks to prevent rendering issues
                  code: ({ children, className }) => {
                    const isInline = !className;
                    if (isInline) {
                      return (
                        <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono">
                          {children}
                        </code>
                      );
                    }
                    // For block code, just render as styled div (no pre/code)
                    return (
                      <div className="bg-neutral-100 text-neutral-800 p-3 rounded-lg text-sm my-2 overflow-x-auto">
                        {children}
                      </div>
                    );
                  },
                  pre: ({ children }) => <>{children}</>,
                  // Ensure proper list rendering
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1 my-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-1 my-2">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-neutral-700">{children}</li>
                  ),
                  // Headings
                  h2: ({ children }) => (
                    <h2 className="text-lg font-semibold text-slate-900 mt-4 mb-2 first:mt-0">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-base font-semibold text-slate-900 mt-3 mb-1">{children}</h3>
                  ),
                  // Paragraphs
                  p: ({ children }) => (
                    <p className="mb-2 last:mb-0">{children}</p>
                  ),
                  // Strong
                  strong: ({ children }) => (
                    <strong className="font-semibold text-slate-900">{children}</strong>
                  ),
                }}
              >
                {cleanContent}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Sources (Assistant only) - Clickable links to wiki articles */}
        {!isUser && sources && sources.length > 0 && (
          <div className="mt-3 px-3">
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-neutral-600">Quellen:</p>
                <div className="flex flex-wrap gap-1.5">
                  {sources.map((source, idx) => {
                    const { url, title, category } = parseSource(source);
                    return (
                      <Link
                        key={idx}
                        href={url}
                        className="group inline-flex items-center gap-1 text-xs text-orange-600 bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded-full transition-colors"
                      >
                        <span>{title}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timestamp */}
        <p className={`text-[10px] text-neutral-400 mt-2 px-3 ${isUser ? 'text-right' : 'text-left'}`}>
          {new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
}
