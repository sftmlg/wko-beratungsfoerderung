import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, FileText, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticle, getAllArticles } from '@/lib/articles';

interface WikiPageProps {
  params: Promise<{ slug: string[] }>;
}

// Source documents for each article (detail page specific)
const articleSources: Record<string, string[]> = {
  '00-overview': ['Richtlinie Tiroler Beratungsförderung', 'Honorarrichtlinien'],
  '01-funding-areas': ['Richtlinie Tiroler Beratungsförderung'],
  '02-process': ['Beratungsablauf', 'Richtlinie Tiroler Beratungsförderung'],
  '03-requirements': ['Richtlinie Tiroler Beratungsförderung', 'Richtlinien für Beratungsaufträge', 'Berufsbild Unternehmensberatung'],
  '04-deliverables': ['Richtlinien für Beratungsaufträge', 'Checkliste Digitalisierung'],
  'richtlinie-beratungsfoerderung': ['Richtlinie Tiroler Beratungsförderung'],
  'richtlinien-beratungsauftraege': ['Richtlinien für Beratungsaufträge'],
  'honorarrichtlinien': ['Honorarrichtlinien'],
  'beratungsablauf': ['Beratungsablauf'],
  'checkliste-digitalisierung': ['Checkliste Digitalisierung'],
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
  const article = getArticle(slug);
  const title = article?.title || slug;

  return {
    title: `${title} | WKO Wissensdatenbank`,
    description: article?.description || `Informationen zu ${title} - WKO Beratungsförderung Wissensdatenbank`,
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

  const article = getArticle(slug);
  const title = article?.title || slug;
  const sources = articleSources[slug] || [];

  // Get related articles from shared config
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

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
            <span className="text-orange-400">{title}</span>
          </nav>

          {/* Title */}
          <div className="flex items-start gap-5">
            <div className="p-4 bg-orange-500/20 rounded-2xl">
              <FileText className="w-10 h-10 text-orange-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
              {sources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-400">Basiert auf:</span>
                  {sources.map((source, idx) => (
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
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10 md:p-14">
              <div className="prose prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h1:text-2xl prose-h1:sm:text-3xl prose-h1:mb-6 prose-h1:mt-0 prose-h1:first:mt-0 prose-h1:leading-tight
                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mb-5 prose-h2:mt-14 prose-h2:pt-8 prose-h2:border-t prose-h2:border-slate-200 prose-h2:first:mt-0 prose-h2:first:pt-0 prose-h2:first:border-0
                prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-slate-800
                prose-h4:text-base prose-h4:sm:text-lg prose-h4:mb-3 prose-h4:mt-8 prose-h4:text-slate-700
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-[15px] prose-p:sm:text-base
                prose-li:text-slate-600 prose-li:my-2 prose-li:text-[15px] prose-li:sm:text-base prose-li:leading-relaxed
                prose-ul:my-5 prose-ul:pl-5
                prose-ol:my-5 prose-ol:pl-5
                prose-strong:text-slate-800 prose-strong:font-semibold
                prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-a:transition-colors
                prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:text-sm
                prose-th:bg-slate-50 prose-th:text-left prose-th:p-3 prose-th:sm:p-4 prose-th:border prose-th:border-slate-200 prose-th:font-semibold prose-th:text-slate-700
                prose-td:p-3 prose-td:sm:p-4 prose-td:border prose-td:border-slate-200 prose-td:align-top prose-td:text-slate-600
                prose-tr:even:bg-slate-50/50
                prose-hr:border-slate-100 prose-hr:my-0 prose-hr:hidden
                prose-code:bg-orange-50 prose-code:text-orange-700 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
                prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:bg-orange-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:my-8 prose-blockquote:rounded-r-lg
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
