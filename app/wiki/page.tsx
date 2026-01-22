import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Wissensdatenbank | WKO Beratungsförderung',
  description: 'Alle Informationen zur WKO Beratungsförderung - Richtlinien, Prozesse und Anforderungen.',
};

export default function WikiIndexPage() {
  const allArticles = getAllArticles();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
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
      </section>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">

        {/* All Articles */}
        <section className="mb-12">
          <div className="divide-y divide-stone-200">
            {allArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wiki/${article.category}/${article.slug}`}
                className="group flex items-center justify-between py-4 hover:bg-white hover:px-3 hover:-mx-3 rounded-lg transition-all cursor-pointer"
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
        </section>

        {/* Downloads Link */}
        <section className="mb-12">
          <Link
            href="/wiki/downloads"
            className="flex items-center justify-between p-5 bg-white border border-stone-200 rounded-lg hover:border-orange-300 hover:bg-orange-50/50 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-stone-100 group-hover:bg-orange-100 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-stone-500 group-hover:text-orange-600 transition-colors" />
              </div>
              <div>
                <h3 className="font-medium text-stone-900 group-hover:text-orange-600 transition-colors">
                  Offizielle Quellen
                </h3>
                <p className="text-sm text-stone-500">
                  Basierend auf aktuellen WKO-Dokumenten und Richtlinien
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-stone-900 rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-white mb-1">
            Konkrete Frage?
          </h2>
          <p className="text-stone-400 mb-4 text-sm">
            Der KI-Assistent durchsucht alle Dokumente.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition-colors cursor-pointer"
          >
            Zum Chat
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
