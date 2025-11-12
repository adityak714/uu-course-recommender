import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/uppsala-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Uppsala University" className="h-12 w-auto mb-4" />
            <p className="text-sm text-secondary-foreground/80">
              Founded in 1477, Uppsala University is a comprehensive research university
              ranked among the world's top 100 universities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recommender" className="hover:text-accent-foreground transition-colors">
                  Course Recommender
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-accent-foreground transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-accent-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Box 256, SE-751 05 Uppsala, Sweden</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+46184710000" className="hover:text-accent-foreground transition-colors">
                  +46 18-471 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@uu.se" className="hover:text-accent-foreground transition-colors">
                  info@uu.se
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Applicants</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.uu.se/en/admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="https://www.uu.se/en/admissions/scholarships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="https://www.uu.se/en/students/exchange-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Exchange Studies
                </a>
              </li>
              <li>
                <a
                  href="https://www.uu.se/en/about-uu/campuses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-foreground transition-colors"
                >
                  Campus Life
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Uppsala University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
