import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            className="text-2xl text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
          >
            <span className="font-semibold">RAP</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Hire Me
            </Button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground/70 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-green-600 hover:bg-green-700 text-white w-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
