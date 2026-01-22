import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>

      {/* Footer is hidden on chat page to maximize chat space */}
      {/* Uncomment if you want footer on chat page: */}
      {/* <Footer /> */}
    </div>
  );
}
