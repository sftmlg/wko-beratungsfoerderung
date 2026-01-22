'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  iconBg?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  subtitle,
  icon,
  iconBg = 'bg-stone-100',
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
      >
        <div className={`p-2 ${iconBg} rounded-lg flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1 text-left min-w-0">
          <h2 className="text-sm font-semibold text-stone-800 uppercase tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-stone-500">{subtitle}</p>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-stone-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-stone-100">
          {children}
        </div>
      </div>
    </div>
  );
}
