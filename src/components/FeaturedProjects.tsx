import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, X, CheckCircle } from 'lucide-react';
import { MockupFrame } from './MockupFrame';
import { CreamyShowcase } from './CreamyShowcase';
import freyrImg from '../assets/project_freyr.png';
import solarImg from '../assets/project_solar.png';
import milkImg from '../assets/project_milk.png';
import { SectionHeading } from './SectionHeading';

export const FeaturedProjects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);

  const projects = [
    {
      id: 'freyr-energy',
      title: 'Freyr Energy Brand Identity',
      client: 'Freyr Energy',
      category: 'Branding',
      previewImg: freyrImg,
      badge: 'Branding',
      bgClass: 'bg-gradient-to-br from-[#D89B48] to-[#B37829]',
      summary: 'Complete brand identity guidelines, stationary design, and corporate collaterals for a leading solar energy company.',
      caseStudy: {
        challenge: 'Freyr Energy needed a unified visual brand system to represent their renewable clean energy solutions.',
        solution: 'Nandini created a clean yellow-gold visual identity, complete with brand style guidelines, mugs, and corporate letterheads.',
        deliverables: ['Logo & Brand Guidelines', 'Stationary Mockups', 'Investor Pitch Decks', 'Print Media Collaterals'],
      },
    },
    {
      id: 'solar-campaign',
      title: 'Solar Energy Campaign',
      client: 'Clean Tech Global',
      category: 'Social Media Design',
      previewImg: solarImg,
      badge: 'Social Media Design',
      bgClass: 'bg-gradient-to-br from-[#0B62A4] to-[#053D69]',
      summary: 'High-converting mobile app interface and social media advertising campaign graphics.',
      caseStudy: {
        challenge: 'Boost app downloads and user engagement across digital advertising channels.',
        solution: 'Designed ocean-blue digital campaign graphics alongside intuitive mobile app screens in Figma.',
        deliverables: ['Mobile App UI Design', '30+ Social Media Posts', 'Digital Banner Ads', 'App Store Renders'],
      },
    },
    {
      id: 'milk-packaging',
      title: 'Milk Product Packaging',
      client: 'Daily Fresh Dairy',
      category: 'Packaging Design',
      previewImg: milkImg,
      badge: 'Packaging Design',
      bgClass: 'bg-gradient-to-br from-[#9D84B7] to-[#715491]',
      summary: 'Delightful milk pouch packaging design featuring custom cartoon cow illustrations.',
      caseStudy: {
        challenge: 'Create a friendly, trustworthy dairy packaging brand identity that appeals to families.',
        solution: 'Nandini illustrated the cute Daily Fresh mascot and clean pastel purple packaging pouch layout.',
        deliverables: ['Pouch Packaging Renders', 'Character Illustration', 'Point-of-Sale Posters', 'Print Files'],
      },
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-12 relative bg-cream-theme">
      <div className="max-w-7xl mx-auto">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
          <div>
            <SectionHeading
            overline="MY WORK & SHOWCASE"
            title="FEATURED"
            script="Projects"
            align="left"
            variant="light"
          />
          </div>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[#1B4332] text-white font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-black transition-all flex items-center gap-2 shadow-md"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* FLAGSHIP DRIBBBLE/FRAMER MOCKUP CANVAS SHOWCASE */}
        <div className="mb-16">
          <MockupFrame
            tags={['Tutorial', 'Figma', 'Motion', 'Web Design']}
            author="@nandini.design"
            bgColor="bg-[#52B788]"
          >
            <CreamyShowcase />
          </MockupFrame>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group rounded-[32px] overflow-hidden bg-white dark:bg-[#121620] border border-emerald-100 dark:border-gray-800 shadow-soft-card flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedCaseStudy(project)}
            >
              {/* Card Image Area with Custom Color Tone Background */}
              <div className={`relative h-[300px] sm:h-[340px] overflow-hidden p-6 flex flex-col justify-between ${project.bgClass}`}>
                {/* Overlay Text Header */}
                <div className="z-10 flex items-start justify-between">
                  <h3 className="font-heading font-black text-xl text-white max-w-[200px] drop-shadow-md">
                    {project.title}
                  </h3>
                </div>

                {/* Main Product Screenshot */}
                <img
                  src={project.previewImg}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                />

                {/* Bottom Pill Badge */}
                <div className="z-10 self-start">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-gray-900 font-heading font-extrabold text-[11px] shadow-md">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-black text-base text-[#1B4332] dark:text-white group-hover:text-[#52B788] transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-semibold">
                    {project.client}
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center group-hover:bg-[#2D6A4F] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#121620] border border-emerald-100 shadow-2xl relative my-auto"
            >
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:text-[#52B788]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#2D6A4F] uppercase tracking-widest mb-2 font-extrabold">
                <span>Case Study</span>
              </div>

              <h3 className="font-heading font-black text-3xl text-gray-900 dark:text-white mb-4">
                {selectedCaseStudy.title}
              </h3>

              <div className="space-y-6 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <h4 className="font-heading font-extrabold text-gray-900 dark:text-white text-base mb-2">
                    The Challenge
                  </h4>
                  <p className="leading-relaxed font-semibold">{selectedCaseStudy.caseStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="font-heading font-extrabold text-gray-900 dark:text-white text-base mb-2">
                    The Design Solution
                  </h4>
                  <p className="leading-relaxed font-semibold">{selectedCaseStudy.caseStudy.solution}</p>
                </div>

                <div>
                  <h4 className="font-heading font-extrabold text-gray-900 dark:text-white text-base mb-2">
                    Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCaseStudy.caseStudy.deliverables.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-xs font-semibold">
                        <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-6 py-2.5 rounded-full mint-btn-dark text-white font-heading font-extrabold text-xs uppercase"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
