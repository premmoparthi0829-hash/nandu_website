import React, { useState, useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { CustomCursor } from './components/CustomCursor';
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
import { AdminPanel } from './components/admin/AdminPanel';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { ShieldCheck } from 'lucide-react';

function MainPortfolioContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
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

      {/* Floating Admin Button at bottom-left */}
      <button
        onClick={() => setIsAdminLoginOpen(true)}
        className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-[#151515] border border-white/10 text-gray-400 hover:text-[#88D900] hover:border-[#88D900]/50 transition-all shadow-xl flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider group cursor-pointer"
        title="Open Admin Portal"
      >
        <ShieldCheck className="w-4 h-4 text-[#88D900] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">ADMIN</span>
      </button>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

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
