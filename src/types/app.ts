export type DesignTheme = 'mint' | 'peach' | 'coral' | 'cream';

export interface ThemeConfig {
  id: DesignTheme;
  name: string;
  badge: string;
  bgHex: string;
  btnDark: string;
  headline: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  statBadge: string;
  badgeBg: string;
  description: string;
  deliverables: string[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  subtitle?: string;
  iconName: string;
  glowColor?: string;
  badgeBg?: string;
  textColor?: string;
  accentColor?: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullOverview: string;
  technologies: string[];
  features: string[];
  heroImage: string;
  screenshots: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    impact: string;
  };
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

