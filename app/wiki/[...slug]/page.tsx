import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, FileText, ChevronRight, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticle, getAllArticles, getSourceDocument } from '@/lib/articles';

interface WikiPageProps {
  params: Promise<{ slug: string[] }>;
}

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
  const sources = article?.sources || [];

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
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="p-3 sm:p-4 bg-orange-500/20 rounded-xl sm:rounded-2xl flex-shrink-0">
              <FileText className="w-7 h-7 sm:w-10 sm:h-10 text-orange-400" />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{title}</h1>
              {sources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-400">Basiert auf:</span>
                  {sources.map((source, idx) => {
                    const sourceDoc = getSourceDocument(source);
                    if (sourceDoc) {
                      return (
                        <a
                          key={idx}
                          href={sourceDoc.pdfPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-orange-600 text-slate-300 hover:text-white text-xs font-medium rounded-lg transition-colors group"
                        >
                          <Download className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                          {source}
                        </a>
                      );
                    }
                    return (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-lg"
                      >
                        {source}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Article Content */}
          <article className="lg:col-span-3">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-8 md:p-12">
              <div className="prose max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Custom link handling for internal navigation
                    a: ({ href, children, ...props }) => {
                      if (href && !href.startsWith('http') && !href.startsWith('mailto:')) {
                        return (
                          <Link href={href} className="text-orange-600 hover:text-orange-700 font-medium no-underline hover:underline transition-colors">
                            {children}
                          </Link>
                        );
                      }
                      return (
                        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                          {children}
                        </a>
                      );
                    },
                    // Custom table wrapper for responsive overflow
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-6 -mx-4 sm:mx-0">
                        <table className="min-w-full">{children}</table>
                      </div>
                    ),
                  }}
                >
                  {content.replace(/^#\s+[^\n]+\n*/, '').trim()}
                </ReactMarkdown>
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
