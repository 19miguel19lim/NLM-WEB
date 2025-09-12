import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DropdownMenu } from "@/components/ui/dropdown-menu-custom";
import { Link } from "react-router-dom";
import TrueNorthLogo from "@/assets/TrueNorth-Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const industriesItems = [
    {
      label: "Insurance Industry",
      href: "/insurance-industry",
      description:
        "Lead generation and customer acquisition for insurance companies",
    },
  ];

  const whyTrueNorthItems = [
    {
      label: "About",
      href: "/about",
      description: "Learn about our mission, team, and company culture",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
      description: "See what our clients say about working with TrueNorth",
    },
  ];

  const resourcesItems = [
    {
      label: "Blog",
      href: "/blog",
      description:
        "Industry insights, tips, and performance marketing strategies",
    },
    {
      label: "PPC FAQs",
      href: "/ppc-faqs",
      description: "Frequently asked questions about pay per call marketing",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-header">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src={TrueNorthLogo}
              alt="TrueNorth Logo"
              className="h-14 lg:h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <DropdownMenu trigger="Industries" items={industriesItems} />
            <DropdownMenu trigger="Why TrueNorth™" items={whyTrueNorthItems} />
            <DropdownMenu trigger="Resources" items={resourcesItems} />
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Button variant="nav-cta" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-surface-elevated transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-4 pt-4 border-t border-border">
            <button className="text-left text-foreground hover:text-accent transition-colors py-2">
              Industries
            </button>
            <button className="text-left text-foreground hover:text-accent transition-colors py-2">
              Why TrueNorth™
            </button>
            <button className="text-left text-foreground hover:text-accent transition-colors py-2">
              Resources
            </button>
            <div className="pt-4">
              <Button variant="nav-cta" size="lg" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
