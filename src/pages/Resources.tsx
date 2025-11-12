import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Video, BookOpen, Users, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Application Guide",
      description: "Step-by-step guide to applying to Uppsala University",
      link: "https://www.uu.se/en/admissions/apply",
    },
    {
      icon: Globe,
      title: "Universityadmissions.se",
      description: "Official Swedish university admissions portal",
      link: "https://www.universityadmissions.se/",
    },
    {
      icon: BookOpen,
      title: "Study in Sweden",
      description: "Comprehensive information about studying in Sweden",
      link: "https://studyinsweden.se/",
    },
    {
      icon: FileText,
      title: "Scholarship Information",
      description: "Browse available scholarships for international students",
      link: "https://www.uu.se/en/admissions/scholarships",
    },
    {
      icon: Users,
      title: "Student Life",
      description: "Learn about campus life, housing, and student organizations",
      link: "https://www.uu.se/en/students",
    },
    {
      icon: Video,
      title: "Virtual Campus Tour",
      description: "Explore Uppsala University campuses virtually",
      link: "https://www.uu.se/en/about-uu/campuses",
    },
    {
      icon: Globe,
      title: "International Students",
      description: "Resources specifically for international applicants",
      link: "https://www.uu.se/en/admissions/international",
    },
    {
      icon: FileText,
      title: "Exchange Studies",
      description: "Information for exchange and visiting students",
      link: "https://www.uu.se/en/students/exchange-studies",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Application Resources</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about applying to Uppsala University
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{resource.title}</CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Visit Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Need Help?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Our admissions team is here to support you throughout the application process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have specific questions about the application process, course requirements,
                or life at Uppsala University, don't hesitate to reach out.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">
                  Contact Admissions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
