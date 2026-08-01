import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Palette, Layers, SlidersHorizontal, PackageCheck, Sparkles, ArrowDown, Send } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'BRIEF',
    description: 'Understanding client goals & brand strategy.',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'CONCEPT',
    description: 'Exploring visual directions & moodboards.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'CREATE',
    description: 'Crafting logos, brand identity & packaging.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'REFINE',
    description: 'Polishing composition & client feedback.',
    icon: SlidersHorizontal,
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'Exporting print-ready master brand files.',
    icon: PackageCheck,
  },
];

export const DesignProcess: React.FC = () => {
  return (
    <section id="process" className="py-12 sm:py-20 lg:py-24 px-4 sm:px-8 bg-[#090909] text-white relative overflow-hidden border-t border-white/5 font-sans">
      <div className="absolute top-1/2 left-10 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#88D900]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP / WEB VIEW (Horizontal 5-Step Pipeline Layout)
          ═══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center">
          
          {/* Left Title Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-4 flex flex-col items-start relative pr-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CREATIVE WORKFLOW</span>
            </div>

            <h2 className="font-heading font-black text-5xl xl:text-6xl tracking-tight leading-none text-white">
              MY WORKING <br />
              <span className="text-[#88D900]">PROCESS</span>
            </h2>

            {/* Neon Green Brush Underline Scribble */}
            <div className="mt-3 relative w-56 h-4">
              <svg viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#88D900]">
                <path
                  d="M3 14C50 4 120 2 197 12C150 16 70 18 10 16"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Curved Hand-Drawn Arrow pointing right towards Step 01 */}
            <div className="absolute -right-6 top-16 text-white/80 w-14 h-14">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/60">
                <path
                  d="M10 15 Q 35 10, 45 35 M 45 35 L 35 30 M 45 35 L 42 22"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right Horizontal 5-Step Pipeline */}
          <div className="col-span-8">
            <div className="grid grid-cols-5 gap-2 relative">
              
              {STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isLaunch = step.number === '05';

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Dotted Line Connector to Next Step */}
                    {idx < STEPS.length - 1 && (
                      <div className="absolute top-9 left-[60%] right-[-40%] h-[2px] border-b-2 border-dashed border-[#88D900]/30 z-0 pointer-events-none" />
                    )}

                    {/* Icon Badge Container */}
                    <div className="relative z-10 mb-3">
                      
                      {/* High-Impact Circle Badge with Hover Glow */}
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          isLaunch
                            ? 'bg-[#88D900] text-black shadow-[0_0_25px_rgba(136,217,0,0.5)] border-2 border-[#88D900]'
                            : 'bg-[#151515] text-[#88D900] border-2 border-[#88D900]/50 shadow-[0_0_15px_rgba(136,217,0,0.15)] group-hover:bg-[#88D900] group-hover:text-black group-hover:border-[#88D900] group-hover:shadow-[0_0_25px_rgba(136,217,0,0.5)]'
                        }`}
                      >
                        <IconComponent className="w-7 h-7 stroke-[2.2]" />
                      </div>

                      {/* Small Dark Number Circle Badge (01, 02, etc.) */}
                      <div className="absolute -bottom-2 -left-1 w-7 h-7 rounded-full bg-[#090909] border-2 border-[#88D900]/60 text-[#88D900] text-xs font-mono font-bold flex items-center justify-center shadow-md">
                        {step.number}
                      </div>

                      {/* Energy Rays on Step 05 (DELIVER) */}
                      {isLaunch && (
                        <div className="absolute -top-2 -right-2 text-[#88D900] animate-pulse">
                          <Sparkles className="w-5 h-5 fill-[#88D900]" />
                        </div>
                      )}
                    </div>

                    {/* Step Title */}
                    <h3 className="font-heading font-extrabold text-sm text-white tracking-wider mb-1.5 uppercase">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-gray-400 leading-relaxed max-w-[150px] font-sans">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE / TABLET VIEW (Compact Minimal Step Rows)
          ═══════════════════════════════════════════════════════════ */}
      <div className="block lg:hidden max-w-2xl mx-auto">
        
        {/* Simple Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-2 shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>CREATIVE WORKFLOW</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-4xl tracking-tight text-white">
            MY WORKING <span className="text-[#88D900]">PROCESS</span>
          </h2>
        </div>

        {/* Compact Minimal Step Rows (No Big Boxes) */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            const isLast = idx === STEPS.length - 1;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 group hover:bg-white/[0.02] px-2.5 rounded-xl transition-colors"
              >
                {/* Left Indicator Symbol + Icon + Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  {/* Small Symbol Badge */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isLast
                        ? 'bg-[#88D900] text-black shadow-[0_0_10px_rgba(136,217,0,0.5)]'
                        : 'bg-[#88D900]/10 text-[#88D900] border border-[#88D900]/30'
                    }`}
                  >
                    {isLast ? (
                      <Send className="w-3 h-3 stroke-[2.5] -rotate-45" />
                    ) : (
                      <ArrowDown className="w-3 h-3 stroke-[2.5]" />
                    )}
                  </div>

                  {/* Icon */}
                  <IconComponent className="w-4 h-4 text-[#88D900] shrink-0" />

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-xs sm:text-sm text-white uppercase tracking-wider">
                    {step.title}
                  </h3>
                </div>

                {/* Full Un-truncated Description */}
                <p className="text-xs text-gray-300 font-sans leading-relaxed pl-8 sm:pl-0 sm:text-right">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

