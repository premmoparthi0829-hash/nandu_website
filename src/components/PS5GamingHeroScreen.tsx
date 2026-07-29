import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Sparkles, Star } from 'lucide-react';
import { PS5ControllerSVG } from './PS5ControllerSVG';
import freyrImg from '../assets/project_freyr.png';
import solarImg from '../assets/project_solar.png';
import milkImg from '../assets/project_milk.png';
import nandiniImg from '../assets/nandini_coral.png';

interface PS5GamingHeroScreenProps {
  onScrollNext?: () => void;
}

const PROJECT_CARDS = [
  { id: 1, title: 'GTA V BRANDING', category: 'Brand System', img: freyrImg, rotate: -24, scale: 0.9, top: '10%' },
  { id: 2, title: 'WWE 2K26 POSTER', category: 'Key Visual', img: solarImg, rotate: -12, scale: 0.95, top: '4%' },
  { id: 3, title: 'FORZA HORIZON 5', category: 'Packaging', img: milkImg, rotate: 0, scale: 1.0, top: '2%' },
  { id: 4, title: 'TEKKEN 8 MOTION', category: 'Motion Graphic', img: freyrImg, rotate: 12, scale: 0.95, top: '4%' },
  { id: 5, title: 'GHOST RECON UI', category: 'UI/UX Concept', img: solarImg, rotate: 24, scale: 0.9, top: '10%' },
  
  // Inner Arc (4 Cards)
  { id: 6, title: 'UNCHARTED EDITORIAL', category: 'Print Media', img: milkImg, rotate: -16, scale: 0.88, top: '38%' },
  { id: 7, title: 'FARCRY 6 CAMPAIGN', category: 'Social Ads', img: freyrImg, rotate: -5, scale: 0.92, top: '34%' },
  { id: 8, title: 'GHOST OF TSUSHIMA', category: 'Visual Art', img: nandiniImg, rotate: 5, scale: 0.92, top: '34%' },
  { id: 9, title: 'EA FIFA 26 SPORTS', category: 'Brand Identity', img: solarImg, rotate: 16, scale: 0.88, top: '38%' },
];

export const PS5GamingHeroScreen: React.FC<PS5GamingHeroScreenProps> = ({ onScrollNext }) => {
  const [activeCard, setActiveCard] = useState<number | null>(3);

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-[#070A0F] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-red-900/40 shadow-2xl">
      
      {/* ── 1. DARK BRUSHED METAL BACKDROP & TOP SPOTLIGHT ── */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.25)_0%,_rgba(20,25,35,0.8)_40%,_rgba(5,7,12,1)_90%)] pointer-events-none" />

      {/* Top Overhead Spotlight Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_50%_0%,_rgba(255,255,255,0.35)_0%,_rgba(255,0,50,0.15)_45%,_transparent_75%)] pointer-events-none" />

      {/* ── 2. RED FUTURISTIC CONCENTRIC HUD ARC CIRCUITS (VECTOR SVG) ── */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-80">
        <svg viewBox="0 0 1000 600" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="redHudGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3366" />
              <stop offset="100%" stopColor="#FF0033" />
            </linearGradient>
          </defs>

          {/* Concentric Arc Circles */}
          <circle cx="500" cy="450" r="420" stroke="url(#redHudGlow)" strokeWidth="2" strokeDasharray="12 6" opacity="0.6" />
          <circle cx="500" cy="450" r="340" stroke="url(#redHudGlow)" strokeWidth="3" opacity="0.8" />
          <circle cx="500" cy="450" r="260" stroke="url(#redHudGlow)" strokeWidth="2" strokeDasharray="8 4" opacity="0.7" />
          <circle cx="500" cy="450" r="180" stroke="url(#redHudGlow)" strokeWidth="4" opacity="0.9" />

          {/* Sci-Fi Tech Ticks */}
          <path d="M 120 450 A 380 380 0 0 1 880 450" stroke="#FF0033" strokeWidth="4" opacity="0.7" />
        </svg>
      </div>

      {/* ── 3. TOP HEADER BAR: NANDINI CREATIVE SHOWCASE ── */}
      <header className="relative z-20 w-full flex items-center justify-between pt-2 sm:pt-4 px-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start font-sans"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase">
            NANDINI VADDEPALLI
          </span>
          <span className="text-xs sm:text-sm font-heading font-black tracking-wider text-white uppercase mt-0.5">
            GAMING & BRAND SHOWCASE 2025
          </span>
        </motion.div>

        <div className="flex items-center gap-2 bg-red-950/60 backdrop-blur-md px-3 py-1 rounded-full border border-red-500/40 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-xs font-mono font-bold text-red-300">PS5 DUALSENSE EDITION</span>
        </div>
      </header>

      {/* ── 4. CENTERPIECE: ARCHED FAN OF 9 PROJECT CARDS + FOREGROUND 3D CONTROLLER ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto px-2">
        
        <div className="relative w-full max-w-5xl h-[360px] sm:h-[430px] md:h-[490px] flex items-center justify-center">
          
          {/* ARCHED PROJECT CARDS FAN */}
          <div className="absolute inset-0 flex items-center justify-center">
            {PROJECT_CARDS.map((card) => {
              const isActive = activeCard === card.id;
              return (
                <motion.div
                  key={card.id}
                  onHoverStart={() => setActiveCard(card.id)}
                  style={{
                    top: card.top,
                    transformOrigin: 'bottom center',
                  }}
                  animate={{
                    rotate: card.rotate,
                    scale: isActive ? card.scale * 1.12 : card.scale,
                    z: isActive ? 50 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`absolute w-28 sm:w-36 md:w-44 h-40 sm:h-52 md:h-60 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-2xl ${
                    isActive
                      ? 'border-3 border-red-500 shadow-[0_0_30px_rgba(255,0,50,0.9)] z-30'
                      : 'border-2 border-red-500/70 shadow-[0_0_15px_rgba(255,0,50,0.5)] z-10 opacity-90'
                  }`}
                >
                  {/* Card Background Image */}
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover filter brightness-90 contrast-105" />
                  
                  {/* Red Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

                  {/* Card Title Header */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                    <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-mono font-black text-[8px] sm:text-[9px] uppercase tracking-wider">
                      {card.category}
                    </span>
                    <Star className="w-3 h-3 fill-red-500 text-red-500" />
                  </div>

                  {/* Card Bottom Title */}
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <h3 className="font-heading font-black text-xs sm:text-sm text-white tracking-tight leading-tight uppercase drop-shadow-md">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FOREGROUND 3D PS5 DUALSENSE CONTROLLER */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-[-10%] sm:bottom-[-6%] w-[260px] sm:w-[380px] md:w-[460px] z-40 pointer-events-none"
          >
            <PS5ControllerSVG className="w-full h-auto" />
          </motion.div>

        </div>
      </div>

      {/* ── 5. BOTTOM NAVIGATION BAR ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t border-red-900/40 px-2">
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 text-white font-heading font-black text-xs uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl cursor-pointer"
          >
            <span>EXPLORE ALL PROJECTS</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : (
          <span className="text-xs font-mono font-bold text-slate-400">
            © 2025 Nandini Vaddepalli • PS5 Edition
          </span>
        )}

        <div className="flex items-center gap-2 bg-red-950/80 px-3.5 py-1 rounded-full border border-red-500/40">
          <Sparkles className="w-3.5 h-3.5 text-red-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-red-200">9 Interactive Showcase Cards</span>
        </div>
      </footer>

    </div>
  );
};

export default PS5GamingHeroScreen;
