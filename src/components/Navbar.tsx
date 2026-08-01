import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  if (!scrolled) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 md:px-8 pt-3 pb-2 transition-all duration-500 w-full max-w-full">
      <div className="max-w-7xl mx-auto rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 luxury-glass-nav shadow-2xl border border-white/10 flex items-center justify-between w-full">
        
        {/* Brand Name Pill Button */}
        <a
          href="#hero"
          className="btn-pink px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-2 shrink-0"
        >
          <span className="w-4 h-4 rounded-full bg-black text-[#88D900] flex items-center justify-center font-heading font-black text-[9px]">
            {PERSONAL_INFO.logoText}
          </span>
          <span className="truncate max-w-[120px] min-[400px]:max-w-[170px] sm:max-w-none">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-button font-bold text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenResume}
            className="btn-pink px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-1.5 shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-neon px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-1.5"
          >
            <span>Hire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#151515] border border-white/10 text-white hover:text-[#88D900] transition-colors shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto rounded-[20px] p-4 bg-[#151515] text-white border border-[#88D900]/40 shadow-2xl flex flex-col gap-1.5 w-full"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-button font-bold uppercase tracking-wider text-[#9CA3AF] hover:text-[#88D900] py-2 border-b border-white/5 transition-colors"
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
                className="btn-neon bg-[#EC4899] text-white font-extrabold text-xs uppercase px-3.5 py-1.5 flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-neon bg-[#88D900] text-black font-extrabold text-xs uppercase px-3 py-1.5"
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
