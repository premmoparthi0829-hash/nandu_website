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
  { id: 'mint',  name: 'Sage Green', color: '#52B788' },
  { id: 'peach', name: 'Terracotta', color: '#D4845A' },
  { id: 'coral', name: 'Dusty Rose', color: '#C0616A' },
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeColor = THEMES.find((t) => t.id === activeTheme)?.color ?? '#52B788';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{
        paddingTop: '10px',
        pointerEvents: isScrolled ? 'auto' : 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isScrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="inline-flex flex-col items-center max-w-[calc(100vw-1rem)]"
      >
        {/* ── Main pill bar ── */}
        <div
          className="rounded-full flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 max-w-full"
          style={{
            backgroundColor: '#1C1917',
            border: `1.5px solid ${activeColor}40`,
            boxShadow: `0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)`,
            height: '36px',
          }}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-1.5 shrink-0 group">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center font-black text-[9px] text-white shadow-sm group-hover:scale-110 transition-transform duration-200"
              style={{ backgroundColor: activeColor }}
            >
              NV
            </div>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 py-1 text-[9px] font-semibold text-white/55 hover:text-white uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1 shrink-0">

            {/* ── 3 Theme dots ── */}
            <div
              className="flex items-center gap-1 px-1.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
            >
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t.id)}
                  title={t.name}
                  className="relative flex items-center justify-center w-3 h-3 rounded-full transition-transform duration-200 hover:scale-125 active:scale-95"
                  style={{ backgroundColor: t.color }}
                >
                  {/* Active indicator */}
                  {activeTheme === t.id && (
                    <motion.span
                      layoutId="theme-ring"
                      className="absolute inset-0 rounded-full"
                      style={{
                        outline: `2.5px solid ${t.color}`,
                        outlineOffset: '2.5px',
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
              className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-150"
            >
              <FileText className="w-3.5 h-3.5" />
            </button>

            {/* Hire Me CTA */}
            <button
              onClick={onOpenInquiry}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-[9px] uppercase tracking-wider text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
              style={{ backgroundColor: activeColor }}
            >
              Hire <Send className="w-2 h-2" />
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-7 h-7 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
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
              className="lg:hidden mt-2 rounded-2xl p-4 flex flex-col gap-1 w-72 max-w-[calc(100vw-2rem)] max-h-[80vh] overflow-y-auto"
              style={{
                backgroundColor: '#1C1917',
                border: `1.5px solid ${activeColor}40`,
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              }}
            >
              {/* Theme row */}
              <div className="flex items-center gap-3 px-2 py-2 mb-1 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Theme</span>
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
                          style={{ outline: `2px solid ${t.color}`, outlineOffset: '2px' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <span className="ml-auto text-[9px] font-semibold" style={{ color: activeColor }}>
                  {THEMES.find(t => t.id === activeTheme)?.name}
                </span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white uppercase tracking-wider rounded-xl hover:bg-white/8 transition-all"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="flex-1 py-2 rounded-full text-[11px] font-bold uppercase text-white/70 border border-white/15 hover:border-white/30 transition-all"
                >
                  Resume
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }}
                  className="flex-1 py-2 rounded-full text-[11px] font-bold uppercase text-white transition-all"
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
