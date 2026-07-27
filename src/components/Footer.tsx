import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 sm:px-12 bg-[#1B4332] text-white relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-2xl bg-white text-[#2D6A4F] flex items-center justify-center font-serif font-extrabold text-xs shadow-md">
            NV
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xs tracking-wider uppercase text-white">
              NANDINI VADDEPALLI
            </span>
            <span className="text-[10px] text-white/70 font-sans">
              Creative Graphic Designer • 4.5+ Yrs
            </span>
          </div>
        </div>

        {/* Center Copyright */}
        <div className="text-center text-xs text-white/80 flex items-center gap-1 font-sans font-medium">
          <span>© {new Date().getFullYear()} Nandini Vaddepalli. Designed with</span>
          <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400 inline" />
          <span>in Mint &amp; Organic Cream.</span>
        </div>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-white/10 hover:bg-white hover:text-[#2D6A4F] text-white transition-all shadow-md flex items-center gap-2 text-xs font-bold"
        >
          <span>TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
