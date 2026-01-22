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
      <section className="relative flex-1 bg-gradient-to-br from-stone-50 via-white to-orange-50/40">
        {/* Sophisticated mesh gradient overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary accent glow - top right */}
          <div className="absolute -top-20 right-0 w-[700px] h-[700px] bg-gradient-radial from-orange-400/10 via-orange-300/5 to-transparent rounded-full blur-3xl" />
          {/* Secondary cool tone - bottom left */}
          <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-gradient-radial from-slate-400/8 via-slate-300/4 to-transparent rounded-full blur-3xl" />
          {/* Subtle center warmth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-orange-100/20 to-transparent rounded-full blur-3xl" />
          {/* Geometric accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
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
      <section id="features" className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-stone-50/50 to-stone-100/30 overflow-hidden">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #78716c 1px, transparent 0)', backgroundSize: '32px 32px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
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
      <section className="relative py-16 bg-gradient-to-br from-stone-100 via-stone-50 to-orange-50/30 overflow-hidden">
        {/* Accent glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-orange-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-200/80 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
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
        {/* Sophisticated dark gradient accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-slate-600/20 to-transparent rounded-full blur-3xl" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-orange-500/50 hover:from-slate-800/90 hover:to-slate-700/50 transition-all duration-300 shadow-lg"
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
      <section className="relative py-20 bg-gradient-to-b from-white via-stone-50/30 to-stone-100/50 overflow-hidden">
        {/* Diagonal accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        {/* Subtle side accents */}
        <div className="absolute top-1/2 -left-20 w-40 h-[600px] -translate-y-1/2 bg-gradient-to-r from-orange-100/30 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                className="group flex items-center gap-4 bg-slate-50 hover:bg-orange-50 rounded-xl p-5 border border-slate-200 hover:border-orange-300 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-slate-200 group-hover:bg-orange-500 text-slate-700 group-hover:text-white rounded-full flex items-center justify-center font-semibold transition-all duration-200">
                  {idx + 1}
                </div>
                <p className="text-slate-800 group-hover:text-slate-900 font-medium transition-colors duration-200">
                  {step}
                </p>
                <CheckCircle2 className="ml-auto w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources: Wiki & Downloads */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-stone-100 via-stone-100 to-orange-50/40 overflow-hidden">
        {/* Background accent */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-orange-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-stone-300 hover:shadow-md transition-all"
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
              className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-stone-300 hover:shadow-md transition-all"
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
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-white to-stone-50 overflow-hidden">
        {/* Radial accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-3xl pointer-events-none" />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
