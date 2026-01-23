'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { GoogleCalendarButton } from './GoogleCalendarButton';

const MAIN_SITE = 'https://kiautomatisierung.info';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [beratungsbonusOpen, setBeratungsbonusOpen] = useState(false);

  const isChat = pathname === '/beratungsbonus/chat';
  const isWiki = pathname?.startsWith('/beratungsbonus/wiki');
  const isHome = pathname === '/beratungsbonus';

  // Main site navigation (external links)
  const mainNavItems = [
    { label: 'Lösungen', href: `${MAIN_SITE}/loesungen` },
    { label: 'Schulungen', href: `${MAIN_SITE}/schulungen` },
    { label: 'Preise', href: `${MAIN_SITE}/preise` },
    { label: 'Ablauf', href: `${MAIN_SITE}/ablauf` },
  ];

  // Beratungsbonus sub-navigation (local links with basePath)
  const beratungsbonusItems = [
    { label: 'Übersicht', href: '/beratungsbonus' },
    { label: 'Chat-Assistent', href: '/beratungsbonus/chat' },
    { label: 'Wissensdatenbank', href: '/beratungsbonus/wiki' },
    { label: 'Downloads', href: '/beratungsbonus/wiki/downloads' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - links to main site */}
          <a href={MAIN_SITE} className="flex items-center cursor-pointer">
            <Image src="/logo.png" alt="KI für KMU Logo" width={32} height={32} className="mr-2" />
            <span className="font-bold text-xl text-slate-900 tracking-tight">KI für KMU</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Main site links */}
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-orange-500 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Beratungsbonus dropdown */}
            <div className="relative">
              <button
                onClick={() => setBeratungsbonusOpen(!beratungsbonusOpen)}
                onBlur={() => setTimeout(() => setBeratungsbonusOpen(false), 150)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full font-medium transition-all ${
                  isHome || isChat || isWiki
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                Beratungsbonus
                <ChevronDown className={`w-4 h-4 transition-transform ${beratungsbonusOpen ? 'rotate-180' : ''}`} />
              </button>

              {beratungsbonusOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  {beratungsbonusItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setBeratungsbonusOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? 'bg-orange-50 text-orange-700 font-medium'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <GoogleCalendarButton
              text="Strategiegespräch"
              showIcon={false}
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Main site links */}
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-50"
              >
                {item.label}
              </a>
            ))}

            {/* Beratungsbonus section */}
            <div className="pt-2 mt-2 border-t border-slate-100">
              <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Beratungsbonus
              </p>
              {beratungsbonusItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'bg-orange-50 text-orange-700'
                      : 'text-slate-700 hover:text-orange-500 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <GoogleCalendarButton
                text="Kostenloses Strategiegespräch"
                showIcon={false}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md font-medium cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
