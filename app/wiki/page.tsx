import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, BookOpen, Compass, FileCheck, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: 'Wissensdatenbank | WKO Beratungsförderung',
  description: 'Alle Informationen zur WKO Beratungsförderung - Richtlinien, Prozesse und Anforderungen.',
};

// Topic-based categorization of articles
const topicCategories = [
  {
    id: 'grundlagen',
    title: 'Grundlagen',
    subtitle: 'Überblick, Förderbereiche und Richtlinien',
    icon: Compass,
    slugs: ['00-overview', '01-funding-areas', 'richtlinie-beratungsfoerderung'],
  },
  {
    id: 'prozess',
    title: 'Prozess & Ablauf',
    subtitle: 'Von der Antragstellung bis zur Auszahlung',
    icon: Settings,
    slugs: ['02-process', 'beratungsablauf'],
  },
  {
    id: 'anforderungen',
    title: 'Anforderungen & Dokumentation',
    subtitle: 'Voraussetzungen, Berichte und Abrechnungen',
    icon: FileCheck,
    slugs: ['03-requirements', '04-deliverables', 'richtlinien-beratungsauftraege', 'checkliste-digitalisierung', 'honorarrichtlinien'],
  },
];

export default function WikiIndexPage() {
  const allArticles = getAllArticles();

  // Create a map for quick article lookup by slug
  const articleMap = allArticles.reduce((acc, article) => {
    acc[article.slug] = article;
    return acc;
  }, {} as Record<string, typeof allArticles[0]>);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      {/* Hero - Enhanced with gradient */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-slate-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-12 relative">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/10 rounded-xl">
              <BookOpen className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight mb-1">
                Wissensdatenbank
              </h1>
              <p className="text-stone-500">
                {allArticles.length} Artikel zur WKO Beratungsförderung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content - with ambient background accents */}
      <main className="relative flex-1 max-w-2xl mx-auto px-6 py-12 w-full">
        {/* Background accents for content area */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Floating glow orbs */}
          <div className="absolute top-[15%] -right-20 w-[250px] h-[250px] bg-orange-300/6 rounded-full blur-3xl" />
          <div className="absolute top-[45%] -left-32 w-[300px] h-[300px] bg-stone-400/5 rounded-full blur-3xl" />
          <div className="absolute top-[75%] right-[10%] w-[200px] h-[200px] bg-orange-200/8 rounded-full blur-3xl" />

          {/* Diagonal accent lines */}
          <div
            className="absolute top-0 left-[20%] w-[1px] h-[60%] bg-gradient-to-b from-orange-400/8 via-orange-400/12 to-transparent"
            style={{ transform: 'rotate(-8deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-[30%] right-[15%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-stone-400/8 to-transparent"
            style={{ transform: 'rotate(12deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-[50%] left-[40%] w-[1px] h-[40%] bg-gradient-to-b from-transparent via-orange-300/10 to-transparent"
            style={{ transform: 'rotate(-5deg)', transformOrigin: 'top center' }}
          />

          {/* Horizontal accent lines */}
          <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-stone-300/15 to-transparent" />
          <div className="absolute top-[55%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-300/10 to-transparent" />

          {/* Dot pattern cluster */}
          <div className="absolute top-[10%] right-[5%] grid grid-cols-4 gap-3 opacity-30">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-stone-400/40" />
            ))}
          </div>
          <div className="absolute bottom-[20%] left-[8%] grid grid-cols-3 gap-2 opacity-25">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-orange-400/50" />
            ))}
          </div>
        </div>

        {/* Featured Guide - Minimal card */}
        <section className="relative z-10 mb-16">
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
                <div className="flex items-center gap-2 mt-3 text-sm text-stone-500">
                  <span>PDF</span>
                  <span>•</span>
                  <span>256 KB</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all mt-1" strokeWidth={1.5} />
            </div>
          </a>
        </section>

        {/* Topic-based Categories */}
        {topicCategories.map((category) => {
          const Icon = category.icon;
          const categoryArticles = category.slugs
            .map(slug => articleMap[slug])
            .filter(Boolean);

          return (
            <section key={category.id} className="relative z-10 mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-orange-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm font-medium text-stone-900 uppercase tracking-wider">
                    {category.title}
                  </h2>
                  <p className="text-xs text-stone-500 font-light">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Articles in this category */}
              <div className="space-y-1">
                {categoryArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/beratungsbonus/wiki/${article.category}/${article.slug}`}
                    className="group block bg-white hover:bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-stone-300 transition-all duration-200"
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
          );
        })}

        {/* Downloads - Subtle link */}
        <section className="relative z-10 mb-16">
          <Link
            href="/beratungsbonus/wiki/downloads"
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

        {/* CTA - Dark card with ambient accents */}
        <section className="text-center relative z-10">
          <div className="inline-block relative bg-stone-900 rounded-2xl p-8 shadow-xl overflow-hidden">
            {/* Dark card background accents */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-orange-500/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px] bg-orange-400/10 rounded-full blur-2xl" />
              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-orange-500/30 to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-orange-500/30 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-orange-500/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-orange-500/20 to-transparent" />
            </div>
            <h2 className="text-xl font-light text-white mb-2 relative">
              Noch Fragen?
            </h2>
            <p className="text-stone-500 font-light mb-6 max-w-xs relative">
              Der KI-Assistent durchsucht alle Dokumente.
            </p>
            <Link
              href="/beratungsbonus/chat"
              className="relative inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-900 px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg"
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
