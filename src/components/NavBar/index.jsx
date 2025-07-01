import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when window is resized to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Add shadow effect on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full h-16 md:h-20 container mx-auto z-50 rounded-b-lg md:rounded-b-2xl max-sm:rounded-b-none ${
        scrolled ? "shadow-lg" : ""
      } bg-gray-900 text-white flex items-center justify-between px-4 md:px-10 fixed left-0 right-0 transition-all duration-300`}
    >
      {/* Logo */}
      <div>
        <Link
          to="/"
          className="flex items-center text-xl md:text-2xl font-thin space-x-2"
        >
          <Camera className="w-5 h-5 md:w-6 md:h-6 text-gray-300" />
          <span className="flex flex-col max-sm:flex-row items-center max-sm:gap-2 md:flex-row md:items-center">
            <span>
              Lumi<span className="font-semibold">na</span>
            </span>
            <span className="text-sm md:text-2xl max-sm:text-xl md:ml-2">Fotoğrafçılık</span>
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 lg:space-x-10">
        <Link to="/" className="hover:text-indigo-400 transition-colors">
          Anasayfa
        </Link>
        <Link
          to="/photograpy"
          className="hover:text-indigo-400 transition-colors"
        >
          Çekimlerimiz
        </Link>
        <Link to="/about" className="hover:text-indigo-400 transition-colors">
          Biz Kimiz ?
        </Link>
        <Link to="/contact" className="hover:text-indigo-400 transition-colors">
          İletişim
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed inset-0 top-16 bg-gray-900 bg-opacity-95 z-40 transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center pt-10 space-y-6 text-lg">
            <Link
              to="/"
              className="hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Anasayfa
            </Link>
            <Link
              to="/photograpy"
              className="hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Çekimlerimiz
            </Link>
            <Link
              to="/about"
              className="hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Biz Kimiz ?
            </Link>
            <Link
              to="/contact"
              className="hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
