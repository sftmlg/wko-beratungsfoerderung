import { readdir } from 'node:fs/promises';
import path from 'node:path';
import Link from 'next/link';
import { FileText, Download, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Wissensdatenbank | WKO Beratungsförderung',
  description: 'Alle Informationen zur WKO Beratungsförderung - Richtlinien, Prozesse und Anforderungen.',
};

// Article metadata with local document filenames
const articleInfo: Record<string, {
  title: string;
  description: string;
  documentFile?: string;
}> = {
  // Summary articles
  '00-overview': {
    title: 'Programmübersicht',
    description: 'Grundlagen, Kennzahlen und Kontaktdaten zum Förderprogramm.',
    documentFile: '00-overview.md',
  },
  '01-funding-areas': {
    title: 'Förderbereiche',
    description: 'Die sechs Kategorien und deren Fördersätze.',
    documentFile: '01-funding-areas.md',
  },
  '02-process': {
    title: 'Antragsprozess',
    description: 'Von der Antragstellung bis zur Auszahlung.',
    documentFile: '02-process.md',
  },
  '03-requirements': {
    title: 'Voraussetzungen',
    description: 'Anforderungen an Berater und Unternehmen.',
    documentFile: '03-requirements.md',
  },
  '04-deliverables': {
    title: 'Dokumentation',
    description: 'Berichtsstruktur und erforderliche Unterlagen.',
    documentFile: '04-deliverables.md',
  },
  // Reference documents
  'richtlinie-beratungsfoerderung': {
    title: 'Förderrichtlinie',
    description: 'Offizielle Richtlinie mit allen Detailregelungen.',
    documentFile: 'richtlinie-beratungsfoerderung.md',
  },
  'richtlinien-beratungsauftraege': {
    title: 'Beratungsaufträge',
    description: 'Durchführung, Vertraulichkeit und Abrechnung.',
    documentFile: 'richtlinien-beratungsauftraege.md',
  },
  'honorarrichtlinien': {
    title: 'Honorarrichtlinien',
    description: 'Stundensätze und Abrechnungsmodalitäten.',
    documentFile: 'honorarrichtlinien.md',
  },
  'beratungsablauf': {
    title: 'Beratungsablauf',
    description: 'Der 9-Schritte-Prozess im Detail.',
    documentFile: 'beratungsablauf.md',
  },
  'checkliste-digitalisierung': {
    title: 'Checkliste Digitalisierung',
    description: '4-Phasen-Methodik für Digitalisierungsberatungen.',
    documentFile: 'checkliste-digitalisierung.md',
  },
};

async function getArticles() {
  const knowledgeBasePath = path.join(process.cwd(), 'knowledge-base');

  const wikiFiles = await readdir(path.join(knowledgeBasePath, 'wiki'));
  const rawFiles = await readdir(path.join(knowledgeBasePath, 'raw'));

  const wikiArticles = wikiFiles
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace('.md', '');
      const info = articleInfo[slug] || { title: slug, description: '' };
      return { slug, category: 'wiki' as const, ...info };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const rawArticles = rawFiles
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.replace('.md', '');
      const info = articleInfo[slug] || { title: slug, description: '' };
      return { slug, category: 'raw' as const, ...info };
    });

  return { wikiArticles, rawArticles, totalCount: wikiArticles.length + rawArticles.length };
}

export default async function WikiIndexPage() {
  const { wikiArticles, rawArticles, totalCount } = await getArticles();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      {/* Hero - Minimal */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <p className="text-orange-400 text-sm font-medium tracking-wide uppercase mb-3">
            Wissensdatenbank
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            WKO Beratungsförderung
          </h1>
          <p className="text-stone-400 text-lg">
            {totalCount} Dokumente zu Richtlinien, Prozessen und Anforderungen.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">

        {/* Summaries Section */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6">
            Übersichten
          </h2>
          <div className="space-y-1">
            {wikiArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/wiki/${article.category}/${article.slug}`}
                className="group flex items-center justify-between py-4 px-1 border-b border-stone-200 hover:bg-white transition-colors cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-stone-900 font-medium group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-0.5 truncate">
                    {article.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </Link>
            ))}
          </div>
        </section>

        {/* Reference Documents Section */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6">
            Referenzdokumente
          </h2>
          <div className="space-y-1">
            {rawArticles.map((article) => (
              <div
                key={article.slug}
                className="flex items-center justify-between py-4 px-1 border-b border-stone-200"
              >
                <Link
                  href={`/wiki/${article.category}/${article.slug}`}
                  className="group flex-1 min-w-0 cursor-pointer"
                >
                  <h3 className="text-stone-900 font-medium group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-0.5 truncate">
                    {article.description}
                  </p>
                </Link>
                {article.documentFile && (
                  <a
                    href={`/documents/${article.documentFile}`}
                    download
                    className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-orange-600 transition-colors ml-4 cursor-pointer"
                    title="Dokument herunterladen"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">.md</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Documents Download Box */}
        <section className="bg-white border border-stone-200 rounded-lg p-6 mb-14">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <FileText className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-stone-900 mb-1">
                Alle Dokumente herunterladen
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                Die vollständigen Markdown-Dokumente für Ihre Unterlagen.
              </p>
              <div className="flex flex-wrap gap-2">
                {[...wikiArticles, ...rawArticles].map((article) => (
                  article.documentFile && (
                    <a
                      key={article.slug}
                      href={`/documents/${article.documentFile}`}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-orange-100 text-stone-600 hover:text-orange-700 text-xs font-medium rounded transition-colors cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      {article.title}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-900 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Konkrete Frage?
          </h2>
          <p className="text-stone-400 mb-6 text-sm">
            Der KI-Assistent durchsucht alle Dokumente und gibt präzise Antworten.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors cursor-pointer"
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
