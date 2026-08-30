import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, FileText, Smartphone, Layers,
  CheckCircle2, X, MapPin, Briefcase, Palette, Figma, ChevronLeft, ChevronRight,
  Plane, Utensils, Film, PenTool, Package, Printer, Layout, MessageSquareQuote, ArrowRight,
  Play, Pause, Volume2, VolumeX
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import gallery1 from '../assets/gallery_1.jpg';
import gallery2 from '../assets/gallery_2.png';
import gallery3 from '../assets/gallery_3.jpg';
import gallery5 from '../assets/gallery_5.jpg';
import gallery6 from '../assets/gallery_6.png';
import gallery7 from '../assets/gallery_7.png';
import designerPortrait from '../assets/designer_portrait.png';
import nandiniNightPortrait from '../assets/nandini_night_portrait.jpg';
import moonlightBg from '../assets/moonlight_biography_bg.jpg';
import oceanWavesVideo from '../assets/real_ocean_waves.mp4';
import nature1Video from '../assets/nature1.mp4';

interface AboutSectionProps {
  onOpenResume: () => void;
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', decimals = 0, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // Decelerating cubic easing for realistic loading count up
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// Reusable Box-Free Plain Text Typing Animation Component (Continuous Endless Loop with Light Pink Accent)
const PlainTextTyping: React.FC<{ text: string; className?: string }> = ({ text, className = "text-[#F472B6]" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < text.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, 55);
    } else if (!isDeleting && displayedText.length === text.length) {
      // Pause at full sentence before backspacing
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText.length > 0) {
      // Backspacing / erasing
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length - 1));
      }, 30);
    } else if (isDeleting && displayedText.length === 0) {
      // Pause briefly before re-typing again
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text]);

  return (
    <div className="inline-flex items-center gap-2 font-heading font-black text-xs sm:text-sm uppercase tracking-widest cursor-default">
      <Sparkles className="w-4 h-4 text-[#F472B6] shrink-0 animate-pulse" />
      <span className={`${className} drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]`}>
        {displayedText}
      </span>
      <span className="w-1.5 h-4 bg-[#F472B6] shadow-[0_0_8px_#F472B6] inline-block align-middle animate-ping" />
    </div>
  );
};

// Reusable Native 8K Crisp Vector Banner Component
const NativeCreativeBanner: React.FC = () => {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-[#021430] via-[#0047BA] to-[#010D20] border border-blue-400/30 shadow-[0_25px_60px_rgba(0,71,186,0.35)] p-6 sm:p-10 lg:p-12 text-white group">
      {/* Background Stylized Light Sheen & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column (Logo, Title, Services Badges, Action CTA) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Logo Badge Header */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/25 backdrop-blur-md flex items-center justify-center font-heading font-black text-xl text-white shadow-xl">
              NV
            </div>
            <div>
              <div className="font-heading font-black text-sm tracking-wider uppercase text-white">NANDINI VADDEPALLI</div>
              <div className="font-body text-xs text-blue-200 font-medium">Creative Graphic Designer & Visual Brand Specialist</div>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-1.5">
            <div className="font-heading font-bold text-sm sm:text-base italic text-blue-200">I'm a</div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none drop-shadow-lg">
              CREATIVE <span className="block text-slate-950 font-black drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)]">DESIGNER</span>
            </h2>
            <div className="font-heading font-bold text-xl sm:text-3xl text-blue-200 italic">
              & Brand Specialist
            </div>
          </div>

          {/* 4 Service Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center hover:bg-white/20 transition-all cursor-default">
              <PenTool className="w-5 h-5 text-blue-200 mb-1.5" />
              <span className="font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">BRANDING</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center hover:bg-white/20 transition-all cursor-default">
              <Package className="w-5 h-5 text-blue-200 mb-1.5" />
              <span className="font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">PACKAGING</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center hover:bg-white/20 transition-all cursor-default">
              <Printer className="w-5 h-5 text-blue-200 mb-1.5" />
              <span className="font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">PRINT DESIGN</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md text-center hover:bg-white/20 transition-all cursor-default">
              <Layout className="w-5 h-5 text-blue-200 mb-1.5" />
              <span className="font-heading font-extrabold text-[10px] sm:text-xs uppercase tracking-wider">UI/UX DESIGN</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white border border-white/20 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:bg-blue-600 transition-all cursor-default group/btn">
              <span>LET'S CREATE SOMETHING MEANINGFUL</span>
              <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white group-hover/btn:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Glassmorphic Quote Bubbles & Signature) */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-5 rounded-2xl bg-blue-600/80 border border-blue-300/40 backdrop-blur-md shadow-xl text-white space-y-1"
          >
            <MessageSquareQuote className="w-5 h-5 text-blue-100 opacity-90" />
            <p className="font-heading font-bold text-xs sm:text-sm leading-relaxed">"Every great design starts with a great conversation."</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-white/25 backdrop-blur-md shadow-xl text-white space-y-1 ml-3 sm:ml-6"
          >
            <MessageSquareQuote className="w-5 h-5 text-[#88D900] opacity-90" />
            <p className="font-heading font-bold text-xs sm:text-sm leading-relaxed text-[#88D900]">"You dream it. I'll design it."</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 sm:p-5 rounded-2xl bg-blue-500/90 border border-white/30 backdrop-blur-md shadow-xl text-white space-y-1"
          >
            <MessageSquareQuote className="w-5 h-5 text-white opacity-90" />
            <p className="font-heading font-bold text-xs sm:text-sm leading-relaxed">"Let's create something extraordinary together."</p>
          </motion.div>

          {/* Signature Badge */}
          <div className="pt-3 text-right">
            <div className="inline-block font-heading font-extrabold text-xl italic text-[#F472B6]">Nandini ♡</div>
            <div className="font-heading font-black text-[10px] uppercase tracking-widest text-blue-200">CREATIVE MINDS BUILD ICONIC BRANDS.</div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Interactive 2.43:1 Ratio Nature Video Banner Component with Autoplay on Screen Enter & Audio
const InteractiveNatureVideoBanner: React.FC<{ videoSrc: string }> = ({ videoSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [needUserInteraction, setNeedUserInteraction] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.muted = false;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                  setIsMuted(false);
                  setNeedUserInteraction(false);
                })
                .catch(() => {
                  // Browser policy fallback if unmuted autoplay is blocked prior to user interaction
                  if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play();
                    setIsMuted(true);
                    setNeedUserInteraction(true);
                  }
                });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play();
        setIsPlaying(true);
      }
      setNeedUserInteraction(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[2.43/1] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/20 group bg-black"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        src={videoSrc}
        className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out contrast-[1.05] saturate-[1.05] filter brightness-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Tap for Sound Prompt if Browser Blocked Unmuted Autoplay */}
      {needUserInteraction && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-30 px-4 py-2 rounded-full bg-[#F472B6] text-black font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(244,114,182,0.8)] animate-bounce cursor-pointer flex items-center gap-2"
        >
          <Volume2 className="w-4 h-4 text-black animate-pulse" />
          <span>Tap to Enable Audio 🔊</span>
        </button>
      )}

      {/* Interactive Video Control Overlay Buttons */}
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex items-center gap-2 z-20">
        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/80 border border-white/20 hover:border-[#F472B6] text-white hover:text-[#F472B6] font-heading font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all shadow-xl cursor-pointer"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F472B6]" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900]" />}
          <span className="hidden sm:inline">{isPlaying ? "Pause" : "Play"}</span>
        </button>

        {/* Mute / Unmute Audio Button */}
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/80 border border-white/20 hover:border-[#F472B6] text-white hover:text-[#F472B6] font-heading font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all shadow-xl cursor-pointer"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F472B6] animate-pulse" />}
          <span>{isMuted ? "Unmute" : "Sound On"}</span>
        </button>
      </div>
    </div>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const galleryImages = [
    { src: nandiniNightPortrait, title: 'Visual Storyteller Night Portrait', borderColor: '#F472B6' },
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
          <div className="mb-3 sm:mb-4">
            <PlainTextTyping text="ABOUT NANDINI VADDEPALLI" />
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

          {/* Left Column: Interactive 3D Card Stack Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center py-2"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[440px] sm:h-[500px] group">

              {/* 2nd Card in 3D Stack (Background layer tilted -6deg) */}
              <motion.div
                key={`bg-${nextPhotoIndex}`}
                initial={{ scale: 0.9, rotate: -10, opacity: 0 }}
                animate={{ scale: 0.95, rotate: -6, opacity: 0.85 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-[28px] bg-[#121212] border border-white/10 shadow-xl overflow-hidden pointer-events-none"
              >
                <img
                  src={nextImage.src}
                  alt={nextImage.title}
                  className="w-full h-full object-cover object-[center_15%] opacity-70 filter saturate-90"
                />
              </motion.div>

              {/* Active Front Card (3D Deck Shuffle: Lifts up -45px, rotates into place at +2deg) */}
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
                  className="absolute inset-0 rounded-[28px] bg-[#151515] border border-white/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] group-hover:rotate-0 transition-transform duration-500 flex flex-col justify-between"
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-full object-cover object-[center_15%] rounded-[26px] shadow-2xl"
                    style={{
                      imageRendering: 'auto',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left / Right Carousel Control Arrows */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#88D900] text-white hover:text-black border border-white/20 hover:border-[#88D900] flex items-center justify-center transition-all z-30 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#88D900] text-white hover:text-black border border-white/20 hover:border-[#88D900] flex items-center justify-center transition-all z-30 backdrop-blur-md shadow-2xl hover:scale-110 active:scale-95 cursor-pointer"
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
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
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

            {/* 4 Roles Grid — staggered entrance & interactive hover micro-animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-6 sm:mb-8">
              {roles.map((r, idx) => {
                const IconComp = r.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + idx * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      hover: { duration: 0.2, ease: 'easeOut' }
                    }}
                    className="luxury-card p-4 sm:p-5 flex items-start gap-3 sm:gap-4 border border-white/10 hover:border-[#88D900]/60 hover:shadow-[0_12px_28px_-6px_rgba(136,217,0,0.2)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                  >
                    {/* Subtle Light Sheen Sweep across Card on Cursor Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#88D900]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                    {/* Icon Badge with Glow & Micro-Rotation */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#090909] border border-[#88D900]/30 text-[#88D900] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#88D900] group-hover:text-black group-hover:border-[#88D900] group-hover:shadow-[0_0_15px_rgba(136,217,0,0.5)] transition-all duration-300">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-white mb-1 group-hover:text-[#88D900] transition-colors duration-300">
                        {r.title}
                      </h4>
                      <p className="font-body text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
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
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenResume}
                className="btn-neon bg-[#88D900] text-black hover:bg-[#9EF01A] font-button text-xs uppercase tracking-wider font-extrabold flex-1 sm:flex-initial justify-center shadow-[0_0_15px_rgba(136,217,0,0.3)] hover:shadow-[0_0_25px_rgba(136,217,0,0.6)] transition-all duration-300 group cursor-pointer"
              >
                <FileText className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:rotate-6 transition-transform duration-300" />
                <span>Download CV</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsModalOpen(true)}
                className="btn-pink bg-[#F472B6] text-black hover:bg-[#f583c1] font-button text-xs uppercase tracking-wider font-extrabold flex-1 sm:flex-initial justify-center shadow-[0_0_15px_rgba(244,114,182,0.3)] hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] transition-all duration-300 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300 text-black" />
                <span>Read Full Biography</span>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Full-Screen Interactive Biography Page Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 w-screen h-screen overflow-y-auto bg-[#09090b] font-sans scrollbar-thin selection:bg-[#88D900] selection:text-black"
          >
            {/* Ambient Background Radial Glow (High performance, 0 GPU lag) */}
            <div className="fixed inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(136,217,0,0.12),rgba(9,9,11,1))] pointer-events-none -z-10" />

            {/* Sticky Header Bar */}
            <div className="sticky top-0 z-40 w-full bg-black/90 border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-black/70 border border-[#88D900]/40 text-[#88D900] flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#88D900]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-xs sm:text-base text-white tracking-widest uppercase drop-shadow">
                    NANDINI VADDEPALLI
                  </h4>
                  <p className="font-body text-[10px] sm:text-xs text-cyan-300 font-medium drop-shadow">
                    Full Biography &amp; Brand Story Manifesto
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 border border-white/20 hover:border-[#88D900] text-white hover:text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
              >
                <span>Close Story</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Floating Text Content Layer with Motion Animations */}
            <div className="relative z-10 max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24 text-white">

              {/* 1. HERO COVER PHOTO & TEXT HEADER BELOW */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-8 text-left"
              >
                {/* Autoplay Full-Width 2.43:1 Nature Video Banner (nature1.mp4) */}
                <InteractiveNatureVideoBanner videoSrc={nature1Video} />

                {/* Text Content Placed Directly BELOW the Cover Photo Banner */}
                <div className="space-y-6 pt-2">
                  <PlainTextTyping text="THE STORY OF NANDINI VADDEPALLI" />

                  <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                    NANDINI <span className="text-[#88D900]">VADDEPALLI</span>
                  </h1>

                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <motion.span whileHover={{ scale: 1.05 }} className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-extrabold text-slate-100 backdrop-blur-sm shadow cursor-pointer hover:border-[#88D900]/50 transition-colors">Creative Graphic Designer</motion.span>
                    <motion.span whileHover={{ scale: 1.05 }} className="px-3.5 py-1.5 rounded-full bg-black/60 border border-[#88D900]/50 text-xs font-extrabold text-[#88D900] backdrop-blur-sm shadow cursor-pointer hover:border-[#F472B6]/50 transition-colors">Visual Brand Specialist</motion.span>
                    <motion.span whileHover={{ scale: 1.05 }} className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-extrabold text-slate-100 backdrop-blur-sm shadow cursor-pointer hover:border-[#88D900]/50 transition-colors">Brand Storyteller</motion.span>
                  </div>

                  <motion.blockquote 
                    whileHover={{ scale: 1.01 }}
                    className="p-5 sm:p-6 rounded-2xl bg-black/50 border-l-4 border-[#88D900] text-lg sm:text-2xl font-heading font-bold text-white italic mt-6 backdrop-blur-sm shadow-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-all"
                  >
                    "I don't just design visuals. I create stories, identities, and experiences that people remember."
                  </motion.blockquote>
                </div>
              </motion.div>

              {/* 2. MORE THAN A DESIGNER */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-8 bg-[#F472B6] rounded-full shadow-[0_0_12px_#F472B6]" />
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F472B6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    MORE THAN A DESIGNER
                  </h2>
                </div>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Hi, I'm <strong className="text-white font-extrabold">Nandini Vaddepalli</strong> — a Creative Graphic Designer and Visual Brand Specialist based in Hyderabad, India. With more than <strong className="text-[#88D900] font-extrabold">4.5+ years of hands-on experience</strong>, I have built my career around one simple belief: great design should not only look beautiful, it should communicate, connect, and create meaning.
                </p>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  My work lives at the intersection of creativity, strategy, and visual storytelling. From building complete brand identity systems to designing packaging, print campaigns, digital advertisements, and modern UI experiences, I enjoy transforming ideas into visual experiences that people can remember.
                </p>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Over the years, I have had the opportunity to work across multiple industries including lifestyle, FMCG, technology, SaaS, clean energy, and digital brands. Every project teaches me something new. Every challenge pushes me to think differently. And every design is an opportunity to create something meaningful.
                </p>

                {/* 4 Floating Stat Highlights with Animated Counter Loading Effects */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.08, y: -4 }} className="p-4 text-center cursor-default">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-[#88D900] block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                      <AnimatedCounter value={4.5} decimals={1} suffix="+" duration={2} />
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-1 block drop-shadow">Years Experience</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.08, y: -4 }} className="p-4 text-center cursor-default">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-[#88D900] block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                      <AnimatedCounter value={50} suffix="+" duration={2} />
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-1 block drop-shadow">Businesses</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.08, y: -4 }} className="p-4 text-center cursor-default">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-[#88D900] block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                      <AnimatedCounter value={100} suffix="+" duration={2.2} />
                    </span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-1 block drop-shadow">Projects</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.08, y: -4 }} className="p-4 text-center cursor-default">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-[#88D900] block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">ENDLESS</span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider mt-1 block drop-shadow">Creative Passion</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* 4. MY CREATIVE UNIVERSE */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-xs text-[#F472B6] uppercase tracking-widest drop-shadow">WHAT I LOVE TO CREATE</span>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-8 bg-[#F472B6] rounded-full shadow-[0_0_12px_#F472B6]" />
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F472B6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      MY CREATIVE UNIVERSE
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#88D900]/60 transition-all">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">BRAND IDENTITY</h3>
                    <p className="font-body text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Creating memorable visual systems that give brands personality, consistency, and a strong visual voice.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#88D900]/60 transition-all">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">PACKAGING DESIGN</h3>
                    <p className="font-body text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Transforming products into meaningful physical experiences through thoughtful packaging and print design.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#88D900]/60 transition-all">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">PRINT DESIGN</h3>
                    <p className="font-body text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Creating tactile visual experiences designed for the real world.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#88D900]/60 transition-all">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">DIGITAL CAMPAIGNS</h3>
                    <p className="font-body text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Designing engaging visuals that capture attention and communicate clearly.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#88D900]/60 transition-all">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">UI/UX DESIGN</h3>
                    <p className="font-body text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Building modern digital experiences with clarity, usability, and purpose.</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -4, scale: 1.02 }} className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#88D900]/60 transition-all">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">MOTION VISUALS</h3>
                    <p className="font-body text-sm sm:text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Adding movement, energy, and storytelling to visual communication.</p>
                  </motion.div>
                </div>

                {/* Sky Blue Quote Banner Pill */}
                <motion.blockquote 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#38BDF8] text-black font-heading font-black text-lg sm:text-2xl tracking-wider text-center uppercase shadow-[0_0_30px_rgba(56,189,248,0.4)] drop-shadow cursor-pointer"
                >
                  "CREATIVITY ISN'T JUST MY SKILL, IT'S MY SUPERPOWER."
                </motion.blockquote>
              </motion.div>

              {/* 5. DESIGN PHILOSOPHY */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-8 bg-[#F472B6] rounded-full shadow-[0_0_12px_#F472B6]" />
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F472B6] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    MY DESIGN PHILOSOPHY
                  </h2>
                </div>

                <div className="text-xl sm:text-3xl font-heading font-black text-[#88D900] leading-tight space-y-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  <p>EVERY PIXEL SHOULD HAVE A PURPOSE.</p>
                  <p>EVERY BRAND SHOULD HAVE A SOUL.</p>
                </div>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Design is more than decoration. It is communication. A strong visual identity can create trust. A powerful image can create emotion. A well-designed experience can make something complex feel simple.
                </p>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  My approach to design combines strategy with creativity. Before creating visuals, I think about people, purpose, emotion, and the story behind the brand. I believe good design should not only be seen — it should be felt.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.span whileHover={{ scale: 1.08 }} className="px-4 py-1.5 rounded-full bg-black/60 text-xs font-extrabold text-[#88D900] border border-[#88D900]/50 drop-shadow cursor-default">PURPOSE</motion.span>
                  <motion.span whileHover={{ scale: 1.08 }} className="px-4 py-1.5 rounded-full bg-black/60 text-xs font-extrabold text-[#88D900] border border-[#88D900]/50 drop-shadow cursor-default">EMOTION</motion.span>
                  <motion.span whileHover={{ scale: 1.08 }} className="px-4 py-1.5 rounded-full bg-black/60 text-xs font-extrabold text-[#88D900] border border-[#88D900]/50 drop-shadow cursor-default">IDENTITY</motion.span>
                  <motion.span whileHover={{ scale: 1.08 }} className="px-4 py-1.5 rounded-full bg-black/60 text-xs font-extrabold text-[#88D900] border border-[#88D900]/50 drop-shadow cursor-default">STORY</motion.span>
                  <motion.span whileHover={{ scale: 1.08 }} className="px-4 py-1.5 rounded-full bg-black/60 text-xs font-extrabold text-[#88D900] border border-[#88D900]/50 drop-shadow cursor-default">IMPACT</motion.span>
                </div>
              </motion.div>

              {/* 6. WOMAN. CREATOR. DREAMER. LEADER. */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-8 bg-[#F472B6] rounded-full shadow-[0_0_12px_#F472B6]" />
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F472B6] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    WOMAN. CREATOR. DREAMER. LEADER.
                  </h2>
                </div>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Being a woman in the creative industry has taught me the importance of confidence, independence, continuous learning, and believing in my own voice. Creativity has given me the freedom to express ideas, solve problems, and build a career around something I genuinely love.
                </p>

                <p className="font-body text-base sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  I believe women bring unique perspectives, empathy, strength, imagination, and leadership into every industry. My journey is not only about becoming a better designer — it is also about becoming a stronger, more confident, and more independent version of myself.
                </p>

                <motion.blockquote 
                  whileHover={{ scale: 1.02 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#88D900] text-black font-heading font-black text-lg sm:text-2xl tracking-wider text-center uppercase shadow-2xl drop-shadow cursor-default"
                >
                  "WOMEN DON'T JUST FOLLOW VISIONS. WE CREATE THEM."
                </motion.blockquote>
              </motion.div>

              {/* 7. BEYOND THE SCREEN */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-heading font-extrabold text-xs text-[#F472B6] uppercase tracking-widest drop-shadow">THE PERSON BEHIND THE DESIGNER</span>
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-8 bg-[#F472B6] rounded-full shadow-[0_0_12px_#F472B6]" />
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F472B6] tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      BEYOND THE SCREEN
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">MY LIFE PHILOSOPHY</h3>
                    <p className="font-body text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      I believe success should always have space for happiness. A meaningful life is not only about professional achievements — it is also about enjoying small moments, learning continuously, staying positive, and being connected with the people who matter.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading font-black text-lg text-[#88D900] drop-shadow">FAMILY &amp; SUPPORT</h3>
                    <p className="font-body text-base text-slate-100 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      My family has always been an important part of my journey. Their encouragement, support, and belief have played a meaningful role in helping me continue growing personally and professionally. Behind every dream is often someone who believes in you.
                    </p>
                  </div>
                </div>

                {/* What Makes Me, Me */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-heading font-black text-lg text-white drop-shadow">LITTLE THINGS THAT MAKE ME, ME</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <motion.div whileHover={{ scale: 1.05, y: -4 }} className="space-y-2.5 p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-[#88D900]/60 transition-all group">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-[#88D900]/15 text-[#88D900] group-hover:bg-[#88D900] group-hover:text-black transition-colors shadow-sm">
                          <Plane className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">TRAVEL</span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow">Exploring new places, architecture, stories, and colors.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -4 }} className="space-y-2.5 p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-[#88D900]/60 transition-all group">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-[#88D900]/15 text-[#88D900] group-hover:bg-[#88D900] group-hover:text-black transition-colors shadow-sm">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">FOOD</span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow">Discovering different flavors, memories, and celebrations.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -4 }} className="space-y-2.5 p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-[#88D900]/60 transition-all group">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-[#88D900]/15 text-[#88D900] group-hover:bg-[#88D900] group-hover:text-black transition-colors shadow-sm">
                          <Film className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">CINEMA</span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow">Visual storytelling, music, composition, and emotions.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -4 }} className="space-y-2.5 p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-[#88D900]/60 transition-all group">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-[#88D900]/15 text-[#88D900] group-hover:bg-[#88D900] group-hover:text-black transition-colors shadow-sm">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">CREATIVITY</span>
                      </div>
                      <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed drop-shadow">Nature, photography, culture, and everyday life.</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* 8. PERSONAL VALUES */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-8 bg-[#F472B6] rounded-full shadow-[0_0_12px_#F472B6]" />
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#F472B6] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    MY PERSONAL VALUES
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">CREATIVITY</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 drop-shadow">Always looking for a different perspective.</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">CURIOSITY</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 drop-shadow">Always learning, exploring, and asking questions.</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">DISCIPLINE</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 drop-shadow">Great work requires consistency.</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">EMPATHY</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 drop-shadow">Understanding people helps create better experiences.</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">CONFIDENCE</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 drop-shadow">Trusting the creative voice within.</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-1 p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="font-heading font-black text-sm text-[#88D900] block drop-shadow">GROWTH</span>
                    <p className="font-body text-xs sm:text-sm text-slate-200 drop-shadow">Never stopping the journey of becoming better.</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 9. A MESSAGE FROM ME & ACTION BUTTONS FOOTER */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
                className="space-y-8 text-center pt-8 border-t border-white/20"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#88D900] text-black font-heading font-black text-xs uppercase tracking-wider shadow-lg">
                  STILL LEARNING • STILL DREAMING • STILL CREATING
                </div>

                <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  LET'S CREATE SOMETHING <span className="text-[#88D900]">MEANINGFUL TOGETHER</span>
                </h2>

                <p className="font-body text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  If you have a brand to build, a story to tell, a product to launch, or an idea waiting to become something real — let's connect and craft work that makes an impact.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsModalOpen(false);
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-7 py-3.5 rounded-full bg-black/70 border border-white/30 text-white font-heading font-extrabold text-xs uppercase tracking-wider hover:border-[#88D900] hover:text-[#88D900] transition-all duration-300 cursor-pointer shadow-xl backdrop-blur-md"
                  >
                    View My Work ↗
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsModalOpen(false);
                      onOpenResume();
                    }}
                    className="px-7 py-3.5 rounded-full bg-[#88D900] text-black font-button font-black text-xs uppercase tracking-wider hover:bg-[#9EF01A] shadow-[0_0_25px_rgba(136,217,0,0.5)] transition-all duration-300 cursor-pointer"
                  >
                    Download Resume ↗
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsModalOpen(false);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-7 py-3.5 rounded-full bg-white text-black font-button font-black text-xs uppercase tracking-wider hover:bg-slate-200 transition-all duration-300 cursor-pointer shadow-xl"
                  >
                    Let's Work Together ↗
                  </motion.button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
