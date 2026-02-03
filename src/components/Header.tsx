import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-1 sm:py-2' : 'py-3 sm:py-4'}`}>
          {isHome ? (
            <motion.div
              className="flex items-center cursor-hover"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
            >
              <img 
                src="/Screenshot_2025-06-08_at_7.05.20_PM-removebg-preview.png" 
                alt="GoToRetreats" 
                className={`transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-16 sm:h-20'} w-auto`}
              />
            </motion.div>
          ) : (
            <Link to="/" className="flex items-center cursor-hover">
              <motion.img 
                src="/Screenshot_2025-06-08_at_7.05.20_PM-removebg-preview.png" 
                alt="GoToRetreats" 
                className={`transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-16 sm:h-20'} w-auto`}
                whileHover={{ scale: 1.05 }}
              />
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {['methodology', 'services', 'contact'].map((item) => (
              <motion.button
                key={item}
                className="text-gray-700 hover:text-teal-600 font-medium cursor-hover capitalize transition-colors text-sm xl:text-base"
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex space-x-3 xl:space-x-4">
            <Link to="/book-call">
              <motion.span
                className="inline-block px-3 xl:px-4 py-2 text-sm xl:text-base text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Audit
              </motion.span>
            </Link>
            <Link to="/book-call">
              <motion.span
                className="inline-block px-3 xl:px-4 py-2 text-sm xl:text-base bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Call
              </motion.span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden cursor-hover p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="py-4 space-y-4">
              {['methodology', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-teal-600 capitalize cursor-hover text-lg font-medium"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
              <div className="px-4 space-y-3 pt-2">
                <Link
                  to="/book-call"
                  className="block w-full text-center px-4 py-3 text-teal-600 border-2 border-teal-600 rounded-lg cursor-hover font-semibold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Free Audit
                </Link>
                <Link
                  to="/book-call"
                  className="block w-full text-center px-4 py-3 bg-teal-600 text-white rounded-lg cursor-hover font-semibold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;