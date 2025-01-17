"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import "@/app/index.css"

// Types
interface NavItem {
  path: string;
  label: string;
}

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/project', label: 'Works' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
];

// NavLink Component
const NavLink: React.FC<NavLinkProps> = ({ item, isActive, onClick, className }) => (
  <Link
    href={item.path}
    className={`text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-yellow-400'
        : 'text-gray-300 hover:text-yellow-400'
    } ${className || ''}`}
    onClick={onClick}
  >
    {item.label}
  </Link>
);

// Resume Button Component
const ResumeButton: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href="/Praise Afolabi.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={`px-4 py-2 text-sm font-medium text-black bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors duration-300 ${className || ''}`}
  >
    Resume
  </a>
);

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 h-20 md:h-auto backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
            >
              Praise Afolabi
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm shadow-lg">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              item={item}
              isActive={isActive(item.path)}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base hover:bg-gray-800"
            />
          ))}
          <ResumeButton className="block w-full text-center mt-2" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;