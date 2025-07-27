"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import "@/app/index.css"

interface NavItem {
  path: string;
  label: string;
  subItems?: NavItem[];
}

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}

const NAV_ITEMS: NavItem[] = [
  { path: '/home', label: 'Home' },
  { 
    path: '/about', 
    label: 'About',
    // subItems: [
    //   { path: '/about#experience', label: 'Experience' },
    //   { path: '/about#education', label: 'Education' },
    //   { path: '/about#skills', label: 'Skills' }
    // ]
  },
  { path: '/project', label: 'Works' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
  { path: '/contributions', label: 'Contributions' }
];

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.path}
        className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
          isActive
            ? 'text-yellow-400'
            : 'text-gray-300 hover:text-yellow-400'
        } ${className || ''}`}
        onClick={onClick}
      >
        {item.label}
        {item.subItems && <ChevronDown className="w-4 h-4" />}
      </Link>
      {item.subItems && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50"
            >
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.path}
                  href={subItem.path}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-200"
                  onClick={onClick}
                >
                  {subItem.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};


const ResumeButton: React.FC<{ className?: string }> = ({ className }) => (
  <motion.a
    href="/Praise Afolabi.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded-md hover:bg-yellow-500 transition-all duration-300 flex items-center gap-2 ${className || ''}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Download className="w-4 h-4" />
    Resume
  </motion.a>
);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string): boolean => {
    if (path === '/' && pathname !== '/') {
      return false;
    }
    return pathname === path;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">

          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              href="/" 
              className="text-xl font-bold text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
            >
              Praise Afolabi
            </Link>
          </motion.div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                item={item}
                isActive={isActive(item.path)}
              />
            ))}
            <ResumeButton />
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-sm shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <NavLink
                    item={item}
                    isActive={isActive(item.path)}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base hover:bg-gray-800"
                  />
                  {item.subItems && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-yellow-400 hover:bg-gray-800 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <ResumeButton className="block w-full text-center mt-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;