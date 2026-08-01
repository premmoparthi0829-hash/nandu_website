import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData, InboxMessage } from '../../context/DataContext';
import { Project, ServiceItem, Skill } from '../../types/app';
import {
  LayoutDashboard,
  FolderPlus,
  UserCheck,
  Wrench,
  Mail,
  LogOut,
  Sparkles,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  X,
  ExternalLink,
  RotateCcw,
  Search,
  MessageSquare,
  Award,
  Layers,
  FileText
} from 'lucide-react';

interface AdminPanelProps {
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const {
    personalInfo,
    projects,
    services,
    skills,
    messages,
    updatePersonalInfo,
    addProject,
    updateProject,
    deleteProject,
    addService,
    deleteService,
    addSkill,
    deleteSkill,
    deleteMessage,
    markMessageRead,
    resetToDefaults,
  } = useData();

  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'profile' | 'services' | 'inbox'>('overview');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Form State for Adding / Editing Project
  const [isEditingProject, setIsEditingProject] = useState<boolean>(false);
  const [currentProjId, setCurrentProjId] = useState<string | null>(null);
  const [projForm, setProjForm] = useState<Partial<Project>>({
    title: '',
    category: 'Branding',
    shortDescription: '',
    fullOverview: '',
    technologies: ['Photoshop', 'Illustrator'],
    features: ['Custom Logo Design', 'Brand Identity Kit'],
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1000&q=80',
    liveDemoUrl: 'https://behance.net',
    featured: true,
  });

  // Profile Form State
  const [profileForm, setProfileForm] = useState(personalInfo);

  // New Skill / Service Form State
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState('Design & Tools');

  // Search filter for inbox
  const [searchQuery, setSearchQuery] = useState('');

  const triggerSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updatePersonalInfo(profileForm);
    triggerSuccess('Personal Info & Bio updated successfully!');
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projForm.title || !projForm.shortDescription) return;

    if (isEditingProject && currentProjId) {
      updateProject(currentProjId, {
        id: currentProjId,
        title: projForm.title || 'Untitled Project',
        category: (projForm.category as any) || 'Branding',
        shortDescription: projForm.shortDescription || '',
        fullOverview: projForm.fullOverview || projForm.shortDescription || '',
        technologies: projForm.technologies || ['Design'],
        features: projForm.features || [],
        heroImage: projForm.heroImage || 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1000&q=80',
        screenshots: [projForm.heroImage || ''],
        liveDemoUrl: projForm.liveDemoUrl || '',
        featured: projForm.featured ?? true,
      });
      triggerSuccess(`Project "${projForm.title}" updated!`);
    } else {
      const newId = `proj-${Date.now()}`;
      addProject({
        id: newId,
        title: projForm.title || 'New Graphic Design Project',
        category: (projForm.category as any) || 'Branding',
        shortDescription: projForm.shortDescription || '',
        fullOverview: projForm.fullOverview || projForm.shortDescription || '',
        technologies: projForm.technologies || ['Design'],
        features: projForm.features || ['Custom Branding'],
        heroImage: projForm.heroImage || 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1000&q=80',
        screenshots: [projForm.heroImage || ''],
        liveDemoUrl: projForm.liveDemoUrl || '',
        featured: true,
      });
      triggerSuccess(`New project "${projForm.title}" created & published live!`);
    }

    // Reset Form
    setIsEditingProject(false);
    setCurrentProjId(null);
    setProjForm({
      title: '',
      category: 'Branding',
      shortDescription: '',
      fullOverview: '',
      technologies: ['Photoshop', 'Illustrator'],
      features: ['Custom Logo Design'],
      heroImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1000&q=80',
      liveDemoUrl: 'https://behance.net',
      featured: true,
    });
  };

  const handleEditProjectClick = (proj: Project) => {
    setIsEditingProject(true);
    setCurrentProjId(proj.id);
    setProjForm(proj);
  };

  const handleAddSkillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName) return;
    addSkill({
      name: newSkillName,
      category: newSkillCategory,
      level: 95,
      glowColor: '#88D900',
    });
    setNewSkillName('');
    triggerSuccess(`Skill "${newSkillName}" added!`);
  };

  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#090909] text-white font-sans pt-20 pb-16 px-4 sm:px-8">
      {/* Toast Notification */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-[200] bg-[#88D900] text-black font-extrabold px-5 py-3 rounded-2xl shadow-[0_0_25px_rgba(136,217,0,0.5)] flex items-center gap-2 text-xs uppercase"
          >
            <CheckCircle className="w-4 h-4 stroke-[3]" />
            <span>{successMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-[#121212] border border-white/10 p-5 rounded-3xl shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#88D900] text-black font-heading font-black text-xl flex items-center justify-center shadow-[0_0_20px_rgba(136,217,0,0.4)] shrink-0">
              {personalInfo.logoText}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#88D900] px-2 py-0.5 rounded-full bg-[#88D900]/10 border border-[#88D900]/30">
                  ADMIN PORTAL
                </span>
                <span className="text-xs text-gray-400 font-mono">v2.0</span>
              </div>
              <h1 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                NANDINI VADDEPALLI PORTFOLIO MANAGEMENT
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button
              onClick={resetToDefaults}
              className="px-3.5 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Reset data to defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-xl bg-[#1c1c1c] border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {[
            { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'projects', label: `Projects (${projects.length})`, icon: FolderPlus },
            { id: 'profile', label: 'Profile & Resume', icon: UserCheck },
            { id: 'services', label: 'Services & Skills', icon: Wrench },
            { id: 'inbox', label: `Messages (${messages.length})`, icon: Mail, badge: messages.filter(m => !m.read).length },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-heading font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#88D900] text-black shadow-[0_0_20px_rgba(136,217,0,0.4)] scale-105'
                    : 'bg-[#121212] text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && tab.badge > 0 ? (
                  <span className="w-5 h-5 rounded-full bg-[#EC4899] text-black text-[10px] font-mono font-bold flex items-center justify-center">
                    {tab.badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#121212] border border-white/10 p-5 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-mono">TOTAL PROJECTS</span>
                  <h3 className="font-heading font-black text-3xl text-[#88D900] mt-1">{projects.length}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#88D900]/10 text-[#88D900] flex items-center justify-center border border-[#88D900]/30">
                  <Layers className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-[#121212] border border-white/10 p-5 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-mono">INBOX MESSAGES</span>
                  <h3 className="font-heading font-black text-3xl text-[#EC4899] mt-1">{messages.length}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#EC4899]/10 text-[#EC4899] flex items-center justify-center border border-[#EC4899]/30">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-[#121212] border border-white/10 p-5 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-mono">DESIGN SERVICES</span>
                  <h3 className="font-heading font-black text-3xl text-[#88D900] mt-1">{services.length}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#88D900]/10 text-[#88D900] flex items-center justify-center border border-[#88D900]/30">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-[#121212] border border-white/10 p-5 rounded-3xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 font-mono">SKILLS & TOOLS</span>
                  <h3 className="font-heading font-black text-3xl text-[#88D900] mt-1">{skills.length}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#88D900]/10 text-[#88D900] flex items-center justify-center border border-[#88D900]/30">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="bg-[#121212] border border-white/10 p-6 rounded-3xl">
              <h3 className="font-heading font-bold text-lg text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#88D900]" />
                <span>QUICK ACTIONS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => {
                    setIsEditingProject(false);
                    setActiveTab('projects');
                  }}
                  className="btn-neon py-3 px-4 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>ADD NEW PROJECT</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="btn-pink py-3 px-4 text-xs font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>EDIT BIO & RESUME</span>
                </button>
                <button
                  onClick={() => setActiveTab('inbox')}
                  className="px-4 py-3 rounded-2xl bg-[#1a1a1a] border border-white/15 text-white hover:border-[#88D900] text-xs font-heading font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#88D900]" />
                  <span>VIEW CLIENT MESSAGES</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS MANAGER */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            {/* Form Box */}
            <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-3xl">
              <h3 className="font-heading font-black text-xl text-white mb-6 flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-[#88D900]" />
                <span>{isEditingProject ? 'EDIT PROJECT' : 'ADD NEW GRAPHIC DESIGN PROJECT'}</span>
              </h3>

              <form onSubmit={handleSaveProject} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Project Title</label>
                    <input
                      type="text"
                      value={projForm.title || ''}
                      onChange={(e) => setProjForm({ ...projForm, title: e.target.value })}
                      placeholder="e.g. Lumina Luxury Package Design"
                      className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Category</label>
                    <select
                      value={projForm.category || 'Branding'}
                      onChange={(e) => setProjForm({ ...projForm, category: e.target.value as any })}
                      className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                    >
                      <option value="Branding">Branding</option>
                      <option value="Packaging">Packaging</option>
                      <option value="Print">Print Design</option>
                      <option value="UI/UX">UI/UX Design</option>
                      <option value="3D">3D Visuals</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Short Description</label>
                  <input
                    type="text"
                    value={projForm.shortDescription || ''}
                    onChange={(e) => setProjForm({ ...projForm, shortDescription: e.target.value })}
                    placeholder="Brief 1-line overview of visual deliverables..."
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Hero Image URL</label>
                  <input
                    type="url"
                    value={projForm.heroImage || ''}
                    onChange={(e) => setProjForm({ ...projForm, heroImage: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Live Demo / Portfolio URL</label>
                  <input
                    type="url"
                    value={projForm.liveDemoUrl || ''}
                    onChange={(e) => setProjForm({ ...projForm, liveDemoUrl: e.target.value })}
                    placeholder="https://behance.net/..."
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="btn-neon py-3 px-6 text-xs font-extrabold flex items-center gap-2 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isEditingProject ? 'SAVE CHANGES' : 'PUBLISH PROJECT'}</span>
                  </button>

                  {isEditingProject && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingProject(false);
                        setCurrentProjId(null);
                      }}
                      className="px-4 py-3 rounded-2xl bg-[#1c1c1c] border border-white/10 text-gray-400 hover:text-white text-xs font-bold"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Existing Projects List */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-white">CURRENT PROJECTS ({projects.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-[#121212] border border-white/10 rounded-2xl p-4 flex flex-col justify-between shadow-md"
                  >
                    <div>
                      <div className="aspect-video rounded-xl overflow-hidden mb-3 bg-[#090909]">
                        <img src={proj.heroImage} alt={proj.title} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#88D900] px-2 py-0.5 rounded-full bg-[#88D900]/10 border border-[#88D900]/30">
                        {proj.category}
                      </span>
                      <h4 className="font-heading font-bold text-base text-white mt-1">{proj.title}</h4>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{proj.shortDescription}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                      <button
                        onClick={() => handleEditProjectClick(proj)}
                        className="px-3 py-1.5 rounded-xl bg-[#1c1c1c] text-[#88D900] hover:bg-[#88D900] hover:text-black text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => deleteProject(proj.id)}
                        className="px-3 py-1.5 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROFILE & RESUME */}
        {activeTab === 'profile' && (
          <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-3xl">
            <h3 className="font-heading font-black text-xl text-white mb-6 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#88D900]" />
              <span>EDIT PROFILE & RESUME INFO</span>
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Logo Monogram Text</label>
                  <input
                    type="text"
                    value={profileForm.logoText}
                    onChange={(e) => setProfileForm({ ...profileForm, logoText: e.target.value })}
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Professional Title</label>
                <input
                  type="text"
                  value={profileForm.title}
                  onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Graphic Designer Bio</label>
                <textarea
                  rows={3}
                  value={profileForm.shortBio}
                  onChange={(e) => setProfileForm({ ...profileForm, shortBio: e.target.value })}
                  className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-gray-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={profileForm.location}
                    onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                    className="w-full bg-[#090909] border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#88D900]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-neon py-3 px-6 text-xs font-extrabold flex items-center gap-2 cursor-pointer mt-4"
              >
                <Save className="w-4 h-4" />
                <span>SAVE PROFILE</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: SERVICES & SKILLS */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Box */}
            <div className="bg-[#121212] border border-white/10 p-6 rounded-3xl">
              <h3 className="font-heading font-black text-lg text-white mb-4 flex items-center justify-between">
                <span>SKILLS & TOOLS ({skills.length})</span>
              </h3>

              <form onSubmit={handleAddSkillSubmit} className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  placeholder="e.g. Cinema 4D..."
                  className="flex-1 bg-[#090909] border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#88D900]"
                />
                <button
                  type="submit"
                  className="btn-neon px-4 py-2.5 text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </form>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3 py-1.5 rounded-xl bg-[#090909] border border-white/10 flex items-center gap-2 text-xs"
                  >
                    <span className="font-heading font-bold text-white">{skill.name}</span>
                    <button
                      onClick={() => deleteSkill(skill.name)}
                      className="text-gray-500 hover:text-red-400"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Box */}
            <div className="bg-[#121212] border border-white/10 p-6 rounded-3xl">
              <h3 className="font-heading font-black text-lg text-white mb-4">
                DESIGN SERVICES ({services.length})
              </h3>
              <div className="space-y-3">
                {services.map((serv) => (
                  <div key={serv.id} className="p-3.5 rounded-2xl bg-[#090909] border border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">{serv.title}</h4>
                      <p className="text-xs text-gray-400">{serv.category}</p>
                    </div>
                    <button
                      onClick={() => deleteService(serv.id)}
                      className="text-gray-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INBOX MESSAGES */}
        {activeTab === 'inbox' && (
          <div className="bg-[#121212] border border-white/10 p-6 sm:p-8 rounded-3xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h3 className="font-heading font-black text-xl text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#88D900]" />
                <span>CLIENT MESSAGES INBOX ({messages.length})</span>
              </h3>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search messages..."
                  className="w-full bg-[#090909] border border-white/15 rounded-xl py-2 pl-9 pr-3 text-xs text-white focus:outline-none focus:border-[#88D900]"
                />
              </div>
            </div>

            {filteredMessages.length === 0 ? (
              <div className="text-center py-12 text-gray-500 font-mono text-xs">
                No messages found in inbox.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => markMessageRead(msg.id)}
                    className={`p-4 rounded-2xl border transition-all ${
                      msg.read
                        ? 'bg-[#090909] border-white/10 opacity-80'
                        : 'bg-[#151515] border-[#88D900]/40 shadow-[0_0_15px_rgba(136,217,0,0.1)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-extrabold text-sm text-white">{msg.name}</span>
                        <span className="text-xs text-[#88D900] font-mono">({msg.email})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-gray-500 font-mono">
                          {new Date(msg.date).toLocaleDateString()}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteMessage(msg.id);
                          }}
                          className="text-gray-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider mb-1">
                      Subject: {msg.subject}
                    </h4>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
