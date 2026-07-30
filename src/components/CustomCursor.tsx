import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
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
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Lime Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#88D900] rounded-full pointer-events-none z-50 hidden md:block shadow-[0_0_15px_#88D900]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.1 }}
      />

      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[#88D900]/60 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(136, 217, 0, 0.15)' : 'transparent',
          borderColor: isHovered ? '#88D900' : 'rgba(136, 217, 0, 0.4)',
          boxShadow: isHovered ? '0 0 30px rgba(136, 217, 0, 0.4)' : '0 0 10px rgba(136, 217, 0, 0.1)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.2 }}
      />
    </>
  );
};
