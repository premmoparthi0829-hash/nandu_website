import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';

interface Production2026HeroScreenProps {
  onScrollNext?: () => void;
}

export const Production2026HeroScreen: React.FC<Production2026HeroScreenProps> = ({ onScrollNext }) => {
  const [titleText, setTitleText] = useState('PRODUCTION');
  const [yearText, setYearText] = useState('2026');
  const [teamText, setTeamText] = useState('ip生产队');
  const [redBadgeText, setRedBadgeText] = useState('小红书');
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(titleText);

  const handleSave = () => {
    if (tempTitle.trim()) setTitleText(tempTitle.trim().toUpperCase());
    setIsEditing(false);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-[#090014] text-slate-950 flex flex-col justify-between items-center overflow-hidden select-none p-2 sm:p-4 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/40 shadow-2xl">
      
      {/* ── 1. BACKGROUND FULL-BLEED V-BURST COLOR RAYS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 650" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="rayGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E652" />
              <stop offset="100%" stopColor="#00B33C" />
            </linearGradient>
            <linearGradient id="rayOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF7700" />
              <stop offset="100%" stopColor="#FF9900" />
            </linearGradient>
            <linearGradient id="rayMagenta" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FF007F" />
              <stop offset="50%" stopColor="#D6006E" />
              <stop offset="100%" stopColor="#7A0043" />
            </linearGradient>
            <linearGradient id="rayCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C3FF" />
              <stop offset="100%" stopColor="#0088FF" />
            </linearGradient>
            <linearGradient id="rayPurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7700FF" />
              <stop offset="100%" stopColor="#4400B3" />
            </linearGradient>
          </defs>

          {/* 5 Rays */}
          <polygon points="0,0 0,380 340,650 0,650" fill="url(#rayGreen)" />
          <polygon points="0,0 260,0 460,650 340,650" fill="url(#rayOrange)" />
          <polygon points="260,0 740,0 540,650 460,650" fill="url(#rayMagenta)" />
          <polygon points="740,0 1000,260 1000,520 540,650" fill="url(#rayCyan)" />
          <polygon points="1000,0 1000,260 740,0" fill="url(#rayPurple)" />

          {/* White Diagonal Stripes */}
          <polygon points="0,0 160,0 0,320" fill="#FFFFFF" />
          <polygon points="840,0 1000,0 1000,320" fill="#FFFFFF" />
        </svg>

        {/* Floating Dark 4-Point Sparkle Stars (✦) */}
        <div className="absolute top-[26%] left-[16%] text-[#090014] font-black text-4xl sm:text-5xl animate-pulse pointer-events-none drop-shadow-md">
          ✦
        </div>
        <div className="absolute top-[22%] right-[8%] text-[#090014] font-black text-4xl sm:text-5xl animate-pulse pointer-events-none drop-shadow-md" style={{ animationDelay: '1s' }}>
          ✦
        </div>

        {/* White Ribbon Loop Accent on Left */}
        <div className="absolute top-[22%] left-[5%] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-16 h-16 sm:w-24 sm:h-24 text-white stroke-current stroke-[4]">
            <path d="M 10 70 C 30 10, 70 20, 50 60 C 30 100, 80 80, 90 40" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ── 2. HEADER BAR & TYPOGRAPHY ── */}
      <header className="relative z-20 w-full flex flex-col items-center justify-center pt-2 sm:pt-4">
        
        {/* Top Logo Badge */}
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-1 cursor-pointer"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 bg-black rounded-lg flex items-center justify-center shadow-lg border border-white/20">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#FF007F] stroke-current stroke-[3]">
              <path d="M 3 12 L 7 6 L 11 18 L 15 8 L 19 14 L 21 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-sans font-black text-sm sm:text-base tracking-tight text-slate-950">
            {teamText}
          </span>
        </motion.div>

        {/* PRODUCTION TITLE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex items-center justify-center cursor-pointer group my-0.5"
          onClick={() => setIsEditing(true)}
        >
          {isEditing ? (
            <div className="flex items-center gap-2 bg-black p-2 rounded-xl border border-white z-30 shadow-2xl">
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                className="bg-white text-black font-heading font-black px-2 py-1 rounded text-base sm:text-lg uppercase"
                autoFocus
              />
              <button onClick={handleSave} className="p-1.5 bg-emerald-400 text-black rounded font-bold">
                <Check className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <h1
              className="font-heading font-black uppercase text-slate-950 tracking-[0.14em] text-4xl sm:text-7xl md:text-8xl drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
              style={{
                fontFamily: '"Outfit", "Fredoka", "Arial Black", sans-serif',
                fontWeight: 900,
              }}
            >
              {titleText}
            </h1>
          )}
        </motion.div>

        {/* SUBTITLE BADGES: 2026 + 小红书 + ip生产队 */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <span className="font-heading font-black text-2xl sm:text-4xl text-slate-950 tracking-tight leading-none">
            {yearText}
          </span>
          <span className="bg-[#FF2442] text-white px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full font-sans font-black text-xs sm:text-sm shadow-md border border-white/50">
            {redBadgeText}
          </span>
          <span className="bg-white text-slate-950 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full font-sans font-black text-xs sm:text-sm shadow-md border-2 border-slate-950">
            {teamText}
          </span>
        </motion.div>
      </header>

      {/* ── 3. HIGH-PRECISION 3D ICON STAGE (EXACT MATCHING ALL ICONS FROM PHOTO) ── */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-auto px-2">
        
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full max-w-5xl h-[310px] sm:h-[390px] md:h-[450px] flex items-center justify-center"
        >
          <svg viewBox="0 0 1000 620" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
            <defs>
              {/* Gold Gradient */}
              <linearGradient id="goldGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF7CC" />
                <stop offset="25%" stopColor="#FFE066" />
                <stop offset="55%" stopColor="#FFB700" />
                <stop offset="80%" stopColor="#D68A00" />
                <stop offset="100%" stopColor="#8A5200" />
              </linearGradient>

              {/* Blue Glass Cushion Gradient */}
              <linearGradient id="glassBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#0066FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#001F99" stopOpacity="0.95" />
              </linearGradient>

              {/* Amber Orange Glass 'b' Block Gradient */}
              <linearGradient id="glassAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB733" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FF7700" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#CC3300" stopOpacity="0.95" />
              </linearGradient>

              {/* Magenta Pink Gift Box */}
              <linearGradient id="pinkBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF4DB8" />
                <stop offset="100%" stopColor="#B30066" />
              </linearGradient>

              {/* Yellow Plus Gradient */}
              <linearGradient id="yellowPlusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF8800" />
              </linearGradient>
            </defs>

            {/* ── BACKGROUND 3D TUBES / CYLINDERS ── */}
            {/* Purple Tube Standing (Left) */}
            <rect x="360" y="240" width="28" height="180" rx="14" fill="#7700FF" transform="rotate(-15 360 240)" />
            <ellipse cx="366" cy="242" rx="14" ry="7" fill="#AA55FF" transform="rotate(-15 360 240)" />

            {/* Dark Blue Tube Standing (Right) */}
            <rect x="570" y="360" width="24" height="150" rx="12" fill="#0033CC" transform="rotate(25 570 360)" />

            {/* Green Tube Standing (Right) */}
            <rect x="690" y="320" width="22" height="140" rx="11" fill="#00E652" transform="rotate(45 690 320)" />

            {/* Pink Tube with 3D Heart Top (Right) */}
            <g transform="translate(680, 290) rotate(35)">
              <rect x="0" y="0" width="26" height="135" rx="13" fill="#FF007F" />
              {/* 3D Heart Top Cap */}
              <path d="M 13 0 C 7 -12, -6 0, 13 18 C 32 0, 19 -12, 13 0 Z" fill="#FF4DB8" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>

            {/* ── LEFT SIDE 3D OBJECTS ── */}

            {/* 1. Translucent Blue Glass Cushion Block (Far Left) */}
            <g id="blue-cushion-block" transform="translate(70, 390) rotate(-10)">
              <rect x="0" y="0" width="170" height="130" rx="35" fill="url(#glassBlue)" stroke="#FFFFFF" strokeWidth="3" />
              <rect x="15" y="15" width="140" height="100" rx="25" fill="none" stroke="#FFFFFF" strokeWidth="3" opacity="0.6" />
              <ellipse cx="145" cy="45" rx="12" ry="8" fill="#00E5FF" opacity="0.8" />
            </g>

            {/* 2. Magenta Pink Cylinder Horizontal (Bottom Left) */}
            <rect x="180" y="520" width="140" height="32" rx="16" fill="#FF007F" transform="rotate(8 180 520)" />
            <ellipse cx="180" cy="536" rx="16" ry="16" fill="#FF66C4" />

            {/* 3. Magenta Pink Gift Box with Orange Ribbon Bow */}
            <g id="magenta-gift-box" transform="translate(250, 300) rotate(-12)">
              <rect x="0" y="0" width="100" height="100" rx="16" fill="url(#pinkBoxGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
              <rect x="40" y="0" width="20" height="100" fill="#FFCC00" />
              <rect x="0" y="40" width="100" height="20" fill="#FFCC00" />
              <circle cx="38" cy="-6" r="16" fill="#FFCC00" />
              <circle cx="62" cy="-6" r="16" fill="#FFCC00" />
              <circle cx="50" cy="0" r="10" fill="#FF9900" />
            </g>

            {/* 4. Bright Yellow Extruded 3D Plus (+) */}
            <g id="yellow-plus-3d" transform="translate(290, 420) rotate(15)">
              <path d="M 22 0 L 44 0 L 44 22 L 66 22 L 66 44 L 44 44 L 44 66 L 22 66 L 22 44 L 0 44 L 0 22 L 22 22 Z" fill="url(#yellowPlusGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
            </g>

            {/* ── RIGHT SIDE 3D OBJECTS ── */}

            {/* 5. Translucent Amber Orange Glass Block 'b' */}
            <g id="orange-glass-b" transform="translate(670, 350) rotate(12)">
              <rect x="0" y="0" width="170" height="150" rx="38" fill="url(#glassAmber)" stroke="#FFFFFF" strokeWidth="3" />
              {/* Circular Hole Cutout for letter 'b' */}
              <ellipse cx="105" cy="85" rx="32" ry="38" fill="none" stroke="#FFFFFF" strokeWidth="14" opacity="0.85" />
            </g>

            {/* 6. Orange 3D Star/Plus Pillar */}
            <g transform="translate(600, 430) rotate(-15)">
              <path d="M 18 0 L 36 0 L 36 18 L 54 18 L 54 36 L 36 36 L 36 54 L 18 54 L 18 36 L 0 36 L 0 18 L 18 18 Z" fill="#FF6600" stroke="#FFFFFF" strokeWidth="2" />
            </g>

            {/* 7. Cyan/Blue Tube (Bottom Right) */}
            <rect x="760" y="500" width="160" height="34" rx="17" fill="#0099FF" transform="rotate(-15 760 500)" />
            <ellipse cx="920" cy="460" rx="17" ry="17" fill="#66CCFF" transform="rotate(-15 760 500)" />

            {/* ── 8. CENTERPIECE: MASSIVE 3D GOLD TIKTOK NOTE & LOTUS SPLASH ── */}
            <g id="centerpiece-gold-lotus">
              
              {/* Golden Lotus Pedestal Base */}
              <g id="lotus-crown-base">
                <path d="M 370 480 Q 500 360 630 480 Q 500 580 370 480 Z" fill="url(#goldGloss)" stroke="#FFFFFF" strokeWidth="3" />
                <path d="M 340 450 Q 500 330 660 450 Q 500 550 340 450 Z" fill="url(#goldGloss)" opacity="0.85" />
                <path d="M 400 420 Q 500 310 600 420 Q 500 510 400 420 Z" fill="url(#goldGloss)" opacity="0.95" />
              </g>

              {/* MASSIVE 3D GOLDEN TIKTOK / MUSIC NOTE ICON */}
              <g id="gold-tiktok-note-massive" transform="translate(410, 240)">
                
                {/* 3D Extruded Deep Bronze Shadow */}
                <path
                  d="M 60 140 C 35 140 15 120 15 95 C 15 70 35 50 60 50 C 70 50 80 53 88 58 L 88 10 C 88 5 93 0 98 0 L 135 0 C 140 0 145 5 145 10 C 145 35 165 55 190 55 C 195 55 200 60 200 65 L 200 95 C 200 100 195 105 190 105 C 165 105 145 90 135 70 L 135 100 C 135 125 110 145 85 145 Z"
                  fill="#543000"
                  transform="translate(10, 14)"
                />

                {/* Main Front 3D Metallic Gold Note Body */}
                <path
                  d="M 60 140 C 35 140 15 120 15 95 C 15 70 35 50 60 50 C 70 50 80 53 88 58 L 88 10 C 88 5 93 0 98 0 L 135 0 C 140 0 145 5 145 10 C 145 35 165 55 190 55 C 195 55 200 60 200 65 L 200 95 C 200 100 195 105 190 105 C 165 105 145 90 135 70 L 135 100 C 135 125 110 145 85 145 Z"
                  fill="url(#goldGloss)"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                />

                {/* Specular Highlight Contour */}
                <path
                  d="M 60 132 C 42 132 25 116 25 95 C 25 74 42 58 60 58 C 68 58 76 61 82 65 L 82 18 L 138 18 L 138 28 C 152 48 172 58 190 58 L 190 68 C 168 68 148 52 138 35 L 138 100 C 138 118 118 135 85 135 Z"
                  fill="#FFFFFF"
                  opacity="0.8"
                />

                {/* Liquid Gold Splash Droplets */}
                <circle cx="8" cy="115" r="7" fill="url(#goldGloss)" />
                <circle cx="-12" cy="135" r="5" fill="url(#goldGloss)" />
                <circle cx="215" cy="45" r="8" fill="url(#goldGloss)" />
                <circle cx="230" cy="70" r="5" fill="url(#goldGloss)" />
              </g>

            </g>

          </svg>
        </motion.div>
      </div>

      {/* ── 4. BOTTOM FOOTER ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t border-white/20 px-1 sm:px-2">
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-slate-950 text-white font-heading font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl cursor-pointer"
          >
            <span>DISCOVER PRODUCTION</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : (
          <span className="text-xs font-mono font-bold text-slate-950">
            © 2026 PRODUCTION ip生产队
          </span>
        )}

        <div className="flex items-center gap-2 bg-black px-3.5 py-1 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-[#FF2442] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white">PRODUCTION 2026 Edition</span>
        </div>
      </footer>

    </div>
  );
};

export default Production2026HeroScreen;
