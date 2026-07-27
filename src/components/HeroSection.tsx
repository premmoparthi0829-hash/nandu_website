import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Star, UserCheck, FolderCheck, Building2, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
import heroImg from '../assets/nandini_coral.png';
import { OrganicWave } from './OrganicWave';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 45;
      const y = (e.clientY - innerHeight / 2) / 45;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-0 px-4 sm:px-12 flex flex-col justify-between overflow-hidden bg-mint-theme">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-white/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[#2D6A4F]/30 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto z-10">
        
        {/* Left Side: Typography, CTA & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* 👋 Hello Badge */}
          <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-heading font-extrabold text-xs uppercase tracking-wider mb-6 shadow-sm">
            <span>👋 HELLO, I'M</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-[78px] leading-[1.02] text-white mb-5 tracking-tight">
            Designing Joy <br />
            in Every Pixel
          </h1>

          {/* Subtitle */}
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white/95 mb-4">
            Nandini Vaddepalli — Creative Graphic Designer &amp; Visual{' '}
            <span className="underline decoration-white/60 decoration-wavy underline-offset-4">
              Brand Specialist
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="font-sans text-sm sm:text-base text-white/90 max-w-lg mb-8 leading-relaxed font-semibold">
            I create meaningful visual stories that help brands connect, engage, and leave a lasting impression. 4.5+ years of driving creative strategy.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full mint-btn-white font-heading font-extrabold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 group"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-full mint-btn-dark font-heading font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 group"
            >
              <span>SEE PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg pt-6 border-t border-white/20">
            <div>
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block leading-none">
                4.5+
              </span>
              <span className="text-[11px] font-sans text-white/80 font-bold uppercase tracking-wider">
                Years Experience
              </span>
            </div>

            <div>
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block leading-none">
                100+
              </span>
              <span className="text-[11px] font-sans text-white/80 font-bold uppercase tracking-wider">
                Projects Completed
              </span>
            </div>

            <div>
              <span className="font-heading font-black text-2xl sm:text-3xl text-white block leading-none">
                10+
              </span>
              <span className="text-[11px] font-sans text-white/80 font-bold uppercase tracking-wider">
                Industries Served
              </span>
            </div>
          </div>

        </motion.div>

        {/* Right Side: Centerpiece Arched Cutout Card & Floating 3D Tool Badges */}
        <motion.div
          style={{ x: mousePos.x, y: mousePos.y }}
          className="lg:col-span-6 relative flex items-center justify-center py-6"
        >
          {/* Main Arched Backdrop Container */}
          <div className="relative w-[310px] sm:w-[410px] h-[400px] sm:h-[510px] rounded-[48px] bg-gradient-to-b from-[#74C69D] to-[#2D6A4F] border-4 border-white/40 shadow-2xl overflow-hidden flex items-end justify-center group">
            
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-12 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />

            {/* Nandini Coral Blazer Photo Centerpiece */}
            <img
              src={heroImg}
              alt="Nandini Vaddepalli"
              className="w-full h-full object-cover object-top relative z-10 filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 3D Photoshop Badge (Top Left) */}
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

          {/* 3D Illustrator Badge (Top Right) */}
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

          {/* 3D Figma Badge (Right Middle) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-1/2 -right-4 sm:right-2 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Figma Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-white text-[#2D6A4F] border border-white/50 flex items-center justify-center text-xl shadow-2xl font-extrabold">
              Fg
            </div>
          </motion.div>

          {/* Left Floating Card: "Designing Brand Identities" */}
          <motion.div
            animate={{ x: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 -left-6 sm:-left-10 z-20 max-w-[180px]"
          >
            <div className="p-3.5 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 shadow-2xl flex items-center gap-3 border border-white">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
                <Heart className="w-4 h-4 fill-emerald-600 animate-pulse" />
              </div>
              <div>
                <span className="text-[11px] font-heading font-bold block leading-tight">
                  Designing
                </span>
                <span className="text-[10px] text-gray-500 font-semibold">
                  Brand Identities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Floating Card: "Projects Completed 100+" */}
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

      {/* Organic Wave Section Transition into Warm Cream */}
      <div className="relative mt-12">
        <OrganicWave fillColor="#FFF9ED" />

        {/* Bottom Social Proof Bar on Warm Cream */}
        <div className="bg-[#FFF9ED] text-[#1B4332] py-6 px-4 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 z-30 relative">
          
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
                10K+ Reviews — 45+ Clients
              </span>
              <span className="text-[10px] text-gray-600 font-semibold">
                100% Client Satisfaction Guaranteed
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#2D6A4F] hover:text-white transition-all">
              <Dribbble className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#2D6A4F] hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#2D6A4F] hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#2D6A4F] hover:text-white transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
