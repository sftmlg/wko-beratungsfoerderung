import Header from '@/components/Header';
import ChatInterface from '@/components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

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
