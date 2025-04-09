'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { BiCalendarPlus } from 'react-icons/bi';
import clsx from 'clsx';

interface NavigationLink {
  name: string;
  href: string;
}

const links: NavigationLink[] = [
  { name: 'דף הבית', href: '#home' },
  { name: 'אודות', href: '#about' },
  { name: 'תפריט', href: '#services' },
  { name: 'גלריה', href: '#gallery' },
  { name: 'המלצות', href: '#testimonials' },
  { name: 'צור קשר', href: '#contact' },
];

const NavigationHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={clsx(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300 rtl',
        scrolled ? 'py-2' : 'py-4',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-neumorphic' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="flex items-center">
              <span className="text-2xl font-bold text-primary glassmorphism-text">
                מסעדה גמא
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 hover:text-primary transition-colors font-medium text-base neumorphic-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Booking Button */}
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#booking" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-neumorphic-button glassmorphism-button"
            >
              <BiCalendarPlus className="ml-2 text-lg" />
              הזמן שולחן
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <motion.button
              type="button"
              className="p-2 rounded-full text-gray-700 hover:text-primary focus:outline-none neumorphic-button"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism-panel"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary font-medium text-lg text-right rounded-lg neumorphic-mobile-link"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#booking"
                  className="flex items-center justify-center px-6 py-3 mt-2 rounded-full font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-neumorphic-button glassmorphism-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <BiCalendarPlus className="ml-2 text-lg" />
                  הזמן שולחן
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavigationHeader;