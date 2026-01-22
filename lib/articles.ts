// Shared article configuration for wiki pages

export interface ArticleInfo {
  title: string;
  description: string;
  category: 'wiki' | 'raw';
  order: number;
  sources: string[];
}

// All 10 articles with metadata
export const articles: Record<string, ArticleInfo> = {
  // Summary articles (wiki)
  '00-overview': {
    title: 'Programmübersicht',
    description: 'Grundlagen, Kennzahlen und Kontaktdaten zum Förderprogramm.',
    category: 'wiki',
    order: 1,
    sources: ['Richtlinie Tiroler Beratungsförderung', 'Honorarrichtlinien'],
  },
  '01-funding-areas': {
    title: 'Förderbereiche',
    description: 'Die sechs Kategorien und deren Fördersätze.',
    category: 'wiki',
    order: 2,
    sources: ['Richtlinie Tiroler Beratungsförderung'],
  },
  '02-process': {
    title: 'Antragsprozess',
    description: 'Von der Antragstellung bis zur Auszahlung.',
    category: 'wiki',
    order: 3,
    sources: ['Beratungsablauf', 'Richtlinie Tiroler Beratungsförderung'],
  },
  '03-requirements': {
    title: 'Voraussetzungen',
    description: 'Anforderungen an Berater und Unternehmen.',
    category: 'wiki',
    order: 4,
    sources: ['Richtlinie Tiroler Beratungsförderung', 'Richtlinien für Beratungsaufträge', 'Berufsbild Unternehmensberatung'],
  },
  '04-deliverables': {
    title: 'Dokumentation',
    description: 'Berichtsstruktur und erforderliche Unterlagen.',
    category: 'wiki',
    order: 5,
    sources: ['Richtlinien für Beratungsaufträge', 'Checkliste Digitalisierung'],
  },
  // Reference documents (raw)
  'beratungsablauf': {
    title: 'Beratungsablauf',
    description: 'Der 9-Schritte-Prozess im Detail.',
    category: 'raw',
    order: 6,
    sources: ['Beratungsablauf'],
  },
  'checkliste-digitalisierung': {
    title: 'Checkliste Digitalisierung',
    description: '4-Phasen-Methodik für Digitalisierungsberatungen.',
    category: 'raw',
    order: 7,
    sources: ['Checkliste Digitalisierung'],
  },
  'honorarrichtlinien': {
    title: 'Honorarrichtlinien',
    description: 'Stundensätze und Abrechnungsmodalitäten.',
    category: 'raw',
    order: 8,
    sources: ['Honorarrichtlinien'],
  },
  'richtlinie-beratungsfoerderung': {
    title: 'Förderrichtlinie',
    description: 'Offizielle Richtlinie mit allen Detailregelungen.',
    category: 'raw',
    order: 9,
    sources: ['Richtlinie Tiroler Beratungsförderung'],
  },
  'richtlinien-beratungsauftraege': {
    title: 'Beratungsaufträge',
    description: 'Durchführung, Vertraulichkeit und Abrechnung.',
    category: 'raw',
    order: 10,
    sources: ['Richtlinien für Beratungsaufträge'],
  },
};

// Get sorted list of all articles
export function getAllArticles() {
  return Object.entries(articles)
    .map(([slug, info]) => ({ slug, ...info }))
    .sort((a, b) => a.order - b.order);
}

// Get article by slug
export function getArticle(slug: string) {
  return articles[slug] || null;
}
