import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Dribbble, Instagram, Linkedin, Github, Star } from 'lucide-react';
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
const SLIDE_DURATION = 4500;

const titleV = {
  hidden: { opacity: 0, y: 50, skewY: 3 },
  show:   { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } },
  exit:   { opacity: 0, y: -40, transition: { duration: 0.3 } },
};
const scriptV = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0,   transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' } },
  exit:   { opacity: 0,         transition: { duration: 0.25 } },
};
const itemV = {
  hidden: { opacity: 0, y: 20 },
  show:   (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.3 + i * 0.1, duration: 0.4 } }),
  exit:   { opacity: 0 },
};

/* ── Reusable heading block: centered ── */
const Head = ({ line1, line2, script }: {
  line1: string; line2?: string; script: string;
}) => (
  <div className="text-center flex flex-col items-center">
    <motion.h2 variants={titleV}
      className="font-heading font-black uppercase text-white leading-[0.88] tracking-tight"
      style={{ fontSize: 'clamp(3rem, 6.5vw, 6.5rem)' }}
    >
      {line1}{line2 && <><br />{line2}</>}
    </motion.h2>
    <motion.span variants={scriptV}
      className="font-script italic block -mt-1 mx-auto"
      style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', color: '#F59E0B' }}
    >
      {script}
    </motion.span>
    <WavyDeco color="#F59E0B" className="w-36 mt-2 opacity-75 mx-auto" />
  </div>
);

/* ── Tool Badge ── */
const Badge = ({ abbr, bg, border, color, delay = 0 }: {
  abbr: string; bg: string; border: string; color: string; delay?: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: -12 }}
    animate={{ scale: 1, rotate: 0, y: [0, -8, 0] }}
    transition={{ type: 'spring', delay, y: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' } }}
    className="w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-base shadow-xl border-2"
    style={{ background: bg, borderColor: border, color }}
  >
    {abbr}
  </motion.div>
);

/* ══════════════════════════════════════════════════════
   SLIDES — EXACTLY CENTERED (MIDDLE)
══════════════════════════════════════════════════════ */

/* Slide 1 — PORTFOLIO */
const SlidePortfolio = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
    <motion.p variants={itemV} custom={0}
      className="text-[10px] text-white/45 font-heading font-extrabold uppercase tracking-[0.3em]">
      Graphic Designer Portfolio
    </motion.p>
    <Head line1="PORT" line2="FOLIO" script="Graphic Design" />

    <motion.div variants={itemV} custom={2} className="flex items-center justify-center gap-4 mt-3">
      <Badge abbr="Ps" bg="#001E36" border="#00A4E4" color="#00A4E4" delay={0.3} />
      <Badge abbr="Ai" bg="#330000" border="#FF9A00" color="#FF9A00" delay={0.5} />
      <Badge abbr="Pr" bg="#00005C" border="#9999FF" color="#9999FF" delay={0.7} />
      <Badge abbr="Id" bg="#49021F" border="#FF3366" color="#FF3366" delay={0.9} />
    </motion.div>
  </div>
);

/* Slide 2 — HELLO I'AM */
const SlideHello = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
    <Head line1="HELLO" line2="I'AM" script="Nandini" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="w-32 h-36 rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl shrink-0">
        <img src={nandiniImg} alt="Nandini" className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
        <p className="text-xs text-white/65 max-w-xs font-sans leading-relaxed">
          Creative Graphic Designer &amp; Visual Brand Specialist with 4.5+ years crafting impactful brands and award-winning campaigns.
        </p>
        <div className="flex gap-6 justify-center">
          {[['4.5+','Yrs Exp'],['100+','Projects'],['45+','Clients']].map(([v,l]) => (
            <div key={l}>
              <span className="font-heading font-black text-2xl text-white">{v}</span>
              <span className="block text-[10px] text-white/45 font-semibold uppercase tracking-wider">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

/* Slide 3 — SOCIAL MEDIA */
const SlideSocial = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
    <Head line1="SOCIAL" line2="MEDIA" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="grid grid-cols-3 gap-2 shrink-0">
        {[solarImg, freyrImg, milkImg, solarImg, freyrImg, milkImg].map((src, i) => (
          <div key={i} className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/10 shadow-md">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <ul className="space-y-2 text-left">
        {['Instagram Creatives','Ad Banners & Carousels','Brand Story Sets','Motion Reels'].map(s => (
          <li key={s} className="flex items-center gap-2 text-xs text-white/70 font-semibold">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Slide 4 — PRINT MEDIA */
const SlidePrint = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
    <Head line1="PRINT" line2="MEDIA" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="flex gap-3 shrink-0">
        {[milkImg, freyrImg].map((src, i) => (
          <div key={i} className="w-32 h-22 sm:w-36 sm:h-24 rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <ul className="space-y-2 text-left">
        {['Brochures & Flyers','Product Packaging','Trade Show Banners','Business Cards'].map(s => (
          <li key={s} className="flex items-center gap-2 text-xs text-white/70 font-semibold">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Slide 5 — SKILLS & TOOLS */
const SlideSkills = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
    <Head line1="SKILLS &" line2="TOOLS" script="My Arsenal" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-xl mt-2">
      <div className="flex flex-wrap gap-2.5 max-w-[180px] justify-center">
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
            transition={{ type: 'spring', delay: 0.3 + i * 0.08 }}
            className="w-11 h-11 rounded-xl flex items-center justify-center font-mono font-black text-sm shadow-xl border-2"
            style={{ background: t.bg, borderColor: t.border, color: t.color }}
          >{t.abbr}</motion.div>
        ))}
      </div>
      <div className="flex-1 w-full flex flex-col gap-3">
        {[['Brand Identity',98],['Social Media Design',96],['Print & Packaging',92],['Motion Design',85]].map(([label,pct]) => (
          <div key={label as string} className="text-left">
            <div className="flex justify-between text-[10px] text-white/55 font-semibold mb-1">
              <span>{label}</span><span>{pct}%</span>
            </div>
            <div className="w-full h-1 bg-white/12 rounded-full overflow-hidden">
              <motion.div initial={{width:0}} animate={{width:`${pct}%`}}
                transition={{duration:1,delay:0.5}} className="h-full bg-[#F59E0B] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

/* Slide 6 — BRANDING */
const SlideBranding = () => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-4 px-6 max-w-4xl mx-auto">
    <Head line1="BRAND" line2="ING" script="Design" />

    <motion.div variants={itemV} custom={2} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-2">
      <div className="w-44 h-28 rounded-2xl overflow-hidden border border-white/10 shadow-xl shrink-0">
        <img src={freyrImg} alt="Branding" className="w-full h-full object-cover" />
      </div>
      <ul className="space-y-2 text-left">
        {['Logo & Brand Identity','Brand Style Guidelines','Corporate Stationery','Packaging Dielines'].map(s => (
          <li key={s} className="flex items-center gap-2 text-xs text-white/70 font-semibold">
            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#F59E0B]" />{s}
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

/* Slide 7 — THANK YOU */
const SlideThankYou = ({ onOpenInquiry }: { onOpenInquiry: () => void }) => (
  <div className="w-full flex flex-col items-center justify-center text-center gap-3 px-6 max-w-4xl mx-auto">
    <motion.p variants={scriptV}
      className="font-script italic text-[#F59E0B]"
      style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.3rem,2.5vw,2rem)' }}
    >
      For Attention
    </motion.p>
    <motion.h2 variants={titleV}
      className="font-heading font-black uppercase text-white leading-[0.9]"
      style={{ fontSize: 'clamp(4rem, 8vw, 7.5rem)' }}
    >
      THANK<br />YOU
    </motion.h2>
    <WavyDeco color="#F59E0B" className="w-40 opacity-75 mx-auto" />

    <motion.button variants={itemV} custom={2} onClick={onOpenInquiry}
      className="mt-2 px-8 py-3 rounded-full border-2 border-white/40 text-white font-heading font-black text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all flex items-center gap-2 mx-auto"
    >
      <span>CONTACT</span><ArrowUpRight className="w-3.5 h-3.5" />
    </motion.button>
    <motion.div variants={itemV} custom={3} className="flex items-center justify-center gap-4">
      {[Dribbble,Instagram,Linkedin,Github].map((Icon,i) => (
        <a key={i} href="#" className="p-2 rounded-full border border-white/20 text-white/55 hover:text-white hover:border-white/50 transition-all">
          <Icon className="w-4 h-4" />
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const t0 = Date.now();
    const iv = setInterval(() => setProgress(Math.min(((Date.now()-t0)/SLIDE_DURATION)*100,100)), 60);
    const tm = setTimeout(() => setCurrent(p => (p+1) % SLIDES.length), SLIDE_DURATION);
    return () => { clearInterval(iv); clearTimeout(tm); };
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
          'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 60%)',
          'radial-gradient(circle at 50% 45%, rgba(245,158,11,0.14) 0%, transparent 60%)',
          'radial-gradient(circle at 50% 55%, rgba(245,158,11,0.10) 0%, transparent 60%)',
        ]}}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
      />

      {/* Corner wavy accents */}
      <div className="absolute top-20 right-8 opacity-[0.10] z-0 rotate-12 pointer-events-none">
        <WavyDeco color="#F59E0B" className="w-28" />
      </div>
      <div className="absolute bottom-24 left-8 opacity-[0.08] z-0 -rotate-6 pointer-events-none">
        <WavyDeco color="#F59E0B" className="w-20" />
      </div>

      {/* ── SLIDE STAGE: EXACT MIDDLE ALIGNMENT ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center" style={{ paddingTop: '72px' }}>

        {/* Content fills remaining space, centered horizontally and vertically */}
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

        {/* ── CONTROLS BAR ── */}
        <div className="w-full flex items-center justify-between px-10 sm:px-16 py-3 border-t border-white/[0.05]">
          {/* Progress strips */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_,i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className="relative h-[3px] rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? 36 : 14, background: i === current ? 'transparent' : 'rgba(255,255,255,0.18)' }}
              >
                {i === current && (
                  <>
                    <span className="absolute inset-0 bg-white/15 rounded-full" />
                    <motion.span className="absolute top-0 left-0 h-full bg-[#F59E0B] rounded-full"
                      style={{ width: `${progress}%` }} />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/30 font-mono font-bold tracking-wider">
              {String(current+1).padStart(2,'0')} / {String(SLIDES.length).padStart(2,'0')}
            </span>
            <button onClick={() => setCurrent((current-1+SLIDES.length) % SLIDES.length)}
              className="w-8 h-8 rounded-full border border-white/18 flex items-center justify-center text-white/55 hover:bg-white/10 hover:text-white transition-all text-xl leading-none">‹</button>
            <button onClick={() => setCurrent((current+1) % SLIDES.length)}
              className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-black font-bold hover:bg-amber-400 transition-all text-xl leading-none">›</button>
          </div>
        </div>
      </div>

      {/* ── WAVE + SOCIAL PROOF ── */}
      <div className="relative z-20">
        <OrganicWave fillColor="#FFF9ED" />
        <div className="bg-[#FFF9ED] text-[#1B4332] py-3.5 px-4 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[['NV','bg-emerald-600'],['SK','bg-amber-500'],['AR','bg-purple-600']].map(([init,cls]) => (
                <div key={init} className={`w-7 h-7 rounded-full text-white font-bold text-[10px] flex items-center justify-center border-2 border-[#FFF9ED] ${cls}`}>{init}</div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-[11px] font-heading font-extrabold text-[#1B4332] leading-tight block">10K+ Reviews — 45+ Happy Clients</span>
              <span className="text-[10px] text-gray-500 font-semibold">100% Client Satisfaction &amp; Fast Turnaround</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            {([['https://dribbble.com',Dribbble],['https://instagram.com',Instagram],['https://linkedin.com',Linkedin],['https://github.com',Github]] as any[]).map(([href,Icon]: any) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332] transition-all">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
