import { useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Recommender = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus on header div on mount to prevent input auto-focus
    headerRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} tabIndex={-1} className="text-center mb-8 outline-none">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Course Recommender</h1>
            </div>
            <p className="text-muted-foreground">
              Chat with our AI assistant to discover courses that match your interests
            </p>
          </div>

          <ChatBot />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Recommender;
