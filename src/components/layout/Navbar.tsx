import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categories submenu items
  const categories = [
    { name: 'Entertainment', slug: 'entertainment' },
    { name: 'Gaming', slug: 'gaming' },
    { name: 'Fashion', slug: 'fashion' },
    { name: 'Comedy', slug: 'comedy' },
    { name: 'Education', slug: 'education' },
    { name: 'Fitness', slug: 'fitness' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10">
            <Logo size={36} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/buy" 
              className="font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Buy Accounts
            </Link>
            <Link 
              to="/sell" 
              className="font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Sell Account
            </Link>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-black rounded-xl shadow-lg py-2 z-50"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/category/${category.slug}`}
                      className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Buttons and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/buy" className="btn-primary">
              Find Accounts
            </Link>
            <Link to="/sell" className="btn-outline">
              Sell Account
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              className="z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 bg-white dark:bg-black z-40 pt-20"
        >
          <div className="container-custom py-8 flex flex-col space-y-6">
            <Link 
              to="/buy" 
              className="text-xl font-medium border-b border-gray-100 dark:border-gray-800 pb-2"
            >
              Buy Accounts
            </Link>
            <Link 
              to="/sell" 
              className="text-xl font-medium border-b border-gray-100 dark:border-gray-800 pb-2"
            >
              Sell Account
            </Link>
            
            <div className="space-y-3">
              <h3 className="text-xl font-medium">Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/category/${category.slug}`}
                    className="hover:text-gray-600 dark:hover:text-gray-300 py-2"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="pt-4 flex flex-col space-y-3">
              <Link to="/buy" className="btn-primary w-full justify-center">
                Find Accounts
              </Link>
              <Link to="/sell" className="btn-outline w-full justify-center">
                Sell Account
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;