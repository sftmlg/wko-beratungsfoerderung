import Image from 'next/image';
import { MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      {/* Hero Banner - Consistent with wiki pages */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-slate-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-8 relative">
          <div className="flex items-center gap-5">
            <div className="p-3 bg-white/10 rounded-xl">
              <MessageSquare className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight mb-1">
                KI-Assistent
              </h1>
              <p className="text-stone-400">
                Fragen Sie alles zur WKO Beratungsförderung
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>

      {/* Footer is hidden on chat page to maximize chat space */}
      {/* Uncomment if you want footer on chat page: */}
      {/* <Footer /> */}
    </div>
  );
}
