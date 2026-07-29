import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Edit2 } from 'lucide-react';

interface CartoonNetworkHeroScreenProps {
  onScrollNext?: () => void;
}

export const CartoonNetworkHeroScreen: React.FC<CartoonNetworkHeroScreenProps> = ({ onScrollNext }) => {
  const [row1Text, setRow1Text] = useState('NANDINI');
  const [row2Text, setRow2Text] = useState('PORTFOLIO');
  const [row3Text, setRow3Text] = useState('GRAPHIC DESIGNER');
  const [isEditing, setIsEditing] = useState(false);
  const [tempR1, setTempR1] = useState(row1Text);
  const [tempR2, setTempR2] = useState(row2Text);
  const [tempR3, setTempR3] = useState(row3Text);

  const handleSave = () => {
    if (tempR1.trim()) setRow1Text(tempR1.trim().toUpperCase());
    if (tempR2.trim()) setRow2Text(tempR2.trim().toUpperCase());
    if (tempR3.trim()) setRow3Text(tempR3.trim().toUpperCase());
    setIsEditing(false);
  };

  const row1Letters = row1Text.split('');
  const row2Letters = row2Text.split('');

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-[#050505] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/20 shadow-2xl">
      
      {/* ── 1. BACKGROUND ACCENTS (PLUS MATRIX & CORNER SHAPES) ── */}
      {/* Top Left Plus Matrix (+ + + +) */}
      <div className="absolute top-6 left-6 font-mono text-xs text-white/50 space-y-1 z-0 pointer-events-none hidden sm:block">
        <div>+ + + +</div>
        <div>+ + + +</div>
        <div>+ + + +</div>
      </div>

      {/* Top Right Plus Matrix (+ + + +) */}
      <div className="absolute top-20 right-8 font-mono text-xs text-white/60 z-0 pointer-events-none hidden sm:block">
        + + + +
      </div>

      {/* Bottom Left Pink Triangle Corner Accent */}
      <div className="absolute bottom-4 left-4 z-0 pointer-events-none">
        <svg viewBox="0 0 50 50" className="w-8 h-8 sm:w-12 sm:h-12 fill-[#FF007F]">
          <polygon points="0,50 50,50 0,0" />
        </svg>
      </div>

      {/* Bottom Right Cyan & Yellow Hazard Pattern Accent */}
      <div className="absolute bottom-6 right-6 w-10 h-16 sm:w-12 sm:h-20 flex flex-col z-0 pointer-events-none border border-white/30">
        <div className="h-1/2 bg-[#00E5FF] grid grid-cols-2 gap-0.5 p-0.5">
          <div className="bg-black transform rotate-45" />
          <div className="bg-black transform -rotate-45" />
        </div>
        <div className="h-1/2 bg-[#FFEE00] flex flex-col justify-between p-1">
          <div className="h-1 bg-black transform rotate-12" />
          <div className="h-1 bg-black transform rotate-12" />
          <div className="h-1 bg-black transform rotate-12" />
        </div>
      </div>

      {/* ── 2. TOP HEADER NAVIGATION ── */}
      <header className="relative z-20 w-full flex items-center justify-between pt-2 sm:pt-4 px-2">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 bg-[#FF007F] inline-block" />
          <span className="font-mono font-bold text-xs sm:text-sm tracking-widest text-white uppercase">
            NANDINI PORTFOLIO STUDIO
          </span>
        </div>

        {/* Navigation Menu Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono font-bold text-xs tracking-wider text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">OUR STUDIO</a>
          <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#experience" className="hover:text-white transition-colors">WORK</a>
          <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
          <a href="#contact" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Edit Button */}
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded border border-white/30 font-mono text-xs font-bold text-white transition-all cursor-pointer"
        >
          <Edit2 className="w-3.5 h-3.5 text-[#FFEE00]" />
          <span>EDIT GRID</span>
        </button>
      </header>

      {/* ── 3. CENTERPIECE: NANDINI PORTFOLIO CHECKERBOARD GRID ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto px-2">
        
        {isEditing ? (
          <div className="flex flex-col items-center gap-3 bg-black/90 p-5 rounded-xl border-2 border-white z-30 shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white">Row 1:</span>
              <input
                type="text"
                value={tempR1}
                onChange={(e) => setTempR1(e.target.value)}
                className="bg-white text-black font-heading font-black px-2 py-1 rounded uppercase text-sm"
                autoFocus
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white">Row 2:</span>
              <input
                type="text"
                value={tempR2}
                onChange={(e) => setTempR2(e.target.value)}
                className="bg-white text-black font-heading font-black px-2 py-1 rounded uppercase text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white">Row 3:</span>
              <input
                type="text"
                value={tempR3}
                onChange={(e) => setTempR3(e.target.value)}
                className="bg-white text-black font-heading font-black px-2 py-1 rounded uppercase text-sm"
              />
            </div>
            <button onClick={handleSave} className="px-4 py-1 bg-[#FFEE00] text-black font-black rounded text-xs">
              Save Grid Layout
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer my-auto"
            onClick={() => setIsEditing(true)}
          >
            
            {/* ── ROW 1: NANDINI (7 CHECKERBOARD GRID TILES) ── */}
            <div className="flex items-center gap-1 sm:gap-2">
              {row1Letters.map((char, index) => {
                const isEven = index % 2 === 0;
                
                if (index === 0) {
                  // N: Wavy Cyan Circle SVG Accent
                  return (
                    <div key={index} className="w-11 sm:w-16 md:w-20 h-11 sm:h-16 md:h-20 bg-black border-2 border-white flex items-center justify-center relative overflow-hidden">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="42" fill="url(#cyanWavyGridN)" />
                        <defs>
                          <linearGradient id="cyanWavyGridN" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00FF66" />
                            <stop offset="50%" stopColor="#00C3FF" />
                            <stop offset="100%" stopColor="#0066FF" />
                          </linearGradient>
                        </defs>
                        <text x="50" y="72" textAnchor="middle" fill="#050505" fontSize="68" fontWeight="900" fontFamily="Arial Black, sans-serif">
                          {char}
                        </text>
                      </svg>
                    </div>
                  );
                }

                if (index === 3) {
                  // D: Hot pink tile with yellow star icon
                  return (
                    <div key={index} className="w-11 sm:w-16 md:w-20 h-11 sm:h-16 md:h-20 bg-[#FF007F] border-2 border-white flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-1 right-2 text-[#FFEE00] font-black text-xs">★</div>
                      <span className="font-heading font-black text-2xl sm:text-4xl md:text-6xl text-white z-10">{char}</span>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`w-11 sm:w-16 md:w-20 h-11 sm:h-16 md:h-20 border-2 border-white flex items-center justify-center ${
                      isEven ? 'bg-white text-black' : 'bg-black text-white'
                    }`}
                  >
                    <span className="font-heading font-black text-2xl sm:text-4xl md:text-6xl">{char}</span>
                  </div>
                );
              })}
            </div>

            {/* ── ROW 2: PORTFOLIO (9 CHECKERBOARD GRID TILES) ── */}
            <div className="flex items-center gap-1 sm:gap-2">
              {row2Letters.map((char, index) => {
                const isEven = index % 2 !== 0;

                if (index === 1) {
                  // O: Retro Glitch Tile
                  return (
                    <div key={index} className="w-10 sm:w-14 md:w-18 h-10 sm:h-14 md:h-18 bg-[#FFEE00] border-2 border-white flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF007F] via-[#00C3FF] to-transparent opacity-60 transform -rotate-12" />
                      <span className="font-heading font-black text-xl sm:text-3xl md:text-5xl text-black z-10">{char}</span>
                    </div>
                  );
                }

                if (index === 5) {
                  // L: Cyan Tile with ▶▶▶ TAG
                  return (
                    <div key={index} className="w-10 sm:w-14 md:w-18 h-10 sm:h-14 md:h-18 bg-[#00E5FF] border-2 border-white flex flex-col items-center justify-center relative">
                      <span className="font-heading font-black text-lg sm:text-2xl md:text-4xl text-black">{char}</span>
                      <span className="text-[6px] sm:text-[8px] font-mono font-black text-black tracking-tighter">▶▶▶ WORK</span>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`w-10 sm:w-14 md:w-18 h-10 sm:h-14 md:h-18 border-2 border-white flex items-center justify-center ${
                      isEven ? 'bg-white text-black' : 'bg-black text-white'
                    }`}
                  >
                    <span className="font-heading font-black text-xl sm:text-3xl md:text-5xl">{char}</span>
                  </div>
                );
              })}
            </div>

            {/* ── ROW 3: GRAPHIC DESIGNER (BRUTALIST SPACED TYPOGRAPHY) ── */}
            <div className="flex items-center justify-between w-full max-w-[340px] sm:max-w-[480px] md:max-w-[620px] pt-2">
              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">G</span>
              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">R</span>
              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">A</span>

              {/* Pink Triangle Matrix Icon */}
              <div className="w-7 sm:w-10 md:w-12 h-7 sm:h-10 md:h-12 bg-[#FF007F] grid grid-cols-2 gap-0.5 p-1 border border-white">
                <div className="bg-black clip-path-triangle" />
                <div className="bg-black clip-path-triangle" />
                <div className="bg-black clip-path-triangle" />
              </div>

              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">P</span>
              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">H</span>
              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">I</span>
              <span className="font-heading font-black text-xl sm:text-4xl md:text-5xl text-white tracking-widest">C</span>

              {/* Yellow Cartoon Character Loop (Jake Shape) */}
              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 100 60" className="w-8 sm:w-14 md:w-16 h-6 sm:h-10 md:h-12">
                  <path d="M 10 30 C 10 10, 40 10, 50 30 C 60 50, 90 50, 90 30 C 90 10, 60 10, 50 30" fill="none" stroke="#FFEE00" strokeWidth="16" strokeLinecap="round" />
                  <circle cx="25" cy="25" r="4" fill="#000000" />
                  <circle cx="35" cy="25" r="4" fill="#000000" />
                </svg>
              </div>

            </div>

          </motion.div>
        )}

      </div>

      {/* ── 4. BOTTOM FOOTER ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t border-white/20 px-2">
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded bg-white text-black font-mono font-black text-xs uppercase tracking-widest hover:bg-[#FFEE00] transition-all cursor-pointer shadow-lg"
          >
            <span>EXPLORE NANDINI'S PORTFOLIO</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : (
          <span className="text-xs font-mono font-bold text-slate-400">
            © 2025 Nandini Vaddepalli • CN Brutalist Edition
          </span>
        )}

        <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded border border-white/30">
          <span className="w-2.5 h-2.5 bg-[#FFEE00] animate-ping" />
          <span className="text-xs font-mono font-bold text-white">NANDINI PORTFOLIO Edition</span>
        </div>
      </footer>

    </div>
  );
};

export default CartoonNetworkHeroScreen;
