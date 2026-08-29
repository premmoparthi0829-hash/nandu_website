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
  // --- Design & Editing Software ---
  {
    name: 'Adobe Photoshop',
    category: 'Design & Editing Software',
    level: 98,
    subtitle: 'Image editing & photo manipulation',
    iconName: 'Ps',
    glowColor: '#0066FF',
    badgeBg: '#001E36',
    textColor: '#31A8FF',
    accentColor: '#0066FF'
  },
  {
    name: 'Adobe Illustrator',
    category: 'Design & Editing Software',
    level: 96,
    subtitle: 'Vector design & illustrations',
    iconName: 'Ai',
    glowColor: '#FF7700',
    badgeBg: '#331000',
    textColor: '#FF9A00',
    accentColor: '#FF7700'
  },
  {
    name: 'Adobe InDesign',
    category: 'Design & Editing Software',
    level: 92,
    subtitle: 'Page layout & publishing',
    iconName: 'Id',
    glowColor: '#D8006C',
    badgeBg: '#2B0017',
    textColor: '#FF3366',
    accentColor: '#D8006C'
  },
  {
    name: 'Figma',
    category: 'Design & Editing Software',
    level: 95,
    subtitle: 'UI design & prototyping',
    iconName: 'Figma',
    glowColor: '#FF3366',
    badgeBg: '#000000',
    textColor: '#FFFFFF',
    accentColor: '#FF3366'
  },
  {
    name: 'Canva',
    category: 'Design & Editing Software',
    level: 95,
    subtitle: 'Quick graphics & visual assets',
    iconName: 'Canva',
    glowColor: '#00C4CC',
    badgeBg: '#00C4CC',
    textColor: '#FFFFFF',
    accentColor: '#00C4CC'
  },
  {
    name: 'Photopea',
    category: 'Design & Editing Software',
    level: 90,
    subtitle: 'Web raster photo editor',
    iconName: 'Pe',
    glowColor: '#00C4CC',
    badgeBg: '#002B2B',
    textColor: '#00E5FF',
    accentColor: '#00C4CC'
  },

  // --- AI / Image & Video Generation Tools ---
  {
    name: 'Ideogram',
    category: 'AI / Image & Video Generation Tools',
    level: 94,
    subtitle: 'AI typography & image generation',
    iconName: 'Ig',
    glowColor: '#A855F7',
    badgeBg: '#2A004E',
    textColor: '#D8B4FE',
    accentColor: '#A855F7'
  },
  {
    name: 'ChatGPT',
    category: 'AI / Image & Video Generation Tools',
    level: 96,
    subtitle: 'Prompt engineering & AI copy',
    iconName: 'GPT',
    glowColor: '#10B981',
    badgeBg: '#064E3B',
    textColor: '#34D399',
    accentColor: '#10B981'
  },
  {
    name: 'Adobe Firefly',
    category: 'AI / Image & Video Generation Tools',
    level: 95,
    subtitle: 'Generative fill & vector AI',
    iconName: 'Flame',
    glowColor: '#FF4500',
    badgeBg: '#3B0A00',
    textColor: '#FF5722',
    accentColor: '#FF4500'
  },
  {
    name: 'Google Gemini/Imagen',
    category: 'AI / Image & Video Generation Tools',
    level: 93,
    subtitle: 'AI image synthesis & prompts',
    iconName: 'Gemini',
    glowColor: '#6366F1',
    badgeBg: '#1E1B4B',
    textColor: '#818CF8',
    accentColor: '#6366F1'
  },
  {
    name: 'Google AI VEO3',
    category: 'AI / Image & Video Generation Tools',
    level: 90,
    subtitle: 'AI video generation & motion',
    iconName: 'Veo',
    glowColor: '#0EA5E9',
    badgeBg: '#083344',
    textColor: '#38BDF8',
    accentColor: '#0EA5E9'
  },
  {
    name: 'OpenAI Sora',
    category: 'AI / Image & Video Generation Tools',
    level: 88,
    subtitle: 'Photorealistic AI video prompting',
    iconName: 'Sora',
    glowColor: '#E11D48',
    badgeBg: '#18181B',
    textColor: '#F43F5E',
    accentColor: '#E11D48'
  },

  // --- Stock Images ---
  {
    name: 'Shutterstock',
    category: 'Stock Images',
    level: 95,
    subtitle: 'Stock photography & vectors',
    iconName: 'Ss',
    glowColor: '#EF4444',
    badgeBg: '#450A0A',
    textColor: '#F87171',
    accentColor: '#EF4444'
  },
  {
    name: 'Adobe Stock',
    category: 'Stock Images',
    level: 96,
    subtitle: 'HD royalty-free visual assets',
    iconName: 'St',
    glowColor: '#F43F5E',
    badgeBg: '#3F0712',
    textColor: '#FB7185',
    accentColor: '#F43F5E'
  },
  {
    name: 'Pexels',
    category: 'Stock Images',
    level: 96,
    subtitle: 'Free high-res photos & videos',
    iconName: 'Px',
    glowColor: '#14B8A6',
    badgeBg: '#042F2E',
    textColor: '#2DD4BF',
    accentColor: '#14B8A6'
  },
  {
    name: 'Pixabay',
    category: 'Stock Images',
    level: 94,
    subtitle: 'Royalty-free graphics & vectors',
    iconName: 'Pb',
    glowColor: '#0284C7',
    badgeBg: '#0F172A',
    textColor: '#38BDF8',
    accentColor: '#0284C7'
  },
  {
    name: 'Rawpixel',
    category: 'Stock Images',
    level: 92,
    subtitle: 'Design mockups & vintage assets',
    iconName: 'Rp',
    glowColor: '#8B5CF6',
    badgeBg: '#1E1B4B',
    textColor: '#A78BFA',
    accentColor: '#8B5CF6'
  },
  {
    name: 'Steptodown',
    category: 'Stock Images',
    level: 90,
    subtitle: 'Resource downloading & tools',
    iconName: 'Sd',
    glowColor: '#F59E0B',
    badgeBg: '#451A03',
    textColor: '#FBBF24',
    accentColor: '#F59E0B'
  }
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
import happyLaborDay from '../assets/happy_labor_day.jpg';
import brandStrongerAnt from '../assets/brand_stronger_ant.jpg';
import givingBrandExtraEdge from '../assets/giving_brand_extra_edge.png';
import silkMeetsSwagger from '../assets/silk_meets_swagger.jpg';
import goaHolidayPackage from '../assets/goa_holiday_package.jpg';
import realEstatePhase1 from '../assets/real_estate_phase_1.jpg';
import caffeineArmy from '../assets/caffeine_army.jpg';
import happyNationalLogisticsDay from '../assets/happy_national_logistics_day.jpg';
import sahibBarbequeBiryani from '../assets/sahib_barbeque_biryani.jpg';
import lastVoyageToGlory from '../assets/last_voyage_to_glory.jpg';
import tropicalFruitJuiceTrophy from '../assets/tropical_fruit_juice_trophy.jpg';
import gulabJamunTempting from '../assets/gulab_jamun_tempting.jpg';
import celebratingNationalSportsDay from '../assets/celebrating_national_sports_day.jpg';
import chaiRefreshPoster from '../assets/chai_refresh_poster.jpg';
import palettePaintsYourIdentity from '../assets/palette_paints_your_identity.jpg';
import keyboardGrenadeSeo from '../assets/keyboard_grenade_seo.jpg';
import designingNot2MinNoodles from '../assets/designing_not_2_min_noodles.jpg';
import ideasFromHeart from '../assets/ideas_from_heart.jpg';
import happyRamNavami from '../assets/happy_ram_navami.jpg';
import meraBharatMahan from '../assets/mera_bharat_mahan.jpg';
import everyCrowdCarriesOpportunities from '../assets/every_crowd_carries_opportunities.jpg';
import liesITellMyself from '../assets/lies_i_tell_myself.jpg';
import whenDesignApprovesFirstAttempt from '../assets/when_design_approves_first_attempt.jpg';
import weekendVibesDesignerOffice from '../assets/weekend_vibes_designer_office.jpg';
import weDontTalkWeCreate from '../assets/we_dont_talk_we_create.jpg';
import happyTeachersDay from '../assets/happy_teachers_day.jpg';
import creativityNeedsSpaceProductionPlanning from '../assets/creativity_needs_space_production_planning.jpg';
import interviewTomorrowBeReady from '../assets/interview_tomorrow_be_ready.jpg';
import julyIsHereChapter07 from '../assets/july_is_here_chapter_07.jpg';
import graphicDesignTrendsYouShouldTry from '../assets/graphic_design_trends_you_should_try.jpg';
import tellUsYourStoryWeWillDesignIt from '../assets/tell_us_your_story_we_will_design_it.jpg';
import happyChildrensDay from '../assets/happy_childrens_day.jpg';
import movieNightCinemaScreen from '../assets/movie_night_cinema_screen.jpg';
import weAreHiringGraphicsDesigner from '../assets/we_are_hiring_graphics_designer.jpg';
import youtubeDimensionsCheatSheet from '../assets/youtube_dimensions_cheat_sheet.jpg';
import instagramDimensionsCheatSheet from '../assets/instagram_dimensions_cheat_sheet.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'chai-refresh-desktop-concept',
    title: 'Chai Refresh — Desktop Context Menu Concept',
    category: 'Poster Design',
    shortDescription: 'Creative Indian tea poster featuring a steaming glass of cutting chai with an OS desktop right-click menu selecting "Refresh".',
    fullOverview: 'A high-concept advertising poster featuring a steaming glass of authentic Indian cutting chai placed on a rustic wood slice coaster against a rich terracotta background. Overlaid with a classic OS desktop context menu selecting the "Refresh" action as a witty metaphor for refreshing one\'s mind with tea.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Creative Concept', 'UI Overlay'],
    features: [
      'Authentic Steaming Cutting Chai Glass Photomontage',
      'Realistic Desktop OS Context Menu Interface Component',
      'Warm Terracotta Studio Lighting & Wood Grain Texture'
    ],
    heroImage: chaiRefreshPoster,
    screenshots: [
      chaiRefreshPoster
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an engaging social poster that connects workplace computer routines with a refreshing tea break.',
      solution: 'Merged desktop UI right-click menu graphics with hot cutting chai photography.',
      impact: 'Garnered massive engagement across social platforms and creative communities.'
    },
    featured: true
  },
  {
    id: 'the-palette-that-paints-your-identity',
    title: 'The Palette That Paints Your Identity — Peacock Art',
    category: 'Branding',
    shortDescription: 'Striking brand identity poster featuring a monochrome peacock with a colorful Pantone color swatch fan tail.',
    fullOverview: 'A luxury brand identity promotional poster featuring a majestic grayscale peacock whose vibrant fan tail is composed of a full-spectrum Pantone color swatch palette. Slogan: "The palette that paints your identity. A symbol of color, creativity, and clarity."',
    technologies: ['Photoshop', 'Brand Identity', 'Photo Manipulation', 'Typography'],
    features: [
      'Monochrome Peacock & Full Spectrum Swatch Tail Fusion',
      'Minimalist High-Contrast Studio Gray Background',
      'Modern Sans-Serif Slogan Typography Hierarchy'
    ],
    heroImage: palettePaintsYourIdentity,
    screenshots: [
      palettePaintsYourIdentity
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing how strategic color token systems define brand elegance and identity.',
      solution: 'Created a surreal contrast between a monochrome peacock body and a vibrant Pantone color wheel tail.',
      impact: 'Highly praised hallmark concept in visual branding portfolio.'
    },
    featured: true
  },
  {
    id: 'seo-is-not-dead-keyboard-grenade',
    title: 'SEO is Not Dead — Keyboard Grenade Campaign',
    category: 'Social Media',
    shortDescription: 'High-concept performance marketing poster featuring a keyboard key grenade under a Google AI search bar.',
    fullOverview: 'A commanding digital marketing ad creative poster: "SEO is Not Dead. It\'s Still Your Biggest Growth Weapon. Let Google Bring Customers to You". Features a dark spiral studio background with a realistic hand grenade constructed entirely out of computer keyboard keycaps anchored under a modern Google AI search bar UI.',
    technologies: ['Photoshop', '3D Composition', 'Ad Creative', 'Digital Marketing'],
    features: [
      'Computer Keycap Hand Grenade Photomontage FX',
      'Integrated Modern Google Search & AI Mode UI Bar',
      'Dark Vortex Spiral Lighting Backdrop'
    ],
    heroImage: keyboardGrenadeSeo,
    screenshots: [
      keyboardGrenadeSeo
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a high-impact performance marketing poster communicating the explosive power of search engine strategy.',
      solution: 'Designed a literal growth weapon metaphor combining keyboard keycaps and a hand grenade pin.',
      impact: 'Drove high CTR and inbound lead inquiries for digital marketing services.'
    },
    featured: true
  },
  {
    id: 'designing-is-not-making-2-minute-noodles',
    title: 'Designing Is Not Making 2 Minute Noodles',
    category: 'Poster Design',
    shortDescription: 'Bold studio manifesto poster featuring a chrome showerhead pouring cooked spaghetti noodles onto a plate.',
    fullOverview: 'An artistic studio philosophy poster titled "DESIGNING IS NOT MAKING 2 MINUTE NOODLES — Good design needs time to think not just speed to deliver." Features a sleek chrome showerhead showering streams of golden cooked spaghetti noodles onto a ceramic plate against a deep cobalt blue background.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Typography', 'Poster Design'],
    features: [
      'Chrome Showerhead Spaghetti Stream Photomontage',
      'Deep Cobalt Blue Radial Lighting Background',
      'Crisp Architectural Typography Layout'
    ],
    heroImage: designingNot2MinNoodles,
    screenshots: [
      designingNot2MinNoodles
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Educating clients on the distinction between rushed turnarounds and thoughtful design craft.',
      solution: 'Crafted a memorable visual surrealism piece turning shower streams into spaghetti noodles.',
      impact: 'Resonated deeply with creative agencies and prospective brand clients.'
    },
    featured: true
  },
  {
    id: 'ideas-from-heart-brain-neural-art',
    title: 'Ideas From Heart — Brain & Heart Neural Art',
    category: 'Poster Design',
    shortDescription: 'Minimalist studio concept poster featuring a human brain connected to a heart via colorful electric neural cables.',
    fullOverview: 'A thought-provoking visual design poster titled "IDEAS FROM HEART", depicting an anatomical human brain connected to a beating heart through a twisted bundle of red, yellow, blue, and black electrical cables set against a clean studio gray background.',
    technologies: ['Photoshop', '3D Photomontage', 'Conceptual Design', 'Typography'],
    features: [
      'Anatomical Brain & Heart Electrical Cable Wiring FX',
      'Minimalist Studio Gray Lighting & Soft Shadows',
      'Bold Slanted Modern Typography "IDEAS FROM HEART"'
    ],
    heroImage: ideasFromHeart,
    screenshots: [
      ideasFromHeart
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing the synergy of rational intellect (brain) and passion (heart) in design thinking.',
      solution: 'Intertwined anatomical heart and brain models with vibrant wiring harnesses.',
      impact: 'Celebrated centerpiece in creative studio manifesto collection.'
    },
    featured: true
  },
  {
    id: 'sahib-barbeque-biryani-haleem',
    title: 'Sahib\'s Barbeque — Biryani & Haleem Chat Poster',
    category: 'Social Media',
    shortDescription: 'Witty social media advertising poster for Sahib\'s Barbeque featuring chat conversation over authentic Biryani & Haleem.',
    fullOverview: 'A creative food campaign poster for Sahib\'s Barbeque. Features top-down photography of aromatic Hyderabadi chicken biryani, cashew-topped Haleem, spicy curry, and raita, paired with a funny text bubble interaction ("Saw you in my dream last night." -> "Was I enjoying Biryani and Haleem at Sahib\'s Barbeque." -> "No..." -> "Wasn\'t me then.").',
    technologies: ['Photoshop', 'Food Photography', 'Social Media Design', 'Advertising'],
    features: [
      'Top-Down High-Detail Food Photography Composition',
      'Realistic Messaging Chat Bubble UI Component Overlay',
      'Natural Woven Mat & Dark Wood Studio Texture'
    ],
    heroImage: sahibBarbequeBiryani,
    screenshots: [
      sahibBarbequeBiryani
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a viral social media campaign for a popular barbeque & biryani restaurant.',
      solution: 'Combined relatable humor text bubbles with mouth-watering food styling.',
      impact: 'Drove massive restaurant table reservations and viral social sharing.'
    },
    featured: true
  },
  {
    id: 'last-voyage-to-glory',
    title: 'The Last Voyage to Glory — World Cup Rowing',
    category: 'Poster Design',
    shortDescription: 'High-concept sports poster depicting Neymar, Messi, and Ronaldo rowing along a sweater zipper towards the World Cup Trophy.',
    fullOverview: 'A surreal sports advertising poster titled "THE LAST VOYAGE TO GLORY." Features football legends Neymar (10), Messi (10), and Ronaldo (7) rowing together in a single crew boat up a unzipped green sweater track toward the golden FIFA World Cup Trophy standing at the top.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Sports Poster', '3D Composition'],
    features: [
      'Surreal Zipper-to-Rowing-River Photomontage FX',
      'High-Detail Miniature Player Sculpt Renders',
      'Cinematic Lens Flare Lighting & Fabric Texture Realism'
    ],
    heroImage: lastVoyageToGlory,
    screenshots: [
      lastVoyageToGlory
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an iconic World Cup poster capturing the final tournament for modern football legends.',
      solution: 'Crafted a powerful metaphorical rowing journey along a fabric zipper toward the trophy.',
      impact: 'Garnered widespread acclaim across sports media and fan communities.'
    },
    featured: true
  },
  {
    id: 'tropical-fruit-juice-trophy',
    title: 'Tropical Fruit Juice Trophy & Arch of Flavors',
    category: 'Packaging',
    shortDescription: 'Hyper-vibrant product display poster featuring a trophy sculpted from tropical fruits surrounded by an arch of 13 fruit juice cans.',
    fullOverview: 'A stunning 3D product showcase poster featuring a giant trophy intricately constructed from carved tropical fruits (pineapple, mango, berries, papaya, passionfruit, watermelon base) under a majestic semi-circular arch of 13 fruit juice cans set against a solid royal blue backdrop.',
    technologies: ['Photoshop', 'Product Design', 'Photo Manipulation', 'Packaging'],
    features: [
      'Sculpted Fruit Sculpture 3D Photomontage Structure',
      'Dynamic 13-Can Symmetrical Arch Product Display',
      'Vibrant Royal Blue Studio Lighting Backdrop'
    ],
    heroImage: tropicalFruitJuiceTrophy,
    screenshots: [
      tropicalFruitJuiceTrophy
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Highlighting an extensive 13-flavor fruit beverage lineup in a single hero product poster.',
      solution: 'Sculpted a trophy of fresh ingredients surrounded by an arch of all 13 beverage cans.',
      impact: 'Increased product range visibility and retail distributor engagement.'
    },
    featured: true
  },
  {
    id: 'gulab-jamun-tempting-order-now',
    title: 'Tempting Gulab Jamun — Food Advertising',
    category: 'Social Media',
    shortDescription: 'High-contrast food advertising poster featuring a hand dipping a syrup-soaked Gulab Jamun over a bowl on bright yellow backdrop.',
    fullOverview: 'A high-converting food delivery social ad poster titled "tempting? To phir order kro." Features a clean warm yellow background with a hand lifting a golden syrup-dripping Gulab Jamun topped with chopped pistachios over a full ceramic bowl.',
    technologies: ['Photoshop', 'Food Photography', 'Ad Creative', 'Typography'],
    features: [
      'Glossy Honey/Syrup Drip Macro Detail',
      'High-Contrast Warm Yellow Studio Background',
      'Modern Hindi/English Conversational Call-To-Action'
    ],
    heroImage: gulabJamunTempting,
    screenshots: [
      gulabJamunTempting
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Driving immediate dessert delivery orders through high visual impulse appeal.',
      solution: 'Captured a glistening syrup-drip moment with bold yellow backdrop and playful CTA text.',
      impact: 'Drove a 45% increase in click-through rates for dessert ordering campaigns.'
    },
    featured: true
  },
  {
    id: 'celebrating-national-sports-day',
    title: 'Celebrating National Sports Day — Indian Heroes',
    category: 'Poster Design',
    shortDescription: 'Patriotic tribute poster celebrating National Sports Day with iconic Indian athletes and 3D Ashoka Chakra tricolor emblem.',
    fullOverview: 'A heroic commemorative campaign poster for National Sports Day. Features a central 3D Ashoka Chakra tricolor banner anchored below a montage of Indian sports icons (Neeraj Chopra, Mary Kom, PV Sindhu, Praggnanandhaa, Gukesh, Mirabai Chanu, Dhyan Chand, Sachin). Headline: "CELEBRATING NATIONAL SPORTS DAY - Today, we honor every hero who made India proud."',
    technologies: ['Photoshop', 'Photo Manipulation', 'Event Poster', 'Typography'],
    features: [
      '3D Embossed Ashoka Chakra & Tricolor Bar Emblem',
      'Multi-Sport Indian Athlete Legends Photomontage',
      'Clean White Brick Wall Background with Taj Silhouette'
    ],
    heroImage: celebratingNationalSportsDay,
    screenshots: [
      celebratingNationalSportsDay
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a high-impact national tribute graphic honoring India\'s sports achievers.',
      solution: 'Constructed a balanced photomontage of sports legends across generations with patriotic 3D emblems.',
      impact: 'Widely featured and shared across sports federations and media channels.'
    },
    featured: true
  },
  {
    id: 'silk-meets-swagger',
    title: 'Silk Meets Swagger! — Fashion Editorial',
    category: 'Poster Design',
    shortDescription: 'Bold fashion promotional poster featuring streetwear styling, vibrant yellow typography, and modern attitude visual design.',
    fullOverview: 'A striking high-fashion editorial poster titled "Silk Meets Swagger!", featuring electric yellow typographic composition, urban rooftop photography perspective, and fusion denim styling. Slogan: "Who Said Style Has Rules?".',
    technologies: ['Photoshop', 'Typography', 'Fashion Styling', 'Poster Art'],
    features: [
      'Vibrant Electric Yellow Typography & Headline Hierarchy',
      'Urban Rooftop Fashion Editorial Photography',
      'Fusion Apparel Composition with Traditional Pattern Panels'
    ],
    heroImage: silkMeetsSwagger,
    screenshots: [
      silkMeetsSwagger
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing a bold fashion campaign poster bridging luxury silk aesthetics with modern street culture.',
      solution: 'Crafted an energetic layout with electric yellow typography and high-contrast sky backdrop.',
      impact: 'Drove massive engagement and brand awareness across fashion design circles.'
    },
    featured: true
  },
  {
    id: 'caffeine-army-best-version',
    title: 'Caffeine Army — Supplement Packaging & Membership',
    category: 'Packaging',
    shortDescription: 'Dynamic floating product packaging poster featuring Caffeine Army fitness supplement cans unboxing experience.',
    fullOverview: 'An energetic product advertising poster for Caffeine Army supplement membership. Features floating product cans (Chocolate, Double Rich Chocolate, Cappuccino, Vanilla Latte) bursting out of a shipping box with dramatic drop shadows and high-impact typography: "YOUR BEST VERSION STARTS NOW!".',
    technologies: ['Photoshop', 'Packaging Design', '3D Product Rendering', 'E-Commerce Branding'],
    features: [
      'Dynamic Floating Product Can Multi-Variant Composition',
      'Realistic Shadow Depth & Packaging Box Unboxing Visual',
      'High-Contrast Kinetic Slogan Typography'
    ],
    heroImage: caffeineArmy,
    screenshots: [
      caffeineArmy
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an eye-catching subscription box campaign poster to boost membership signups.',
      solution: 'Designed a dynamic multi-variant floating product composition highlighting flavor lineup and unboxing excitement.',
      impact: 'Substantially increased membership subscriptions and e-commerce product engagement.'
    },
    featured: true
  },
  {
    id: 'goa-sun-sand-fun-nightlife',
    title: 'Goa — Sun, Sand, Fun & Nightlife',
    category: 'Poster Design',
    shortDescription: 'Vibrant holiday package promotional poster featuring thrilling paragliding high over Goa\'s tropical beach coastline.',
    fullOverview: 'An immersive travel advertising poster for an exclusive Goa holiday package, showcasing an exhilarating paragliding ocean-view shot, crisp 3D "GOA" typography, key itinerary highlights (Fort Aguada, Basilica of Bom Jesus, water sports, cruises), and custom icon indicators.',
    technologies: ['Photoshop', 'Travel Branding', 'Typography', 'Icon Design'],
    features: [
      'Exhilarating Aerial Paragliding Photography Composition',
      '3D White Bold Headline Typography "GOA"',
      'Custom Travel Category Icons (Transport, Accommodation, Sightseeing, Food, Assistance)'
    ],
    heroImage: goaHolidayPackage,
    screenshots: [
      goaHolidayPackage
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Capturing the thrilling adventure and relaxing vibes of Goa in a single high-converting holiday campaign poster.',
      solution: 'Integrated action-packed aerial paragliding visuals with clean feature list typography and custom service icons.',
      impact: 'Boosted holiday package booking inquiries and seasonal campaign CTR.'
    },
    featured: true
  },
  {
    id: 'real-estate-phase-1-possession-soon',
    title: 'Phase 1 — Possession Soon (Luxury Real Estate)',
    category: 'Branding',
    shortDescription: 'Tactile concept poster featuring yellow fabric pulled down by hand to reveal modern residential luxury towers.',
    fullOverview: 'A creative real estate reveal campaign poster titled "Phase 1 - Possession Soon", utilizing a tactile yellow fabric pull-down visual trick to reveal luxury high-rise apartment towers. Highlights key features like Solar Panels, EV Charging, Goods Lift, Rainwater Harvesting, and Solar Reflective Glasses. Slogan: "Once it\'s Gone, it\'s Gone".',
    technologies: ['Photoshop', 'Real Estate Branding', 'Visual Composition', '3D Architecture Integration'],
    features: [
      'Tactile Yellow Fabric Pull-Down Hand Reveal FX',
      'Architectural High-Rise Render Integration',
      'Clean Amenity Vector Icon Grid with Dashed CTA Box'
    ],
    heroImage: realEstatePhase1,
    screenshots: [
      realEstatePhase1
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Standing out in a competitive real estate market during a pre-launch property possession phase.',
      solution: 'Engineered a visual pull-curtain surprise effect revealing the apartment complex with clear amenity badges.',
      impact: 'Accelerated pre-booking phase signups and created strong visual urgency.'
    },
    featured: true
  },
  {
    id: 'happy-national-logistics-day',
    title: 'Happy National Logistics Day',
    category: 'Poster Design',
    shortDescription: 'Striking multi-modal transport poster featuring commercial airliner, freight truck on sea bridge, and container ship.',
    fullOverview: 'A heroic corporate celebration poster for National Logistics Day, depicting seamless supply chain mobility through a stunning 3-tier vertical alignment of air transport (jet airliner), land transport (green freight truck on a cable-stayed bridge), and sea transport (container ship). Subtitle: "Honoring the logistics networks that connect businesses, markets and opportunities worldwide."',
    technologies: ['Photoshop', 'Photo Composition', 'Typography', 'Corporate Campaign'],
    features: [
      'Seamless 3-Tier Multi-Modal Transport Alignment (Air, Land, Sea)',
      'Massive White Knockout Typography Integration Behind Elements',
      'Balanced Ocean Sky Dynamic Horizon Composition'
    ],
    heroImage: happyNationalLogisticsDay,
    screenshots: [
      happyNationalLogisticsDay
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing the immense scale and interconnectedness of global logistics for a national corporate celebration.',
      solution: 'Aligned air, land, and ocean freight vehicles in a striking single-frame perspective with integrated typography.',
      impact: 'Widely shared across corporate logistics networks and industrial supply chain media.'
    },
    featured: true
  },
  {
    id: 'happy-labor-day-may-1st',
    title: 'Happy Labor Day — May 1st',
    category: 'Poster Design',
    shortDescription: 'High-impact Labor Day promotional poster featuring bold red distressed typography and worker hand photomontage with wrench.',
    fullOverview: 'A powerful tribute poster designed for May 1st Happy Labor Day, incorporating detailed hand photomontage holding a heavy wrench seamlessly integrated into the distressed 3D numeral 1 typography.',
    technologies: ['Photoshop', 'Typography', 'Photo Manipulation', 'Poster Design'],
    features: [
      '3D Distressed Numeral & Lettering Composition',
      'High Detail Worker Hand & Heavy Wrench Photomontage',
      'Vibrant Red & Sky Contrast Lighting'
    ],
    heroImage: happyLaborDay,
    screenshots: [
      happyLaborDay
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a powerful, heroic tribute to workers on May 1st Labor Day.',
      solution: 'Merged rugged tactile textures, industrial tools, and energetic typographic layout.',
      impact: 'Delivered a memorable and evocative holiday brand campaign visual.'
    },
    featured: true
  },
  {
    id: 'we-make-your-brand-stronger',
    title: 'We Make Your Brand Stronger Than You Think',
    category: 'Branding',
    shortDescription: 'Creative branding poster featuring an ant in boxing gloves standing triumphantly on an elephant.',
    fullOverview: 'A high-concept advertising campaign poster illustrating brand power through surreal visual metaphor — a small ant wearing red boxing gloves standing atop a knocked out elephant, paired with clean brand slogan typography.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Branding Strategy', 'Poster Art'],
    features: [
      'Surreal Ant vs Elephant Photomontage',
      'Clean Modern Slogan Typography Hierarchy',
      'High-Contrast Soft Blue Lighting & Shadows'
    ],
    heroImage: brandStrongerAnt,
    screenshots: [
      brandStrongerAnt
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Communicating how small/growing brands can out-compete industry giants with smart design.',
      solution: 'Created an unforgettable visual analogy using a boxing ant and a fallen elephant.',
      impact: 'Increased client engagement and brand storytelling impact.'
    },
    featured: true
  },
  {
    id: 'giving-your-brand-an-extra-edge',
    title: 'Giving Your Brand An Extra Edge',
    category: 'Branding',
    shortDescription: '3D conceptual poster featuring wooden carved typography emerging sharp and refined from a red pencil sharpener.',
    fullOverview: 'An artistic 3D branding poster concept demonstrating craftsmanship and brand refinement. Features custom wood-grain carved typography being sharpened to a fine edge out of a classic red pencil sharpener.',
    technologies: ['Photoshop', '3D Composition', 'Typography', 'Creative Branding'],
    features: [
      'Wood-Grain Carved Text Shaving Effect',
      'Hyper-realistic Pencil & Red Sharpener 3D Model Render',
      'Minimalist Clean Studio White Background'
    ],
    heroImage: givingBrandExtraEdge,
    screenshots: [
      givingBrandExtraEdge
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing how strategic design sharpens a brand\'s competitive advantage.',
      solution: 'Designed a literal sharpening metaphor where brand typography is honed to perfection.',
      impact: 'Highly acclaimed design concept in brand identity portfolio.'
    },
    featured: true
  },
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
  },
  {
    id: 'happy-ram-navami-festival-poster',
    title: 'Happy Ram Navami — Festival Poster Design',
    category: 'Poster Design',
    shortDescription: 'Devotional Ram Navami poster featuring carved idols of Lord Ram and Lord Hanuman bowing in reverence with hanging brass bells.',
    fullOverview: 'A devotional festival poster created for Happy Ram Navami. Features carved black stone idols of Lord Ram standing in an ornate archway with Lord Hanuman bowing in reverence, framed by a bold red banner, golden light burst, and hanging brass temple bells.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Festival Campaign', 'Typography'],
    features: [
      '3D Carved Idol Photomontage & Ornate Arch Architecture',
      'Hanging Brass Temple Bells Composition',
      'Warm Cream Studio Lighting & Golden Radial Flare'
    ],
    heroImage: happyRamNavami,
    screenshots: [
      happyRamNavami
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing a culturally authentic and visually majestic festival campaign poster for Ram Navami.',
      solution: 'Merged detailed stone idol photorealistic renders with traditional temple bell aesthetics.',
      impact: 'Garnered immense social sharing and positive brand audience reception.'
    },
    featured: true
  },
  {
    id: 'mera-bharat-mahan-74-years-progress',
    title: 'Mera Bharat Mahan — 74 Years of Progress',
    category: 'Poster Design',
    shortDescription: 'Monochromatic cultural map poster featuring the Indian Tricolor Flag surrounded by 74 years of progress sketches.',
    fullOverview: 'A patriotic celebration poster titled "मेरा भारत महान — 74 YEARS OF PROGRESS, UNITY, AND PRIDE". Features an Indian map outline framing the waving Tricolor Flag, surrounded by monochrome sketches of Indian culture, classical music, sports heroes, scientists, doctors, and defense forces.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Patriotic Campaign', 'Illustration'],
    features: [
      'Indian Map Cutout Silhouette & Waving Tricolor Flag',
      'High-Detail Monochromatic Cultural Photomontage Frame',
      'Deep Indigo & Slate Blue Atmospheric Gradient'
    ],
    heroImage: meraBharatMahan,
    screenshots: [
      meraBharatMahan
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an evocative national milestone poster honoring India\'s 74-year journey of unity and growth.',
      solution: 'Framed the national flag inside an India map silhouette surrounded by diverse cultural portraits.',
      impact: 'Widely praised patriotic artwork across corporate and public media.'
    },
    featured: true
  },
  {
    id: 'every-crowd-carries-countless-opportunities',
    title: 'Every Crowd Carries Countless Opportunities',
    category: 'Graphic',
    shortDescription: 'Minimalist editorial poster featuring a queue of people walking up an elevated staircase into endless possibilities.',
    fullOverview: 'A sleek minimalist poster titled "Every crowd carries countless opportunities". Features a perspective shot of a long queue of diverse people walking up an elevated staircase platform against an expansive warm beige background.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Minimalist Design', 'Typography'],
    features: [
      'Expansive Minimalist Warm Beige Space & Perspective Queue',
      'High-Detail Character Alignment & Elevated Staircase',
      'Clean Modern Sans-Serif Slogan Typography'
    ],
    heroImage: everyCrowdCarriesOpportunities,
    screenshots: [
      everyCrowdCarriesOpportunities
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Communicating how large audiences and crowded markets represent untapped business potential.',
      solution: 'Engineered a clean perspective line of people leading up to an elevated vantage point.',
      impact: 'Drove high engagement for corporate audience strategy campaigns.'
    },
    featured: true
  },
  {
    id: 'lies-i-tell-myself-biryani',
    title: 'Lies I Tell Myself — Biryani & Pop Culture',
    category: 'Social Media',
    shortDescription: 'Witty social media poster comparing everyday binge habits (Netflix, Instagram) with Biryani craving.',
    fullOverview: 'A relatable social media campaign poster titled "Lies I tell myself". Features a red textured background with 3 rounded UI cards: "NETFLIX - Just one more episode", "Instagram - Just one more reel", and a mouth-watering biryani plate card: "Just one more biriyani".',
    technologies: ['Photoshop', 'Social Media Design', 'Food Photography', 'Ad Creative'],
    features: [
      'Pop Culture Relatable UI Notification Card Design',
      'High-Detail Gourmet Biryani Plate Cutout',
      'Textured Crimson Red Backdrop'
    ],
    heroImage: liesITellMyself,
    screenshots: [
      liesITellMyself
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a highly shareable social media ad tapping into everyday pop-culture humor.',
      solution: 'Compared popular streaming/social binge habits directly with food cravings.',
      impact: 'Generated high viral shares and engagement across food ordering networks.'
    },
    featured: true
  },
  {
    id: 'when-design-approves-first-attempt',
    title: 'When Design Approves In First Attempt! — Meme Poster',
    category: 'Social Media',
    shortDescription: 'Humorous designer meme poster celebrating first-attempt client design approvals.',
    fullOverview: 'A fun studio culture poster titled "When Design Approves In First Attempt! LE DESIGNER". Features a warm beige background with a red-outlined cutout of a dancing designer celebrating with open arms.',
    technologies: ['Photoshop', 'Meme Marketing', 'Social Media Design', 'Typography'],
    features: [
      'High-Impact Red Outlined Character Cutout',
      'Clean Modern Meme Typography Hierarchy',
      'Warm Textured Paper Studio Backdrop'
    ],
    heroImage: whenDesignApprovesFirstAttempt,
    screenshots: [
      whenDesignApprovesFirstAttempt
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating relatable agency humor content to connect with creative professionals and clients.',
      solution: 'Combined iconic dance celebrating energy with clean bold typography.',
      impact: 'Achieved top engagement and reshapes across designer communities.'
    },
    featured: true
  },
  {
    id: 'weekend-vibes-designer-office-changes',
    title: 'Weekend Vibes — Designer Office Tug of War',
    category: 'Social Media',
    shortDescription: 'Witty social media agency poster showing a designer leaving office at 7 pm pulled back by last moment changes.',
    fullOverview: 'A relatable agency culture poster titled "Weekend Vibes". Features a red dual-card layout showing a designer in a suit sprinting to leave office at 7 pm being pulled backward by a heavy rope in a tug-of-war against "Last Moment Changes".',
    technologies: ['Photoshop', 'Photo Manipulation', 'Agency Culture', 'Ad Creative'],
    features: [
      'Dual Red Card Split Tug-of-War Photomontage',
      'High-Action Motion Line Graphic Overlays',
      'Clean Modern Agency Icon Badges'
    ],
    heroImage: weekendVibesDesignerOffice,
    screenshots: [
      weekendVibesDesignerOffice
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an engaging social media post capturing designer workplace humor before the weekend.',
      solution: 'Designed a tug-of-war visual metaphor between leaving on time and incoming revision requests.',
      impact: 'Garnered massive viral shares across agency teams and social media marketing groups.'
    },
    featured: true
  },
  {
    id: 'we-dont-talk-we-create',
    title: 'We Don\'t Talk We Create — Agency Manifesto',
    category: 'Branding',
    shortDescription: 'Sleek monochrome editorial poster featuring 3D white face sculpture with glasses over a social media platform bar.',
    fullOverview: 'A luxury agency manifesto poster titled "We Don\'t Talk We Create". Features a high-detail 3D white ceramic face sculpture wearing black horn-rimmed glasses, with a floating pill-bar showcasing top digital platforms: YouTube, Google, Pinterest, Instagram, LinkedIn, and Behance.',
    technologies: ['Photoshop', '3D Sculpting', 'Brand Strategy', 'Typography'],
    features: [
      'Ceramic White Face Sculpture & Glasses Render',
      'Floating Social & Portfolio Platform Bar Component',
      'Minimalist White Diagonal Ribbon Background'
    ],
    heroImage: weDontTalkWeCreate,
    screenshots: [
      weDontTalkWeCreate
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing agency focus on tangible creative execution over talk.',
      solution: 'Sculpted a minimalist face model with black glasses and platform badges covering the mouth.',
      impact: 'Established a premium hallmark graphic in corporate agency portfolio.'
    },
    featured: true
  },
  {
    id: 'happy-teachers-day-blackboard-tribute',
    title: 'Happy Teacher\'s Day — Classroom Blackboard Tribute',
    category: 'Poster Design',
    shortDescription: 'Heartwarming Teacher\'s Day tribute poster featuring a student drawing Dr. Radhakrishnan on a classroom blackboard.',
    fullOverview: 'A poignant celebration poster for Happy Teacher\'s Day. Features a wooden classroom perspective with green wooden desks and a young school student drawing a chalk portrait of Dr. Sarvepalli Radhakrishnan on a giant blackboard. Headline: "Thanks to the teachers who shape a brighter future for their students."',
    technologies: ['Photoshop', 'Photo Manipulation', 'Chalk Illustration', 'Typography'],
    features: [
      'Wooden Classroom Perspective & Student Photomontage',
      'Hand-Drawn Chalk Portrait Vector Illustration FX',
      'Textured Dark Slate Blackboard Frame'
    ],
    heroImage: happyTeachersDay,
    screenshots: [
      happyTeachersDay
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing a touching tribute graphic for Teacher\'s Day honoring educators across schools.',
      solution: 'Combined photorealistic classroom environment with chalk line-art portraiture on a blackboard.',
      impact: 'Widely featured and shared across educational institutions and social campaigns.'
    },
    featured: true
  },
  {
    id: 'creativity-needs-space-production-planning',
    title: 'Creativity Needs Space / Production Needs Planning',
    category: 'Poster Design',
    shortDescription: 'Monochromatic green studio stage poster featuring green furniture and bold wall typography.',
    fullOverview: 'An architectural studio design poster featuring a monochrome neon-green room stage on wheels. Wall typography displays dual core principles: "CREATIVITY NEEDS SPACE" and "PRODUCTION NEEDS PLANNING", surrounding a green sofa, armchair, coffee table, and desk lamp.',
    technologies: ['Photoshop', '3D Room Rendering', 'Typography', 'Architectural Design'],
    features: [
      'Monochrome Green Studio Room Stage Render',
      'Large Architectural Wall Typography Integration',
      'Cinematic Studio Spotlight & Deep Shadow FX'
    ],
    heroImage: creativityNeedsSpaceProductionPlanning,
    screenshots: [
      creativityNeedsSpaceProductionPlanning
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing the balance between creative freedom and structured production workflow in design studios.',
      solution: 'Built a 3D monochrome green room stage with environmental wall typography.',
      impact: 'Featured centerpiece in studio space and workflow planning campaigns.'
    },
    featured: true
  },
  {
    id: 'interview-tomorrow-be-ready',
    title: 'Interview Tomorrow. Be Ready. — Alert Poster',
    category: 'Social Media',
    shortDescription: 'Striking red event reminder poster featuring a 3D yellow notification bell with notification badge on calendar backdrop.',
    fullOverview: 'A high-impact event reminder creative poster titled "Interview Tomorrow. Be Ready." Features a rich crimson calendar backdrop with a pinned white note card, a 3D glossy yellow notification bell with a red badge count \'1\', and contact info pill button.',
    technologies: ['Photoshop', '3D Icon Design', 'Social Media Design', 'Typography'],
    features: [
      '3D Glossy Yellow Bell & Notification Badge Component',
      'Pinned White Paper Card Photomontage Overlay',
      'Crimson Red Calendar Grid & Pill Button Interface'
    ],
    heroImage: interviewTomorrowBeReady,
    screenshots: [
      interviewTomorrowBeReady
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an urgent and eye-catching event notification creative for recruitment webinars.',
      solution: 'Merged realistic calendar grid textures with high-contrast 3D notification badges.',
      impact: 'Drove massive event registrations and high webinar seat booking conversions.'
    },
    featured: true
  },
  {
    id: 'july-is-here-chapter-07',
    title: 'July Is Here — Chapter 07 New Goals Poster',
    category: 'Branding',
    shortDescription: 'Elegant monthly milestone poster featuring an open burgundy editorial book and incoming call UI badge.',
    fullOverview: 'A sophisticated brand manifesto poster titled "July is here — New month. New energy. New opportunities." Features a minimalist cream background with an open hardcover burgundy book ("Chapter 6 Completed" -> "CHAPTER 07 JULY") and an incoming call notification widget.',
    technologies: ['Photoshop', 'Editorial Layout', '3D Mockup', 'Brand Identity'],
    features: [
      'Open Hardcover Book & Foil Stamp Typography',
      'Minimalist Incoming Call UI Pill Widget',
      'Warm Cream Paper Texture & Subtle Leaf Shadows'
    ],
    heroImage: julyIsHereChapter07,
    screenshots: [
      julyIsHereChapter07
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing an inspiring mid-year brand campaign visual for monthly goal setting.',
      solution: 'Created a book metaphor transitioning from completed Chapter 6 to fresh Chapter 7.',
      impact: 'Highly reshared mid-year motivational creative across social brand channels.'
    },
    featured: true
  },
  {
    id: 'graphic-design-trends-you-should-try',
    title: 'Graphic Design Trends You Should Try — App Bracelet',
    category: 'Graphic',
    shortDescription: 'High-concept creative poster featuring a hand wearing a floating metallic bracelet of 3D glass app icons.',
    fullOverview: 'A dark, futuristic design trend poster titled "GRAPHIC DESIGN TRENDS YOU SHOULD TRY". Features a dramatic dark marble studio background with a human hand encircled by a floating metallic ring of 3D glass software tokens (Photoshop, Illustrator, Premiere, After Effects, Figma).',
    technologies: ['Photoshop', '3D Token Rendering', 'Photo Manipulation', 'Typography'],
    features: [
      'Floating 3D Glass & Chrome Software Icon Bracelet FX',
      'Dramatic Studio Lighting & Dark Marble Texture',
      'High-Impact White & Red Headline Hierarchy'
    ],
    heroImage: graphicDesignTrendsYouShouldTry,
    screenshots: [
      graphicDesignTrendsYouShouldTry
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Visualizing mastery across design tools in a single compelling creative poster.',
      solution: 'Engineered a floating bracelet composed of glass 3D application icons encircling a hand.',
      impact: 'Generated immense praise and inspiration across design agency portfolios.'
    },
    featured: true
  },
  {
    id: 'tell-us-your-story-we-will-design-it',
    title: 'Tell Us Your Story — We Will Design It',
    category: 'Social Media',
    shortDescription: 'Corporate agency ad poster featuring a top-down view of a business meeting exchanging chat bubbles.',
    fullOverview: 'A professional corporate campaign poster titled "Tell Us Your Story — We Will Design it". Features a rich royal blue studio background with a top-down perspective of two executives seated across a table exchanging messaging chat bubbles.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Social Media Design', 'Corporate Branding'],
    features: [
      'Top-Down Executive Meeting Perspective Composition',
      'Integrated Realistic Message Chat Bubble UI',
      'Deep Royal Blue Studio Radial Lighting'
    ],
    heroImage: tellUsYourStoryWeWillDesignIt,
    screenshots: [
      tellUsYourStoryWeWillDesignIt
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing a client acquisition creative communicating collaborative design storytelling.',
      solution: 'Pioneered an aerial view composition connecting human interaction with messaging UI.',
      impact: 'Drove significant inbound client inquiries for custom design & branding services.'
    },
    featured: true
  },
  {
    id: 'happy-childrens-day-dreams-soar',
    title: 'Happy Children\'s Day — Let Your Dreams Soar',
    category: 'Poster Design',
    shortDescription: 'Vibrant Children\'s Day poster featuring a superhero child with yellow mask, red cape, and launching 3D rocket.',
    fullOverview: 'An energetic celebration poster for Happy Children\'s Day titled "Let your dreams soar". Features a bright sky blue radial background with clouds, a hot air balloon, rollercoaster, 3D rocket launching, and a smiling hero child wearing a yellow mask, red cape, and flexing arms.',
    technologies: ['Photoshop', '3D Composition', 'Character Retouching', 'Poster Art'],
    features: [
      'Heroic Superhero Child & Cape Photomontage',
      '3D Rocket Launch & Hot Air Balloon Environment',
      'Vibrant Blue & Yellow 3D Typographic Headline'
    ],
    heroImage: happyChildrensDay,
    screenshots: [
      happyChildrensDay
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a joyful, high-energy festival poster honoring Children\'s Day.',
      solution: 'Combined 3D rocket launching FX with superhero child character styling.',
      impact: 'Delivered an uplifting and widely celebrated holiday brand creative.'
    },
    featured: true
  },
  {
    id: 'movie-night-cinema-screen-poster',
    title: 'Movie Night — Cinema Theater Screen Poster',
    category: 'Poster Design',
    shortDescription: 'Atmospheric theater poster featuring red velvet seats and a giant glowing movie screen displaying typography.',
    fullOverview: 'A dramatic cinema promotional poster titled "MOVIE NIGHT". Features a full theater perspective filled with red plush velvet seats, popcorn bucket, and a giant illuminated curved cinema screen displaying bold white and script headline typography.',
    technologies: ['Photoshop', 'Typography', 'Lighting FX', 'Poster Art'],
    features: [
      'Red Velvet Cinema Seating & Theater Interior Perspective',
      'Giant Illuminated Screen Typography Composition',
      'Popcorn Box Detail & Ambient Ceiling Spotlight FX'
    ],
    heroImage: movieNightCinemaScreen,
    screenshots: [
      movieNightCinemaScreen
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating an immersive entertainment event poster evoking authentic cinema theater nostalgia.',
      solution: 'Constructed a low-angle theater seating perspective pointing up to a glowing red screen.',
      impact: 'Garnered massive engagement across film societies and movie night promotion campaigns.'
    },
    featured: true
  },
  {
    id: 'we-are-hiring-graphics-designer-green-chairs',
    title: 'We Are Hiring Graphics Designer — Studio Armchairs',
    category: 'Poster Design',
    shortDescription: 'Luxury recruitment poster featuring green velvet armchairs under a spotlight with floating app icons.',
    fullOverview: 'A high-concept studio recruitment poster titled "WE ARE HIRING GRAPHICS DESIGNER". Features a striking monochromatic green environment with three tufted green velvet armchairs, a central green walkway illuminated by a pendant spotlight, and floating social app icon silhouettes.',
    technologies: ['Photoshop', '3D Room Design', 'Recruitment Campaign', 'Typography'],
    features: [
      'Tufted Green Velvet Armchairs & Spotlight Environment',
      'Emerald Green Walkway Perspective & Icon Overlay',
      'High-Impact White Slanted Architectural Typography'
    ],
    heroImage: weAreHiringGraphicsDesigner,
    screenshots: [
      weAreHiringGraphicsDesigner
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing an unconventional, high-end recruitment creative to attract senior graphic designers.',
      solution: 'Engineered a spotlighted executive armchair stage in emerald green studio aesthetics.',
      impact: 'Attracted high-quality portfolio submissions and senior design candidate applications.'
    },
    featured: true
  },
  {
    id: 'youtube-dimensions-cheat-sheet-guide',
    title: 'YouTube Dimensions Cheat Sheet — Creator Guide',
    category: 'Graphic',
    shortDescription: 'Technical design cheat sheet displaying precise dimension blueprints for YouTube channel assets.',
    fullOverview: 'A sleek creator reference graphic for YouTube content strategists. Features a dark tech grid background with glowing neon-orange wireframes detailing exact dimensions for Profile Photos (800x800 px), Profile Covers (2560x1440 px), Thumbnails (1280x720 px), Watermarks (150x150 px), Reels (1080x1920 px), and Display Ads.',
    technologies: ['Photoshop', 'Infographic Design', 'UI Blueprint', 'Technical Guide'],
    features: [
      'Neon Orange Tech Wireframe Grid Layout',
      'Comprehensive YouTube Asset Dimension Specifications',
      'Official YouTube Logo & Clean Dark Background'
    ],
    heroImage: youtubeDimensionsCheatSheet,
    screenshots: [
      youtubeDimensionsCheatSheet
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Creating a clean, highly functional cheat sheet for video content creators and social media managers.',
      solution: 'Organized asset dimensions into high-contrast neon wireframe blueprint modules.',
      impact: 'Saved and shared extensively by video editors, content creators, and social managers.'
    },
    featured: true
  },
  {
    id: 'instagram-dimensions-cheat-sheet-guide',
    title: 'Instagram Dimensions Cheat Sheet — Creator Guide',
    category: 'Graphic',
    shortDescription: 'Infographic cheat sheet displaying exact pixel dimension specifications for Instagram media formats.',
    fullOverview: 'An essential technical reference graphic for Instagram marketers. Features a dark purple gradient background with neon wireframe frames covering Profile Photos (320x320 px), Square Carousels (1080x1080 px), Portrait Carousels (1080x1350 px), Stories (1080x1920 px), Reels (1080x1920 px), and Landscape posts.',
    technologies: ['Photoshop', 'Infographic Design', 'UI Blueprint', 'Social Media Guide'],
    features: [
      'Official Instagram Gradient Logo & Dark Grid Aesthetics',
      'Complete Aspect Ratio & Pixel Dimension Reference Cards',
      'High-Readability Modern Sans-Serif Typographic Layout'
    ],
    heroImage: instagramDimensionsCheatSheet,
    screenshots: [
      instagramDimensionsCheatSheet
    ],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Developing a definitive visual cheat sheet for social media marketers managing Instagram content.',
      solution: 'Laid out all key post formats and aspect ratios in crisp neon wireframe blocks.',
      impact: 'Became a viral reference asset across social media marketing communities.'
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
