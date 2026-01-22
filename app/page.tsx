import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, FileText, Shield, Download, Sparkles, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Verfügbar',
      description: 'Sofortige Antworten zu Förderrichtlinien, jederzeit abrufbar',
    },
    {
      icon: FileText,
      title: 'Offizielle Quellen',
      description: 'Basierend auf aktuellen WKO-Dokumenten und Richtlinien',
    },
    {
      icon: Shield,
      title: 'Präzise Antworten',
      description: 'KI-gestützte Analyse für genaue und relevante Informationen',
    },
  ];

  const fundingFacts = [
    {
      label: 'Fördersatz Standard',
      value: '50%',
      detail: 'Für alle österreichischen KMU',
    },
    {
      label: 'Fördersatz Digitalisierung',
      value: '80%',
      detail: 'Für Digitalisierungsberatung',
    },
    {
      label: 'Max. Förderung',
      value: '4.000 €',
      detail: 'Bei 80% Fördersatz',
    },
  ];

  const processSteps = [
    'Antragstellung durch Berater',
    'WKO-Prüfung und Genehmigung',
    'Beratungsdurchführung',
    'Berichtserstellung',
    'Abrechnung und Auszahlung',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex-1 bg-gradient-to-br from-stone-50 via-white to-orange-50/30 overflow-hidden">
        {/* Layered glow system */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Primary orange glow - top right */}
          <div className="absolute -top-32 right-[10%] w-[600px] h-[600px] bg-orange-400/12 rounded-full blur-3xl" />
          {/* Secondary stone glow - bottom left */}
          <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-stone-400/8 rounded-full blur-3xl" />
          {/* Tertiary warm glow - center */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-200/15 rounded-full blur-3xl" />
          {/* Small accent glow - left side */}
          <div className="absolute top-[20%] left-[5%] w-[200px] h-[200px] bg-orange-300/10 rounded-full blur-2xl" />

          {/* Diagonal accent lines */}
          <div
            className="absolute top-0 left-[15%] w-[1px] h-[120%] bg-gradient-to-b from-transparent via-orange-400/15 to-transparent"
            style={{ transform: 'rotate(-12deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 left-[35%] w-[1px] h-[100%] bg-gradient-to-b from-transparent via-stone-400/10 to-transparent"
            style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[25%] w-[2px] h-[110%] bg-gradient-to-b from-transparent via-orange-300/12 to-transparent"
            style={{ transform: 'rotate(-5deg)', transformOrigin: 'top center' }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              KI-gestützter Förderungsassistent
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              WKO Beratungsförderung
              <span className="block text-orange-500 mt-2">verstehen</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Bis zu <strong className="text-slate-900 font-semibold">80% Förderung</strong> für Digitalisierungsberatung.
              Alle Infos zu Förderrichtlinien, Prozess und Anforderungen.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/chat"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Assistent starten
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-lg font-semibold rounded-full transition-all duration-200"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-stone-50/40 to-stone-100/50 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #78716c 1px, transparent 0)',
              backgroundSize: '28px 28px'
            }}
          />
          {/* Corner glows */}
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-orange-200/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-stone-300/10 rounded-full blur-3xl" />

          {/* Diagonal accent */}
          <div
            className="absolute top-0 right-[40%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-300/10 to-transparent"
            style={{ transform: 'rotate(15deg)', transformOrigin: 'top center' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm hover:bg-white rounded-2xl p-8 border border-stone-200/60 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Guide Promotion */}
      <section className="relative py-16 bg-gradient-to-br from-stone-100 via-stone-50 to-orange-50/20 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[450px] h-[450px] bg-orange-200/15 rounded-full blur-3xl" />
          <div className="absolute top-0 left-[20%] w-[250px] h-[250px] bg-stone-300/10 rounded-full blur-2xl" />

          {/* Diagonal lines */}
          <div
            className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-400/12 to-transparent"
            style={{ transform: 'rotate(-10deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-stone-400/8 to-transparent"
            style={{ transform: 'rotate(6deg)', transformOrigin: 'top center' }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-stone-200/70 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-2">
                Kunden-Leitfaden herunterladen
              </h2>
              <p className="text-stone-600 max-w-2xl">
                Kompakter Überblick für Unternehmen: Förderung, Ablauf und Voraussetzungen
                auf einen Blick. Der ideale Einstieg in das Förderprogramm.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/docs/kunden-leitfaden.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                PDF Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Facts */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Dark section accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Orange glow accents */}
          <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-orange-400/6 rounded-full blur-3xl" />
          {/* Cool tone balance */}
          <div className="absolute top-1/2 right-[40%] -translate-y-1/2 w-[300px] h-[300px] bg-slate-500/10 rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px'
            }}
          />

          {/* Diagonal accent lines */}
          <div
            className="absolute top-0 left-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-400/15 to-transparent"
            style={{ transform: 'rotate(-8deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[20%] w-[2px] h-full bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"
            style={{ transform: 'rotate(12deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 left-[60%] w-[1px] h-full bg-gradient-to-b from-transparent via-slate-400/8 to-transparent"
            style={{ transform: 'rotate(-4deg)', transformOrigin: 'top center' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Förderung auf einen Blick
          </h2>
          <p className="text-neutral-400 text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
            Die wichtigsten Kennzahlen zur WKO Beratungsförderung für Digitalisierungsprojekte
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {fundingFacts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-orange-500/40 hover:from-slate-800/90 hover:to-slate-700/50 transition-all duration-300 shadow-lg"
              >
                <p className="text-sm text-neutral-400 mb-1 sm:mb-2">{fact.label}</p>
                <p className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2 sm:mb-3">{fact.value}</p>
                <p className="text-sm text-neutral-300">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-20 bg-gradient-to-b from-white via-stone-50/30 to-stone-100/40 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Side glows */}
          <div className="absolute top-1/3 -left-32 w-[350px] h-[500px] bg-orange-200/12 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-[300px] h-[400px] bg-stone-300/10 rounded-full blur-3xl" />

          {/* Diagonal lines */}
          <div
            className="absolute top-0 left-[45%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-300/10 to-transparent"
            style={{ transform: 'rotate(-6deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-stone-400/8 to-transparent"
            style={{ transform: 'rotate(10deg)', transformOrigin: 'top center' }}
          />

          {/* Top line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-stone-300/40 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            Der Beratungsprozess
          </h2>
          <p className="text-neutral-600 text-center mb-16">
            Fünf Schritte von der Antragstellung bis zur Auszahlung
          </p>

          <div className="space-y-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 bg-white/70 backdrop-blur-sm hover:bg-orange-50/80 rounded-xl p-5 border border-stone-200/60 hover:border-orange-300 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-stone-200 group-hover:bg-orange-500 text-slate-700 group-hover:text-white rounded-full flex items-center justify-center font-semibold transition-all duration-200">
                  {idx + 1}
                </div>
                <p className="text-slate-800 group-hover:text-slate-900 font-medium transition-colors duration-200">
                  {step}
                </p>
                <CheckCircle2 className="ml-auto w-5 h-5 text-stone-300 group-hover:text-orange-500 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources: Wiki & Downloads */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-stone-100 via-stone-100 to-orange-50/30 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-orange-200/12 rounded-full blur-3xl" />
          <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-stone-300/10 rounded-full blur-3xl" />

          {/* Diagonal lines */}
          <div
            className="absolute top-0 left-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-300/10 to-transparent"
            style={{ transform: 'rotate(-8deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-stone-400/8 to-transparent"
            style={{ transform: 'rotate(5deg)', transformOrigin: 'top center' }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-3">
            Alle Informationen
          </h2>
          <p className="text-neutral-600 text-center mb-10 sm:mb-12 max-w-xl mx-auto">
            Umfassende Dokumentation und offizielle Unterlagen zum Förderprogramm
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Knowledge Base */}
            <Link
              href="/wiki"
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-stone-200/70 p-6 hover:border-stone-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-orange-100 transition-colors">
                  <BookOpen className="w-6 h-6 text-stone-600 group-hover:text-orange-600 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">
                    Wissensdatenbank
                  </h3>
                  <p className="text-sm text-stone-500 mb-3">
                    10 Artikel zu Richtlinien, Prozessen und Anforderungen
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 group-hover:text-orange-600 transition-colors">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Downloads */}
            <Link
              href="/wiki/downloads"
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-stone-200/70 p-6 hover:border-stone-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-100 rounded-lg group-hover:bg-orange-100 transition-colors">
                  <Download className="w-6 h-6 text-stone-600 group-hover:text-orange-600 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">
                    Offizielle Dokumente
                  </h3>
                  <p className="text-sm text-stone-500 mb-3">
                    PDFs, Formulare und Vorlagen zum Download
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 group-hover:text-orange-600 transition-colors">
                    Downloads ansehen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-50/80 via-white to-stone-50 overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-200/20 rounded-full blur-3xl" />
          {/* Side accents */}
          <div className="absolute top-0 left-[10%] w-[200px] h-[200px] bg-orange-300/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-[15%] w-[250px] h-[250px] bg-stone-300/10 rounded-full blur-2xl" />

          {/* Diagonal lines */}
          <div
            className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-400/12 to-transparent"
            style={{ transform: 'rotate(-10deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-300/10 to-transparent"
            style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            Fragen Sie den KI-Assistenten zu Förderrichtlinien, Anforderungen und dem Beratungsprozess.
          </p>
          <Link
            href="/chat"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Jetzt Assistent starten
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
