import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            DESIGN <span className="text-[#88D900]">EXPERIENCE</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            4.5+ years of driving creative visual strategy across agencies, clean tech enterprises, and global brands.
          </p>
        </div>

        {/* Vertical Timeline */}
        {/* On mobile: simple stacked cards. On sm+: left-border timeline with absolute date pills */}
        <div className="flex flex-col gap-6 sm:gap-10 relative sm:ml-28 sm:pl-10 sm:border-l-2 sm:border-dashed sm:border-[#88D900]/30">

          {EXPERIENCES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Duration Pill — stacked on mobile, absolute on sm+ */}
              <div className="mb-3 sm:mb-0 sm:absolute sm:-left-36 sm:top-2.5 flex">
                <span className="px-3 py-1 rounded-full bg-[#F472B6] text-black font-button font-extrabold text-[10px] sm:text-xs shadow-[0_0_15px_rgba(244,114,182,0.3)] uppercase">
                  {item.duration}
                </span>
              </div>

              {/* Neon Node Marker — only visible on sm+ */}
              <div className="hidden sm:block absolute -left-[47px] top-2.5 w-5 h-5 rounded-full bg-[#88D900] border-4 border-[#090909] shadow-[0_0_15px_#88D900] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="luxury-card p-5 sm:p-8 hover:border-[#88D900]/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1 sm:mb-2">
                  <h3 className="font-heading font-bold text-lg sm:text-2xl text-white group-hover:text-[#88D900] transition-colors">
                    {item.company}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#9CA3AF] shrink-0">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#88D900]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-heading font-bold text-[#88D900] mb-3 sm:mb-4">
                  {item.role}
                </h4>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] sm:text-sm text-[#9CA3AF]">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900] shrink-0 mt-0.5" />
                      <span className="font-body leading-relaxed text-white/90">{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 sm:px-3 py-1 rounded-full bg-[#090909] border border-[#88D900]/30 text-[#88D900] text-[9px] sm:text-xs font-mono font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
