import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check, Edit2 } from 'lucide-react';

interface PinterestManifestivalHeroScreenProps {
  onScrollNext?: () => void;
}

export const PinterestManifestivalHeroScreen: React.FC<PinterestManifestivalHeroScreenProps> = ({ onScrollNext }) => {
  const [line1, setLine1] = useState('MANIFEST');
  const [line2, setLine2] = useState('IVAL');
  const [isEditing, setIsEditing] = useState(false);
  const [tempL1, setTempL1] = useState(line1);
  const [tempL2, setTempL2] = useState(line2);

  const handleSave = () => {
    if (tempL1.trim()) setLine1(tempL1.trim().toUpperCase());
    if (tempL2.trim()) setLine2(tempL2.trim().toUpperCase());
    setIsEditing(false);
  };

  return (
    <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[720px] bg-gradient-to-br from-[#6AAEFF] via-[#3B82F6] to-[#1D4ED8] text-white flex flex-col justify-between items-center overflow-hidden select-none p-3 sm:p-6 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white/40 shadow-2xl">
      
      {/* ── 1. BACKGROUND SKY BLUE GRADIENT & ATMOSPHERIC LIGHT ── */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_30%_30%,_rgba(255,255,255,0.4)_0%,_rgba(59,130,246,0.2)_50%,_transparent_80%)] pointer-events-none" />

      {/* ── 2. TOP CENTER: PINTEREST BRANDING LOGO ── */}
      <header className="relative z-20 w-full flex items-center justify-center pt-2 sm:pt-4">
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 shadow-lg"
        >
          {/* Pinterest Red Circle Badge Logo */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E60023] flex items-center justify-center shadow-md">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.065-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.378-.293 1.189-.333 1.357-.053.225-.174.273-.402.165-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </div>
          <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white drop-shadow-md">
            Pinterest
          </span>
        </motion.div>
      </header>

      {/* ── 3. CENTERPIECE: 3D BUBBLE TYPOGRAPHY & FESTIVAL ORNAMENTS ── */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-auto px-2">
        
        {/* Floating Master Stage */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full max-w-5xl h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center"
        >
          
          <svg viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,35,100,0.6)]">
            <defs>
              {/* Pink Balloon 3D Gradient */}
              <radialGradient id="pinkBalloon" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFA6D5" />
                <stop offset="40%" stopColor="#FF4DB8" />
                <stop offset="80%" stopColor="#E60073" />
                <stop offset="100%" stopColor="#99004D" />
              </radialGradient>

              {/* Coral Red Balloon 3D Gradient */}
              <radialGradient id="coralBalloon" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFC2A6" />
                <stop offset="40%" stopColor="#FF6B4A" />
                <stop offset="80%" stopColor="#E63917" />
                <stop offset="100%" stopColor="#991A00" />
              </radialGradient>

              {/* Gold Yellow Balloon 3D Gradient */}
              <radialGradient id="goldBalloon" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="40%" stopColor="#FFC72C" />
                <stop offset="80%" stopColor="#E69500" />
                <stop offset="100%" stopColor="#995D00" />
              </radialGradient>

              {/* Gloss Specular White Glow */}
              <linearGradient id="glossHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
              </linearGradient>

              {/* Gold Chain Metallic Gradient */}
              <linearGradient id="goldChain" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF4B8" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B88600" />
              </linearGradient>
            </defs>

            {/* ── 1. TOP LEFT 3D ORNAMENTS ── */}
            {/* Retro Instant Camera */}
            <g id="camera-3d" transform="translate(190, 80) rotate(-15)">
              <rect x="0" y="0" width="130" height="90" rx="16" fill="#FF66B2" stroke="#FFFFFF" strokeWidth="3" />
              <rect x="0" y="30" width="130" height="30" fill="#00E5FF" opacity="0.6" />
              <circle cx="65" cy="45" r="28" fill="#333344" stroke="#FFFFFF" strokeWidth="3" />
              <circle cx="65" cy="45" r="18" fill="#111122" />
              <circle cx="60" cy="40" r="6" fill="#FFFFFF" opacity="0.8" />
              <rect x="15" y="10" width="20" height="12" rx="3" fill="#FFCC00" />
            </g>

            {/* Gold Flower Charm */}
            <g transform="translate(345, 85) rotate(12)">
              <circle cx="20" cy="20" r="18" fill="url(#goldChain)" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="20" cy="20" r="6" fill="#FFFFFF" />
            </g>

            {/* ── 2. BOTTOM LEFT 3D ORNAMENTS ── */}
            {/* Color Pencils / Markers */}
            <g id="color-pencils" transform="translate(140, 410) rotate(-25)">
              <rect x="0" y="0" width="110" height="14" rx="7" fill="#0066FF" stroke="#FFFFFF" strokeWidth="2" />
              <rect x="10" y="-18" width="110" height="14" rx="7" fill="#FF6600" stroke="#FFFFFF" strokeWidth="2" />
              <rect x="20" y="-36" width="110" height="14" rx="7" fill="#FF007F" stroke="#FFFFFF" strokeWidth="2" />
            </g>

            {/* Red Push Pins Thumbtacks (Bottom Left) */}
            <g transform="translate(290, 480) rotate(15)">
              <path d="M 10 0 L 25 0 L 22 20 L 30 30 L 5 30 L 13 20 Z" fill="#E60023" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="17.5" y1="30" x2="17.5" y2="45" stroke="#DDDDDD" strokeWidth="4" strokeLinecap="round" />
            </g>
            <g transform="translate(330, 520) rotate(-10)">
              <path d="M 10 0 L 25 0 L 22 20 L 30 30 L 5 30 L 13 20 Z" fill="#E60023" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="17.5" y1="30" x2="17.5" y2="45" stroke="#DDDDDD" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Beaded Gold Chain Necklace looping under text */}
            <path d="M 330 380 Q 450 560 580 430" stroke="url(#goldChain)" strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray="12 6" />

            {/* ── 3. TOP RIGHT 3D ORNAMENTS ── */}
            {/* Retro Blue Sunglasses */}
            <g id="sunglasses-3d" transform="translate(540, 135) rotate(10)">
              <ellipse cx="25" cy="18" rx="20" ry="14" fill="#0066FF" stroke="#FFFFFF" strokeWidth="3" />
              <ellipse cx="65" cy="18" rx="20" ry="14" fill="#0066FF" stroke="#FFFFFF" strokeWidth="3" />
              <path d="M 45 15 L 45 18" stroke="#FFFFFF" strokeWidth="4" />
            </g>

            {/* Ice Cream Cone */}
            <g id="ice-cream" transform="translate(600, 95) rotate(18)">
              {/* Cone */}
              <polygon points="20,50 45,50 32,100" fill="#D68A00" stroke="#FFFFFF" strokeWidth="2" />
              {/* Scoops */}
              <circle cx="32" cy="45" r="18" fill="#00E652" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="32" cy="28" r="16" fill="#00C3FF" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="32" cy="14" r="14" fill="#FF4DB8" stroke="#FFFFFF" strokeWidth="2" />
            </g>

            {/* Purple Flower Charm */}
            <g transform="translate(650, 130) rotate(-12)">
              <circle cx="25" cy="25" r="22" fill="#AA55FF" stroke="#FFFFFF" strokeWidth="3" />
              <circle cx="25" cy="25" r="8" fill="#FFCC00" />
            </g>

            {/* ── 4. RIGHT SIDE 3D ORNAMENTS ── */}
            {/* Red Push Pin Next to T */}
            <g transform="translate(745, 260) rotate(45)">
              <path d="M 10 0 L 25 0 L 22 20 L 30 30 L 5 30 L 13 20 Z" fill="#E60023" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="17.5" y1="30" x2="17.5" y2="45" stroke="#DDDDDD" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Leather Suitcase / Bag */}
            <g transform="translate(680, 320) rotate(-15)">
              <rect x="0" y="0" width="100" height="70" rx="10" fill="#D68A00" stroke="#FFFFFF" strokeWidth="3" />
              <rect x="15" y="0" width="12" height="70" fill="#8A5200" />
              <rect x="73" y="0" width="12" height="70" fill="#8A5200" />
              {/* Green Tag Sticker */}
              <rect x="-10" y="35" width="30" height="25" rx="4" fill="#00E652" stroke="#FFFFFF" strokeWidth="2" />
            </g>

            {/* Blue Heart Gem Pendant (Dangling from L) */}
            <g transform="translate(650, 480) rotate(15)">
              <path d="M 20 0 C 10 -15, -10 0, 20 28 C 50 0, 30 -15, 20 0 Z" fill="#00C3FF" stroke="#FFFFFF" strokeWidth="3" opacity="0.9" />
              <path d="M 15 5 C 10 -5, 0 5, 15 20 Z" fill="#FFFFFF" opacity="0.7" />
            </g>

            {/* ── 5. CENTERPIECE: INFLATED 3D BUBBLE TYPOGRAPHY (MANIFESTIVAL) ── */}
            
            {/* LINE 1: MANIFEST (GLOSSY PINK/MAGENTA TO CORAL RED 3D BALLOON LETTERS) */}
            <g id="manifest-3d-text" transform="translate(180, 160)">
              
              {/* Letter M */}
              <g transform="translate(0, 0)">
                <path d="M 20 120 C 10 70 0 30 30 10 C 50 -5 70 20 80 40 C 90 20 110 -5 130 10 C 160 30 150 70 140 120 C 135 140 105 140 110 110 C 115 80 120 40 105 35 C 95 30 85 50 80 70 L 80 110 C 80 135 50 135 50 110 L 50 40 C 40 35 35 70 35 110 C 35 135 20 135 20 120 Z" fill="url(#pinkBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="40" cy="30" rx="10" ry="15" fill="url(#glossHighlight)" transform="rotate(-20 40 30)" />
              </g>

              {/* Letter A */}
              <g transform="translate(130, 20)">
                <path d="M 40 100 C 25 60 40 10 65 10 C 90 10 105 60 90 100 C 85 115 65 115 70 90 C 75 75 70 50 65 50 C 60 50 55 75 60 90 C 65 115 45 115 40 100 Z" fill="url(#pinkBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="55" cy="25" rx="8" ry="12" fill="url(#glossHighlight)" transform="rotate(-15 55 25)" />
              </g>

              {/* Letter N */}
              <g transform="translate(205, 10)">
                <path d="M 20 100 C 10 60 20 10 40 10 C 55 10 65 40 75 60 L 75 20 C 75 5 95 5 95 20 L 95 100 C 95 115 75 115 65 85 L 45 40 L 45 100 C 45 115 20 115 20 100 Z" fill="url(#pinkBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="32" cy="25" rx="7" ry="12" fill="url(#glossHighlight)" />
              </g>

              {/* Letter I */}
              <g transform="translate(290, 15)">
                <rect x="0" y="0" width="30" height="95" rx="15" fill="url(#coralBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="12" cy="20" rx="6" ry="14" fill="url(#glossHighlight)" />
              </g>

              {/* Letter F */}
              <g transform="translate(330, 5)">
                <path d="M 20 100 C 10 60 20 10 40 10 C 75 10 85 5 85 25 C 85 35 60 30 45 32 L 45 50 L 75 50 C 85 50 85 65 75 65 L 45 65 L 45 100 C 45 115 20 115 20 100 Z" fill="url(#coralBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="32" cy="22" rx="7" ry="12" fill="url(#glossHighlight)" />
              </g>

              {/* Letter E */}
              <g transform="translate(405, 15)">
                <path d="M 20 95 C 10 60 20 10 40 10 L 80 10 C 90 10 90 25 80 25 L 45 25 L 45 45 L 75 45 C 85 45 85 60 75 60 L 45 60 L 45 80 L 85 80 C 95 80 95 95 85 95 Z" fill="url(#coralBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="32" cy="22" rx="7" ry="12" fill="url(#glossHighlight)" />
              </g>

              {/* Letter S */}
              <g transform="translate(480, 20)">
                <path d="M 65 20 C 40 5 15 20 20 40 C 25 60 65 50 65 70 C 65 90 35 95 15 80 C 5 72 15 55 25 65 C 35 75 50 75 50 65 C 50 55 15 60 10 40 C 5 15 40 -5 75 10 C 85 15 75 30 65 20 Z" fill="url(#coralBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="40" cy="18" rx="8" ry="12" fill="url(#glossHighlight)" />
              </g>

              {/* Letter T */}
              <g transform="translate(545, 10)">
                <path d="M 10 15 C 10 0 70 0 70 15 C 70 25 50 25 50 40 L 50 100 C 50 115 30 115 30 100 L 30 40 C 30 25 10 25 10 15 Z" fill="url(#coralBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="40" cy="12" rx="14" ry="6" fill="url(#glossHighlight)" />
              </g>

            </g>

            {/* LINE 2: IVAL (GLOSSY GOLD YELLOW TO WARM ORANGE 3D BALLOON LETTERS) */}
            <g id="ival-3d-text" transform="translate(320, 280)">
              
              {/* Letter I */}
              <g transform="translate(0, 20)">
                <rect x="0" y="0" width="32" height="95" rx="16" fill="url(#goldBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="12" cy="20" rx="6" ry="14" fill="url(#glossHighlight)" />
              </g>

              {/* Letter V */}
              <g transform="translate(45, 25)">
                <path d="M 10 10 C 25 10 35 60 50 90 C 65 60 75 10 90 10 C 100 10 100 25 90 35 L 60 100 C 50 115 40 115 30 100 L 0 35 C -10 25 -10 10 10 10 Z" fill="url(#goldBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="25" cy="25" rx="7" ry="14" fill="url(#glossHighlight)" transform="rotate(-15 25 25)" />
              </g>

              {/* Letter A */}
              <g transform="translate(130, 20)">
                <path d="M 40 95 C 25 55 40 10 65 10 C 90 10 105 55 90 95 C 85 110 65 110 70 85 C 75 70 70 45 65 45 C 60 45 55 70 60 85 C 65 110 45 110 40 95 Z" fill="url(#goldBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="55" cy="22" rx="8" ry="12" fill="url(#glossHighlight)" transform="rotate(-15 55 22)" />
              </g>

              {/* Letter L */}
              <g transform="translate(210, 15)">
                <path d="M 20 95 C 10 55 20 10 40 10 C 50 10 50 25 40 25 L 40 80 L 75 80 C 85 80 85 95 75 95 Z" fill="url(#goldBalloon)" stroke="#FFFFFF" strokeWidth="4" />
                <ellipse cx="28" cy="22" rx="7" ry="12" fill="url(#glossHighlight)" />
              </g>

            </g>

          </svg>
        </motion.div>
      </div>

      {/* ── 4. BOTTOM NAVIGATION FOOTER ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-2 border-t border-white/20 px-1 sm:px-2">
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#1D4ED8] font-heading font-black text-xs uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl cursor-pointer"
          >
            <span>EXPLORE MANIFESTIVAL</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        ) : (
          <span className="text-xs font-mono font-bold text-white/90">
            © 2025 Pinterest Manifestival
          </span>
        )}

        <div className="flex items-center gap-2 bg-black/25 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-[#E60023] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white">Pinterest Manifestival Edition</span>
        </div>
      </footer>

    </div>
  );
};

export default PinterestManifestivalHeroScreen;
