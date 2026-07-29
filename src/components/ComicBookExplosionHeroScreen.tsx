import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, RefreshCw } from 'lucide-react';

interface ComicBookExplosionHeroScreenProps {
  onScrollNext?: () => void;
}

export const ComicBookExplosionHeroScreen: React.FC<ComicBookExplosionHeroScreenProps> = ({ onScrollNext }) => {
  const [animKey, setAnimKey] = useState(0);

  const handleReplay = () => {
    setAnimKey(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-[#E61A2B] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-4 border-black shadow-2xl">
      
      {/* ── 1. EXACT COMIC BOOK EXPLOSION BACKDROP (100% PURE SVG & CSS) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Crimson Red Sky Base */}
        <div className="absolute inset-0 bg-[#E61A2B]" />

        {/* White Comic Halftone Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#FFFDF0 3px, transparent 3px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Manga Black Speed Lines Shooting Outwards with Entrance Scale Animation */}
        <motion.svg
          key={`speedlines-${animKey}`}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
          className="w-full h-full opacity-90"
        >
          <g fill="#050505">
            {/* Top Speed Lines */}
            <polygon points="500,320 0,0 20,0" />
            <polygon points="500,320 80,0 110,0" />
            <polygon points="500,320 220,0 250,0" />
            <polygon points="500,320 380,0 400,0" />
            <polygon points="500,320 540,0 560,0" />
            <polygon points="500,320 680,0 710,0" />
            <polygon points="500,320 820,0 850,0" />
            <polygon points="500,320 950,0 980,0" />

            {/* Left & Right Speed Lines */}
            <polygon points="500,320 0,120 0,140" />
            <polygon points="500,320 0,260 0,280" />
            <polygon points="500,320 0,420 0,440" />
            <polygon points="500,320 1000,120 1000,140" />
            <polygon points="500,320 1000,260 1000,280" />
            <polygon points="500,320 1000,420 1000,440" />
          </g>

          {/* Debris Specks */}
          <circle cx="150" cy="180" r="4" fill="#050505" />
          <circle cx="280" cy="120" r="6" fill="#050505" />
          <circle cx="820" cy="190" r="5" fill="#050505" />
          <circle cx="910" cy="140" r="7" fill="#050505" />
        </motion.svg>

        {/* ── 2. BOTTOM PUFFY CLOUDS & EXPLOSION SMOKE BILLOWS ── */}
        <div className="absolute bottom-0 inset-x-0 h-48 sm:h-64 pointer-events-none">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="w-full h-full">
            {/* Dark Red Background Smoke Puffs */}
            <path
              d="M 0 300 L 0 200 Q 80 140 180 180 Q 280 120 380 160 Q 480 100 580 160 Q 680 120 780 170 Q 880 130 1000 200 L 1000 300 Z"
              fill="#B31220"
              stroke="#050505"
              strokeWidth="6"
            />

            {/* Creamy White Foreground Puffy Cloud Horizon */}
            <path
              d="M 0 300 L 0 240 Q 60 180 130 210 Q 200 150 290 190 Q 380 130 480 170 Q 580 130 680 180 Q 780 140 880 200 Q 940 170 1000 230 L 1000 300 Z"
              fill="#FFFDF0"
              stroke="#050505"
              strokeWidth="7"
            />

            {/* Speed Lines Shooting Up from Bottom Smoke */}
            <line x1="120" y1="280" x2="60" y2="180" stroke="#050505" strokeWidth="5" strokeLinecap="round" />
            <line x1="240" y1="280" x2="180" y2="150" stroke="#050505" strokeWidth="4" strokeLinecap="round" />
            <line x1="760" y1="280" x2="820" y2="160" stroke="#050505" strokeWidth="4" strokeLinecap="round" />
            <line x1="880" y1="280" x2="940" y2="190" stroke="#050505" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

      </div>

      {/* ── 3. TOP HEADER BAR ── */}
      <header className="relative z-20 w-full flex items-center justify-between pt-2 sm:pt-4 px-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-black px-4 py-1.5 rounded border-2 border-white shadow-lg"
        >
          <span className="font-mono font-black text-xs sm:text-sm tracking-widest text-[#FFEE00] uppercase">
            NANDINI PORTFOLIO
          </span>
        </motion.div>

        {/* Replay Opening Animation Button */}
        <button
          onClick={handleReplay}
          className="flex items-center gap-1.5 bg-black hover:bg-slate-900 px-3 py-1.5 rounded border-2 border-white font-mono text-xs font-black text-white transition-all cursor-pointer shadow-lg"
          title="Replay Explosion Opening Animation"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#FFEE00]" />
          <span>REPLAY OPENING</span>
        </button>
      </header>

      {/* ── 4. CENTERPIECE: EXPLOSIVE OPENING ANIMATION FOR "NANDINI PORTFOLIO" ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto px-2">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-blast-${animKey}`}
            initial={{ scale: 0.05, opacity: 0, rotate: -25 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 18,
              mass: 0.8,
            }}
            className="relative flex flex-col items-center justify-center my-auto text-center pointer-events-none"
          >

            {/* LINE 1: NANDINI (YELLOW-TO-ORANGE 3D COMIC ACTION TYPOGRAPHY) */}
            <motion.h1
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 16 }}
              className="font-heading font-black uppercase text-[#FFEE00] tracking-wider leading-none text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] drop-shadow-[8px_8px_0px_#050505] transform -rotate-3"
              style={{
                fontFamily: '"Outfit", "Fredoka", "Arial Black", sans-serif',
                WebkitTextStroke: '4px #050505',
                backgroundImage: 'linear-gradient(180deg, #FFF000 0%, #FF9900 60%, #FF3300 100%)',
                WebkitBackgroundClip: 'text',
                paintOrder: 'stroke fill',
              }}
            >
              NANDINI
            </motion.h1>

            {/* LINE 2: PORTFOLIO (WHITE 3D COMIC ACTION TYPOGRAPHY WITH BLACK DROP SHADOW) */}
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 16 }}
              className="font-heading font-black uppercase text-white tracking-wider leading-none text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] drop-shadow-[8px_8px_0px_#050505] transform rotate-2 -mt-2 sm:-mt-6"
              style={{
                fontFamily: '"Outfit", "Fredoka", "Arial Black", sans-serif',
                WebkitTextStroke: '4px #050505',
                paintOrder: 'stroke fill',
              }}
            >
              PORTFOLIO
            </motion.h1>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* ── 5. BOTTOM NAVIGATION FOOTER ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t-2 border-black px-2">
        <span className="text-xs font-mono font-black text-black bg-[#FFFDF0] px-3 py-1 rounded border border-black uppercase tracking-wider">
          GRAPHIC DESIGN PORTFOLIO
        </span>

        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded bg-black text-[#FFEE00] font-heading font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-[4px_4px_0px_#FFFDF0] border-2 border-white cursor-pointer"
          >
            <span>EXPLORE PORTFOLIO</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : null}

        <span className="text-xs font-mono font-black text-black bg-[#FFEE00] px-3 py-1 rounded border border-black uppercase tracking-wider">
          © 2025 NANDINI
        </span>
      </footer>

    </div>
  );
};

export default ComicBookExplosionHeroScreen;
