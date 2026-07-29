import React from 'react';
import { motion } from 'framer-motion';

export const PS5ControllerSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Intense Red Neon Ground Backlight Glow */}
      <div 
        className="absolute bottom-[-15%] left-[5%] w-[90%] h-[35%] bg-[#FF0033] blur-2xl rounded-full opacity-90 pointer-events-none animate-pulse" 
      />

      <svg
        viewBox="0 0 600 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_20px_40px_rgba(255,0,50,0.7)]"
      >
        <defs>
          {/* Body Matte White Gradient */}
          <linearGradient id="ps5White" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Black Center Shell Gradient */}
          <linearGradient id="ps5Black" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Red Neon Illumination Gradient */}
          <linearGradient id="redNeon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3366" />
            <stop offset="100%" stopColor="#FF0033" />
          </linearGradient>
        </defs>

        {/* ── 1. MAIN CONTROLLER BODY (DUALSENSE SHAPE) ── */}
        {/* Left & Right Grip Shell */}
        <path
          d="M 170 80 Q 230 70 300 85 Q 370 70 430 80 C 510 90 580 200 550 340 C 530 400 460 410 400 320 L 370 270 Q 300 280 230 270 L 200 320 C 140 410 70 400 50 340 C 20 200 90 90 170 80 Z"
          fill="url(#ps5White)"
          stroke="#E2E8F0"
          strokeWidth="3"
        />

        {/* ── 2. BLACK CENTER CORE & TOUCHPAD ── */}
        <path
          d="M 210 110 L 390 110 L 380 250 Q 300 285 220 250 Z"
          fill="url(#ps5Black)"
          stroke="#334155"
          strokeWidth="2"
        />

        {/* Touchpad Plate Top */}
        <path
          d="M 220 75 L 380 75 L 375 145 L 225 145 Z"
          fill="url(#ps5White)"
          stroke="#CBD5E1"
          strokeWidth="2"
        />

        {/* Red Light Bar Accent Slits around Touchpad */}
        <path d="M 215 78 L 220 148" stroke="url(#redNeon)" strokeWidth="4" strokeLinecap="round" />
        <path d="M 385 78 L 380 148" stroke="url(#redNeon)" strokeWidth="4" strokeLinecap="round" />

        {/* ── 3. LEFT D-PAD (DIRECTIONAL BUTTONS) ── */}
        <g id="d-pad" transform="translate(140, 150)">
          {/* Up */}
          <rect x="25" y="0" width="20" height="24" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 35 6 L 41 16 L 29 16 Z" fill="#64748B" />
          {/* Down */}
          <rect x="25" y="44" width="20" height="24" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 35 62 L 41 52 L 29 52 Z" fill="#64748B" />
          {/* Left */}
          <rect x="3" y="22" width="24" height="20" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 9 32 L 19 26 L 19 38 Z" fill="#64748B" />
          {/* Right */}
          <rect x="43" y="22" width="24" height="20" rx="4" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 61 32 L 51 26 L 51 38 Z" fill="#64748B" />
        </g>

        {/* ── 4. RIGHT ACTION BUTTONS (△, ◯, ✕, □) ── */}
        <g id="action-buttons" transform="translate(390, 150)">
          {/* Triangle △ (Top) */}
          <circle cx="35" cy="12" r="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 35 4 L 42 17 L 28 17 Z" stroke="#64748B" strokeWidth="2.5" fill="none" />
          
          {/* Circle ◯ (Right) */}
          <circle cx="58" cy="35" r="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="58" cy="35" r="7" stroke="#64748B" strokeWidth="2.5" fill="none" />

          {/* Cross ✕ (Bottom) */}
          <circle cx="35" cy="58" r="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 29 52 L 41 64 M 41 52 L 29 64" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />

          {/* Square □ (Left) */}
          <circle cx="12" cy="35" r="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <rect x="6" y="29" width="12" height="12" stroke="#64748B" strokeWidth="2.5" fill="none" />
        </g>

        {/* ── 5. DUAL ANALOG THUMBSTICKS ── */}
        {/* Left Thumbstick */}
        <g id="left-stick" transform="translate(230, 240)">
          <circle cx="25" cy="25" r="32" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <circle cx="25" cy="25" r="24" fill="#1E293B" />
          <circle cx="25" cy="25" r="18" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 3" />
        </g>

        {/* Right Thumbstick */}
        <g id="right-stick" transform="translate(320, 240)">
          <circle cx="25" cy="25" r="32" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <circle cx="25" cy="25" r="24" fill="#1E293B" />
          <circle cx="25" cy="25" r="18" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 3" />
        </g>

        {/* PS Home Logo Button */}
        <path d="M 300 200 L 292 212 L 308 212 Z" fill="#94A3B8" />
        {/* Mute Button & Speaker Mic Holes */}
        <rect x="294" y="222" width="12" height="8" rx="3" fill="#334155" />
        <circle cx="300" cy="180" r="1.5" fill="#64748B" />
        <circle cx="295" cy="185" r="1.5" fill="#64748B" />
        <circle cx="305" cy="185" r="1.5" fill="#64748B" />
      </svg>
    </div>
  );
};
