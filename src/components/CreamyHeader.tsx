import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';
import { DesignTheme } from '../types/app';

interface CreamyHeaderProps {
  activeTheme: DesignTheme;
  setActiveTheme: (theme: DesignTheme) => void;
  onOpenInquiry: () => void;
  onOpenResume: () => void;
}

export const CreamyHeader: React.FC<CreamyHeaderProps> = ({
  activeTheme,
  setActiveTheme,
  onOpenInquiry,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themes: { id: DesignTheme; name: string; color: string }[] = [
    { id: 'mint', name: 'Mint', color: '#52B788' },
    { id: 'peach', name: 'Terracotta', color: '#C87D43' },
    { id: 'coral', name: 'Coral', color: '#EE4D2D' },
  ];

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'FAQS', href: '#faqs' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 pb-2 transition-all duration-500 transform ${
        isScrolled
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-12 pointer-events-none'
      }`}
    >
      <div className="max-w-5xl mx-auto rounded-full px-3.5 sm:px-5 py-1.5 bg-black/85 backdrop-blur-xl border border-white/15 shadow-xl flex items-center justify-between">
        
        {/* Monogram Logo */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 rounded-xl bg-white text-[#2D6A4F] flex items-center justify-center font-heading font-black text-[11px] shadow-sm group-hover:scale-105 transition-transform">
            NV
          </div>
          <span className="hidden sm:inline font-heading font-black text-[11px] uppercase tracking-wider text-white">
            NANDINI
          </span>
        </a>

        {/* Minimal Nav Links */}
        <nav className="hidden lg:flex items-center gap-0.5 px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 py-1 rounded-full text-[10px] font-heading font-extrabold text-white/90 hover:bg-white hover:text-gray-900 transition-all uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Minimal Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Color Dots Palette Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-white/10 border border-white/15">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  activeTheme === t.id ? 'ring-2 ring-white scale-110' : 'opacity-60 hover:opacity-100'
                }`}
                style={{ backgroundColor: t.color }}
                title={`Switch to ${t.name} Theme`}
              />
            ))}
          </div>

          {/* Resume Icon Button */}
          <button
            onClick={onOpenResume}
            className="p-1.5 rounded-full bg-white/15 hover:bg-white hover:text-gray-900 text-white transition-all"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
          </button>

          {/* Compact Hire Me CTA */}
          <button
            onClick={onOpenInquiry}
            className="px-3.5 py-1.5 rounded-full bg-white text-[#2D6A4F] font-heading font-black text-[10px] uppercase tracking-wider shadow-md hover:bg-[#FFF9ED] hover:scale-105 active:scale-95 transition-all flex items-center gap-1"
          >
            <span>HIRE ME</span>
            <Send className="w-3 h-3" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden mt-2 max-w-5xl mx-auto rounded-2xl p-5 bg-black/95 text-white backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-heading font-bold text-[10px] uppercase tracking-wider text-gray-400">Color Palette</span>
              <div className="flex items-center gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 ${
                      activeTheme === t.id ? 'bg-white text-black' : 'bg-white/20 text-white'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }} />
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-heading font-extrabold uppercase tracking-wider text-white hover:text-emerald-400 py-1.5 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-full bg-white/20 text-white font-heading font-bold text-xs uppercase"
            >
              View Full Resume 📄
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
