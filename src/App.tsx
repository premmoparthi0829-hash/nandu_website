import React, { useState } from 'react';
import { DesignTheme } from './types/app';
import { CreamyHeader } from './components/CreamyHeader';
import { CreamyHero } from './components/CreamyHero';
import { CreamyMenu } from './components/CreamyMenu';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CreamyFAQ } from './components/CreamyFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [activeTheme, setActiveTheme] = useState<DesignTheme>('mint');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Brand Identity Systems');

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9ED] dark:bg-[#081C15] text-[#1B4332] dark:text-white transition-colors duration-300 overflow-x-hidden font-sans selection:bg-[#52B788] selection:text-white">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <CreamyHeader
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Hero Section */}
      <CreamyHero
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* About Section (Second Page) */}
      <AboutSection />

      {/* Explore Creative Services Section */}
      <CreamyMenu onOpenInquiry={handleOpenInquiry} />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Projects & Case Studies */}
      <FeaturedProjects />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Experience Timeline */}
      <TimelineSection />

      {/* Testimonials Marquee */}
      <TestimonialsSection />

      {/* FAQ Accordion (Matching Image 5 Layout) */}
      <CreamyFAQ />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Project Inquiry Drawer */}
      <CartDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        selectedService={selectedService}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
