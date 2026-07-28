import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, ArrowUpRight, Palette, Sliders, Clock, Smile, X,
  MapPin, GraduationCap, Briefcase, Star, Globe
} from 'lucide-react';
import aboutImg from '../assets/nandini_bw.png';
import aboutImgColor from '../assets/nandini_coral.png';
import { SectionHeading } from './SectionHeading';

/* ─────────────────────────────────────────────
   CLEAN CREAM ABOUT MODAL
───────────────────────────────────────────── */
const AboutModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const tags = [
    'Brand Identity', 'Social Media', 'Print Design',
    'Packaging', 'Typography', 'Advertising', 'UI / UX',
  ];

  const milestones = [
    { year: '2019', label: 'BSc Visual Communication', sub: 'Osmania University', icon: GraduationCap },
    { year: '2020', label: 'Junior Graphic Designer', sub: 'Creative Studio, Hyderabad', icon: Briefcase },
    { year: '2022', label: 'Senior Brand Designer', sub: 'Digital Agency', icon: Star },
    { year: '2024', label: 'Freelance Creative Lead', sub: 'Global · 50+ Brands', icon: Globe },
  ];

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="bd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      >
        {/* Card */}
        <motion.div
          key="card"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-2xl"
          style={{ background: '#FFFBF5' }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* ── LEFT: Portrait column ── */}
          <div
            className="relative sm:w-56 shrink-0 flex flex-col items-center justify-end overflow-hidden h-48 sm:h-auto"
            style={{ minHeight: 180, background: 'linear-gradient(160deg, #D8F3DC 0%, #52B788 60%, #2D6A4F 100%)' }}
          >
            <img
              src={aboutImgColor}
              alt="Nandini Vaddepalli"
              className="w-full h-full object-cover object-top"
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4" style={{ background: 'linear-gradient(to top, rgba(29,67,50,0.92), transparent)' }}>
              <p className="text-emerald-200 text-[9px] font-bold uppercase tracking-[0.2em]">Creative Designer</p>
              <p className="text-white font-heading font-black text-base sm:text-lg leading-tight">Nandini<br className="hidden sm:inline" /> Vaddepalli</p>
              <p className="flex items-center gap-1 text-emerald-200 text-[10px] mt-0.5 sm:mt-1">
                <MapPin className="w-2.5 h-2.5" /> Hyderabad, India
              </p>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex-1 overflow-y-auto">

            {/* Top bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-stone-100" style={{ background: '#FFFBF5' }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#52B788]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">About Me</span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-stone-200 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 py-6 space-y-7">

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[['4.5+', 'Years'], ['50+', 'Brands'], ['200+', 'Projects']].map(([v, l]) => (
                  <div key={l} className="rounded-2xl p-3.5 text-center border border-stone-100" style={{ background: '#F6F2EC' }}>
                    <p className="font-heading font-black text-xl text-[#1B4332]">{v}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52B788] mb-2">My Story</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hi! I'm a passionate graphic designer with <strong className="text-[#1B4332]">4.5+ years</strong> of experience turning ideas into beautiful visuals. I specialise in <strong className="text-[#1B4332]">brand identity, social media creatives</strong> and <strong className="text-[#1B4332]">advertising</strong> — working with startups and global brands to create designs that truly connect.
                </p>
              </div>

              {/* Tags */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52B788] mb-3">Specialisations</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-[10px] font-bold text-[#2D6A4F] border border-emerald-200"
                      style={{ background: '#EDFAF3' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Journey */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52B788] mb-4">Journey</p>
                <div className="relative space-y-4 pl-4">
                  {/* vertical line */}
                  <div className="absolute left-1.5 top-2 bottom-2 w-px bg-emerald-100" />

                  {milestones.map((m, i) => {
                    const Icon = m.icon;
                    const isLatest = i === milestones.length - 1;
                    return (
                      <div key={i} className="flex gap-3 relative">
                        {/* dot */}
                        <div
                          className="shrink-0 w-3 h-3 rounded-full border-2 mt-1 z-10"
                          style={{
                            background: isLatest ? '#52B788' : '#fff',
                            borderColor: isLatest ? '#52B788' : '#B7E4C7',
                            marginLeft: '-1.375rem',
                          }}
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{
                                background: isLatest ? '#52B788' : '#EDFAF3',
                                color: isLatest ? '#fff' : '#2D6A4F',
                              }}
                            >
                              {m.year}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-[#1B4332] leading-snug">{m.label}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">{m.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="text-xs text-gray-500 italic leading-relaxed pl-4 py-1"
                style={{ borderLeft: '3px solid #52B788' }}
              >
                "Design is not just what it looks like — design is how it works and how it makes people feel."
              </blockquote>

            </div>

            {/* Footer CTAs */}
            <div className="px-6 pb-6 flex gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="flex-1 py-3 rounded-full text-center font-heading font-black text-[11px] uppercase tracking-wider text-white hover:opacity-90 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #2D6A4F, #52B788)' }}
              >
                Let's Work Together
              </a>
              <a
                href="#projects"
                onClick={onClose}
                className="flex-1 py-3 rounded-full text-center font-heading font-black text-[11px] uppercase tracking-wider text-[#2D6A4F] border-2 border-[#52B788] hover:bg-[#52B788] hover:text-white transition-all"
              >
                View My Work
              </a>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────── */
export const AboutSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const valueProps = [
    {
      step: '01',
      title: 'Creative & Unique',
      desc: 'Bespoke designs that stand out',
      icon: Palette,
      badge: '100% Custom',
      gradient: 'from-[#52B788] to-[#2D6A4F]',
      lightBg: 'bg-emerald-100/70 dark:bg-emerald-950/50',
      textColor: 'text-[#2D6A4F] dark:text-[#74C69D]',
      borderColor: 'hover:border-[#52B788]',
    },
    {
      step: '02',
      title: 'Brand Focused',
      desc: 'Consistent & impactful visuals',
      icon: Sliders,
      badge: 'Strategic',
      gradient: 'from-[#D4845A] to-[#A0522D]',
      lightBg: 'bg-orange-100/70 dark:bg-orange-950/50',
      textColor: 'text-[#C87D43] dark:text-[#E09F67]',
      borderColor: 'hover:border-[#D4845A]',
    },
    {
      step: '03',
      title: 'On-Time Delivery',
      desc: 'Committed to project deadlines',
      icon: Clock,
      badge: 'Prompt',
      gradient: 'from-[#1B4332] to-[#081C15]',
      lightBg: 'bg-teal-100/70 dark:bg-teal-950/50',
      textColor: 'text-[#1B4332] dark:text-[#52B788]',
      borderColor: 'hover:border-[#1B4332]',
    },
    {
      step: '04',
      title: 'Client Satisfaction',
      desc: 'Quality that builds lasting trust',
      icon: Smile,
      badge: '5★ Quality',
      gradient: 'from-[#F59E0B] to-[#D97706]',
      lightBg: 'bg-amber-100/70 dark:bg-amber-950/50',
      textColor: 'text-[#D97706] dark:text-[#FBBF24]',
      borderColor: 'hover:border-[#F59E0B]',
    },
  ];

  return (
    <>
      <section id="about" className="py-24 px-4 sm:px-12 relative overflow-hidden bg-cream-theme">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-[300px] sm:w-[360px] h-[380px] sm:h-[460px] rounded-[44px] bg-[#52B788]/20 border-4 border-white shadow-2xl overflow-hidden flex items-end justify-center group">
                <div className="absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-[#2D6A4F] to-[#52B788] rounded-t-full -z-10" />
                <img
                  src={aboutImg}
                  alt="Nandini Vaddepalli"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 border border-white shadow-xl flex items-center gap-3 z-20">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-[#2D6A4F]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">Experience</span>
                    <span className="font-heading font-black text-xl text-[#1B4332] leading-none">
                      4.5+ <span className="text-xs font-normal text-gray-500">Years</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col items-start"
            >
              <div className="mb-6">
                <SectionHeading
                  overline="ABOUT ME"
                  title="TURNING IDEAS INTO"
                  script="Visual Masterpieces"
                  align="left"
                  variant="light"
                />
              </div>
              <p className="font-sans text-sm text-gray-700 mb-8 leading-relaxed font-semibold">
                I'm a passionate Graphic Designer with 4.5 years of experience creating impactful designs for digital and print. I specialize in branding, social media creatives, advertising, and corporate communication that drives results.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="group px-7 py-3.5 rounded-full bg-[#1B4332] text-white font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-black transition-all flex items-center gap-2 shadow-md"
              >
                <span>More About Me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Right Column — EXACT VECTOR STICKER GRAPHIC SHAPES (Matching User Reference Image) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 flex flex-col items-center justify-center relative select-none py-2"
            >
              {/* Subtle Floating Sparkles */}
              <div className="absolute -top-4 -left-2 text-[#38BDF8] text-lg font-black">✦</div>
              <div className="absolute -bottom-4 -right-2 text-[#F43F5E] text-lg font-black">✦</div>

              {/* Vertical Stack Container */}
              <div className="flex flex-col items-center gap-3 w-full max-w-[270px]">
                
                {/* 1. PINK BRANDING STICKER — Scallop Badge Left + Pill Right */}
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  className="w-full relative flex items-center transform -rotate-4 cursor-pointer"
                >
                  <div className="w-full py-2.5 pl-10 pr-4 rounded-full bg-[#FCE7F3] border-2 border-[#BE123C] text-[#BE123C] font-heading font-black text-xs uppercase tracking-wider text-center shadow-md relative">
                    {/* Left Scalloped Starburst Badge */}
                    <div className="absolute -left-1 -top-1.5 bottom-0 w-9 h-9 rounded-full bg-[#FCE7F3] border-2 border-[#BE123C] flex items-center justify-center text-[#BE123C] shadow-sm">
                      <span className="text-xs font-black">⚙</span>
                    </div>
                    <span>BRANDING</span>
                  </div>
                </motion.div>

                {/* 2. PURPLE E-COMMERCE STICKER — Arch Top Dome Cutout */}
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  className="w-full relative transform rotate-4 cursor-pointer"
                >
                  <div className="w-full py-2.5 px-6 rounded-t-[28px] rounded-b-xl bg-[#EDE9FE] border-2 border-[#6D28D9] text-[#6D28D9] font-heading font-black text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2">
                    <span className="text-[#38BDF8] text-sm">★</span>
                    <span>E-COMMERCE</span>
                  </div>
                </motion.div>

                {/* 3. YELLOW 2D ILLUSTRATION STICKER — PERFECT SVG VECTOR PENCIL */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -1 }}
                  className="w-[105%] relative flex items-center transform -rotate-3 cursor-pointer z-20 shadow-lg"
                >
                  {/* Pink Eraser Tip Left */}
                  <div className="w-5 h-8 rounded-l-full bg-[#F472B6] border-2 border-r-0 border-[#BE123C] shrink-0" />
                  {/* Metal Ferrule Band */}
                  <div className="w-3 h-8 bg-[#CBD5E1] border-y-2 border-slate-600 shrink-0 flex items-center justify-center">
                    <div className="w-0.5 h-full bg-slate-400" />
                  </div>
                  {/* Yellow Pencil Shaft */}
                  <div className="flex-1 py-1.5 bg-[#FACC15] border-y-2 border-[#CA8A04] text-[#713F12] font-heading font-black text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                    <span className="text-xs">✏</span>
                    <span>2D ILLUSTRATION</span>
                  </div>
                  {/* Sharpened Wood Cone & Graphite Lead Tip SVG */}
                  <svg width="22" height="32" viewBox="0 0 22 32" fill="none" className="shrink-0 -ml-[1px]">
                    <path d="M0 0 L22 16 L0 32 Z" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M14 10.2 L22 16 L14 21.8 Z" fill="#1E293B" />
                  </svg>
                </motion.div>

                {/* 4. MINT GREEN MASCOT DESIGN STICKER — Soft Rounded Glove Cut */}
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  className="w-full py-2.5 px-6 rounded-2xl rounded-tr-3xl bg-[#DCFCE7] border-2 border-[#15803D] text-[#15803D] font-heading font-black text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-1.5 transform rotate-5 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cream-theme border-2 border-[#15803D]" />
                  <span>MASCOT DESIGN</span>
                </motion.div>

                {/* 5. LIME LOGO DESIGN STICKER — REVERSE VECTOR LIME PENCIL (Pointing Left) */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  className="w-[105%] relative flex items-center transform -rotate-4 cursor-pointer z-20 shadow-lg"
                >
                  {/* Sharpened Wood Cone & Graphite Lead Tip SVG (Pointing Left) */}
                  <svg width="22" height="32" viewBox="0 0 22 32" fill="none" className="shrink-0 -mr-[1px]">
                    <path d="M22 0 L0 16 L22 32 Z" fill="#ECFCCB" stroke="#65A30D" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M8 10.2 L0 16 L8 21.8 Z" fill="#1E293B" />
                  </svg>
                  {/* Lime Pencil Shaft */}
                  <div className="flex-1 py-1.5 bg-[#BEF264] border-y-2 border-[#65A30D] text-[#3F6212] font-heading font-black text-[11px] uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                    <span className="text-xs">✒️</span>
                    <span>LOGO DESIGN</span>
                  </div>
                  {/* Metal Ferrule Band */}
                  <div className="w-3 h-8 bg-[#CBD5E1] border-y-2 border-slate-600 shrink-0 flex items-center justify-center">
                    <div className="w-0.5 h-full bg-slate-400" />
                  </div>
                  {/* Lime Eraser Tip Right */}
                  <div className="w-5 h-8 rounded-r-full bg-[#A3E635] border-2 border-l-0 border-[#3F6212] shrink-0" />
                </motion.div>

                {/* 6. ORANGE MANIPULATION STICKER — Slanted Tab */}
                <motion.div
                  whileHover={{ scale: 1.06, rotate: 2 }}
                  className="w-full relative transform rotate-6 cursor-pointer"
                >
                  <div className="w-full py-2.5 px-6 rounded-t-xl rounded-b-full bg-[#FFEDD5] border-2 border-[#C2410C] text-[#C2410C] font-heading font-black text-xs uppercase tracking-wider text-center shadow-md">
                    <span>MANIPULATION</span>
                  </div>
                </motion.div>

                {/* 7. SOFT BLUE GRAPHIC DESIGN STICKER — Circular Loop Badge on Right (Matching Branding Style) */}
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  className="w-full relative flex items-center transform -rotate-3 cursor-pointer"
                >
                  <div className="w-full py-2.5 pl-4 pr-10 rounded-full bg-[#DBEAFE] border-2 border-[#1D4ED8] text-[#1D4ED8] font-heading font-black text-xs uppercase tracking-wider text-center shadow-md relative">
                    {/* Right Circular Loop Badge */}
                    <div className="absolute -right-1 -top-1.5 bottom-0 w-9 h-9 rounded-full bg-[#DBEAFE] border-2 border-[#1D4ED8] flex items-center justify-center text-[#1D4ED8] shadow-sm">
                      <span className="text-xs font-black">🎨</span>
                    </div>
                    <span>GRAPHIC DESIGN</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {showModal && <AboutModal onClose={() => setShowModal(false)} />}
    </>
  );
};
