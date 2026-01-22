import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="KI für KMU Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">KI für KMU</span>
                <span className="text-xs text-neutral-400 leading-tight">WKO Förderung</span>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Ihr digitaler Assistent für die WKO Beratungsförderung. Schnell, präzise, immer verfügbar.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Ressourcen</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Chat-Assistent
                </Link>
              </li>
              <li>
                <a
                  href="https://kiautomatisierung.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200"
                >
                  KI für KMU Hauptseite
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Rechtliches</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Dieser Assistent bietet Informationen basierend auf offiziellen WKO-Richtlinien.
              Für verbindliche Auskünfte wenden Sie sich bitte direkt an die WKO.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500">
              {currentYear} KI für KMU. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://kiautomatisierung.info/impressum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-orange-500 transition-colors duration-200"
              >
                Impressum
              </a>
              <a
                href="https://kiautomatisierung.info/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-orange-500 transition-colors duration-200"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
