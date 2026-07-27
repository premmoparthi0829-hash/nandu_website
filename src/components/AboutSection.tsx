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
    { year: '2020', label: 'Junior Graphic Designer',   sub: 'Creative Studio, Hyderabad', icon: Briefcase },
    { year: '2022', label: 'Senior Brand Designer',     sub: 'Digital Agency', icon: Star },
    { year: '2024', label: 'Freelance Creative Lead',   sub: 'Global · 50+ Brands', icon: Globe },
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
            className="relative sm:w-56 shrink-0 flex flex-col items-center justify-end overflow-hidden"
            style={{ minHeight: 260, background: 'linear-gradient(160deg, #D8F3DC 0%, #52B788 60%, #2D6A4F 100%)' }}
          >
            <img
              src={aboutImgColor}
              alt="Nandini Vaddepalli"
              className="w-full object-cover object-top"
              style={{ height: 320 }}
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(29,67,50,0.92), transparent)' }}>
              <p className="text-emerald-200 text-[9px] font-bold uppercase tracking-[0.2em]">Creative Designer</p>
              <p className="text-white font-heading font-black text-lg leading-tight">Nandini<br />Vaddepalli</p>
              <p className="flex items-center gap-1 text-emerald-200 text-[10px] mt-1">
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
                {[['4.5+','Years'],['50+','Brands'],['200+','Projects']].map(([v, l]) => (
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
    { title: 'Creative & Unique',   desc: 'Designs that stand out',    icon: Palette },
    { title: 'Brand Focused',       desc: 'Consistent and impactful',  icon: Sliders },
    { title: 'On-Time Delivery',    desc: 'Committed to deadlines',    icon: Clock   },
    { title: 'Client Satisfaction', desc: 'Quality that builds trust', icon: Smile   },
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

            {/* Value props */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-4"
            >
              {valueProps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-soft-card flex items-center gap-4 hover:border-[#52B788] transition-colors"
                  >
                    <div className="p-3 rounded-xl bg-emerald-100 text-[#2D6A4F] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-[#1B4332]">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {showModal && <AboutModal onClose={() => setShowModal(false)} />}
    </>
  );
};
