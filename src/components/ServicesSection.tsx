import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Smartphone, Layers, Flame, Figma, LayoutDashboard,
  Globe, Cpu, MapPin, CreditCard, Cloud, ArrowUpRight, CheckCircle2, X
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { ServiceItem } from '../types/app';

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smartphone': return Smartphone;
    case 'Layers': return Layers;
    case 'Flame': return Flame;
    case 'Figma': return Figma;
    case 'LayoutDashboard': return LayoutDashboard;
    case 'Globe': return Globe;
    case 'Cpu': return Cpu;
    case 'MapPin': return MapPin;
    case 'CreditCard': return CreditCard;
    case 'Cloud': return Cloud;
    default: return Figma;
  }
};

interface ServicesSectionProps {
  onOpenInquiry?: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const { services } = useData();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquire = (serviceTitle: string) => {
    if (onOpenInquiry) {
      onOpenInquiry(serviceTitle);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      <div className="absolute top-1/2 right-10 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#88D900]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>SOLUTIONS &amp; EXPERTISE</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            SPECIALIZED <span className="text-[#88D900]">DESIGN SERVICES</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-2xl px-2">
            From complete brand identity design guidelines to tactile print packaging and interactive UI systems.
          </p>
        </motion.div>

        {/* Services Grid — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const IconComp = getServiceIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.015 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  hover: { duration: 0.2, ease: 'easeOut' }
                }}
                className="luxury-card p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-[#88D900]/60 hover:shadow-[0_15px_30px_-8px_rgba(136,217,0,0.25)] transition-all duration-300 cursor-pointer"
              >
                {/* Sheen sweep animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#88D900]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                <div className="absolute top-0 right-0 w-24 sm:w-28 h-24 sm:h-28 bg-[#88D900]/5 rounded-full blur-2xl group-hover:bg-[#88D900]/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#090909] border border-[#88D900]/30 text-[#88D900] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#88D900] transition-all shrink-0">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-heading font-extrabold px-2.5 sm:px-3 py-1 rounded-full bg-[#090909] border border-white/10 text-[#88D900] uppercase tracking-wider ml-2 text-right leading-tight">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-[#88D900] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-[11px] sm:text-sm text-[#9CA3AF] leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-white">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-[11px] sm:text-xs font-button font-bold text-[#88D900] hover:underline"
                  >
                    View Deliverables
                  </button>
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#090909] border border-white/10 text-white hover:bg-[#88D900] hover:text-[#090909] hover:border-[#88D900] flex items-center justify-center transition-all shrink-0"
                    title="Inquire"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#151515] border border-[#88D900]/40 rounded-[24px] sm:rounded-[30px] p-5 sm:p-8 text-white max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-[#090909] text-white hover:text-[#88D900]"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#88D900]/10 text-[#88D900] text-[10px] sm:text-xs font-bold mb-3 sm:mb-4">
                {selectedService.category}
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl mb-3 sm:mb-4 text-[#88D900]">
                {selectedService.title}
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#9CA3AF] mb-4 sm:mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#090909] border border-white/10 mb-4 sm:mb-6">
                <span className="font-heading font-bold text-xs text-white uppercase block mb-2 sm:mb-3">
                  Key Deliverables:
                </span>
                <div className="space-y-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] sm:text-xs text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#88D900] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    const s = selectedService.title;
                    setSelectedService(null);
                    handleInquire(s);
                  }}
                  className="btn-neon bg-[#88D900] text-black font-extrabold text-xs uppercase"
                >
                  Book Service ↗
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
