import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#090909] text-white relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12"
      >
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            CLIENT <span className="text-[#88D900]">TESTIMONIALS</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            Praise from product leaders, founders, and marketing executives who experienced Nandini's visual design leadership firsthand.
          </p>
        </div>
      </motion.div>

      {/* Infinite Marquee Slider — hidden scrollbar, mask fades edges */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-4 sm:gap-6 animate-marquee py-2 sm:py-4">
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
            <div
              key={index}
              className="w-[280px] min-[400px]:w-[320px] sm:w-[420px] shrink-0 luxury-card p-5 sm:p-6 flex flex-col justify-between hover:border-[#88D900]/50 transition-all"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#88D900] text-[#88D900]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#88D900]/40" />
                </div>

                <p className="font-body text-[11px] sm:text-sm text-[#9CA3AF] italic mb-4 sm:mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center gap-2 sm:gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#88D900]/30 shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-white">
                    {item.name}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] text-[#88D900] font-body block font-semibold">
                    {item.role} · {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
