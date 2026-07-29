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

const THEMES: { id: DesignTheme; name: string; color: string }[] = [
  { id: 'mint',  name: 'Neon Mint', color: '#00FF66' },
  { id: 'peach', name: 'Terracotta', color: '#FF9F1C' },
  { id: 'coral', name: 'Electric Cyan', color: '#00E5FF' },
];

const NAV_LINKS = [
  { name: 'Home',      href: '#hero' },
  { name: 'About',     href: '#about' },
  { name: 'Services',  href: '#services' },
  { name: 'Work',      href: '#projects' },
  { name: 'Skills',    href: '#skills' },
  { name: 'FAQ',       href: '#faqs' },
  { name: 'Contact',   href: '#contact' },
];

export const CreamyHeader: React.FC<CreamyHeaderProps> = ({
  activeTheme,
  setActiveTheme,
  onOpenInquiry,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeColor = THEMES.find((t) => t.id === activeTheme)?.color ?? '#00FF66';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-2 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="inline-flex flex-col items-center max-w-[calc(100vw-1rem)]"
      >
        {/* ── Main pill bar (STYLING MATCHES 1ST PAGE 1ST SCREEN ROYAL BLUE THEME) ── */}
        <div
          className="rounded-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 max-w-full backdrop-blur-xl shadow-2xl transition-all duration-300"
          style={{
            backgroundColor: '#0040DD',
            backgroundImage: 'linear-gradient(135deg, rgba(0, 85, 255, 0.95) 0%, rgba(0, 45, 160, 0.95) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.45)',
            boxShadow: '0 10px 30px rgba(0, 30, 120, 0.6), 0 0 15px rgba(0, 102, 255, 0.4)',
            height: '42px',
          }}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1.5 shrink-0 group">
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-950 shadow-md group-hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: activeColor }}
            >
              NV
            </div>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1 text-[10px] font-extrabold text-white/90 hover:text-white uppercase tracking-wider rounded-full hover:bg-white/20 transition-all duration-150 drop-shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1.5 shrink-0">

            {/* ── Theme dots ── */}
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/25"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
            >
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t.id)}
                  title={t.name}
                  className="relative flex items-center justify-center w-3.5 h-3.5 rounded-full transition-transform duration-200 hover:scale-125 active:scale-95"
                  style={{ backgroundColor: t.color }}
                >
                  {/* Active indicator */}
                  {activeTheme === t.id && (
                    <motion.span
                      layoutId="theme-ring"
                      className="absolute inset-0 rounded-full"
                      style={{
                        outline: '2px solid #FFFFFF',
                        outlineOffset: '2px',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume */}
            <button
              onClick={onOpenResume}
              title="View Resume"
              className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-150"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>

            {/* Hire Me CTA */}
            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-1 px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-wider text-slate-950 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg border border-white/50"
              style={{ backgroundColor: activeColor }}
            >
              Hire <Send className="w-2.5 h-2.5 stroke-[3]" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-7 h-7 rounded-full text-white hover:bg-white/20 transition-all"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden mt-2 rounded-2xl p-4 flex flex-col gap-1 w-72 max-w-[calc(100vw-2rem)] max-h-[80vh] overflow-y-auto backdrop-blur-2xl shadow-2xl border-2 border-white/40"
              style={{
                backgroundColor: '#0036B8',
                backgroundImage: 'linear-gradient(135deg, #0040DD 0%, #002590 100%)',
              }}
            >
              {/* Theme row */}
              <div className="flex items-center gap-3 px-2.5 py-2 mb-1 rounded-xl bg-black/25 border border-white/20">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">Theme</span>
                <div className="flex gap-2">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTheme(t.id)}
                      title={t.name}
                      className="relative w-4 h-4 rounded-full transition-transform hover:scale-125 active:scale-95"
                      style={{ backgroundColor: t.color }}
                    >
                      {activeTheme === t.id && (
                        <span
                          className="absolute inset-0 rounded-full"
                          style={{ outline: '2px solid #FFFFFF', outlineOffset: '2px' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <span className="ml-auto text-[9px] font-bold uppercase tracking-wider text-white">
                  {THEMES.find(t => t.id === activeTheme)?.name}
                </span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-extrabold text-white/90 hover:text-white uppercase tracking-wider rounded-xl hover:bg-white/20 transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="flex-1 py-2 rounded-full text-[10px] font-extrabold uppercase text-white border border-white/30 hover:bg-white/20 transition-all"
                >
                  Resume
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }}
                  className="flex-1 py-2 rounded-full text-[10px] font-black uppercase text-slate-950 shadow-md transition-all"
                  style={{ backgroundColor: activeColor }}
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};
