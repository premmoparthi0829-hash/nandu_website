import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/app';
import { ProjectDetailModal } from './ProjectDetailModal';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Branding', 'Packaging', 'UI/UX'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#090909] text-white overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#88D900]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>FEATURED PORTFOLIO</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            SELECTED <span className="text-[#88D900]">DESIGN CASE STUDIES</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            Explore high-impact brand identity systems, packaging dielines, and UI/UX design case studies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-button text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#88D900] text-[#090909] shadow-[0_0_25px_rgba(136,217,0,0.4)]'
                  : 'bg-[#151515] text-[#9CA3AF] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid — 1 col mobile, 2 col md, 3 col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="luxury-card group flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Frame */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-[30px]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-[#090909]/80 backdrop-blur-md border border-[#88D900]/40 text-[#88D900] text-[9px] sm:text-[10px] font-heading font-extrabold uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 group-hover:text-[#88D900] transition-colors flex items-center justify-between gap-2">
                  <span className="line-clamp-1">{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 shrink-0 transition-all text-[#88D900]" />
                </h3>
                <p className="font-body text-[11px] sm:text-sm text-[#9CA3AF] leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 sm:px-2.5 py-1 rounded-md bg-[#090909] border border-white/10 text-[#88D900] text-[9px] sm:text-[10px] font-mono font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                <span className="text-[10px] sm:text-xs font-button font-bold text-[#88D900] group-hover:underline">
                  Explore Case Study →
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#090909] border border-white/10 text-white flex items-center justify-center group-hover:border-[#88D900] group-hover:text-[#88D900] transition-colors shrink-0">
                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
