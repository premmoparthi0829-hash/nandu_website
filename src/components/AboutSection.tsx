import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Palette, Sliders, Clock, Smile } from 'lucide-react';
import aboutImg from '../assets/nandini_bw.png';
import { SectionHeading } from './SectionHeading';

export const AboutSection: React.FC = () => {
  const valueProps = [
    {
      title: 'Creative & Unique',
      desc: 'Designs that stand out',
      icon: Palette,
    },
    {
      title: 'Brand Focused',
      desc: 'Consistent and impactful',
      icon: Sliders,
    },
    {
      title: 'On-Time Delivery',
      desc: 'Committed to deadlines',
      icon: Clock,
    },
    {
      title: 'Client Satisfaction',
      desc: 'Quality that builds trust',
      icon: Smile,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-12 relative overflow-hidden bg-cream-theme">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: B&W Portrait Over Mint/Orange Arched Backdrop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-[300px] sm:w-[360px] h-[380px] sm:h-[460px] rounded-[44px] bg-[#52B788]/20 dark:bg-[#1E2430] border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden flex items-end justify-center group">
              
              {/* Mint & Coral Gradient Arched Backdrop Shape */}
              <div className="absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-[#2D6A4F] to-[#52B788] rounded-t-full -z-10" />

              {/* B&W Portrait */}
              <img
                src={aboutImg}
                alt="Nandini Vaddepalli"
                className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Stat Card (Bottom Left) */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md text-gray-900 border border-white shadow-xl flex items-center gap-3 z-20">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-[#2D6A4F]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans text-gray-500 uppercase tracking-wider block font-bold">
                    Experience
                  </span>
                  <span className="font-heading font-black text-xl text-[#1B4332] leading-none">
                    4.5+ <span className="text-xs font-normal text-gray-500">Years</span>
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Center Column: Text Content & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            {/* Poster-style editorial heading */}
            <div className="mb-6">
              <SectionHeading
                overline="ABOUT ME"
                title="TURNING IDEAS INTO"
                script="Visual Masterpieces"
                align="left"
                variant="light"
              />
            </div>

            {/* Paragraph */}
            <p className="font-sans text-sm text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-semibold">
              I'm a passionate Graphic Designer with 4.5 years of experience creating impactful designs for digital and print. I specialize in branding, social media creatives, advertising, and corporate communication that drives results.
            </p>

            {/* More About Me Button */}
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-[#1B4332] text-white font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-black transition-all flex items-center gap-2 shadow-md"
            >
              <span>More About Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Column: 4 Value Props Grid */}
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
                    <h4 className="font-heading font-extrabold text-sm text-[#1B4332] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
