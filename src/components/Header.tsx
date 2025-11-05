import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Problem", id: "problem" },
    { label: "Solution", id: "solution" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Metrics", id: "metrics" },
    { label: "Vision", id: "vision" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            AIiIMEX
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button variant="outline" asChild className="ml-4">
              <a href="https://demo.aiiimex.com" target="_blank" rel="noreferrer">
                View Demo
              </a>
            </Button>
            <Button
              variant="cta"
              onClick={() => scrollToSection("cta")}
              className="ml-2"
            >
              Join Early Access
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button variant="outline" asChild className="w-full mt-2">
                <a href="https://demo.aiiimex.com" target="_blank" rel="noreferrer">
                  View Demo
                </a>
              </Button>
              <Button
                variant="cta"
                onClick={() => scrollToSection("cta")}
                className="w-full"
              >
                Join Early Access
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
