import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle2, Flame, Crown, Layout, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

const renderTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();

  if (techLower.includes('photoshop')) {
    return (
      <div
        key={tech}
        title="Adobe Photoshop"
        className="w-8 h-8 rounded-xl bg-[#001E36] border border-[#31A8FF]/40 text-[#31A8FF] flex items-center justify-center font-black text-xs shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <span className="font-extrabold text-[12px] tracking-tight text-[#31A8FF]">Ps</span>
      </div>
    );
  }

  if (techLower.includes('illustrator')) {
    return (
      <div
        key={tech}
        title="Adobe Illustrator"
        className="w-8 h-8 rounded-xl bg-[#331000] border border-[#FF9A00]/40 text-[#FF9A00] flex items-center justify-center font-black text-xs shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <span className="font-extrabold text-[12px] tracking-tight text-[#FF9A00]">Ai</span>
      </div>
    );
  }

  if (techLower.includes('indesign')) {
    return (
      <div
        key={tech}
        title="Adobe InDesign"
        className="w-8 h-8 rounded-xl bg-[#2B0017] border border-[#FF3366]/40 text-[#FF3366] flex items-center justify-center font-black text-xs shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <span className="font-extrabold text-[12px] tracking-tight text-[#FF3366]">Id</span>
      </div>
    );
  }

  if (techLower.includes('figma')) {
    return (
      <div
        key={tech}
        title="Figma"
        className="w-8 h-8 rounded-xl bg-[#151515] border border-white/20 flex items-center justify-center shadow-md hover:scale-115 hover:-rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      </div>
    );
  }

  if (techLower.includes('firefly')) {
    return (
      <div
        key={tech}
        title="Adobe Firefly AI"
        className="w-8 h-8 rounded-xl bg-[#3B0A00] border border-[#FF5722]/40 text-[#FF5722] flex items-center justify-center shadow-md hover:scale-115 hover:rotate-12 transition-all duration-200 cursor-pointer shrink-0"
      >
        <Flame className="w-4 h-4 fill-[#FF5722] text-[#FF5722]" />
      </div>
    );
  }

  if (techLower.includes('brand')) {
    return (
      <div
        key={tech}
        title="Brand Strategy"
        className="w-8 h-8 rounded-xl bg-[#151515] border border-[#88D900]/40 text-[#88D900] flex items-center justify-center shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <Crown className="w-4 h-4 text-[#88D900]" />
      </div>
    );
  }

  if (techLower.includes('ui') || techLower.includes('ux')) {
    return (
      <div
        key={tech}
        title="UI/UX Design"
        className="w-8 h-8 rounded-xl bg-[#151515] border border-[#F472B6]/40 text-[#F472B6] flex items-center justify-center shadow-md hover:scale-115 hover:-rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <Layout className="w-4 h-4 text-[#F472B6]" />
      </div>
    );
  }

  if (techLower.includes('canva')) {
    return (
      <div
        key={tech}
        title="Canva"
        className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8] text-white flex items-center justify-center shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5c-2.485 0-4.5-2.015-4.5-4.5S10.515 7.5 13 7.5c1.464 0 2.766.7 3.597 1.78l-1.632 1.306C14.444 9.94 13.766 9.5 13 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.766 0 1.444-.44 1.965-1.086l1.632 1.306C15.766 15.8 14.464 16.5 13 16.5z" />
        </svg>
      </div>
    );
  }

  if (techLower.includes('chatgpt')) {
    return (
      <div
        key={tech}
        title="ChatGPT"
        className="w-8 h-8 rounded-xl bg-[#064E3B] border border-[#34D399]/40 text-[#34D399] flex items-center justify-center shadow-md hover:scale-115 hover:-rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <svg className="w-4 h-4 fill-current text-[#34D399]" viewBox="0 0 24 24">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 23.8a6.0558 6.0558 0 0 0 5.7523-4.1819 5.9847 5.9847 0 0 0 3.9977-2.9 6.0462 6.0462 0 0 0-.728-7.097zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.081 4.7792-2.7582a.791.791 0 0 0 .3927-.6813v-6.7369l2.0232 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4986 4.4949z" />
        </svg>
      </div>
    );
  }

  if (techLower.includes('midjourney')) {
    return (
      <div
        key={tech}
        title="Midjourney AI"
        className="w-8 h-8 rounded-xl bg-[#2A004E] border border-[#D8B4FE]/40 text-[#D8B4FE] flex items-center justify-center shadow-md hover:scale-115 hover:rotate-12 transition-all duration-200 cursor-pointer shrink-0"
      >
        <svg className="w-4 h-4 fill-current text-[#D8B4FE]" viewBox="0 0 24 24">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </div>
    );
  }

  if (techLower.includes('unsplash')) {
    return (
      <div
        key={tech}
        title="Unsplash"
        className="w-8 h-8 rounded-xl bg-[#111111] border border-white/20 text-white flex items-center justify-center shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
        </svg>
      </div>
    );
  }

  if (techLower.includes('freepik')) {
    return (
      <div
        key={tech}
        title="Freepik"
        className="w-8 h-8 rounded-xl bg-[#0A2540] border border-[#0066FF]/40 text-[#0066FF] flex items-center justify-center shadow-md hover:scale-115 hover:-rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <svg className="w-4 h-4 fill-current text-[#0066FF]" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
    );
  }

  if (techLower.includes('photopea')) {
    return (
      <div
        key={tech}
        title="Photopea"
        className="w-8 h-8 rounded-xl bg-[#182026] border border-[#00E5FF]/40 text-[#00E5FF] flex items-center justify-center font-black text-xs shadow-md hover:scale-115 hover:rotate-6 transition-all duration-200 cursor-pointer shrink-0"
      >
        <span className="font-extrabold text-[12px] tracking-tight text-[#00E5FF]">Pe</span>
      </div>
    );
  }

  return (
    <div
      key={tech}
      title={tech}
      className="w-8 h-8 rounded-xl bg-[#151515] border border-[#88D900]/40 text-[#88D900] flex items-center justify-center shadow-md hover:scale-115 transition-all duration-200 cursor-pointer shrink-0"
    >
      <Sparkles className="w-4 h-4 text-[#88D900]" />
    </div>
  );
};

export const TimelineSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            DESIGN <span className="text-[#88D900]">EXPERIENCE</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            4.5+ years of driving creative visual strategy across agencies, clean tech enterprises, and global brands.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        {/* On mobile: simple stacked cards. On sm+: left-border timeline with absolute date pills */}
        <div className="flex flex-col gap-6 sm:gap-10 relative sm:ml-44 sm:pl-10 sm:border-l-2 sm:border-dashed sm:border-[#88D900]/30">

          {EXPERIENCES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Duration Pill — stacked on mobile, absolute on sm+ with zero node overlap */}
              <div className="mb-3 sm:mb-0 sm:absolute sm:-left-48 sm:top-2 sm:w-36 flex sm:justify-end z-10">
                <span className="px-3 py-1.5 rounded-full bg-[#F472B6] text-black font-button font-extrabold text-[10px] sm:text-xs shadow-[0_0_15px_rgba(244,114,182,0.3)] uppercase whitespace-nowrap tracking-wider">
                  {item.duration}
                </span>
              </div>

              {/* Neon Node Marker — only visible on sm+ */}
              <div className="hidden sm:block absolute -left-[47px] top-2.5 w-5 h-5 rounded-full bg-[#88D900] border-4 border-[#090909] shadow-[0_0_15px_#88D900] group-hover:scale-125 transition-transform z-20" />

              {/* Experience Card */}
              <div className="luxury-card p-5 sm:p-8 hover:border-[#88D900]/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1 sm:mb-2">
                  <h3 className="font-heading font-bold text-lg sm:text-2xl text-white group-hover:text-[#88D900] transition-colors">
                    {item.company}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] sm:text-xs text-[#9CA3AF] shrink-0">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#88D900]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-heading font-bold text-[#88D900] mb-3 sm:mb-4">
                  {item.role}
                </h4>

                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] sm:text-sm text-[#9CA3AF]">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900] shrink-0 mt-0.5" />
                      <span className="font-body leading-relaxed text-white/90">{resp}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-white/10">
                  {item.techStack.map(renderTechIcon)}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};
