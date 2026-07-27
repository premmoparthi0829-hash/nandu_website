import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, ArrowUpRight, Palette, Sliders, Clock, Smile,
  X, GraduationCap, Briefcase, Heart, Figma, Layers, Zap,
  Star, Coffee, Globe
} from 'lucide-react';
import aboutImg from '../assets/nandini_bw.png';
import aboutImgColor from '../assets/nandini_coral.png';
import { SectionHeading } from './SectionHeading';

/* ── ABOUT MODAL ──────────────────────────────────────── */
const AboutModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'education'>('story');

  const tabs = [
    { id: 'story',     label: 'My Story',   icon: Heart },
    { id: 'skills',    label: 'Toolset',    icon: Zap },
    { id: 'education', label: 'Journey',    icon: GraduationCap },
  ] as const;

  const tools = [
    { name: 'Adobe Illustrator', level: 95, color: '#FF9A00' },
    { name: 'Adobe Photoshop',   level: 90, color: '#31A8FF' },
    { name: 'Adobe InDesign',    level: 85, color: '#FF3366' },
    { name: 'Figma',             level: 88, color: '#A259FF' },
    { name: 'Canva Pro',         level: 92, color: '#00C4CC' },
    { name: 'After Effects',     level: 75, color: '#9999FF' },
  ];

  const journey = [
    {
      year: '2019',
      title: 'B.Sc Visual Communication',
      org: 'Osmania University, Hyderabad',
      desc: 'Graduated with first class honours — specialising in typography, layout design & brand identity.',
      icon: GraduationCap,
    },
    {
      year: '2020',
      title: 'Junior Graphic Designer',
      org: 'Creative Studio, Hyderabad',
      desc: 'Started career crafting social media creatives, print collateral and packaging for 20+ clients.',
      icon: Briefcase,
    },
    {
      year: '2022',
      title: 'Senior Brand Designer',
      org: 'Digital Agency',
      desc: 'Led end-to-end brand identity projects for startups & established companies across India & UAE.',
      icon: Star,
    },
    {
      year: '2024',
      title: 'Freelance Creative Director',
      org: 'Independent',
      desc: 'Working globally with 50+ brands on premium visual communication and brand strategy.',
      icon: Globe,
    },
  ];

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6"
        onClick={onClose}
      >
        {/* Panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-full sm:max-w-2xl max-h-[92vh] rounded-t-3xl sm:rounded-3xl bg-[#FFF9ED] overflow-hidden flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero strip */}
          <div className="relative h-36 bg-gradient-to-br from-[#2D6A4F] to-[#52B788] shrink-0 overflow-hidden">
            <img
              src={aboutImgColor}
              alt="Nandini"
              className="absolute right-0 bottom-0 h-full w-40 object-cover object-top opacity-80"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <p className="text-emerald-200 text-[10px] font-bold uppercase tracking-widest">Creative Graphic Designer</p>
              <h2 className="text-white font-heading font-black text-2xl leading-tight">Nandini Vaddepalli</h2>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-emerald-100 text-xs font-semibold">
                  <Coffee className="w-3 h-3" /> Hyderabad, India
                </span>
                <span className="flex items-center gap-1 text-emerald-100 text-xs font-semibold">
                  <Sparkles className="w-3 h-3" /> 4.5+ Years
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100 px-6 pt-4 gap-1 shrink-0 bg-white">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-[#52B788] text-[#2D6A4F]'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="overflow-y-auto flex-1 p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'story' && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    Hi! I'm <strong className="text-[#1B4332]">Nandini Vaddepalli</strong>, a passionate graphic designer with over <strong className="text-[#2D6A4F]">4.5 years</strong> of experience transforming ideas into compelling visual stories.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    I specialise in <strong className="text-[#1B4332]">brand identity systems, social media creatives, advertising campaigns</strong> and <strong className="text-[#1B4332]">corporate communication</strong>. Every project I take on is treated as an opportunity to push creative boundaries while staying true to the brand's voice.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    I've had the privilege of working with <strong className="text-[#2D6A4F]">50+ brands</strong> across India, UAE and beyond — from early-stage startups finding their visual identity to established companies refreshing their look.
                  </p>

                  {/* Stat pills */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      { val: '50+',  label: 'Brands' },
                      { val: '200+', label: 'Projects' },
                      { val: '98%',  label: 'Satisfied' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 text-center">
                        <p className="font-heading font-black text-2xl text-[#1B4332]">{s.val}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-[#52B788] pl-4 py-1">
                    "Design is not just what it looks like and feels like. Design is how it works — and how it makes people feel."
                  </p>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-4">Design Tools & Software</p>
                  {tools.map((tool, i) => (
                    <div key={tool.name} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-[#1B4332]">{tool.name}</span>
                        <span className="text-xs font-extrabold" style={{ color: tool.color }}>{tool.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: tool.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.level}%` }}
                          transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-3">Specialisations</p>
                    <div className="flex flex-wrap gap-2">
                      {['Brand Identity', 'Social Media', 'Print Design', 'UI/UX', 'Packaging', 'Motion Graphics', 'Typography', 'Illustration'].map((s) => (
                        <span key={s} className="px-3 py-1.5 rounded-full bg-emerald-50 text-[#2D6A4F] text-xs font-bold border border-emerald-100">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  {journey.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-4 pb-6 relative">
                        {/* Timeline line */}
                        {i < journey.length - 1 && (
                          <div className="absolute left-5 top-10 w-0.5 h-full bg-emerald-100" />
                        )}
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center shrink-0 z-10 border-2 border-white shadow-sm">
                          <Icon className="w-4 h-4" />
                        </div>
                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#52B788] bg-emerald-50 px-2 py-0.5 rounded-full">{item.year}</span>
                          </div>
                          <h4 className="font-heading font-black text-sm text-[#1B4332]">{item.title}</h4>
                          <p className="text-[11px] font-bold text-gray-400 mb-1">{item.org}</p>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-gray-100 bg-white shrink-0 flex gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 py-3 rounded-full bg-[#1B4332] text-white font-heading font-black text-xs uppercase tracking-wider text-center hover:bg-black transition-all"
            >
              Let's Work Together
            </a>
            <a
              href="#projects"
              onClick={onClose}
              className="flex-1 py-3 rounded-full border-2 border-[#1B4332] text-[#1B4332] font-heading font-black text-xs uppercase tracking-wider text-center hover:bg-[#1B4332] hover:text-white transition-all"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ── ABOUT SECTION ────────────────────────────────────── */
export const AboutSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const valueProps = [
    { title: 'Creative & Unique',    desc: 'Designs that stand out',        icon: Palette  },
    { title: 'Brand Focused',        desc: 'Consistent and impactful',      icon: Sliders  },
    { title: 'On-Time Delivery',     desc: 'Committed to deadlines',        icon: Clock    },
    { title: 'Client Satisfaction',  desc: 'Quality that builds trust',     icon: Smile    },
  ];

  return (
    <>
      <section id="about" className="py-24 px-4 sm:px-12 relative overflow-hidden bg-cream-theme">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: B&W Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-[300px] sm:w-[360px] h-[380px] sm:h-[460px] rounded-[44px] bg-[#52B788]/20 dark:bg-[#1E2430] border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden flex items-end justify-center group">
                <div className="absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-[#2D6A4F] to-[#52B788] rounded-t-full -z-10" />
                <img
                  src={aboutImg}
                  alt="Nandini Vaddepalli"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-gray-900 border border-white shadow-xl flex items-center gap-3 z-20">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-[#2D6A4F]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-gray-500 uppercase tracking-wider block font-bold">Experience</span>
                    <span className="font-heading font-black text-xl text-[#1B4332] leading-none">
                      4.5+ <span className="text-xs font-normal text-gray-500">Years</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Column: Text */}
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
              <p className="font-sans text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-semibold">
                I'm a passionate Graphic Designer with 4.5 years of experience creating impactful designs for digital and print. I specialize in branding, social media creatives, advertising, and corporate communication that drives results.
              </p>

              {/* More About Me — now opens modal */}
              <button
                onClick={() => setShowModal(true)}
                className="px-7 py-3.5 rounded-full bg-[#1B4332] text-white font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-black transition-all flex items-center gap-2 shadow-md group"
              >
                <span>More About Me</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Right Column: 4 Value Props */}
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
                    className="p-4 rounded-2xl bg-white dark:bg-[#121620] border border-emerald-100 dark:border-gray-800 shadow-soft-card flex items-center gap-4 hover:border-[#52B788] transition-colors"
                  >
                    <div className="p-3 rounded-xl bg-emerald-100 text-[#2D6A4F] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-extrabold text-sm text-[#1B4332] dark:text-white">{item.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* More About Me Modal */}
      {showModal && <AboutModal onClose={() => setShowModal(false)} />}
    </>
  );
};
