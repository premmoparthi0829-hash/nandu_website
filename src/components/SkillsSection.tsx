import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Pencil, Star, Monitor, Flame, Smartphone, Globe
} from 'lucide-react';
import { useData } from '../context/DataContext';

export const SkillsSection: React.FC = () => {
  const { skills } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'ALL', value: 'All', icon: null },
    { label: 'DESIGN & TOOLS', value: 'Design & Tools', icon: Pencil },
    { label: 'BRANDING & VISUALS', value: 'Branding & Visuals', icon: Star },
    { label: 'UI/UX & PRINT', value: 'UI/UX & Print', icon: Monitor },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category.includes(selectedCategory));

  const renderBadge = (skill: typeof skills[0]) => {
    const nameLower = skill.name.toLowerCase();
    if (nameLower.includes('photoshop')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Ph
        </div>
      );
    }
    if (nameLower.includes('illustrator')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Il
        </div>
      );
    }
    if (nameLower.includes('figma')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-md">
          <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
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
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          In
        </div>
      );
    }
    if (nameLower.includes('canva')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Ca
        </div>
      );
    }
    if (nameLower.includes('firefly')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#FF4500] flex items-center justify-center shrink-0 shadow-md">
          <Flame className="w-5 h-5 fill-[#FF4500]" />
        </div>
      );
    }
    if (nameLower.includes('after effects')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Af
        </div>
      );
    }
    if (nameLower.includes('ui/ux')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#00E5FF] flex items-center justify-center shrink-0 shadow-md">
          <Smartphone className="w-5 h-5" />
        </div>
      );
    }
    if (nameLower.includes('brand')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#00E5FF] flex items-center justify-center shrink-0 shadow-md">
          <Globe className="w-5 h-5" />
        </div>
      );
    }
    if (nameLower.includes('packaging')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Pa
        </div>
      );
    }
    if (nameLower.includes('advertising')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Ad
        </div>
      );
    }
    if (nameLower.includes('typography')) {
      return (
        <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
          Ty
        </div>
      );
    }
    return (
      <div className="w-11 h-11 rounded-full bg-black text-[#88D900] font-black text-sm flex items-center justify-center shrink-0 shadow-md">
        {skill.name.substring(0, 2)}
      </div>
    );
  };

  return (
    <section id="skills" className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-10"
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

        {/* Category Filter Pills Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-14 px-2"
        >
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 sm:px-6 py-2.5 rounded-full font-button text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#88D900] text-black shadow-[0_0_20px_rgba(136,217,0,0.4)] scale-105'
                    : 'bg-[#111111]/80 text-[#9CA3AF] hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md'
                }`}
              >
                {IconComp && <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-[#9CA3AF]'}`} />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Cards Grid — 4 columns desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="bg-white text-black rounded-[28px] p-5 shadow-xl relative overflow-hidden flex flex-col justify-between border border-black/5 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  {/* Left Black Circular Icon Badge */}
                  {renderBadge(skill)}

                  {/* Middle Text Info */}
                  <div className="flex-1 min-w-0 pr-1">
                    <h3 className="font-heading font-extrabold text-base text-slate-900 leading-tight">
                      {skill.name}
                    </h3>
                    <p className="font-body text-[11px] text-slate-500 font-medium leading-snug mt-0.5 line-clamp-1">
                      {skill.category} mastery
                    </p>
                  </div>

                  {/* Right Green Circle Percentage Ring */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#88D900] text-[11px] font-extrabold text-slate-900 flex items-center justify-center shrink-0 shadow-sm">
                    {skill.level}%
                  </div>
                </div>
              </div>

              {/* Bottom Green Progress Line */}
              <div className="w-full mt-2">
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.04 }}
                    className="h-full rounded-full bg-[#88D900] shadow-[0_0_8px_#88D900]"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

