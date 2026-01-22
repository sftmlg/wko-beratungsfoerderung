'use client';

import { useState } from 'react';
import { ChevronDown, Download, FileText, FileSpreadsheet, BookOpen, Users, ClipboardList } from 'lucide-react';

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
  iconId: 'BookOpen' | 'ClipboardList' | 'Users' | 'FileSpreadsheet';
  documents: Document[];
}

const iconMap = {
  BookOpen,
  ClipboardList,
  Users,
  FileSpreadsheet,
};

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

// Categorized official WKO documents
const documentCategories: DocumentCategory[] = [
  {
    id: 'grundlagen',
    title: 'Grundlagen & Richtlinien',
    description: 'Basis-Dokumente zum Förderprogramm',
    iconId: 'BookOpen',
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
    ],
  },
  {
    id: 'antrag',
    title: 'Antragstellung',
    description: 'Formulare für die Förderung',
    iconId: 'ClipboardList',
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
    iconId: 'Users',
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
    iconId: 'FileSpreadsheet',
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

export function DownloadAccordion() {
  // First category open by default
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    grundlagen: true,
  });

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {documentCategories.map((category) => {
        const IconComponent = iconMap[category.iconId];
        const isOpen = openCategories[category.id] ?? false;

        return (
          <div key={category.id} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
            {/* Category Header - Clickable */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center gap-3 px-5 py-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
            >
              <div className="p-2 bg-stone-100 rounded-lg flex-shrink-0">
                <IconComponent className="w-5 h-5 text-stone-600" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <h2 className="font-semibold text-stone-900">{category.title}</h2>
                <p className="text-sm text-stone-500">{category.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-stone-400">{category.documents.length} Dokumente</span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Documents List - Collapsible */}
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-stone-100 divide-y divide-stone-100">
                {category.documents.map((doc, idx) => (
                  <a
                    key={idx}
                    href={`/docs/${doc.filename}`}
                    download
                    className="flex items-center justify-between p-3 sm:p-4 hover:bg-stone-50 transition-colors group"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="p-1.5 sm:p-2 bg-stone-100 rounded group-hover:bg-orange-50 transition-colors flex-shrink-0">
                        {getFileIcon(doc.type)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-stone-900 font-medium text-sm group-hover:text-orange-600 transition-colors truncate">
                          {doc.title}
                        </h3>
                        <p className="text-stone-500 text-xs truncate hidden sm:block">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4 flex-shrink-0">
                      <span className={`hidden sm:inline text-xs px-2 py-0.5 rounded font-medium ${getTypeBadgeColor(doc.type)}`}>
                        {doc.type}
                      </span>
                      <span className="text-[10px] sm:text-xs text-stone-400">
                        {doc.size}
                      </span>
                      <Download className="w-4 h-4 text-stone-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
