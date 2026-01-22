import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DownloadAccordion } from '@/components/DownloadAccordion';

export const metadata = {
  title: 'Dokumente & Downloads | WKO Beratungsförderung',
  description: 'Alle offiziellen Dokumente zur WKO Beratungsförderung zum Download - inkl. Kunden-Leitfaden.',
};

export default function DownloadsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-stone-50 to-white">
      <Header />

      {/* Hero - Enhanced with gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-slate-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-12 relative">
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
            <Link href="/wiki" className="hover:text-white transition-colors">
              Wissensdatenbank
            </Link>
            <span>/</span>
            <span className="text-orange-400">Offizielle Quellen</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/10 rounded-xl">
              <Image
                src="/logo.png"
                alt="WKO Förderung"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight mb-1">
                Offizielle Quellen
              </h1>
              <p className="text-stone-400">
                Original-Dokumente der WKO Tirol zur Beratungsförderung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full">

        {/* Featured: Kunden-Leitfaden */}
        <section className="mb-10">
          <a
            href="/docs/kunden-leitfaden.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-stone-100 rounded-lg group-hover:bg-stone-200 transition-colors flex-shrink-0">
                <FileText className="w-5 h-5 text-stone-500 group-hover:text-stone-700 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h2 className="font-semibold text-stone-900 group-hover:text-stone-700 transition-colors">
                    Kunden-Leitfaden
                  </h2>
                  <span className="text-[10px] font-medium bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded uppercase tracking-wide">
                    Empfohlen
                  </span>
                </div>
                <p className="text-stone-500 text-sm">
                  Kompakter Überblick für Unternehmen
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-stone-400">PDF · 256 KB</span>
                <Download className="w-4 h-4 text-stone-400 group-hover:text-stone-600 transition-colors" />
              </div>
            </div>
          </a>
        </section>

        {/* Info Box */}
        <div className="bg-stone-100 border border-stone-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-stone-700">
            Alle offiziellen Dokumente können direkt heruntergeladen werden.
            Stand: Januar 2025.
          </p>
        </div>

        {/* Document Categories - Accordion */}
        <DownloadAccordion />

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-stone-900">10</div>
            <div className="text-[10px] sm:text-xs text-stone-500">Dokumente</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-stone-900">4</div>
            <div className="text-[10px] sm:text-xs text-stone-500">Kategorien</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-stone-900">2025</div>
            <div className="text-[10px] sm:text-xs text-stone-500">Aktuell</div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10">
          <Link
            href="/wiki"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Wissensdatenbank
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
