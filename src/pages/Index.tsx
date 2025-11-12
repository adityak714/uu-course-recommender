import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, BookOpen, Users, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import ChatBot from "@/components/ChatBot";
import coursesData from "@/data/courses.json";
import heroImage from "@/assets/uppsala-uni.jpg";

const Index = () => {
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
              filter: "brightness(0.6)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Discover Your Future at Uppsala University
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in">
              Founded in 1477, Uppsala University offers world-class education across all major fields.
              Find your perfect course with our AI-powered recommender.
            </p>
            
            <div className="flex gap-4 animate-fade-in">
              <Button size="lg" asChild className="animate-pulse-glow">
                <Link to="/recommender">Start Exploring</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur">
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Chatbot Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Course Recommender</h2>
                </div>
                <p className="text-muted-foreground">
                  Chat with our AI assistant to discover courses that match your interests
                </p>
              </div>
              <ChatBot />
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                What would you like to study?
              </h2>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search courses, keywords, or faculty..."
                  className="pl-12 h-14 text-lg"
                  onFocus={() => {
                    window.location.href = "/recommender";
                  }}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Try: "AI", "Sustainability", "Engineering", or "Business"
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-card hover-lift">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">140+</h3>
                <p className="text-muted-foreground">Countries Represented</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card hover-lift">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">1000+</h3>
                <p className="text-muted-foreground">Courses Available</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card hover-lift">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl font-bold mb-2">50,000+</h3>
                <p className="text-muted-foreground">Students Enrolled</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
