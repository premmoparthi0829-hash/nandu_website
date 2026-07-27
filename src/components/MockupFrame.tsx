import React from 'react';
import { motion } from 'framer-motion';

interface MockupFrameProps {
  children: React.ReactNode;
  tags?: string[];
  author?: string;
  bgColor?: string;
}

export const MockupFrame: React.FC<MockupFrameProps> = ({
  children,
  tags = ['Tutorial', 'Figma', 'Motion', 'Web Design'],
  author = '@nandini.design',
  bgColor = 'bg-[#62C696]',
}) => {
  return (
    <div className={`w-full p-4 sm:p-12 rounded-[40px] ${bgColor} relative overflow-hidden my-8 shadow-2xl flex flex-col items-center justify-between`}>
      {/* Top Header Tags Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-6 z-10">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-sans text-xs font-semibold border border-white/30 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-sans text-xs font-semibold border border-white/30 shadow-sm">
          {author}
        </span>
      </div>

      {/* Embedded 3D Floating Viewport Frame */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl rounded-[32px] overflow-hidden bg-white dark:bg-[#121620] shadow-[0_30px_70px_rgba(0,0,0,0.25)] border-4 border-white/40 dark:border-white/10 relative z-10"
      >
        {children}
      </motion.div>

      {/* Footer Branding Bar */}
      <div className="w-full flex items-center justify-between mt-6 text-white/90 text-xs font-sans font-medium z-10">
        <span>© 2026 Nandini Vaddepalli. All rights reserved</span>
        <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
          {author}
        </span>
      </div>
    </div>
  );
};
