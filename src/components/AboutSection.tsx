import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, FileText, Smartphone, Layers,
  CheckCircle2, X, MapPin, Briefcase, Palette, Figma, ChevronLeft, ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import gallery1 from '../assets/gallery_1.jpg';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.jpg';
import gallery5 from '../assets/gallery_5.jpg';
import gallery6 from '../assets/gallery_6.png';
import gallery7 from '../assets/gallery_7.png';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const galleryImages = [
    { src: gallery1, title: 'Creative Workstation Portrait', borderColor: '#88D900' },
    { src: gallery7, title: 'Designer Dual-Monitor Workstation', borderColor: '#88D900' },
    { src: gallery3, title: 'Picking Flowers Outdoor Aesthetic', borderColor: '#88D900' },
    { src: gallery5, title: 'Ultra HD Floral Portrait', borderColor: '#F59E0B' },
    { src: gallery6, title: 'Ocean Waves Beach Walk', borderColor: '#00A4E4' },
    { src: gallery2, title: 'Sunset Beach Portrait', borderColor: '#F472B6' },
  ];

  const currentImage = galleryImages[activePhoto];
  const nextPhotoIndex = (activePhoto + 1) % galleryImages.length;
  const nextImage = galleryImages[nextPhotoIndex];

  // Auto-play gallery images with smooth card moving animation
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActivePhoto((prev) => (prev + 1) % galleryImages.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const handleNextPhoto = () => {
    setDirection(1);
    setActivePhoto((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevPhoto = () => {
    setDirection(-1);
    setActivePhoto((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const roles = [
    { title: 'Brand Identity Design', desc: 'Crafting iconic logos, visual guidelines, and vector color systems.', icon: Palette },
    { title: 'Print & Packaging', desc: 'CMYK print brochures, box dielines, pouches, and trade show collaterals.', icon: Layers },
    { title: 'Social Media & Ads', desc: 'High-converting ad campaign graphics, carousels, and promotional banners.', icon: Smartphone },
    { title: 'UI/UX Design', desc: 'Modern luxury Figma component libraries, wireframes, and design systems.', icon: Figma },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Nandini</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            Visual Storyteller & <span className="text-[#88D900]">Brand Strategist</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-sm sm:text-base max-w-2xl text-center leading-relaxed">
            Combining strategic thinking with bold artistic vision to shape brands that make a lasting impression.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Interactive 3D Card Stack Carousel with Moving Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center py-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[440px] sm:h-[500px] group">

              {/* 2ND BACKGROUND CARD (Displays NEXT IMAGE sticking out behind main card) */}
              <motion.div
                key={`bg-${nextPhotoIndex}`}
                initial={{ scale: 0.9, rotate: -10, opacity: 0 }}
                animate={{ scale: 0.95, rotate: -6, opacity: 0.85 }}
                transition={{ duration: 0.5 }}
                style={{ borderColor: `${nextImage.borderColor}AA` }}
                className="absolute inset-0 rounded-[28px] bg-[#151515] border-2 shadow-2xl overflow-hidden pointer-events-none"
              >
                <img
                  src={nextImage.src}
                  alt={nextImage.title}
                  className="w-full h-full object-cover object-[center_15%] opacity-75 filter saturate-90 brightness-90"
                />
              </motion.div>

              {/* ACTIVE FRONT IMAGE CARD (Lifts up -45px and tucks behind stack, while background card steps forward) */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activePhoto}
                  custom={direction}
                  initial={(dir: number) => ({
                    x: 0,
                    y: dir > 0 ? 12 : -45,
                    scale: dir > 0 ? 0.95 : 1.02,
                    rotate: dir > 0 ? -6 : 0,
                    opacity: 0.85,
                    zIndex: 10,
                  })}
                  animate={{
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 2,
                    opacity: 1,
                    zIndex: 20,
                    transition: {
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  }}
                  exit={(dir: number) => ({
                    x: 0,
                    y: dir > 0 ? [-10, -45, 12] : 12,
                    scale: dir > 0 ? [1, 1.02, 0.94] : 0.94,
                    rotate: dir > 0 ? [2, 0, -6] : -6,
                    opacity: [1, 0.9, 0],
                    zIndex: 5,
                    transition: {
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  })}
                  style={{ borderColor: `${currentImage.borderColor}CC` }}
                  className="absolute inset-0 rounded-[28px] bg-[#151515] border-2 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-full object-cover object-[center_15%] rounded-[26px] shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

                {/* Left / Right Carousel Control Arrows */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#88D900] border border-white/20 flex items-center justify-center transition-all z-30 backdrop-blur-md shadow-xl hover:scale-110 active:scale-95"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#88D900] border border-white/20 flex items-center justify-center transition-all z-30 backdrop-blur-md shadow-xl hover:scale-110 active:scale-95"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Thumbnail Dots Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-30 pointer-events-auto">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > activePhoto ? 1 : -1);
                        setActivePhoto(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activePhoto === idx
                          ? 'w-6 bg-[#88D900] shadow-[0_0_10px_#88D900]'
                          : 'w-2 bg-white/40 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

            </div>
          </motion.div>

          {/* Right Column: Bio & Core Roles Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-white mb-4 leading-snug">
              Passionate about designing meaningful visual brand stories that engage people and leave a lasting mark.
            </h3>

            <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed">
              With 4.5+ years of experience steering brand direction, packaging dielines, digital campaign graphics, and UI design systems, I help companies build memorable identity systems that drive growth and command market authority.
            </p>

            {/* 4 Roles Grid — staggered entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-6 sm:mb-8">
              {roles.map((r, idx) => {
                const IconComp = r.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.08, duration: 0.5 }}
                    className="luxury-card p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:border-[#88D900]/50 transition-all"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#090909] border border-[#88D900]/30 text-[#88D900] flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-white mb-1">
                        {r.title}
                      </h4>
                      <p className="font-body text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenResume}
                className="btn-neon bg-[#88D900] text-black hover:bg-[#9EF01A] font-button text-xs uppercase tracking-wider font-extrabold flex-1 sm:flex-initial justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-neon-outline font-button text-xs uppercase tracking-wider flex-1 sm:flex-initial justify-center"
              >
                <span>Read Full Biography</span>
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Biography Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#151515] border border-[#88D900]/40 rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 text-white max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-[#090909] text-white hover:text-[#88D900]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#88D900]/10 text-[#88D900] text-xs font-bold mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>BIOGRAPHY &amp; DESIGN PHILOSOPHY</span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-[#88D900]">
                About Nandini Vaddepalli
              </h3>

              <div className="space-y-4 font-body text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                <p>
                  Nandini Vaddepalli is a Senior Graphic Designer and Brand Specialist based in Hyderabad with 4.5+ years of experience delivering high-converting brand identity systems, CMYK print packaging, and modern UI design components.
                </p>
                <p>
                  Her core toolkit includes Adobe Photoshop manipulation, Adobe Illustrator vector logo design, Figma UI systems, Adobe InDesign layout grids, and Canva Pro digital marketing suites.
                </p>
                <div className="p-4 rounded-2xl bg-[#090909] border border-white/10 space-y-2">
                  <span className="font-heading font-bold text-xs text-white uppercase block">
                    Core Design Pillars:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Brand Identity Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Print &amp; Packaging Dielines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Performance Ad Campaigns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#88D900]" />
                      <span>Figma Component Kits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={onOpenResume}
                  className="btn-neon bg-[#88D900] text-black font-extrabold text-xs uppercase"
                >
                  Download CV ↗
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
