import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Edit2 } from 'lucide-react';

interface AppleGlassRibbonHeroScreenProps {
  onScrollNext?: () => void;
}

export const AppleGlassRibbonHeroScreen: React.FC<AppleGlassRibbonHeroScreenProps> = ({ onScrollNext }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'nandini' | 'vaddepalli'>('both');

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-[#030308] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
      
      {/* ── 1. DARK NEON ATMOSPHERIC BACKDROP ── */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(0,225,255,0.18)_0%,_rgba(180,0,255,0.12)_45%,_rgba(3,3,8,1)_80%)] pointer-events-none" />

      {/* Background Dot Matrix Grid */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #00F0FF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/20 blur-[110px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 blur-[110px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* ── 2. TOP HEADER ── */}
      <header className="relative z-20 w-full flex items-center justify-between pt-2 sm:pt-4 px-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start font-sans"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
            NANDINI VADDEPALLI
          </span>
          <span className="text-xs sm:text-sm font-heading font-black tracking-wider text-white uppercase mt-0.5">
            SENIOR GRAPHIC DESIGNER
          </span>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/20 shadow-lg"
        >
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${activeTab === 'both' ? 'bg-cyan-400 text-black shadow-md' : 'text-white/70 hover:text-white'}`}
          >
            FULL NAME
          </button>
          <button
            onClick={() => setActiveTab('nandini')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${activeTab === 'nandini' ? 'bg-cyan-400 text-black shadow-md' : 'text-white/70 hover:text-white'}`}
          >
            NANDINI
          </button>
          <button
            onClick={() => setActiveTab('vaddepalli')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${activeTab === 'vaddepalli' ? 'bg-cyan-400 text-black shadow-md' : 'text-white/70 hover:text-white'}`}
          >
            VADDEPALLI
          </button>
        </motion.div>
      </header>

      {/* ── 3. CENTERPIECE: EXACT APPLE 3D GLOWING GLASS CURSIVE NEON TUBE TYPOGRAPHY ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto px-2">
        
        <motion.div
          key={activeTab}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center"
        >
          {/* Pure SVG 3D Glass Glowing Ribbon Canvas */}
          <svg viewBox="0 0 1000 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_0_45px_rgba(0,225,255,0.5)]">
            <defs>
              {/* Multi-stop Apple Glass Neon Spectrum Gradient */}
              <linearGradient id="appleNeonSpectrum" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="25%" stopColor="#B000FF" />
                <stop offset="50%" stopColor="#FF007F" />
                <stop offset="75%" stopColor="#FF6600" />
                <stop offset="100%" stopColor="#00F0FF" />
              </linearGradient>

              {/* High Intensity Outer Glow Filter */}
              <filter id="neonGlowBlur" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="18" result="blur1" />
                <feGaussianBlur stdDeviation="7" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ── LINE 1: "nandini" 3D CURSIVE GLOWING GLASS TUBE ── */}
            {(activeTab === 'both' || activeTab === 'nandini') && (
              <g id="glass-tube-nandini" transform={activeTab === 'nandini' ? 'translate(0, 50)' : 'translate(0, 0)'}>
                
                {/* 1. Wide Outer Neon Aura Glow Layer */}
                <motion.path
                  d="M 120 180 L 120 100 C 120 70, 160 70, 180 110 L 210 180 L 210 100 C 210 70, 250 70, 270 110 L 290 180 C 310 190, 340 190, 360 150 C 380 110, 380 180, 410 180 C 430 180, 450 90, 450 180 C 450 180, 490 80, 510 80 C 530 80, 530 180, 560 180 C 580 180, 600 90, 600 180 L 640 90 L 640 180 C 640 180, 680 90, 710 90 C 740 90, 740 180, 770 180 C 800 180, 820 110, 850 160"
                  stroke="url(#appleNeonSpectrum)"
                  strokeWidth="38"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="url(#neonGlowBlur)"
                  opacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* 2. Translucent Glass Tube Body Layer */}
                <motion.path
                  d="M 120 180 L 120 100 C 120 70, 160 70, 180 110 L 210 180 L 210 100 C 210 70, 250 70, 270 110 L 290 180 C 310 190, 340 190, 360 150 C 380 110, 380 180, 410 180 C 430 180, 450 90, 450 180 C 450 180, 490 80, 510 80 C 530 80, 530 180, 560 180 C 580 180, 600 90, 600 180 L 640 90 L 640 180 C 640 180, 680 90, 710 90 C 740 90, 740 180, 770 180 C 800 180, 820 110, 850 160"
                  stroke="url(#appleNeonSpectrum)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* 3. Crisp White Refraction Core Line */}
                <motion.path
                  d="M 120 180 L 120 100 C 120 70, 160 70, 180 110 L 210 180 L 210 100 C 210 70, 250 70, 270 110 L 290 180 C 310 190, 340 190, 360 150 C 380 110, 380 180, 410 180 C 430 180, 450 90, 450 180 C 450 180, 490 80, 510 80 C 530 80, 530 180, 560 180 C 580 180, 600 90, 600 180 L 640 90 L 640 180 C 640 180, 680 90, 710 90 C 740 90, 740 180, 770 180 C 800 180, 820 110, 850 160"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.92"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Glowing Glass Dots for 'i' */}
                <circle cx="450" cy="60" r="9" fill="#FF007F" className="animate-pulse" />
                <circle cx="600" cy="60" r="9" fill="#00E5FF" className="animate-pulse" />
              </g>
            )}

            {/* ── LINE 2: "vaddepalli" 3D CURSIVE GLOWING GLASS TUBE ── */}
            {(activeTab === 'both' || activeTab === 'vaddepalli') && (
              <g id="glass-tube-vaddepalli" transform={activeTab === 'vaddepalli' ? 'translate(0, -40)' : 'translate(40, 220)'}>
                
                {/* 1. Wide Outer Neon Aura Glow Layer */}
                <motion.path
                  d="M 100 140 C 115 140, 125 190, 140 220 C 155 190, 165 140, 180 140 C 190 140, 190 155, 180 165 C 160 185, 190 230, 215 200 C 235 170, 220 210, 245 210 C 260 210, 270 170, 290 160 C 310 150, 300 220, 280 220 C 270 220, 260 210, 260 190 C 260 140, 310 130, 320 220 C 330 220, 340 180, 360 170 C 380 160, 370 220, 350 220 C 340 220, 330 210, 330 190 C 330 140, 380 130, 390 220 L 420 130 L 420 220 L 460 130 L 460 220 C 460 220, 500 140, 530 140 C 560 140, 560 220, 590 220 C 610 220, 630 150, 630 220 C 630 220, 670 140, 700 140 C 730 140, 730 220, 760 220"
                  stroke="url(#appleNeonSpectrum)"
                  strokeWidth="38"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="url(#neonGlowBlur)"
                  opacity="0.7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                {/* 2. Translucent Glass Tube Body Layer */}
                <motion.path
                  d="M 100 140 C 115 140, 125 190, 140 220 C 155 190, 165 140, 180 140 C 190 140, 190 155, 180 165 C 160 185, 190 230, 215 200 C 235 170, 220 210, 245 210 C 260 210, 270 170, 290 160 C 310 150, 300 220, 280 220 C 270 220, 260 210, 260 190 C 260 140, 310 130, 320 220 C 330 220, 340 180, 360 170 C 380 160, 370 220, 350 220 C 340 220, 330 210, 330 190 C 330 140, 380 130, 390 220 L 420 130 L 420 220 L 460 130 L 460 220 C 460 220, 500 140, 530 140 C 560 140, 560 220, 590 220 C 610 220, 630 150, 630 220 C 630 220, 670 140, 700 140 C 730 140, 730 220, 760 220"
                  stroke="url(#appleNeonSpectrum)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                {/* 3. Crisp White Refraction Core Line */}
                <motion.path
                  d="M 100 140 C 115 140, 125 190, 140 220 C 155 190, 165 140, 180 140 C 190 140, 190 155, 180 165 C 160 185, 190 230, 215 200 C 235 170, 220 210, 245 210 C 260 210, 270 170, 290 160 C 310 150, 300 220, 280 220 C 270 220, 260 210, 260 190 C 260 140, 310 130, 320 220 C 330 220, 340 180, 360 170 C 380 160, 370 220, 350 220 C 340 220, 330 210, 330 190 C 330 140, 380 130, 390 220 L 420 130 L 420 220 L 460 130 L 460 220 C 460 220, 500 140, 530 140 C 560 140, 560 220, 590 220 C 610 220, 630 150, 630 220 C 630 220, 670 140, 700 140 C 730 140, 730 220, 760 220"
                  stroke="#FFFFFF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.92"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                {/* Glowing Glass Dot for 'i' */}
                <circle cx="760" cy="110" r="9" fill="#00E5FF" className="animate-pulse" />
              </g>
            )}

          </svg>
        </motion.div>
      </div>

      {/* ── 4. BOTTOM FOOTER ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t border-white/10 px-2">
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-950 font-heading font-black text-xs uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl cursor-pointer"
          >
            <span>DISCOVER NANDINI'S WORK</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : (
          <span className="text-xs font-mono font-bold text-white/80">
            © 2025 Nandini Vaddepalli • Glass Neon Edition
          </span>
        )}

        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-cyan-300">Apple 3D Glass Cursive Ribbon Edition</span>
        </div>
      </footer>

    </div>
  );
};

export default AppleGlassRibbonHeroScreen;
