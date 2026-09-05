import React from 'react';
import vid12Video from '../assets/vid12.mp4';

interface UltraFullHDProps {
  className?: string;
}

export const NeonGardenBackground: React.FC<UltraFullHDProps> = ({ className }) => {
  return (
    <div className={className || 'relative w-full h-full overflow-hidden bg-black'}>
      <video
        src={vid12Video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover filter brightness-[1.02] contrast-[1.04]"
      />
    </div>
  );
};
