import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, ArrowDown } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const experiences = [
    {
      year: '2026',
      company: 'All Hands Global',
      role: 'Lead Brand & Visual Strategist',
      location: 'Hyderabad / Global Remote',
      desc: 'Steering end-to-end brand identities, creative direction, and digital asset architecture for global client campaigns.',
      achievements: ['Redesigned flagship brand identity increasing client engagement by 40%', 'Pioneered Generative AI asset pipelines for global social launches'],
    },
    {
      year: '2024',
      company: 'Freyr Energy',
      role: 'Senior Visual Graphic Designer',
      location: 'Hyderabad, India',
      desc: 'Spearheaded renewable energy brand collateral, interactive UI kits, digital pitch decks, and high-impact marketing visuals.',
      achievements: ['Built standardized 120+ asset design system for clean energy campaigns', 'Designed high-converting executive pitch decks for Series B investors'],
    },
    {
      year: '2024',
      company: 'Mantra Technologies',
      role: 'Creative UI/UX & Brand Specialist',
      location: 'Hyderabad, India',
      desc: 'Designed sleek enterprise SaaS interfaces, dark mode web portals, vector iconography, and marketing visual identities.',
      achievements: ['Transformed complex tech products into intuitive, Apple-grade visual experiences', 'Authored component libraries in Figma and Illustrator'],
    },
    {
      year: '2022',
      company: 'Sharplogiec',
      role: 'Graphic Designer & Brand Associate',
      location: 'Hyderabad, India',
      desc: 'Initiated professional graphic design career creating custom vector logos, social media visual branding, print layouts, and digital ads.',
      achievements: ['Delivered 50+ client brand projects with 100% satisfaction score', 'Mastered advanced Photoshop manipulation and vector typography'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-semibold text-xs uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-primary-light dark:text-primary-dark">
            Experience <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark text-sm sm:text-base max-w-xl mt-3">
            4.5+ years of driving creative strategy across high-growth startups and tech enterprises.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-dashed border-accent/40 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-12">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Year Pill (Positioned to the left on Desktop) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 flex items-center gap-2 mb-2 sm:mb-0">
                <span className="px-3.5 py-1 rounded-full accent-gradient-bg text-white font-mono font-bold text-xs shadow-md">
                  {item.year}
                </span>
              </div>

              {/* Glowing Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-accent border-4 border-white dark:border-gray-900 shadow-md group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 rounded-3xl glass-panel-light dark:glass-panel-dark border border-gray-200/80 dark:border-gray-800/80 hover:border-accent/60 shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-bold text-xl text-primary-light dark:text-primary-dark group-hover:text-accent transition-colors">
                    {item.company}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-mono text-secondary-light dark:text-secondary-dark">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-accent mb-4">
                  {item.role}
                </h4>

                <p className="text-xs sm:text-sm text-secondary-light dark:text-secondary-dark mb-4 leading-relaxed">
                  {item.desc}
                </p>

                {/* Achievements List */}
                <div className="space-y-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-primary-light dark:text-primary-dark">
                      <span className="text-accent font-bold">↓</span>
                      <span>{ach}</span>
                    </div>
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
