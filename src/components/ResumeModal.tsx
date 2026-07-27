import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/pdf simulation download
    const element = document.createElement('a');
    const file = new Blob([
      `NANDINI VADDEPALLI
Creative Graphic Designer & Visual Brand Specialist
Experience: 4.5+ Years
Email: nandinivaddepalli.design@gmail.com | Location: Hyderabad, India

CAREER SUMMARY
Creative Graphic Designer with 4.5+ years of experience designing visual brand identity systems, UI/UX design components, digital marketing graphics, and AI-assisted motion visual assets.

EXPERIENCE TIMELINE
- 2026: All Hands Global | Lead Brand & Visual Strategist
- 2024: Freyr Energy | Senior Visual Graphic Designer
- 2024: Mantra Technologies | Creative UI/UX & Brand Specialist
- 2022: Sharplogiec | Graphic Designer & Brand Associate

CORE SKILLS
Adobe Photoshop, Adobe Illustrator, Figma, Canva, Adobe Firefly, Sora AI, Brand Strategy, Layout Grid Systems, Vector Typography.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Nandini_Vaddepalli_Resume.txt';
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
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full rounded-3xl p-8 glass-panel-light dark:glass-panel-dark border border-white/20 shadow-2xl relative my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-primary-light dark:text-primary-dark hover:text-accent"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl accent-gradient-bg text-white shadow-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-primary-light dark:text-primary-dark">
                NANDINI VADDEPALLI
              </h3>
              <p className="text-xs text-accent font-semibold">
                Creative Graphic Designer &amp; Visual Brand Specialist
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-secondary-light dark:text-secondary-dark border-t border-b border-gray-200 dark:border-gray-800 py-6">
            <div>
              <h4 className="font-heading font-bold text-primary-light dark:text-primary-dark text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                <span>Executive Experience Snapshot</span>
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between">
                  <span className="font-semibold text-primary-light dark:text-primary-dark">All Hands Global — Lead Brand Strategist</span>
                  <span className="font-mono text-accent">2026</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-primary-light dark:text-primary-dark">Freyr Energy — Sr. Visual Graphic Designer</span>
                  <span className="font-mono text-accent">2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-primary-light dark:text-primary-dark">Mantra Technologies — UI/UX &amp; Brand Specialist</span>
                  <span className="font-mono text-accent">2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-primary-light dark:text-primary-dark">Sharplogiec — Graphic Designer</span>
                  <span className="font-mono text-accent">2022</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-primary-light dark:text-primary-dark text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>Verified Core Tools &amp; Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Photoshop ★★★★★', 'Illustrator ★★★★★', 'Figma ★★★★★', 'Canva ★★★★★', 'Adobe Firefly ★★★★★', 'Sora AI ★★★★★'].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded-lg bg-accent/15 text-accent font-semibold text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-secondary-light dark:text-secondary-dark">
              Verified PDF Document • 4.5+ Yrs
            </span>

            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-full accent-gradient-bg text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
