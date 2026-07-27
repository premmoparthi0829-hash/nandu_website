import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, Linkedin, Instagram, Dribbble, Github } from 'lucide-react';
import { OrganicWave } from './OrganicWave';
import { SectionHeading } from './SectionHeading';

export const CreamyFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What design services do you offer?',
      answer: 'I specialize in Brand Identity, Social Media Creatives, Advertising Banners, Print & Packaging Dielines, Motion Reels, and Web UI/UX Design.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Brand identity packages typically take 1 to 2 weeks, while social media creative kits and advertising banners are delivered within 3 to 5 business days.',
    },
    {
      question: 'Do you handle print-ready file preparation?',
      answer: 'Yes! I prepare high-resolution CMYK print-ready files with exact bleed marks, vector dielines, and Pantone color specifications for print vendors.',
    },
    {
      question: 'Can I hire you for long-term contract or monthly retainer?',
      answer: 'Yes! I offer dedicated monthly design retainer packages for growing brands needing continuous social media graphics, ad variants, and corporate collaterals.',
    },
  ];

  return (
    <section id="faqs" className="relative bg-mint-theme text-white overflow-hidden">
      
      {/* Wave Divider from Cream */}
      <OrganicWave fillColor="#FFF9ED" flipY={true} />

      <div className="py-20 px-4 sm:px-12 max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Title & Description & Social Links (Image 5 Layout) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
            <SectionHeading
              overline="GOT QUESTIONS?"
              title="FREQUENTLY"
              script="Asked Questions"
              align="left"
              variant="dark"
            />

            <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-semibold max-w-md">
              Got questions about working together? Here is everything you need to know about my design process, deliverables, and timelines.
            </p>

            {/* Social Icons (Image 5 Layout) */}
            <div className="flex items-center gap-3 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#0077B5] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#EA4C89] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Dribbble className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Accordion Pills List (Image 5 Layout) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-3xl bg-white text-gray-900 shadow-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-black text-sm sm:text-base text-gray-900"
                  >
                    <span>{faq.question}</span>
                    <div className="w-9 h-9 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center shrink-0">
                      {isOpen ? <ArrowDown className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-600 font-semibold leading-relaxed border-t border-gray-100"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Wave Divider to Cream */}
      <OrganicWave fillColor="#FFF9ED" />

    </section>
  );
};
