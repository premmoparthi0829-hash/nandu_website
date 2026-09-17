import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Palette, Pen, Package, Monitor, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
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
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-black/20 text-[#090909] text-[10px] sm:text-xs font-button font-bold hover:bg-black hover:text-white transition-all shadow-sm shrink-0 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Resume PDF ↗</span>
              </a>
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
                Creative Senior Graphic Designer · 4.5+ Years
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
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#88D900] text-black flex items-center justify-center font-bold hover:scale-110 transition-transform shrink-0 ml-2 cursor-pointer"
                    title="View Resume PDF"
                  >
                    →
                  </a>
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
                    Creative Senior Graphic Designer &amp; Brand Specialist.
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
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-semibold text-white hover:border-pink-500/50 transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="url(#insta-grad-hero)" />
                      <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 4c-2.172 0-2.445.009-3.298.048-.85.039-1.432.174-1.94.372a3.914 3.914 0 00-1.417.923c-.42.42-.716.898-.923 1.417-.198.508-.333 1.09-.372 1.94C4.009 9.555 4 9.828 4 12s.009 2.445.048 3.298c.039.85.174 1.432.372 1.94.207.519.503.997.923 1.417.42.42.898.716 1.417.923.508.198 1.09.333 1.94.372C9.555 19.991 9.828 20 12 20s2.445-.009 3.298-.048c.85-.039 1.432-.174 1.94-.372a3.914 3.914 0 001.417-.923c.42-.42.716-.898.923-1.417.198-.508.333-1.09.372-1.94C19.991 14.445 20 14.172 20 12s-.009-2.445-.048-3.298c-.039-.85-.174-1.432-.372-1.94a3.914 3.914 0 00-.923-1.417 3.914 3.914 0 00-1.417-.923c-.508-.198-1.09-.333-1.94-.372C14.445 4.009 14.172 4 12 4zm0 1.802c2.135 0 2.388.008 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.038.844.047 1.097.047 3.233s-.009 2.388-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.92 2.47 2.47 0 01-.92.598c-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.388-.009-3.232-.047c-.78-.036-1.203-.166-1.485-.276a2.47 2.47 0 01-.92-.598 2.47 2.47 0 01-.598-.92c-.11-.282-.24-.705-.276-1.485C5.81 14.388 5.802 14.135 5.802 12s.008-2.388.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.598-.92.28-.28.546-.453.92-.599.282-.109.705-.24 1.485-.275.844-.038 1.097-.046 3.233-.046z" fill="white" />
                      <defs>
                        <linearGradient id="insta-grad-hero" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#f09433"/>
                          <stop offset="0.5" stopColor="#e6683c"/>
                          <stop offset="1" stopColor="#bc1888"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    Instagram
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-semibold text-white hover:border-[#1877F2]/50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-semibold text-white hover:border-white/50 transition-colors">
                    <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X (Twitter)
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-semibold text-white hover:border-[#E60023]/50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#E60023] fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                    Pinterest
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-semibold text-white hover:border-[#0A66C2]/50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z"/>
                    </svg>
                    LinkedIn
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-semibold text-white hover:border-red-500/50 transition-colors">
                    <svg className="w-3.5 h-3.5 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </span>
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
