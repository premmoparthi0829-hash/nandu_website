import React from 'react';
import { motion } from 'framer-motion';

export const ScooterRiderSVG: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Dynamic Ground Cast Shadow under scooter */}
      <div 
        className="absolute bottom-[-12%] left-[10%] w-[85%] h-[25%] bg-[#001D66]/80 blur-md rounded-full pointer-events-none transform -rotate-12 scale-y-50" 
      />

      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,10,60,0.6)]"
      >
        <defs>
          {/* Scooter Body Gradient (Turquoise / Teal Gloss) */}
          <linearGradient id="scooterBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48CAE4" />
            <stop offset="50%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>

          <linearGradient id="scooterHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ADE8F4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.1" />
          </linearGradient>

          {/* Chrome / Metal Gradients */}
          <linearGradient id="chrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#6B7280" />
          </linearGradient>

          {/* Tire Tread Dark Gradient */}
          <linearGradient id="tireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>

          {/* Rider Jacket Gradient */}
          <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="70%" stopColor="#0F172A" />
          </linearGradient>

          {/* Helmet Gloss Gradient */}
          <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="40%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          {/* Luggage Box Gradient */}
          <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Speed Smoke Cloud Gradient */}
          <radialGradient id="smokeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#004BE0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── 1. SPEED SMOKE PUFFS & TRAILS (BEHIND REAR WHEEL) ── */}
        <g className="opacity-90">
          <motion.path
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            d="M 60 320 C 40 310, 20 330, 30 350 C 40 370, 70 370, 90 350 C 110 330, 90 310, 60 320 Z"
            fill="url(#smokeGrad)"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1], x: [-10, 0, -10] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            d="M 100 290 C 80 270, 50 280, 60 300 C 70 320, 110 320, 120 300 C 130 280, 110 270, 100 290 Z"
            fill="url(#smokeGrad)"
          />
          {/* Speed Streak Lines */}
          <path d="M 10 340 L 90 315" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <path d="M 30 360 L 120 330" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <path d="M 5 315 L 75 295" stroke="#BAE6FD" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </g>

        {/* ── 2. REAR WHEEL & EXHAUST ── */}
        <g id="rear-wheel">
          {/* Tire */}
          <ellipse cx="140" cy="300" rx="36" ry="42" fill="url(#tireGrad)" stroke="#1F2937" strokeWidth="3" transform="rotate(-15 140 300)" />
          {/* Rim */}
          <ellipse cx="140" cy="300" rx="22" ry="26" fill="url(#chrome)" transform="rotate(-15 140 300)" />
          {/* Hub */}
          <ellipse cx="140" cy="300" rx="10" ry="12" fill="#111827" transform="rotate(-15 140 300)" />
          
          {/* Chrome Exhaust Pipe */}
          <path d="M 110 320 Q 130 335 170 325" stroke="url(#chrome)" strokeWidth="12" strokeLinecap="round" />
          <path d="M 165 325 L 175 323" stroke="#1F2937" strokeWidth="10" strokeLinecap="round" />
        </g>

        {/* ── 3. MAIN SCOOTER BODY (CYAN / TEAL VESPA SHAPE) ── */}
        <g id="scooter-body">
          {/* Rear Cowl Body Panel */}
          <path
            d="M 130 270 Q 120 200 180 190 Q 250 180 270 230 Q 280 270 200 290 Q 140 295 130 270 Z"
            fill="url(#scooterBody)"
            stroke="#005F73"
            strokeWidth="2"
          />
          {/* Rear Cowl Highlight */}
          <path
            d="M 145 250 Q 140 210 185 200 Q 235 195 250 230"
            fill="none"
            stroke="url(#scooterHighlight)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Engine Vents Accent */}
          <path d="M 180 235 L 220 225" stroke="#005F73" strokeWidth="3" strokeLinecap="round" />
          <path d="M 185 245 L 225 235" stroke="#005F73" strokeWidth="3" strokeLinecap="round" />
          <path d="M 190 255 L 230 245" stroke="#005F73" strokeWidth="3" strokeLinecap="round" />

          {/* Floorboard / Underbody Bridge */}
          <path
            d="M 240 270 L 330 240 L 345 190 L 305 195 L 270 245 Z"
            fill="url(#scooterBody)"
            stroke="#005F73"
            strokeWidth="2"
          />
          {/* Rubber Footrest Ribs */}
          <path d="M 265 260 L 315 243" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />
          <path d="M 270 268 L 320 251" stroke="#1F2937" strokeWidth="4" strokeLinecap="round" />

          {/* Front Shield (Leg Shield & Head Stem) */}
          <path
            d="M 325 250 Q 355 170 330 110 Q 375 125 390 170 Q 405 210 345 260 Z"
            fill="url(#scooterBody)"
            stroke="#005F73"
            strokeWidth="2"
          />
          {/* Front Shield Chrome Trim Contour */}
          <path
            d="M 335 118 Q 378 133 392 175 Q 402 212 348 258"
            fill="none"
            stroke="url(#chrome)"
            strokeWidth="4"
          />

          {/* Front Mudguard (Fender) */}
          <path
            d="M 350 250 Q 370 230 420 250 Q 430 290 380 300 Q 350 295 350 250 Z"
            fill="url(#scooterBody)"
            stroke="#005F73"
            strokeWidth="2"
          />
          <path
            d="M 365 242 Q 405 245 418 265"
            fill="none"
            stroke="url(#scooterHighlight)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        {/* ── 4. FRONT WHEEL ── */}
        <g id="front-wheel">
          {/* Tire */}
          <ellipse cx="395" cy="285" rx="34" ry="40" fill="url(#tireGrad)" stroke="#1F2937" strokeWidth="3" transform="rotate(-15 395 285)" />
          {/* Rim */}
          <ellipse cx="395" cy="285" rx="20" ry="24" fill="url(#chrome)" transform="rotate(-15 395 285)" />
          {/* Hub & Suspension Fork */}
          <ellipse cx="395" cy="285" rx="9" ry="11" fill="#111827" transform="rotate(-15 395 285)" />
          <path d="M 365 240 L 395 285" stroke="url(#chrome)" strokeWidth="7" strokeLinecap="round" />
        </g>

        {/* ── 5. HANDLEBARS & HEADLIGHT ── */}
        <g id="handlebars">
          {/* Steering Column Cover */}
          <path d="M 330 110 L 345 75 L 370 82 L 350 118 Z" fill="url(#scooterBody)" />
          
          {/* Chrome Handlebar Grips */}
          <path d="M 315 85 L 348 76" stroke="url(#chrome)" strokeWidth="9" strokeLinecap="round" />
          <path d="M 310 87 L 322 83" stroke="#111827" strokeWidth="11" strokeLinecap="round" />
          
          <path d="M 355 74 L 385 68" stroke="url(#chrome)" strokeWidth="9" strokeLinecap="round" />
          <path d="M 375 70 L 388 66" stroke="#111827" strokeWidth="11" strokeLinecap="round" />

          {/* Mirrors */}
          <path d="M 330 78 L 320 50" stroke="url(#chrome)" strokeWidth="3" />
          <ellipse cx="318" cy="46" rx="8" ry="12" fill="url(#chrome)" transform="rotate(-20 318 46)" />

          {/* Round Headlight */}
          <ellipse cx="362" cy="74" rx="14" ry="16" fill="url(#chrome)" />
          <ellipse cx="364" cy="74" rx="11" ry="13" fill="#E0F2FE" />
          {/* Headlight Beam Glow */}
          <path d="M 374 68 L 470 30 L 490 70 L 374 80 Z" fill="url(#smokeGrad)" opacity="0.6" />
        </g>

        {/* ── 6. SCOOTER SEAT & CARGO LUGGAGE ── */}
        <g id="seat-and-cargo">
          {/* Leather Dual Seat */}
          <path
            d="M 175 195 Q 230 185 300 195 Q 310 215 250 220 Q 180 215 175 195 Z"
            fill="#1E293B"
            stroke="#0F172A"
            strokeWidth="3"
          />
          {/* Seat Stitching line */}
          <path d="M 185 200 Q 235 192 292 201" stroke="#D97706" strokeWidth="2" strokeDasharray="4 3" />

          {/* Stacked Cargo Delivery Boxes behind Rider */}
          {/* Box 1 (Bottom Big Cargo Box) */}
          <rect x="140" y="125" width="65" height="65" rx="8" fill="url(#boxGrad)" stroke="#451A03" strokeWidth="3" transform="rotate(-8 140 125)" />
          {/* Box Tape / Straps */}
          <path d="M 140 155 L 205 146" stroke="#FBBF24" strokeWidth="8" transform="rotate(-8 140 125)" />
          <path d="M 172 125 L 172 190" stroke="#1F2937" strokeWidth="4" transform="rotate(-8 140 125)" />

          {/* Box 2 (Top Stacked Duffel Bag / Box) */}
          <rect x="150" y="70" width="55" height="50" rx="10" fill="#0284C7" stroke="#075985" strokeWidth="3" transform="rotate(-5 150 70)" />
          <path d="M 150 95 L 205 90" stroke="#F43F5E" strokeWidth="6" transform="rotate(-5 150 70)" />

          {/* Bungee Cord Fasteners */}
          <path d="M 135 170 Q 170 110 205 180" stroke="#EF4444" strokeWidth="3" strokeDasharray="6 3" />
        </g>

        {/* ── 7. RIDER (DRIVER IN JACKET & HELMET) ── */}
        <g id="rider">
          {/* Legs & Pants */}
          <path
            d="M 230 200 Q 260 210 275 255 Q 260 270 245 265 Q 235 230 215 210 Z"
            fill="#1E293B"
            stroke="#0F172A"
            strokeWidth="2"
          />
          {/* Boots */}
          <path d="M 260 255 Q 285 255 295 265 Q 275 275 250 270 Z" fill="#0F172A" />

          {/* Torso & Jacket */}
          <path
            d="M 215 190 Q 225 130 280 110 Q 320 140 310 185 Q 270 210 215 190 Z"
            fill="url(#jacketGrad)"
            stroke="#0F172A"
            strokeWidth="2"
          />
          {/* Jacket Zipper & Seams */}
          <path d="M 280 110 Q 295 145 285 180" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M 245 145 Q 280 150 305 140" stroke="#334155" strokeWidth="2" />

          {/* Arm gripping handlebar */}
          <path
            d="M 285 125 Q 330 115 350 90"
            stroke="url(#jacketGrad)"
            strokeWidth="22"
            strokeLinecap="round"
          />
          {/* Glove */}
          <ellipse cx="350" cy="88" rx="10" ry="12" fill="#0F172A" transform="rotate(-20 350 88)" />

          {/* Neck */}
          <path d="M 275 112 L 285 95" stroke="#FCA5A5" strokeWidth="14" strokeLinecap="round" />

          {/* Helmet (Glossy Dark Blue / Teal Helmet) */}
          <ellipse cx="290" cy="80" rx="28" ry="30" fill="url(#helmetGrad)" stroke="#0F172A" strokeWidth="2" />
          {/* Helmet Top Ridge Highlight */}
          <path d="M 270 70 Q 290 55 310 70" stroke="url(#scooterHighlight)" strokeWidth="4" fill="none" />
          
          {/* Visor (Dark Tinted Glass Visor) */}
          <path d="M 292 65 Q 320 72 312 95 Q 290 92 288 80 Z" fill="#0284C7" opacity="0.9" />
          <path d="M 296 68 Q 315 74 310 88" stroke="#E0F2FE" strokeWidth="3" fill="none" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};
