import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Solid Pink Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#EC4899] rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_8px_#EC4899]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isMouseDown ? 0.7 : isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Subtle Sleek Ring (Compact scale on hover, no giant expansion!) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#EC4899]/70 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isMouseDown ? 0.85 : isHovered ? 1.15 : 1,
          borderColor: isHovered ? '#88D900' : 'rgba(236, 72, 153, 0.6)',
          backgroundColor: isHovered ? 'rgba(136, 217, 0, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 12px rgba(136, 217, 0, 0.4)' : '0 0 6px rgba(236, 72, 153, 0.2)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.15 }}
      />
    </>
  );
};
