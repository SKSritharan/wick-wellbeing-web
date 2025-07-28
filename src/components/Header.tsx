import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "/#home", label: "Home", sectionId: "home" },
    { to: "/#about", label: "About Dr. Wick", sectionId: "about" },
    { to: "/#services", label: "Services", sectionId: "services" },
    { to: "/#blog", label: "Invest in your Health", sectionId: "blog" },
    { to: "/#contact", label: "Contact", sectionId: "contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    // If we're on the blog page, navigate to home first, then scroll to section
    if (location.pathname.startsWith("/blog/")) {
      navigate("/");
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const isActive = (sectionId: string) => {
    // Check if we're on the blog page and the section is "blog"
    if (location.pathname.startsWith("/blog/") && sectionId === "blog") {
      return true;
    }
    // Check if we're on the home page and the hash matches the section
    if (location.pathname === "/" && location.hash === `#${sectionId}`) {
      return true;
    }
    // Default active state for home when no hash is present
    if (location.pathname === "/" && !location.hash && sectionId === "home") {
      return true;
    }
    return false;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
            >
              Dr. Maithri Wickramasinghe
            </NavLink>
            <span className="text-sm text-gray-600 ml-2 hidden sm:block">
              MBChB, MRCGP, FRACGP
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => handleNavigation(item.sectionId)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.sectionId)
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-gray-700 hover:text-blue-800"
                }`}
              >
                {item.label}
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
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => handleNavigation(item.sectionId)}
                  className={`px-3 py-2 text-sm font-medium text-left transition-colors ${
                    isActive(item.sectionId)
                      ? "text-blue-800 bg-blue-50"
                      : "text-gray-700 hover:text-blue-800 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
