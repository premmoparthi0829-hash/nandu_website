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
    <section id="process" className="py-10 sm:py-16 px-4 sm:px-8 bg-[#090909] text-white border-t border-white/5 font-sans">
      <div className="max-w-2xl mx-auto">
        
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
