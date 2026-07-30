import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Edit2, Check } from 'lucide-react';
import acrobatExactImg from '../assets/acrobat_exact_pose.png';

interface PeopleDesignHeroScreenProps {
  onScrollNext?: () => void;
}

export const PeopleDesignHeroScreen: React.FC<PeopleDesignHeroScreenProps> = ({ onScrollNext }) => {
  const [bgBlueHex, setBgBlueHex] = useState<string>('#0047FF');
  const [slogan, setSlogan] = useState<string>('People design for people.');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden select-none transition-colors duration-500"
      style={{ backgroundColor: bgBlueHex }}
    >
      {/* Subtle Floating Interactive Control Toggle (Top Right) */}
      <div className="absolute top-4 right-6 z-40 flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full border border-white/20 text-xs font-medium cursor-pointer transition-all"
        >
          {isEditing ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Edit2 className="w-3.5 h-3.5" />}
          <span>{isEditing ? 'Done' : 'Fine-Tune'}</span>
        </button>
      </div>

      {/* Interactive Controls Drawer */}
      <AnimatePresence>
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 right-6 z-50 bg-white text-gray-900 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 max-w-sm w-full"
          >
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Fine-Tune Artwork
            </div>
            <input
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
              className="w-full px-3 py-1.5 bg-gray-100 rounded-lg font-bold text-gray-900 text-xs border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-bold text-gray-500 uppercase">Background Color:</span>
              <div className="flex gap-2">
                {['#0047FF', '#0038FF', '#0052FF', '#0040E6', '#0530C4'].map((hex) => (
                  <button
                    key={hex}
                    onClick={() => setBgBlueHex(hex)}
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform ${
                      bgBlueHex === hex ? 'scale-110 border-white ring-2 ring-blue-500' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN PERFECT ARTWORK COMPOSITION ── */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center py-6">
        <div className="relative flex items-center justify-center">

          {/* PERFECT OUTER CIRCLE (72vh / 640px max ratio) */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[72vw] h-[72vw] max-w-[620px] max-h-[620px] min-w-[310px] min-h-[310px] rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 pointer-events-none"
            style={{
              transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
            }}
          >
            {/* Acrobat Studio Photo */}
            <img
              src={acrobatExactImg}
              alt="People design for people acrobat pose"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
            />

            {/* PERFECT INNER CIRCLE (50% ratio of outer circle) */}
            <div
              className="absolute w-[50%] h-[50%] rounded-full z-10 transition-colors duration-500"
              style={{
                backgroundColor: bgBlueHex,
                transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`,
              }}
            />
          </motion.div>

          {/* ── PERFECT SINGLE-LINE TYPOGRAPHY OVERLAY ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute z-20 text-center w-[130%] max-w-[96vw] pointer-events-none flex items-center justify-center"
            style={{
              transform: `translate3d(${mousePos.x * 14}px, ${mousePos.y * 14}px, 0)`,
            }}
          >
            <h1 className="text-[clamp(2.2rem,6.2vw,6.5rem)] font-bold text-white tracking-tight leading-none whitespace-nowrap flex items-baseline justify-center gap-x-2 sm:gap-x-3.5 md:gap-x-5">
              {/* Word 1: "People" -> Title Case Bold Geometric Sans */}
              <span className="font-sans font-bold tracking-tight">People</span>

              {/* Word 2: "design" -> Lowercase Elegant Serif Italic */}
              <span className="font-serif italic font-normal tracking-normal text-[0.98em]">design</span>

              {/* Word 3: "for" -> Lowercase Elegant Serif Regular */}
              <span className="font-serif font-normal tracking-normal text-[0.98em]">for</span>

              {/* Word 4: "people." -> Lowercase Bold Geometric Sans with period */}
              <span className="font-sans font-bold tracking-tight">people.</span>
            </h1>
          </motion.div>

        </div>
      </main>

      {/* Subtle Bottom Scroll CTA */}
      {onScrollNext && (
        <button
          onClick={onScrollNext}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-bold transition-all cursor-pointer opacity-70 hover:opacity-100"
        >
          <span>Explore Portfolio</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export default PeopleDesignHeroScreen;
