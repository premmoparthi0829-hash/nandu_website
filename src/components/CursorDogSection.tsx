import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dogRefImg from '../assets/dog_cursor_scrub.png';
import { CursorScrubVideo } from './CursorScrubVideo';

export const CursorDogSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Normalized cursor coordinates (-1 to +1)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track Mouse Movement across 4 directions (Left, Right, Up, Down)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized offsets from -1 to 1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));

      setCursorPos({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full py-16 md:py-24 bg-[#F59E0B] overflow-hidden flex flex-col items-center justify-center border-t-4 border-amber-600 select-none"
    >
      {/* Header Badge & Title */}
      <div className="text-center mb-8 px-4 z-20">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider bg-black text-amber-300 uppercase shadow-lg mb-3"
        >
          <span>Interactive Cursor Tracking</span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
        >
          MOVE YOUR CURSOR TO PLAY 🐾
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-lg text-slate-800 font-semibold max-w-xl mx-auto mt-2"
        >
          Watch the character slowly look left, right, up, and down as it naturally follows your cursor around the screen.
        </motion.p>
      </div>

      {/* Main Studio Character Stage */}
      <div className="relative w-full max-w-4xl h-[540px] md:h-[640px] flex items-center justify-center">
        {/* Soft Background Studio Spotlight */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-amber-300/60 rounded-full blur-3xl" />
        </div>

        {/* 3D Fluffy Black Dog Character with Real-Time Head & Eye Pupil Tracking */}
        <motion.div
          animate={{
            x: cursorPos.x * 18,
            y: cursorPos.y * 14,
            rotateY: cursorPos.x * 12,
            rotateX: -cursorPos.y * 10,
          }}
          transition={{
            type: 'spring',
            stiffness: 75,
            damping: 18,
            mass: 0.6,
          }}
          className="relative z-10 w-[340px] md:w-[460px] h-auto flex items-center justify-center filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
        >
          {/* Base Photographic Character Reference Image */}
          <img
            src={dogRefImg}
            alt="Interactive Cursor Tracking Character"
            className="w-full h-auto object-contain rounded-2xl"
          />

          {/* Interactive Amber Eye Pupil Overlay Tracking (Left Eye) */}
          <motion.div
            animate={{
              x: cursorPos.x * 10,
              y: cursorPos.y * 8,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 14,
            }}
            className="absolute top-[37.5%] left-[42.2%] w-[16px] md:w-[22px] h-[16px] md:h-[22px] bg-[#1E1B18] rounded-full shadow-inner border border-amber-500/40 pointer-events-none"
          >
            {/* Eye Pupil Specular Highlight */}
            <div className="absolute top-[20%] left-[20%] w-[35%] h-[35%] bg-white rounded-full" />
          </motion.div>

          {/* Interactive Amber Eye Pupil Overlay Tracking (Right Eye) */}
          <motion.div
            animate={{
              x: cursorPos.x * 10,
              y: cursorPos.y * 8,
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 14,
            }}
            className="absolute top-[37.5%] right-[41.2%] w-[16px] md:w-[22px] h-[16px] md:h-[22px] bg-[#1E1B18] rounded-full shadow-inner border border-amber-500/40 pointer-events-none"
          >
            {/* Eye Pupil Specular Highlight */}
            <div className="absolute top-[20%] left-[20%] w-[35%] h-[35%] bg-white rounded-full" />
          </motion.div>
        </motion.div>

        {/* Embedded Framer CursorScrubVideo Component Overlay (Hidden or Optional Scrub Mode) */}
        <div className="absolute bottom-4 right-4 w-44 md:w-56 h-28 md:h-36 rounded-xl overflow-hidden shadow-2xl border-2 border-black/80 bg-black z-20">
          <div className="absolute top-1 left-2 z-10 text-[10px] font-mono uppercase bg-black/70 text-amber-400 px-1.5 py-0.5 rounded">
            Framer CursorScrubVideo
          </div>
          <CursorScrubVideo
            axis="horizontal"
            reverse={false}
            trackingArea="window"
            smoothing={0.22}
            objectFit="cover"
            showPoster={true}
          />
        </div>
      </div>
    </section>
  );
};
