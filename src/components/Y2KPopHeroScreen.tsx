import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Star, Zap, Disc, Globe, Layers, Eye, RefreshCw } from 'lucide-react';
import blueBg from '../assets/blue_gradient_bg.png';
import nandiniCutout from '../assets/nandini_poster_cutout.png';

interface Y2KPopHeroScreenProps {
  onScrollNext?: () => void;
}

export const Y2KPopHeroScreen: React.FC<Y2KPopHeroScreenProps> = ({ onScrollNext }) => {
  const [activeBadge, setActiveBadge] = useState('BRANDING');
  const [spinCd, setSpinCd] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-blue-400/30 shadow-[0_0_60px_rgba(0,102,255,0.4)]">
      
      {/* ── 1. UPLOADED BLUE GRAINY GRADIENT BACKDROP ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${blueBg})` }}
      />

      {/* Y2K Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 229, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Y2K Glowing Stars matching background */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-12 z-10 pointer-events-none hidden sm:block opacity-80"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <Star className="w-12 h-12 text-[#00E5FF] fill-[#00E5FF] filter drop-shadow-[0_0_15px_#00E5FF]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 left-10 z-10 pointer-events-none hidden sm:block opacity-75"
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-[#FF00E5] filter drop-shadow-[0_0_12px_#FF00E5]" />
        </div>
      </motion.div>

      {/* ── 2. Y2K WINDOW HEADER BAR ── */}
      <header className="relative z-20 w-full flex items-center justify-between bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-400/40 shadow-lg">
        <div className="flex items-center gap-3">
          {/* Y2K Window Action Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF453A] border border-red-300/40 block" />
            <span className="w-3 h-3 rounded-full bg-[#FFD60A] border border-yellow-300/40 block" />
            <span className="w-3 h-3 rounded-full bg-[#30D158] border border-green-300/40 block" />
          </div>

          <span className="font-mono font-black text-xs sm:text-sm tracking-widest text-[#00E5FF] uppercase flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#FFEE00]" />
            NANDINI_PORTFOLIO_V2026.EXE
          </span>
        </div>

        {/* Y2K Header Badges */}
        <div className="hidden md:flex items-center gap-3">
          <span className="px-3 py-0.5 rounded-full bg-[#FF00E5]/20 border border-[#FF00E5] font-mono text-[11px] font-extrabold text-[#FF00E5] tracking-wider uppercase">
            Y2K EDITION
          </span>
          <span className="px-3 py-0.5 rounded-full bg-[#00FF66]/20 border border-[#00FF66] font-mono text-[11px] font-extrabold text-[#00FF66] tracking-wider uppercase">
            4.5+ YRS EXP
          </span>
        </div>
      </header>

      {/* ── 3. MAIN Y2K CENTERPIECE & TYPOGRAPHY ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 my-auto px-2 py-4">
        
        {/* Left Side: Y2K Dynamic Typography & Intro */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 max-w-2xl">
          
          {/* Floating Sticker Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF00E5] via-[#7000FF] to-[#00E5FF] px-4 py-1.5 rounded-full text-white font-mono font-black text-xs uppercase tracking-widest border-2 border-white shadow-[0_0_20px_rgba(255,0,229,0.5)] transform -rotate-2"
          >
            <span>★ CREATIVE GRAPHIC DESIGNER ★</span>
          </motion.div>

          {/* Main Title 1: NANDINI */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading font-black uppercase text-white tracking-tighter leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
            style={{
              WebkitTextStroke: '2px #00E5FF',
              paintOrder: 'stroke fill',
            }}
          >
            NANDINI
          </motion.h1>

          {/* Main Title 2: VADDEPALLI with Y2K Pop Gradient */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-heading font-black uppercase tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] -mt-2 sm:-mt-4"
            style={{
              backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #00E5FF 50%, #FF00E5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.6))',
            }}
          >
            VADDEPALLI
          </motion.h1>

          {/* Subtitle Bio */}
          <p className="font-sans font-semibold text-xs sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
            Specializing in <span className="text-[#FFEE00] font-black underline decoration-wavy decoration-[#FF00E5]">Brand Identity</span>, Logo Design, Packaging &amp; Digital Media. Transforming visions into striking Y2K pop visual art.
          </p>

          {/* Y2K Interactive Tools Pill Bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
            {[
              { label: 'Photoshop', abbr: 'Ps', color: '#00A4E4', bg: '#001E36' },
              { label: 'Illustrator', abbr: 'Ai', color: '#FF9A00', bg: '#330000' },
              { label: 'Figma', abbr: 'Fg', color: '#F24E1E', bg: '#FFFFFF' },
              { label: 'InDesign', abbr: 'Id', color: '#FF3366', bg: '#49021F' },
              { label: 'Canva', abbr: 'Cn', color: '#00C4CC', bg: '#002B30' },
            ].map((tool, idx) => (
              <motion.div
                key={tool.abbr}
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-black text-xs sm:text-sm border-2 shadow-lg cursor-pointer"
                style={{
                  backgroundColor: tool.bg,
                  borderColor: tool.color,
                  color: tool.abbr === 'Fg' ? '#1B4332' : tool.color,
                  boxShadow: `0 0 15px ${tool.color}40`,
                }}
                title={tool.label}
              >
                {tool.abbr}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Floating Y2K Portrait Card & CD Visual */}
        <div className="relative flex items-center justify-center shrink-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          
          {/* Spinning Y2K CD Disc Backdrop */}
          <motion.div
            animate={{ rotate: spinCd ? 360 : 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            onClick={() => setSpinCd(!spinCd)}
            className="absolute inset-0 rounded-full border-4 border-cyan-400/40 bg-gradient-to-tr from-[#FF00E5]/30 via-[#00E5FF]/30 to-[#FFEE00]/30 shadow-[0_0_40px_rgba(0,229,255,0.4)] flex items-center justify-center cursor-pointer group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/40 bg-black/60 flex items-center justify-center">
              <Disc className="w-8 h-8 text-[#00E5FF] group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>

          {/* Portrait Cutout Overlay */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#00E5FF] bg-gradient-to-b from-blue-950/80 to-black shadow-2xl flex items-end justify-center"
          >
            <img
              src={nandiniCutout}
              alt="Nandini Vaddepalli"
              className="h-full w-auto object-contain object-bottom filter contrast-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
            />

            {/* Sticker Badge on Portrait */}
            <div className="absolute bottom-2 left-2 bg-[#FFEE00] text-black px-2.5 py-0.5 rounded font-heading font-black text-[10px] sm:text-xs uppercase border border-black shadow-md">
              PORTFOLIO 2026
            </div>
          </motion.div>
        </div>

      </div>

      {/* ── 4. Y2K FOOTER ACTIONS ── */}
      <footer className="relative z-20 w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-cyan-500/30 px-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded bg-black/70 border border-cyan-400/40 font-mono text-xs text-[#00E5FF] font-bold">
            ⚡ AVAILABLE FOR FREELANCE &amp; FULL-TIME
          </span>
        </div>

        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] text-black font-heading font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,229,255,0.6)] border-2 border-white cursor-pointer"
          >
            <span>EXPLORE PORTFOLIO</span>
            <ArrowDown className="w-4 h-4 stroke-[3]" />
          </button>
        ) : null}

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-blue-200/80 font-bold">
          <span>HYDERABAD, INDIA</span>
          <span>•</span>
          <span>© 2026</span>
        </div>
      </footer>

    </div>
  );
};
