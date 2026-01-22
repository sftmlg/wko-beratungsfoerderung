'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Brain, Search, FileText } from 'lucide-react';

interface ThinkingStep {
  type: 'thinking' | 'navigation' | 'reading';
  content: string;
}

interface ThinkingIndicatorProps {
  steps?: ThinkingStep[];
  isActive?: boolean;
}

export default function ThinkingIndicator({ steps = [], isActive = true }: ThinkingIndicatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStepIcon = (type: ThinkingStep['type']) => {
    switch (type) {
      case 'thinking':
        return <Brain className="w-4 h-4" />;
      case 'navigation':
        return <Search className="w-4 h-4" />;
      case 'reading':
        return <FileText className="w-4 h-4" />;
    }
  };

  const getStepLabel = (type: ThinkingStep['type']) => {
    switch (type) {
      case 'thinking':
        return 'Analysiere';
      case 'navigation':
        return 'Suche';
      case 'reading':
        return 'Lese';
    }
  };

  return (
    <div className="mb-6 max-w-[85%] md:max-w-[75%] animate-[slideInLeft_0.5s_cubic-bezier(0.16,1,0.3,1)]">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 rounded-2xl px-5 py-3 hover:shadow-sm transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-2 h-2 bg-orange-500 rounded-full thinking-pulse" />
            <div className="absolute inset-0 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-30" />
          </div>
          <span className="text-sm font-medium text-orange-900">
            {isActive ? 'Denke nach...' : 'Denkprozess'}
          </span>
        </div>
        {steps.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-orange-700 bg-orange-100/50 px-2 py-1 rounded-full">
              {steps.length} Schritt{steps.length !== 1 ? 'e' : ''}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-orange-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-orange-600" />
            )}
          </div>
        )}
      </button>

      {/* Expanded Steps */}
      {isExpanded && steps.length > 0 && (
        <div className="mt-2 bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm">
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 animate-[fadeIn_0.3s_ease-in-out]"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="mt-0.5 text-orange-500 flex-shrink-0">
                  {getStepIcon(step.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-neutral-600 mb-1">
                    {getStepLabel(step.type)}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed break-words">
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Simple loading state when no steps */}
      {!isExpanded && steps.length === 0 && isActive && (
        <div className="mt-2 flex items-center gap-2 px-5">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <span className="text-xs text-orange-700">Verarbeite Ihre Anfrage...</span>
        </div>
      )}
    </div>
  );
}
