import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types/app';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onImageClick?: (img: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onImageClick }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/85 backdrop-blur-lg"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 60 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 60 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-[#151515] border border-[#88D900]/40 rounded-t-[28px] sm:rounded-[30px] shadow-2xl overflow-y-auto text-white p-5 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag Handle (mobile) */}
          <div className="sm:hidden w-10 h-1 rounded-full bg-white/20 mx-auto mb-4" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#090909] border border-white/10 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all z-10"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#88D900]/10 border border-[#88D900]/30 text-[#88D900] text-[10px] sm:text-xs font-bold font-button uppercase tracking-wider mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>{project.category}</span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-2 sm:mb-3 pr-8">
            {project.title}
          </h2>

          <p className="font-body text-[#9CA3AF] text-xs sm:text-base mb-5 sm:mb-6 leading-relaxed">
            {project.fullOverview}
          </p>

          {/* Hero Banner — Full Resolution */}
          <div
            className="relative w-full rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/10 mb-6 sm:mb-8 bg-[#0a0a0a] cursor-zoom-in group"
            onClick={() => onImageClick?.(project.heroImage)}
            title="Click to view in Ultra HD"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full object-contain max-h-[75vh] group-hover:scale-[1.02] transition-transform duration-700"
              style={{ imageRendering: 'high-quality' }}
            />
            {/* HD click hint */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 border border-[#88D900]/30 text-[#88D900] text-[9px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              ✦ Click for Ultra HD
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Tools Stack Pills */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-heading font-bold text-[10px] sm:text-xs uppercase text-white tracking-wider mb-2 sm:mb-3">
              Tools &amp; Deliverables:
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#090909] border border-[#88D900]/30 text-[#88D900] text-[10px] sm:text-xs font-heading font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] bg-[#090909] border border-white/10 mb-6 sm:mb-8">
            <h4 className="font-heading font-bold text-xs sm:text-sm uppercase text-white tracking-wider mb-3 sm:mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#88D900]" />
              <span>Key Deliverables &amp; Design Specs:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900] shrink-0 mt-0.5" />
                  <span className="font-body leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="p-4 rounded-2xl bg-[#090909] border border-white/10">
              <span className="text-[9px] sm:text-[10px] font-heading font-extrabold text-[#88D900] uppercase tracking-wider block mb-1">The Challenge</span>
              <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">{project.caseStudy.problem}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#090909] border border-white/10">
              <span className="text-[9px] sm:text-[10px] font-heading font-extrabold text-[#88D900] uppercase tracking-wider block mb-1">The Design Solution</span>
              <p className="text-[11px] sm:text-xs text-[#9CA3AF] leading-relaxed">{project.caseStudy.solution}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#090909] border border-[#88D900]/30">
              <span className="text-[9px] sm:text-[10px] font-heading font-extrabold text-[#88D900] uppercase tracking-wider block mb-1">Measured Impact</span>
              <p className="text-[11px] sm:text-xs text-white leading-relaxed font-semibold">{project.caseStudy.impact}</p>
            </div>
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h4 className="font-heading font-bold text-[10px] sm:text-xs uppercase text-white tracking-wider mb-3">Project Visual Showcase:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.screenshots.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] cursor-zoom-in group"
                    onClick={() => onImageClick?.(img)}
                    title="Click to view in Ultra HD"
                  >
                    <img
                      src={img}
                      alt={`Screenshot ${idx}`}
                      className="w-full object-contain max-h-[60vh] group-hover:scale-[1.02] transition-transform duration-500"
                      style={{ imageRendering: 'high-quality' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon bg-[#88D900] text-black font-extrabold text-xs uppercase"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <button onClick={onClose} className="text-xs font-button font-bold text-[#9CA3AF] hover:text-white">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
