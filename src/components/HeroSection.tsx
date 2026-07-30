import React from 'react';
import { motion } from 'framer-motion';
import { Star, Smartphone, Sparkles, ChevronRight, Palette } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  // Top 4 Rounded Thumbnails
  const topThumbnails = [
    { title: 'Branding', img: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=200&q=80' },
    { title: 'Packaging', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=200&q=80' },
    { title: 'Print', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80' },
    { title: 'UI/UX', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80' },
  ];

  // 3 Bottom Showcase Cards
  const heroProjects = PROJECTS.slice(0, 3);

  return (
    <section id="hero" className="relative min-h-screen pt-14 sm:pt-20 pb-8 sm:pb-12 px-2 sm:px-4 md:px-8 bg-[#090909] overflow-hidden w-full max-w-full">
      
      {/* Outer Editorial Screen Container */}
      <div className="max-w-7xl mx-auto rounded-[20px] min-[400px]:rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#88D900] shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/20 relative w-full">
        
        {/* =========================================================
            UPPER WHITE CONTAINER WITH HUGE DISPLAY TYPOGRAPHY
            ========================================================= */}
        <div className="relative bg-white text-[#090909] pt-4 sm:pt-6 pb-10 sm:pb-20 px-3 sm:px-6 md:px-10 rounded-b-[28px] sm:rounded-b-[48px] overflow-hidden z-10 shadow-lg w-full">
          
          {/* Top Bar inside White Header */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-8 z-30 relative">
            
            {/* Top Left: Logo & 4 Thumbnail Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 w-full sm:w-auto">
              <a href="#hero" className="flex items-center gap-2 group shrink-0">
                <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-black text-[#88D900] flex items-center justify-center font-heading font-black text-xs sm:text-sm">
                  NV
                </span>
                <span className="font-heading font-black text-sm min-[380px]:text-base sm:text-xl md:text-2xl tracking-tighter text-[#090909]">
                  NANDINI VADDEPALLI
                </span>
              </a>

              {/* 4 Rounded Square Thumbnails */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {topThumbnails.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative w-7 h-7 min-[380px]:w-8 min-[380px]:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden border border-black/10 shadow-sm shrink-0 cursor-pointer hover:scale-105 transition-transform"
                    title={item.title}
                  >
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-0.5 left-0.5 text-[6px] sm:text-[8px] font-bold text-white uppercase tracking-tighter truncate max-w-[26px]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Navigation Links */}
            <nav className="hidden xl:flex items-center gap-3 text-xs font-button font-bold text-[#090909]/80 uppercase tracking-wider">
              <a href="#hero" className="hover:text-[#090909] transition-colors">Home</a>
              <span className="text-gray-300">•</span>
              <a href="#about" className="hover:text-[#090909] transition-colors">About</a>
              <span className="text-gray-300">•</span>
              <a href="#experience" className="hover:text-[#090909] transition-colors">Experience</a>
              <span className="text-gray-300">•</span>
              <a href="#projects" className="hover:text-[#090909] transition-colors">Portfolio</a>
              <span className="text-gray-300">•</span>
              <a href="#services" className="hover:text-[#090909] transition-colors">Services</a>
            </nav>

            {/* Top Right Badges */}
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
                <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-black text-[#F472B6] flex items-center justify-center text-[9px] sm:text-[10px]">↗</span>
              </a>

              <div className="hidden min-[480px]:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#88D900] text-black text-[9px] sm:text-[10px] font-bold shadow-sm shrink-0">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>AVAILABLE</span>
              </div>
            </div>

          </div>

          {/* GIANT DISPLAY TYPOGRAPHY BEHIND MODEL */}
          <div className="relative w-full flex items-center justify-center py-2 sm:py-4 my-1 select-none overflow-hidden max-w-full">
            <h1 className="font-heading font-black text-[40px] min-[360px]:text-[52px] min-[480px]:text-[76px] sm:text-[120px] md:text-[170px] lg:text-[230px] leading-none text-[#090909] tracking-tighter text-center uppercase whitespace-nowrap opacity-95 max-w-full">
              NANDINI
            </h1>

            {/* CENTER MODEL/DESIGNER PORTRAIT OVERLAPPING TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] min-[360px]:w-[170px] min-[480px]:w-[220px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[200px] min-[360px]:h-[240px] min-[480px]:h-[300px] sm:h-[420px] md:h-[480px] z-20 pointer-events-auto group">
              <img
                src={PERSONAL_INFO.heroImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top rounded-[20px] sm:rounded-[36px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] border-2 sm:border-4 border-white filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 p-1.5 sm:p-3 rounded-lg sm:rounded-2xl bg-black/85 backdrop-blur-md text-white border border-white/20 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[8px] sm:text-[10px] font-heading font-bold text-[#88D900] uppercase tracking-wider block">
                    Nandini Vaddepalli
                  </span>
                  <span className="text-[8px] sm:text-[11px] text-gray-300 font-body font-medium truncate max-w-[80px] sm:max-w-none block">
                    Creative Graphic Designer
                  </span>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1 bg-[#88D900] text-black px-1.5 sm:px-2.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold shrink-0">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-black" />
                  <span>5.0</span>
                </div>
              </div>
            </div>

            {/* Floating Top Left Client Review Stack */}
            <div className="absolute bottom-2 left-2 sm:left-6 z-20 hidden md:flex items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-black/10">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#090909] block leading-none">100+ Brands Designed</span>
                <span className="text-[9px] text-gray-600 font-semibold">100% Client Satisfaction</span>
              </div>
            </div>

            {/* Floating Right Product / Design Badge */}
            <div className="absolute bottom-6 right-4 sm:right-10 z-20 hidden sm:block">
              <div className="p-3 rounded-2xl bg-black text-white shadow-2xl border border-white/20 flex items-center gap-3 group hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-[#88D900] text-black flex items-center justify-center font-bold">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-[#88D900] uppercase tracking-wider block">
                    BRAND SUITE
                  </span>
                  <span className="text-xs font-bold text-white block leading-tight">
                    Vector Design
                  </span>
                </div>
                <span className="px-2 py-1 rounded-md bg-[#F472B6] text-black text-[9px] font-extrabold uppercase ml-1">
                  4.5+ YRS
                </span>
              </div>
            </div>

          </div>

        </div>


        {/* =========================================================
            LOWER VIBRANT NEON/LIME SECTION WITH FLOATING CARDS
            ========================================================= */}
        <div className="bg-[#88D900] text-[#090909] pt-6 sm:pt-8 pb-8 sm:pb-10 px-3 sm:px-6 md:px-10 relative z-20 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end w-full">
            
            {/* LEFT FLOATING PINK GLASS CARD */}
            <div className="lg:col-span-4 flex flex-col gap-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
                  Specialized in Brand Identity Systems, Photoshop manipulation, Illustrator vector logos, Packaging, and Figma UI design.
                </p>

                {/* Sub Card inside Pink Card */}
                <div className="p-3 sm:p-4 rounded-2xl bg-black text-white flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#88D900] uppercase block">
                      100+ Projects Completed
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-300">Creative &amp; Timeless Design</span>
                  </div>
                  <button
                    onClick={onOpenResume}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#88D900] text-black flex items-center justify-center font-bold hover:scale-110 transition-transform shrink-0 ml-2"
                  >
                    →
                  </button>
                </div>
              </motion.div>

              {/* Pill Buttons */}
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

            {/* RIGHT FLOATING GRID OF 3 SHOWCASE CARDS */}
            <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6 w-full">
              
              <div className="flex items-center justify-between mb-1 w-full">
                <span className="font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider text-black flex items-center gap-1.5 truncate">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span className="truncate">FEATURED BRAND &amp; DESIGN PROJECTS</span>
                </span>
                <span className="text-xs font-mono font-bold text-black/70 shrink-0 ml-2">
                  01 / 03
                </span>
              </div>

              {/* 3 Showcase Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
                {heroProjects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative w-full h-56 sm:h-72 rounded-[20px] sm:rounded-[28px] overflow-hidden bg-black text-white border border-white/20 shadow-2xl cursor-pointer group flex flex-col justify-between p-4 sm:p-5"
                    onClick={() => {
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {/* Background Screenshot */}
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      className="absolute inset-0 w-full h-full object-cover filter contrast-[1.05] group-hover:scale-110 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Top Pill Tag */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-[#88D900] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                        {proj.category}
                      </span>
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#88D900] text-black flex items-center justify-center font-bold text-xs group-hover:rotate-45 transition-transform">
                        ↗
                      </span>
                    </div>

                    {/* Bottom Info */}
                    <div className="relative z-10">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#88D900] transition-colors">
                        {proj.title}
                      </h4>
                      <p className="font-body text-[10px] sm:text-[11px] text-gray-300 line-clamp-2 mb-2">
                        {proj.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.slice(0, 2).map((t) => (
                          <span key={t} className="text-[8px] sm:text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/80 text-[#88D900]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Slider Line */}
              <div className="flex items-center gap-4 pt-1 sm:pt-2 w-full">
                <span className="font-mono text-xs font-bold text-black">01</span>
                <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-black/20 overflow-hidden">
                  <div className="w-1/3 h-full bg-black rounded-full" />
                </div>
                <span className="font-mono text-xs font-bold text-black">03</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
