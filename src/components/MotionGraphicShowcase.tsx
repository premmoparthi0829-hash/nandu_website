import React from 'react';
import vid12Video from '../assets/vid12.mp4';

interface UltraFullHDVideoProps {
  className?: string;
}

export const MotionGraphicShowcase: React.FC<UltraFullHDVideoProps> = ({ className }) => {
  return (
    <section className="relative w-full h-[550px] md:h-[680px] overflow-hidden bg-black flex items-center justify-center">
      {/* 100% Pure Ultra Full HD Video Engine (vid12.mp4) */}
      <video
        src={vid12Video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04]"
      />
    </section>
  );
};
