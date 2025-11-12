import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import coursesData from "@/data/courses.json";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
  courses?: any[];
}

interface ChatBotProps {
  initialMessage?: string;
  className?: string;
}

const ChatBot = ({ 
  initialMessage = "Hello! I'm your Uppsala University course recommender. Tell me about your interests, and I'll help you find the perfect courses. What field are you interested in studying?",
  className = ""
}: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: initialMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findRelevantCourses = (query: string) => {
    const keywords = query.toLowerCase().split(" ");
    const scoredCourses = coursesData.map((course) => {
      let score = 0;
      const searchText = `${course.course_name} ${course.keywords.join(" ")} ${course.faculty} ${course.course_content}`.toLowerCase();
      
      keywords.forEach((keyword) => {
        if (searchText.includes(keyword)) {
          score += 1;
        }
      });

      return { ...course, score };
    });

    return scoredCourses.filter(c => c.score > 0).sort((a, b) => b.score - a.score).slice(0, 3);
  };

  const generateResponse = (userMessage: string): { content: string; courses: any[] } => {
    const relevantCourses = findRelevantCourses(userMessage);
    
    if (relevantCourses.length === 0) {
      return {
        content: "I couldn't find specific courses matching those keywords. Could you try being more specific? For example, you could ask about 'AI and machine learning', 'sustainability', or 'biotechnology'.",
        courses: [],
      };
    }

    const responseText = `Based on your interests, I've found ${relevantCourses.length} relevant courses at Uppsala University. These programmes align well with what you're looking for:`;
    
    return {
      content: responseText,
      courses: relevantCourses,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const { content, courses } = generateResponse(input);
      const assistantMessage: Message = {
        role: "assistant",
        content,
        courses,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <Card className={`h-[600px] flex flex-col ${className}`}>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div key={index}>
            <div
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
            
            {message.courses && message.courses.length > 0 && (
              <div className="mt-4 space-y-3">
                {message.courses.map((course) => (
                  <Card key={course.id} className="p-4 hover-lift">
                    <h3 className="font-semibold mb-2">{course.course_name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {course.level} · {course.credits} credits · {course.teaching_form}
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" asChild>
                        <Link to={`/course/${course.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-4">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell me about your interests..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Try: "I'm interested in AI and machine learning" or "Show me sustainability courses"
        </p>
      </form>
    </Card>
  );
};

export default ChatBot;
