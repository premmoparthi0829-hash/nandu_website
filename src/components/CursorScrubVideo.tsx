import React, { useEffect, useRef, useState } from 'react';

export interface CursorScrubVideoProps {
  videoFile?: string;
  axis?: 'horizontal' | 'vertical';
  reverse?: boolean;
  trackingArea?: 'component' | 'window';
  smoothing?: number;
  objectFit?: 'cover' | 'contain' | 'fill';
  showPoster?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * CursorScrubVideo - Framer Code Component
 * Renders a video whose playhead currentTime is driven by cursor position.
 */
export const CursorScrubVideo: React.FC<CursorScrubVideoProps> = ({
  videoFile,
  axis = 'horizontal',
  reverse = false,
  trackingArea = 'component',
  smoothing = 0.22,
  objectFit = 'cover',
  showPoster = true,
  className = '',
  style,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Targets and smooth progress (0 to 1)
  const targetProgressRef = useRef(0.5);
  const currentProgressRef = useRef(0.5);
  const animFrameRef = useRef<number | null>(null);

  // Handle Video Metadata loaded
  const handleLoadedMetadata = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Track Mouse Movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let norm = 0.5;

      if (trackingArea === 'window') {
        if (axis === 'horizontal') {
          norm = e.clientX / (window.innerWidth || 1);
        } else {
          norm = e.clientY / (window.innerHeight || 1);
        }
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          if (axis === 'horizontal') {
            norm = (e.clientX - rect.left) / rect.width;
          } else {
            norm = (e.clientY - rect.top) / rect.height;
          }
        }
      }

      // Clamp between 0 and 1
      norm = Math.max(0, Math.min(1, norm));

      if (reverse) {
        norm = 1 - norm;
      }

      targetProgressRef.current = norm;
    };

    if (trackingArea === 'window') {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      const container = containerRef.current;
      if (container) {
        container.addEventListener('mousemove', handleMouseMove);
      }
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [axis, reverse, trackingArea]);

  // 60 FPS Lerp Smoothing Animation Loop
  useEffect(() => {
    const updatePlayhead = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;

      // Lerp formula with smoothing clamp (0.02 - 1)
      const factor = Math.max(0.02, Math.min(1, smoothing));
      const next = current + (target - current) * factor;
      currentProgressRef.current = next;

      const video = videoRef.current;
      if (video && video.duration && !isNaN(video.duration)) {
        const timeToSet = next * video.duration;
        if (Math.abs(video.currentTime - timeToSet) > 0.005) {
          video.currentTime = timeToSet;
        }
      }

      animFrameRef.current = requestAnimationFrame(updatePlayhead);
    };

    animFrameRef.current = requestAnimationFrame(updatePlayhead);

    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [smoothing]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      {videoFile ? (
        <video
          ref={videoRef}
          src={videoFile}
          onLoadedMetadata={handleLoadedMetadata}
          preload="auto"
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: objectFit,
            display: isLoaded || !showPoster ? 'block' : 'none',
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-400 text-sm font-mono p-4 text-center">
          No Video File Provided (Select videoFile prop)
        </div>
      )}
    </div>
  );
};

// Framer Property Controls Annotations (for Framer Canvas Compatibility)
/* @ts-ignore */
if (typeof addPropertyControls !== 'undefined') {
  /* @ts-ignore */
  addPropertyControls(CursorScrubVideo, {
    videoFile: {
      type: 'file',
      title: 'Video File',
      allowedFileTypes: ['mp4', 'mov', 'webm'],
    },
    axis: {
      type: 'enum',
      title: 'Axis',
      options: ['horizontal', 'vertical'],
      optionTitles: ['Horizontal', 'Vertical'],
      defaultValue: 'horizontal',
    },
    reverse: {
      type: 'boolean',
      title: 'Reverse',
      defaultValue: false,
    },
    trackingArea: {
      type: 'enum',
      title: 'Tracking Area',
      options: ['component', 'window'],
      optionTitles: ['Component', 'Window'],
      defaultValue: 'component',
    },
    smoothing: {
      type: 'number',
      title: 'Smoothing',
      min: 0.02,
      max: 1,
      step: 0.01,
      defaultValue: 0.22,
    },
    objectFit: {
      type: 'enum',
      title: 'Object Fit',
      options: ['cover', 'contain', 'fill'],
      optionTitles: ['Cover', 'Contain', 'Fill'],
      defaultValue: 'cover',
    },
    showPoster: {
      type: 'boolean',
      title: 'Show Poster',
      defaultValue: true,
    },
  });
}
