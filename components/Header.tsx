'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isChat = pathname === '/chat';
  const isWiki = pathname?.startsWith('/wiki');
  const isHome = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="KI für KMU Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900 leading-tight">KI für KMU</span>
              <span className="text-xs text-neutral-500 leading-tight">WKO Förderung</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isHome
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-neutral-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Start
            </Link>
            <Link
              href="/wiki"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isWiki
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-neutral-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Wissensdatenbank
            </Link>
            <Link
              href="/chat"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isChat
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Chat-Assistent
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-200/60">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isHome
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-neutral-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Start
              </Link>
              <Link
                href="/wiki"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isWiki
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-neutral-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Wissensdatenbank
              </Link>
              <Link
                href="/chat"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isChat
                    ? 'bg-orange-500 text-white'
                    : 'text-neutral-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Chat-Assistent
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
