import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Skill, ServiceItem, ExperienceItem, Testimonial } from '../types/app';
import {
  PERSONAL_INFO as defaultPersonalInfo,
  PROJECTS as defaultProjects,
  SERVICES as defaultServices,
  SKILLS as defaultSkills,
  EXPERIENCES as defaultExperience,
  TESTIMONIALS as defaultTestimonials,
} from '../data/portfolioData';

export interface InboxMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

interface DataContextType {
  personalInfo: typeof defaultPersonalInfo;
  projects: Project[];
  services: ServiceItem[];
  skills: Skill[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  messages: InboxMessage[];
  
  // Update functions
  updatePersonalInfo: (info: Partial<typeof defaultPersonalInfo>) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, updatedProject: Project) => void;
  deleteProject: (id: string) => void;
  addService: (service: ServiceItem) => void;
  updateService: (id: string, updatedService: ServiceItem) => void;
  deleteService: (id: string) => void;
  addSkill: (skill: Skill) => void;
  deleteSkill: (name: string) => void;
  addMessage: (message: Omit<InboxMessage, 'id' | 'date' | 'read'>) => void;
  deleteMessage: (id: string) => void;
  markMessageRead: (id: string) => void;
  resetToDefaults: () => void;
}

const STORAGE_KEY = 'nandu_portfolio_data_v11';

// Clear legacy cached portfolio data keys to force fresh state
try {
  if (typeof window !== 'undefined' && window.localStorage) {
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('nandu_portfolio_data_') && !key.startsWith(STORAGE_KEY)) {
        localStorage.removeItem(key);
      }
    });
  }
} catch {}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_info`);
      return saved ? JSON.parse(saved) : defaultPersonalInfo;
    } catch {
      return defaultPersonalInfo;
    }
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_projects`);
      return saved ? JSON.parse(saved) : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_services`);
      return saved ? JSON.parse(saved) : defaultServices;
    } catch {
      return defaultServices;
    }
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_skills`);
      return saved ? JSON.parse(saved) : defaultSkills;
    } catch {
      return defaultSkills;
    }
  });

  const [experience] = useState<ExperienceItem[]>(defaultExperience);
  const [testimonials] = useState<Testimonial[]>(defaultTestimonials);

  const [messages, setMessages] = useState<InboxMessage[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_messages`);
      return saved ? JSON.parse(saved) : [
        {
          id: 'msg-1',
          name: 'Aarav Sharma',
          email: 'aarav@freyr.com',
          subject: 'Branding Campaign Collaboration',
          message: 'Hi Nandini, we loved your recent packaging work! Would love to discuss our upcoming product launch campaign.',
          date: new Date(Date.now() - 86400000).toISOString(),
          read: false
        }
      ];
    } catch {
      return [];
    }
  });

  // Sync state changes safely to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_info`, JSON.stringify(personalInfo));
    } catch {}
  }, [personalInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_projects`, JSON.stringify(projects));
    } catch {}
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_services`, JSON.stringify(services));
    } catch {}
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_skills`, JSON.stringify(skills));
    } catch {}
  }, [skills]);

  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_messages`, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Actions
  const updatePersonalInfo = (info: Partial<typeof defaultPersonalInfo>) => {
    setPersonalInfo((prev: typeof defaultPersonalInfo) => ({ ...prev, ...info }));
  };

  const addProject = (newProj: Project) => {
    setProjects((prev) => [newProj, ...prev]);
  };

  const updateProject = (id: string, updatedProj: Project) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? updatedProj : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const addService = (newServ: ServiceItem) => {
    setServices((prev) => [...prev, newServ]);
  };

  const updateService = (id: string, updatedServ: ServiceItem) => {
    setServices((prev) => prev.map((s) => (s.id === id ? updatedServ : s)));
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const addSkill = (newSkill: Skill) => {
    setSkills((prev) => [...prev, newSkill]);
  };

  const deleteSkill = (name: string) => {
    setSkills((prev) => prev.filter((sk) => sk.name !== name));
  };

  const addMessage = (msgData: Omit<InboxMessage, 'id' | 'date' | 'read'>) => {
    const newMsg: InboxMessage = {
      ...msgData,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString(),
      read: false,
    };
    setMessages((prev) => [newMsg, ...prev]);
  };

  const deleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const markMessageRead = (id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)));
  };

  const resetToDefaults = () => {
    setPersonalInfo(defaultPersonalInfo);
    setProjects(defaultProjects);
    setServices(defaultServices);
    setSkills(defaultSkills);
    setMessages([]);
    localStorage.clear();
  };

  return (
    <DataContext.Provider
      value={{
        personalInfo,
        projects,
        services,
        skills,
        experience,
        testimonials,
        messages,
        updatePersonalInfo,
        addProject,
        updateProject,
        deleteProject,
        addService,
        updateService,
        deleteService,
        addSkill,
        deleteSkill,
        addMessage,
        deleteMessage,
        markMessageRead,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
