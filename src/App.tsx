import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { MoreCreativeWorksSection } from './components/MoreCreativeWorksSection';
import { BrandsWorkedSection } from './components/BrandsWorkedSection';
import { DesignProcess } from './components/DesignProcess';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { AdminLoginModal } from './components/admin/AdminLoginModal';

function MainPortfolioContent() {
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Check URL hash or path for #admin or /admin
  useEffect(() => {
    const handleHashCheck = () => {
      if (
        window.location.hash === '#admin' ||
        window.location.pathname === '/admin' ||
        window.location.hostname.includes('admin')
      ) {
        setIsAdminLoginOpen(true);
      }
    };
    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  if (isAdminLoggedIn) {
    return <AdminPanel onLogout={() => setIsAdminLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen w-full max-w-full bg-[#090909] text-white selection:bg-[#EC4899] selection:text-white overflow-x-hidden font-body relative">
      {/* Dual Ring Glowing Custom Cursor */}
      <CustomCursor />

      {/* High-Fashion Editorial Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Projects & Case Studies */}
      <FeaturedProjects />

      {/* More Creative Works Showcase (Billboards, Brochures, Standees) */}
      <MoreCreativeWorksSection />

      {/* Brands Worked With */}
      <BrandsWorkedSection />

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

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onSuccess={() => {
          setIsAdminLoginOpen(false);
          setIsAdminLoggedIn(true);
        }}
      />
    </div>
  );
}

export function App() {
  return (
    <DataProvider>
      <MainPortfolioContent />
    </DataProvider>
  );
}

export default App;
