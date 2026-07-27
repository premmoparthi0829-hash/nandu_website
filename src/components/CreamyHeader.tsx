import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, FileText, Send } from 'lucide-react';
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

  const themes: { id: DesignTheme; name: string; emoji: string }[] = [
    { id: 'mint', name: 'Mint', emoji: '🌿' },
    { id: 'peach', name: 'Terracotta', emoji: '🍑' },
    { id: 'coral', name: 'Coral', emoji: '🌺' },
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
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-12 pt-5 pb-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto rounded-full px-6 sm:px-8 py-3.5 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl flex items-center justify-between">
        
        {/* Monogram Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-2xl bg-white text-[#2D6A4F] flex items-center justify-center font-heading font-black text-xs shadow-md group-hover:scale-105 transition-transform">
            NV
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-black text-xs uppercase tracking-wider text-white">
              NANDINI VADDEPALLI
            </span>
            <span className="text-[10px] text-white/80 font-sans font-semibold">
              Creative Brand Specialist
            </span>
          </div>
        </a>

        {/* Floating Pill Nav Menu */}
        <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-heading font-extrabold text-white hover:bg-white hover:text-gray-900 transition-all uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Palette Selector & Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Aesthetic Palette Switcher Pills */}
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-black/20 backdrop-blur-md border border-white/30">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(t.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-heading font-extrabold transition-all flex items-center gap-1 ${
                  activeTheme === t.id
                    ? 'bg-white text-gray-900 shadow-md scale-105'
                    : 'text-white/80 hover:text-white'
                }`}
                title={`Switch to ${t.name} Color Palette`}
              >
                <span>{t.emoji}</span>
                <span className="hidden md:inline">{t.name}</span>
              </button>
            ))}
          </div>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 hover:bg-white hover:text-gray-900 text-white font-heading font-extrabold text-xs uppercase transition-all shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 rounded-full bg-white text-[#2D6A4F] font-heading font-black text-xs uppercase tracking-wider shadow-xl hover:bg-[#FFF9ED] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>HIRE ME</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white"
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
            className="xl:hidden mt-3 max-w-7xl mx-auto rounded-3xl p-6 bg-black/90 text-white backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400">Color Palette</span>
              <div className="flex items-center gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      activeTheme === t.id ? 'bg-white text-black' : 'bg-white/20 text-white'
                    }`}
                  >
                    {t.emoji} {t.name}
                  </button>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-heading font-extrabold uppercase tracking-wider text-white hover:text-emerald-400 py-2 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-full bg-white/20 text-white font-heading font-bold text-xs uppercase"
            >
              View Full Resume 📄
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
