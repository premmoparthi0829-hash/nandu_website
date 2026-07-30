import { Project, Skill, ServiceItem, ExperienceItem, Testimonial } from '../types/app';
import heroImg from '../assets/nandini_coral.png';

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

export const PROJECTS: Project[] = [
  {
    id: 'freyr-energy',
    title: 'Freyr Energy Brand System',
    category: 'Branding',
    shortDescription: 'Comprehensive clean energy brand identity, print packaging, 120+ asset design kit, and executive pitch decks.',
    fullOverview: 'Complete visual identity transformation for Freyr Energy, standardizing brand guidelines, executive investor pitch decks, digital marketing templates, and renewable energy product brochures.',
    technologies: ['Photoshop', 'Illustrator', 'Figma', 'InDesign', 'Brand Guidelines'],
    features: [
      'Full Vector Logo Redesign & Multi-theme Palette',
      '120+ Component Figma Design System for Marketing Teams',
      'CMYK Print-Ready Corporate Brochures & Trade Show Banners',
      'Series B Investor Pitch Deck Layouts'
    ],
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1000&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    ],
    liveDemoUrl: 'https://freyrenergy.com',
    githubUrl: 'https://behance.net',
    caseStudy: {
      problem: 'Inconsistent brand representation across regional energy hubs led to diluted market recognition.',
      solution: 'Created an all-inclusive 120+ asset design system with strict color and typography usage rules.',
      impact: 'Boosted brand engagement by 40% and streamlined collateral production timeline by 50%.'
    },
    featured: true
  },
  {
    id: 'lumina-paris',
    title: 'Lumina Luxury Packaging',
    category: 'Packaging',
    shortDescription: 'Luxury perfume packaging box dielines, foil stamp typography, and high-end e-commerce visual assets.',
    fullOverview: 'Designed tactile luxury packaging for Lumina Paris, featuring custom embossed dielines, metallic gold foil stamping, and editorial photography assets.',
    technologies: ['Illustrator', 'Photoshop', 'Dieline CAD', 'Packaging Print'],
    features: [
      'Custom Dieline Packaging & Box Architecture',
      'Gold Foil Stamping & Embossing Specification',
      'E-Commerce Product Visual Photography Styling',
      'Social Media Launch Campaign Kit'
    ],
    heroImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'
    ],
    liveDemoUrl: 'https://behance.net',
    githubUrl: 'https://behance.net',
    caseStudy: {
      problem: 'Premium pricing required high-end tactile packaging that stood out on luxury boutique shelves.',
      solution: 'Crafted velvet-matte texture dielines with metallic gold accent highlights.',
      impact: 'Brand valuation doubled post-launch with 100% sold-out initial production run.'
    },
    featured: true
  },
  {
    id: 'mantra-tech',
    title: 'Mantra SaaS Design System',
    category: 'UI/UX',
    shortDescription: 'Dark mode UI/UX component library, vector iconography, and marketing portal for enterprise software.',
    fullOverview: 'Designed Apple-grade UI interfaces and dark mode design tokens for Mantra Technologies enterprise SaaS suite.',
    technologies: ['Figma', 'Photoshop', 'UI/UX Design', 'Design Tokens'],
    features: [
      'Figma Component Library with Auto-Layout 5.0',
      'Dark Mode & High-Contrast Visual Themes',
      'Custom Vector Iconography Set (80+ Icons)',
      'High-Converting Landing Page Layouts'
    ],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    liveDemoUrl: 'https://mantra.tech',
    githubUrl: 'https://behance.net',
    caseStudy: {
      problem: 'Legacy dashboard suffered from poor visual hierarchy and low user retention.',
      solution: 'Overhauled UI layout with sleek dark glassmorphism and clear visual tokens.',
      impact: 'Increased user session duration by 65% and reduced onboarding drop-offs.'
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
