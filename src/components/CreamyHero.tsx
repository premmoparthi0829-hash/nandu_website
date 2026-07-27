import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Heart, ArrowUpRight, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
import { DesignTheme } from '../types/app';
import { OrganicWave } from './OrganicWave';

interface CreamyHeroProps {
  activeTheme: DesignTheme;
  setActiveTheme: (theme: DesignTheme) => void;
  onOpenInquiry: () => void;
}

/** Sample N pixels from an ImageData and return the average RGB */
function sampleAverageColor(imageData: ImageData, sampleStep = 8): [number, number, number] {
  const { data, width, height } = imageData;
  let r = 0, g = 0, b = 0, count = 0;
  for (let y = 0; y < height; y += sampleStep) {
    for (let x = 0; x < width; x += sampleStep) {
      const i = (y * width + x) * 4;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
  }
  return [Math.round(r / count), Math.round(g / count), Math.round(b / count)];
}

/** Interpolate between two RGB triples smoothly */
function lerpColor(a: [number,number,number], b: [number,number,number], t: number): [number,number,number] {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

/** Convert rgb triple to hex string */
function toHex([r,g,b]: [number,number,number]) {
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

/** Darken a color for the dark button variant */
function darken([r,g,b]: [number,number,number], factor = 0.45): [number,number,number] {
  return [Math.round(r*factor), Math.round(g*factor), Math.round(b*factor)];
}

export const CreamyHero: React.FC<CreamyHeroProps> = ({
  activeTheme,
  setActiveTheme,
  onOpenInquiry,
}) => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const currentColorRef = useRef<[number,number,number]>([82, 183, 136]); // start mint

  const [bgStyle, setBgStyle] = useState<React.CSSProperties>({
    background: 'linear-gradient(135deg, #52B788 0%, #2D6A4F 100%)',
  });
  const [btnDarkColor, setBtnDarkColor] = useState('#1B4332');

  const sampleVideoColor = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2 || video.paused) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 64;
    canvas.height = 36;
    ctx.drawImage(video, 0, 0, 64, 36);

    try {
      const imageData = ctx.getImageData(0, 0, 64, 36);
      const sampled = sampleAverageColor(imageData, 4);

      // Smooth lerp from current to sampled
      const prev = currentColorRef.current;
      const next = lerpColor(prev, sampled, 0.08); // 8% blend per frame = very smooth
      currentColorRef.current = next;

      const primary = toHex(next);
      const dark = toHex(darken(next, 0.45));
      const light = toHex(lerpColor(next, [255, 255, 255], 0.25));

      setBgStyle({
        background: `linear-gradient(145deg, ${light} 0%, ${primary} 40%, ${dark} 100%)`,
        transition: 'background 0.4s ease',
      });
      setBtnDarkColor(dark);
    } catch {
      // Cross-origin or other canvas errors — silently ignore
    }

    rafRef.current = requestAnimationFrame(sampleVideoColor);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(sampleVideoColor);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('playing', onPlay);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('playing', onPlay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sampleVideoColor]);

  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-0 flex flex-col justify-between text-white overflow-hidden"
      style={{ ...bgStyle, transition: 'background 0.6s ease' }}
    >

      {/* Hidden canvas for color sampling */}
      <canvas ref={canvasRef} className="hidden" width={64} height={36} />

      {/* Dynamic Ambient Glows */}
      <div className="absolute top-20 right-10 w-[550px] h-[550px] bg-white/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-0 w-[350px] h-[350px] bg-black/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">

        {/* Left Side: Headline & CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col items-start space-y-6"
        >
          {/* 👋 Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-heading font-extrabold text-xs uppercase tracking-widest shadow-sm">
            <span>👋 HELLO, I'M NANDINI</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-[76px] leading-[1.02] tracking-tight text-white drop-shadow-md">
            Designing Joy in Every Pixel
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-white/95 max-w-lg leading-relaxed font-semibold">
            Nandini Vaddepalli — Creative Graphic Designer &amp; Visual Brand Specialist with 4.5+ years of driving brand growth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-full bg-white text-gray-900 font-heading font-black text-xs uppercase tracking-wider shadow-xl hover:bg-[#FFF9ED] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>HIRE ME NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#projects"
              className="px-8 py-4 rounded-full text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-white/40 hover:border-white/70 backdrop-blur-sm"
              style={{ backgroundColor: btnDarkColor, transition: 'background-color 0.4s ease' }}
            >
              <span>VIEW PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Color Theme Switcher Arrows */}
          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={() => {
                const keys: DesignTheme[] = ['mint', 'peach', 'coral'];
                const idx = keys.indexOf(activeTheme);
                setActiveTheme(keys[(idx - 1 + keys.length) % keys.length]);
              }}
              className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-black transition-colors"
              title="Previous Color Palette"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const keys: DesignTheme[] = ['mint', 'peach', 'coral'];
                const idx = keys.indexOf(activeTheme);
                setActiveTheme(keys[(idx + 1) % keys.length]);
              }}
              className="p-3 rounded-full bg-white/20 hover:bg-white hover:text-black transition-colors"
              title="Next Color Palette"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

        {/* Right Side: Video Frame & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 relative flex flex-col items-center justify-center py-6"
        >
          {/* Main Arched Video Frame */}
          <div className="relative w-[310px] sm:w-[410px] h-[400px] sm:h-[510px] rounded-[48px] bg-gradient-to-b from-white/30 to-black/20 border-4 border-white/40 shadow-2xl overflow-hidden flex items-end justify-center group">

            {/* Soft Ambient Background Glow */}
            <div className="absolute top-12 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />

            {/* Hero Video */}
            <video
              ref={videoRef}
              src="/assets/vid_1.mp4"
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="w-full h-full object-cover object-top relative z-10 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 3D Photoshop Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-6 left-2 sm:left-6 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Photoshop Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#001E36] border-2 border-[#00A4E4] text-[#00A4E4] flex items-center justify-center font-extrabold font-mono text-lg shadow-2xl">
              Ps
            </div>
          </motion.div>

          {/* 3D Illustrator Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-20 right-2 sm:right-6 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Illustrator Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#330000] border-2 border-[#FF9A00] text-[#FF9A00] flex items-center justify-center font-extrabold font-mono text-lg shadow-2xl">
              Ai
            </div>
          </motion.div>

          {/* 3D Figma Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            onClick={scrollToSkills}
            className="absolute top-1/2 -right-4 sm:right-2 z-20 cursor-pointer hover:scale-110 transition-transform"
            title="View Figma Skills"
          >
            <div className="w-12 h-12 rounded-2xl bg-white text-gray-900 border border-white/50 flex items-center justify-center text-xl shadow-2xl font-extrabold">
              Fg
            </div>
          </motion.div>

          {/* Floating Stat Badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 right-2 sm:right-6 z-20"
          >
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md text-gray-900 shadow-2xl flex items-center gap-4 border border-white">
              <div>
                <span className="text-[10px] font-semibold text-gray-500 block uppercase tracking-wider">
                  Projects Completed
                </span>
                <span className="font-heading font-black text-2xl text-gray-900">
                  100+
                </span>
              </div>
              <div className="flex items-end gap-1 h-8">
                <div className="w-1.5 h-4 bg-emerald-300 rounded-full" />
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <div className="w-1.5 h-8 bg-[#2D6A4F] rounded-full" />
                <div className="w-1.5 h-5 bg-emerald-400 rounded-full" />
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* Organic Wave Transition to Warm Cream */}
      <div className="relative mt-8 z-20">
        <OrganicWave fillColor="#FFF9ED" />

        {/* Bottom Social Proof Bar on Warm Cream */}
        <div className="bg-[#FFF9ED] text-[#1B4332] py-6 px-4 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Customer Review Avatar Stack */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border-2 border-[#FFF9ED]">
                NV
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center border-2 border-[#FFF9ED]">
                SK
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center border-2 border-[#FFF9ED]">
                AR
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-heading font-extrabold text-[#1B4332] block leading-tight">
                10K+ Reviews — 45+ Happy Clients
              </span>
              <span className="text-[10px] text-gray-600 font-semibold">
                100% Client Satisfaction &amp; Fast Turnaround
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Dribbble className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-[#1B4332] hover:text-white transition-all">
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};
