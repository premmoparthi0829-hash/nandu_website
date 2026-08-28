import React, { useEffect, useRef } from 'react';

interface ParticleWaveBackgroundProps {
  className?: string;
}

export const ParticleWaveBackground: React.FC<ParticleWaveBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
      } else {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Color Interpolation matching reference image:
    // Left: Hot Pink / Magenta -> Center: Purple / Violet -> Electric Blue -> Right: Cyan / Turquoise
    const getColorRGB = (xRatio: number) => {
      if (xRatio < 0.3) {
        const t = xRatio / 0.3;
        return {
          r: Math.round(244 - 8 * t),
          g: Math.round(114 - 42 * t),
          b: Math.round(182 - 29 * t),
        };
      } else if (xRatio < 0.55) {
        const t = (xRatio - 0.3) / 0.25;
        return {
          r: Math.round(236 + (168 - 236) * t),
          g: Math.round(72 + (85 - 72) * t),
          b: Math.round(153 + (247 - 153) * t),
        };
      } else if (xRatio < 0.75) {
        const t = (xRatio - 0.55) / 0.2;
        return {
          r: Math.round(168 + (59 - 168) * t),
          g: Math.round(85 + (130 - 85) * t),
          b: Math.round(247 + (246 - 247) * t),
        };
      } else {
        const t = (xRatio - 0.75) / 0.25;
        return {
          r: Math.round(59 + (6 - 59) * t),
          g: Math.round(130 + (182 - 130) * t),
          b: Math.round(246 + (212 - 246) * t),
        };
      }
    };

    // Configuration
    const numStreaks = isMobile ? 32 : isTablet ? 55 : 85;
    const numDust = isMobile ? 40 : isTablet ? 80 : 130;

    interface RainStreak {
      xRatio: number;
      x: number;
      y: number; // bottom tip Y position
      length: number;
      speed: number;
      nodeRadius: number;
      opacity: number;
      pulsePhase: number;
    }

    interface DustParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }

    // Initialize Vertical Rain Streaks
    const streaks: RainStreak[] = [];
    for (let i = 0; i < numStreaks; i++) {
      const xRatio = (i + Math.random() * 0.4) / numStreaks;
      streaks.push({
        xRatio,
        x: xRatio * width,
        y: Math.random() * height * 1.2 - height * 0.1,
        length: 80 + Math.random() * (isMobile ? 180 : 320),
        speed: 0.3 + Math.random() * 0.9,
        nodeRadius: 2.2 + Math.random() * 2.2,
        opacity: 0.4 + Math.random() * 0.55,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Initialize Ambient Dust Particles
    const dustParticles: DustParticle[] = [];
    for (let i = 0; i < numDust; i++) {
      dustParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 0.8 + Math.random() * 1.6,
        opacity: 0.25 + Math.random() * 0.5,
      });
    }

    // Render Animation Loop
    const render = () => {
      time += 0.01;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Ambient Floating Dust Particles
      for (let i = 0; i < dustParticles.length; i++) {
        const d = dustParticles[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        const xRatio = d.x / (width || 1);
        const color = getColorRGB(xRatio);
        const op = d.opacity * (0.6 + 0.4 * Math.sin(time * 3 + i));

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${op})`;
        ctx.fill();
      }

      // 2. Draw Vertical Cyber Laser Streaks & Tip Glowing Nodes
      for (let i = 0; i < streaks.length; i++) {
        const s = streaks[i];

        // Move vertical trail down slowly
        s.y += s.speed;
        if (s.y - s.length > height) {
          s.y = -50;
          s.xRatio = Math.random();
          s.x = s.xRatio * width;
          s.length = 80 + Math.random() * (isMobile ? 180 : 320);
        }

        let drawX = s.x;

        // Subtle Mouse Deflection
        const dx = drawX - mouseX;
        const dy = s.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (1 - dist / 140) * 16;
          drawX += (dx / dist) * force;
        }

        const color = getColorRGB(s.xRatio);
        const pulse = 0.75 + 0.25 * Math.sin(time * 2.5 + s.pulsePhase);
        const currentOpacity = s.opacity * pulse;

        // A) Draw Vertical Fading Laser Gradient Line
        const grad = ctx.createLinearGradient(drawX, s.y - s.length, drawX, s.y);
        grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        grad.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${currentOpacity * 0.45})`);
        grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, ${currentOpacity * 0.95})`);

        ctx.beginPath();
        ctx.moveTo(drawX, s.y - s.length);
        ctx.lineTo(drawX, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isMobile ? 1.2 : 1.8;
        ctx.stroke();

        // B) Draw Bright Glowing Tip Node
        ctx.beginPath();
        ctx.arc(drawX, s.y, s.nodeRadius, 0, Math.PI * 2);

        if (!isMobile && currentOpacity > 0.4) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className || 'absolute inset-0 w-full h-full pointer-events-none z-0'}
    />
  );
};
