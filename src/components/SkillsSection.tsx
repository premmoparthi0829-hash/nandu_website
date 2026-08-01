import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Code, Smartphone, Flame, Atom, Globe,
  Server, Cpu, Network, GitBranch, Figma, Image, PenTool, Layers
} from 'lucide-react';
import { useData } from '../context/DataContext';

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smartphone': return Smartphone;
    case 'Code': return Code;
    case 'Flame': return Flame;
    case 'Atom': return Atom;
    case 'Globe': return Globe;
    case 'Server': return Server;
    case 'Cpu': return Cpu;
    case 'Network': return Network;
    case 'GitBranch': return GitBranch;
    case 'Figma': return Figma;
    case 'Image': return Image;
    case 'PenTool': return PenTool;
    case 'Layers': return Layers;
    default: return Code;
  }
};

export const SkillsSection: React.FC = () => {
  const { skills } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Design & Tools', 'Branding & Visuals', 'UI/UX & Print'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category.includes(selectedCategory));

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>DESIGN &amp; TECHNICAL MATRIX</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            SKILLS &amp; <span className="text-[#88D900]">TOOLKIT</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            Mastery of industry-standard Adobe Creative Cloud tools, Figma UI design systems, and digital publishing frameworks.
          </p>
        </motion.div>

        {/* Category Filter Pills — wraps cleanly on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-1"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-button text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#88D900] text-[#090909] shadow-[0_0_20px_rgba(136,217,0,0.4)]'
                  : 'bg-[#151515] text-[#9CA3AF] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getSkillIcon(skill.iconName);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="luxury-card p-4 sm:p-6 relative group overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#88D900]/5 rounded-full blur-2xl group-hover:bg-[#88D900]/15 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#090909] border border-[#88D900]/30 text-[#88D900] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#88D900] transition-all">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-heading font-extrabold px-2.5 sm:px-3 py-1 rounded-full bg-[#090909] border border-white/10 text-[#88D900] uppercase tracking-wider max-w-[120px] text-right leading-tight">
                      {skill.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#88D900] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="font-heading font-extrabold text-sm text-[#88D900] ml-2 shrink-0">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <div className="w-full mt-2">
                  <div className="w-full h-1.5 sm:h-2 rounded-full bg-[#090909] border border-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.04 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#88D900]/60 to-[#88D900] shadow-[0_0_10px_#88D900]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
