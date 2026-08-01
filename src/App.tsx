import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { DesignProcess } from './components/DesignProcess';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen w-full max-w-full bg-[#090909] text-white selection:bg-[#EC4899] selection:text-white overflow-x-hidden font-body">
      {/* Dual Ring Glowing Custom Cursor */}
      <CustomCursor />

      {/* Glassmorphic Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* High-Fashion Editorial Hero Section (Inspired by Image 2 - Lamoda Layout) */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* About Section */}
      <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Projects & Case Studies */}
      <FeaturedProjects />

      {/* Working Process */}
      <DesignProcess />

      {/* Experience Timeline */}
      <TimelineSection />

      {/* Testimonials Marquee */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      </div>
  );
}

export default App;
