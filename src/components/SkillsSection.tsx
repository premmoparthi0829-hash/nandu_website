import React from 'react';
import { motion } from 'framer-motion';
import {
  Star, Flame, Smartphone, Globe
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { ParticleWaveBackground } from './ParticleWaveBackground';

export const SkillsSection: React.FC = () => {
  const { skills } = useData();

  const renderBadge = (skill: typeof skills[0]) => {
    const nameLower = skill.name.toLowerCase();
    const animClass = "group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md flex items-center justify-center shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl";

    if (nameLower.includes('photoshop')) {
      return (
        <div className={`${animClass} bg-[#001E36] text-[#31A8FF] font-black text-base sm:text-lg border border-sky-400/30`}>
          Ps
        </div>
      );
    }
    if (nameLower.includes('illustrator')) {
      return (
        <div className={`${animClass} bg-[#331000] text-[#FF9A00] font-black text-base sm:text-lg border border-amber-500/30`}>
          Ai
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
    if (nameLower.includes('indesign')) {
      return (
        <div className={`${animClass} bg-[#2B0017] text-[#FF3366] font-black text-base sm:text-lg border border-pink-500/30`}>
          Id
        </div>
      );
    }
    if (nameLower.includes('canva')) {
      return (
        <div className={`${animClass} bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8] text-white font-black font-serif italic text-lg sm:text-xl`}>
          C
        </div>
      );
    }
    if (nameLower.includes('firefly')) {
      return (
        <div className={`${animClass} bg-[#200000] text-[#FF4500] border border-orange-500/30 group-hover:rotate-12`}>
          <Flame className="w-5 h-5 fill-[#FF4500]" />
        </div>
      );
    }
    if (nameLower.includes('after effects')) {
      return (
        <div className={`${animClass} bg-[#00005C] text-[#9999FF] font-black text-base sm:text-lg border border-indigo-500/30`}>
          Ae
        </div>
      );
    }
    if (nameLower.includes('ui/ux')) {
      return (
        <div className={`${animClass} bg-[#001A26] text-[#00E5FF] border border-cyan-500/30 group-hover:-rotate-6`}>
          <Smartphone className="w-5 h-5 text-[#00E5FF]" />
        </div>
      );
    }
    if (nameLower.includes('brand')) {
      return (
        <div className={`${animClass} bg-[#10002B] text-[#9D4EDD] border border-purple-500/30 group-hover:rotate-12`}>
          <Star className="w-5 h-5 fill-[#9D4EDD] text-[#9D4EDD]" />
        </div>
      );
    }
    if (nameLower.includes('packaging')) {
      return (
        <div className={`${animClass} bg-[#1A1A00] text-[#FFB703] border border-amber-500/30`}>
          Pa
        </div>
      );
    }
    if (nameLower.includes('advertising')) {
      return (
        <div className={`${animClass} bg-[#4A0033] text-[#FF61F6] border border-pink-500/30`}>
          Ad
        </div>
      );
    }
    if (nameLower.includes('typography')) {
      return (
        <div className={`${animClass} bg-[#001A26] text-[#00B4D8] border border-teal-500/30`}>
          Ty
        </div>
      );
    }
    return (
      <div className={`${animClass} bg-[#001E36] text-[#31A8FF] font-black text-base sm:text-lg border border-sky-400/30`}>
        {skill.name.substring(0, 2)}
      </div>
    );
  };

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      
      {/* Futuristic Animated Particle-Wave Background Layer */}
      <ParticleWaveBackground className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-14"
        >
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-3">
            SKILLS &amp; <span className="text-[#88D900]">TOOLKIT</span>
          </h2>

          {/* Centered Diamond Accent Line */}
          <div className="flex items-center gap-3 my-2">
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#88D900]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#88D900] shadow-[0_0_8px_#88D900]" />
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#88D900]" />
          </div>

          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-2xl px-4 mt-2 leading-relaxed">
            Mastery of industry-standard Adobe Creative Cloud tools, Figma UI design systems, and digital publishing frameworks.
          </p>
        </motion.div>

        {/* Skills Cards Grid Container — Medium balanced width */}
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
                  delay: index * 0.025,
                  ease: [0.25, 0.1, 0.25, 1],
                  hover: { duration: 0.15, ease: 'easeOut' }
                }}
                className="bg-white text-black rounded-2xl px-4 py-3.5 shadow-md hover:shadow-[0_15px_30px_-8px_rgba(136,217,0,0.3)] relative overflow-hidden flex items-center gap-3 border border-transparent hover:border-[#88D900]/40 transition-all duration-300 group cursor-pointer"
              >
                {/* Subtle Light Sheen Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Left App Icon Badge */}
                {renderBadge(skill)}

                {/* Middle Text Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 leading-tight group-hover:text-black transition-colors truncate">
                    {skill.name}
                  </h3>
                  <p className="font-body text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5 truncate">
                    {skill.category}
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
