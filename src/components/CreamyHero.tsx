import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
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

const SLIDES = ['portfolio','hello','social','print','skills','branding','thankyou'];
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

/* ── Reusable heading block: compact & centered ── */
const Head = ({ line1, line2, script }: {
  line1: string; line2?: string; script: string;
}) => (
  <div className="text-center flex flex-col items-center">
    <motion.h2 variants={titleV}
      className="font-heading font-black uppercase text-white leading-[0.88] tracking-tight"
      style={{ fontSize: 'clamp(2.4rem, 4.8vw, 4.8rem)' }}
    >
      {line1}{line2 && <><br />{line2}</>}
    </motion.h2>
    <motion.span variants={scriptV}
      className="font-script italic block -mt-1 mx-auto"
      style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', color: '#F59E0B' }}
    >
      {script}
    </motion.span>
    <WavyDeco color="#F59E0B" className="w-28 sm:w-32 mt-1.5 opacity-75 mx-auto" />
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
    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-mono font-black text-sm shadow-xl border-2"
    style={{ background: bg, borderColor: border, color }}
  >
    {abbr}
  </motion.div>
);

/* ══════════════════════════════════════════════════════
   SLIDES — COMPACT & PERFECTLY CENTERED IN VIEWPORT
══════════════════════════════════════════════════════ */

/* Slide 1 — PORTFOLIO */
const SlidePortfolio = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-3xl mx-auto py-2">
    <motion.p variants={itemV} custom={0}
      className="text-[10px] text-white/45 font-heading font-extrabold uppercase tracking-[0.3em]">
      Graphic Designer Portfolio
    </motion.p>
    <Head line1="PORT" line2="FOLIO" script="Graphic Design" />

    <motion.div variants={itemV} custom={2} className="flex items-center justify-center gap-3 mt-2">
      <Badge abbr="Ps" bg="#001E36" border="#00A4E4" color="#00A4E4" delay={0.2} />
      <Badge abbr="Ai" bg="#330000" border="#FF9A00" color="#FF9A00" delay={0.4} />
      <Badge abbr="Pr" bg="#00005C" border="#9999FF" color="#9999FF" delay={0.6} />
      <Badge abbr="Id" bg="#49021F" border="#FF3366" color="#FF3366" delay={0.8} />
    </motion.div>
  </div>
);

/* Slide 2 — HELLO I'AM */
const SlideHello = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-3xl mx-auto py-2">
    <Head line1="HELLO" line2="I'AM" script="Nandini" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-1">
      <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl shrink-0">
        <img src={nandiniImg} alt="Nandini" className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 max-w-xs">
        <p className="text-xs text-white/70 font-sans leading-relaxed font-semibold">
          Creative Graphic Designer &amp; Visual Brand Specialist with 4.5+ years crafting impactful brands.
        </p>
        <div className="flex gap-5 justify-center sm:justify-start">
          {[['4.5+','Yrs Exp'],['100+','Projects'],['45+','Clients']].map(([v,l]) => (
            <div key={l}>
              <span className="font-heading font-black text-xl text-white">{v}</span>
              <span className="block text-[9px] text-white/45 font-semibold uppercase tracking-wider">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

/* Slide 3 — SOCIAL MEDIA */
const SlideSocial = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-3xl mx-auto py-2">
    <Head line1="SOCIAL" line2="MEDIA" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-1">
      <div className="grid grid-cols-3 gap-1.5 shrink-0">
        {[solarImg, freyrImg, milkImg, solarImg, freyrImg, milkImg].map((src, i) => (
          <div key={i} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-white/10 shadow-md">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <ul className="space-y-1.5 text-left">
        {['Instagram Creatives','Ad Banners & Carousels','Brand Story Sets','Motion Reels'].map(s => (
          <li key={s} className="flex items-center gap-2 text-xs text-white/75 font-semibold">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Slide 4 — PRINT MEDIA */
const SlidePrint = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-3xl mx-auto py-2">
    <Head line1="PRINT" line2="MEDIA" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-1">
      <div className="flex gap-2.5 shrink-0">
        {[milkImg, freyrImg].map((src, i) => (
          <div key={i} className="w-28 h-20 sm:w-32 sm:h-22 rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <ul className="space-y-1.5 text-left">
        {['Brochures & Flyers','Product Packaging','Trade Show Banners','Business Cards'].map(s => (
          <li key={s} className="flex items-center gap-2 text-xs text-white/75 font-semibold">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Slide 5 — SKILLS & TOOLS */
const SlideSkills = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-3xl mx-auto py-2">
    <Head line1="SKILLS &" line2="TOOLS" script="My Arsenal" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mt-1">
      <div className="flex flex-wrap gap-2 max-w-[160px] justify-center">
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
            className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-xs shadow-xl border-2"
            style={{ background: t.bg, borderColor: t.border, color: t.color }}
          >{t.abbr}</motion.div>
        ))}
      </div>
      <div className="flex-1 w-full flex flex-col gap-2">
        {[['Brand Identity',98],['Social Media Design',96],['Print & Packaging',92],['Motion Design',85]].map(([label,pct]) => (
          <div key={label as string} className="text-left">
            <div className="flex justify-between text-[10px] text-white/60 font-semibold mb-0.5">
              <span>{label}</span><span>{pct}%</span>
            </div>
            <div className="w-full h-1 bg-white/12 rounded-full overflow-hidden">
              <motion.div initial={{width:0}} animate={{width:`${pct}%`}}
                transition={{duration:0.8,delay:0.4}} className="h-full bg-[#F59E0B] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

/* Slide 6 — BRANDING */
const SlideBranding = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-4 max-w-3xl mx-auto py-2">
    <Head line1="BRAND" line2="ING" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-1">
      <div className="w-36 h-24 sm:w-40 sm:h-26 rounded-2xl overflow-hidden border border-white/10 shadow-xl shrink-0">
        <img src={freyrImg} alt="Branding" className="w-full h-full object-cover" />
      </div>
      <ul className="space-y-1.5 text-left">
        {['Logo & Brand Identity','Brand Style Guidelines','Corporate Stationery','Packaging Dielines'].map(s => (
          <li key={s} className="flex items-center gap-2 text-xs text-white/75 font-semibold">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Slide 7 — THANK YOU */
const SlideThankYou = ({ onOpenInquiry }: { onOpenInquiry: () => void }) => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-2.5 px-4 max-w-3xl mx-auto py-2">
    <motion.p variants={scriptV}
      className="font-script italic text-[#F59E0B]"
      style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.2rem,2.2vw,1.8rem)' }}
    >
      For Attention
    </motion.p>
    <motion.h2 variants={titleV}
      className="font-heading font-black uppercase text-white leading-[0.9]"
      style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
    >
      THANK<br />YOU
    </motion.h2>
    <WavyDeco color="#F59E0B" className="w-32 opacity-75 mx-auto" />

    <motion.button variants={itemV} custom={2} onClick={onOpenInquiry}
      className="mt-1 px-7 py-2.5 rounded-full border-2 border-white/40 text-white font-heading font-black text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-2 mx-auto"
    >
      <span>CONTACT</span><ArrowUpRight className="w-3.5 h-3.5" />
    </motion.button>
    <motion.div variants={itemV} custom={3} className="flex items-center justify-center gap-3 mt-1">
      {[Dribbble,Instagram,Linkedin,Github].map((Icon,i) => (
        <a key={i} href="#" className="p-2 rounded-full border border-white/20 text-white/55 hover:text-white hover:border-white/50 transition-all">
          <Icon className="w-3.5 h-3.5" />
        </a>
      ))}
    </motion.div>
  </div>
);

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
    const tm = setTimeout(() => setCurrent(p => (p + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearTimeout(tm);
  }, [current]);

  const slideMap: Record<string, React.ReactNode> = {
    portfolio: <SlidePortfolio />,
    hello:     <SlideHello />,
    social:    <SlideSocial />,
    print:     <SlidePrint />,
    skills:    <SlideSkills />,
    branding:  <SlideBranding />,
    thankyou:  <SlideThankYou onOpenInquiry={onOpenInquiry} />,
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

      {/* ── ORGANIC WAVE TRANSITION TO CREAM (No text/names inside) ── */}
      <OrganicWave fillColor="#FFF9ED" />

    </section>
  );
};
