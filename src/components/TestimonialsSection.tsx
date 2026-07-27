import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Sparkles, Building2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Nandini turned our raw fintech application into an award-winning visual masterpiece. Her attention to typography and glassmorphism UI is unmatched.",
      author: "Vikramaditya Rao",
      role: "VP of Product, Freyr Energy",
      company: "Freyr Energy",
      stars: 5,
    },
    {
      quote: "Working with Nandini was like having a senior Apple designer leading our brand team. Our brand equity valuation doubled after the new identity release.",
      author: "Sophia Chen",
      role: "Co-Founder, Lumina Paris",
      company: "Lumina Fragrances",
      stars: 5,
    },
    {
      quote: "Nandini's mastery of Adobe Illustrator and Generative AI workflows accelerated our global campaign launch by three weeks. Phenomenal talent!",
      author: "Rajesh Varma",
      role: "Head of Marketing, All Hands Global",
      company: "All Hands Global",
      stars: 5,
    },
    {
      quote: "Her design systems are clean, scalable, and extremely well-documented in Figma. Our engineering team integrated her components in record time.",
      author: "Ananya Reddy",
      role: "Lead Tech Architect, Mantra Tech",
      company: "Mantra Technologies",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-primary-light dark:text-primary-dark">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark text-sm sm:text-base max-w-xl mt-3">
            Floating review cards with auto-moving infinite marquee slider and glass effects.
          </p>
        </div>
      </div>

      {/* Auto-Moving Infinite Marquee */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 animate-marquee py-4">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[320px] sm:w-[420px] shrink-0 p-6 rounded-3xl glass-panel-light dark:glass-panel-dark border border-gray-200/80 dark:border-gray-800/80 hover:border-accent/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-accent/40" />
                </div>

                <p className="text-xs sm:text-sm text-secondary-light dark:text-secondary-dark italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-primary-light dark:text-primary-dark">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-accent font-semibold">
                    {item.role}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-[10px] font-mono text-secondary-light dark:text-secondary-dark">
                  {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
