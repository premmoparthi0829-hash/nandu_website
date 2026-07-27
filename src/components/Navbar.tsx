import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUpRight, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-12 pt-5 pb-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full px-6 sm:px-8 py-3.5 transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-[#2D6A4F]/90 dark:bg-[#121620]/90 shadow-2xl backdrop-blur-xl border border-white/20'
            : 'bg-white/15 dark:bg-[#121620]/50 backdrop-blur-md border border-white/25'
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-white text-[#2D6A4F] flex items-center justify-center font-serif font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
            NV
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-base tracking-wide text-white leading-none">
              NANDINI
            </span>
            <span className="font-sans text-[10px] text-white/80 font-bold tracking-widest uppercase mt-0.5">
              VADDEPALLI
            </span>
          </div>
        </a>

        {/* Floating Pill Navigation Header */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Hire Me White Pill Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full mint-btn-white font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#2D6A4F] transition-all"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto rounded-3xl p-6 bg-[#2D6A4F] text-white border border-white/20 shadow-2xl flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-bold uppercase tracking-wider text-white hover:text-black py-2 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-white/40"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 rounded-full bg-white text-[#2D6A4F] font-bold text-xs uppercase"
              >
                Hire Me ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
