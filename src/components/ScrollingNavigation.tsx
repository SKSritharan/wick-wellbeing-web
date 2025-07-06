
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface ScrollingNavigationProps {
  sections: { id: string; label: string }[];
}

const ScrollingNavigation = ({ sections }: ScrollingNavigationProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      // Find the section that's currently in view
      let current = sectionElements[0]; // default to first section
      
      for (const section of sectionElements) {
        if (!section.element) continue;
        const rect = section.element.getBoundingClientRect();
        // Check if section is in view (with some offset from top)
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
        }
      }

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [sections, activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
            >
              Dr. Maithri Wickramasinghe
            </button>
            <span className="text-sm text-gray-600 ml-2 hidden sm:block">MBChB, MRCGP, FRACGP</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                  activeSection === section.id
                    ? 'text-blue-800'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-800 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors text-left rounded-md ${
                    activeSection === section.id
                      ? 'text-blue-800 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ScrollingNavigation;
