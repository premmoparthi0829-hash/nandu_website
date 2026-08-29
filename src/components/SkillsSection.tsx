import React from 'react';
import { motion } from 'framer-motion';
import {
  Star, Flame, Smartphone, Globe, Sparkles, Cpu, Image, Layers, Wrench, Bot, Video
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { ParticleWaveBackground } from './ParticleWaveBackground';

export const SkillsSection: React.FC = () => {
  const { skills } = useData();

  const renderBadge = (name: string, badgeBg?: string, textColor?: string) => {
    const nameLower = name.toLowerCase();
    const animClass = "group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md flex items-center justify-center shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base";

    if (nameLower.includes('photoshop')) {
      return (
        <div className={`${animClass} bg-[#001E36] text-[#31A8FF] border border-sky-400/40 relative overflow-hidden`}>
          <span className="font-extrabold tracking-tight text-base sm:text-lg text-[#31A8FF]">Ps</span>
        </div>
      );
    }
    if (nameLower.includes('illustrator')) {
      return (
        <div className={`${animClass} bg-[#331000] text-[#FF9A00] border border-amber-500/40 relative overflow-hidden`}>
          <span className="font-extrabold tracking-tight text-base sm:text-lg text-[#FF9A00]">Ai</span>
        </div>
      );
    }
    if (nameLower.includes('indesign')) {
      return (
        <div className={`${animClass} bg-[#2B0017] text-[#FF3366] border border-pink-500/40 relative overflow-hidden`}>
          <span className="font-extrabold tracking-tight text-base sm:text-lg text-[#FF3366]">Id</span>
        </div>
      );
    }
    if (nameLower.includes('figma')) {
      return (
        <div className={`${animClass} bg-[#0a0a0a] text-white border border-white/10 group-hover:-rotate-6`}>
          <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('canva')) {
      return (
        <div className={`${animClass} bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8] text-white shadow-lg border border-cyan-300/30`}>
          <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5c-2.485 0-4.5-2.015-4.5-4.5S10.515 7.5 13 7.5c1.464 0 2.766.7 3.597 1.78l-1.632 1.306C14.444 9.94 13.766 9.5 13 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.766 0 1.444-.44 1.965-1.086l1.632 1.306C15.766 15.8 14.464 16.5 13 16.5z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('photopea')) {
      return (
        <div className={`${animClass} bg-[#182026] border border-emerald-400/40 text-[#00E5FF]`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#14A085" />
            <path d="M7 6h5a3.5 3.5 0 010 7H9v5H7V6zm2 2v3.5h3a1.75 1.75 0 100-3.5H9z" fill="#FFF" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('ideogram')) {
      return (
        <div className={`${animClass} bg-[#2A004E] text-[#D8B4FE] border border-purple-400/40`}>
          <svg className="w-5 h-5 fill-current text-[#D8B4FE]" viewBox="0 0 24 24">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('chatgpt')) {
      return (
        <div className={`${animClass} bg-[#064E3B] text-[#34D399] border border-emerald-400/40`}>
          <svg className="w-5 h-5 fill-current text-[#34D399]" viewBox="0 0 24 24">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 23.8a6.0558 6.0558 0 0 0 5.7523-4.1819 5.9847 5.9847 0 0 0 3.9977-2.9 6.0462 6.0462 0 0 0-.728-7.097zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.081 4.7792-2.7582a.791.791 0 0 0 .3927-.6813v-6.7369l2.0232 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4986 4.4949z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('firefly')) {
      return (
        <div className={`${animClass} bg-[#3B0A00] text-[#FF5722] border border-orange-500/40 group-hover:rotate-12`}>
          <Flame className="w-5 h-5 fill-[#FF5722]" />
        </div>
      );
    }
    if (nameLower.includes('gemini') || nameLower.includes('imagen')) {
      return (
        <div className={`${animClass} bg-[#1E1B4B] border border-indigo-400/40`}>
          <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none">
            <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-spark-badge)" />
            <defs>
              <linearGradient id="gemini-spark-badge" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4285F4" />
                <stop offset="0.5" stopColor="#9B51E0" />
                <stop offset="1" stopColor="#EA4335" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }
    if (nameLower.includes('veo')) {
      return (
        <div className={`${animClass} bg-[#083344] text-[#38BDF8] border border-sky-400/40`}>
          <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('sora')) {
      return (
        <div className={`${animClass} bg-[#18181B] text-[#F43F5E] border border-rose-500/40`}>
          <svg className="w-5 h-5 text-[#F43F5E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('shutterstock')) {
      return (
        <div className={`${animClass} bg-[#450A0A] text-[#F87171] border border-red-500/40`}>
          <svg className="w-5 h-5 fill-current text-[#EF4444]" viewBox="0 0 24 24">
            <path d="M4 4h6v2H6v4H4V4zm16 0h-6v2h4v4h2V4zM4 20h6v-2H6v-4H4v6zm16 0h-6v-2h4v-4h2v6zM9 9h6v6H9V9z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('adobe stock')) {
      return (
        <div className={`${animClass} bg-[#3F0712] text-[#FB7185] border border-rose-500/40`}>
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#FB7185]">St</span>
        </div>
      );
    }
    if (nameLower.includes('pexels')) {
      return (
        <div className={`${animClass} bg-[#042F2E] text-[#2DD4BF] border border-teal-400/40`}>
          <svg className="w-5 h-5 fill-current text-[#2DD4BF]" viewBox="0 0 24 24">
            <path d="M6 3h7a6 6 0 0 1 6 6 6 6 0 0 1-6 6H11v6H6V3zm5 8h2a2 2 0 1 0 0-4h-2v4z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('pixabay')) {
      return (
        <div className={`${animClass} bg-[#0F172A] text-[#38BDF8] border border-sky-400/40`}>
          <svg className="w-5 h-5 fill-current text-[#38BDF8]" viewBox="0 0 24 24">
            <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm1.5 14.5H10V7.5h3.5a3.5 3.5 0 0 1 0 7zm0-4.5H12.5V9.5h1a1 1 0 0 1 0 2z" />
          </svg>
        </div>
      );
    }
    if (nameLower.includes('rawpixel')) {
      return (
        <div className={`${animClass} bg-[#1E1B4B] text-[#A78BFA] border border-purple-400/40`}>
          <span className="font-black text-sm tracking-tight text-[#A78BFA]">rp</span>
        </div>
      );
    }
    if (nameLower.includes('steptodown')) {
      return (
        <div className={`${animClass} bg-[#451A03] text-[#FBBF24] border border-amber-400/40`}>
          <svg className="w-5 h-5 text-[#FBBF24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </div>
      );
    }

    return (
      <div className={`${animClass} bg-[#001E36] text-[#31A8FF] border border-sky-400/40`}>
        {name.substring(0, 2)}
      </div>
    );
  };

  // Group skills into categories
  const categories = [
    {
      title: 'Design & Editing Software',
      icon: Wrench,
      accentColor: '#88D900',
      items: skills.filter(s => s.category.includes('Design') || s.category.includes('Editing'))
    },
    {
      title: 'AI / Image & Video Generation Tools',
      icon: Cpu,
      accentColor: '#A855F7',
      items: skills.filter(s => s.category.includes('AI') || s.category.includes('Generation'))
    },
    {
      title: 'Stock Images & Resources',
      icon: Image,
      accentColor: '#38BDF8',
      items: skills.filter(s => s.category.includes('Stock'))
    }
  ];

  // Fallback if custom items don't match categories
  const unassigned = skills.filter(s =>
    !s.category.includes('Design') &&
    !s.category.includes('Editing') &&
    !s.category.includes('AI') &&
    !s.category.includes('Generation') &&
    !s.category.includes('Stock')
  );

  if (unassigned.length > 0) {
    categories[0].items.push(...unassigned);
  }

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      
      {/* Futuristic Animated Particle-Wave Background Layer */}
      <ParticleWaveBackground className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TOOLS &amp; PLATFORMS</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-3">
            TOOLS &amp; <span className="text-[#88D900]">PLATFORMS</span>
          </h2>

          {/* Centered Diamond Accent Line */}
          <div className="flex items-center gap-3 my-2">
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#88D900]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#88D900] shadow-[0_0_8px_#88D900]" />
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#88D900]" />
          </div>

          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-2xl px-4 mt-2 leading-relaxed">
            Industry-standard editing software, cutting-edge AI image/video generators, and curated stock photo libraries.
          </p>
        </motion.div>

        {/* Skills Cards Grid Container — Flat unified layout */}
        <div className="max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.02,
                  ease: [0.25, 0.1, 0.25, 1],
                  hover: { duration: 0.15, ease: 'easeOut' }
                }}
                className="bg-white text-black rounded-2xl px-4 py-3.5 shadow-md hover:shadow-[0_15px_30px_-8px_rgba(136,217,0,0.3)] relative overflow-hidden flex items-center gap-3 border border-transparent hover:border-[#88D900]/40 transition-all duration-300 group cursor-pointer"
              >
                {/* Subtle Light Sheen Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Left App Icon Badge */}
                {renderBadge(skill.name, skill.badgeBg, skill.textColor)}

                {/* Middle Text Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 leading-tight group-hover:text-black transition-colors truncate">
                    {skill.name}
                  </h3>
                  <p className="font-body text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    {skill.subtitle || skill.category}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

