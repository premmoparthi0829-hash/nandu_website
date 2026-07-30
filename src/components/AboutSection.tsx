import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, FileText, Smartphone, Flame, Code, Layers,
  CheckCircle2, X, MapPin, Briefcase, Award, Zap, Palette, Figma
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    { title: 'Brand Identity Design', desc: 'Crafting iconic logos, visual guidelines, and vector color systems.', icon: Palette, color: '#88D900' },
    { title: 'Print & Packaging', desc: 'CMYK print brochures, box dielines, pouches, and trade show collaterals.', icon: Layers, color: '#88D900' },
    { title: 'Social Media & Ads', desc: 'High-converting ad campaign graphics, carousels, and promotional banners.', icon: Smartphone, color: '#88D900' },
    { title: 'UI/UX Design', desc: 'Modern luxury Figma component libraries, wireframes, and design systems.', icon: Figma, color: '#88D900' },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT NANDINI VADDEPALLI</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight">
            CRAFTING ICONIC <span className="text-[#88D900]">VISUAL IDENTITIES</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Luxury Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[400px] sm:h-[480px] rounded-[24px] sm:rounded-[30px] bg-[#151515] border border-white/10 overflow-hidden shadow-2xl group">
              <img
                src={PERSONAL_INFO.heroImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-90" />

              {/* Floating Role Pill */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#88D900] text-black font-button font-bold text-[11px] sm:text-xs shadow-lg flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-black" />
                <span>4.5+ Yrs Pro</span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="text-[11px] sm:text-xs font-heading font-extrabold text-[#88D900] uppercase tracking-wider block mb-1">
                  NANDINI VADDEPALLI
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight mb-2">
                  Creative Graphic Designer &amp; Brand Specialist
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                  <MapPin className="w-3.5 h-3.5 text-[#88D900]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Roles Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-white mb-4 leading-snug">
              Passionate about designing meaningful visual brand stories that engage people and leave a lasting mark.
            </h3>

            <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">
              With 4.5+ years of experience steering brand direction, packaging dielines, digital campaign graphics, and UI design systems, I help companies build memorable identity systems that drive growth and command market authority.
            </p>

            {/* 4 Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-6 sm:mb-8">
              {roles.map((r, idx) => {
                const IconComp = r.icon;
                return (
                  <div
                    key={idx}
                    className="luxury-card p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:border-[#88D900]/50 transition-all"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#090909] border border-[#88D900]/30 text-[#88D900] flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-white mb-1">
                        {r.title}
                      </h4>
                      <p className="font-body text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="btn-neon bg-[#88D900] text-black hover:bg-[#9EF01A] font-button text-xs uppercase tracking-wider font-extrabold flex-1 sm:flex-initial justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-neon-outline font-button text-xs uppercase tracking-wider flex-1 sm:flex-initial justify-center"
              >
                <span>Read Full Biography</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Biography Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#151515] border border-[#88D900]/40 rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 text-white max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-[#090909] text-white hover:text-[#88D900]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#88D900]/10 text-[#88D900] text-xs font-bold mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>BIOGRAPHY &amp; DESIGN PHILOSOPHY</span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-[#88D900]">
                About Nandini Vaddepalli
              </h3>

              <div className="space-y-4 font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                <p>
                  Nandini Vaddepalli is a Senior Graphic Designer and Brand Specialist based in Hyderabad with 4.5+ years of experience delivering high-converting brand identity systems, CMYK print packaging, and modern UI design components.
                </p>
                <p>
                  Her core toolkit includes Adobe Photoshop manipulation, Adobe Illustrator vector logo design, Figma UI systems, Adobe InDesign layout grids, and Canva Pro digital marketing suites.
                </p>
                <div className="p-4 rounded-2xl bg-[#090909] border border-white/10 space-y-2">
                  <span className="font-heading font-bold text-xs text-white uppercase block">
                    Core Design Pillars:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Brand Identity Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Print &amp; Packaging Dielines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Performance Ad Campaigns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Figma Component Kits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={onOpenResume}
                  className="btn-neon bg-[#88D900] text-black font-extrabold text-xs uppercase"
                >
                  Download CV ↗
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
