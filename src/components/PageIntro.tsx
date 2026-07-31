import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageIntroProps {
  onComplete: () => void;
}

const NAME = 'NANDINI VADDEPALLI'.split('');

// 6 horizontal strips for the exit wipe
const STRIPS = 6;

export const PageIntro: React.FC<PageIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'in' | 'hold' | 'logoExit' | 'wipe' | 'done'>('in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'),    600);   // logo done → show name
    const t2 = setTimeout(() => setPhase('logoExit'),1900);  // name done → logo scales out
    const t3 = setTimeout(() => setPhase('wipe'),    2200);  // wipe strips start
    const t4 = setTimeout(() => {                           // all done
      setPhase('done');
      onComplete();
    }, 3100);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">

      {/* ─── Main black backdrop ─── */}
      <AnimatePresence>
        {phase !== 'wipe' && phase !== 'done' && (
          <motion.div
            key="bg"
            className="absolute inset-0 bg-[#090909]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      {/* ─── Wipe strips (appear when phase = wipe) ─── */}
      <AnimatePresence>
        {phase === 'wipe' && (
          <>
            {Array.from({ length: STRIPS }).map((_, i) => (
              <motion.div
                key={`strip-${i}`}
                className="absolute left-0 right-0 bg-[#090909]"
                style={{
                  top:    `${(i / STRIPS) * 100}%`,
                  height: `${100 / STRIPS + 0.5}%`, // slight overlap
                }}
                initial={{ x: 0 }}
                animate={{ x: i % 2 === 0 ? '-101%' : '101%' }}
                transition={{
                  duration: 0.55,
                  delay:    i * 0.06,
                  ease:     [0.76, 0, 0.24, 1],
                }}
              />
            ))}

            {/* Lime accent flash on each strip edge */}
            {Array.from({ length: STRIPS }).map((_, i) => (
              <motion.div
                key={`flash-${i}`}
                className="absolute left-0 right-0 bg-[#88D900]"
                style={{
                  top:    `${(i / STRIPS) * 100}%`,
                  height: `2px`,
                }}
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay:    i * 0.06 + 0.05,
                  ease:     'easeOut',
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* ─── Logo + text content ─── */}
      <AnimatePresence>
        {(phase === 'in' || phase === 'hold' || phase === 'logoExit') && (
          <motion.div
            key="content"
            className="absolute inset-0 flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Border accent lines */}
            <motion.div
              className="absolute inset-4 sm:inset-8 border border-[#88D900]/20 rounded-2xl pointer-events-none"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: phase === 'hold' || phase === 'logoExit' ? 1 : 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* NV Logo */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -20 }}
              animate={
                phase === 'logoExit'
                  ? { scale: 1.6, opacity: 0, rotate: 0 }
                  : { scale: 1, opacity: 1, rotate: 0 }
              }
              transition={
                phase === 'logoExit'
                  ? { duration: 0.35, ease: [0.76, 0, 0.24, 1] }
                  : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
              }
              className="mb-6 sm:mb-8"
            >
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#88D900] flex items-center justify-center"
                style={{ boxShadow: '0 0 60px rgba(136,217,0,0.55), 0 0 120px rgba(136,217,0,0.25)' }}
              >
                <span className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight select-none">
                  NV
                </span>
              </div>
            </motion.div>

            {/* Name letters stagger */}
            <div className="flex flex-wrap justify-center overflow-hidden px-4 mb-3">
              {NAME.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={
                    phase === 'hold' || phase === 'logoExit'
                      ? { y: '0%', opacity: 1 }
                      : {}
                  }
                  transition={{
                    delay:    i * 0.042,
                    duration: 0.48,
                    ease:     [0.22, 1, 0.36, 1],
                  }}
                  className="font-heading font-black text-white uppercase select-none inline-block"
                  style={{
                    fontSize:      'clamp(1.5rem, 5vw, 3.8rem)',
                    letterSpacing: '-0.02em',
                    width:         letter === ' ' ? 'clamp(0.5rem, 1.5vw, 1.2rem)' : undefined,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={
                phase === 'hold' || phase === 'logoExit'
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.85, duration: 0.5 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <span className="h-px w-8 sm:w-12 bg-[#88D900]/50" />
              <span className="font-button font-bold text-[#88D900] uppercase tracking-[0.28em] text-[9px] sm:text-[11px] select-none">
                Graphic Designer · Brand Specialist
              </span>
              <span className="h-px w-8 sm:w-12 bg-[#88D900]/50" />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-36 sm:w-52 h-[2px] bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={
                phase === 'hold' || phase === 'logoExit'
                  ? { opacity: 1 }
                  : {}
              }
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-[#88D900] rounded-full"
                initial={{ width: '0%' }}
                animate={
                  phase === 'hold' || phase === 'logoExit'
                    ? { width: '100%' }
                    : {}
                }
                transition={{ delay: 0.3, duration: 1.3, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Corner decorations */}
            {[
              'top-6 left-6 border-t border-l',
              'top-6 right-6 border-t border-r',
              'bottom-6 left-6 border-b border-l',
              'bottom-6 right-6 border-b border-r',
            ].map((cls, i) => (
              <motion.div
                key={i}
                className={`absolute w-5 h-5 sm:w-7 sm:h-7 border-[#88D900]/50 ${cls}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={phase === 'hold' || phase === 'logoExit' ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageIntro;
