import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  /** Big bold uppercase headline — e.g. "PORTFOLIO" */
  title: string;
  /** Gold italic script accent line — e.g. "Graphic Design" */
  script: string;
  /** Small overline badge text — e.g. "MY WORK" */
  overline?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Light mode (on cream) or dark mode (on mint/dark) */
  variant?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  script,
  overline,
  align = 'left',
  variant = 'dark',
}) => {
  const alignClass = align === 'center' ? 'items-center text-center' : align === 'right' ? 'items-end text-right' : 'items-start text-left';
  const headingColor = variant === 'dark' ? 'text-white' : 'text-[#1B4332]';
  const scriptColor = '#F59E0B'; // amber-400 gold

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignClass} relative`}
    >
      {/* Overline badge */}
      {overline && (
        <span className={`text-[10px] font-heading font-extrabold uppercase tracking-[0.2em] mb-2 ${variant === 'dark' ? 'text-white/70' : 'text-[#2D6A4F]'}`}>
          {overline}
        </span>
      )}

      {/* Big bold uppercase block headline */}
      <h2
        className={`font-heading font-black uppercase leading-none tracking-tight ${headingColor}`}
        style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>

      {/* Gold italic script accent line — overlapping below */}
      <span
        className="font-script italic leading-none block -mt-1"
        style={{
          fontFamily: '"Dancing Script", cursive',
          fontSize: 'clamp(1.6rem, 4vw, 3.2rem)',
          color: scriptColor,
          textShadow: '0 2px 8px rgba(245,158,11,0.25)',
        }}
      >
        {script}
      </span>
    </motion.div>
  );
};
