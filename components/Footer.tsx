import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '../data/company';

const MAIN_SITE = 'https://kiautomatisierung.info';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href={MAIN_SITE} className="flex items-center mb-4 text-white">
              <Image src="/logo.png" alt="KI für KMU Logo" width={24} height={24} className="mr-2" />
              <span className="font-bold text-lg">KI für KMU</span>
            </a>
            <p className="text-sm text-slate-400 mb-4">
              Sparring Partner für KI im Mittelstand. Persönlich. Vor Ort. DSGVO-konform.
            </p>
            {/* Security Logos */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <Image src="/gdpr.png" alt="DSGVO Konform" width={28} height={28} className="h-7 w-auto" />
                <span className="text-[9px] text-slate-400">DSGVO</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src="/iso.png" alt="ISO 27001" width={28} height={28} className="h-7 w-auto" />
                <span className="text-[9px] text-slate-400">ISO 27001</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src="/eu-ai-act.webp" alt="EU AI Act" width={56} height={22} className="h-5 w-auto" />
                <span className="text-[9px] text-slate-400">EU AI Act</span>
              </div>
            </div>
          </div>

          {/* Lösungen - links to main site */}
          <div>
            <p className="text-white font-semibold mb-4">Lösungen</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`${MAIN_SITE}/loesungen/dokumenten-ki`} className="hover:text-white transition-colors">
                  Dokumenten-KI
                </a>
              </li>
              <li>
                <a href={`${MAIN_SITE}/loesungen/chatbots`} className="hover:text-white transition-colors">
                  KI-Chatbots
                </a>
              </li>
              <li>
                <a href={`${MAIN_SITE}/loesungen/termin-automatisierung`} className="hover:text-white transition-colors">
                  Termin-Automatisierung
                </a>
              </li>
              <li>
                <a href={`${MAIN_SITE}/loesungen`} className="text-orange-400 hover:text-white transition-colors">
                  Alle Lösungen ansehen
                </a>
              </li>
            </ul>
          </div>

          {/* Beratungsbonus + Rechtliches */}
          <div>
            <p className="text-white font-semibold mb-4">Beratungsbonus</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/beratungsbonus" className="hover:text-white transition-colors">
                  Übersicht
                </Link>
              </li>
              <li>
                <Link href="/beratungsbonus/chat" className="hover:text-white transition-colors">
                  Chat-Assistent
                </Link>
              </li>
              <li>
                <Link href="/beratungsbonus/wiki" className="hover:text-white transition-colors">
                  Wissensdatenbank
                </Link>
              </li>
              <li>
                <Link href="/beratungsbonus/wiki/downloads" className="hover:text-white transition-colors">
                  Offizielle Dokumente
                </Link>
              </li>
              <li className="pt-2">
                <a href={`${MAIN_SITE}/impressum`} className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href={`${MAIN_SITE}/datenschutz`} className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-white font-semibold mb-4">Kontakt</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li>{companyInfo.address.city}, {companyInfo.address.country}</li>
              <li className="mt-3">
                <a
                  href={companyInfo.contact.schedulingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-slate-600 rounded-md px-3 py-1 text-xs hover:border-orange-400 hover:text-orange-400 transition-colors"
                >
                  Strategiegespräch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Certifications */}
        <div className="border-t border-slate-800 pt-6 pb-6">
          <p className="text-center text-[10px] text-slate-400 uppercase tracking-wider mb-4">
            Zertifizierter Unternehmensberater
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <Image src="/images/logo-wko.webp" alt="WKO Tirol" width={90} height={45} className="h-9 w-auto" />
              <span className="text-xs text-slate-400">WKO Tirol</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo-tirol.svg" alt="Land Tirol" width={90} height={45} className="h-9 w-auto" />
              <span className="text-xs text-slate-400">Land Tirol</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {companyInfo.legalName}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
