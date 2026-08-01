import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsLeft, ChevronsRight, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types/app';

// ─── Graphic Design & Packaging Asset Imports ─────────────────────────────────
import pFreyr from '../assets/project_freyr.png';
import pSolar from '../assets/project_solar.png';
import pMilk from '../assets/project_milk.png';
import pCreamy from '../assets/project_creamy.png';
import p1 from '../assets/project_1.png';
import p2 from '../assets/project_2.png';
import cMint from '../assets/creamy_mint.png';
import g1 from '../assets/gallery_1.png';
import g3 from '../assets/gallery_3.png';
import g4 from '../assets/gallery_4.png';
import g6 from '../assets/gallery_6.png';
import g7 from '../assets/gallery_7.png';

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
    id: 'nugget-crispy',
    title: 'Nugget Crispy Social Ad',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: p1,
    description: 'Promotional food packaging and social media poster with vibrant color grading.',
    technologies: ['Photoshop', 'Canva', 'Social Media'],
  },
  {
    id: 'tsaqofah-islamiyyah',
    title: 'Tsaqofah Islamiyyah Poster',
    category: 'Dakwah',
    filterCategory: 'Dakwah',
    image: g1,
    description: 'Islamic seminar poster design featuring clean typography and emerald motifs.',
    technologies: ['Illustrator', 'Photoshop', 'Poster Design'],
  },
  {
    id: 'ikhlas-leaves',
    title: 'Ikhlas Quote Poster',
    category: 'Typho',
    filterCategory: 'Typho',
    image: g3,
    description: 'Calligraphy typography poster with botanical artwork background.',
    technologies: ['Canva', 'Typography', 'Social Graphics'],
  },
  {
    id: 'ramadhan-charity',
    title: 'Paket Kebaikan Ramadhan',
    category: 'Flat',
    filterCategory: 'Flat',
    image: g4,
    description: 'Flat vector social campaign design for Ramadhan charity initiative.',
    technologies: ['Illustrator', 'Flat Design', 'Infographic'],
  },
  {
    id: 'perhiasan-dunia',
    title: 'Lumina Luxury Packaging',
    category: 'Packaging',
    filterCategory: 'Flat',
    image: pMilk,
    description: 'Tactile luxury packaging design with gold foil embossing dielines.',
    technologies: ['Photoshop', 'Dieline CAD', 'Packaging'],
  },
  {
    id: 'pesantren-kilat',
    title: 'Pesantren Kilat Online',
    category: 'Dakwah',
    filterCategory: 'Dakwah',
    image: g6,
    description: 'Educational program poster layout with modern schedule grid.',
    technologies: ['Canva', 'Layout', 'Print Design'],
  },
  {
    id: 'lala-syukur',
    title: 'Lalai Dari Rasa Syukur',
    category: 'Typho',
    filterCategory: 'Typho',
    image: g7,
    description: 'Dynamic typography poster with leaf accents and gradient shadows.',
    technologies: ['Photoshop', 'Typography', 'Poster Art'],
  },
  {
    id: 'bratva-brotherhood',
    title: 'Bratva Branding Identity',
    category: '3D',
    filterCategory: '3D',
    image: p2,
    description: '3D emblem vector mark with dark blue textured background.',
    technologies: ['Illustrator', '3D Design', 'Logo'],
  },
  {
    id: 'creamy-branding',
    title: 'Creamy Dessert Brand',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: pCreamy,
    description: 'Full visual identity and packaging suite for gourmet dessert brand.',
    technologies: ['Illustrator', 'Branding', 'Packaging'],
  },
  {
    id: 'freyr-energy',
    title: 'Freyr Clean Energy Kit',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: pFreyr,
    description: 'Corporate brand identity and print collaterals for clean energy company.',
    technologies: ['Photoshop', 'Illustrator', 'Branding'],
  },
  {
    id: 'solar-campaign',
    title: 'Solar Power Marketing',
    category: '3D',
    filterCategory: '3D',
    image: pSolar,
    description: '3D rendered solar panel campaign ad with metallic finishes.',
    technologies: ['Canva', '3D Render', 'Marketing'],
  },
  {
    id: 'creamy-mint-box',
    title: 'Creamy Mint Product Box',
    category: 'Flat',
    filterCategory: 'Flat',
    image: cMint,
    description: 'Mint green retail box dieline and promotional product mockups.',
    technologies: ['Illustrator', 'Packaging', 'Flat Art'],
  },
];

const CATEGORIES = ['All', 'Graphic', 'Flat', 'Typho', '3D', 'Dakwah'];

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [page, setPage] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Filter projects by selected category
  const filteredProjects = activeCategory === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.filterCategory === activeCategory || p.category === activeCategory);

  const ITEMS_PER_PAGE = 9;
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
      setVisibleCount(prev => prev + 3);
    } else {
      setVisibleCount(9);
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
                  setVisibleCount(9);
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

          {/* 3x3 Project Grid (Same 3-column layout on mobile & web) */}
          <motion.div layout className="grid grid-cols-3 gap-2.5 sm:gap-6">
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
                  className="group relative aspect-square rounded-md overflow-hidden bg-[#151515] shadow-md border border-white/5 cursor-pointer hover:shadow-2xl hover:border-[#88D900]/50 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[#88D900] text-xs font-bold uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white text-sm font-bold line-clamp-1 flex items-center justify-between gap-1">
                      {item.title}
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[#88D900]" />
                    </h3>
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
        />
      )}
    </section>
  );
};
