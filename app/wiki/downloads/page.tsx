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

      {/* Hero - Enhanced with ambient accents */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Glow orbs */}
          <div className="absolute -top-20 right-[10%] w-[400px] h-[400px] bg-orange-500/12 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-slate-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-orange-400/8 rounded-full blur-3xl" />

          {/* Diagonal accent lines */}
          <div
            className="absolute top-0 left-[15%] w-[1px] h-[150%] bg-gradient-to-b from-orange-500/20 via-orange-500/10 to-transparent"
            style={{ transform: 'rotate(-12deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[30%] w-[1px] h-[120%] bg-gradient-to-b from-transparent via-slate-500/15 to-transparent"
            style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-[20%] left-[45%] w-[1px] h-[80%] bg-gradient-to-b from-transparent via-orange-400/10 to-transparent"
            style={{ transform: 'rotate(-5deg)', transformOrigin: 'top center' }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-20 h-[1px] bg-gradient-to-r from-orange-500/40 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-20 bg-gradient-to-b from-orange-500/40 to-transparent" />

          {/* Dot pattern */}
          <div className="absolute bottom-4 right-[8%] grid grid-cols-5 gap-3 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-orange-400/60" />
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
            <Link href="/wiki" className="hover:text-white transition-colors">
              Wissensdatenbank
            </Link>
            <span>/</span>
            <span className="text-orange-400">Download Portal</span>
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
                Download Portal
              </h1>
              <p className="text-stone-400">
                Original-Dokumente der WKO Tirol zur Beratungsförderung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content - with ambient accents */}
      <main className="relative flex-1 max-w-4xl mx-auto px-6 py-10 w-full">
        {/* Background accents for content area */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Floating glow orbs */}
          <div className="absolute top-[10%] -right-32 w-[300px] h-[300px] bg-orange-300/5 rounded-full blur-3xl" />
          <div className="absolute top-[40%] -left-40 w-[350px] h-[350px] bg-stone-400/4 rounded-full blur-3xl" />
          <div className="absolute top-[70%] right-[5%] w-[200px] h-[200px] bg-orange-200/6 rounded-full blur-3xl" />

          {/* Diagonal accent lines */}
          <div
            className="absolute top-0 left-[25%] w-[1px] h-[55%] bg-gradient-to-b from-orange-400/8 via-orange-400/10 to-transparent"
            style={{ transform: 'rotate(-6deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-[20%] right-[20%] w-[1px] h-[45%] bg-gradient-to-b from-transparent via-stone-400/6 to-transparent"
            style={{ transform: 'rotate(10deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-[45%] left-[50%] w-[1px] h-[35%] bg-gradient-to-b from-transparent via-orange-300/8 to-transparent"
            style={{ transform: 'rotate(-8deg)', transformOrigin: 'top center' }}
          />

          {/* Horizontal accent lines */}
          <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-stone-300/12 to-transparent" />
          <div className="absolute top-[50%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-300/8 to-transparent" />
          <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-stone-300/10 to-transparent" />

          {/* Dot pattern clusters */}
          <div className="absolute top-[8%] right-[3%] grid grid-cols-4 gap-3 opacity-25">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-stone-400/40" />
            ))}
          </div>
          <div className="absolute bottom-[15%] left-[5%] grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-orange-400/50" />
            ))}
          </div>
        </div>

        {/* Featured: Kunden-Leitfaden */}
        <section className="relative z-10 mb-10">
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
        <div className="relative z-10 bg-stone-100 border border-stone-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-stone-700">
            Alle offiziellen Dokumente können direkt heruntergeladen werden.
            Stand: Januar 2025.
          </p>
        </div>

        {/* Document Categories - Accordion */}
        <div className="relative z-10">
          <DownloadAccordion />
        </div>

        {/* Back Link */}
        <div className="relative z-10 mt-10">
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
