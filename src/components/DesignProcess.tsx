import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Palette, Layers, SlidersHorizontal, PackageCheck, Sparkles } from 'lucide-react';

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
    description: 'Understanding client goals, target audience & brand strategy.',
    icon: FileSearch,
  },
  {
    number: '02',
    title: 'CONCEPT',
    description: 'Exploring visual directions, moodboards & typography.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'CREATE',
    description: 'Crafting bespoke logos, brand identity & packaging assets.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'REFINE',
    description: 'Polishing compositions, color profiles & client feedback.',
    icon: SlidersHorizontal,
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'Exporting print-ready master files & brand guidelines.',
    icon: PackageCheck,
  },
];

export const DesignProcess: React.FC = () => {
  return (
    <section id="process" className="py-14 sm:py-20 px-4 sm:px-8 bg-[#090909] text-white border-t border-white/5 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Simple Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREATIVE WORKFLOW</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white">
            MY WORKING <span className="text-[#88D900]">PROCESS</span>
          </h2>
        </div>

        {/* Clean & Simple Steps List */}
        <div className="space-y-3 sm:space-y-4">
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="flex items-center gap-3.5 sm:gap-6 p-3.5 sm:p-5 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#88D900]/40 transition-colors"
              >
                {/* Step Number */}
                <span className="font-mono font-black text-base sm:text-xl text-[#88D900] shrink-0">
                  {step.number}
                </span>

                {/* Clean Icon Box */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black text-[#88D900] flex items-center justify-center shrink-0 border border-white/10">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                </div>

                {/* Title & Description */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-0.5 sm:gap-4">
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-white uppercase tracking-wide shrink-0">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
