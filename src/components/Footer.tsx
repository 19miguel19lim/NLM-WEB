import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import TrueNorthLogo from "@/assets/TrueNorth-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-subtle border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center">
                <img
                  src={TrueNorthLogo}
                  alt="TrueNorth Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your strategic partner in all things growth. We're experts in
                acquiring customers and building lasting partnerships that drive
                real results.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-lg bg-surface-elevated hover:bg-accent/10 border border-border hover:border-accent/30 flex items-center justify-center transition-all duration-200 group">
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-surface-elevated hover:bg-accent/10 border border-border hover:border-accent/30 flex items-center justify-center transition-all duration-200 group">
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-surface-elevated hover:bg-accent/10 border border-border hover:border-accent/30 flex items-center justify-center transition-all duration-200 group">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-surface-elevated hover:bg-accent/10 border border-border hover:border-accent/30 flex items-center justify-center transition-all duration-200 group">
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Performance Marketing",
                  "Customer Acquisition",
                  "Growth Strategy",
                  "Digital Advertising",
                  "Conversion Optimization",
                  "Analytics & Reporting",
                ].map((service) => (
                  <li key={service}>
                    <button className="text-muted-foreground hover:text-accent transition-colors text-left">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Industries
              </h3>
              <ul className="space-y-3">
                {["Insurance", "Debt Relief", "Home Improvements"].map(
                  (industry) => (
                    <li key={industry}>
                      <button className="text-muted-foreground hover:text-accent transition-colors text-left">
                        {industry}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <button className="text-foreground hover:text-accent transition-colors">
                      hello@truenorthmedia.llc
                    </button>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <button className="text-foreground hover:text-accent transition-colors">
                      +1 (555) 123-4567
                    </button>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">Office</p>
                    <p className="text-foreground">
                      123 Business Ave
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="hero" className="w-full">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Stay Updated with Growth Insights
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Get the latest marketing strategies and growth tips delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full sm:w-auto px-4 py-2 rounded-lg bg-surface-elevated border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder-muted-foreground transition-all duration-200"
              />
              <Button variant="default" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 TrueNorth. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-accent transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
