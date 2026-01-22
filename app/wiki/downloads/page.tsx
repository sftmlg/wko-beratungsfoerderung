import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, FileText, FileSpreadsheet, BookOpen, Users, ClipboardList, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dokumente & Downloads | WKO Beratungsförderung',
  description: 'Alle offiziellen Dokumente zur WKO Beratungsförderung zum Download - inkl. Kunden-Leitfaden.',
};

interface Document {
  title: string;
  description: string;
  filename: string;
  type: 'PDF' | 'DOC' | 'DOCX';
  size: string;
}

interface DocumentCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  documents: Document[];
}

// Categorized official WKO documents
const documentCategories: DocumentCategory[] = [
  {
    id: 'grundlagen',
    title: 'Grundlagen & Richtlinien',
    description: 'Basis-Dokumente zum Förderprogramm',
    icon: BookOpen,
    documents: [
      {
        title: 'Richtlinie Beratungsförderung',
        description: 'Grundlegende Förderrichtlinie mit allen Regelungen.',
        filename: 'richtlinie-beratungsfoerderung.pdf',
        type: 'PDF',
        size: '1.1 MB',
      },
      {
        title: 'Honorarrichtlinien',
        description: 'Stundensätze und Abrechnungsregeln.',
        filename: 'honorarrichtlinien.pdf',
        type: 'PDF',
        size: '110 KB',
      },
      {
        title: 'Beratungsablauf',
        description: 'Der 9-Schritte-Prozess als Flowchart.',
        filename: 'beratungsablauf.pdf',
        type: 'PDF',
        size: '112 KB',
      },
    ],
  },
  {
    id: 'antrag',
    title: 'Antragstellung',
    description: 'Formulare für die Förderung',
    icon: ClipboardList,
    documents: [
      {
        title: 'Ansuchen Beratungsförderung',
        description: 'Antragsformular für Unternehmen.',
        filename: 'ansuchen-beratungsfoerderung.pdf',
        type: 'PDF',
        size: '120 KB',
      },
      {
        title: 'Checkliste Digitalisierung',
        description: 'Prüfliste für Digitalisierungsberatungen.',
        filename: 'checkliste-digitalisierung.pdf',
        type: 'PDF',
        size: '90 KB',
      },
    ],
  },
  {
    id: 'berater',
    title: 'Für Berater',
    description: 'Registrierung und Auftragsrichtlinien',
    icon: Users,
    documents: [
      {
        title: 'Richtlinien Beratungsaufträge',
        description: 'Detaillierte Vorgaben für die Durchführung.',
        filename: 'richtlinien-beratungsauftraege.pdf',
        type: 'PDF',
        size: '570 KB',
      },
      {
        title: 'Beratungsprofil',
        description: 'Formular für Berater-Registrierung.',
        filename: 'beratungsprofil.pdf',
        type: 'PDF',
        size: '720 KB',
      },
      {
        title: 'Annahmeerklärung',
        description: 'Bestätigung der Auftragsrichtlinien.',
        filename: 'berater-annahmeerklaerung.pdf',
        type: 'PDF',
        size: '450 KB',
      },
    ],
  },
  {
    id: 'vorlagen',
    title: 'Vorlagen',
    description: 'Dokumente für die Abrechnung',
    icon: FileSpreadsheet,
    documents: [
      {
        title: 'Leistungsnachweis',
        description: 'Vorlage für Stundenerfassung.',
        filename: 'leistungsnachweis.doc',
        type: 'DOC',
        size: '48 KB',
      },
      {
        title: 'Rechnungsmuster',
        description: 'Vorlage für die Abrechnung.',
        filename: 'rechnungsmuster.docx',
        type: 'DOCX',
        size: '22 KB',
      },
    ],
  },
];

function getFileIcon(type: string) {
  switch (type) {
    case 'DOC':
    case 'DOCX':
      return <FileSpreadsheet className="w-4 h-4 text-blue-500" />;
    default:
      return <FileText className="w-4 h-4 text-red-500" />;
  }
}

function getTypeBadgeColor(type: string) {
  switch (type) {
    case 'DOC':
    case 'DOCX':
      return 'bg-blue-100 text-blue-700';
    default:
      return 'bg-red-100 text-red-700';
  }
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
            <Link href="/wiki" className="hover:text-white transition-colors">
              Wissensdatenbank
            </Link>
            <span>/</span>
            <span className="text-orange-400">Offizielle Quellen</span>
          </nav>

          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/10 rounded-xl">
              <Image
                src="/logo.png"
                alt="WKO Förderung"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight mb-1">
                Offizielle Quellen
              </h1>
              <p className="text-stone-400">
                Original-Dokumente der WKO Tirol zur Beratungsförderung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 w-full">

        {/* Featured: Kunden-Leitfaden */}
        <section className="mb-10">
          <a
            href="/docs/kunden-leitfaden.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border-2 border-orange-200 rounded-2xl p-6 hover:border-orange-300 hover:bg-orange-50/30 transition-all group"
          >
            <div className="flex items-start gap-5">
              <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                    Empfohlen
                  </span>
                </div>
                <h2 className="text-xl font-bold text-stone-900 mb-2">
                  Kunden-Leitfaden WKO Beratungsförderung
                </h2>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  Kompakter Überblick für Unternehmen: Alles Wichtige zu Förderung, Ablauf und
                  Voraussetzungen auf einen Blick. Ideal als Einstieg in das Förderprogramm.
                </p>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 group-hover:text-orange-700">
                    <Download className="w-4 h-4" />
                    PDF herunterladen
                  </span>
                  <span className="text-stone-400 text-xs">256 KB</span>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Info Box */}
        <div className="bg-stone-100 border border-stone-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-stone-700">
            Alle offiziellen Dokumente können direkt heruntergeladen werden.
            Stand: Januar 2025.
          </p>
        </div>

        {/* Document Categories */}
        <div className="space-y-8">
          {documentCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <section key={category.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                {/* Category Header */}
                <div className="bg-stone-50 border-b border-stone-200 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white border border-stone-200 rounded-lg">
                      <IconComponent className="w-5 h-5 text-stone-600" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-stone-900">{category.title}</h2>
                      <p className="text-sm text-stone-500">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Documents List */}
                <div className="divide-y divide-stone-100">
                  {category.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={`/docs/${doc.filename}`}
                      download
                      className="flex items-center justify-between p-4 hover:bg-stone-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 bg-stone-100 rounded group-hover:bg-orange-100 transition-colors">
                          {getFileIcon(doc.type)}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-stone-900 font-medium text-sm group-hover:text-orange-600 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-stone-500 text-xs truncate">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${getTypeBadgeColor(doc.type)}`}>
                          {doc.type}
                        </span>
                        <span className="text-xs text-stone-400">
                          {doc.size}
                        </span>
                        <Download className="w-4 h-4 text-stone-300 group-hover:text-orange-500 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-stone-900">11</div>
            <div className="text-xs text-stone-500">Dokumente</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-stone-900">5</div>
            <div className="text-xs text-stone-500">Kategorien</div>
          </div>
          <div className="bg-white border border-stone-200 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-500">2025</div>
            <div className="text-xs text-stone-500">Aktuell</div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10">
          <Link
            href="/wiki"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Wissensdatenbank
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
