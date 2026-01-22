import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, FileText, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface WikiPageProps {
  params: Promise<{ slug: string[] }>;
}

// Map of file slugs to human-readable titles and source documents
const articleInfo: Record<string, { title: string; sources: string[] }> = {
  '00-overview': {
    title: 'Programmübersicht',
    sources: ['Richtlinie Tiroler Beratungsförderung', 'Honorarrichtlinien'],
  },
  '01-funding-areas': {
    title: 'Förderbereiche',
    sources: ['Richtlinie Tiroler Beratungsförderung'],
  },
  '02-process': {
    title: 'Antragsprozess',
    sources: ['Beratungsablauf', 'Richtlinie Tiroler Beratungsförderung'],
  },
  '03-requirements': {
    title: 'Voraussetzungen',
    sources: ['Richtlinie Tiroler Beratungsförderung', 'Richtlinien für Beratungsaufträge', 'Berufsbild Unternehmensberatung'],
  },
  '04-deliverables': {
    title: 'Dokumentation & Berichte',
    sources: ['Richtlinien für Beratungsaufträge', 'Checkliste Digitalisierung'],
  },
  'richtlinie-beratungsfoerderung': {
    title: 'Förderrichtlinie',
    sources: ['Richtlinie Tiroler Beratungsförderung'],
  },
  'richtlinien-beratungsauftraege': {
    title: 'Beratungsaufträge',
    sources: ['Richtlinien für Beratungsaufträge'],
  },
  'honorarrichtlinien': {
    title: 'Honorarrichtlinien',
    sources: ['Honorarrichtlinien'],
  },
  'beratungsablauf': {
    title: 'Beratungsablauf',
    sources: ['Beratungsablauf'],
  },
  'checkliste-digitalisierung': {
    title: 'Checkliste Digitalisierung',
    sources: ['Checkliste Digitalisierung'],
  },
};

export async function generateStaticParams() {
  const knowledgeBasePath = path.join(process.cwd(), 'knowledge-base');
  const params: { slug: string[] }[] = [];

  // Wiki files
  const wikiFiles = await readdir(path.join(knowledgeBasePath, 'wiki'));
  for (const file of wikiFiles) {
    if (file.endsWith('.md')) {
      params.push({ slug: ['wiki', file.replace('.md', '')] });
    }
  }

  // Raw files
  const rawFiles = await readdir(path.join(knowledgeBasePath, 'raw'));
  for (const file of rawFiles) {
    if (file.endsWith('.md')) {
      params.push({ slug: ['raw', file.replace('.md', '')] });
    }
  }

  return params;
}

export async function generateMetadata({ params }: WikiPageProps) {
  const resolvedParams = await params;
  const [category, slug] = resolvedParams.slug;
  const info = articleInfo[slug] || { title: slug, sources: [] };

  return {
    title: `${info.title} | WKO Wissensdatenbank`,
    description: `Informationen zu ${info.title} - WKO Beratungsförderung Wissensdatenbank`,
  };
}

export default async function WikiArticlePage({ params }: WikiPageProps) {
  const resolvedParams = await params;
  const [category, slug] = resolvedParams.slug;

  if (!category || !slug || !['wiki', 'raw'].includes(category)) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'knowledge-base', category, `${slug}.md`);

  let content: string;
  try {
    content = await readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const info = articleInfo[slug] || { title: slug, sources: [] };

  // Get all articles for "related" section
  const knowledgeBasePath = path.join(process.cwd(), 'knowledge-base');
  const wikiFiles = await readdir(path.join(knowledgeBasePath, 'wiki'));
  const rawFiles = await readdir(path.join(knowledgeBasePath, 'raw'));

  const allArticles = [
    ...wikiFiles.filter(f => f.endsWith('.md')).map(f => ({ slug: f.replace('.md', ''), category: 'wiki' })),
    ...rawFiles.filter(f => f.endsWith('.md')).map(f => ({ slug: f.replace('.md', ''), category: 'raw' })),
  ];

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3)
    .map((a) => ({
      ...a,
      title: articleInfo[a.slug]?.title || a.slug,
    }));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-orange-50/30">
      <Header />

      {/* Hero Section */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Start
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/wiki" className="hover:text-white transition-colors">
              Wissensdatenbank
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-orange-400">{info.title}</span>
          </nav>

          {/* Title */}
          <div className="flex items-start gap-5">
            <div className="p-4 bg-orange-500/20 rounded-2xl">
              <FileText className="w-10 h-10 text-orange-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{info.title}</h1>
              {info.sources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-400">Basiert auf:</span>
                  {info.sources.map((source, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-lg"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
              <div className="prose prose-lg prose-slate max-w-none
                prose-headings:font-semibold prose-headings:text-slate-900
                prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-10 prose-h1:first:mt-0
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-4
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
                prose-h4:text-lg prose-h4:mb-3 prose-h4:mt-6
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5
                prose-li:text-slate-700 prose-li:my-1.5
                prose-ul:my-6 prose-ul:space-y-1
                prose-ol:my-6 prose-ol:space-y-1
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-table:border-collapse prose-table:w-full prose-table:my-8
                prose-th:bg-slate-100 prose-th:text-left prose-th:p-4 prose-th:border prose-th:border-slate-200 prose-th:font-semibold
                prose-td:p-4 prose-td:border prose-td:border-slate-200 prose-td:align-top
                prose-tr:even:bg-slate-50
                prose-hr:border-slate-200 prose-hr:my-10
                prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:my-8
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <Link
                href="/wiki"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Zurück zur Wissensdatenbank
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-4">Schnellzugriff</h3>
                <div className="space-y-2">
                  <Link
                    href="/chat"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    Frage im Chat stellen
                  </Link>
                  <Link
                    href="/wiki"
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50"
                  >
                    <span className="w-2 h-2 bg-slate-400 rounded-full" />
                    Alle Artikel anzeigen
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900 mb-4">Weitere Artikel</h3>
                  <div className="space-y-3">
                    {relatedArticles.map((article) => (
                      <Link
                        key={`${article.category}-${article.slug}`}
                        href={`/wiki/${article.category}/${article.slug}`}
                        className="block text-sm text-slate-600 hover:text-orange-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white">
                <h3 className="font-semibold mb-2">Noch Fragen?</h3>
                <p className="text-sm text-orange-100 mb-4">
                  Nutzen Sie unseren KI-Assistenten für schnelle Antworten.
                </p>
                <Link
                  href="/chat"
                  className="inline-block bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors"
                >
                  Zum Chat
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
