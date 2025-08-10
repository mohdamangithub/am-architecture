'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// Temporarily comment out framer-motion to test if it's causing the issue
// import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isMenuOpen = isOpen;
  const closeMenu = () => setIsOpen(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-muted/30 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:rotate-3 group-hover:scale-110">AM</div>
            <span className="heading-sm text-foreground">Architecture</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`body-sm transition-all hover:text-accent relative py-1 ${
                  pathname === link.href 
                    ? 'text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent' 
                    : 'text-foreground/80 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-accent/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full caption transition-all hover:shadow-md">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-muted/30 bg-background/95">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`body-md transition-colors hover:text-accent py-2 ${
                  pathname === link.href ? 'text-accent' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-full body-md transition-all hover:shadow-md text-center mt-2"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;