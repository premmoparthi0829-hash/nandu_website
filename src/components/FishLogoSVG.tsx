import React from 'react';

export const FishLogoSVG: React.FC<{ className?: string }> = ({ className = 'w-10 h-8' }) => {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} text-white stroke-current`}
    >
      {/* Fish Body Curve */}
      <path
        d="M 12 30 Q 30 6 60 20 Q 68 32 46 34 Q 28 34 12 30 Z"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255, 255, 255, 0.12)"
      />
      {/* Fish Tail Fin (Wavy 2-part fin) */}
      <path
        d="M 52 18 Q 66 6 74 14 Q 68 26 58 24 Q 72 34 66 40 Q 56 34 50 28"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Fish Eye */}
      <circle cx="24" cy="21" r="2.5" fill="white" stroke="none" />
      {/* Fish Mouth Curve */}
      <path d="M 12 30 Q 6 25 9 20" strokeWidth="3" strokeLinecap="round" />
      {/* Body Shading / Scale Lines */}
      <path d="M 32 14 Q 35 25 29 31" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M 40 16 Q 43 26 37 32" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M 48 19 Q 50 26 45 30" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
};
