import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Palette, Pen, Package, Monitor, Printer } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

const NAME_LETTERS = ['N', 'A', 'N', 'D', 'I', 'N', 'I'];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const topThumbnails = [
    { title: 'Branding',  icon: <Pen     className="w-3.5 h-3.5" />, bg: 'bg-[#F472B6]', text: 'text-black' },
    { title: 'Packaging', icon: <Package className="w-3.5 h-3.5" />, bg: 'bg-[#88D900]', text: 'text-black' },
    { title: 'Print',     icon: <Printer className="w-3.5 h-3.5" />, bg: 'bg-black',      text: 'text-white' },
    { title: 'UI/UX',     icon: <Monitor className="w-3.5 h-3.5" />, bg: 'bg-[#090909]', text: 'text-[#88D900]' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-14 sm:pt-20 pb-8 sm:pb-12 px-2 sm:px-4 md:px-8 bg-[#090909] overflow-hidden w-full max-w-full"
    >
      {/* Outer editorial screen container */}
      <div className="max-w-7xl mx-auto rounded-[20px] min-[400px]:rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#88D900] shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/20 relative w-full">

        {/* ═══════════════════════════════════════════════════════════
            UPPER WHITE SECTION
            ═══════════════════════════════════════════════════════════ */}
        <div className="relative bg-white text-[#090909] pt-4 sm:pt-6 pb-10 sm:pb-20 px-3 sm:px-6 md:px-10 rounded-b-[28px] sm:rounded-b-[48px] overflow-hidden z-10 shadow-lg w-full">

          {/* Top Bar */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-8 z-30 relative">
            {/* Logo + tiles */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
              <a href="#hero" className="flex items-center gap-2 group shrink-0">
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-black text-[#EC4899] flex items-center justify-center font-heading font-black text-xs sm:text-sm shadow-sm">
                  NV
                </span>
                <span className="font-heading font-black text-sm min-[380px]:text-base sm:text-xl md:text-2xl tracking-tighter text-[#090909]">
                  NANDINI VADDEPALLI
                </span>
              </a>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {topThumbnails.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border border-black/10 shadow-sm shrink-0 cursor-pointer hover:scale-105 transition-transform flex flex-col items-center justify-center gap-0.5 ${item.bg} ${item.text}`}
                    title={item.title}
                  >
                    {item.icon}
                    <span className="text-[5px] sm:text-[6px] font-bold uppercase tracking-tighter">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden xl:flex items-center gap-3 text-xs font-button font-bold text-[#090909]/80 uppercase tracking-wider">
              {['Home', 'About', 'Experience', 'Portfolio', 'Services'].map((label, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <span className="text-gray-300">•</span>}
                  <a href={`#${label.toLowerCase()}`} className="hover:text-[#090909] transition-colors">
                    {label}
                  </a>
                </React.Fragment>
              ))}
            </nav>

            {/* Right buttons */}
            <div className="flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-black/20 text-[#090909] text-[10px] sm:text-xs font-button font-bold hover:bg-black hover:text-white transition-all shadow-sm shrink-0"
              >
                Resume PDF
              </button>
              <a
                href="#contact"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#F472B6] text-black text-[10px] sm:text-xs font-button font-extrabold shadow-md hover:scale-105 transition-transform flex items-center gap-1 uppercase tracking-wider shrink-0"
              >
                <span>HIRE ME</span>
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-black text-[#F472B6] flex items-center justify-center text-[9px] sm:text-[10px]">
                  ↗
                </span>
              </a>
              <div className="hidden min-[480px]:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#88D900] text-black text-[9px] sm:text-[10px] font-bold shadow-sm shrink-0">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>AVAILABLE</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              GIANT DISPLAY NAME - LETTER-BY-LETTER WAVE ANIMATION
              ═══════════════════════════════════════════════════════════ */}
          <div className="relative w-full flex flex-col items-center justify-center py-4 sm:py-8 my-1 select-none overflow-hidden max-w-full gap-2 sm:gap-3">
            <h1 className="font-heading font-black text-[34px] min-[360px]:text-[46px] min-[440px]:text-[62px] min-[480px]:text-[76px] sm:text-[120px] md:text-[170px] lg:text-[230px] leading-none text-[#090909] tracking-tighter text-center uppercase whitespace-nowrap opacity-95 max-w-full flex justify-center overflow-hidden">
              {NAME_LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex items-center gap-2 sm:gap-4 px-2 text-center"
            >
              <span className="h-px w-6 sm:w-16 bg-[#090909]/30" />
              <span className="font-button font-bold text-[9px] min-[380px]:text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#090909]/60">
                Creative Graphic Designer · 4.5+ Years
              </span>
              <span className="h-px w-6 sm:w-16 bg-[#090909]/30" />
            </motion.div>

            {/* Mobile Badges Row (visible on small screens) / Floating Side Badges on tablet/desktop */}
            <div className="w-full flex flex-wrap items-center justify-center gap-2 mt-2 sm:mt-0">

              {/* Left Badge: 100+ Brands Designed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="sm:absolute sm:bottom-4 sm:left-6 md:left-8 z-20 flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-black/10 h-12 sm:h-14 shrink-0"
              >
                <div className="flex -space-x-2">
                  {['A', 'B', 'C'].map((init, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white flex items-center justify-center text-[8px] sm:text-[9px] font-black text-white ${
                        ['bg-[#F472B6]', 'bg-[#88D900]', 'bg-black'][i]
                      } ${i === 1 ? 'text-black' : ''}`}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#090909] block leading-none">
                    100+ Brands Designed
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-gray-600 font-semibold">
                    100% Client Satisfaction
                  </span>
                </div>
              </motion.div>

              {/* Right Badge: BRAND SUITE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.95, duration: 0.5 }}
                className="sm:absolute sm:bottom-4 sm:right-6 md:right-8 z-20 flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-black text-white shadow-2xl border border-white/20 hover:scale-105 transition-transform h-12 sm:h-14 shrink-0"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#88D900] text-black flex items-center justify-center shrink-0">
                  <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-[#88D900] uppercase tracking-wider block">
                    BRAND SUITE
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-white block leading-tight">
                    Vector Design
                  </span>
                </div>
                <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-[#F472B6] text-black text-[8px] sm:text-[9px] font-extrabold uppercase ml-1 shrink-0">
                  4.5+ YRS
                </span>
              </motion.div>

            </div>
          </div>
        </div>

        {/* ═══ LOWER LIME SECTION ═══ */}
        <div className="bg-[#88D900] text-[#090909] pt-6 sm:pt-8 pb-8 sm:pb-10 px-3 sm:px-6 md:px-10 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch w-full">
            {/* LEFT: Pink Experience Card */}
            <div className="lg:col-span-4 flex flex-col gap-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-4 min-[400px]:p-5 sm:p-8 rounded-[20px] sm:rounded-[32px] bg-[#F472B6] text-black shadow-xl border border-black/10 relative overflow-hidden w-full"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-[9px] sm:text-[10px] font-button font-extrabold uppercase tracking-widest text-black/70">
                    EXPERIENCE HIGHLIGHT
                  </span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-[#F472B6] flex items-center justify-center text-xs font-bold">
                    4.5+
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl min-[400px]:text-3xl sm:text-5xl text-black mb-2 leading-none">
                  4.5+ YRS EXP
                </h3>
                <p className="font-body text-xs sm:text-sm text-black/80 font-medium mb-4">
                  Specialized in Brand Identity Systems, Photoshop manipulation, Illustrator vector
                  logos, Packaging, and Figma UI design.
                </p>
                <div className="p-3 sm:p-4 rounded-2xl bg-black text-white flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#88D900] uppercase block">
                      100+ Projects Completed
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-300">
                      Creative &amp; Timeless Design
                    </span>
                  </div>
                  <button
                    onClick={onOpenResume}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#88D900] text-black flex items-center justify-center font-bold hover:scale-110 transition-transform shrink-0 ml-2"
                  >
                    →
                  </button>
                </div>
              </motion.div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full">
                <a
                  href="#projects"
                  className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-black text-white text-[11px] sm:text-xs font-button font-bold uppercase tracking-wider hover:bg-[#F472B6] hover:text-black transition-all shadow-md inline-flex items-center gap-2 flex-1 sm:flex-initial justify-center"
                >
                  <span>SEE PORTFOLIO</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full border border-black/30 text-black text-[11px] sm:text-xs font-button font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all flex-1 sm:flex-initial justify-center"
                >
                  HIRE ME
                </a>
              </div>
            </div>

            {/* RIGHT: About Me */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[280px] sm:min-h-[340px] w-full">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  ABOUT ME
                </span>
              </div>
              <div className="flex-1 rounded-[20px] sm:rounded-[28px] bg-black/90 p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-lg sm:text-2xl md:text-3xl text-white leading-snug mb-3">
                    Hi, I'm <span className="text-[#88D900]">Nandini Vaddepalli</span> —
                    <br className="hidden sm:block" />
                    Creative Graphic Designer &amp; Brand Specialist.
                  </h3>
                  <div className="space-y-2 sm:space-y-3 text-[11px] sm:text-sm text-gray-300 leading-relaxed">
                    <p>
                      With <span className="text-white font-semibold">4.5+ years</span> of hands-on
                      experience, I build premium visual identities, CMYK-ready print packaging,
                      high-converting digital campaigns, and modern Figma UI design systems —
                      helping brands command authority in competitive markets.
                    </p>
                    <p>
                      I've worked with <span className="text-white font-semibold">50+ businesses</span>{' '}
                      across luxury lifestyle, FMCG, SaaS, and D2C industries, delivering 100+
                      projects with 100% client satisfaction. My philosophy: every pixel should have
                      a purpose, and every brand should have a soul.
                    </p>
                    <p className="hidden sm:block">
                      Based in <span className="text-[#88D900] font-semibold">Hyderabad, India</span>{' '}
                      · Available for freelance &amp; full-time opportunities worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {[
                    'Photoshop',
                    'Illustrator',
                    'Figma',
                    'InDesign',
                    'Brand Identity',
                    'Packaging',
                    'UI/UX',
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[9px] sm:text-[10px] font-mono font-bold text-[#88D900]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
