import React from 'react';

interface OrganicWaveProps {
  fillColor?: string;
  flipY?: boolean;
}

export const OrganicWave: React.FC<OrganicWaveProps> = ({
  fillColor = '#FFF9ED',
  flipY = false,
}) => {
  return (
    <div className={`wave-divider relative z-20 ${flipY ? 'rotate-180 -mb-1' : '-mt-1'}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-20 lg:h-28 preserve-3d"
      >
        <path
          d="M0 60C240 110 480 0 720 50C960 100 1200 20 1440 60V120H0V60Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
