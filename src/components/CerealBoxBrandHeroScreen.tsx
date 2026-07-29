import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Edit2, Check } from 'lucide-react';

interface CerealBoxBrandHeroScreenProps {
  onScrollNext?: () => void;
}

export const CerealBoxBrandHeroScreen: React.FC<CerealBoxBrandHeroScreenProps> = ({ onScrollNext }) => {
  const [line1, setLine1] = useState('UNDER');
  const [line2, setLine2] = useState('ARMOUR');
  const [isEditing, setIsEditing] = useState(false);
  const [tempL1, setTempL1] = useState(line1);
  const [tempL2, setTempL2] = useState(line2);

  const handleSave = () => {
    if (tempL1.trim()) setLine1(tempL1.trim().toUpperCase());
    if (tempL2.trim()) setLine2(tempL2.trim().toUpperCase());
    setIsEditing(false);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-[#050505] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/20 shadow-2xl">
      
      {/* ── 1. BACKGROUND GLOW & PACKAGING BACKDROP ── */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(0,180,255,0.15)_0%,_rgba(255,0,120,0.1)_40%,_rgba(5,5,5,1)_85%)] pointer-events-none" />

      {/* ── 2. TOP HEADER BAR ── */}
      <header className="relative z-20 w-full flex items-center justify-between pt-2 sm:pt-4 px-2">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-xs sm:text-sm tracking-widest text-cyan-400 uppercase">
            3D PACKAGING BRANDING
          </span>
        </div>

        {/* Preset Buttons & Edit */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setLine1('UNDER'); setLine2('ARMOUR'); }}
            className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors cursor-pointer ${line1 === 'UNDER' ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            UNDER ARMOUR
          </button>
          <button
            onClick={() => { setLine1('NANDINI'); setLine2('PORTFOLIO'); }}
            className={`px-3 py-1 rounded text-xs font-mono font-bold transition-colors cursor-pointer ${line1 === 'NANDINI' ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            NANDINI PORTFOLIO
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── 3. CENTERPIECE: HIGH-PRECISION 3D PACKAGING BRAND TYPOGRAPHY ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto px-2">
        
        {isEditing ? (
          <div className="flex flex-col items-center gap-3 bg-black/90 p-5 rounded-xl border-2 border-white z-30 shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white">Line 1:</span>
              <input
                type="text"
                value={tempL1}
                onChange={(e) => setTempL1(e.target.value)}
                className="bg-white text-black font-heading font-black px-2 py-1 rounded uppercase text-sm"
                autoFocus
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-white">Line 2:</span>
              <input
                type="text"
                value={tempL2}
                onChange={(e) => setTempL2(e.target.value)}
                className="bg-white text-black font-heading font-black px-2 py-1 rounded uppercase text-sm"
              />
            </div>
            <button onClick={handleSave} className="px-4 py-1 bg-cyan-400 text-black font-black rounded text-xs">
              Save Packaging Brand
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-5xl h-[330px] sm:h-[410px] md:h-[470px] flex flex-col items-center justify-center cursor-pointer my-auto"
            onClick={() => setIsEditing(true)}
          >
            {/* Ultra High Precision Pure SVG 3D Brand Composition Canvas */}
            <svg viewBox="0 0 1050 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
              <defs>
                {/* 1. U Cyan 3D Gradient */}
                <linearGradient id="uCyanFront" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C2F3FF" />
                  <stop offset="30%" stopColor="#33C6FF" />
                  <stop offset="100%" stopColor="#0066CC" />
                </linearGradient>
                <linearGradient id="uCyanSide" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004499" />
                  <stop offset="100%" stopColor="#001F55" />
                </linearGradient>

                {/* 2. D Yellow Lightning Gradient */}
                <linearGradient id="dYellowFront" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7A3" />
                  <stop offset="40%" stopColor="#FFCC00" />
                  <stop offset="100%" stopColor="#FF9900" />
                </linearGradient>

                {/* 3. Green R 3D Gradient */}
                <linearGradient id="rGreenFront" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C4FF33" />
                  <stop offset="50%" stopColor="#66CC00" />
                  <stop offset="100%" stopColor="#2E8800" />
                </linearGradient>

                {/* 4. Hot Pink Donut Stitched Gradient */}
                <radialGradient id="oPinkDonut" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF3399" />
                  <stop offset="70%" stopColor="#FF007F" />
                  <stop offset="100%" stopColor="#B30059" />
                </radialGradient>

                {/* 5. U Blue Glass Gradient */}
                <linearGradient id="uBlueGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#66E0FF" />
                  <stop offset="50%" stopColor="#00A3FF" />
                  <stop offset="100%" stopColor="#0044CC" />
                </linearGradient>

                {/* 6. R Yellow Bubble Gradient */}
                <linearGradient id="rYellowBubble" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE633" />
                  <stop offset="50%" stopColor="#FFB700" />
                  <stop offset="100%" stopColor="#FF6600" />
                </linearGradient>
              </defs>

              {/* Top Right ™ Symbol */}
              <text x="910" y="85" fill="#FFFFFF" fontSize="22" fontFamily="Arial Black, sans-serif" fontWeight="900">
                TM
              </text>

              {/* ── LINE 1: UNDER (OR CUSTOM LINE 1) ── */}
              <g id="line1-group" transform="translate(100, 30)">
                
                {/* 1. LETTER U (MASSIVE EXTRUDED 3D CYAN BLOCK, TILTED -4 DEG) */}
                <g id="u-3d-custom" transform="translate(0, 10) rotate(-4)">
                  {/* Extruded Side Shadow Face */}
                  <path d="M 20 20 L 140 20 L 140 120 C 140 160 110 180 80 180 C 50 180 20 160 20 120 Z" fill="url(#uCyanSide)" transform="translate(-16, 16)" />
                  {/* Main 3D Front Face with Thick White Stroke */}
                  <path d="M 20 20 L 140 20 L 140 120 C 140 160 110 180 80 180 C 50 180 20 160 20 120 Z" fill="url(#uCyanFront)" stroke="#FFFFFF" strokeWidth="12" />
                  {/* Inner Hole Cutout */}
                  <path d="M 55 20 L 105 20 L 105 110 C 105 125 95 138 80 138 C 65 138 55 125 55 110 Z" fill="#050505" stroke="#FFFFFF" strokeWidth="7" />
                  {/* Custom Label Char */}
                  <text x="80" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="115" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line1[0] || 'U'}
                  </text>
                </g>

                {/* 2. LETTER N (WHITE SANS-SERIF BEHIND D) */}
                <g id="n-white" transform="translate(170, 35)">
                  <text x="0" y="115" fill="#FFFFFF" fontSize="140" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line1[1] || 'N'}
                  </text>
                </g>

                {/* 3. LETTER D (YELLOW 3D LIGHTNING BLOCK, TILTED +6 DEG OVERLAPPING N & E) */}
                <g id="d-yellow-lightning" transform="translate(260, 5) rotate(6)">
                  {/* Extruded Shadow */}
                  <rect x="0" y="0" width="125" height="155" rx="18" fill="#003399" transform="translate(12, 12)" />
                  {/* Main Yellow Lightning Block */}
                  <rect x="0" y="0" width="125" height="155" rx="18" fill="url(#dYellowFront)" stroke="#0044CC" strokeWidth="9" />
                  {/* White Bevel Highlight Outline */}
                  <rect x="4" y="4" width="117" height="147" rx="14" fill="none" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                  <text x="62" y="120" textAnchor="middle" fill="#050505" fontSize="130" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line1[2] || 'D'}
                  </text>
                </g>

                {/* 4. LETTER E (NAVY BLUE BLOCK WITH ORANGE BEVEL FRAME) */}
                <g id="e-navy-orange" transform="translate(435, 25)">
                  <rect x="0" y="0" width="125" height="145" rx="14" fill="#FF8800" transform="translate(8, 8)" />
                  <rect x="0" y="0" width="125" height="145" rx="14" fill="#1A2B5C" stroke="#FFFFFF" strokeWidth="7" />
                  {/* Inner Orange Rim */}
                  <rect x="6" y="6" width="113" height="133" rx="10" fill="none" stroke="#FF9900" strokeWidth="5" />
                  <text x="62" y="115" textAnchor="middle" fill="#FFFFFF" fontSize="125" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line1[3] || 'E'}
                  </text>
                </g>

                {/* 5. LETTER R (BOLD WHITE GEOMETRIC SANS-SERIF) */}
                <g id="r-white-top" transform="translate(585, 35)">
                  <text x="0" y="115" fill="#FFFFFF" fontSize="140" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line1[4] || 'R'}
                  </text>
                </g>

              </g>

              {/* ── LINE 2: ARMOUR (OR CUSTOM LINE 2) ── */}
              <g id="line2-group" transform="translate(80, 230)">
                
                {/* 1. LETTER A (BOLD WHITE SANS-SERIF) */}
                <g id="a-white-bottom" transform="translate(10, 35)">
                  <text x="0" y="120" fill="#FFFFFF" fontSize="145" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line2[0] || 'A'}
                  </text>
                </g>

                {/* 2. LETTER R (3D LIME GREEN GRADIENT BLOCK WITH BLUE 3D SHADOW, TILTED -6 DEG) */}
                <g id="r-green-3d" transform="translate(135, 15) rotate(-6)">
                  {/* Extruded Blue Shadow */}
                  <rect x="0" y="0" width="120" height="155" rx="20" fill="#0055CC" transform="translate(-12, 12)" />
                  {/* Green Face */}
                  <rect x="0" y="0" width="120" height="155" rx="20" fill="url(#rGreenFront)" stroke="#FFFFFF" strokeWidth="9" />
                  <text x="60" y="122" textAnchor="middle" fill="#050505" fontSize="135" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line2[1] || 'R'}
                  </text>
                </g>

                {/* 3. LETTER M (BOLD WHITE SANS-SERIF BEHIND O) */}
                <g id="m-white-bottom" transform="translate(280, 35)">
                  <text x="0" y="120" fill="#FFFFFF" fontSize="145" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line2[2] || 'M'}
                  </text>
                </g>

                {/* 4. LETTER O (HOT PINK FABRIC DONUT RING WITH STITCHING & SCISSOR CUT) */}
                <g id="o-pink-fabric" transform="translate(435, 15)">
                  <circle cx="72" cy="72" r="70" fill="url(#oPinkDonut)" stroke="#FFFFFF" strokeWidth="9" />
                  <circle cx="72" cy="72" r="32" fill="#050505" stroke="#FFFFFF" strokeWidth="7" />
                  {/* White Dashed Stitching Circle */}
                  <circle cx="72" cy="72" r="52" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeDasharray="9 6" />
                  {/* Scissor Cut Icon at Top */}
                  <g transform="translate(54, -6)">
                    <path d="M 0 12 L 18 0 M 0 0 L 18 12" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="-2" cy="12" r="4.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                    <circle cx="-2" cy="0" r="4.5" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
                  </g>
                </g>

                {/* 5. LETTER U (3D CYAN GLASS BLOCK WITH YELLOW BORDER) */}
                <g id="u-cyan-glass" transform="translate(605, 20)">
                  <rect x="0" y="0" width="115" height="150" rx="20" fill="#FF8800" transform="translate(8, 8)" />
                  <rect x="0" y="0" width="115" height="150" rx="20" fill="url(#uBlueGlass)" stroke="#FFFFFF" strokeWidth="8" />
                  {/* Inner Yellow Border Rim */}
                  <rect x="5" y="5" width="105" height="140" rx="15" fill="none" stroke="#FFCC00" strokeWidth="4" />
                  <text x="57" y="118" textAnchor="middle" fill="#FFFFFF" fontSize="130" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line2[4] || 'U'}
                  </text>
                </g>

                {/* 6. LETTER R (GLOSSY 3D YELLOW BUBBLE LETTER WITH MAGENTA OUTLINE) */}
                <g id="r-yellow-bubble" transform="translate(745, 15)">
                  <rect x="0" y="0" width="120" height="155" rx="28" fill="#B30059" transform="translate(10, 10)" />
                  <rect x="0" y="0" width="120" height="155" rx="28" fill="url(#rYellowBubble)" stroke="#FFFFFF" strokeWidth="9" />
                  <text x="60" y="122" textAnchor="middle" fill="#050505" fontSize="135" fontWeight="900" fontFamily="Arial Black, sans-serif">
                    {line2[5] || 'R'}
                  </text>
                </g>

              </g>
            </svg>
          </motion.div>
        )}

      </div>

      {/* ── 4. PACKAGE LABEL SUB-CAPTIONS FOOTER ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t border-white/20 px-2">
        <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">
          NATURALLY FLAVORED
        </span>

        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-heading font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-xl cursor-pointer"
          >
            <span>DISCOVER CREATIVE PORTFOLIO</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : null}

        <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
          NET WT 15.4 OZ (436g) ✕ UNDER ARMOUR
        </span>
      </footer>

    </div>
  );
};

export default CerealBoxBrandHeroScreen;
