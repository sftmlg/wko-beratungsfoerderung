import Link from 'next/link';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Wissensdatenbank | WKO Beratungsförderung',
  description: 'Alle Informationen zur WKO Beratungsförderung - Richtlinien, Prozesse und Anforderungen.',
};

export default function WikiIndexPage() {
  const allArticles = getAllArticles();

  // Split articles by category
  const wikiArticles = allArticles.filter(a => a.category === 'wiki');
  const rawArticles = allArticles.filter(a => a.category === 'raw');

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      {/* Hero - Ultra minimal */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 mb-6">
            <BookOpen className="w-8 h-8 text-orange-600" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl font-light text-stone-900 mb-3 tracking-tight">
            Wissensdatenbank
          </h1>
          <p className="text-stone-500 text-lg font-light">
            {allArticles.length} Artikel zur WKO Beratungsförderung
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-12 w-full">

        {/* Featured Guide - Minimal card */}
        <section className="mb-16">
          <a
            href="/docs/kunden-leitfaden.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors">
                <Download className="w-6 h-6 text-orange-600" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">
                  Kunden-Leitfaden
                </h2>
                <p className="text-stone-600 font-light leading-relaxed">
                  Kompakter Überblick für Unternehmen. Ideal als Einstieg in das Förderprogramm.
                </p>
                <div className="flex items-center gap-2 mt-3 text-sm text-stone-400">
                  <span>PDF</span>
                  <span>•</span>
                  <span>256 KB</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all mt-1" strokeWidth={1.5} />
            </div>
          </a>
        </section>

        {/* Articles - Simple list with visual breathing room */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-6">
            Grundlagen & Übersicht
          </h2>
          <div className="space-y-1">
            {wikiArticles.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/wiki/${article.category}/${article.slug}`}
                className="group block bg-white hover:bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-stone-300 transition-all duration-200"
style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-5 h-5 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Reference Documents - Collapsed by default for reduced cognitive load */}
        <section className="mb-16">
          <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden">
            <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-stone-50 transition-colors list-none">
              <div>
                <h2 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-1">
                  Referenzdokumente
                </h2>
                <p className="text-xs text-stone-500 font-light">
                  Offizielle WKO-Dokumente im Detail
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-400 font-light">
                  {rawArticles.length} Artikel
                </span>
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-200 transition-colors">
                  <ArrowRight className="w-4 h-4 text-stone-500 rotate-90 group-open:rotate-0 transition-transform" strokeWidth={1.5} />
                </div>
              </div>
            </summary>
            <div className="border-t border-stone-100 p-2">
              <div className="space-y-1">
                {rawArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/wiki/${article.category}/${article.slug}`}
                    className="group block hover:bg-stone-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-stone-900 text-sm mb-0.5 group-hover:text-orange-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs text-stone-600 font-light leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </section>

        {/* Downloads - Subtle link */}
        <section className="mb-16">
          <Link
            href="/wiki/downloads"
            className="group flex items-center justify-between p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 group-hover:bg-orange-50 flex items-center justify-center transition-colors">
                <Download className="w-5 h-5 text-stone-600 group-hover:text-orange-600 transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-stone-900 group-hover:text-orange-600 transition-colors">
                  Alle Downloads
                </h3>
                <p className="text-sm text-stone-600 font-light">
                  10 Dokumente · PDF, DOC, DOCX
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" strokeWidth={1.5} />
          </Link>
        </section>

        {/* CTA - Minimal dark card */}
        <section className="text-center">
          <div className="inline-block bg-stone-900 rounded-2xl p-8 shadow-xl">
            <h2 className="text-xl font-light text-white mb-2">
              Noch Fragen?
            </h2>
            <p className="text-stone-400 font-light mb-6 max-w-xs">
              Der KI-Assistent durchsucht alle Dokumente.
            </p>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-900 px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg"
            >
              Zum Chat
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
