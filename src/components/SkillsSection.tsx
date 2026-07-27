import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { OrganicWave } from './OrganicWave';

const tools = [
  { abbr: 'Ps', name: 'Photoshop', bg: '#001E36', border: '#00A4E4', color: '#00A4E4', pct: 98 },
  { abbr: 'Ai', name: 'Illustrator', bg: '#330000', border: '#FF9A00', color: '#FF9A00', pct: 96 },
  { abbr: 'Fg', name: 'Figma', bg: '#ffffff', border: '#F24E1E', color: '#2D6A4F', pct: 94 },
  { abbr: 'Id', name: 'InDesign', bg: '#49021F', border: '#FF3366', color: '#FF3366', pct: 90 },
  { abbr: 'Cn', name: 'Canva Pro', bg: '#e6fafa', border: '#00C4CC', color: '#00C4CC', pct: 95 },
  { abbr: 'Ff', name: 'Firefly AI', bg: '#2E0B5B', border: '#A855F7', color: '#A855F7', pct: 92 },
  { abbr: 'Ae', name: 'After Effects', bg: '#00005C', border: '#9999FF', color: '#9999FF', pct: 85 },
  { abbr: 'Sr', name: 'Sora AI', bg: '#0F172A', border: '#38BDF8', color: '#38BDF8', pct: 88 },
];

const skills = [
  { name: 'Brand Identity Design', pct: 98, category: 'Branding' },
  { name: 'Social Media Creatives', pct: 96, category: 'Digital' },
  { name: 'Print & Packaging', pct: 92, category: 'Print' },
  { name: 'Advertising Design', pct: 95, category: 'Ads' },
  { name: 'UI/UX & Web Design', pct: 88, category: 'Digital' },
  { name: 'Motion & Reel Design', pct: 84, category: 'Motion' },
];

export const SkillsSection: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section id="skills" className="relative bg-mint-theme text-white overflow-hidden">
      <OrganicWave fillColor="#FFF9ED" flipY={true} />

      <div className="py-14 px-4 sm:px-12 max-w-7xl mx-auto z-10 relative">

        {/* Section Header — compact */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white font-heading font-extrabold text-[10px] uppercase tracking-widest mb-2">
              <Sparkles className="w-3 h-3" />
              <span>TOOLKIT</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white leading-tight">
              Skills &amp; <span className="underline decoration-white/50 decoration-wavy underline-offset-6">Tools</span>
            </h2>
          </div>
          <p className="text-xs text-white/80 max-w-xs font-semibold font-sans leading-relaxed">
            Industry-standard design software and AI tools used to craft premium brand visuals.
          </p>
        </div>

        {/* ── TOOLS — compact icon pill row ── */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-12">
          {tools.map((t) => (
            <motion.div
              key={t.abbr}
              onMouseEnter={() => setHoveredTool(t.abbr)}
              onMouseLeave={() => setHoveredTool(null)}
              whileHover={{ y: -4, scale: 1.06 }}
              className="flex flex-col items-center gap-1.5 cursor-default"
            >
              {/* Tool Icon Badge */}
              <div
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-mono font-black text-base sm:text-lg shadow-lg border-2 transition-all duration-200"
                style={{ background: t.bg, borderColor: t.border, color: t.color }}
              >
                {t.abbr}

                {/* Tooltip on hover */}
                {hoveredTool === t.abbr && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-black/90 text-white text-[10px] font-bold z-30 pointer-events-none"
                  >
                    {t.name}
                  </motion.div>
                )}
              </div>

              {/* Tool name + proficiency pill */}
              <span className="text-[9px] text-white/70 font-semibold truncate max-w-[56px] text-center">
                {t.pct}%
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/15 mb-10" />

        {/* ── SKILLS — compact horizontal bar rows ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1.5"
            >
              {/* Label row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-white text-[9px] font-heading font-extrabold uppercase tracking-wider">
                    {s.category}
                  </span>
                  <span className="text-xs font-heading font-extrabold text-white">
                    {s.name}
                  </span>
                </div>
                <span className="text-xs font-heading font-black text-white/80">
                  {s.pct}%
                </span>
              </div>

              {/* Slim progress bar */}
              <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: i * 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-white/80 to-white"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <OrganicWave fillColor="#FFF9ED" />
    </section>
  );
};
