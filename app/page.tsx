import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, FileText, Shield } from 'lucide-react';
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
      <section className="relative flex-1 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-3xl" />
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
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Funding Facts */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Förderung auf einen Blick
          </h2>
          <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
            Die wichtigsten Kennzahlen zur WKO Beratungsförderung für Digitalisierungsprojekte
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {fundingFacts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <p className="text-sm text-neutral-400 mb-2">{fact.label}</p>
                <p className="text-5xl font-bold text-orange-500 mb-3">{fact.value}</p>
                <p className="text-sm text-neutral-300">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            Fragen Sie den KI-Assistenten zu Förderrichtlinien, Anforderungen und dem Beratungsprozess.
          </p>
          <Link
            href="/chat"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
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
