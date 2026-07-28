import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
import { DesignTheme } from '../types/app';
import { OrganicWave } from './OrganicWave';
import freyrImg from '../assets/project_freyr.png';
import solarImg from '../assets/project_solar.png';
import milkImg from '../assets/project_milk.png';
import nandiniImg from '../assets/nandini_coral.png';

interface CreamyHeroProps {
  activeTheme: DesignTheme;
  setActiveTheme: (theme: DesignTheme) => void;
  onOpenInquiry: () => void;
}

const WavyDeco = ({ color = '#F59E0B', className = '' }: { color?: string; className?: string }) => (
  <svg viewBox="0 0 160 28" fill="none" className={className}>
    <path d="M0 14 Q13 0 26 14 Q39 28 52 14 Q65 0 78 14 Q91 28 104 14 Q117 0 130 14 Q143 28 156 14"
      stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

const SLIDES = ['portfolio', 'hello', 'social', 'print', 'branding', 'skills', 'explore'];
const SLIDE_DURATION = 3500;

const titleV = {
  hidden: { opacity: 0, y: 40, skewY: 2 },
  show:   { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
  exit:   { opacity: 0, y: -30, transition: { duration: 0.25 } },
};
const scriptV = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0,   transition: { duration: 0.45, delay: 0.2, ease: 'easeOut' } },
  exit:   { opacity: 0,         transition: { duration: 0.2 } },
};
const itemV = {
  hidden: { opacity: 0, y: 16 },
  show:   (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.08, duration: 0.35 } }),
  exit:   { opacity: 0 },
};

/* ── Reusable heading block: prominent & focused ── */
const Head = ({ line1, line2, script }: {
  line1: string; line2?: string; script: string;
}) => (
  <div className="text-center flex flex-col items-center">
    <motion.h2 variants={titleV}
      className="font-heading font-black uppercase text-white leading-[0.88] tracking-tight drop-shadow-lg"
      style={{ fontSize: 'clamp(2.5rem, 6.2vw, 5.5rem)' }}
    >
      {line1}{line2 && <><br />{line2}</>}
    </motion.h2>
    <motion.span variants={scriptV}
      className="font-script italic block -mt-1 mx-auto"
      style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.6rem, 3.8vw, 3rem)', color: '#F59E0B' }}
    >
      {script}
    </motion.span>
    <WavyDeco color="#F59E0B" className="w-32 sm:w-44 mt-2 opacity-85 mx-auto" />
  </div>
);

/* ── Tool Badge ── */
const Badge = ({ abbr, bg, border, color, delay = 0 }: {
  abbr: string; bg: string; border: string; color: string; delay?: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: -12 }}
    animate={{ scale: 1, rotate: 0, y: [0, -6, 0] }}
    transition={{ type: 'spring', delay, y: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' } }}
    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-mono font-black text-base shadow-2xl border-2"
    style={{ background: bg, borderColor: border, color }}
  >
    {abbr}
  </motion.div>
);

/* ══════════════════════════════════════════════════════
   1ST PAGE ALL SCREENS IN SEQUENCE
══════════════════════════════════════════════════════ */

/* Screen 1 — BRANDING */
const SlideBranding = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 max-w-4xl mx-auto py-4">
    <motion.p variants={itemV} custom={0}
      className="text-xs sm:text-sm text-[#F59E0B] font-heading font-black uppercase tracking-[0.35em]">
      Graphic Designer Portfolio
    </motion.p>
    <Head line1="BRAND" line2="ING" script="Graphic & Visual Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="w-44 h-28 sm:w-56 sm:h-36 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0">
        <img src={freyrImg} alt="Branding" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
        <ul className="space-y-2 text-left">
          {['Logo & Brand Identity','Brand Style Guidelines','Corporate Stationery','Packaging Dielines'].map(s => (
            <li key={s} className="flex items-center gap-2.5 text-sm sm:text-base text-white/90 font-bold">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#F59E0B]" />{s}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2.5 mt-1">
          <Badge abbr="Ps" bg="#001E36" border="#00A4E4" color="#00A4E4" delay={0.1} />
          <Badge abbr="Ai" bg="#330000" border="#FF9A00" color="#FF9A00" delay={0.2} />
          <Badge abbr="Id" bg="#49021F" border="#FF3366" color="#FF3366" delay={0.3} />
        </div>
      </div>
    </motion.div>
  </div>
);

/* Screen 2 — SKILLS & TOOLS */
const SlideSkills = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 max-w-4xl mx-auto py-4">
    <Head line1="SKILLS &" line2="TOOLS" script="My Creative Arsenal" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-xl mt-2">
      <div className="flex flex-wrap gap-2.5 max-w-[200px] justify-center">
        {[
          { abbr:'Ps', bg:'#001E36', border:'#00A4E4', color:'#00A4E4' },
          { abbr:'Ai', bg:'#330000', border:'#FF9A00', color:'#FF9A00' },
          { abbr:'Fg', bg:'#fff',    border:'#F24E1E', color:'#1B4332' },
          { abbr:'Id', bg:'#49021F', border:'#FF3366', color:'#FF3366' },
          { abbr:'Ae', bg:'#00005C', border:'#9999FF', color:'#9999FF' },
          { abbr:'Cn', bg:'#e6fafa', border:'#00C4CC', color:'#00C4CC' },
        ].map((t, i) => (
          <motion.div key={t.abbr}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 + i * 0.06 }}
            className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-sm shadow-xl border-2"
            style={{ background: t.bg, borderColor: t.border, color: t.color }}
          >{t.abbr}</motion.div>
        ))}
      </div>
      <div className="flex-1 w-full flex flex-col gap-3">
        {[['Brand Identity',98],['Social Media Design',96],['Print & Packaging',92],['Motion Design',85]].map(([label,pct]) => (
          <div key={label as string} className="text-left">
            <div className="flex justify-between text-xs text-white/80 font-bold mb-1">
              <span>{label}</span><span>{pct}%</span>
            </div>
            <div className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden">
              <motion.div initial={{width:0}} animate={{width:`${pct}%`}}
                transition={{duration:0.8,delay:0.4}} className="h-full bg-[#F59E0B] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

/* Screen 1 — HIGH-IMPACT EDITORIAL POSTER STYLE FOR NANDINI VADDEPALLI */
const SlidePortfolio = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center relative overflow-hidden py-4 px-4 max-w-5xl mx-auto select-none">
    
    {/* Angled Diagonal Accent Stripe behind cutout */}
    <motion.div
      initial={{ scaleX: 0, rotate: -6 }}
      animate={{ scaleX: 1, rotate: -6 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute w-[120%] h-28 sm:h-36 bg-gradient-to-r from-[#F59E0B] via-[#EE4D2D] to-[#F59E0B] opacity-25 z-0 transform -rotate-6 top-[38%] pointer-events-none rounded-2xl filter blur-sm"
    />

    {/* Top Editorial Header Info Line */}
    <motion.div variants={itemV} custom={0} className="z-10 flex items-center gap-3 mb-1 sm:mb-2">
      <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-black font-mono font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-md">
        2026 CREATIVE EDITION
      </span>
      <span className="text-[10px] sm:text-xs font-mono text-white/70 tracking-widest uppercase font-bold">
        • GRAPHIC DESIGNER & BRAND SPECIALIST •
      </span>
    </motion.div>

    {/* HUGE BOLD OVERLAPPING BACKGROUND TYPOGRAPHY WITH PHOTO CUTOUT */}
    <div className="relative w-full flex flex-col items-center justify-center my-1">

      {/* Layer 1: HUGE BACKDROP TEXT "NANDINI" */}
      <motion.h1
        variants={titleV}
        className="font-heading font-black uppercase text-white/90 leading-none tracking-tighter drop-shadow-2xl z-0 pointer-events-none"
        style={{ fontSize: 'clamp(3.8rem, 14vw, 11rem)', letterSpacing: '-0.04em' }}
      >
        NANDINI
      </motion.h1>

      {/* Layer 2: Photo Cutout + Diagonal Slash Banner */}
      <div className="relative -mt-8 sm:-mt-16 sm:-mb-12 z-10 flex items-center justify-center">
        {/* Angled solid banner badge overlay behind image */}
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -12, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute -left-6 sm:-left-16 top-1/2 -translate-y-1/2 bg-[#EE4D2D] text-white px-4 py-1 sm:px-6 sm:py-2 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl z-20 border-2 border-white"
        >
          4.5+ YRS EXP
        </motion.div>

        {/* Center Photo Portrait with Glowing Ring & Frame */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-36 h-36 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#F59E0B] shadow-[0_0_50px_rgba(245,158,11,0.4)] relative z-10 bg-[#121620]"
        >
          <img
            src={nandiniImg}
            alt="Nandini Vaddepalli"
            className="w-full h-full object-cover object-top filter contrast-[1.08] saturate-[1.1]"
          />
        </motion.div>

        {/* Floating Tool Badges right side */}
        <motion.div
          initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 12, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -right-6 sm:-right-16 top-1/2 -translate-y-1/2 bg-[#F59E0B] text-black px-4 py-1 sm:px-6 sm:py-2 rounded-xl font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl z-20 border-2 border-black"
        >
          VISUAL ARTIST
        </motion.div>
      </div>

      {/* Layer 3: HUGE FRONT TEXT "VADDEPALLI" + STENCIL EFFECT */}
      <motion.h1
        variants={titleV}
        className="font-heading font-black uppercase text-[#F59E0B] leading-none tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-20 pointer-events-none -mt-4 sm:-mt-8"
        style={{
          fontSize: 'clamp(3.2rem, 11.5vw, 9rem)',
          letterSpacing: '-0.03em',
          textShadow: '0 4px 20px rgba(245,158,11,0.3)',
        }}
      >
        VADDEPALLI
      </motion.h1>

      {/* Overlapping Gold Script Signature Line */}
      <motion.span
        variants={scriptV}
        className="font-script italic block -mt-4 sm:-mt-8 z-30 pointer-events-none"
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)',
          color: '#FFFFFF',
          textShadow: '0 4px 15px rgba(0,0,0,0.9)',
        }}
      >
        Nandini Vaddepalli Portfolio
      </motion.span>
    </div>

    {/* Bottom Floating Stats & Tool Pills */}
    <motion.div variants={itemV} custom={3} className="flex items-center justify-center gap-2.5 sm:gap-4 mt-2 z-30">
      <Badge abbr="Ps" bg="#001E36" border="#00A4E4" color="#00A4E4" delay={0.2} />
      <Badge abbr="Ai" bg="#330000" border="#FF9A00" color="#FF9A00" delay={0.3} />
      <Badge abbr="Fg" bg="#FFFFFF" border="#F24E1E" color="#1B4332" delay={0.4} />
      <Badge abbr="Id" bg="#49021F" border="#FF3366" color="#FF3366" delay={0.5} />
    </motion.div>

  </div>
);

/* Screen 4 — HELLO I'AM */
const SlideHello = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 max-w-4xl mx-auto py-4">
    <Head line1="HELLO" line2="I'AM" script="Nandini" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="w-28 h-32 sm:w-36 sm:h-40 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0">
        <img src={nandiniImg} alt="Nandini" className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 max-w-sm">
        <p className="text-sm sm:text-base text-white/85 font-sans leading-relaxed font-semibold">
          Creative Graphic Designer &amp; Visual Brand Specialist with 4.5+ years crafting impactful brands.
        </p>
        <div className="flex gap-6 justify-center sm:justify-start">
          {[['4.5+','Yrs Exp'],['100+','Projects'],['45+','Clients']].map(([v,l]) => (
            <div key={l}>
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#F59E0B]">{v}</span>
              <span className="block text-[10px] text-white/60 font-extrabold uppercase tracking-wider">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

/* Screen 5 — SOCIAL MEDIA */
const SlideSocial = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 max-w-4xl mx-auto py-4">
    <Head line1="SOCIAL" line2="MEDIA" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="grid grid-cols-3 gap-2 shrink-0">
        {[solarImg, freyrImg, milkImg, solarImg, freyrImg, milkImg].map((src, i) => (
          <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/15 shadow-lg">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <ul className="space-y-2 text-left">
        {['Instagram Creatives','Ad Banners & Carousels','Brand Story Sets','Motion Reels'].map(s => (
          <li key={s} className="flex items-center gap-2.5 text-sm sm:text-base text-white/85 font-bold">
            <span className="w-2 h-2 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Screen 6 — PRINT MEDIA */
const SlidePrint = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 max-w-4xl mx-auto py-4">
    <Head line1="PRINT" line2="MEDIA" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="flex gap-3 shrink-0">
        {[milkImg, freyrImg].map((src, i) => (
          <div key={i} className="w-32 h-24 sm:w-40 sm:h-28 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <ul className="space-y-2 text-left">
        {['Brochures & Flyers','Product Packaging','Trade Show Banners','Business Cards'].map(s => (
          <li key={s} className="flex items-center gap-2.5 text-sm sm:text-base text-white/85 font-bold">
            <span className="w-2 h-2 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Screen 7 — THANK YOU */
const SlideThankYou = ({ onOpenInquiry }: { onOpenInquiry: () => void }) => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-4xl mx-auto py-4">
    <motion.p variants={scriptV}
      className="font-script italic text-[#F59E0B]"
      style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}
    >
      For Attention
    </motion.p>
    <motion.h2 variants={titleV}
      className="font-heading font-black uppercase text-white leading-[0.88] drop-shadow-xl"
      style={{ fontSize: 'clamp(4rem, 9vw, 7.5rem)' }}
    >
      THANK<br />YOU
    </motion.h2>
    <WavyDeco color="#F59E0B" className="w-40 opacity-85 mx-auto" />

    <motion.button variants={itemV} custom={2} onClick={onOpenInquiry}
      className="mt-2 px-8 py-3 rounded-full border-2 border-white/50 text-white font-heading font-black text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-2 mx-auto shadow-2xl"
    >
      <span>CONTACT</span><ArrowUpRight className="w-4 h-4" />
    </motion.button>
    <motion.div variants={itemV} custom={3} className="flex items-center justify-center gap-4 mt-2">
      {[Dribbble,Instagram,Linkedin,Github].map((Icon,i) => (
        <a key={i} href="#" className="p-2.5 rounded-full border border-white/25 text-white/70 hover:text-white hover:border-white/60 transition-all">
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </motion.div>
  </div>
);

/* Screen 8 — EXPLORE MORE SCREEN WITH DOWN ARROW & AUTO-SCROLL TO 2ND PAGE */
const SlideExplore = () => {
  const handleScrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-4 max-w-4xl mx-auto py-4">
      <motion.p variants={itemV} custom={0}
        className="text-xs sm:text-sm text-[#F59E0B] font-heading font-black uppercase tracking-[0.35em]">
        Next Chapter
      </motion.p>

      <Head line1="EXPLORE" line2="MORE" script="Discover My Story & Work" />

      <motion.div variants={itemV} custom={2} className="flex flex-col items-center gap-4 mt-2">
        <p className="text-sm sm:text-base text-white/85 font-semibold max-w-md">
          Click below or wait a moment to automatically scroll down to my background, experience, and projects!
        </p>

        {/* Animated Bouncing Down Arrow Button */}
        <motion.button
          onClick={handleScrollToAbout}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-2 p-4 rounded-full bg-[#F59E0B] text-black shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center cursor-pointer group"
          title="Scroll to About Me Section"
        >
          <ArrowDown className="w-7 h-7 stroke-[3]" />
        </motion.button>

        <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#F59E0B] animate-pulse">
          Auto Scrolling to 2nd Page...
        </span>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export const CreamyHero: React.FC<CreamyHeroProps> = ({
  activeTheme,
  setActiveTheme,
  onOpenInquiry,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const tm = setTimeout(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % SLIDES.length;
        if (prev === SLIDES.length - 1) {
          // Reached the explore screen, auto scroll to 2nd page (#about)
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
        return next;
      });
    }, SLIDE_DURATION);
    return () => clearTimeout(tm);
  }, [current]);

  const slideMap: Record<string, React.ReactNode> = {
    branding:  <SlideBranding />,
    skills:    <SlideSkills />,
    portfolio: <SlidePortfolio />,
    hello:     <SlideHello />,
    social:    <SlideSocial />,
    print:     <SlidePrint />,
    thankyou:  <SlideThankYou onOpenInquiry={onOpenInquiry} />,
    explore:   <SlideExplore />,
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#0A0A0A] text-white flex flex-col justify-between"
      style={{ minHeight: '100dvh' }}>

      {/* BG dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.025]"
        style={{ backgroundImage:'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize:'36px 36px' }} />

      {/* Golden ambient glow centered */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none"
        animate={{ background:[
          'radial-gradient(circle at 50% 48%, rgba(245,158,11,0.12) 0%, transparent 60%)',
          'radial-gradient(circle at 50% 45%, rgba(245,158,11,0.14) 0%, transparent 60%)',
          'radial-gradient(circle at 50% 52%, rgba(245,158,11,0.10) 0%, transparent 60%)',
        ]}}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner wavy accents */}
      <div className="absolute top-8 right-8 opacity-[0.10] z-0 rotate-12 pointer-events-none">
        <WavyDeco color="#F59E0B" className="w-24" />
      </div>
      <div className="absolute bottom-20 left-8 opacity-[0.08] z-0 -rotate-6 pointer-events-none">
        <WavyDeco color="#F59E0B" className="w-20" />
      </div>

      {/* ── SLIDE STAGE ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="flex-1 w-full relative overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={SLIDES[current]}
              className="absolute inset-0 flex flex-col justify-center items-center text-center"
              initial="hidden" animate="show" exit="exit"
            >
              {slideMap[SLIDES[current]]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── ORGANIC WAVE TRANSITION TO CREAM ── */}
      <OrganicWave fillColor="#FFF9ED" />

    </section>
  );
};
