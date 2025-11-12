import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contacts = [
    {
      department: "Admissions Office",
      description: "General admissions inquiries and application support",
      email: "admissions@uu.se",
      phone: "+46 18-471 00 00",
    },
    {
      department: "International Office",
      description: "Support for international students and exchange programmes",
      email: "international@uu.se",
      phone: "+46 18-471 28 00",
    },
    {
      department: "Faculty of Science and Technology",
      description: "Engineering, computer science, and natural sciences",
      email: "teknat@uu.se",
      phone: "+46 18-471 30 00",
    },
    {
      department: "Faculty of Social Sciences",
      description: "Business, economics, and social sciences",
      email: "samhvet@uu.se",
      phone: "+46 18-471 20 00",
    },
    {
      department: "Faculty of Medicine",
      description: "Medical and healthcare programmes",
      email: "med@uu.se",
      phone: "+46 18-471 40 00",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with the right department for your questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Main Campus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Box 256<br />
                  SE-751 05 Uppsala<br />
                  Sweden
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Main: +46 18-471 00 00<br />
                  Open weekdays<br />
                  09:00 - 16:00 CET
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  09:00 - 16:00 CET<br />
                  Closed weekends
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Department Contacts</h2>
            
            {contacts.map((contact, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{contact.department}</CardTitle>
                      <CardDescription>{contact.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-muted">
            <CardHeader>
              <CardTitle>Before You Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Many questions can be quickly answered through our comprehensive online resources:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Check our <a href="/resources" className="text-primary hover:underline">Resources</a> page for application guides</li>
                <li>Visit our <a href="/courses" className="text-primary hover:underline">Courses</a> page for programme information</li>
                <li>Use our <a href="/recommender" className="text-primary hover:underline">Course Recommender</a> for personalized suggestions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
