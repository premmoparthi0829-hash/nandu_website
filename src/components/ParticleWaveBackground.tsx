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

    const isMobile = window.innerWidth < 768;

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

    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle Wave Configuration
    const numWaves = isMobile ? 3 : 5;
    const particlesPerWave = isMobile ? 40 : 75;
    const numFloating = isMobile ? 25 : 55;

    interface Particle {
      xRatio: number; // 0 to 1 across width
      waveIndex: number;
      offsetY: number;
      baseRadius: number;
      pulseSpeed: number;
      pulsePhase: number;
    }

    interface FloatingParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }

    // Initialize Wave Particles
    const waveParticles: Particle[] = [];
    for (let w = 0; w < numWaves; w++) {
      for (let p = 0; p < particlesPerWave; p++) {
        waveParticles.push({
          xRatio: p / (particlesPerWave - 1),
          waveIndex: w,
          offsetY: (w - (numWaves - 1) / 2) * (isMobile ? 24 : 35),
          baseRadius: 1.2 + Math.random() * 1.6,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    // Color interpolation helper
    const getParticleColor = (xRatio: number, opacity: number) => {
      // Left: Pink/Magenta (#ec4899), Center: Violet/Purple (#a855f7), Right: Cyan/Blue (#06b6d4)
      if (xRatio < 0.4) {
        // Magenta -> Purple
        const factor = xRatio / 0.4;
        const r = Math.round(236 + (168 - 236) * factor);
        const g = Math.round(72 + (85 - 72) * factor);
        const b = Math.round(153 + (247 - 153) * factor);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      } else {
        // Purple -> Cyan
        const factor = (xRatio - 0.4) / 0.6;
        const r = Math.round(168 + (6 - 168) * factor);
        const g = Math.round(85 + (182 - 85) * factor);
        const b = Math.round(247 + (212 - 247) * factor);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }
    };

    // Initialize Ambient Floating Particles
    const floatingParticles: FloatingParticle[] = [];
    for (let i = 0; i < numFloating; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const xRatio = x / (width || 1);
      floatingParticles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 0.8 + Math.random() * 1.4,
        opacity: 0.2 + Math.random() * 0.5,
        color: getParticleColor(xRatio, 0.4),
      });
    }

    // Main Render Loop
    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Render Floating Particles
      for (let i = 0; i < floatingParticles.length; i++) {
        const fp = floatingParticles[i];
        fp.x += fp.vx;
        fp.y += fp.vy;

        if (fp.x < 0) fp.x = width;
        if (fp.x > width) fp.x = 0;
        if (fp.y < 0) fp.y = height;
        if (fp.y > height) fp.y = 0;

        ctx.beginPath();
        ctx.arc(fp.x, fp.y, fp.radius, 0, Math.PI * 2);
        ctx.fillStyle = fp.color;
        ctx.fill();
      }

      // Group wave particles by waveIndex to draw grid lines
      const waveGrid: { x: number; y: number; color: string; opacity: number }[][] = Array.from(
        { length: numWaves },
        () => []
      );

      // Compute position for each wave particle
      const centerY = height * 0.52;

      for (let i = 0; i < waveParticles.length; i++) {
        const p = waveParticles[i];
        const x = p.xRatio * width;

        // Wave Sine Calculations (organic flowing wave)
        const freq1 = 0.0035;
        const freq2 = 0.007;
        const sine1 = Math.sin(x * freq1 + time * 1.2 + p.waveIndex * 0.4);
        const sine2 = Math.cos(x * freq2 - time * 0.8 + p.waveIndex * 0.2);

        const waveHeight = (isMobile ? 45 : 75) * sine1 + (isMobile ? 20 : 35) * sine2;
        const y = centerY + waveHeight + p.offsetY;

        // Pulsing opacity
        const opacity = 0.35 + 0.45 * Math.sin(time * 2 + p.pulsePhase);
        const color = getParticleColor(p.xRatio, opacity);

        waveGrid[p.waveIndex].push({ x, y, color, opacity });

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      // Connect adjacent particles along horizontal waves with glowing lines
      for (let w = 0; w < numWaves; w++) {
        const linePts = waveGrid[w];
        if (linePts.length < 2) continue;

        ctx.beginPath();
        ctx.moveTo(linePts[0].x, linePts[0].y);
        for (let i = 1; i < linePts.length; i++) {
          const pt = linePts[i];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = getParticleColor(0.5, 0.08); // subtle ambient connecting line
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // Connect vertical mesh lines across parallel waves
      for (let p = 0; p < particlesPerWave; p++) {
        ctx.beginPath();
        let started = false;
        for (let w = 0; w < numWaves; w++) {
          const pt = waveGrid[w][p];
          if (pt) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y);
              started = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          }
        }
        const xRatio = p / (particlesPerWave - 1);
        ctx.strokeStyle = getParticleColor(xRatio, 0.06);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
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
