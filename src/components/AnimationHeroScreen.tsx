import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Edit2, Check, Plus } from 'lucide-react';
import { ScooterRiderSVG } from './ScooterRiderSVG';
import { FishLogoSVG } from './FishLogoSVG';

interface AnimationHeroScreenProps {
  onScrollNext?: () => void;
}

export const AnimationHeroScreen: React.FC<AnimationHeroScreenProps> = ({ onScrollNext }) => {
  const [designerName, setDesignerName] = useState('Lập Văn');
  const [yearText, setYearText] = useState('2025');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(designerName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setDesignerName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div className="relative w-full h-full min-h-[540px] sm:min-h-[620px] md:min-h-[680px] bg-[#004DE6] text-white flex flex-col justify-between items-center overflow-hidden select-none px-4 sm:px-8 py-3 sm:py-6 rounded-2xl sm:rounded-3xl border border-blue-400/20 shadow-2xl">
      
      {/* ── 1. BACKGROUND GRADIENT & FINE TECH BLUEPRINT GRID ── */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_25%,_#0062FF_0%,_#0042D9_50%,_#001C75_100%)] pointer-events-none" />

      {/* Blueprint Grid Lines (Fine white technical grid) */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '38px 38px',
        }}
      />

      {/* ── 2. BOTTOM-LEFT RADIANT SUNBURST FLARE & SPEED LIGHT BEAMS ── */}
      <div className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] pointer-events-none z-0">
        {/* Core Intense White Radial Light Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#FFFFFF_0%,_rgba(180,225,255,0.85)_30%,_rgba(0,70,230,0)_75%)] blur-xl" />
        
        {/* Speed Light Ray Beams blasting diagonally towards top-right */}
        <svg viewBox="0 0 600 600" fill="none" className="w-full h-full opacity-75">
          <path d="M 0 600 L 580 -80 L 640 -80 L 0 600 Z" fill="url(#sunBeam1)" />
          <path d="M 0 600 L 680 40 L 680 100 L 0 600 Z" fill="url(#sunBeam2)" />
          <path d="M 0 600 L 420 -180 L 480 -180 L 0 600 Z" fill="url(#sunBeam1)" />
          <path d="M 0 600 L 720 180 L 720 240 L 0 600 Z" fill="url(#sunBeam2)" opacity="0.5" />
          <defs>
            <linearGradient id="sunBeam1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sunBeam2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#99CCFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0042D9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Speed Smoke Cloud Trails */}
        <div className="absolute bottom-[25%] left-[22%] w-72 h-36 bg-white/40 blur-xl rounded-full transform -rotate-25 pointer-events-none" />
      </div>

      {/* ── 3. TOP NAVIGATION / HEADER BAR ── */}
      <header className="relative z-20 w-full flex items-center justify-between pt-1 px-1 sm:px-2">
        
        {/* Top-Left Header Badge: SENIOR GRAPHIC DESIGN 2025 VERSION */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start font-sans"
        >
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/90 leading-tight">
            SENIOR
          </span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/90 leading-tight">
            GRAPHIC DESIGN
          </span>
          
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-none drop-shadow-md">
              {yearText}
            </span>

            {/* Sparkle Crosshair Matrix matching reference image */}
            <div className="flex flex-col gap-0.5 text-white/90">
              <div className="flex items-center gap-1">
                <Plus className="w-3 h-3 stroke-[3]" />
                <Plus className="w-3 h-3 stroke-[3]" />
              </div>
              <div className="flex items-center gap-1 pl-1.5">
                <Plus className="w-3 h-3 stroke-[3]" />
              </div>
            </div>
          </div>

          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-white/90 mt-0.5">
            VERSION
          </span>
        </motion.div>

        {/* Top-Right Branding Logo: Fish doodle + Lập Văn */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-end text-right"
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Vector Fish Logo */}
            <FishLogoSVG className="w-8 h-6 sm:w-10 sm:h-7" />
            
            {isEditingName ? (
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/30">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                  className="bg-transparent font-heading font-black text-white text-base sm:text-xl outline-none text-right border-b border-white/50 px-1 w-28 sm:w-36"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="p-1 rounded bg-emerald-400 text-black font-bold cursor-pointer hover:bg-emerald-300"
                  title="Save Name"
                >
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 group">
                <span className="font-heading font-black text-xl sm:text-3xl tracking-tight text-white drop-shadow-md">
                  {designerName}
                </span>
                <button
                  onClick={() => {
                    setTempName(designerName);
                    setIsEditingName(true);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer"
                  title="Edit Name"
                >
                  <Edit2 className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </header>

      {/* ── 4. CENTERPIECE CANVAS: ZOOMED & CENTERED MASSIVE 3D "PORTFOLIO" & SCOOTER RIDER ── */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-auto px-2">
        
        {/* Main Stage Grid Container */}
        <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
          
          {/* CENTERED & ZOOMED MASSIVE DIAGONAL 3D TYPOGRAPHY "PORTFOLIO" */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, rotate: -28 }}
            animate={{ scale: 1.15, opacity: 1, rotate: -28 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center font-sans font-black select-none z-10 text-center transform scale-110 sm:scale-125"
          >
            {/* Deep Navy 3D Ground Shadow cast underneath and behind text */}
            <div className="absolute top-8 left-8 text-[#001556]/90 blur-[3px] pointer-events-none select-none -z-10">
              <span className="block text-6xl sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-[0.82] tracking-tighter uppercase font-black">
                PORT
              </span>
              <span className="block text-6xl sm:text-9xl md:text-[11rem] lg:text-[13rem] leading-[0.82] tracking-tighter uppercase font-black -mt-2 sm:-mt-4">
                FOLIO
              </span>
            </div>

            {/* Line 1: "PORT" */}
            <h1
              className="text-[#FAF9F6] leading-[0.82] tracking-tighter uppercase font-black relative drop-shadow-[0_20px_40px_rgba(0,15,80,0.9)]"
              style={{
                fontSize: 'clamp(4.2rem, 12vw, 12.5rem)',
                fontFamily: '"Outfit", "Fredoka", "Arial Black", sans-serif',
                WebkitTextStroke: '2.5px #FFFFFF',
                backgroundImage: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #E0E7FF 65%, #93C5FD 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              PORT
            </h1>

            {/* Line 2: "FOLIO" */}
            <h1
              className="text-[#FAF9F6] leading-[0.82] tracking-tighter uppercase font-black relative drop-shadow-[0_25px_50px_rgba(0,15,80,0.95)] -mt-2 sm:-mt-4"
              style={{
                fontSize: 'clamp(4.2rem, 12vw, 12.5rem)',
                fontFamily: '"Outfit", "Fredoka", "Arial Black", sans-serif',
                WebkitTextStroke: '2.5px #FFFFFF',
                backgroundImage: 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #E0E7FF 65%, #93C5FD 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              FOLIO
            </h1>
          </motion.div>

          {/* DYNAMIC PURE VECTOR SVG SCOOTER RIDER (OVERLAPPING LOWER LEFT IN FRONT OF TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -90, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[3%] sm:left-[10%] bottom-[2%] sm:bottom-[8%] w-[190px] sm:w-[290px] md:w-[370px] lg:w-[420px] z-30 pointer-events-none"
          >
            {/* Animated Floating Riding Motion */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-14, -13, -14] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ScooterRiderSVG className="w-full h-auto" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── 5. BOTTOM NAVIGATION BAR ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pb-1 px-1 sm:px-2 pt-2 border-t border-white/20">
        
        {/* Scroll Down Action Button */}
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white text-[#0042D9] font-heading font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer group"
          >
            <span>SEE FULL PORTFOLIO</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        ) : (
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-white/90 uppercase">
            © 2025 {designerName} Portfolio
          </span>
        )}

        {/* Status Badge */}
        <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full border border-white/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold text-white/95">Senior Graphic Design 2025 Edition</span>
        </div>
      </footer>

    </div>
  );
};

export default AnimationHeroScreen;
