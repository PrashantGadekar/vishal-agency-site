'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Process', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Testimonials', href: '#about' },
    { name: 'FAQs', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between max-w-6xl" style={{ justifyContent: 'center' }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-2xl font-bold text-white"
          style={{ marginRight: '5rem' }}
        >
          <a href="#home" className="flex items-center space-x-2">
            
            <div className="flex flex-col leading-tight">
              <span className="text-white">the</span>
              <span className="text-blue-400" style={{ justifyContent: 'center' }}>ViSocial</span>
            </div>
          </a>

       
        </motion.div>

        {/* Desktop Navigation and CTA in rounded border */}
        <div className="hidden md:flex items-center space-x-6 border border-white/20 rounded-full px-6 py-2 bg-black/30 backdrop-blur-sm">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -1 }}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-base tracking-wide font-medium"
            >
              {item.name}
            </motion.a>
          ))}
          
          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300"
          >
            Book a call
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
      >
        <div className="container mx-auto px-6 py-6 max-w-6xl">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="block text-gray-300 hover:text-white transition-colors duration-300 py-3 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 mt-4 inline-block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a call
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
