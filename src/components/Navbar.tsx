import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'testimonials', 'contact'];
      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.15) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Hide header in Home (#hero) and About (#about) sections as requested
  const isHiddenSection = activeSection === 'hero' || activeSection === 'about';

  if (!scrolled || isHiddenSection) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 md:px-8 pt-3 pb-2 transition-all duration-500 w-full max-w-full">
      <div className="max-w-7xl mx-auto rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 luxury-glass-nav shadow-2xl border border-white/15 backdrop-blur-xl bg-black/80 flex items-center justify-between w-full">
        
        {/* Brand Name Pill Button */}
        <a
          href="#hero"
          className="btn-pink px-2.5 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="w-4 h-4 rounded-full bg-black text-[#88D900] flex items-center justify-center font-heading font-black text-[9px] shrink-0">
            {PERSONAL_INFO.logoText}
          </span>
          <span className="whitespace-nowrap">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-button font-extrabold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#F472B6] text-black shadow-[0_0_15px_rgba(244,114,182,0.6)] scale-105'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenResume}
            className="btn-pink px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-1.5 shrink-0 cursor-pointer hover:scale-105 transition-transform"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="btn-neon px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
          >
            <span>Hire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#151515] border border-white/10 text-white hover:text-[#88D900] transition-colors shrink-0 cursor-pointer"
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-button font-bold uppercase tracking-wider py-2 border-b border-white/5 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#F472B6] font-black' : 'text-[#9CA3AF] hover:text-[#88D900]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F472B6] shadow-[0_0_8px_#F472B6]" />}
                </a>
              );
            })}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn-neon bg-[#EC4899] text-white font-extrabold text-xs uppercase px-3.5 py-1.5 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-neon bg-[#88D900] text-black font-extrabold text-xs uppercase px-3 py-1.5 cursor-pointer"
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
