import React from 'react';
import { ArrowUp, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 bg-[#090909] text-white border-t border-white/10 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left w-full">
        
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-[#151515] border border-[#88D900] text-[#88D900] flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm shadow-[0_0_15px_rgba(136,217,0,0.2)] shrink-0">
            {PERSONAL_INFO.logoText}
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-[#9CA3AF] font-body">
              Creative Graphic Designer &amp; Visual Brand Specialist
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-[11px] sm:text-xs text-[#9CA3AF] font-body">
          © {new Date().getFullYear()} Nandini Vaddepalli. All rights reserved. Designed with luxury precision.
        </div>

        {/* Social Icons & Back To Top */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-[#151515] border border-white/10 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 sm:p-2.5 rounded-full bg-[#151515] border border-white/10 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-neon bg-[#88D900] text-black hover:bg-[#9EF01A] p-2.5 sm:p-3 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(136,217,0,0.3)] shrink-0"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
