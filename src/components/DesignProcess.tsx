import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Palette, PlayCircle, Rocket, Sparkles, ArrowRight } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Research',
      icon: Search,
      subtitle: 'Market Intelligence & Brand Audit',
      desc: 'Analyzing target demographics, competitor brand ecosystems, typography trends, and strategic product positioning.',
      deliverables: ['Competitor Benchmark Matrix', 'User Persona Cards', 'Visual Moodboards'],
    },
    {
      number: '02',
      title: 'Sketch',
      icon: PenTool,
      subtitle: 'Conceptual Exploration & Wireframes',
      desc: 'Iterating through hundreds of vector logo sketches, grid layouts, component abstractions, and brand mark geometry.',
      deliverables: ['Vector Logo Concepts', 'Wireframe Layouts', 'Typography Pairings'],
    },
    {
      number: '03',
      title: 'Design',
      icon: Palette,
      subtitle: 'High-Fidelity Visual Identity & Systems',
      desc: 'Transforming approved concepts into pixel-perfect Illustrator vectors, Photoshop renders, and Figma design tokens.',
      deliverables: ['Brand Guidelines Book', 'Color System Tokens', 'Asset Libraries'],
    },
    {
      number: '04',
      title: 'Prototype',
      icon: PlayCircle,
      subtitle: 'Interactive Micro-Interactions & AI Renders',
      desc: 'Bringing visual designs to life with Sora motion prompts, responsive Framer/Figma prototypes, and micro-animations.',
      deliverables: ['Framer Web Prototype', 'Motion Reel Video', 'Generative AI Renders'],
    },
    {
      number: '05',
      title: 'Deliver',
      icon: Rocket,
      subtitle: 'Handoff & Asset Optimization',
      desc: 'Packaging vector files, SVG exports, developer handoff tokens, and brand usage documentation for seamless rollout.',
      deliverables: ['Production SVG/PNG Assets', 'Developer Stylekit', 'Launch Support'],
    },
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-primary-light dark:text-primary-dark">
            Design <span className="text-gradient">Process</span>
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark text-sm sm:text-base max-w-xl mt-3">
            Apple and Framer standard 5-step creative pipeline delivering zero-friction brand perfection.
          </p>
        </div>

        {/* Horizontal Pipeline Steps Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${
                  isActive
                    ? 'accent-gradient-bg text-white shadow-xl scale-105 z-10'
                    : 'glass-panel-light dark:glass-panel-dark text-secondary-light dark:text-secondary-dark hover:text-accent border border-gray-200 dark:border-gray-800'
                }`}
              >
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest mb-2 ${isActive ? 'text-white/80' : 'text-accent'}`}>
                  Step {step.number}
                </span>
                <div className={`p-2.5 rounded-xl mb-2 ${isActive ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-heading font-bold text-sm uppercase tracking-wider">
                  {step.title}
                </span>

                {/* Connector Arrow on Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-700 z-20">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl glass-panel-light dark:glass-panel-dark border border-gray-200/80 dark:border-gray-800/80 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-accent/20 text-accent font-mono font-bold text-xs">
                  PHASE {steps[activeStep].number}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary-light dark:text-primary-dark">
                  {steps[activeStep].title} — <span className="text-accent">{steps[activeStep].subtitle}</span>
                </h3>
              </div>

              <p className="text-sm text-secondary-light dark:text-secondary-dark mt-4 mb-6 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-light dark:text-primary-dark mb-3">
                  Phase Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-primary-light dark:text-primary-dark border border-gray-200 dark:border-gray-700"
                    >
                      ✦ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full accent-gradient-bg flex items-center justify-center text-white shadow-2xl animate-pulse">
                {React.createElement(steps[activeStep].icon, { className: 'w-16 h-16' })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
