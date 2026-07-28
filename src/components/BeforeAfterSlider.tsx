import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImg,
  afterImg,
  beforeLabel = 'Legacy Design (Before)',
  afterLabel = "Nandini's Redesign (After)",
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[240px] sm:h-[380px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/20 shadow-2xl group"
    >
      {/* After Image (Background) */}
      <img
        src={afterImg}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Label Badge */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-mono font-bold border border-accent/40 shadow-lg">
        ✦ {afterLabel}
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        />
        {/* Before Label Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md text-gray-300 text-[9px] sm:text-[11px] font-mono border border-white/20 shadow-lg">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Slider Line Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-accent shadow-[0_0_15px_#FF8A3D] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full accent-gradient-bg text-white flex items-center justify-center shadow-xl border-2 border-white cursor-pointer hover:scale-110 transition-transform">
          <SlidersHorizontal className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-mono uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
        Drag slider to compare
      </div>
    </div>
  );
};
