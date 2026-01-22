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
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Glow orbs */}
          <div className="absolute -top-10 right-[10%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-slate-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] bg-orange-400/6 rounded-full blur-3xl" />

          {/* Diagonal accent lines */}
          <div
            className="absolute top-0 left-[20%] w-[1px] h-[150%] bg-gradient-to-b from-orange-500/15 via-orange-500/8 to-transparent"
            style={{ transform: 'rotate(-10deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-0 right-[35%] w-[1px] h-[120%] bg-gradient-to-b from-transparent via-slate-500/10 to-transparent"
            style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
          />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-orange-500/35 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-orange-500/35 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-8 relative z-10">
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

      <main className="relative flex-1 overflow-hidden">
        {/* Background accents for chat area */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Subtle ambient glows */}
          <div className="absolute top-[10%] -right-20 w-[300px] h-[300px] bg-orange-300/4 rounded-full blur-3xl" />
          <div className="absolute top-[40%] -left-32 w-[350px] h-[350px] bg-stone-400/3 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-orange-200/5 rounded-full blur-3xl" />

          {/* Very subtle diagonal lines */}
          <div
            className="absolute top-0 left-[15%] w-[1px] h-[60%] bg-gradient-to-b from-stone-400/5 via-stone-400/8 to-transparent"
            style={{ transform: 'rotate(-6deg)', transformOrigin: 'top center' }}
          />
          <div
            className="absolute top-[20%] right-[20%] w-[1px] h-[50%] bg-gradient-to-b from-transparent via-orange-300/5 to-transparent"
            style={{ transform: 'rotate(8deg)', transformOrigin: 'top center' }}
          />

          {/* Horizontal accent */}
          <div className="absolute top-[35%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-stone-300/6 to-transparent" />
        </div>
        <div className="relative z-10 h-full">
          <ChatInterface />
        </div>
      </main>

      {/* Footer is hidden on chat page to maximize chat space */}
      {/* Uncomment if you want footer on chat page: */}
      {/* <Footer /> */}
    </div>
  );
}
