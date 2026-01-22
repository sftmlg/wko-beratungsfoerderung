import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Offizielle Quellen | WKO Beratungsförderung',
  description: 'Original-Dokumente der WKO Tirol zur Beratungsförderung.',
};

// Official WKO documents with external links
const officialDocuments = [
  {
    title: 'Richtlinie Tiroler Beratungsförderung',
    description: 'Grundlegende Förderrichtlinie mit allen Regelungen.',
    type: 'PDF',
    size: '~1.1 MB',
  },
  {
    title: 'Ansuchen Tiroler Beratungsförderung',
    description: 'Antragsformular für Unternehmen.',
    type: 'PDF',
    size: '~120 KB',
  },
  {
    title: 'Richtlinien für Beratungsaufträge',
    description: 'Detaillierte Vorgaben für die Durchführung.',
    type: 'PDF',
    size: '~570 KB',
  },
  {
    title: 'Honorarrichtlinien',
    description: 'Stundensätze und Abrechnungsregeln.',
    type: 'PDF',
    size: '~110 KB',
  },
  {
    title: 'Beratungsablauf',
    description: 'Der 9-Schritte-Prozess als Flowchart.',
    type: 'PDF',
    size: '~112 KB',
  },
  {
    title: 'Beratungsprofil',
    description: 'Formular für Berater-Registrierung.',
    type: 'PDF',
    size: '~720 KB',
  },
  {
    title: 'Berater Annahmeerklärung',
    description: 'Auftragsrichtlinien-Bestätigung.',
    type: 'PDF',
    size: '~450 KB',
  },
  {
    title: 'Checkliste Digitalisierung',
    description: 'Prüfliste für Digitalisierungsberatungen.',
    type: 'PDF',
    size: '~90 KB',
  },
  {
    title: 'Leistungsnachweis',
    description: 'Vorlage für Stundenerfassung.',
    type: 'DOC',
    size: '~48 KB',
  },
  {
    title: 'Rechnungsmuster',
    description: 'Vorlage für die Abrechnung.',
    type: 'DOCX',
    size: '~22 KB',
  },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-6">
            <Link href="/wiki" className="hover:text-white transition-colors">
              Wissensdatenbank
            </Link>
            <span>/</span>
            <span className="text-orange-400">Offizielle Quellen</span>
          </nav>
          <h1 className="text-3xl font-semibold tracking-tight mb-2">
            Offizielle Quellen
          </h1>
          <p className="text-stone-400">
            Original-Dokumente der WKO Tirol zur Beratungsförderung.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-10 w-full">

        {/* Info Box */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-orange-800">
            Die offiziellen PDF-Dokumente werden von der WKO Tirol bereitgestellt
            und können über deren Website heruntergeladen werden.
          </p>
        </div>

        {/* Documents List */}
        <section className="mb-10">
          <div className="bg-white border border-stone-200 rounded-lg divide-y divide-stone-100">
            {officialDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 bg-stone-100 rounded">
                    <FileText className="w-4 h-4 text-stone-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-stone-900 font-medium text-sm">
                      {doc.title}
                    </h3>
                    <p className="text-stone-500 text-xs truncate">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-stone-400 ml-4 flex-shrink-0">
                  {doc.type} · {doc.size}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* External Link */}
        <section className="mb-10">
          <a
            href="https://www.wko.at/tirol/beratung-foerderung"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-orange-500/20 rounded-lg">
                <Download className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-medium">
                  Alle Dokumente herunterladen
                </h3>
                <p className="text-sm text-stone-400">
                  Zur offiziellen WKO Tirol Download-Seite
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-500 group-hover:text-orange-400 transition-colors" />
          </a>
        </section>

        {/* Back Link */}
        <Link
          href="/wiki"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Wissensdatenbank
        </Link>
      </main>

      <Footer />
    </div>
  );
}
