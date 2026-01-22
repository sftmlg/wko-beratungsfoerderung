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

// Source document metadata with PDF paths
export interface SourceDocument {
  title: string;
  description: string;
  pdfPath: string;
  type: 'PDF' | 'DOC' | 'DOCX';
  size: string;
}

// Map source names to their PDF files
export const sourceDocuments: Record<string, SourceDocument> = {
  'Richtlinie Tiroler Beratungsförderung': {
    title: 'Richtlinie Tiroler Beratungsförderung',
    description: 'Grundlegende Förderrichtlinie mit allen Regelungen.',
    pdfPath: '/docs/richtlinie-beratungsfoerderung.pdf',
    type: 'PDF',
    size: '1.1 MB',
  },
  'Honorarrichtlinien': {
    title: 'Honorarrichtlinien',
    description: 'Stundensätze und Abrechnungsregeln.',
    pdfPath: '/docs/honorarrichtlinien.pdf',
    type: 'PDF',
    size: '110 KB',
  },
  'Richtlinien für Beratungsaufträge': {
    title: 'Richtlinien für Beratungsaufträge',
    description: 'Detaillierte Vorgaben für die Durchführung.',
    pdfPath: '/docs/richtlinien-beratungsauftraege.pdf',
    type: 'PDF',
    size: '570 KB',
  },
  'Checkliste Digitalisierung': {
    title: 'Checkliste Digitalisierung',
    description: 'Prüfliste für Digitalisierungsberatungen.',
    pdfPath: '/docs/checkliste-digitalisierung.pdf',
    type: 'PDF',
    size: '90 KB',
  },
  'Berufsbild Unternehmensberatung': {
    title: 'Berufsbild Unternehmensberatung',
    description: 'Anforderungsprofil für Unternehmensberater.',
    pdfPath: '/docs/berufsbild-unternehmensberatung.pdf',
    type: 'PDF',
    size: '250 KB',
  },
  'Beratungsablauf': {
    title: 'Beratungsablauf',
    description: 'Der 9-Schritte-Prozess im Detail.',
    pdfPath: '/docs/beratungsablauf.pdf',
    type: 'PDF',
    size: '112 KB',
  },
};

// Additional documents for download page
export const additionalDocuments: SourceDocument[] = [
  {
    title: 'Ansuchen Tiroler Beratungsförderung',
    description: 'Antragsformular für Unternehmen.',
    pdfPath: '/docs/ansuchen-beratungsfoerderung.pdf',
    type: 'PDF',
    size: '120 KB',
  },
  {
    title: 'Beratungsprofil',
    description: 'Formular für Berater-Registrierung.',
    pdfPath: '/docs/beratungsprofil.pdf',
    type: 'PDF',
    size: '720 KB',
  },
  {
    title: 'Berater Annahmeerklärung',
    description: 'Auftragsrichtlinien-Bestätigung.',
    pdfPath: '/docs/berater-annahmeerklaerung.pdf',
    type: 'PDF',
    size: '450 KB',
  },
];

// Get source document by name
export function getSourceDocument(name: string) {
  return sourceDocuments[name] || null;
}

// Get all downloadable documents
export function getAllDocuments() {
  return [
    ...Object.values(sourceDocuments),
    ...additionalDocuments,
  ];
}
