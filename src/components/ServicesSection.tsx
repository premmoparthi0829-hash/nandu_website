import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Palette, Smartphone, Megaphone, BookOpen, Video, Layout, X, CheckCircle } from 'lucide-react';
import { OrganicWave } from './OrganicWave';
import { SectionHeading } from './SectionHeading';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      desc: 'Logos, brand guidelines and visual identity designs.',
      icon: Palette,
      details: {
        headline: 'Crafting Iconic Visual Identity Systems',
        overview: 'We construct full brand guidelines, vector logos, typography hierarchies, and color token systems that command authority across digital and print.',
        deliverables: ['Vector Logo Guidelines', 'Typography & Color Tokens', 'Brand Usage Guideline PDF', 'Social Media Templates'],
        tools: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop'],
      },
    },
    {
      id: 'social-media',
      title: 'Social Media Design',
      desc: 'Engaging posts and campaigns that connect with your audience.',
      icon: Smartphone,
      details: {
        headline: 'High-Converting Digital Campaign Assets',
        overview: 'Designing carousel graphics, story templates, ad banners, and promotional visual posts tailored for Instagram, LinkedIn, and Twitter.',
        deliverables: ['Carousel Post Kits', 'Story Templates', 'Ad Creative Sets', 'Animated Motion Banners'],
        tools: ['Photoshop', 'Canva', 'Figma'],
      },
    },
    {
      id: 'advertising',
      title: 'Advertising Design',
      desc: 'High-converting ads for digital platforms and print.',
      icon: Megaphone,
      details: {
        headline: 'Data-Driven Advertising Visuals',
        overview: 'Creating performance marketing banners, Google Display ads, print billboards, and promotional flyers optimized for maximum CTR.',
        deliverables: ['Google Display Banners', 'Print Flyers & Posters', 'Billboard Collaterals', 'Ad Variant Tests'],
        tools: ['Illustrator', 'Photoshop', 'Firefly AI'],
      },
    },
    {
      id: 'print-design',
      title: 'Print Design',
      desc: 'Brochures, flyers, banners, and other print materials.',
      icon: BookOpen,
      details: {
        headline: 'Tactile Print & Packaging Collaterals',
        overview: 'Designing CMYK print-ready corporate brochures, product packaging boxes, food pouches, and trade show banners with exact bleed specifications.',
        deliverables: ['Corporate Brochure (16+ pages)', 'Packaging Box Dielines', 'Trade Show Banners', 'Business Card Sets'],
        tools: ['InDesign', 'Illustrator', 'Photoshop'],
      },
    },
    {
      id: 'motion-design',
      title: 'Video & Motion Design',
      desc: 'Reel videos, promo videos and motion graphics.',
      icon: Video,
      details: {
        headline: 'Dynamic Motion Reels & Generative AI Video',
        overview: 'Bringing brand visual assets to life through Sora motion video prompts, animated logo reveals, and high-impact reel transitions.',
        deliverables: ['Animated Logo Reveal', 'Instagram Reel Videos', 'Promo Campaign Trailer', 'GIF Micro-interactions'],
        tools: ['Sora AI', 'After Effects', 'Premiere Pro'],
      },
    },
    {
      id: 'web-design',
      title: 'UI/UX & Web Design',
      desc: 'Modern, user-friendly designs for websites and apps.',
      icon: Layout,
      details: {
        headline: 'Apple & Linear Grade Web & App Interfaces',
        overview: 'Crafting responsive design component libraries, dark/light mode UI screens, interactive web prototypes, and mobile app layouts.',
        deliverables: ['Figma Design Component Library', 'Responsive Mobile & Desktop Screens', 'Interactive Prototypes', 'Developer Handoff Tokens'],
        tools: ['Figma', 'Framer', 'Tailwind CSS'],
      },
    },
  ];

  return (
    <section id="services" className="relative bg-mint-theme text-white overflow-hidden">
      
      {/* Top Wave Divider from Cream */}
      <OrganicWave fillColor="#FFF9ED" flipY={true} />

      <div className="py-20 px-4 sm:px-12 max-w-7xl mx-auto z-10 relative">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <SectionHeading
            overline="WHAT I DO"
            title="SERVICES I"
            script="Provide"
            align="center"
            variant="dark"
          />
        </div>

        {/* 6 White Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="group p-6 rounded-3xl bg-white text-gray-900 shadow-2xl hover:bg-[#FFF9ED] transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-emerald-100 text-[#2D6A4F] w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-gray-900 mb-3 group-hover:text-[#2D6A4F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6 font-semibold">
                    {service.desc}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center group-hover:bg-[#2D6A4F] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto text-gray-900"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-5 sm:p-8 bg-white dark:bg-[#121620] border border-emerald-100 shadow-2xl relative my-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:text-[#52B788]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-100 text-[#2D6A4F]">
                  {React.createElement(selectedService.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-heading font-extrabold uppercase text-[#2D6A4F] tracking-wider block">
                    Service Scope
                  </span>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-gray-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedService.details.overview}
              </p>

              <div className="space-y-4 border-t border-b border-gray-100 dark:border-gray-800 py-4 mb-6">
                <h4 className="font-heading font-extrabold text-xs uppercase text-gray-900 dark:text-white tracking-wider">
                  Deliverables Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.details.deliverables.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-xs font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {selectedService.details.tools.map((t: string) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-emerald-100 text-[#2D6A4F] text-[11px] font-bold">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-full mint-btn-dark text-white font-heading font-bold text-xs uppercase text-center"
                >
                  Request Service ↗
                </a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Wave Divider back into Cream */}
      <OrganicWave fillColor="#FFF9ED" />

    </section>
  );
};
