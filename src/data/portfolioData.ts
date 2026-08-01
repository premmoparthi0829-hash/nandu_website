import { Project, Skill, ServiceItem, ExperienceItem, Testimonial } from '../types/app';
import heroImg from '../assets/designer_portrait.png';

export const PERSONAL_INFO = {
  name: "Nandini Vaddepalli",
  logoText: "NV",
  title: "Creative Graphic Designer & Visual Brand Specialist",
  subTitle: "Brand Identity Systems | Print & Packaging | UI/UX Specialist",
  tagline: "DESIGNING JOY IN EVERY PIXEL",
  shortBio: "Creative Lead with 4.5+ years of experience constructing iconic brand identities, print packaging, high-converting digital marketing campaigns, and sleek UI design systems.",
  yearsExperience: "4.5+",
  projectsCompleted: "100+",
  technologiesCount: "10+",
  clientSatisfaction: "100%",
  email: "nandinivaddepalli.design@gmail.com",
  phone: "+91 98765 43210",
  location: "Hyderabad, India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  avatarUrl: heroImg,
  heroImage: heroImg
};

export const SKILLS: Skill[] = [
  { name: 'Photoshop', category: 'Design & Tools', level: 98, iconName: 'Image', glowColor: '#88D900' },
  { name: 'Illustrator', category: 'Design & Tools', level: 96, iconName: 'PenTool', glowColor: '#88D900' },
  { name: 'Figma', category: 'Design & Tools', level: 94, iconName: 'Figma', glowColor: '#88D900' },
  { name: 'InDesign', category: 'Design & Tools', level: 90, iconName: 'Layers', glowColor: '#88D900' },
  { name: 'Canva Pro', category: 'Design & Tools', level: 95, iconName: 'Sparkles', glowColor: '#88D900' },
  { name: 'Firefly AI', category: 'Design & Tools', level: 92, iconName: 'Flame', glowColor: '#88D900' },
  { name: 'After Effects', category: 'Design & Tools', level: 85, iconName: 'Code', glowColor: '#88D900' },
  { name: 'UI/UX Design', category: 'UI/UX & Print', level: 92, iconName: 'Smartphone', glowColor: '#88D900' },
  { name: 'Brand Identity', category: 'Branding & Visuals', level: 98, iconName: 'Globe', glowColor: '#88D900' },
  { name: 'Packaging', category: 'UI/UX & Print', level: 92, iconName: 'Cpu', glowColor: '#88D900' },
  { name: 'Advertising', category: 'Branding & Visuals', level: 95, iconName: 'Server', glowColor: '#88D900' },
  { name: 'Typography', category: 'Branding & Visuals', level: 96, iconName: 'GitBranch', glowColor: '#88D900' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity Design',
    category: 'Branding Systems',
    description: 'Constructing full brand guidelines, vector logos, typography hierarchies, and color token systems that command authority.',
    deliverables: ['Vector Logo Guidelines', 'Typography & Color Tokens', 'Brand Usage Guideline PDF', 'Social Media Kit'],
    icon: 'Figma'
  },
  {
    id: 'social-media',
    title: 'Social Media Design',
    category: 'Digital Campaigns',
    description: 'Designing carousel graphics, story templates, ad banners, and promotional visual posts tailored for maximum engagement.',
    deliverables: ['Carousel Post Kits', 'Story Templates', 'Ad Creative Sets', 'Animated Motion Banners'],
    icon: 'Smartphone'
  },
  {
    id: 'advertising',
    title: 'Advertising Design',
    category: 'Performance Ads',
    description: 'Creating performance marketing banners, Google Display ads, print billboards, and promotional flyers optimized for maximum CTR.',
    deliverables: ['Google Display Banners', 'Print Flyers & Posters', 'Billboard Collaterals', 'Ad Variant Tests'],
    icon: 'Cpu'
  },
  {
    id: 'print-design',
    title: 'Print & Packaging',
    category: 'Tactile Print',
    description: 'Designing CMYK print-ready corporate brochures, product packaging boxes, food pouches, and trade show banners.',
    deliverables: ['Corporate Brochure (16+ pages)', 'Packaging Box Dielines', 'Trade Show Banners', 'Business Cards'],
    icon: 'Layers'
  },
  {
    id: 'ui-ux-design',
    title: 'UI UX & Web Design',
    category: 'Product Design',
    description: 'Luxury modern user interfaces, interactive Figma wireframes, micro-interactions, high-fidelity prototypes, and sleek design systems.',
    deliverables: ['Figma Design System', 'Clickable Prototypes', 'Design Tokens & UI Kit'],
    icon: 'Globe'
  },
  {
    id: 'motion-reels',
    title: 'Motion & Reel Design',
    category: 'Motion Visuals',
    description: 'Dynamic 2D animation, promotional video edits, reel graphics, and intro logo animations.',
    deliverables: ['Social Reels', 'Animated Logos', 'Promo Video Edits'],
    icon: 'Flame'
  }
];

import designersPoster from '../assets/designers_not_machine.jpg';
import dominatePoster from '../assets/dominate_attention.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'designers-are-not-design-machine',
    title: 'Designers Are Not Design Machine',
    category: 'Poster Design',
    shortDescription: 'High-impact concept poster expressing visual designer pressure, artistic dedication, and bold typography.',
    fullOverview: 'A powerful graphic poster design created for #nandini.V, expressing the pressure visual artists face under intense client demands. Features custom claw scratching composition and distressed typography.',
    technologies: ['Photoshop', 'Typography', 'Poster Art', 'Visual Composition'],
    features: [
      'High-Impact Distressed Typography Layout',
      'Creative Cat Paw & Computer Mouse Composition',
      'Original Artwork Signed #nandini.V'
    ],
    heroImage: designersPoster,
    screenshots: [
      designersPoster
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Expressing the overwhelming pressure designers face under mechanical expectations.',
      solution: 'Crafted a visceral visual metaphor with dramatic lighting and scratching claws.',
      impact: 'Highly praised concept art reflecting creative integrity.'
    },
    featured: true
  },
  {
    id: 'dominate-attention',
    title: 'Dominate Attention - Shark Brand Poster',
    category: 'Poster Design',
    shortDescription: 'High-impact brand poster featuring breaching shark visual manipulation and motivational brand typography.',
    fullOverview: 'A bold, commanding brand advertising poster: "DOMINATE ATTENTION - Strong brands don\'t compete for visibility. They own it." Created with photo manipulation of a breaching shark and striking blue water graphics.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Typography', 'Advertising Design'],
    features: [
      'Breaching Great White Shark Photomontage & Water Splash FX',
      'Bold Slanted Modern Typography',
      'Brand Identity Messaging: "Strong brands don\'t compete for visibility. They own it."'
    ],
    heroImage: dominatePoster,
    screenshots: [
      dominatePoster
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an aggressive, high-converting campaign poster that conveys market dominance.',
      solution: 'Combined breaching marine predator imagery with razor-sharp brand slogan hierarchy.',
      impact: 'Drives maximum engagement and immediate visual impact.'
    },
    featured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'All Hands Global',
    role: 'Lead Brand & Visual Strategist',
    duration: '2025 - Present',
    location: 'Hyderabad / Remote',
    responsibilities: [
      'Steering end-to-end brand identities, creative direction, and digital asset architecture for global client campaigns.',
      'Redesigned flagship brand identity increasing client engagement by 40%.',
      'Pioneered Generative AI asset pipelines for global social launches.'
    ],
    techStack: ['Photoshop', 'Illustrator', 'Figma', 'Firefly AI', 'Brand Strategy']
  },
  {
    id: 'exp-2',
    company: 'Freyr Energy',
    role: 'Senior Visual Graphic Designer',
    duration: '2023 - 2025',
    location: 'Hyderabad, India',
    responsibilities: [
      'Spearheaded renewable energy brand collateral, interactive UI kits, digital pitch decks, and high-impact marketing visuals.',
      'Built standardized 120+ asset design system for clean energy campaigns.',
      'Designed high-converting executive pitch decks for Series B investors.'
    ],
    techStack: ['Illustrator', 'Photoshop', 'InDesign', 'Figma']
  },
  {
    id: 'exp-3',
    company: 'Mantra Technologies',
    role: 'Creative UI/UX & Brand Specialist',
    duration: '2022 - 2023',
    location: 'Hyderabad, India',
    responsibilities: [
      'Designed sleek enterprise SaaS interfaces, dark mode web portals, vector iconography, and marketing visual identities.',
      'Transformed complex tech products into intuitive visual experiences.'
    ],
    techStack: ['Figma', 'Photoshop', 'UI/UX', 'Canva']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikramaditya Rao',
    role: 'VP of Product',
    company: 'Freyr Energy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Nandini turned our raw fintech application into an award-winning visual masterpiece. Her attention to typography and glassmorphism UI is unmatched.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sophia Chen',
    role: 'Co-Founder',
    company: 'Lumina Fragrances',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Working with Nandini was like having a senior Apple designer leading our brand team. Our brand equity valuation doubled after the new identity release.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Rajesh Varma',
    role: 'Head of Marketing',
    company: 'All Hands Global',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Nandini\'s mastery of Adobe Illustrator and Generative AI workflows accelerated our global campaign launch by three weeks. Phenomenal talent!',
    rating: 5
  }
];
