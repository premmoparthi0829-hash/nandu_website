import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Heart, ArrowUpRight, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
import { DesignTheme } from '../types/app';
import heroImg from '../assets/nandini_coral.png';
import { OrganicWave } from './OrganicWave';

interface CreamyHeroProps {
  activeTheme: DesignTheme;
  setActiveTheme: (theme: DesignTheme) => void;
  onOpenInquiry: () => void;
}

export const CreamyHero: React.FC<CreamyHeroProps> = ({
  activeTheme,
  setActiveTheme,
  onOpenInquiry,
}) => {
  const themeConfigs: Record<DesignTheme, { bg: string; btnDark: string; title: string; subtitle: string }> = {
    mint: {
      bg: 'bg-[#52B788]',
      btnDark: 'bg-[#1B4332] hover:bg-[#081C15]',
      title: 'Designing Joy in Every Pixel',
      subtitle: 'Nandini Vaddepalli — Creative Graphic Designer & Visual Brand Specialist with 4.5+ years of driving brand growth.',
    },
    peach: {
      bg: 'bg-[#C87D43]',
      btnDark: 'bg-[#5C3212] hover:bg-[#381B05]',
      title: 'Crafting Iconic Visual Identities',
      subtitle: 'Transforming complex ideas into unforgettable brand systems, packaging dielines, and digital campaign graphics.',
    },
    coral: {
      bg: 'bg-[#EE4D2D]',
      btnDark: 'bg-[#7A1602] hover:bg-[#450900]',
      title: 'High-Impact Brand Strategy',
      subtitle: 'Combining strategic art direction with motion graphics and UI design that commands audience attention.',
    },
    cream: {
      bg: 'bg-[#DDA15E]',
      btnDark: 'bg-[#283618] hover:bg-[#111A07]',
      title: 'Timeless Elegance & Modern Art Direction',
      subtitle: 'Delivering pastured, clean visual storytelling tailored for fast-growing startups and global enterprises.',
    },
  };

  const currentTheme = themeConfigs[activeTheme] || themeConfigs.mint;

  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`relative min-h-screen pt-32 pb-0 flex flex-col justify-between transition-colors duration-700 ${currentTheme.bg} text-white overflow-hidden`}>
      
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-white/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">
        
        {/* Left Side: Headline & CTA Buttons */}
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col items-start space-y-6"
        >
          {/* 👋 Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-heading font-extrabold text-xs uppercase tracking-widest shadow-sm">
            <span>👋 HELLO, I'M NANDINI</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-[76px] leading-[1.02] tracking-tight text-white drop-shadow-md">
            {currentTheme.title}
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-white/95 max-w-lg leading-relaxed font-semibold">
            {currentTheme.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-heading font-black text-xs uppercase tracking-wider shadow-xl hover:bg-[#FFF9ED] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>HIRE ME NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#projects"
              className={`px-8 py-4 rounded-full ${currentTheme.btnDark} text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2`}
            >
              <span>VIEW PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Color Theme Switcher Arrows (Image 1, 2, 3 Layout) */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={() => {
                const keys: DesignTheme[] = ['mint', 'peach', 'coral'];
                const idx = keys.indexOf(activeTheme);
                setActiveTheme(keys[(idx - 1 + keys.length) % keys.length]);
              }}
              className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-black transition-colors"
              title="Previous Color Palette"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const keys: DesignTheme[] = ['mint', 'peach', 'coral'];
                const idx = keys.indexOf(activeTheme);
                setActiveTheme(keys[(idx + 1) % keys.length]);
              }}
              className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-black transition-colors"
              title="Next Color Palette"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

        {/* Right Side: Centerpiece Arched Portrait & Floating 3D Tool Badges */}
        <motion.div
          key={activeTheme + 'center'}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative flex flex-col items-center justify-center py-6"
        >
          {/* Main Arched Backdrop Frame */}
          <div className="relative w-[310px] sm:w-[410px] h-[400px] sm:h-[510px] rounded-[48px] bg-gradient-to-b from-white/30 to-black/20 border-4 border-white/40 shadow-2xl overflow-hidden flex items-end justify-center group">
            
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-12 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />

            {/* Nandini Studio Portrait Centerpiece */}
            <img
              src={heroImg}
              alt="Nandini Vaddepalli"
              className="w-full h-full object-cover object-top relative z-10 filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 3D Photoshop Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-6 left-2 sm:left-6 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Photoshop Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#001E36] border-2 border-[#00A4E4] text-[#00A4E4] flex items-center justify-center font-extrabold font-mono text-lg shadow-2xl">
              Ps
            </div>
          </motion.div>

          {/* 3D Illustrator Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-20 right-2 sm:right-6 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Illustrator Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#330000] border-2 border-[#FF9A00] text-[#FF9A00] flex items-center justify-center font-extrabold font-mono text-lg shadow-2xl">
              Ai
            </div>
          </motion.div>

          {/* 3D Figma Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-1/2 -right-4 sm:right-2 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Figma Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-white text-gray-900 border border-white/50 flex items-center justify-center text-xl shadow-2xl font-extrabold">
              Fg
            </div>
          </motion.div>

          {/* Floating Stat Badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 right-2 sm:right-6 z-20"
          >
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 shadow-2xl flex items-center gap-4 border border-white">
              <div>
                <span className="text-[10px] font-semibold text-gray-500 block uppercase tracking-wider">
                  Projects Completed
                </span>
                <span className="font-heading font-black text-2xl text-gray-900">
                  100+
                </span>
              </div>
              <div className="flex items-end gap-1 h-8">
                <div className="w-1.5 h-4 bg-emerald-300 rounded-full" />
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <div className="w-1.5 h-8 bg-[#2D6A4F] rounded-full" />
                <div className="w-1.5 h-5 bg-emerald-400 rounded-full" />
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* Organic Wave Transition to Warm Cream (Image 1, 2, 3 Layout) */}
      <div className="relative mt-8 z-20">
        <OrganicWave fillColor="#FFF9ED" />

        {/* Bottom Social Proof Bar on Warm Cream */}
        <div className="bg-[#FFF9ED] text-[#1B4332] py-6 px-4 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Customer Review Avatar Stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border-2 border-[#FFF9ED]">
                NV
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center border-2 border-[#FFF9ED]">
                SK
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center border-2 border-[#FFF9ED]">
                AR
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-heading font-extrabold text-[#1B4332] block leading-tight">
                10K+ Reviews — 45+ Happy Clients
              </span>
              <span className="text-[10px] text-gray-600 font-semibold">
                100% Client Satisfaction &amp; Fast Turnaround
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Dribbble className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
