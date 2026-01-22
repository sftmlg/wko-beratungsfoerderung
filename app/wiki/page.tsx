import Link from 'next/link';
import { ArrowRight, Download, Sparkles, BookOpen, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AccordionItem } from '@/components/Accordion';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Wissensdatenbank | WKO Beratungsförderung',
  description: 'Alle Informationen zur WKO Beratungsförderung - Richtlinien, Prozesse und Anforderungen.',
};

export default function WikiIndexPage() {
  const allArticles = getAllArticles();

  // Split articles by category for better cognitive organization
  const wikiArticles = allArticles.filter(a => a.category === 'wiki');
  const rawArticles = allArticles.filter(a => a.category === 'raw');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-stone-50 to-white">
      <Header />

      {/* Hero - Enhanced with gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-slate-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 py-12 relative">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-orange-500/20 rounded-xl flex-shrink-0">
              <BookOpen className="w-10 h-10 text-orange-400" />
            </div>
            <div className="min-w-0">
              <p className="text-orange-400 text-sm font-medium tracking-wide uppercase mb-2">
                Wissensdatenbank
              </p>
              <h1 className="text-3xl font-semibold tracking-tight mb-2">
                WKO Beratungsförderung
              </h1>
              <p className="text-stone-400">
                {allArticles.length} Artikel zu Richtlinien, Prozessen und Anforderungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">

        {/* Featured: Kunden-Leitfaden - Subtle styling */}
        <section className="mb-10">
          <a
            href="/docs/kunden-leitfaden.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-5 border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-stone-100 rounded-xl group-hover:bg-orange-50 transition-colors">
                <Sparkles className="w-6 h-6 text-stone-500 group-hover:text-orange-500 transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded uppercase tracking-wide">
                    Empfohlen
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-stone-900 group-hover:text-orange-600 transition-colors">
                  Kunden-Leitfaden
                </h2>
                <p className="text-stone-500 text-sm">
                  Kompakter Überblick für Unternehmen
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-stone-400 hidden sm:inline">PDF</span>
                <Download className="w-5 h-5 text-stone-400 group-hover:text-orange-500 transition-colors" />
              </div>
            </div>
          </a>
        </section>

        {/* Article Categories - Accordion */}
        <section className="space-y-4 mb-10">
          {/* Wiki Articles - Grundlagen & Übersicht */}
          <AccordionItem
            title="Grundlagen & Übersicht"
            subtitle="Aufbereitete Zusammenfassungen"
            icon={<BookOpen className="w-4 h-4 text-orange-600" />}
            iconBg="bg-orange-50"
            defaultOpen={true}
          >
            <div className="divide-y divide-stone-100">
              {wikiArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/wiki/${article.category}/${article.slug}`}
                  className="group flex items-center justify-between p-4 hover:bg-orange-50/50 transition-all cursor-pointer"
                >
                  <div className="min-w-0">
                    <h3 className="text-stone-900 font-medium group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 text-sm">
                      {article.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </AccordionItem>

          {/* Raw Articles - Referenzdokumente */}
          <AccordionItem
            title="Referenzdokumente"
            subtitle="Offizielle WKO-Dokumente im Detail"
            icon={<FileText className="w-4 h-4 text-stone-600" />}
            iconBg="bg-stone-100"
            defaultOpen={false}
          >
            <div className="divide-y divide-stone-100">
              {rawArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/wiki/${article.category}/${article.slug}`}
                  className="group flex items-center justify-between p-4 hover:bg-stone-50 transition-all cursor-pointer"
                >
                  <div className="min-w-0">
                    <h3 className="text-stone-900 font-medium group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 text-sm">
                      {article.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </AccordionItem>
        </section>

        {/* Downloads Link */}
        <section className="mb-10">
          <Link
            href="/wiki/downloads"
            className="flex items-center justify-between p-5 bg-white border border-stone-200 rounded-xl hover:border-stone-300 hover:shadow-sm transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-stone-100 group-hover:bg-orange-50 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-stone-500 group-hover:text-orange-600 transition-colors" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900 group-hover:text-orange-600 transition-colors">
                  Alle Downloads & Vorlagen
                </h3>
                <p className="text-sm text-stone-500">
                  PDFs, Formulare und Vorlagen zum Download
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
          </Link>
        </section>

        {/* CTA - Enhanced */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-center overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-orange-500/15 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-lg font-semibold text-white mb-1">
              Konkrete Frage?
            </h2>
            <p className="text-stone-400 mb-4 text-sm">
              Der KI-Assistent durchsucht alle Dokumente.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2 rounded-lg font-medium transition-colors cursor-pointer"
            >
              Zum Chat
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
