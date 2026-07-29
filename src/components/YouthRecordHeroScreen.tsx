import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Check, Sparkles, Heart, Smile, Edit2 } from 'lucide-react';
import nandiniImg from '../assets/nandini_coral.png';

interface YouthRecordHeroScreenProps {
  onScrollNext?: () => void;
}

export const YouthRecordHeroScreen: React.FC<YouthRecordHeroScreenProps> = ({ onScrollNext }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [designerName, setDesignerName] = useState('NANDINI');
  const [subTitle, setSubTitle] = useState('PORTFOLIO');
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(designerName);
  const [tempSub, setTempSub] = useState(subTitle);

  const handleSave = () => {
    if (tempName.trim()) setDesignerName(tempName.trim().toUpperCase());
    if (tempSub.trim()) setSubTitle(tempSub.trim().toUpperCase());
    setIsEditing(false);
  };

  return (
    <div className="relative w-full h-full min-h-[520px] sm:min-h-[580px] md:min-h-[640px] bg-gradient-to-b from-[#42A5F5] via-[#1E88E5] to-[#0D47A1] text-white flex flex-col justify-between items-center overflow-hidden select-none p-2 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-white/40">
      
      {/* ── 1. SUNNY BLUE SKY BACKDROP WITH CLOUDS & SUN FLARE ── */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(255,255,255,0.85)_0%,_rgba(66,165,245,0.6)_35%,_transparent_75%)] pointer-events-none" />

      {/* Floating Animated Clouds */}
      <motion.div
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 left-6 w-40 sm:w-56 h-16 sm:h-20 bg-white/40 blur-lg rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ x: [15, -15, 15] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-48 sm:w-64 h-20 sm:h-24 bg-white/35 blur-xl rounded-full pointer-events-none"
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-60 sm:w-72 h-36 sm:h-44 bg-white/30 blur-2xl rounded-full pointer-events-none" />

      {/* Green Summer Foliage Accent at Bottom-Left Corner */}
      <div className="absolute bottom-[-10px] left-[-20px] z-10 pointer-events-none opacity-80">
        <svg viewBox="0 0 200 140" fill="none" className="w-36 h-24 sm:w-52 sm:h-32 text-emerald-600 fill-current">
          <circle cx="40" cy="100" r="55" className="text-emerald-700" />
          <circle cx="90" cy="110" r="45" className="text-emerald-500" />
          <circle cx="140" cy="130" r="35" className="text-lime-600" />
        </svg>
      </div>

      {/* Hand-drawn Sparkles */}
      <div className="absolute top-12 left-[24%] text-white/90 animate-pulse pointer-events-none hidden sm:block">
        <Sparkles className="w-5 h-5 stroke-[2]" />
      </div>
      <div className="absolute top-20 right-[24%] text-white/90 animate-pulse pointer-events-none hidden sm:block" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-5 h-5 stroke-[2]" />
      </div>

      {/* ── 2. LEFT SIDE STICKER PACK (PERFECT FIT BOUNDS) ── */}
      {/* (1) Speech Bubble */}
      <motion.div
        initial={{ rotate: -8 }}
        animate={{ rotate: -8, y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 bg-[#0055FF] text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl rounded-bl-none border-2 border-white shadow-lg font-heading font-black text-[9px] sm:text-xs tracking-wider uppercase text-center max-w-[110px] sm:max-w-[135px] leading-tight"
      >
        4.5+ YRS VISUAL MAGIC
      </motion.div>

      {/* (2) Pill Badge */}
      <div className="absolute top-3 left-[125px] sm:top-5 sm:left-[175px] z-20 bg-[#0044CC] text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-white shadow-md font-mono font-black text-[10px] sm:text-xs transform -rotate-12">
        {designerName}:
      </div>

      {/* (3) Cute Cat Sticker */}
      <motion.div
        animate={{ rotate: [2, -2, 2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-3 sm:top-24 sm:left-6 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-white p-1 rounded-xl sm:rounded-2xl shadow-lg border-2 border-white transform -rotate-6 flex items-center justify-center"
      >
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full text-slate-800 stroke-current stroke-[3]">
          <path d="M 25 30 L 40 10 L 55 30 Z" fill="#0066FF" stroke="white" strokeWidth="2" />
          <path d="M 15 35 L 25 20 L 32 32 Z" fill="white" />
          <path d="M 65 35 L 55 20 L 48 32 Z" fill="white" />
          <ellipse cx="40" cy="48" rx="28" ry="24" fill="white" stroke="#1E293B" strokeWidth="3" />
          <circle cx="28" cy="46" r="3" fill="#1E293B" />
          <circle cx="52" cy="46" r="3" fill="#1E293B" />
          <path d="M 36 54 Q 40 58 44 54" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <path d="M 10 46 L 22 47" stroke="#1E293B" />
          <path d="M 10 52 L 22 51" stroke="#1E293B" />
          <path d="M 70 46 L 58 47" stroke="#1E293B" />
          <path d="M 70 52 L 58 51" stroke="#1E293B" />
        </svg>
      </motion.div>

      {/* (4) Blue Taped Ribbon */}
      <motion.div
        className="absolute top-32 left-2 sm:top-44 sm:left-4 z-20 bg-[#0052EA] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg border-2 border-white shadow-lg font-heading font-black text-[10px] sm:text-xs tracking-tight flex items-center gap-1.5 transform -rotate-10 max-w-[150px] sm:max-w-[210px] leading-snug"
      >
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-5 bg-amber-100/70 border border-amber-300/60 transform -rotate-45" />
        <span className="truncate">NANDINI VADDEPALLI 2025</span>
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-5 bg-amber-100/70 border border-amber-300/60 transform rotate-45" />
      </motion.div>

      {/* (5) Pill Badge */}
      <div className="absolute top-[190px] left-4 sm:top-[250px] sm:left-8 z-20 bg-[#0066FF] text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-white shadow-md font-mono font-black text-[9px] sm:text-xs transform -rotate-6">
        24/7 CREATIVE
      </div>

      {/* (6) Blue & Yellow Smiley Face Stickers */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-14 left-10 sm:left-20 z-20 w-10 h-10 sm:w-14 sm:h-14 bg-[#0066FF] rounded-full border-3 sm:border-4 border-white shadow-lg flex items-center justify-center text-white"
      >
        <Smile className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
      </motion.div>

      <div className="absolute bottom-4 left-24 sm:left-36 z-20 w-8 h-8 sm:w-11 sm:h-11 bg-[#FFD700] rounded-full border-2 sm:border-3 border-white shadow-md flex items-center justify-center text-slate-900 transform rotate-12">
        <Smile className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </div>

      {/* ── 3. RIGHT SIDE STICKER PACK (PERFECT FIT BOUNDS) ── */}
      {/* (1) Ripped Paper Notebook Checklist */}
      <motion.div
        initial={{ rotate: 8 }}
        animate={{ rotate: 8 }}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 bg-white text-slate-800 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-200 w-36 sm:w-48 md:w-52 font-sans text-[10px] sm:text-xs select-none"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 93%, 95% 96%, 90% 93%, 85% 97%, 80% 94%, 75% 98%, 70% 95%, 65% 99%, 60% 94%, 55% 97%, 50% 93%, 45% 98%, 40% 94%, 35% 97%, 30% 93%, 25% 98%, 20% 94%, 15% 97%, 10% 93%, 5% 98%, 0% 92%)'
        }}
      >
        <div className="font-heading font-black text-xs sm:text-base text-[#0052EA] border-b border-blue-100 pb-1 mb-1.5 flex items-center justify-between">
          <span>{designerName}:</span>
          <span className="text-[9px] text-blue-400 font-mono">SERVICES</span>
        </div>

        <ul className="space-y-1 font-extrabold text-[10px] sm:text-xs text-slate-700">
          {[
            'Brand Identity',
            'Logo Systems',
            'Social Media',
            'Print & Package',
            'Motion Design',
            'Photoshop / Ai'
          ].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded border border-[#0052EA] bg-blue-50 flex items-center justify-center text-[#0052EA] shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="truncate">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* (2) Polaroid Photo Sticker */}
      <motion.div
        className="absolute top-[200px] right-3 sm:top-[250px] sm:right-6 z-10 w-20 h-24 sm:w-28 sm:h-32 bg-white p-1 pb-4 rounded-lg shadow-lg border border-slate-200 transform rotate-14 pointer-events-none"
      >
        <img src={nandiniImg} alt="Nandini Vaddepalli" className="w-full h-full object-cover rounded" />
        <span className="block text-center font-script text-[9px] sm:text-[10px] text-slate-700 mt-0.5 font-bold truncate">Nandini V.</span>
      </motion.div>

      {/* (3) Blue Road Sign */}
      <motion.div
        animate={{ rotate: [-5, -6, -5], y: [0, -2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 right-3 sm:right-6 z-20 flex flex-col items-center"
      >
        <div className="bg-[#0044CC] text-white px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border-2 sm:border-4 border-white shadow-xl font-heading font-black text-xs sm:text-base tracking-wider text-center drop-shadow-md">
          CREATIVE STUDIO
        </div>
        <div className="w-2.5 h-8 sm:w-3 sm:h-10 bg-slate-300 border-x border-slate-400 -mt-1 shadow-md" />
      </motion.div>

      {/* (4) Hand-drawn Heart Doodle */}
      <div className="absolute bottom-24 right-28 sm:right-40 z-20 text-[#0066FF] transform rotate-12 hidden sm:block">
        <Heart className="w-8 h-8 fill-[#0066FF] stroke-white stroke-[2.5] filter drop-shadow-lg" />
      </div>

      {/* ── 4. CENTERPIECE: PERFECT RESPONSIVE BUBBLE STICKER TYPOGRAPHY & MUSIC PLAYER ── */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center my-auto py-4 sm:py-6">
        
        {/* CENTER BUBBLE TEXT STACK */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center select-none cursor-pointer group px-2 max-w-full"
        >
          {isEditing ? (
            <div className="flex flex-col items-center gap-2 bg-black/70 backdrop-blur-md p-3.5 rounded-2xl border-2 border-white z-30 shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold">Name:</span>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="bg-white text-black font-heading font-black px-2 py-1 rounded text-sm uppercase"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold">Sub:</span>
                <input
                  type="text"
                  value={tempSub}
                  onChange={(e) => setTempSub(e.target.value)}
                  className="bg-white text-black font-heading font-black px-2 py-1 rounded text-sm uppercase"
                />
              </div>
              <button
                onClick={handleSave}
                className="px-3 py-1 rounded bg-emerald-400 text-black font-black text-xs uppercase cursor-pointer hover:bg-emerald-300"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="relative flex flex-col items-center" onClick={() => setIsEditing(true)}>
              {/* Top Line */}
              <div className="relative flex items-center justify-center">
                <h1
                  className="font-heading font-black uppercase text-[#0055FF] leading-none tracking-tight text-4xl sm:text-7xl md:text-8xl lg:text-[8.5rem] drop-shadow-[0_8px_20px_rgba(0,35,140,0.5)]"
                  style={{
                    WebkitTextStroke: '6px #FFFFFF',
                    paintOrder: 'stroke fill',
                    fontFamily: '"Fredoka", "Outfit", "Arial Black", sans-serif',
                  }}
                >
                  {designerName}'S
                </h1>
                
                {/* Sparkle Accent */}
                <div className="absolute -top-3 -right-4 text-white animate-bounce hidden sm:block">
                  <Sparkles className="w-6 h-6 sm:w-10 sm:h-10 fill-white stroke-[#0055FF] stroke-[2]" />
                </div>
              </div>

              {/* Bottom Line */}
              <div className="relative flex items-center justify-center -mt-2 sm:-mt-4">
                <h1
                  className="font-heading font-black uppercase text-[#0055FF] leading-none tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-[7.8rem] drop-shadow-[0_12px_28px_rgba(0,35,140,0.6)]"
                  style={{
                    WebkitTextStroke: '6px #FFFFFF',
                    paintOrder: 'stroke fill',
                    fontFamily: '"Fredoka", "Outfit", "Arial Black", sans-serif',
                  }}
                >
                  {subTitle}
                </h1>
                
                {/* Edit Pencil Icon on hover */}
                <div className="absolute -top-2 -left-6 opacity-0 group-hover:opacity-100 p-1.5 rounded-full bg-white text-[#0055FF] shadow-lg transition-opacity">
                  <Edit2 className="w-3.5 h-3.5" />
                </div>

                {/* Star Accent */}
                <div className="absolute -bottom-1 -right-6 text-amber-300 font-black text-2xl sm:text-4xl">
                  ★
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* ── 5. BOTTOM NAVIGATION BAR (PERFECT BOUNDS) ── */}
      <footer className="relative z-20 w-full flex items-center justify-between pt-1.5 border-t border-white/25 px-1 sm:px-2">
        {onScrollNext ? (
          <button
            onClick={onScrollNext}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#0055FF] font-heading font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white/90 transition-all shadow-md cursor-pointer"
          >
            <span>DISCOVER MY WORK</span>
          </button>
        ) : (
          <span className="text-[10px] sm:text-xs font-mono font-bold text-white/90 truncate">
            © 2025 Nandini Vaddepalli
          </span>
        )}

        <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
          <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold text-white truncate">Nandini Creative Record 2025</span>
        </div>
      </footer>

    </div>
  );
};
