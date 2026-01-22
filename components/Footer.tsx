import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Ambient glow orbs */}
        <div className="absolute -top-20 left-[10%] w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-slate-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-400/5 rounded-full blur-3xl" />

        {/* Diagonal accent lines */}
        <div
          className="absolute top-0 left-[20%] w-[1px] h-[80%] bg-gradient-to-b from-orange-500/15 via-orange-500/8 to-transparent"
          style={{ transform: 'rotate(-10deg)', transformOrigin: 'top center' }}
        />
        <div
          className="absolute top-[20%] right-[25%] w-[1px] h-[70%] bg-gradient-to-b from-transparent via-slate-500/10 to-transparent"
          style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
        />
        <div
          className="absolute top-[10%] left-[55%] w-[1px] h-[60%] bg-gradient-to-b from-transparent via-orange-400/8 to-transparent"
          style={{ transform: 'rotate(-5deg)', transformOrigin: 'top center' }}
        />

        {/* Horizontal accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-600/20 to-transparent" />

        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-orange-500/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-24 bg-gradient-to-b from-orange-500/30 to-transparent" />
        <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-orange-500/20 to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-orange-500/20 to-transparent" />

        {/* Dot pattern clusters */}
        <div className="absolute top-[15%] right-[8%] grid grid-cols-5 gap-4 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-orange-400/60" />
          ))}
        </div>
        <div className="absolute bottom-[25%] left-[5%] grid grid-cols-4 gap-3 opacity-15">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-slate-400/50" />
          ))}
        </div>

        {/* Grid pattern overlay - subtle */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <Link
                  href="/wiki"
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Wissensdatenbank
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki/downloads"
                  className="text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Offizielle Dokumente
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

        {/* Partner Logos */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-center text-[10px] text-neutral-500 uppercase tracking-wider mb-4">
            Förderprogramm von
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-wko.webp"
                alt="WKO Tirol"
                width={90}
                height={45}
                className="h-9 w-auto"
              />
              <span className="text-xs text-neutral-400">WKO Tirol</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-tirol.svg"
                alt="Land Tirol"
                width={90}
                height={45}
                className="h-9 w-auto"
              />
              <span className="text-xs text-neutral-400">Land Tirol</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800">
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
