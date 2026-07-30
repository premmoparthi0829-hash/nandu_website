import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Globe, Edit2, Check, RefreshCw } from 'lucide-react';
import nandiniHeroImg from '../assets/ntt_model_transparent.png';

interface NTTRibbonHeroScreenProps {
  onScrollNext?: () => void;
}

export const NTTRibbonHeroScreen: React.FC<NTTRibbonHeroScreenProps> = ({ onScrollNext }) => {
  const [lang, setLang] = useState<'JP' | 'EN'>('JP');
  const [customTitle, setCustomTitle] = useState<string>('挑む。');
  const [customSubtitle, setCustomSubtitle] = useState<string>('人と地球のために。');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const displayTitle = lang === 'JP' ? customTitle : 'CHALLENGE.';
  const displaySubtitle = lang === 'JP' ? customSubtitle : 'FOR PEOPLE & THE PLANET.';

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[620px] sm:min-h-[720px] md:min-h-[800px] bg-gradient-to-br from-[#E1F0FC] via-[#F4F9FD] to-[#FFFFFF] text-[#003B73] flex flex-col justify-between items-center overflow-hidden select-none p-4 sm:p-8 rounded-3xl border border-white/90 shadow-2xl transition-all duration-300"
    >
      {/* ── 1. CODED HIGH-KEY STUDIO ATMOSPHERE ── */}
      {/* Soft Ambient Light Cone */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_35%_25%,_rgba(0,163,224,0.22)_0%,_rgba(255,255,255,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0" />

      {/* Floating Light Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0099FF]/12 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#00A3E0]/15 blur-[100px] rounded-full pointer-events-none" />

      {/* ── 2. TOP BRAND CONTROL BAR ── */}
      <header className="relative z-30 w-full flex items-center justify-between pt-1 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#0072CE]/20 shadow-sm"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#0072CE] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#004DA0] uppercase">
            NANDINI VADDEPALLI • 1ST SCREEN
          </span>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          {/* Language Toggle */}
          <div className="flex items-center bg-white/90 backdrop-blur-md p-1 rounded-full border border-[#0072CE]/20 shadow-sm">
            <button
              onClick={() => setLang('JP')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'JP' ? 'bg-[#0072CE] text-white shadow-sm' : 'text-[#004DA0]/70 hover:text-[#004DA0]'
              }`}
            >
              JP 日本語
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                lang === 'EN' ? 'bg-[#0072CE] text-white shadow-sm' : 'text-[#004DA0]/70 hover:text-[#004DA0]'
              }`}
            >
              EN English
            </button>
          </div>

          {/* Edit Slogan Toggle */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 bg-white/90 backdrop-blur-md rounded-full border border-[#0072CE]/20 text-[#004DA0] hover:bg-[#0072CE] hover:text-white transition-colors cursor-pointer shadow-sm"
            title="Edit Text"
          >
            {isEditing ? <Check className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
          </button>
        </motion.div>
      </header>

      {/* Editable Input Drawer */}
      {isEditing && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-40 bg-white/95 backdrop-blur-xl border border-[#0072CE]/30 p-4 rounded-2xl shadow-2xl flex flex-col gap-2 max-w-md w-full my-2"
        >
          <span className="text-xs font-bold text-[#004DA0] uppercase tracking-wider">Customize Japanese Slogan</span>
          <input
            type="text"
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm font-bold text-slate-800 focus:outline-none focus:border-[#0072CE]"
          />
          <input
            type="text"
            value={customSubtitle}
            onChange={(e) => setCustomSubtitle(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-800 focus:outline-none focus:border-[#0072CE]"
          />
          <button
            onClick={() => setIsEditing(false)}
            className="mt-1 bg-[#0072CE] text-white text-xs font-bold py-1.5 rounded-lg hover:bg-[#004DA0] transition-colors cursor-pointer"
          >
            Save
          </button>
        </motion.div>
      )}

      {/* ── 3. MAIN STAGE (CODED 3D SVG RIBBON + DESIGNER + JAPANESE TYPOGRAPHY) ── */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-auto px-2 sm:px-6">
        <div className="relative w-full max-w-6xl h-[460px] sm:h-[540px] md:h-[620px] flex items-center justify-between">
          
          {/* ── STUDIO GROUND SHADOW (BLURRED SVG GEOMETRY) ── */}
          <motion.div
            style={{
              x: mousePos.x * -12,
              y: mousePos.y * -8,
            }}
            className="absolute bottom-2 left-0 right-0 h-32 z-0 pointer-events-none flex justify-center"
          >
            <svg viewBox="0 0 1000 200" className="w-full h-full filter blur-[24px] opacity-25">
              <path
                d="M 40 180 Q 200 190 320 140 C 420 90 560 170 820 180 Q 950 185 1020 170"
                fill="none"
                stroke="#002D5A"
                strokeWidth="70"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* ── CODED 3D CERULEAN BLUE RIBBON (HIGH-PRECISION SVG CANVAS) ── */}
          <motion.div
            style={{
              x: mousePos.x * 18,
              y: mousePos.y * 12,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-10 pointer-events-none"
          >
            <svg
              viewBox="0 0 1000 550"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full filter drop-shadow-[0_24px_45px_rgba(0,114,206,0.4)]"
            >
              <defs>
                {/* NTT Electric Blue 3D Gradient */}
                <linearGradient id="nttRibbon3D" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0072CE" />
                  <stop offset="25%" stopColor="#0088FF" />
                  <stop offset="60%" stopColor="#00A3E0" />
                  <stop offset="100%" stopColor="#0050B3" />
                </linearGradient>

                {/* 3D Highlight Bevel Stroke */}
                <linearGradient id="nttHighlightBevel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#A6D8FF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#002D5A" stopOpacity="0.4" />
                </linearGradient>

                {/* Ribbon Overlap Shadow */}
                <filter id="overlapShadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="-12" dy="18" stdDeviation="16" floodColor="#002D5A" floodOpacity="0.48" />
                </filter>
              </defs>

              {/* REAR STRAND OF THE LOOP */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                d="M -40 510 Q 70 330 210 180 C 300 80 440 140 390 320 C 350 440 240 430 230 300"
                fill="none"
                stroke="url(#nttRibbon3D)"
                strokeWidth="82"
                strokeLinecap="round"
              />

              {/* REAR STRAND HIGHLIGHT */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.75 }}
                transition={{ duration: 1.4, delay: 0.1, ease: 'easeInOut' }}
                d="M -40 492 Q 70 312 210 162 C 300 62 440 122 390 302 C 350 422 240 412 230 282"
                fill="none"
                stroke="url(#nttHighlightBevel)"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* FRONT CROSSOVER STRAND & MAIN HIGH ARCH */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                d="M 245 270 C 315 130 470 18 680 10 Q 860 -5 1050 230"
                fill="none"
                stroke="url(#nttRibbon3D)"
                strokeWidth="82"
                strokeLinecap="round"
                filter="url(#overlapShadow)"
              />

              {/* FRONT CROSSOVER HIGHLIGHT */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.88 }}
                transition={{ duration: 1.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                d="M 245 252 C 315 112 470 0 680 -8 Q 860 -23 1050 212"
                fill="none"
                stroke="url(#nttHighlightBevel)"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* ── CENTER DESIGNER PORTRAIT (SEAMLESS INTEGRATION) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              x: mousePos.x * 10,
              y: mousePos.y * 6,
            }}
            className="relative z-20 flex-1 flex justify-center items-end h-full max-h-[420px] sm:max-h-[520px] md:max-h-[580px] pl-2 sm:pl-16"
          >
            <div className="relative group">
              {/* Ground Shadow */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-48 sm:w-60 h-5 bg-[#002D5A]/30 blur-md rounded-full pointer-events-none" />

              {/* Designer Portrait */}
              <img
                src={nandiniHeroImg}
                alt="Nandini Vaddepalli - Senior Graphic Designer"
                className="relative z-10 max-h-[380px] sm:max-h-[480px] md:max-h-[540px] object-contain drop-shadow-[0_20px_35px_rgba(0,45,90,0.22)] transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Floating Tool Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 -left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#0072CE]/30 shadow-lg text-xs font-mono font-bold text-[#004DA0] flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0072CE]" />
                <span>Ps • Ai • Figma</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT CODED JAPANESE TYPOGRAPHY ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            style={{
              x: mousePos.x * -8,
              y: mousePos.y * -6,
            }}
            className="relative z-20 flex-1 flex flex-col items-start justify-center pr-2 sm:pr-8 pl-4 sm:pl-12 text-left"
          >
            {/* Slogan Line 1 */}
            <motion.h1
              key={`title-${lang}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-widest text-[#004DA0] leading-none drop-shadow-sm"
              style={{ fontFamily: '"Hiragino Mincho ProN", "Yu Mincho", "Noto Serif JP", serif' }}
            >
              {displayTitle}
            </motion.h1>

            {/* Slogan Line 2 */}
            <motion.p
              key={`subtitle-${lang}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl font-bold tracking-wider text-[#004DA0]/90 leading-snug"
              style={{ fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif' }}
            >
              {displaySubtitle}
            </motion.p>
          </motion.div>

        </div>
      </div>

      {/* ── 4. BOTTOM FOOTER & CODED VECTOR NTT LOGO MARK ── */}
      <footer className="relative z-30 w-full flex items-end justify-between pb-1 px-2 sm:px-4">
        {/* Scroll Button */}
        <motion.button
          onClick={onScrollNext}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#004DA0]/80 hover:text-[#0072CE] transition-colors cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full border border-[#0072CE]/30 flex items-center justify-center group-hover:border-[#0072CE] group-hover:bg-[#0072CE]/10 transition-all">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
          <span className="hidden sm:inline">EXPLORE PORTFOLIO</span>
        </motion.button>

        {/* VECTOR CODED NTT LOGO MARK (BOTTOM RIGHT) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#0072CE]/20 shadow-md"
        >
          {/* NTT Dynamic Loop SVG Icon */}
          <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-[#004DA0]" fill="currentColor">
            <path d="M 50 10 C 25 10 10 28 10 50 C 10 74 28 90 50 90 C 72 90 90 74 90 50 C 90 32 78 18 60 14 C 58 13 56 16 57 18 C 72 23 80 35 80 50 C 80 68 66 80 50 80 C 34 80 20 68 20 50 C 20 34 32 20 50 20 C 62 20 72 28 72 40 C 72 48 66 54 58 54 C 52 54 48 49 48 42 C 48 35 53 30 59 30 C 61 30 62 28 61 27 C 58 24 53 23 48 24 C 38 26 32 35 32 46 C 32 58 42 66 54 66 C 68 66 82 56 82 40 C 82 24 68 10 50 10 Z" />
          </svg>

          {/* NTT Wordmark */}
          <span
            className="text-2xl sm:text-3xl font-black tracking-tight text-[#004DA0]"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 900 }}
          >
            NTT
          </span>
        </motion.div>
      </footer>
    </div>
  );
};
