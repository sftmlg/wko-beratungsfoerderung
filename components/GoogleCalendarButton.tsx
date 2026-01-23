'use client';

import { Calendar } from 'lucide-react';
import type React from 'react';
import { companyInfo } from '../data/company';

interface GoogleCalendarButtonProps {
  className?: string;
  text?: string;
  showIcon?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const GoogleCalendarButton: React.FC<GoogleCalendarButtonProps> = ({
  className = '',
  text = 'Kostenlose Beratung buchen',
  showIcon = true,
  variant = 'secondary',
}) => {
  const flexAlignment = 'inline-flex items-center justify-center';
  const baseStyles = 'rounded-xl font-bold transition-all duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg',
    outline: 'bg-transparent border-2 border-current hover:bg-white/10',
  };

  const appliedClass = className
    ? `${showIcon ? flexAlignment : ''} ${className}`.trim()
    : `${flexAlignment} ${baseStyles} ${variants[variant]} px-8 py-4`;

  const schedulingUrl = companyInfo.contact.schedulingUrl;

  return (
    <a
      href={schedulingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={appliedClass}
    >
      {showIcon && <Calendar className="mr-2 h-5 w-5" />}
      {text}
    </a>
  );
};
