import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = PERSONAL_INFO.resumeUrl;
    element.download = 'Nandini_Vaddepalli_Resume.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 60 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 60 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-[28px] sm:rounded-[30px] p-5 sm:p-8 bg-[#151515] border border-[#88D900]/40 shadow-2xl relative text-white"
        >
          {/* Drag Handle (mobile) */}
          <div className="sm:hidden w-10 h-1 rounded-full bg-white/20 mx-auto mb-4" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#090909] text-white hover:text-[#88D900] transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#090909] border border-[#88D900] text-[#88D900] flex items-center justify-center font-heading font-extrabold text-lg sm:text-xl shadow-[0_0_15px_rgba(136,217,0,0.3)] shrink-0">
              {PERSONAL_INFO.logoText}
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-2xl text-white uppercase">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#88D900] font-heading font-bold uppercase tracking-wider">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 text-sm text-[#9CA3AF] border-t border-b border-white/10 py-5 sm:py-6">
            <div>
              <h4 className="font-heading font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900]" />
                <span>Career Timeline Snapshot</span>
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {EXPERIENCES.map((exp) => (
                  <li key={exp.id} className="p-3 rounded-xl sm:rounded-2xl bg-[#090909] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    <div>
                      <span className="font-heading font-bold text-white block text-xs sm:text-sm">{exp.company}</span>
                      <span className="text-[10px] sm:text-xs text-[#9CA3AF]">{exp.role}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#88D900] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#151515] shrink-0 self-start sm:self-auto">
                      {exp.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900]" />
                <span>Verified Tools &amp; Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['Photoshop (98%)', 'Illustrator (96%)', 'Figma (94%)', 'InDesign (90%)', 'Canva Pro (95%)', 'Firefly AI (92%)'].map((tool) => (
                  <span key={tool} className="px-2.5 sm:px-3 py-1 rounded-full bg-[#090909] border border-[#88D900]/30 text-[#88D900] font-mono text-[9px] sm:text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-[10px] sm:text-xs text-[#9CA3AF]">
              Official CV PDF Document · 4.5+ Yrs Pro Experience
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink px-4 py-2 text-xs font-button uppercase tracking-wider font-extrabold flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform shrink-0"
              >
                <span>View CV PDF ↗</span>
              </a>
              <button
                onClick={handleDownload}
                className="btn-neon bg-[#88D900] text-black hover:bg-[#9EF01A] text-xs uppercase font-extrabold w-full sm:w-auto justify-center px-4 py-2 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
