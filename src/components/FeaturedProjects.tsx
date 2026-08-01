import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsLeft, ChevronsRight, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types/app';
import { useData } from '../context/DataContext';

import designersPoster from '../assets/designers_not_machine.jpg';
import dominatePoster from '../assets/dominate_attention.jpg';
import rollTheDice from '../assets/roll_the_dice.jpg';
import trustBranding from '../assets/trust_begins_with_branding.jpg';
import brandStandOut from '../assets/brand_stand_out.jpg';
import creativityOverheats from '../assets/creativity_overheats.jpg';
import friendshipDay from '../assets/friendship_day.jpg';
import youGotAMail from '../assets/you_got_a_mail.jpg';
import digitalMarketing from '../assets/digital_marketing.jpg';
import admissionOpen from '../assets/admission_open.jpg';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterCategory: string;
  image: string;
  description: string;
  technologies: string[];
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: 'designers-are-not-design-machine',
    title: 'Designers Are Not Design Machine',
    category: 'Poster',
    filterCategory: 'Graphic',
    image: designersPoster,
    description: 'Working under pressure concept poster featuring high-impact visual manipulation and typography.',
    technologies: ['Photoshop', 'Typography', 'Poster Art'],
  },
  {
    id: 'dominate-attention',
    title: 'Dominate Attention - Shark Brand Poster',
    category: 'Poster',
    filterCategory: 'Graphic',
    image: dominatePoster,
    description: 'High-impact advertising poster with breaching shark photomontage and brand slogan typography.',
    technologies: ['Photoshop', 'Advertising Design', 'Photo Manipulation'],
  },
  {
    id: 'roll-the-dice',
    title: 'Roll the Dice',
    category: 'Poster',
    filterCategory: 'Poster',
    image: rollTheDice,
    description: 'Bold typographic poster design with wooden dice photomontage on a vibrant lime green background. A striking visual metaphor — "Roll the Dice, but We\'ve Already Stacked the Odds in Your Favor."',
    technologies: ['Photoshop', 'Typography', 'Photo Manipulation', 'Poster Design'],
  },
  {
    id: 'trust-begins-with-branding',
    title: 'Trust Begins With Branding',
    category: 'Branding',
    filterCategory: 'Branding',
    image: trustBranding,
    description: 'Bold branding manifesto poster on a deep red radial background. "Trust Begins With Branding — Built to Be Remembered." Features layered typographic labels: Earn Loyalty, Stay Memorable, Gain Trust, Grow Faster.',
    technologies: ['Photoshop', 'Branding', 'Typography', 'Poster Design'],
  },
  {
    id: 'brand-stand-out',
    title: 'Make Your Brand Stand Out',
    category: 'Branding',
    filterCategory: 'Branding',
    image: brandStandOut,
    description: 'Vibrant yellow grid-background branding poster featuring a standout red matchstick among black ones — a powerful visual metaphor for differentiation. "We Know What It Takes to Make Your Brand Stand Out."',
    technologies: ['Photoshop', 'Branding', 'Photo Manipulation', 'Poster Design'],
  },
  {
    id: 'creativity-overheats',
    title: 'When Creativity Overheats',
    category: 'Poster',
    filterCategory: 'Poster',
    image: creativityOverheats,
    description: 'Dark green atmospheric poster featuring a smoking, overheated computer mouse under a spotlight. "When Creativity Overheats — We Don\'t Quit. We Create." A bold statement on relentless creative drive.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Typography', 'Poster Design'],
  },
  {
    id: 'friendship-day-makeup',
    title: 'Happy Friendship Day',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: friendshipDay,
    description: 'Warm beige friendship day social media poster featuring an animated makeup compact and brush with cartoon arms. "On this special day, let\'s celebrate the bond of friendship and together make more beautiful memories."',
    technologies: ['Photoshop', 'Illustration', 'Social Media Design', 'Photo Manipulation'],
  },
  {
    id: 'you-got-a-mail',
    title: "It's Weekend — You Just Got a Mail",
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: youGotAMail,
    description: 'Clean white editorial social media poster featuring a 3D red envelope with floating notification cards — Job Offer, Successful Transaction, and Scholarship. "It\'s Weekend. You Just Got a Mail — Kindly Check Your Inbox."',
    technologies: ['Photoshop', '3D Mockup', 'Social Media Design', 'Typography'],
  },
  {
    id: 'digital-marketing-accelerate',
    title: 'Accelerate Your Success with Digital Marketing',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: digitalMarketing,
    description: 'Vibrant pink grid-background social media poster featuring a speeding turtle on a skateboard — a witty metaphor for how digital marketing accelerates even the slowest growth. Bold red and yellow typography with sparkle accents.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Social Media Design', 'Typography'],
  },
  {
    id: 'admission-open-school',
    title: 'Admission Open — Where Young Minds Grow',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: admissionOpen,
    description: 'Vibrant purple school admission poster featuring a cheerful uniformed student looking up through bold oversized typography. "Admission Open — Where Young Minds Dream, Discover & Grow." Paper airplane accents add a playful education theme.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Typography', 'Social Media Design'],
  },
];

const CATEGORIES = ['All', 'Graphic', 'Poster', 'Branding', 'Social Media'];

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [page, setPage] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const { projects: dynamicProjects } = useData();

  // Combine dynamic projects from Admin Panel + default portfolio assets
  const combinedProjects: ProjectItem[] = [
    ...dynamicProjects.map((dp) => ({
      id: dp.id,
      title: dp.title,
      category: dp.category,
      filterCategory: dp.category === 'Branding' ? 'Branding' : dp.category === 'Packaging' ? 'Packaging' : dp.category === 'Print' ? 'Print' : 'Graphic',
      image: dp.heroImage,
      description: dp.shortDescription,
      technologies: dp.technologies,
    })),
    ...ALL_PROJECTS.filter((ap) => !dynamicProjects.some((dp) => dp.id === ap.id)),
  ];

  // Filter projects by selected category
  const filteredProjects = activeCategory === 'All'
    ? combinedProjects
    : combinedProjects.filter(p => p.filterCategory === activeCategory || p.category === activeCategory);

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const currentPage = Math.min(page, totalPages - 1);

  const displayedProjects = filteredProjects.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage * ITEMS_PER_PAGE) + visibleCount
  );

  const handlePrevPage = () => {
    setPage(prev => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setPage(prev => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleLoadMore = () => {
    if (visibleCount < filteredProjects.length) {
      setVisibleCount(prev => prev + 6);
    } else {
      setVisibleCount(6);
    }
  };

  const openModal = (item: ProjectItem) => {
    const proj: Project = {
      id: item.id,
      title: item.title,
      category: item.category,
      shortDescription: item.description,
      fullOverview: item.description,
      technologies: item.technologies,
      features: ['High Resolution Print Ready Dielines', 'Custom Typography Hierarchy', 'Vector Icon Set'],
      heroImage: item.image,
      screenshots: [item.image],
    };
    setSelectedProject(proj);
  };

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 px-4 sm:px-8 bg-[#090909] text-white overflow-hidden border-t border-white/5 font-sans"
    >
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header matching site design system */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            MY <span className="text-[#88D900]">PROJECTS</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            Explore selected graphic design, branding, 3D visualization, and digital packaging projects.
          </p>
        </motion.div>

        {/* Category Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 text-base sm:text-lg font-medium"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(0);
                  setVisibleCount(6);
                }}
                className="relative py-1 px-1 transition-colors duration-200 focus:outline-none"
              >
                <span className={isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}>
                  {cat}
                </span>

                {/* Active indicator bar matching neon green brand theme */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute left-0 right-0 -bottom-1 h-[3px] bg-[#88D900] rounded-full shadow-[0_0_10px_rgba(136,217,0,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Grid Container with Left & Right Circular Arrow Buttons */}
        <div className="relative w-full max-w-4xl px-4 sm:px-14">
          
          {/* Left Circular Arrow Button (<<) */}
          <button
            onClick={handlePrevPage}
            aria-label="Previous Projects"
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#88D900] hover:bg-[#9BE01A] text-black font-extrabold flex items-center justify-center shadow-[0_0_15px_rgba(136,217,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronsLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Right Circular Arrow Button (>>) */}
          <button
            onClick={handleNextPage}
            aria-label="Next Projects"
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#88D900] hover:bg-[#9BE01A] text-black font-extrabold flex items-center justify-center shadow-[0_0_15px_rgba(136,217,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronsRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* 3x2 Project Grid — 6 per page (3 top + 3 bottom) */}
          <motion.div layout className="grid grid-cols-3 gap-2.5 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(item)}
                  className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0a0a0a] shadow-lg border border-white/5 cursor-pointer hover:shadow-[0_0_30px_rgba(136,217,0,0.15)] hover:border-[#88D900]/50 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    style={{ imageRendering: 'high-quality' }}
                  />
                  
                  {/* Overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
                    <div className="flex justify-end">
                      <button
                        onClick={(e) => { e.stopPropagation(); setLightboxImage(item.image); }}
                        className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#88D900] hover:text-black transition-all"
                        title="View Full HD"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-3-3v2m0 4h.01" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 14l3 3" />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <span className="text-[#88D900] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xs sm:text-sm font-bold line-clamp-2 flex items-start justify-between gap-1">
                        <span>{item.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#88D900]" />
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <button
            onClick={handleLoadMore}
            className="px-10 py-3 rounded-full bg-[#88D900] hover:bg-[#9BE01A] text-black font-extrabold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(136,217,0,0.3)] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {visibleCount < filteredProjects.length ? 'LOAD MORE' : 'SHOW LESS'}
          </button>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onImageClick={(img) => setLightboxImage(img)}
        />
      )}

      {/* Fullscreen HD Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative max-w-3xl w-full max-h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-[#151515] border border-white/20 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all flex items-center justify-center shadow-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* HD Image */}
              <img
                src={lightboxImage}
                alt="Full HD Preview"
                className="w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(136,217,0,0.1)]"
                style={{
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              />

              {/* HD Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-[#88D900] tracking-widest uppercase">
                ✦ ULTRA HD VIEW
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
