import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Palette, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types/app';
import freyrImg from '../assets/project_freyr.png';
import solarImg from '../assets/project_solar.png';
import milkImg from '../assets/project_milk.png';

interface CreamyMenuProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const CreamyMenu: React.FC<CreamyMenuProps> = ({ onOpenInquiry }) => {
  const serviceCards: (ServiceItem & { image: string })[] = [
    {
      id: 'brand-identity-system',
      title: 'Brand Identity Systems',
      category: 'Visual Identity',
      statBadge: '4.5+ Yrs',
      badgeBg: 'bg-[#52B788]',
      description: 'Logo design, vector style guidelines, color palettes, and corporate brand books.',
      deliverables: ['Vector Logo Guidelines', 'Color & Typography Tokens', 'Brand Usage PDF'],
      image: freyrImg,
    },
    {
      id: 'social-ad-creatives',
      title: 'Social & Ad Creatives',
      category: 'Digital Campaigns',
      statBadge: '100+ Ads',
      badgeBg: 'bg-[#EE4D2D]',
      description: 'High-converting carousel graphics, Instagram story sets, and performance ad banners.',
      deliverables: ['Carousel Post Kits', 'Ad Banner Variants', 'Motion Reels'],
      image: solarImg,
    },
    {
      id: 'print-packaging',
      title: 'Print & Packaging Dielines',
      category: 'Print Media',
      statBadge: '50+ Prints',
      badgeBg: 'bg-[#C87D43]',
      description: 'CMYK print-ready product packaging boxes, food pouches, and trade show banners.',
      deliverables: ['Box Packaging Dielines', 'Brochures & Flyers', 'Print Bleed Specs'],
      image: milkImg,
    },
  ];

  return (
    <section id="services-showcase" className="py-24 px-4 sm:px-12 relative bg-cream-theme">
      <div className="max-w-7xl mx-auto">

        {/* Section Header (Matching Image 4 Layout) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#2D6A4F] mb-2 block">
              MY CREATIVE SERVICES
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-5xl text-[#1B4332] dark:text-white">
              Explore My <span className="text-[#52B788] underline decoration-[#52B788]/40 decoration-wavy underline-offset-8">Creative Solutions</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md font-semibold">
            Tailored graphic design and visual brand solutions crafted to elevate your business and drive customer engagement.
          </p>
        </div>

        {/* 3 Creative Service Cards Grid (Matching Image 4 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative rounded-[36px] bg-white dark:bg-[#121620] border border-emerald-100 dark:border-gray-800 shadow-soft-card p-6 pt-16 flex flex-col justify-between"
            >
              {/* 3D Badge Popping Over Card Top (Image 4 Layout) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className={`w-full h-full ${card.badgeBg} p-2 flex items-center justify-center`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                  />
                </div>
              </div>

              {/* Card Body Content */}
              <div className="text-center mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-[#2D6A4F] font-heading font-black text-xs uppercase tracking-wider mb-2">
                  {card.statBadge}
                </span>

                <h3 className="font-heading font-black text-xl text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Deliverable Checkmarks */}
                <div className="space-y-1.5 text-left mb-6 border-t border-b border-gray-100 dark:border-gray-800 py-3">
                  {card.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire Service CTA Button */}
              <button
                onClick={() => onOpenInquiry(card.title)}
                className="w-full py-3.5 rounded-full bg-black text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg hover:bg-[#2D6A4F] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Inquire Service</span>
              </button>

            </motion.div>
          ))}
        </div>

        {/* Carousel Control Buttons (Image 4 Layout) */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button className="p-3 rounded-full bg-white text-gray-800 shadow-md hover:bg-[#1B4332] hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full bg-white text-gray-800 shadow-md hover:bg-[#1B4332] hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
