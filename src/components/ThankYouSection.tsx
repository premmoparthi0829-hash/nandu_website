import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Dribbble, Instagram, Linkedin, Github, Heart, Sparkles } from 'lucide-react';

interface ThankYouSectionProps {
  onOpenInquiry: () => void;
}

const WavyDeco = ({ color = '#F59E0B', className = '' }: { color?: string; className?: string }) => (
  <svg viewBox="0 0 160 28" fill="none" className={className}>
    <path d="M0 14 Q13 0 26 14 Q39 28 52 14 Q65 0 78 14 Q91 28 104 14 Q117 0 130 14 Q143 28 156 14"
      stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

export const ThankYouSection: React.FC<ThankYouSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="thankyou" className="relative overflow-hidden bg-[#0A0A0A] text-white py-24 px-4 sm:px-12 flex flex-col items-center justify-center text-center">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />

      {/* Golden ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.14)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-4">
        
        {/* Overline script */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script italic text-[#F59E0B]"
          style={{ fontFamily: '"Dancing Script",cursive', fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
        >
          For Your Attention &amp; Time
        </motion.p>

        {/* Main Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-black uppercase text-white leading-[0.88] tracking-tight drop-shadow-2xl"
          style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)' }}
        >
          THANK YOU
        </motion.h2>

        <WavyDeco color="#F59E0B" className="w-40 sm:w-52 opacity-90 mx-auto my-2" />

        <p className="text-sm sm:text-base text-white/80 font-sans font-semibold max-w-lg leading-relaxed mb-4">
          Ready to build your next iconic brand identity or visual campaign? Let's turn your ideas into visual masterpieces.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenInquiry}
          className="px-9 py-4 rounded-full bg-[#F59E0B] text-black font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:bg-white transition-all flex items-center gap-2.5 shadow-[0_10px_30px_rgba(245,158,11,0.3)]"
        >
          <span>START A PROJECT TOGETHER</span>
          <ArrowUpRight className="w-4 h-4 stroke-[3]" />
        </motion.button>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {[
            { icon: Dribbble, label: 'Dribbble' },
            { icon: Instagram, label: 'Instagram' },
            { icon: Linkedin, label: 'LinkedIn' },
            { icon: Github, label: 'GitHub' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href="#contact"
                title={item.label}
                className="p-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-[#F59E0B] hover:bg-[#F59E0B]/10 transition-all shadow-md"
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
