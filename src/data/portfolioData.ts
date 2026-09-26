import { Project, Skill, ServiceItem, ExperienceItem, Testimonial } from '../types/app';
import heroImg from '../assets/designer_portrait.png';
import cvPdf from '../assets/nandini.cv.pdf';
import premmAvatar from '../assets/premm_moparthi.jpg';
import lakshmiAvatar from '../assets/lakshmi_venkumahanti.jpg';
import swathiAvatar from '../assets/bavanaka_swathi.png';


export const PERSONAL_INFO = {
  name: "Nandini Vaddepalli",
  logoText: "NV",
  title: "Creative Senior Graphic Designer & Visual Brand Specialist",
  subTitle: "Brand Identity Systems | Print & Packaging | UI/UX Specialist",
  tagline: "DESIGNING JOY IN EVERY PIXEL",
  shortBio: "Creative Lead with 4.5+ years of experience constructing iconic brand identities, print packaging, high-converting digital marketing campaigns, and sleek UI design systems.",
  yearsExperience: "4.5+",
  projectsCompleted: "100+",
  technologiesCount: "10+",
  clientSatisfaction: "100%",
  email: "nandini.vaddepalli31@gmail.com",
  phone: "+91 7287928766",
  location: "Hyderabad, India",
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/nandini-vaddepalli-a9823032b/",
  avatarUrl: heroImg,
  heroImage: heroImg,
  resumeUrl: cvPdf
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
  },
  {
    name: 'Freepik',
    category: 'Stock Images',
    level: 95,
    subtitle: 'AI vectors, PSD & stock resources',
    iconName: 'Fk',
    glowColor: '#0066FF',
    badgeBg: '#0A2540',
    textColor: '#38BDF8',
    accentColor: '#0066FF'
  },
  {
    name: 'Unsplash',
    category: 'Stock Images',
    level: 96,
    subtitle: 'HD royalty-free photography',
    iconName: 'Us',
    glowColor: '#FFFFFF',
    badgeBg: '#111111',
    textColor: '#FFFFFF',
    accentColor: '#FFFFFF'
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

import silkMeetsSwagger from '../assets/silk_meets_swagger.jpg';
import goaHolidayPackage from '../assets/goa_holiday_package.jpg';
import realEstatePhase1 from '../assets/real_estate_phase_1.jpg';
import caffeineArmy from '../assets/caffeine_army.jpg';
import happyNationalLogisticsDay from '../assets/happy_national_logistics_day.jpg';
import sahibBarbequeBiryani from '../assets/sahib_barbeque_biryani.jpg';
import gulabJamunTempting from '../assets/gulab_jamun_tempting.jpg';
import celebratingNationalSportsDay from '../assets/celebrating_national_sports_day.jpg';
import chaiRefreshPoster from '../assets/chai_refresh_poster.jpg';
import palettePaintsYourIdentity from '../assets/palette_paints_your_identity.jpg';
import keyboardGrenadeSeo from '../assets/keyboard_grenade_seo.jpg';
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
import tellUsYourStoryWeWillDesignIt from '../assets/tell_us_your_story_we_will_design_it.jpg';
import happyChildrensDay from '../assets/happy_childrens_day.jpg';
import movieNightCinemaScreen from '../assets/movie_night_cinema_screen.jpg';
import weAreHiringGraphicsDesigner from '../assets/we_are_hiring_graphics_designer.jpg';
import youtubeDimensionsCheatSheet from '../assets/youtube_dimensions_cheat_sheet.jpg';
import instagramDimensionsCheatSheet from '../assets/instagram_dimensions_cheat_sheet.jpg';
import featuredLearnCreateGrow from '../assets/featured_learn_create_grow.jpg';
import featuredWebsitesPerform from '../assets/featured_websites_perform.jpg';
import featuredPostWithoutStrategy from '../assets/featured_post_without_strategy.jpg';
import featuredLifeInAMetro from '../assets/featured_life_in_a_metro.jpg';
import featuredOrderAt4pmDipBy411pm from '../assets/featured_order_at_4pm_dip_by_411pm.jpg';
import featuredSambarVadaDip from '../assets/featured_sambar_vada_dip.jpg';
import featuredMithaiMilkcake from '../assets/featured_mithai_milkcake.jpg';
import featuredBadamKheerGulabJamun from '../assets/featured_badam_kheer_gulab_jamun.jpg';
import featuredExploreMalaysiaTravel from '../assets/featured_explore_malaysia_travel.jpg';
import featuredSoftIdliGhee from '../assets/featured_soft_idli_ghee.jpg';

import wishingNewYear2026 from '../assets/wishing_1_new_year_2026.jpg';
import wishingNationalYouthDay from '../assets/wishing_2_national_youth_day.jpg';
import wishingIndianArmyDay from '../assets/wishing_3_indian_army_day.jpg';
import wishingNationalStartupDay from '../assets/wishing_4_national_startup_day.jpg';
import wishingNationalVotersDay from '../assets/wishing_5_national_voters_day.jpg';
import wishingRepublicDay from '../assets/wishing_6_republic_day.jpg';
import wishingWorldCancerDay from '../assets/wishing_7_world_cancer_day.jpg';
import wishingValentinesDay from '../assets/wishing_8_valentines_day.jpg';
import wishingNationalScienceDay from '../assets/wishing_9_national_science_day.jpg';
import wishingWorldWildlifeDay from '../assets/wishing_10_world_wildlife_day.jpg';
import wishingNationalSafetyMonth from '../assets/wishing_11_national_safety_month.jpg';
import wishingInternationalWomensDay from '../assets/wishing_12_international_womens_day.jpg';
import wishingNationalMathematicsDay from '../assets/wishing_13_national_mathematics_day.jpg';
import wishingWorldWaterDay from '../assets/wishing_14_world_water_day.jpg';
import wishingWorldTheatreDay from '../assets/wishing_15_world_theatre_day.jpg';
import wishingAmbedkarJayanti from '../assets/wishing_16_ambedkar_jayanti.jpg';
import wishingGandhiJayanti from '../assets/wishing_17_gandhi_jayanti.jpg';
import wishingInternationalDanceDay from '../assets/wishing_18_international_dance_day.jpg';
import wishingLabourDay from '../assets/wishing_19_labour_day.jpg';
import wishingNationalTechnologyDay from '../assets/wishing_20_national_technology_day.jpg';
import wishingInternationalNursesDay from '../assets/wishing_21_international_nurses_day.jpg';
import wishingWorldTelecommunicationDay from '../assets/wishing_22_world_telecommunication_day.png';
import wishingInternationalMuseumDay from '../assets/wishing_23_international_museum_day.jpg';
import wishingWorldBeeDay from '../assets/wishing_24_world_bee_day.jpg';
import wishingWorldBicycleDay from '../assets/wishing_25_world_bicycle_day.jpg';
import wishingInternationalYogaDay from '../assets/wishing_26_international_yoga_day.jpg';
import wishingNationalStatisticsDay from '../assets/wishing_27_national_statistics_day.jpg';
import wishingNationalDoctorsDay from '../assets/wishing_28_national_doctors_day.jpg';
import wishingCaDay from '../assets/wishing_29_ca_day.jpg';
import wishingWorldPopulationDay from '../assets/wishing_30_world_population_day.jpg';
import wishingWorldEmojiDay from '../assets/wishing_31_world_emoji_day.jpg';
import wishingInternationalChessDay from '../assets/wishing_32_international_chess_day.jpg';
import wishingNationalHandloomDay from '../assets/wishing_33_national_handloom_day.jpg';
import wishingQuitIndiaMovement from '../assets/wishing_34_quit_india_movement.jpg';
import wishingWorldPhotographyDay from '../assets/wishing_35_world_photography_day.jpg';
import wishingNationalSpaceDay from '../assets/wishing_36_national_space_day.jpg';
import wishingNationalSportsDay from '../assets/wishing_37_national_sports_day.jpg';
import wishingTeachersDay from '../assets/wishing_38_teachers_day.jpg';
import wishingInternationalLiteracyDay from '../assets/wishing_39_international_literacy_day.jpg';
import wishingEngineersDay from '../assets/wishing_40_engineers_day.jpg';
import wishingWorldTourismDay from '../assets/wishing_41_world_tourism_day.jpg';
import wishingWorldHeartDay from '../assets/wishing_42_world_heart_day.jpg';
import wishingInternationalCoffeeDay from '../assets/wishing_43_international_coffee_day.jpg';
import wishingIndianAirForceDay from '../assets/wishing_44_indian_air_force_day.jpg';
import wishingWorldPostDay from '../assets/wishing_45_world_post_day.png';
import wishingNationalUnityDay from '../assets/wishing_46_national_unity_day.jpg';
import wishingNationalEducationDay from '../assets/wishing_47_national_education_day.jpg';
import wishingChildrensDay from '../assets/wishing_48_childrens_day.jpg';
import wishingInternationalMensDay from '../assets/wishing_49_international_mens_day.jpg';
import wishingNationalConstitutionDay from '../assets/wishing_50_national_constitution_day.jpg';
import wishingNationalSecurityDay from '../assets/wishing_51_national_security_day.jpg';
import wishingInternationalMotherLanguageDay from '../assets/wishing_52_international_mother_language_day.jpg';
import wishingHarGharTiranga from '../assets/wishing_53_har_ghar_tiranga.jpg';
import wishingVishwakarmaPuja from '../assets/wishing_54_vishwakarma_puja.jpg';
import wishingIndianNavyDay from '../assets/wishing_55_indian_navy_day.jpg';
import wishingIndianArmedForceFlagDay from '../assets/wishing_56_indian_armed_force_flag_day.jpg';
import wishingInternationalAntiCorruptionDay from '../assets/wishing_57_international_anti_corruption_day.jpg';
import wishingHumanRightsDay from '../assets/wishing_58_human_rights_day.jpg';
import wishingInternationalMountainDay from '../assets/wishing_59_international_mountain_day.jpg';
import wishingNationalFarmersDay from '../assets/wishing_60_national_farmers_day.jpg';
import wishingNationalCivilServicesDay from '../assets/wishing_61_national_civil_services_day.jpg';
import wishingGoodGovernanceDay from '../assets/wishing_62_good_governance_day.jpg';
import wishingMothersDay from '../assets/wishing_63_mothers_day.jpg';
import wishingFathersDay from '../assets/wishing_64_fathers_day.jpg';
import wishingInternationalDayOfFriendship from '../assets/wishing_65_international_day_of_friendship.jpg';
import wishingMakarSankranti from '../assets/wishing_66_makar_sankranti.jpg';
import wishingSaraswatiPuja from '../assets/wishing_67_saraswati_puja.jpg';
import wishingMahaShivaratri from '../assets/wishing_68_maha_shivaratri.jpg';
import wishingValentinesDayCat from '../assets/wishing_69_valentines_day_cat.jpg';
import wishingUgadi from '../assets/wishing_70_ugadi.jpg';
import wishingHoli from '../assets/wishing_71_holi.jpg';
import wishingNavratri from '../assets/wishing_72_navratri.jpg';
import wishingEidAlFitr2026 from '../assets/wishing_73_eid_al_fitr_2026.jpg';
import wishingRamNavami from '../assets/wishing_74_ram_navami.jpg';
import wishingMahavirJayanti from '../assets/wishing_75_mahavir_jayanti.jpg';
import wishingHanumanJayanti from '../assets/wishing_76_hanuman_jayanti.jpg';
import wishingGoodFriday from '../assets/wishing_77_good_friday.jpg';
import wishingBuddhaPurnima from '../assets/wishing_78_buddha_purnima.jpg';
import wishingNarsimhaJayanti from '../assets/wishing_79_narsimha_jayanti.jpg';
import wishingParshuramJayanti from '../assets/wishing_80_parshuram_jayanti.jpg';
import wishingRathYatra from '../assets/wishing_81_rath_yatra.jpg';
import wishingDurgaAshtami from '../assets/wishing_82_durga_ashtami.jpg';
import wishingRakshaBandhan from '../assets/wishing_83_raksha_bandhan.jpg';
import wishingBonalu from '../assets/wishing_84_bonalu.jpg';
import wishingMuharram from '../assets/wishing_85_muharram.jpg';
import wishingNagPanchami from '../assets/wishing_86_nag_panchami.jpg';
import wishingVaralakshmiVratham from '../assets/wishing_87_varalakshmi_vratham.jpg';
import wishingOnam from '../assets/wishing_88_onam.jpg';
import wishingBathukamma from '../assets/wishing_89_bathukamma.jpg';
import wishingDipawali from '../assets/wishing_90_dipawali.jpg';
import wishingChristmas2025 from '../assets/wishing_91_christmas_2025.jpg';
import wishingBhogi from '../assets/wishing_92_bhogi.jpg';
import wishingKanuma from '../assets/wishing_93_kanuma.jpg';
import wishingNirjalaEkadashi from '../assets/wishing_94_nirjala_ekadashi.jpg';
import wishingNationalPicnicDay from '../assets/wishing_95_national_picnic_day.jpg';
import wishingGaneshChaturthi from '../assets/wishing_96_ganesh_chaturthi.jpg';
import wishingWorldBookDay from '../assets/wishing_97_world_book_day.jpg';
import wishingWorldPressFreedomDay from '../assets/wishing_98_world_press_freedom_day.jpg';
import wishingAutismAwarenessDay from '../assets/wishing_99_autism_awareness_day.jpg';
import wishingNationalDnaDay from '../assets/wishing_100_national_dna_day.jpg';
import wishingCentralExciseDay from '../assets/wishing_101_central_excise_day.jpg';
import wishingShivajiJayanti from '../assets/wishing_102_shivaji_jayanti.jpg';
import wishingWorldBartenderDay from '../assets/wishing_103_world_bartender_day.jpg';
import wishingTourGuideDay from '../assets/wishing_104_tour_guide_day.jpg';
import wishingPravasiBharatiyaDivas from '../assets/wishing_105_pravasi_bharatiya_divas.jpg';
import wishingProgrammersDay from '../assets/wishing_106_programmers_day.jpg';
import wishingKargilVijayDiwas from '../assets/wishing_107_kargil_vijay_diwas.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'wishing-1-new-year-2026',
    title: 'New Year 2026 — New Experiences Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant blue festive New Year 2026 celebration poster featuring bold typography and wine glass cheer illustration.',
    fullOverview: 'A celebratory festival wishing poster titled "2026 NEW YEAR NEW EXPERIENCES". Features a rich royal blue backdrop with large 2026 vertical typography watermark, playful yellow script typography, and hand-drawn wine glasses clinking in celebration.',
    technologies: ['Photoshop', 'Festive Design', 'Vector Illustration', 'Typography'],
    features: ['Royal Blue Gradient & Watermark 2026 Backdrop', 'Hand-drawn Festive Wine Toast Illustration', 'Custom Handwritten Script Typography'],
    heroImage: wishingNewYear2026,
    screenshots: [wishingNewYear2026],
    caseStudy: {
      problem: 'Designing an uplifting New Year greeting poster for social media brand channels.',
      solution: 'Combined vibrant electric blue with bright yellow lettering and celebratory toast visuals.',
      impact: 'Generated high viral resharing across social media accounts for New Year 2026.'
    },
    featured: true
  },
  {
    id: 'wishing-2-national-youth-day',
    title: 'National Youth Day — Swami Vivekananda Tribute Poster',
    category: 'Wishing Posters',
    shortDescription: 'Patriotic National Youth Day tribute poster featuring Swami Vivekananda portrait, India map outline, and inspirational quote on deep red backdrop.',
    fullOverview: 'A heroic commemorative wishing poster titled "NATIONAL YOUTH DAY — May the spirit of Swami Vivekananda guide every youth toward purpose, confidence, and limitless possibilities." Features a textured deep maroon backdrop, gold India map outline, white raised fist motif, and standing portrait of Swami Vivekananda.',
    technologies: ['Photoshop', 'Patriotic Design', 'Poster Art', 'Typography'],
    features: ['Standing Swami Vivekananda Portrait & Saffron Attire', 'Golden India Map Vector Cutout', 'Raised Fist Youth Empowerment Emblem'],
    heroImage: wishingNationalYouthDay,
    screenshots: [wishingNationalYouthDay],
    caseStudy: {
      problem: 'Creating a powerful, patriotic National Youth Day tribute creative for institutional branding.',
      solution: 'Blended iconic historical leadership imagery with modern vector silhouettes on textured crimson background.',
      impact: 'Received widespread praise for dignified design composition and motivational message.'
    },
    featured: true
  },
  {
    id: 'wishing-3-indian-army-day',
    title: 'Indian Army Day — Guardians of Our Nation Tribute Poster',
    category: 'Wishing Posters',
    shortDescription: 'Heroic Indian Army Day tribute poster featuring armed forces salute, fighter jet, Indian flag, and India Gate monument in golden light.',
    fullOverview: 'A dramatic patriotic tribute poster titled "INDIAN ARMY DAY — Honoring the guardians of our nation who inspire discipline, dedication, and excellence." Features front-line Indian soldiers in combat camouflage with mounted weapons, flying fighter jet, Indian Tricolor flag, and India Gate monument bathed in golden sunlight.',
    technologies: ['Photoshop', 'Military Art', 'Photo Manipulation', 'Patriotic Banner'],
    features: ['Frontline Indian Army Soldiers Action Photomontage', 'India Gate Monument & Sunset Sunburst Lighting', 'Fighter Jet Silhouette & Tricolor Flag Elevation'],
    heroImage: wishingIndianArmyDay,
    screenshots: [wishingIndianArmyDay],
    caseStudy: {
      problem: 'Honoring the bravery of Indian Armed Forces on National Army Day with cinematic visual scale.',
      solution: 'Composed a dramatic multi-layered scene capturing air, land, and national symbols in warm heroic lighting.',
      impact: 'Achieved top engagement across national corporate social media feeds.'
    },
    featured: true
  },
  {
    id: 'wishing-4-national-startup-day',
    title: 'National Startup Day — Global Innovation Index Campaign Poster',
    category: 'Wishing Posters',
    shortDescription: 'Creative National Startup Day celebratory poster featuring 3D lightbulb rocket launch and business analytics doodles on peach backdrop.',
    fullOverview: 'An inspirational corporate wishing poster titled "NATIONAL STARTUP DAY — India is on 46th position in the Global Innovation Index". Features a warm peach gradient background with hand-drawn business strategy doodles, a white arch canopy, and a 3D isometric rocket lightbulb launching from coins and data charts.',
    technologies: ['Photoshop', '3D Illustration', 'Infographic Design', 'Startup Campaign'],
    features: ['3D Lightbulb Rocket Launch & Coin Stack Base', 'Doodle Pattern Header with Business Analytics Metrics', 'Clean Arch Cutout Layout & Crimson Quote Box'],
    heroImage: wishingNationalStartupDay,
    screenshots: [wishingNationalStartupDay],
    caseStudy: {
      problem: 'Highlighting India\'s startup ecosystem milestone for National Startup Day.',
      solution: 'Created an engaging 3D isometric rocket launch graphic anchored by official index rankings.',
      impact: 'Resonated strongly with tech founders, investors, and entrepreneurial communities.'
    },
    featured: true
  },
  {
    id: 'wishing-5-national-voters-day',
    title: "National Voters' Day — Democracy Ballot Power Poster",
    category: 'Wishing Posters',
    shortDescription: "Powerful National Voters' Day poster showcasing tricolor inked voter finger overlaying India map outline and crowd illustration.",
    fullOverview: "A compelling civic wishing poster titled \"NATIONAL VOTERS' DAY — This day reminds us that in a democracy a ballot is stronger than a bullet!\". Features a textured paper background, sketch crowd of voters, India map contour, and an iconic voting finger with indelible ink doused in Indian flag colors.",
    technologies: ['Photoshop', 'Civic Design', 'Photo Compositing', 'Typography'],
    features: ['Inked Voter Finger Draped in Indian Tricolor Flag', 'Textured Paper & Monochrome Citizen Crowd Sketch', 'Bold Modern Typography & Democratic Slogan'],
    heroImage: wishingNationalVotersDay,
    screenshots: [wishingNationalVotersDay],
    caseStudy: {
      problem: 'Promoting democratic awareness and voter participation on National Voters\' Day.',
      solution: 'Integrated the iconic inked voting finger with artistic map texture and strong constitutional slogan.',
      impact: 'Widely shared by civic organizations and public awareness accounts.'
    },
    featured: true
  },
  {
    id: 'wishing-6-republic-day',
    title: 'Happy Republic Day — January 26 Constitution Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Patriotic Republic Day poster featuring hand-sketched Red Fort architectural illustration, waving Indian Tricolor flag, and constitutional history inscription.',
    fullOverview: 'A dignified patriotic wishing poster for Republic Day. Features an intricate hand-sketched architectural illustration of the historic Red Fort monument, a waving Indian Tricolor flag, cloud smoke textures, and a detailed inscription marking the adoption of the Constitution of India in 1950.',
    technologies: ['Photoshop', 'Architectural Sketch', 'Patriotic Poster', 'Typography'],
    features: ['Hand-Sketched Red Fort Monument Architectural Drawing', 'Waving Indian Tricolor Flag & Cloud Smoke Texture', 'Elegant Constitutional History Typography Inscription'],
    heroImage: wishingRepublicDay,
    screenshots: [wishingRepublicDay],
    caseStudy: {
      problem: 'Designing a respectful, historic Republic Day poster honoring national heritage.',
      solution: 'Paired fine line architectural sketches of Red Fort with bold saffron-green tricolor gradients.',
      impact: 'High viral engagement and reposting across government and institutional feeds.'
    },
    featured: true
  },
  {
    id: 'wishing-7-world-cancer-day',
    title: 'World Cancer Day — February 4 Hope & Care Ribbon Poster',
    category: 'Wishing Posters',
    shortDescription: 'Inspiring World Cancer Day awareness poster featuring blue ribbon held in supportive hands illustration against cloud sky backdrop.',
    fullOverview: 'A compassionate healthcare awareness poster for World Cancer Day on February 4. Features a bright sky blue circular vignette with open supportive line-art hands holding a blue awareness ribbon aloft against sunlit clouds and soaring birds.',
    technologies: ['Photoshop', 'Awareness Campaign', 'Vector Illustration', 'Healthcare Graphic'],
    features: ['Line-Art Open Hands & Blue Awareness Ribbon', 'Sky Blue Sunlit Vignette & Birds Silhouette', 'Clean Minimalist Headline & Date Stamp'],
    heroImage: wishingWorldCancerDay,
    screenshots: [wishingWorldCancerDay],
    caseStudy: {
      problem: 'Creating a hopeful, empowering visual for World Cancer Day awareness.',
      solution: 'Utilized uplifting blue sky gradients with symbolic open hands supporting the ribbon.',
      impact: 'Drove strong engagement and positive brand association for healthcare organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-8-valentines-day',
    title: "Happy Valentine's Day — Delivering Happiness With Love Poster",
    category: 'Wishing Posters',
    shortDescription: "Breathtaking Valentine's Day promotional poster featuring airplane flying above fluffy heart-shaped cloud formation in deep blue sky.",
    fullOverview: "A romantic commercial campaign poster titled \"...Delivering happiness with love — Happy Valentine's Day\". Features a passenger jet airliner soaring above fluffy white cumulus clouds arranged into a giant heart formation against azure blue sky.",
    technologies: ['Photoshop', 'Photo Manipulation', '3D Sky Composition', 'Romantic Banner'],
    features: ['Giant Heart-Shaped Cloud Formation Photo Composition', 'Low-Angle Commercial Jet Airliner Flight Perspective', 'Custom Calligraphic Heart Emblem Badge'],
    heroImage: wishingValentinesDay,
    screenshots: [wishingValentinesDay],
    caseStudy: {
      problem: 'Creating a romantic Valentine\'s Day campaign banner for travel & logistics brands.',
      solution: 'Composed a surreal heart-shaped cloud formation following an airplane flight path.',
      impact: 'Drove massive seasonal social media engagement and travel package inquiries.'
    },
    featured: true
  },
  {
    id: 'wishing-9-national-science-day',
    title: 'National Science Day — Sir C.V. Raman Nobel Prize Quote Poster',
    category: 'Wishing Posters',
    shortDescription: 'Educational National Science Day tribute poster featuring black & white Sir C.V. Raman portrait, handwritten signature, and mathematical physics background formulas.',
    fullOverview: 'A dignified academic tribute poster for National Science Day. Features a black & white portrait of Nobel laureate Sir C.V. Raman inside an arch frame, overlaid on a warm cream paper background with faint mathematical equations, highlighting his famous quote on scientific thinking.',
    technologies: ['Photoshop', 'Editorial Layout', 'Science Poster', 'Typography'],
    features: ['Arch Portrait Framing of Nobel Laureate Sir C.V. Raman', 'Faint Mathematical Equations & Physics Blueprint Pattern', 'Bold Yellow Highlighted Quote & Handwritten Signature'],
    heroImage: wishingNationalScienceDay,
    screenshots: [wishingNationalScienceDay],
    caseStudy: {
      problem: 'Commemorating National Science Day with a scholarly and inspirational tribute graphic.',
      solution: 'Combined vintage portrait photography with yellow highlighted quotes and formula watermark overlays.',
      impact: 'Extensively shared across educational institutions and scientific research communities.'
    },
    featured: true
  },
  {
    id: 'wishing-10-world-wildlife-day',
    title: "World Wildlife Day — Embrace Nature's Diversity Poster",
    category: 'Wishing Posters',
    shortDescription: "Cinematic World Wildlife Day poster featuring majestic Bengal tiger and African savanna elephant in high-contrast typography landscape composition.",
    fullOverview: "A breathtaking conservation wishing poster titled \"World Wildlife Day — Celebrate Wildlife Day - Embrace Nature's Diversity\". Features a dramatic savanna landscape with a magnificent Bengal tiger walking forward alongside a majestic African elephant under stormy silver skies.",
    technologies: ['Photoshop', 'Wildlife Photography', 'Environmental Banner', '3D Text Composite'],
    features: ['Dual Bengal Tiger & African Savanna Elephant Photomontage', 'Bold 3D White Typography Masking over Golden Grassland', 'Dramatic Overcast Sky & Cinematic Lighting'],
    heroImage: wishingWorldWildlifeDay,
    screenshots: [wishingWorldWildlifeDay],
    caseStudy: {
      problem: 'Creating a high-impact wildlife conservation campaign poster.',
      solution: 'Composed powerful tiger and elephant imagery interacting seamlessly with 3D typography.',
      impact: 'Widespread reshares across wildlife conservation forums and nature lovers.'
    },
    featured: true
  },
  {
    id: 'wishing-11-national-safety-month',
    title: 'National Safety Month — Safety is Not Optional Poster',
    category: 'Wishing Posters',
    shortDescription: 'Corporate safety awareness poster for Kovic Projects Limited featuring blue hardhat, reflective safety vest, ear defenders, work boots, and danger tape.',
    fullOverview: 'A high-visibility industrial safety wishing poster for National Safety Month (June 2026). Features clean grid blueprint background, central arrangement of blue construction hardhat, yellow reflective vest, ear defenders, protective boots, traffic cone, and yellow-black warning tape.',
    technologies: ['Photoshop', 'Corporate Safety Banner', '3D Product Styling', 'Typography'],
    features: ['3D Construction Equipment Layout & Blue Hardhat', 'Blueprint Grid Pattern Background & Warning Tape Accent', 'High-Contrast Blue & Dark Charcoal Typography'],
    heroImage: wishingNationalSafetyMonth,
    screenshots: [wishingNationalSafetyMonth],
    caseStudy: {
      problem: 'Communicating zero-compromise workplace safety culture for construction & engineering projects.',
      solution: 'Arranged realistic 3D safety PPE equipment with bold blue typography and clear warning tape borders.',
      impact: 'Adopted across construction sites and corporate safety compliance campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-12-international-womens-day',
    title: "Happy International Women's Day — March 8 Team Tribute Poster",
    category: 'Wishing Posters',
    shortDescription: "High-impact team celebration poster featuring a grid collage of black & white women team portraits framed around a giant vibrant orange '8' emblem.",
    fullOverview: "A vibrant celebratory tribute poster for International Women's Day (8 March). Features a grid photomontage of monochrome corporate team portraits anchored around a bold 3D orange number '8' emblem.",
    technologies: ['Photoshop', 'Photo Collage', 'Typography', 'Brand Celebration'],
    features: ['3D Vibrant Orange Number 8 Centerpiece Ribbon', 'High-Density Monochrome Team Portrait Grid Matrix', 'Modern Bold Sans-Serif Typography Layout'],
    heroImage: wishingInternationalWomensDay,
    screenshots: [wishingInternationalWomensDay],
    caseStudy: {
      problem: 'Honoring women workforce members on International Women\'s Day with an inclusive team tribute graphic.',
      solution: 'Constructed an 8-figure ribbon overlay framing monochrome portraits of female colleagues.',
      impact: 'Extremely well-received internally and reshared broadly on corporate LinkedIn pages.'
    },
    featured: true
  },
  {
    id: 'wishing-13-national-mathematics-day',
    title: 'Happy National Mathematics Day — Power of Logic & Problem Solving Poster',
    category: 'Wishing Posters',
    shortDescription: 'Inspirational STEM education poster showing students gathered around a geometry blackboard table in an electric blue room with 3D wall typography.',
    fullOverview: 'An energetic STEM celebratory poster for National Mathematics Day. Features a group of young students collaborating around a giant chalkboard table filled with mathematical diagrams, geometry formulas, and equations inside a vibrant electric blue room.',
    technologies: ['Photoshop', 'STEM Graphics', '3D Room Rendering', 'Educational Poster'],
    features: ['3D Room Corner Perspective with Giant Blue Wall Typography', 'Collaborative Blackboard Geometry & Calculus Chalk Table', 'Vibrant Electric Blue Color Palette & Youthful Composition'],
    heroImage: wishingNationalMathematicsDay,
    screenshots: [wishingNationalMathematicsDay],
    caseStudy: {
      problem: 'Inspiring youth enthusiasm for mathematics and analytical problem-solving.',
      solution: 'Designed an immersive 3D blue room environment with students engaging around a chalk equation table.',
      impact: 'Widely featured by schools, coaching institutes, and STEM educators.'
    },
    featured: true
  },
  {
    id: 'wishing-14-world-water-day',
    title: 'World Water Day — A Drop of Water Worth More Than Gold Poster',
    category: 'Wishing Posters',
    shortDescription: 'Environmental awareness poster showcasing chrome water tap pouring crystal clear water onto lathered washing hands with cyan typography quote.',
    fullOverview: 'A pristine environmental conservation poster titled "WORLD WATER DAY — A Drop Of Water Is Worth More Than A Sack Of Gold To A Thirsty Man." Features a polished chrome water tap pouring fresh water over soap-lathered hands.',
    technologies: ['Photoshop', 'Macro Photography Art Direction', 'Clean Minimalist Banner', 'Environmental Awareness'],
    features: ['Polished Chrome Water Faucet & High-Speed Water Splash Realism', 'Lathered Washing Hands Macro Detail', 'Cyan & Charcoal Minimalist Typographic Layout'],
    heroImage: wishingWorldWaterDay,
    screenshots: [wishingWorldWaterDay],
    caseStudy: {
      problem: 'Visualizing water conservation and hygiene awareness with crisp visual clarity.',
      solution: 'Captured high-speed water splashes flowing from a chrome tap onto lathered hands.',
      impact: 'Selected for public health and environmental sustainability campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-15-world-theatre-day',
    title: 'Happy World Theatre Day — Stage, Cinema & Performing Arts Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant crimson performing arts celebration poster featuring vintage movie projector, film reel, clapperboard, studio microphone, popcorn, and stage pedestal.',
    fullOverview: 'A dramatic entertainment tribute poster titled "Happy World Theatre Day — Cheers to all maestros and every hopeful young actors, playwrights, producers and filmmakers out there." Features a rich crimson red background with a multi-tier stage pedestal, vintage cinema projector, clapperboard, film reel, movie theater popcorn, soda cup, and studio microphone.',
    technologies: ['Photoshop', '3D Performing Arts Composition', 'Cinema Graphic', 'Typography'],
    features: ['3D Multi-Tier Stage Pedestal & Planet Sphere Motif', 'Vintage Cinema Camera, Film Reel & Director Clapperboard', 'Studio Condenser Microphone & Movie Theater Concessions Composition'],
    heroImage: wishingWorldTheatreDay,
    screenshots: [wishingWorldTheatreDay],
    caseStudy: {
      problem: 'Celebrating World Theatre Day across drama, cinema, and performing arts communities.',
      solution: 'Assembled a 3D crimson stage artwork merging classic theatrical and cinematic elements.',
      impact: 'Widely shared by theatre academies, film societies, and creative artists.'
    },
    featured: true
  },
  {
    id: 'wishing-16-ambedkar-jayanti',
    title: 'Happy Ambedkar Jayanti — Sometime Hero Use Pen Tribute Poster',
    category: 'Wishing Posters',
    shortDescription: 'Minimalist tribute poster for Dr. B.R. Ambedkar featuring a metallic bronze profile bust with green tricolor light gradient on textured paper.',
    fullOverview: 'A dignified commemorative poster for Ambedkar Jayanti. Features a side-profile metallic bronze bust rendering of Dr. Bhimrao Ambedkar, architect of the Indian Constitution, draped in subtle Indian flag lighting highlights with inspirational typography.',
    technologies: ['Photoshop', '3D Metallic Bust Rendering', 'Patriotic Poster', 'Typography'],
    features: ['3D Metallic Bronze Profile Bust Rendering', 'Tricolor Saffron & Green Accent Lighting Gradient', 'Textured Fine Grain Paper Background & Modern Sans Typography'],
    heroImage: wishingAmbedkarJayanti,
    screenshots: [wishingAmbedkarJayanti],
    caseStudy: {
      problem: 'Creating a dignified, high-concept tribute graphic for Dr. B.R. Ambedkar on Ambedkar Jayanti.',
      solution: 'Sculpted a metallic bronze side profile bust highlighting his constitutional legacy with pen motif copywriting.',
      impact: 'Drove massive national engagement and appreciation across social media platforms.'
    },
    featured: true
  },
  {
    id: 'wishing-17-gandhi-jayanti',
    title: 'Happy Gandhi Jayanti — He Lived Simply, Impact Was Profound Poster',
    category: 'Wishing Posters',
    shortDescription: 'Monochrome high-fashion editorial style tribute poster for Mahatma Gandhi walking with walking stick and charkha wheel.',
    fullOverview: 'A solemn, artistic tribute poster for Gandhi Jayanti. Features a monochrome rear-angle portrait of Mahatma Gandhi draped in simple khadi, walking with his wooden stick with a charkha spinning wheel outlined behind him against a textured white paper canvas.',
    technologies: ['Photoshop', 'Monochrome Editorial', 'Patriotic Banner', 'Typography'],
    features: ['Monochrome Rear Profile & Khadi Drapery Contrast', 'Traditional Spinning Wheel Charkha Outline', 'Elegant Serif Typography & Minimalist Quote Layout'],
    heroImage: wishingGandhiJayanti,
    screenshots: [wishingGandhiJayanti],
    caseStudy: {
      problem: 'Capturing Mahatma Gandhi\'s philosophy of simplicity and profound impact in a modern aesthetic.',
      solution: 'Paired high-contrast monochrome photography of Gandhi with subtle charkha vector outlines.',
      impact: 'Universally reshared by cultural foundations and media organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-18-international-dance-day',
    title: 'International Dance Day — Timeless Interpretation of Life Poster',
    category: 'Wishing Posters',
    shortDescription: 'Dynamic high-energy street dance poster featuring a hip-hop dancer jumping in a green hoodie over deep blue radial gradient background.',
    fullOverview: 'An energetic sports & arts poster for International Dance Day. Features a mid-air frozen action shot of a hip-hop street dancer performing a breakdance jump in a green hoodie and denim jeans, set against a deep ocean blue radial backdrop.',
    technologies: ['Photoshop', 'Action Photography', 'Dynamic Composition', 'Typography'],
    features: ['High-Speed Action Freeze Frame Breakdance Shot', 'Electric Blue Wave Arc & Cyan Typography Layering', 'Deep Royal Blue Radial Lighting Vignette'],
    heroImage: wishingInternationalDanceDay,
    screenshots: [wishingInternationalDanceDay],
    caseStudy: {
      problem: 'Communicating the fluid energy and freedom of dance for International Dance Day.',
      solution: 'Captured a mid-air freeze frame action jump layered over dynamic curved vector arcs.',
      impact: 'Resonated strongly with dance academies, youth creators, and performers.'
    },
    featured: true
  },
  {
    id: 'wishing-19-labour-day',
    title: 'Labour Day — Honoring Workers Who Build Our Future Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant corporate Labour Day poster featuring a diverse row of professionals (engineers, doctors, nurses, sanitation workers, police) sitting on an orange 01 structure.',
    fullOverview: 'A cheerful, inclusive wishing poster for May 1st Labour Day. Features a lineup of diverse essential workers (sanitation worker, police officer, doctor, nurse, construction engineer, corporate executive, IT worker) sitting together atop a giant bright orange number "01" frame inside a neon green border.',
    technologies: ['Photoshop', 'Corporate Photo Compositing', '3D Geometry', 'Typography'],
    features: ['Giant 3D Orange 01 Number Frame & Lime Green Border Grid', 'Inclusive Multi-Industry Workforce Lineup (Medical, Construction, Civic, Tech)', 'Vibrant Dual-Tone High Contrast Palette'],
    heroImage: wishingLabourDay,
    screenshots: [wishingLabourDay],
    caseStudy: {
      problem: 'Constructing a comprehensive, upbeat Labour Day tribute honoring all sectors of workforce.',
      solution: 'Composed an inclusive row of diverse professionals sitting across a 3D "01" May 1st emblem.',
      impact: 'Adopted across corporate HR portals and national workforce appreciation campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-20-national-technology-day',
    title: 'National Technology Day — Innovation Step Toward Growth Poster',
    category: 'Wishing Posters',
    shortDescription: 'Futuristic tech poster featuring a sleek white-and-blue robotic cybernetic hand pointing upward against neon purple fiber optic light trails.',
    fullOverview: 'A high-tech celebratory graphic for National Technology Day. Features a hyper-realistic white-and-metallic cybernetic robotic hand reaching upward with lit blue joints against a deep purple background with flowing fiber optic light streams.',
    technologies: ['Photoshop', '3D Cybernetic Rendering', 'Futuristic Lighting', 'Typography'],
    features: ['3D Metallic Cybernetic Robotic Hand Rendering', 'Electric Purple & Blue Neon Fiber Optic Wave Rays', 'Futuristic Technical Typography & Nation Building Quote'],
    heroImage: wishingNationalTechnologyDay,
    screenshots: [wishingNationalTechnologyDay],
    caseStudy: {
      problem: 'Visualizing India\'s technological advancement and AI innovation for National Technology Day.',
      solution: 'Created a sleek 3D cybernetic robotic hand pointing upward against glowing purple fiber-optic streams.',
      impact: 'Widely featured across tech companies, AI startups, and engineering campuses.'
    },
    featured: true
  },
  {
    id: 'wishing-21-international-nurses-day',
    title: 'International Nurses Day — Everyday Heroes Powered by Care Poster',
    category: 'Wishing Posters',
    shortDescription: 'Empowering International Nurses Day poster featuring a confident female nurse standing in blue medical scrubs with a waving red superhero cape.',
    fullOverview: 'An inspirational medical wishing poster for International Nurses Day (May 12). Features a full-length portrait of a confident female healthcare nurse in royal blue scrubs standing with arms crossed and wearing a heroic flowing red cape over a vibrant blue wave backdrop.',
    technologies: ['Photoshop', 'Healthcare Banner', 'Superhero Concept', 'Typography'],
    features: ['Full-Length Nurse Portrait with Flowing Red Superhero Cape', 'Royal Blue & Pure White High-Contrast Healthcare Palette', 'Bold Modern Sans Typography & Headline Hierarchy'],
    heroImage: wishingInternationalNursesDay,
    screenshots: [wishingInternationalNursesDay],
    caseStudy: {
      problem: 'Honoring frontline healthcare nursing personnel on International Nurses Day.',
      solution: 'Paired medical professional portraiture with a red superhero cape visual metaphor.',
      impact: 'Widely shared by hospitals, healthcare networks, and medical associations.'
    },
    featured: true
  },
  {
    id: 'wishing-22-world-telecommunication-day',
    title: 'World Telecommunication Day — Bridging Digital Divides Poster',
    category: 'Wishing Posters',
    shortDescription: 'Clean technical blueprint poster featuring a giant satellite dish, world map contour, smartphone, laptop, and wireless antenna icons in cyan blue.',
    fullOverview: 'A sleek technical blueprint poster for World Telecommunication Day. Features a giant satellite dish antenna, global map contour silhouette, laptop, smartphone, and Wi-Fi signal broadcast icons in cyan and navy blue framed inside a minimalist border.',
    technologies: ['Photoshop', 'Technical Vector Blueprint', 'Telecom Graphic', 'Typography'],
    features: ['Technical Vector Satellite Dish & Telecom Broadcast Antenna', 'Global World Map Silhouette Contour & Wireless Wave Icons', 'Clean Minimalist Border & Navy Blue Typography'],
    heroImage: wishingWorldTelecommunicationDay,
    screenshots: [wishingWorldTelecommunicationDay],
    caseStudy: {
      problem: 'Highlighting global connectivity and digital infrastructure expansion for World Telecommunication Day.',
      solution: 'Designed a vector blueprint poster combining satellite antennas, devices, and global map contours.',
      impact: 'Adopted across telecom operators, ISP providers, and tech networks.'
    },
    featured: true
  },
  {
    id: 'wishing-23-international-museum-day',
    title: 'International Museum Day — 18 May Cultural Heritage Poster',
    category: 'Wishing Posters',
    shortDescription: 'Scrapbook collage poster for International Museum Day featuring Classical Greek Caryatid statues, ancient pottery, torn paper edges, and European architecture.',
    fullOverview: 'A rich cultural heritage collage poster for International Museum Day (18 May). Features torn paper collage aesthetics with classical Greek marble Caryatid maiden statues inside a grand museum gallery, ancient terracotta amphora urn, and historic European palace architecture.',
    technologies: ['Photoshop', 'Scrapbook Collage Layout', 'Cultural Heritage Art', 'Typography'],
    features: ['Classical Greek Caryatid Marble Maiden Sculptures', 'Tactile Torn Paper Edges & Parchment Texture Backdrop', 'Historic European Architecture & Classical Urn Composite'],
    heroImage: wishingInternationalMuseumDay,
    screenshots: [wishingInternationalMuseumDay],
    caseStudy: {
      problem: 'Promoting historical awareness and museum heritage visits for International Museum Day.',
      solution: 'Assembled a tactile paper-torn scrapbook collage of ancient Greek sculptures and museum gallery interiors.',
      impact: 'Featured across art galleries, cultural tourism boards, and museum archives.'
    },
    featured: true
  },
  {
    id: 'wishing-24-world-bee-day',
    title: 'World Bee Day — 20th May Honeycomb & Sunflower Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant yellow & orange nature poster featuring a honeybee perching on a stack of dripping golden honeycombs surrounded by sunflowers.',
    fullOverview: 'A golden nature conservation poster for World Bee Day (20th May). Features macro photography of a honeybee perching atop a stack of golden dripping honeycombs with yellow sunflowers on a clean grid notebook paper backdrop with energetic yellow brush lettering.',
    technologies: ['Photoshop', 'Macro Photography Composite', 'Nature Banner', 'Brush Lettering Typography'],
    features: ['Detailed Honeybee Macro & Dripping Golden Honeycomb Stack', 'Expressive Yellow Brush Script "World Bee Day" Typography', 'Grid Notebook Pattern Background & Sunflower Accents'],
    heroImage: wishingWorldBeeDay,
    screenshots: [wishingWorldBeeDay],
    caseStudy: {
      problem: 'Raising awareness for pollinator protection and environmental biodiversity on World Bee Day.',
      solution: 'Combined macro honeybee and dripping honeycomb photography with vibrant yellow brush lettering.',
      impact: 'Extensively shared by environmental NGOs, organic food brands, and bee conservationists.'
    },
    featured: true
  },
  {
    id: 'wishing-25-world-bicycle-day',
    title: 'Happy World Bicycle Day — Two Wheels Endless Discoveries Poster',
    category: 'Wishing Posters',
    shortDescription: 'Breathtaking adventure sports poster featuring a cyclist standing with a bicycle on a cliff edge overlooking a snowy mountain peak under blue sky.',
    fullOverview: 'An inspiring eco-adventure poster for World Bicycle Day. Features a cyclist standing atop a dramatic rocky cliff edge beside a road bicycle, gazing out over golden mountain valleys toward a snow-capped mountain peak under crisp blue sky with yellow script typography.',
    technologies: ['Photoshop', 'Landscape Photography', 'Adventure Sports Banner', 'Typography'],
    features: ['Dramatic Mountain Cliff Edge & Cyclist Silhouette Perspective', 'Snow-Capped Mountain Peak & Sky Blue Landscape', 'Bold White Condensed Typography & Yellow Script Header'],
    heroImage: wishingWorldBicycleDay,
    screenshots: [wishingWorldBicycleDay],
    caseStudy: {
      problem: 'Inspiring eco-friendly mobility and adventure fitness for World Bicycle Day.',
      solution: 'Captured a panoramic clifftop mountain view of a cyclist looking out over endless horizons.',
      impact: 'High social media reshares across cycling clubs, outdoor sports brands, and eco-mobility groups.'
    },
    featured: true
  },
  {
    id: 'wishing-26-international-yoga-day',
    title: 'International Yoga Day — Celebrate Wellness Poster',
    category: 'Wishing Posters',
    shortDescription: 'Serene sunset wellness poster featuring a silhouette of a person practicing yoga on a hill at sunset.',
    fullOverview: 'A breathtaking wellness poster celebrating International Yoga Day. Features a graceful silhouette of a yoga practitioner performing Natarajasana (Lord of the Dance pose) on a grassy hill overlooking a calm lake against a glowing warm sunset sun.',
    technologies: ['Photoshop', 'Digital Artwork', 'Wellness Poster', 'Typography'],
    features: ['Golden Sunset Silhouette Artistry', 'Calming Earthy Warm Color Scheme', 'Clean Serif Typography & Natural Elements'],
    heroImage: wishingInternationalYogaDay,
    screenshots: [wishingInternationalYogaDay],
    caseStudy: {
      problem: 'Promoting mindfulness and physical wellness for International Yoga Day.',
      solution: 'Created an artistic sunset silhouette composition capturing tranquil energy and balance.',
      impact: 'Shared widely across health organizations, yoga centers, and lifestyle communities.'
    },
    featured: true
  },
  {
    id: 'wishing-27-national-statistics-day',
    title: 'National Statistics Day — Data Drives Decisions Poster',
    category: 'Wishing Posters',
    shortDescription: 'Professional corporate analytics poster featuring 3D statistical bar charts and pie charts on a globe with a businessman figure.',
    fullOverview: 'An impactful corporate poster for National Statistics Day celebrated on 29 June. Features 3D bar graphs and pie charts mounted on a vintage globe, with a businessman gazing up at an upward-trending growth arrow.',
    technologies: ['Photoshop', '3D Analytics Render', 'Corporate Graphic Design', 'Typography'],
    features: ['Dynamic 3D Statistical Bar & Pie Chart Visualization', 'Vintage Globe Foundation', 'Sleek Corporate Blue & Orange Palette'],
    heroImage: wishingNationalStatisticsDay,
    screenshots: [wishingNationalStatisticsDay],
    caseStudy: {
      problem: 'Highlighting the role of statistical analytics in economic planning and future decision making.',
      solution: 'Designed a sophisticated 3D visual uniting statistical growth indicators with global perspective.',
      impact: 'Engaged corporate professionals, data science institutions, and financial organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-28-national-doctors-day',
    title: "National Doctor's Day — Everyday Superheroes Poster",
    category: 'Wishing Posters',
    shortDescription: 'Inspiring healthcare tribute poster featuring a doctor casting a heroic superhero shadow.',
    fullOverview: "A powerful tribute poster celebrating National Doctor's Day on July 1st. Features a standing physician with folded arms casting a heroic superhero shadow with a flowing cape.",
    technologies: ['Photoshop', 'Concept Art', 'Healthcare Poster', 'Typography'],
    features: ['Concept Shadow Art (Superhero Silhouette)', 'Clean Minimalist Background', 'Expressive Script & Bold Typography'],
    heroImage: wishingNationalDoctorsDay,
    screenshots: [wishingNationalDoctorsDay],
    caseStudy: {
      problem: "Honoring healthcare professionals and their selfless dedication on National Doctor's Day.",
      solution: 'Crafted a symbolic superhero shadow artwork representing doctors as real-life saviors.',
      impact: 'Rallied massive appreciation across hospitals, medical schools, and social platforms.'
    },
    featured: true
  },
  {
    id: 'wishing-29-ca-day',
    title: 'Happy CA Day — Chartered Accountant Celebrating Expertise Poster',
    category: 'Wishing Posters',
    shortDescription: 'Bold financial tribute poster featuring a 3D Chartered Accountant seal stamp on a rich crimson backdrop.',
    fullOverview: 'A prominent tribute poster celebrating CA Day on July 1st. Features a 3D blue Chartered Accountant India seal stamp pressed onto a deep crimson red background with watermark financial terms.',
    technologies: ['Photoshop', '3D Stamp Design', 'Corporate Branding', 'Typography'],
    features: ['Detailed 3D Wooden & Blue CA Stamp', 'Crimson Background with Watermark Audit Keywords', 'Sophisticated Gold & White Typography'],
    heroImage: wishingCaDay,
    screenshots: [wishingCaDay],
    caseStudy: {
      problem: 'Commemorating Chartered Accountants and their vital role in financial integrity.',
      solution: 'Created an authoritative 3D seal stamp artwork showcasing the emblem of Chartered Accountants.',
      impact: 'Highly praised across accounting firms, financial consultants, and CA institutes.'
    },
    featured: true
  },
  {
    id: 'wishing-30-world-population-day',
    title: 'World Population Day — Easy To Add, Difficult To Maintain Poster',
    category: 'Wishing Posters',
    shortDescription: 'Thought-provoking editorial illustration featuring a family of 7 riding a crowded scooter through a bustling city skyline.',
    fullOverview: 'An engaging editorial wishing poster for World Population Day. Features a detailed comic-style illustration of a large family riding on a single scooter with a sprawling urban backdrop.',
    technologies: ['Photoshop', 'Vector Illustration', 'Editorial Artwork', 'Typography'],
    features: ['Comic-Style Editorial Illustration of Family on Scooter', 'Urban Skyline Background Silhouette', 'Hand-Drawn Sketch Typography'],
    heroImage: wishingWorldPopulationDay,
    screenshots: [wishingWorldPopulationDay],
    caseStudy: {
      problem: 'Raising awareness around sustainable demographic growth and population challenges.',
      solution: 'Designed a relatable comic-style illustration highlighting urban density and family balance.',
      impact: 'Sparked engaging social discussions and awareness shares on population dynamics.'
    },
    featured: true
  },
  {
    id: 'wishing-31-world-emoji-day',
    title: 'World Emoji Day — If Branding Team Had Faces Poster',
    category: 'Wishing Posters',
    shortDescription: 'Fun creative agency poster replacing office branding team members\' faces with expressive yellow emojis on World Emoji Day.',
    fullOverview: 'A humorous creative agency poster for World Emoji Day celebrated on 17th July. Features a team of branding professionals at their laptops with expressive yellow emojis overlaying their faces.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Emoji Vector Art', 'Agency Branding'],
    features: ['Custom Yellow Emoji Head Overlay Manipulations', 'Workplace Laptop Office Setup', 'Bold White & Red Modern Typography'],
    heroImage: wishingWorldEmojiDay,
    screenshots: [wishingWorldEmojiDay],
    caseStudy: {
      problem: 'Creating a fun, relatable social media campaign poster for World Emoji Day.',
      solution: 'Substituted agency team members\' faces with iconic workplace emoji expressions.',
      impact: 'Drove massive engagement and laughter across creative agencies and corporate teams.'
    },
    featured: true
  },
  {
    id: 'wishing-32-international-chess-day',
    title: 'International Chess Day — Every Move Builds a Brighter Mind Poster',
    category: 'Wishing Posters',
    shortDescription: 'Inspiring youth sports poster featuring children focused over a chessboard with a grandmaster watermark background.',
    fullOverview: 'An empowering educational poster for International Chess Day. Features young school students intensely contemplating their next move over a green-and-white chessboard, set against a subtle grandmaster piece watermark backdrop.',
    technologies: ['Photoshop', 'Sports Photography', 'Composite Design', 'Typography'],
    features: ['Real Child Players Over Active Chessboard', 'Watermark Chess Piece Backing Graphic', 'Clean Blue & White Header Typography'],
    heroImage: wishingInternationalChessDay,
    screenshots: [wishingInternationalChessDay],
    caseStudy: {
      problem: 'Encouraging strategic thinking and chess participation among young learners.',
      solution: 'Captured the intense focus of children playing chess backed by grandmaster iconography.',
      impact: 'Shared widely across schools, sports academies, and chess federations.'
    },
    featured: true
  },
  {
    id: 'wishing-33-national-handloom-day',
    title: 'National Handloom Day — A Legacy Woven by Hand Poster',
    category: 'Wishing Posters',
    shortDescription: 'Artisanal heritage poster featuring a traditional Indian weaver working on a wooden handloom.',
    fullOverview: 'A rich cultural tribute poster for National Handloom Day. Features a skilled Indian artisan in traditional turban weaving intricate geometric fabric on a wooden loom, framed by a scalloped terracotta textured backdrop.',
    technologies: ['Photoshop', 'Cultural Artwork', 'Textile Texture Rendering', 'Typography'],
    features: ['Authentic Indian Artisan Weaving Portrait', 'Terracotta Damask Scalloped Frame Background', 'Fluid Script & Elegant Serif Typography'],
    heroImage: wishingNationalHandloomDay,
    screenshots: [wishingNationalHandloomDay],
    caseStudy: {
      problem: 'Promoting indigenous textile craftsmanship and handloom heritage for National Handloom Day.',
      solution: 'Designed a warm, tactile poster showcasing the dedication of master weavers.',
      impact: 'Rallied support for Indian handloom industries and artisan cooperatives.'
    },
    featured: true
  },
  {
    id: 'wishing-34-quit-india-movement',
    title: 'Quit India Movement — Salute to Freedom Fighters Poster',
    category: 'Wishing Posters',
    shortDescription: 'Historic patriotic poster saluting freedom fighters with Mahatma Gandhi, Dandi March statues, and Indian Tricolor.',
    fullOverview: 'A stirring patriotic poster commemorating the Quit India Movement. Features the historic Dandi March statues of Mahatma Gandhi leading freedom fighters, accented by a flowing Indian flag ribbon and Ashoka Chakra.',
    technologies: ['Photoshop', 'Patriotic Design', 'Historic Photo Collage', 'Typography'],
    features: ['Historic Statue Silhouette Collage of Gandhi & Marchers', 'Flowing Indian Tricolor Ribbon & Ashoka Chakra', 'Bold Terracotta & Green Inscription Typography'],
    heroImage: wishingQuitIndiaMovement,
    screenshots: [wishingQuitIndiaMovement],
    caseStudy: {
      problem: 'Paying tribute to the sacrifices of freedom fighters during the Quit India Movement.',
      solution: 'Blended iconic historical monuments with modern patriotic flag graphics.',
      impact: 'Inspiring national pride shares across civic and educational organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-35-world-photography-day',
    title: 'World Photography Day — We Turn Clicks Into Stories Poster',
    category: 'Wishing Posters',
    shortDescription: 'Surreal creative poster showing a DSLR camera lens bursting into a scenic mountain waterfall and bridge landscape.',
    fullOverview: 'A spectacular surreal creative poster for World Photography Day. Features a DSLR camera lens seamlessly morphing into a cascading mountain waterfall with a stone arch bridge and lush green forest canopy.',
    technologies: ['Photoshop', 'Surreal Photo Manipulation', 'Nature Blend Art', 'Typography'],
    features: ['Surreal Morphing of DSLR Lens into Forest Waterfall', 'Flock of Birds Flying from Lens Body', 'Clean Dark Brown & Script Typography'],
    heroImage: wishingWorldPhotographyDay,
    screenshots: [wishingWorldPhotographyDay],
    caseStudy: {
      problem: 'Celebrating visual storytelling and creative photography for World Photography Day.',
      solution: 'Created a mind-bending photo manipulation uniting camera hardware with natural wonder.',
      impact: 'Widespread appreciation across photographer communities, digital artists, and camera brands.'
    },
    featured: true
  },
  {
    id: 'wishing-36-national-space-day',
    title: '1st National Space Day — Touching Lives While Touching the Moon Poster',
    category: 'Wishing Posters',
    shortDescription: 'Dramatic space exploration poster celebrating India\'s 1st National Space Day on August 23rd with ISRO LVM3 rocket launching into starry space.',
    fullOverview: 'An awe-inspiring aerospace poster commemorating India\'s maiden National Space Day on August 23rd with the theme "Touching Lives While Touching the Moon — India\'s Space Saga". Features ISRO\'s powerful LVM3 / Chandrayaan rocket ascending through deep starry space with a brilliant flame plume.',
    technologies: ['Photoshop', 'Space Art', '3D Rocket Launch Effects', 'Typography'],
    features: ['High-Detail ISRO LVM3 Rocket Ascent Render', 'Deep Space Starry Nebula Background', 'Bold Metallic Gold & White Serif Header Typography'],
    heroImage: wishingNationalSpaceDay,
    screenshots: [wishingNationalSpaceDay],
    caseStudy: {
      problem: 'Commemorating India\'s landmark lunar landing and space technology achievements.',
      solution: 'Crafted a cinematic aerospace launch graphic encapsulating national pride and cosmic vision.',
      impact: 'Shared widely across ISRO enthusiasts, science institutes, and national space forums.'
    },
    featured: true
  },
  {
    id: 'wishing-37-national-sports-day',
    title: 'National Sports Day — Honoring Our National Heroes Poster',
    category: 'Wishing Posters',
    shortDescription: 'Dynamic sports tribute poster honoring Indian sports champions including Neeraj Chopra, MS Dhoni, Sunil Chhetri, Mary Kom, and PV Sindhu.',
    fullOverview: 'A passionate tribute poster celebrating National Sports Day. Features an energetic monochrome-and-color montage of India\'s athletic icons—Neeraj Chopra, MS Dhoni, Sunil Chhetri, Mary Kom, PV Sindhu, and Bajrang Punia—framed under a waving Indian Tricolor.',
    technologies: ['Photoshop', 'Sports Composite', 'Patriotic Graphics', 'Typography'],
    features: ['Dynamic Multi-Sport Athlete Collage (Cricket, Athletics, Boxing, Football, Wrestling)', 'Waving Indian Tricolor Flag Focal Point', 'Clean Minimalist Background & Modern Sans Typography'],
    heroImage: wishingNationalSportsDay,
    screenshots: [wishingNationalSportsDay],
    caseStudy: {
      problem: 'Saluting the hard work and national pride inspired by Indian athletes on National Sports Day.',
      solution: 'Assembled a heroic photo composite featuring multi-disciplinary sporting legends.',
      impact: 'Rallied massive sports fandom engagement and national sports federation retweets.'
    },
    featured: true
  },
  {
    id: 'wishing-38-teachers-day',
    title: 'Happy Teacher\'s Day — Great Teachers Inspire Chalkboard Poster',
    category: 'Wishing Posters',
    shortDescription: 'Classroom chalkboard tribute poster featuring chalk portraits of legendary Indian scientists Dr. APJ Abdul Kalam, Dr. C.V. Raman, and Dr. Homi Bhabha.',
    fullOverview: 'A nostalgic educational poster for Teacher\'s Day. Features detailed hand-drawn chalk portrait sketches of India\'s legendary scientist-mentors—Dr. APJ Abdul Kalam, Dr. Homi J. Bhabha, Dr. C.V. Raman, Dr. Vikram Sarabhai, and Dr. Jagdish C. Bose—drawn on a classic framed wooden chalkboard.',
    technologies: ['Photoshop', 'Chalk Art Sketching', 'Academic Design', 'Typography'],
    features: ['Hand-Sketched Chalk Portraits of Iconic Indian Scientists', 'Wooden Framed Classroom Chalkboard Background', 'Chalk Handwriting Inscription & City Skyline Border'],
    heroImage: wishingTeachersDay,
    screenshots: [wishingTeachersDay],
    caseStudy: {
      problem: 'Honoring educators and visionaries who shape scientific minds and inspire future generations.',
      solution: 'Designed an authentic chalkboard portrait gallery celebrating India\'s greatest scientific teachers.',
      impact: 'Loved across universities, schools, and academic institutions nationwide.'
    },
    featured: true
  },
  {
    id: 'wishing-39-international-literacy-day',
    title: 'International Literacy Day — Powerful Tool for Freedom Poster',
    category: 'Wishing Posters',
    shortDescription: 'Striking educational poster for International Literacy Day featuring a graduation mortarboard cap atop leatherbound books on rich crimson red background.',
    fullOverview: 'A compelling academic poster celebrating International Literacy Day. Features a black graduation cap with a bright gold tassel sitting atop a stack of classic leatherbound books against a rich crimson red background.',
    technologies: ['Photoshop', '3D Product Rendering', 'Educational Graphic', 'Typography'],
    features: ['High-Contract Mortarboard Cap & Stacked Leather Books Visual', 'Rich Crimson Gradient Studio Background', 'Bold Condensed White Header Typography'],
    heroImage: wishingInternationalLiteracyDay,
    screenshots: [wishingInternationalLiteracyDay],
    caseStudy: {
      problem: 'Promoting global literacy as a fundamental tool for personal freedom and social growth.',
      solution: 'Constructed a sleek, high-impact visual symbolizing higher education and lifelong learning.',
      impact: 'Widely featured by literacy NGOs, libraries, and global education advocates.'
    },
    featured: true
  },
  {
    id: 'wishing-40-engineers-day',
    title: 'Happy Engineers\' Day — Built by Vision Powered by Engineers Poster',
    category: 'Wishing Posters',
    shortDescription: 'Architectural engineering tribute poster featuring a modern high-speed train crossing a massive arched railway bridge over a river gorge.',
    fullOverview: 'An impressive infrastructure poster for Engineers\' Day celebrating Sir M. Visvesvaraya\'s legacy. Features an architectural blueprint-style illustration of a high-speed Vande Bharat train traversing a massive steel arch bridge spanning a mountain valley, with a orange gear logo silhouette.',
    technologies: ['Photoshop', 'Architectural Drafting', 'Engineering Graphics', 'Typography'],
    features: ['Intricate Architectural Sketch of Steel Arch Railway Bridge', 'Modern Orange Bullet Train Composite', 'Grid Paper Technical Texture & Gear Engineer Logo'],
    heroImage: wishingEngineersDay,
    screenshots: [wishingEngineersDay],
    caseStudy: {
      problem: 'Honoring engineering marvels and technical visionaries on Happy Engineers\' Day.',
      solution: 'Combined technical grid line drawings with modern high-speed transport infrastructure.',
      impact: 'Tremendous positive response across engineering firms, railway corporations, and tech institutes.'
    },
    featured: true
  },
  {
    id: 'wishing-41-world-tourism-day',
    title: 'World Tourism Day — Travel Opens Minds Connects Hearts Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant travel poster celebrating World Tourism Day featuring famous world landmarks on a tropical island with an airplane.',
    fullOverview: 'A vibrant global travel poster celebrating World Tourism Day. Features a lush tropical island resort setting with an ensemble of famous international landmarks—the Statue of Liberty, Big Ben, Leaning Tower of Pisa, Eiffel Tower, St. Basil\'s Cathedral, and Pyramids—under a flying jet airliner.',
    technologies: ['Photoshop', 'Travel Manipulation', 'Landmark Composite', 'Typography'],
    features: ['Global Landmarks Composite (Eiffel Tower, Big Ben, Liberty, Pisa, Pyramids)', 'Tropical Beach Island Foundation', 'Bold Crimson & Gold Typography Header'],
    heroImage: wishingWorldTourismDay,
    screenshots: [wishingWorldTourismDay],
    caseStudy: {
      problem: 'Promoting global tourism, travel memories, and cultural connection.',
      solution: 'Seamlessly composited world iconic monuments onto a pristine tropical beach environment.',
      impact: 'High social media shares across travel agencies, airlines, and hospitality brands.'
    },
    featured: true
  },
  {
    id: 'wishing-42-world-heart-day',
    title: 'World Heart Day — Be Heart Smart Live Longer Live Better Poster',
    category: 'Wishing Posters',
    shortDescription: 'Striking medical awareness poster featuring a giant 3D red anatomical heart encircled by a winding spiral path with active people.',
    fullOverview: 'An impactful cardiovascular wellness poster for World Heart Day. Features a massive glowing 3D red anatomical heart encircled by a spiraling white pedestrian highway carrying active people walking toward heart health.',
    technologies: ['Photoshop', '3D Healthcare Graphic', 'Anatomical Model Render', 'Typography'],
    features: ['Hyper-Realistic 3D Red Anatomical Heart Render', 'Spiraling Pedestrian Highway with Micro Figure Characters', 'Clean Deep Purple & Studio Lighting Background'],
    heroImage: wishingWorldHeartDay,
    screenshots: [wishingWorldHeartDay],
    caseStudy: {
      problem: 'Encouraging heart-healthy daily habits and cardiovascular awareness on World Heart Day.',
      solution: 'Visualized the journey to heart health via a spiral pathway wrapping an anatomical heart.',
      impact: 'Rallied extensive awareness campaigns across cardiology clinics and wellness organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-43-international-coffee-day',
    title: 'International Coffee Day — 1st of October Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Warm cafe promotion poster for International Coffee Day featuring a doodle artwork frame with a steaming espresso cup.',
    fullOverview: 'An inviting cafe promotional poster for International Coffee Day on October 1st. Features a steaming porcelain cup of espresso resting on a coffee-textured speech bubble frame adorned with whimsical coffee doodle characters and roasted beans.',
    technologies: ['Photoshop', 'Doodle Art Composite', 'Beverage Branding', 'Typography'],
    features: ['Hand-Drawn Cartoon Coffee Doodle Character Header', 'Realistic Steaming Espresso Cup & Roasted Beans', 'Warm Rich Leather Coffee Texture Backdrop'],
    heroImage: wishingInternationalCoffeeDay,
    screenshots: [wishingInternationalCoffeeDay],
    caseStudy: {
      problem: 'Creating an eye-catching event poster celebrating coffee culture on International Coffee Day.',
      solution: 'Fused playful cartoon doodles with rich espresso product photography.',
      impact: 'Boosted foot traffic and online promotions across specialty coffee shops and roasteries.'
    },
    featured: true
  },
  {
    id: 'wishing-44-indian-air-force-day',
    title: 'Indian Air Force Day — Honouring the Guardians of Our Skies Poster',
    category: 'Wishing Posters',
    shortDescription: 'Heroic military aviation poster for Indian Air Force Day featuring a Sukhoi fighter jet soaring through blue skies.',
    fullOverview: 'A majestic defense poster celebrating Indian Air Force Day on October 8th. Features a Sukhoi Su-30MKI multirole fighter jet roaring through cloud-filled azure skies, trailing an Indian Tricolor flag ribbon through 3D bold "AIR" typography.',
    technologies: ['Photoshop', 'Aviation Composite', 'Military Graphic Design', 'Typography'],
    features: ['High-Velocity Sukhoi Su-30MKI Fighter Jet Action Shot', 'Flowing Indian Flag Smoke Trail', 'Massive 3D "AIR" Text Cutout Backdrop'],
    heroImage: wishingIndianAirForceDay,
    screenshots: [wishingIndianAirForceDay],
    caseStudy: {
      problem: 'Paying tribute to the brave pilots and personnel of the Indian Air Force on IAF Day.',
      solution: 'Designed a dynamic, high-altitude composite conveying military air superiority and national pride.',
      impact: 'Extremely popular share among defense supporters, veterans, and military aviation enthusiasts.'
    },
    featured: true
  },
  {
    id: 'wishing-45-world-post-day',
    title: 'World Post Day — 9th October Postal Mail Tribute Poster',
    category: 'Wishing Posters',
    shortDescription: 'Clean vector illustration poster for World Post Day featuring a classic red mailbox surrounded by flying envelopes.',
    fullOverview: 'A charming postal service tribute poster for World Post Day on October 9th. Features a bright red postal mailbox illustration with flying white mail envelopes and paper airplanes soaring around a clean globe outline.',
    technologies: ['Photoshop', 'Vector Illustration', 'Postal Branding', 'Typography'],
    features: ['Iconic Red Mail Postbox Graphic', 'Swirling Flying Mail Envelopes & Origami Paper Airplanes', 'Crisp Minimalist Red & White Color Palette'],
    heroImage: wishingWorldPostDay,
    screenshots: [wishingWorldPostDay],
    caseStudy: {
      problem: 'Celebrating global postal networks and communication connectivity on World Post Day.',
      solution: 'Crafted a clean vector illustration symbolizing mail delivery and message sending.',
      impact: 'Widely shared by postal services, courier logistics companies, and philately groups.'
    },
    featured: true
  },
  {
    id: 'wishing-46-national-unity-day',
    title: 'National Unity Day — Embracing Diversity Fostering Unity Poster',
    category: 'Wishing Posters',
    shortDescription: 'Monumental tribute poster for National Unity Day featuring a golden Statue of Unity on a floating island against a glowing sun.',
    fullOverview: 'A grand national tribute poster for National Unity Day celebrating Rashtriya Ekta Diwas on October 31st. Features a golden statue of Sardar Vallabhbhai Patel (Statue of Unity) standing proudly on a lush floating island, backed by a large yellow sun disk.',
    technologies: ['Photoshop', '3D Monumental Artwork', 'Patriotic Design', 'Typography'],
    features: ['Golden Statue of Unity (Sardar Patel) Render', 'Floating Island Terrain & Sun Disk Background', 'Fluid Calligraphic Inscription & Dark Blue Accent'],
    heroImage: wishingNationalUnityDay,
    screenshots: [wishingNationalUnityDay],
    caseStudy: {
      problem: 'Commemorating Sardar Vallabhbhai Patel\'s birth anniversary and national integration.',
      solution: 'Designed a heroic monumental composite celebrating unity and diversity.',
      impact: 'Rallied patriotic shares across government, civic, and educational platforms.'
    },
    featured: true
  },
  {
    id: 'wishing-47-national-education-day',
    title: 'National Education Day — The More We Learn The Stronger Our Nation Becomes Poster',
    category: 'Wishing Posters',
    shortDescription: 'Creative academic poster for National Education Day featuring a schoolboy sitting on a giant yellow pencil.',
    fullOverview: 'An uplifting academic poster for National Education Day on November 11th. Features a young schoolboy sitting on a giant yellow pencil balance beam under a pencil graduation cap pillar with an alarm clock and stacked books.',
    technologies: ['Photoshop', 'Surreal Composite Illustration', 'Educational Graphics', 'Typography'],
    features: ['Schoolboy Character Sitting on Giant Pencil Composite', 'Pencil Graduation Cap Pillar & Stacked Books', 'Doodle Classroom Outline Texture Background'],
    heroImage: wishingNationalEducationDay,
    screenshots: [wishingNationalEducationDay],
    caseStudy: {
      problem: 'Highlighting the power of education in building a strong, progressive nation.',
      solution: 'Visualized learning as a joyful journey via playful pencil and book balance art.',
      impact: 'Extremely popular share among schools, academies, and literacy foundations.'
    },
    featured: true
  },
  {
    id: 'wishing-48-childrens-day',
    title: 'Happy Children\'s Day — Pandit Jawaharlal Nehru Birth Anniversary Tribute Poster',
    category: 'Wishing Posters',
    shortDescription: 'Nostalgic scrapbook-style tribute poster for Children\'s Day featuring a vintage photo of Chacha Nehru with children.',
    fullOverview: 'A heartwarming Children\'s Day tribute poster celebrating November 14th. Features a tape-mounted scrapbook photograph of Pandit Jawaharlal Nehru smiling warmly among joyous children, set on a textured vintage paper background.',
    technologies: ['Photoshop', 'Scrapbook Vintage Collage', 'Photo Retouching', 'Typography'],
    features: ['Authentic Vintage Black-and-White Chacha Nehru Photo', 'Scrapbook Paper & Washi Tape Texture Aesthetics', 'Warm Cursive Script Header Typography'],
    heroImage: wishingChildrensDay,
    screenshots: [wishingChildrensDay],
    caseStudy: {
      problem: 'Celebrating the innocent joy of childhood on Pandit Nehru\'s birth anniversary.',
      solution: 'Created a nostalgic scrapbook photo memory framing historic moments with children.',
      impact: 'Resonated deeply across schools, family groups, and social communities.'
    },
    featured: true
  },
  {
    id: 'wishing-49-international-mens-day',
    title: 'Happy International Men\'s Day — Building, Leading, and Creating Poster',
    category: 'Wishing Posters',
    shortDescription: 'Sleek executive tribute poster for International Men\'s Day featuring a crisp white collared shirt and blue tie graphic.',
    fullOverview: 'A sophisticated tribute poster for International Men\'s Day on November 19th. Features a sharp executive white shirt collar and textured blue silk necktie against a modern black isometric grid pattern backdrop.',
    technologies: ['Photoshop', 'Minimalist Corporate Design', 'Fashion Vector Render', 'Typography'],
    features: ['High-Contrast Executive Shirt Collar & Silk Blue Tie Graphic', 'Subtle Dark Geometric Wireframe Grid Pattern', 'Modern Minimalist Typography Box Frame'],
    heroImage: wishingInternationalMensDay,
    screenshots: [wishingInternationalMensDay],
    caseStudy: {
      problem: 'Honoring the leadership, contributions, and positive role models of men on Men\'s Day.',
      solution: 'Crafted an elegant corporate aesthetic symbolizing leadership, integrity, and dedication.',
      impact: 'High corporate team engagement and professional network appreciation.'
    },
    featured: true
  },
  {
    id: 'wishing-50-national-constitution-day',
    title: 'National Constitution Day — Honoring Vision, Values & Democratic Ideals Poster',
    category: 'Wishing Posters',
    shortDescription: 'Dignified civic poster for National Constitution Day featuring a 3D wooden judge gavel beside an Indian Tricolor desktop flag.',
    fullOverview: 'A dignified civic poster for Samvidhan Divas (National Constitution Day) on November 26th. Features a detailed 3D polished wooden judge gavel beside a tabletop Indian Tricolor flag and a gold contour map of India.',
    technologies: ['Photoshop', '3D Legal Graphics', 'Patriotic Design', 'Typography'],
    features: ['Polished 3D Wooden Judge Gavel Render', 'Tabletop Indian Tricolor Flag & Gold India Contour Map', 'Framed Quote Inscription Box & Emerald Green Header'],
    heroImage: wishingNationalConstitutionDay,
    screenshots: [wishingNationalConstitutionDay],
    caseStudy: {
      problem: 'Commemorating the adoption of the Constitution of India and democratic ideals.',
      solution: 'Blended legal justice symbols (gavel) with national emblem elements (tricolor & map).',
      impact: 'Extremely popular across legal fraternities, courts, and civic organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-51-national-security-day',
    title: 'National Security Day — Commemorating Our Security Forces Poster',
    category: 'Wishing Posters',
    shortDescription: 'Comprehensive defense poster for National Security Day featuring a main battle tank, naval warship, fighter jet formation, and armed forces silhouettes.',
    fullOverview: 'A comprehensive tri-service defense poster celebrating National Security Day on 04 March. Features an armed forces emblem silhouette overlaying an Ashoka Chakra, flanked by a main battle tank, stealth naval frigate, jet fighter flypast with tricolor smoke, and historic Indian monuments.',
    technologies: ['Photoshop', 'Defense Collage Composite', 'Military Design', 'Typography'],
    features: ['Tri-Services Defense Montage (Army Tank, Navy Warship, Air Force Flypast)', 'Ashoka Chakra & Armed Forces Soldier Silhouettes', 'Bold Terracotta & Dark Green Header Inscriptions'],
    heroImage: wishingNationalSecurityDay,
    screenshots: [wishingNationalSecurityDay],
    caseStudy: {
      problem: 'Commemorating the bravery and vigilance of India\'s security forces on National Security Day.',
      solution: 'Assembled a tri-service military composite celebrating land, sea, and air defense forces.',
      impact: 'Rallied immense patriotic pride across security agencies, military forums, and citizens.'
    },
    featured: true
  },
  {
    id: 'wishing-52-international-mother-language-day',
    title: 'International Mother Language Day — Telugu Talli Honor Poster',
    category: 'Wishing Posters',
    shortDescription: 'Cultural linguistic poster for International Mother Language Day featuring a golden Telugu Talli statue against a traditional mandala pattern.',
    fullOverview: 'A rich cultural poster celebrating International Mother Language Day (అంతర్జాతీయ మాతృభాషా దినోత్సవ శుభాకాంక్షలు). Features a golden idol statue of Telugu Talli holding a lotus and corn sheaf, set against an ornate green mandala and maroon Telugu script typography.',
    technologies: ['Photoshop', 'Cultural Artwork', 'Telugu Calligraphy', 'Typography'],
    features: ['Detailed Golden Idol Statue of Telugu Talli', 'Ornate Radial Mandala Vector Backdrop', 'Traditional Crimson Red Telugu Script Typography'],
    heroImage: wishingInternationalMotherLanguageDay,
    screenshots: [wishingInternationalMotherLanguageDay],
    caseStudy: {
      problem: 'Promoting mother language preservation and cultural pride on International Mother Language Day.',
      solution: 'Crafted a traditional sacred graphic centering the icon of mother language heritage.',
      impact: 'Highly appreciated across literary associations, cultural trusts, and Telugu communities worldwide.'
    },
    featured: true
  },
  {
    id: 'wishing-53-har-ghar-tiranga',
    title: 'Har Ghar Tiranga — One Nation, One Flag, One Spirit Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant national campaign poster for Har Ghar Tiranga featuring twin waving Indian Tricolors with Ashoka Chakra emblem.',
    fullOverview: 'A spirited national awareness campaign poster for #HarGharTiranga. Features twin Indian Tricolor flags mounted proudly beside a central blue Ashoka Chakra wheel, framed by flying white peace doves, falling tricolor confetti, and monument silhouettes.',
    technologies: ['Photoshop', 'Patriotic Campaign Art', 'Vector Flag Design', 'Typography'],
    features: ['Twin Waving Indian Tricolor Flags & Central Ashoka Chakra', 'Soaring Peace Doves & Festive Tricolor Confetti', 'Bold Saffron, Navy Blue, and Emerald Campaign Typography'],
    heroImage: wishingHarGharTiranga,
    screenshots: [wishingHarGharTiranga],
    caseStudy: {
      problem: 'Inspiring citizens to fly the national flag at home during the Har Ghar Tiranga campaign.',
      solution: 'Designed a bright, uplifting patriotic graphic uniting national symbols and community spirit.',
      impact: 'Widespread adoption across social media campaigns, housing societies, and municipal drives.'
    },
    featured: true
  },
  {
    id: 'wishing-54-vishwakarma-puja',
    title: 'Vishwakarma Puja — Celebrating Creativity, Skill & Innovation Poster',
    category: 'Wishing Posters',
    shortDescription: 'Devotional festival poster for Vishwakarma Puja featuring a divine illustration of Lord Vishwakarma holding architectural tools.',
    fullOverview: 'A serene devotional poster celebrating Vishwakarma Puja. Features a divine 3D artwork of Lord Vishwakarma sitting cross-legged, holding sacred architectural tools and a globe, framed by a rich crimson arch and traditional hanging diyas.',
    technologies: ['Photoshop', 'Devotional Art Rendering', 'Festival Branding', 'Typography'],
    features: ['3D Divine Rendering of Lord Vishwakarma with Globe & Engineering Tools', 'Rich Crimson Arch & Ornate Gold Mandala Background', 'Hanging Brass Diyas & Festive Gold Inscription'],
    heroImage: wishingVishwakarmaPuja,
    screenshots: [wishingVishwakarmaPuja],
    caseStudy: {
      problem: 'Honoring artisans, engineers, and creators on the auspicious occasion of Vishwakarma Puja.',
      solution: 'Rendered a magnificent divine portrait highlighting craftsmanship and world innovation.',
      impact: 'Extremely popular share across manufacturing units, engineering workshops, and craft guilds.'
    },
    featured: true
  },
  {
    id: 'wishing-55-indian-navy-day',
    title: 'Indian Navy Day — Because They Guard the Seas We Sail With Confidence Poster',
    category: 'Wishing Posters',
    shortDescription: 'Majestic maritime defense poster for Indian Navy Day featuring a guided missile destroyer warship plowing through ocean waves.',
    fullOverview: 'A powerful naval defense poster for Indian Navy Day on December 4th. Features a stealth guided missile destroyer warship cutting through deep blue ocean spray under clear skies, integrated with giant 3D white "NAVY" text cutout.',
    technologies: ['Photoshop', 'Naval Warship Composite', 'Military Graphic Design', 'Typography'],
    features: ['Front-View High-Speed Indian Navy Destroyer Warship Action Shot', 'Integrated 3D White "NAVY" Typography Cutout', 'Deep Ocean Waves & Clear Sky Studio Compositing'],
    heroImage: wishingIndianNavyDay,
    screenshots: [wishingIndianNavyDay],
    caseStudy: {
      problem: 'Saluting the naval guardians of Indian maritime borders on Navy Day.',
      solution: 'Created an authoritative ocean action visual demonstrating naval strength and confidence.',
      impact: 'Widespread appreciation across defense enthusiasts, naval personnel, and patriotic networks.'
    },
    featured: true
  },
  {
    id: 'wishing-56-indian-armed-force-flag-day',
    title: 'Indian Armed Force Flag Day — A Flag That Stands Tall Poster',
    category: 'Wishing Posters',
    shortDescription: 'Patriotic defense poster for Armed Forces Flag Day featuring Army, Air Force, and Navy emblem badges over marching servicemen.',
    fullOverview: 'A reverent military tribute poster celebrating Armed Forces Flag Day on December 7th. Features three vertical pillar windows displaying the official emblems and marching forces of the Indian Army, Air Force, and Navy, paired with a hand holding the Indian Tricolor.',
    technologies: ['Photoshop', 'Tri-Services Defense Composite', 'Emblem Graphics', 'Typography'],
    features: ['Tri-Services Official Insignia Badges (Army, Air Force, Navy)', 'Vertical Column Montage of Marching Servicemen', 'Hand Holding Indian Tricolor Flag Focal Point'],
    heroImage: wishingIndianArmedForceFlagDay,
    screenshots: [wishingIndianArmedForceFlagDay],
    caseStudy: {
      problem: 'Honoring the sacrifices of Indian armed forces personnel and encouraging flag day donations.',
      solution: 'Designed a structured tri-column artwork uniting all three defense branches.',
      impact: 'Drove widespread awareness and flag day welfare contribution shares.'
    },
    featured: true
  },
  {
    id: 'wishing-57-international-anti-corruption-day',
    title: 'International Anti Corruption Day — Break The Chain Poster',
    category: 'Wishing Posters',
    shortDescription: 'Impactful civic poster for International Anti Corruption Day featuring a line art sketch of two raised fists snapping a rusty chain.',
    fullOverview: 'A powerful advocacy poster for International Anti Corruption Day on 09th December. Features a detailed black-and-white ink line drawing of two raised fists forcefully breaking apart an orange rusted chain, with bold calligraphic slogans.',
    technologies: ['Photoshop', 'Line Art Illustration', 'Civic Advocacy Design', 'Typography'],
    features: ['Dramatic Ink Line Art of Fists Snapping Chain', 'High-Contrast White Background & Orange Chain Accent', 'Clean Serif & Sans-Serif Advocacy Inscriptions'],
    heroImage: wishingInternationalAntiCorruptionDay,
    screenshots: [wishingInternationalAntiCorruptionDay],
    caseStudy: {
      problem: 'Rallying global public commitment against corruption and injustice.',
      solution: 'Visualized integrity overcoming corruption through a forceful chain-breaking sketch.',
      impact: 'Rallied high engagement across anti-corruption Watchdogs, NGOs, and civil society groups.'
    },
    featured: true
  },
  {
    id: 'wishing-58-human-rights-day',
    title: 'Human Rights Day — 10th December UN Declaration Commemoration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Global advocacy poster for Human Rights Day featuring a raised fist gripping a microphone above a tape-mounted craft paper banner backdrop.',
    fullOverview: 'A bold human rights advocacy poster for Human Rights Day on 10th December. Features a silhouette fist holding a broadcasting microphone above a ripped craft paper banner taped to a clean studio background.',
    technologies: ['Photoshop', 'Advocacy Graphic Design', 'Ripped Paper Texture Collage', 'Typography'],
    features: ['Silhouette Raised Fist Holding Microphone Symbolizing Freedom of Speech', 'Tape-Mounted Ripped Craft Paper Banner Centerpiece', 'Minimalist Off-White Speckled Background'],
    heroImage: wishingHumanRightsDay,
    screenshots: [wishingHumanRightsDay],
    caseStudy: {
      problem: 'Commemorating the UN adoption of the Universal Declaration of Human Rights.',
      solution: 'Crafted a speech-and-freedom icon uniting microphone symbolism with craft paper textures.',
      impact: 'Widely featured by international human rights organizations, legal clinics, and student bodies.'
    },
    featured: true
  },
  {
    id: 'wishing-59-international-mountain-day',
    title: 'International Mountain Day — Honor the World\'s Most Powerful Landscapes Poster',
    category: 'Wishing Posters',
    shortDescription: 'Breathtaking nature poster for International Mountain Day featuring a sunlit snow-capped mountain peak towering into crisp blue skies.',
    fullOverview: 'An awe-inspiring environmental poster for International Mountain Day on 11 December. Features a majestic close-up photography shot of a snow-capped Himalayan mountain peak illuminated by sunlight under crisp blue skies and wispy clouds.',
    technologies: ['Photoshop', 'Landscape Photography', 'Nature Poster Design', 'Typography'],
    features: ['High-Resolution Sunlit Snow-Capped Mountain Peak', 'Deep Blue Sky & Wispy Cloud Compositing', 'Clean White Serif Typography Header with Sparkle Accents'],
    heroImage: wishingInternationalMountainDay,
    screenshots: [wishingInternationalMountainDay],
    caseStudy: {
      problem: 'Raising awareness around mountain ecosystem conservation and alpine tourism.',
      solution: 'High-contrast landscape presentation highlighting the grandeur of mountain peaks.',
      impact: 'Loved across trekking groups, environmental NGOs, and outdoor adventure brands.'
    },
    featured: true
  },
  {
    id: 'wishing-60-national-farmers-day',
    title: 'National Farmer\'s Day — Honouring the Hands That Turn Seeds Into Life Poster',
    category: 'Wishing Posters',
    shortDescription: 'Tribute poster for National Farmer\'s Day featuring a hand-drawn sketch of an Indian farmer planting rice saplings in a paddy field.',
    fullOverview: 'A moving agricultural tribute poster for National Farmer\'s Day (Kisan Diwas on 23rd December). Features a detailed ink-wash sketch illustration of a hard-working Indian farmer bending down to plant green rice saplings in a flooded paddy field.',
    technologies: ['Photoshop', 'Ink Wash Sketch Illustration', 'Agricultural Tribute', 'Typography'],
    features: ['Detailed Ink-Wash Sketch of Farmer Planting Rice Saplings', 'Selective Color Accent (Vibrant Green Rice Plants)', 'Textured Handmade Paper Background & Bold Typography'],
    heroImage: wishingNationalFarmersDay,
    screenshots: [wishingNationalFarmersDay],
    caseStudy: {
      problem: 'Honoring the tireless efforts of farmers who feed the nation on Kisan Diwas.',
      solution: 'Created an artistic ink sketch capturing the humble hard work of rice paddy cultivation.',
      impact: 'Resonated deeply across agricultural organizations, rural development groups, and public forums.'
    },
    featured: true
  },
  {
    id: 'wishing-61-national-civil-services-day',
    title: 'National Civil Services Day — Honoring the Servants of the Nation Poster',
    category: 'Wishing Posters',
    shortDescription: 'Dignified governance poster for National Civil Services Day featuring the golden Ashoka Lion Capital atop a domed monument.',
    fullOverview: 'A majestic civil governance poster for National Civil Services Day on 21 April. Features the golden National Emblem of India (Ashoka Lion Capital) mounted atop a grand architectural dome under waving tricolor banners and cloud skies.',
    technologies: ['Photoshop', '3D Monumental Render', 'Governance Design', 'Typography'],
    features: ['Golden 3D Ashoka Lion Emblem & Dome Monument Architecture', 'Flowing Indian Tricolor Banners & Sky Compositing', 'Rich Maroon Serif Typography Header'],
    heroImage: wishingNationalCivilServicesDay,
    screenshots: [wishingNationalCivilServicesDay],
    caseStudy: {
      problem: 'Honoring civil servants who choose public service over self for National Civil Services Day.',
      solution: 'Created an authoritative architectural visual centering the National Emblem of India.',
      impact: 'Rallied high appreciation across administrative services, IAS/IPS academies, and civic forums.'
    },
    featured: true
  },
  {
    id: 'wishing-62-good-governance-day',
    title: 'Good Governance Day — Atal Bihari Vajpayee Birth Anniversary Tribute Poster',
    category: 'Wishing Posters',
    shortDescription: 'Commemorative political poster for Good Governance Day honoring Shri Atal Bihari Vajpayee.',
    fullOverview: 'A dignified political commemorative poster celebrating Good Governance Day on Shri Atal Bihari Vajpayee\'s birth anniversary. Features a portrait of Prime Minister Atal Bihari Vajpayee backed by an India map silhouette, jet flypast tricolor smoke trail, and Ashoka Chakra.',
    technologies: ['Photoshop', 'Political Tribute Design', 'Patriotic Art', 'Typography'],
    features: ['Honorable Atal Bihari Vajpayee Portrait Retouching', 'India Map Silhouette & Jet Tricolor Smoke Trail', 'Clean Vintage Parchment Background & Navy Serif Inscription'],
    heroImage: wishingGoodGovernanceDay,
    screenshots: [wishingGoodGovernanceDay],
    caseStudy: {
      problem: 'Celebrating Shri Atal Bihari Vajpayee\'s legacy of visionary leadership and integrity.',
      solution: 'Blended historic political portraiture with tricolor air force flypast imagery.',
      impact: 'Extremely popular across political forums, governance institutions, and news networks.'
    },
    featured: true
  },
  {
    id: 'wishing-63-mothers-day',
    title: 'Happy Mother\'s Day — Behind Every Strict No is Endless Love Poster',
    category: 'Wishing Posters',
    shortDescription: 'Humorous family character illustration for Mother\'s Day featuring an Indian Amma with a stick playfully chasing a boy holding a phone.',
    fullOverview: 'A hilarious and relatable Mother\'s Day character poster. Features a detailed 3D cartoon illustration of an energetic Indian mother in a saree chasing her little boy holding a smartphone with a stick, celebrating "every superhero called Amma".',
    technologies: ['Photoshop', '3D Character Design', 'Humorous Visual Storytelling', 'Typography'],
    features: ['Relatable Indian Mother "Amma" & Little Boy 3D Characters', 'Dynamic Action Pose & Expressions', 'Clean Minimalist Background & Playful Script Header'],
    heroImage: wishingMothersDay,
    screenshots: [wishingMothersDay],
    caseStudy: {
      problem: 'Creating a heartwarming, humorous Mother\'s Day poster capturing authentic Indian parenting.',
      solution: 'Rendered a fun 3D character chase scene highlighting a mother\'s protective love.',
      impact: 'Viral hit across Indian families, WhatsApp status shares, and social media platforms.'
    },
    featured: true
  },
  {
    id: 'wishing-64-fathers-day',
    title: 'Happy Father\'s Day — Behind Every Strong Family is a Stronger Father Poster',
    category: 'Wishing Posters',
    shortDescription: 'Emotional tribute poster for Father\'s Day featuring a halftone vector silhouette of a father carrying his child on his shoulders.',
    fullOverview: 'A deeply emotional tribute poster celebrating Father\'s Day on June 21st. Features a high-contrast halftone vector graphic of a father holding a small child riding on his shoulders against a dramatic deep crimson red vignette gradient background.',
    technologies: ['Photoshop', 'Halftone Vector Artwork', 'Family Tribute Design', 'Typography'],
    features: ['Halftone Texture Vector Silhouette of Father & Child', 'Deep Crimson Red Vignette Gradient Backdrop', 'Clean White Bold Header Typography & Date Watermark'],
    heroImage: wishingFathersDay,
    screenshots: [wishingFathersDay],
    caseStudy: {
      problem: 'Honoring fathers as the strong foundation of every family on Father\'s Day.',
      solution: 'Crafted a timeless halftone silhouette capturing paternal strength and affection.',
      impact: 'Loved across family networks, parenting groups, and lifestyle brands.'
    },
    featured: true
  },
  {
    id: 'wishing-65-international-day-of-friendship',
    title: 'International Day of Friendship — 30th July Pinky Promise Poster',
    category: 'Wishing Posters',
    shortDescription: 'Pop-art comic graphic for International Day of Friendship featuring two halftone hands making a pinky promise.',
    fullOverview: 'A retro pop-art graphic poster celebrating International Day of Friendship on 30th July. Features a bold halftone dotted illustration of two hands making an iconic pinky promise gesture against a textured white paper backdrop.',
    technologies: ['Photoshop', 'Halftone Pop Art', 'Comic Illustration', 'Typography'],
    features: ['Retro Halftone Dot Pattern Pinky Promise Hand Gesture', 'Vibrant Red Casual Script Typography', 'High-Texture Off-White Paper Background Canvas'],
    heroImage: wishingInternationalDayOfFriendship,
    screenshots: [wishingInternationalDayOfFriendship],
    caseStudy: {
      problem: 'Encouraging friendship, trust, and connection on International Friendship Day.',
      solution: 'Designed a retro comic pop-art pinky promise visual symbolizing unbreakable bonds.',
      impact: 'Drove massive youth shares, friend taggings, and social media engagement.'
    },
    featured: true
  },
  {
    id: 'wishing-66-makar-sankranti',
    title: 'Happy Makar Sankranti — Kite Festival Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant harvest festival poster featuring colorful kites, thread spool (firkee), til sweets bowl, and ceremonial kumkum/haldi bowls.',
    fullOverview: 'A joyful harvest festival poster celebrating Makar Sankranti (Kite Festival). Features a vibrant red-and-green paper kite laid flat on a pristine white surface, adorned with a magenta thread spool (firkee), a bowl of sesame til ladoos, and sacred red kumkum and yellow haldi bowls.',
    technologies: ['Photoshop', 'Festive Still-Life Photography', 'Cultural Design', 'Typography'],
    features: ['High-Contract Festive Still Life Composite (Kite, Firkee, Til Ladoo, Kumkum)', 'Elegant Black Serif Header Typography', 'Warm Traditional Harvest Festival Greeting Inscription'],
    heroImage: wishingMakarSankranti,
    screenshots: [wishingMakarSankranti],
    caseStudy: {
      problem: 'Celebrating the warmth, joy, and kite flying traditions of Makar Sankranti.',
      solution: 'Constructed an authentic harvest still life combining festive sweets, thread, and kites.',
      impact: 'Rallied immense social media greeting shares across festive communities.'
    },
    featured: true
  },
  {
    id: 'wishing-67-saraswati-puja',
    title: 'Happy Saraswati Puja — Musical Coffee Fusion Poster',
    category: 'Wishing Posters',
    shortDescription: 'Artistic fusion poster featuring a swan-shaped veena electric guitar line art with coffee beans and Goddess Saraswati illustration.',
    fullOverview: 'A creative fusion poster for Saraswati Puja. Features a golden line art graphic combining a swan curve and electric guitar headstock with roasted coffee beans and a latte art cup, alongside a detailed line illustration of Goddess Saraswati playing the Veena.',
    technologies: ['Photoshop', 'Line Art Fusion', 'Devotional Art', 'Typography'],
    features: ['Swan & Electric Guitar Veena Line Art Silhouette', 'Latte Art Coffee Cup & Floating Coffee Beans Composite', 'Classic Goddess Saraswati Playing Veena Sketch'],
    heroImage: wishingSaraswatiPuja,
    screenshots: [wishingSaraswatiPuja],
    caseStudy: {
      problem: 'Fusing traditional wisdom and music (Goddess Saraswati) with modern lifestyle (coffee culture).',
      solution: 'Created an elegant dual-element line art graphic linking veena notes to coffee aromas.',
      impact: 'Highly praised across music academies, creative cafes, and youth art groups.'
    },
    featured: true
  },
  {
    id: 'wishing-68-maha-shivaratri',
    title: 'Happy Maha Shivaratri — Sacred Shiva Lingam Blessing Poster',
    category: 'Wishing Posters',
    shortDescription: 'Devotional festival poster for Maha Shivaratri featuring a sacred Shiva Lingam adorned with tilak and marigold flowers.',
    fullOverview: 'A divine devotional poster celebrating Maha Shivaratri. Features a polished black Shiva Lingam on a carved stone Yoni base, adorned with sacred Tripundra tilak, fresh pink lotus, and yellow marigold petals, set against a rich maroon archway and flowing red silk drapes.',
    technologies: ['Photoshop', '3D Devotional Render', 'Fabric Simulation', 'Typography'],
    features: ['Hyper-Realistic Black Stone Shiva Lingam Render with Tripundra Tilak', 'Flowing Red Satin Silk Drape Background', 'Traditional Temple Archway Window Silhouette'],
    heroImage: wishingMahaShivaratri,
    screenshots: [wishingMahaShivaratri],
    caseStudy: {
      problem: 'Capturing spiritual reverence and divine blessings on the holy night of Maha Shivaratri.',
      solution: 'Rendered a high-contrast sacred Shiva Lingam scene bathed in warm golden lighting.',
      impact: 'Widely shared across devotional channels, spiritual centers, and festive networks.'
    },
    featured: true
  },
  {
    id: 'wishing-69-valentines-day-cat',
    title: 'Happy Valentine\'s Day — Cat Under Heart Tree Poster',
    category: 'Wishing Posters',
    shortDescription: 'Charming Valentine\'s Day card illustration featuring a cute tuxedo cat in a red scarf under a heart-leaf tree.',
    fullOverview: 'A cute and heartwarming Valentine\'s Day greeting card poster. Features a hand-painted illustration of a black-and-white tuxedo cat wearing a cozy knitted red scarf, sitting under a wooden tree with red heart leaves alongside wrapped gift boxes and a love letter envelope.',
    technologies: ['Photoshop', 'Watercolor Illustration', 'Greeting Card Design', 'Typography'],
    features: ['Adorable Tuxedo Cat Illustration in Red Knitted Scarf', 'Tree Branch with Falling Red Heart-Shaped Leaves', 'Gingham Checkered Tablecloth & Polka Dot Gift Boxes'],
    heroImage: wishingValentinesDayCat,
    screenshots: [wishingValentinesDayCat],
    caseStudy: {
      problem: 'Designing a charming, pet-friendly alternative greeting card for Valentine\'s Day.',
      solution: 'Illustrated a playful cat surrounded by heart motifs, presents, and warm textures.',
      impact: 'Extremely popular among pet lovers, animal welfare groups, and greeting card buyers.'
    },
    featured: true
  },
  {
    id: 'wishing-70-ugadi',
    title: 'Ugadi Subhakankshalu — Traditional Telugu New Year Poster',
    category: 'Wishing Posters',
    shortDescription: 'Warm traditional Telugu New Year poster featuring a clay kalash with mango leaves, brass oil lamp, and raw mango slices.',
    fullOverview: 'A festive cultural poster for Ugadi (ఉగాది శుభాకాంక్షలు). Features a traditional terracotta clay pot kalash with fresh green mango leaves, a lit brass deepam oil lamp, raw green mango slices on a silver platter, and a vibrant marigold flower garland on a warm amber backdrop.',
    technologies: ['Photoshop', 'Cultural Still Life Photography', 'Telugu Calligraphy', 'Typography'],
    features: ['Traditional Terracotta Kalash & Fresh Green Mango Leaves', 'Lit Brass Diya & Fresh Yellow Marigold Garland', 'Vibrant Telugu Script Calligraphy Header'],
    heroImage: wishingUgadi,
    screenshots: [wishingUgadi],
    caseStudy: {
      problem: 'Commemorating the auspicious start of the Telugu New Year (Ugadi) with authentic traditions.',
      solution: 'Composed a warm, glowing still life centering Ugadi Pachadi ingredients and kalash.',
      impact: 'Massive festive sharing across Andhra Pradesh, Telangana, and global NRI communities.'
    },
    featured: true
  },
  {
    id: 'wishing-71-holi',
    title: 'Happy Holi — Vibrant Festival of Colours Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant festive poster for Holi featuring an ornamental clay pot overflowing with pink gulal, dholak drums, and colorful powder plates.',
    fullOverview: 'A stunning cultural poster celebrating Holi, the festival of colors. Features an intricately decorated terracotta clay pot overflowing with bright magenta pink gulal powder, crossed brass pichkari water guns, traditional dholak percussion drums, and brass plates filled with pink and orange colors against a delicate ornate mandala background.',
    technologies: ['Photoshop', 'Digital Illustration', 'Festive Branding', 'Typography'],
    features: ['Ornamental Clay Pot & Magenta Pink Gulal Powder', 'Traditional Dholak Drums & Crossed Pichkari Water Guns', 'Warm Heartfelt Holi Wishes & Ornate Mandala Pattern'],
    heroImage: wishingHoli,
    screenshots: [wishingHoli],
    caseStudy: {
      problem: 'Creating an uplifting and visually rich Holi wishing creative that honors tradition while delivering a vibrant festive spirit.',
      solution: 'Combined traditional Indian motifs—dholak, pichkari, and earthen color pots—into a harmonious, elegant visual arrangement.',
      impact: 'Extensively shared across social channels and corporate greeting campaigns for Holi celebrations.'
    },
    featured: true
  },
  {
    id: 'wishing-72-navratri',
    title: 'Happy Navratri — Foundations of Faith Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Elegant Navratri festival poster featuring traditional red skirt, silver anklets, mandala rangoli, and sacred red footprints.',
    fullOverview: 'A deeply spiritual and artistic poster for Navratri. Features a minimalist high-contrast composition depicting the lower hem of a traditional red skirt and silver payal (anklets) stepping onto a delicate white mandala rangoli, leading to sacred red footprints (Charan Paduka) with the powerful tagline "Foundations of faith. Structures of success."',
    technologies: ['Photoshop', 'Cultural Branding', 'Minimalist Illustration', 'Typography'],
    features: ['Sacred Red Footprints (Charan Paduka) Symbolism', 'Silver Payal Anklets & White Mandala Rangoli', 'Foundations of Faith & Structures of Success Tagline'],
    heroImage: wishingNavratri,
    screenshots: [wishingNavratri],
    caseStudy: {
      problem: 'Designing a fresh, contemporary yet sacred Navratri greeting poster for professional and personal brand audiences.',
      solution: 'Focused on symbolic purity using red footprints, clean white canvas texture, and empowering typographic layout.',
      impact: 'Achieved high engagement across corporate LinkedIn posts and festive social media greetings during Navratri.'
    },
    featured: true
  },
  {
    id: 'wishing-73-eid-al-fitr-2026',
    title: 'Happy Eid Al-Fitr 2026 — Blessed Crescent & Mosque Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Sophisticated Eid al-Fitr 2026 poster featuring an ornate mosque minaret, golden dome, hanging crescent stars, and Arabic calligraphy.',
    fullOverview: 'A breathtaking Islamic festive graphic design for Eid al-Fitr 2026. Features a beautifully illuminated stone mosque minaret and golden dome set against a vibrant emerald green and warm orange backdrop, adorned with hanging crescent stars, geometric mandala arches, and elegant Arabic calligraphy.',
    technologies: ['Photoshop', 'Islamic Geometric Design', 'Arabic Calligraphy', 'Typography'],
    features: ['Illuminated Mosque Minaret & Golden Dome Structure', 'Emerald Green & Orange Contrast Palette with Crescent Stars', 'Gold Foil Arabic Calligraphy & Festive Blessings'],
    heroImage: wishingEidAlFitr2026,
    screenshots: [wishingEidAlFitr2026],
    caseStudy: {
      problem: 'Creating a premium, modern Eid al-Fitr 2026 greeting banner suitable for corporate and personal celebrations.',
      solution: 'Merged architectural photography of minarets with crisp vector geometry, warm lighting, and traditional calligraphy.',
      impact: 'Widely shared as an executive greeting card and digital poster across international Muslim communities.'
    },
    featured: true
  },
  {
    id: 'wishing-74-ram-navami',
    title: 'Shree Ram Navami — Divine Kodanda Bow & Arrow Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Magnificent Sri Ram Navami poster featuring divine hands holding the golden Kodanda bow, arrow, divine rays, and Sanskrit shlokas.',
    fullOverview: 'A grand devotional poster celebrating Shree Ram Navami (ॐ श्री रामाय नमः). Highlights divine blue hands lifting Lord Rama\'s legendary golden Kodanda bow and arrow resting on a golden altar, framed by carved ancient temple pillars, divine radiant light rays, and sacred Sanskrit shlokas.',
    technologies: ['Photoshop', '3D Digital Render', 'Sanskrit Typography', 'Divine Lighting'],
    features: ['Golden Kodanda Bow & Arrow with Divine Blue Hands', 'Carved Temple Pillars & Warm Golden Sunburst Rays', 'Authentic Sanskrit Shlokas & Hindi Typography'],
    heroImage: wishingRamNavami,
    screenshots: [wishingRamNavami],
    caseStudy: {
      problem: 'Capturing the majesty, righteousness, and divine aura of Lord Ram on the auspicious occasion of Ram Navami.',
      solution: 'Used dramatic chiaroscuro lighting, rich golden textures, and sacred Sanskrit shlokas to evoke deep reverence.',
      impact: 'Became a highly popular viral festive banner across WhatsApp status, Instagram stories, and temple community portals.'
    },
    featured: true
  },
  {
    id: 'wishing-75-mahavir-jayanti',
    title: 'Happy Mahavir Jayanti — Peace & Compassion Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Serene Mahavir Jayanti poster featuring a red and gold papercut silhouette of Lord Mahavira in meditation with temple arch.',
    fullOverview: 'A serene and meditative poster celebrating Mahavir Jayanti. Features a layered red papercut silhouette of Lord Mahavira seated in deep dhyana meditation within a golden temple arch and spire, accompanied by an inspiring message of peace, non-violence (Ahimsa), and universal compassion.',
    technologies: ['Photoshop', 'Papercut Art Effect', 'Spiritual Graphic Design', 'Typography'],
    features: ['Lord Mahavira Meditation Silhouette', 'Layered Red Textured Canvas & Gold Foil Arch', 'Messages of Ahimsa, Peace, and Harmony'],
    heroImage: wishingMahavirJayanti,
    screenshots: [wishingMahavirJayanti],
    caseStudy: {
      problem: 'Designing a minimalist yet profound festive poster reflecting Jain principles of peace, truth, and non-violence.',
      solution: 'Utilized a serene silhouette artwork style with warm crimson textured backdrop and elegant serif typography.',
      impact: 'Praised for its tranquil aesthetic and widely shared during Mahavir Jayanti across Jain cultural organizations.'
    },
    featured: true
  },
  {
    id: 'wishing-76-hanuman-jayanti',
    title: 'Happy Hanuman Jayanti — Strength & Devotion Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Devotional poster for Hanuman Jayanti featuring Lord Hanuman kneeling with Gada mace, Ram mantra halo, and hanging golden bells.',
    fullOverview: 'An awe-inspiring devotional poster celebrating Hanuman Jayanti. Features a detailed 3D artwork of Lord Hanuman in a reverent kneeling posture holding his Gada mace, encircled by a radiant golden halo inscribed with "राम राम" mantras, against a warm sunset horizon with hanging golden temple bells.',
    technologies: ['Photoshop', '3D Digital Rendering', 'Devotional Graphics', 'Typography'],
    features: ['Lord Hanuman Kneeling Pose with Gada Mace', 'Radiant "Ram" Mantra Halo & Hanging Temple Bells', 'Inspiring Strength & Positivity Blessings'],
    heroImage: wishingHanumanJayanti,
    screenshots: [wishingHanumanJayanti],
    caseStudy: {
      problem: 'Expressing the supreme strength, humility, and devotion of Lord Hanuman in a striking festive greeting.',
      solution: 'Created a dramatic sunrise atmosphere combining warm volumetric light rays and sacred Ram mantra typography.',
      impact: 'Shared widely across devotional groups, temple committees, and social channels on Hanuman Jayanti.'
    },
    featured: true
  },
  {
    id: 'wishing-77-good-friday',
    title: 'Good Friday — Path of Love & Sacrifice Poster',
    category: 'Wishing Posters',
    shortDescription: 'Solemn Good Friday reflection poster featuring Jesus Christ on the wooden cross, crown of thorns, and high-contrast monochrome backdrop.',
    fullOverview: 'A solemn and reflective poster for Good Friday. Features a detailed sculpture of Jesus Christ crucified on a wooden cross in the foreground over a crown of thorns, framed by a high-contrast monochrome profile of Christ in deep prayer and reflection.',
    technologies: ['Photoshop', 'Monochrome Digital Art', 'Religious Poster Design', 'Typography'],
    features: ['Crucifixion Cross & Crown of Thorns Visual', 'Monochrome Portrait of Jesus Christ', 'Reflective Quote on Love, Forgiveness & Faith'],
    heroImage: wishingGoodFriday,
    screenshots: [wishingGoodFriday],
    caseStudy: {
      problem: 'Designing a respectful, emotionally resonant poster honoring the solemn sacrifice of Good Friday.',
      solution: 'Balanced dual layers of monochrome portraiture and foreground wooden cross sculpture with clean serif typography.',
      impact: 'Widely shared across Christian community organizations and church greeting portals.'
    },
    featured: true
  },
  {
    id: 'wishing-78-buddha-purnima',
    title: 'Happy Buddha Purnima — Enlightenment & Peace Poster',
    category: 'Wishing Posters',
    shortDescription: 'Minimalist Buddha Purnima poster featuring Lord Buddha in meditative silhouette against a glowing orange full moon sun.',
    fullOverview: 'A minimalist and peaceful poster for Buddha Purnima. Displays the iconographic silhouette of Lord Buddha seated in deep dhyana meditation in front of a glowing golden-orange full moon disc, framed by soft wild grass and foliage silhouettes on a warm beige background.',
    technologies: ['Photoshop', 'Minimalist Vector Art', 'Zen Graphic Design', 'Typography'],
    features: ['Lord Buddha Dhyana Meditation Silhouette', 'Glowing Full Moon Sun Disc & Wild Grass Silhouettes', 'Peace, Happiness & Enlightenment Wishes'],
    heroImage: wishingBuddhaPurnima,
    screenshots: [wishingBuddhaPurnima],
    caseStudy: {
      problem: 'Crafting a tranquil, modern graphic banner for Buddha Purnima that radiates calm and spiritual enlightenment.',
      solution: 'Employed high-contrast silhouette artwork paired with soft earthy beige tones and warm solar gradients.',
      impact: 'Featured across wellness blogs, meditation apps, and festive greeting channels.'
    },
    featured: true
  },
  {
    id: 'wishing-79-narsimha-jayanti',
    title: 'Mahavtar Narsimha Jayanti — Divine Victory Poster',
    category: 'Wishing Posters',
    shortDescription: 'Epic cinematic artwork depicting Mahavtar Narsimha defeating Hiranyakashipu in a grand marble temple courtyard.',
    fullOverview: 'An epic cinematic mythological poster celebrating Mahavtar Narsimha Jayanti. Captures the intense moment of divine intervention as Lord Narsimha (lion-headed avatar of Vishnu) vanquishes the demon king Hiranyakashipu within a sunlit marble temple courtyard with Sanskrit mantra "ॐ नमो भगवते नरसिंहाय".',
    technologies: ['Photoshop', 'Cinematic Concept Art', 'Sanskrit Typography', 'Digital Illustration'],
    features: ['Mahavtar Narsimha Dynamic Action Illustration', 'Ancient Marble Temple Courtyard Setting', 'Sacred "ॐ नमो भगवते नरसिंहाय" Sanskrit Typography'],
    heroImage: wishingNarsimhaJayanti,
    screenshots: [wishingNarsimhaJayanti],
    caseStudy: {
      problem: 'Illustrating the power, righteousness, and epic action of Lord Narsimha\'s avatar for Narsimha Jayanti.',
      solution: 'Developed dynamic action choreography with dramatic chiaroscuro lighting and metallic gold 3D typography.',
      impact: 'Achieved explosive viral engagement across Hindu mythology art communities and festive social media channels.'
    },
    featured: true
  },
  {
    id: 'wishing-80-parshuram-jayanti',
    title: 'Parshuram Jayanti — Fearless Strength & Justice Poster',
    category: 'Wishing Posters',
    shortDescription: 'Royal blue celestial artwork featuring Lord Parshuram on a mountain peak raising his bow and axe under a full moon arch.',
    fullOverview: 'A powerful celestial artwork celebrating Parshuram Jayanti. Features the silhouette of Lord Parshuram standing atop a mountain peak, proudly raising his bow and holding his sacred Parshu (battle axe) under a glowing lunar portal arch against a deep midnight blue sky.',
    technologies: ['Photoshop', 'Vector Silhouette Illustration', 'Mythological Art', 'Typography'],
    features: ['Lord Parshuram Silhouette with Bow & Parshu Axe', 'Glowing Full Moon Arch & Midnight Blue Sky Atmosphere', 'Inspiring "Fearless, Wise, and Just" Quote'],
    heroImage: wishingParshuramJayanti,
    screenshots: [wishingParshuramJayanti],
    caseStudy: {
      problem: 'Representing the valor, wisdom, and warrior spirit of Lord Parshuram on his Jayanti.',
      solution: 'Used bold white typography and a striking high-contrast silhouette against a luminous lunar background.',
      impact: 'Widely praised and shared across community portals, WhatsApp greetings, and festival campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-81-rath-yatra',
    title: 'Happy Rath Yatra — Jai Jagannath Chariot Festival Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant Odissi dancers and dholak musicians celebrating in front of the monochrome Jagannath temple chariots.',
    fullOverview: 'A joyful cultural poster celebrating Puri Rath Yatra (जय जगन्नाथ!). Features vibrant color illustrations of Odissi classical dancers in traditional attire and male musicians playing dholak drums, dancing exuberantly in front of a monochrome backdrop of the three iconic Jagannath temple chariots (Rath).',
    technologies: ['Photoshop', 'Cultural Dance Illustration', 'Festival Graphics', 'Typography'],
    features: ['Vibrant Odissi Dancers & Dholak Musicians Illustration', 'Monochrome Jagannath Chariots & Temple Silhouette', 'Inspiring "Chariots roll, hearts unite. Jai Jagannath!" Tagline'],
    heroImage: wishingRathYatra,
    screenshots: [wishingRathYatra],
    caseStudy: {
      problem: 'Capturing the vibrant dance traditions, devotional fervor, and grand procession of Puri Rath Yatra.',
      solution: 'Juxtaposed colorful Odissi dancers against a monochrome chariot illustration for striking visual hierarchy.',
      impact: 'Extensively shared across temple committees, cultural organizations, and festive social feeds.'
    },
    featured: true
  },
  {
    id: 'wishing-82-durga-ashtami',
    title: 'Subho Durga Ashtami — Maa Durga Blessing Poster',
    category: 'Wishing Posters',
    shortDescription: 'Crimson festive poster with ornate golden arch, Maa Durga face watermark, and black silhouette of Goddess Durga riding her lion.',
    fullOverview: 'A divine cultural poster celebrating Subho Durga Ashtami (শুভ মহাঅষ্টমী). Set on a rich crimson backdrop featuring a close-up watermark of Maa Durga\'s fierce eyes and third eye, framed by a golden decorative altar arch, with a solid black silhouette of Goddess Durga riding her lion brandishing sacred weapons.',
    technologies: ['Photoshop', 'Cultural Branding', 'Calligraphy', 'Typography'],
    features: ['Goddess Durga Lion Rider Silhouette Art', 'Maa Durga Eyes Watermark & Gold Ornamental Arch', 'Traditional Gothic Script Title Typography'],
    heroImage: wishingDurgaAshtami,
    screenshots: [wishingDurgaAshtami],
    caseStudy: {
      problem: 'Designing a powerful, traditional Durga Ashtami wish poster evoking the protective energy of Maa Durga.',
      solution: 'Blended close-up Durga eye watermark with dark silhouette art and intricate golden Bengali festive borders.',
      impact: 'Widely shared across West Bengal, Tripura, and global Bengali NRI festive circles during Durga Puja.'
    },
    featured: true
  },
  {
    id: 'wishing-83-raksha-bandhan',
    title: 'Happy Raksha Bandhan — Bond of Love & Lifelong Support Poster',
    category: 'Wishing Posters',
    shortDescription: 'Heartwarming polaroid style poster showcasing siblings applying tilak and tying Rakhi, set on crimson velvet texture.',
    fullOverview: 'A nostalgic and emotional festive poster for Raksha Bandhan. Designed like a scrapbook layout with two monochrome polaroid snapshots showing a young sister lovingly applying tilak to her brother\'s forehead and tying a Rakhi, set over a deep crimson velvet background with delicate white lace borders and a vibrant floral Rakhi thread.',
    technologies: ['Photoshop', 'Polaroid Collage', 'Festive Photography', 'Typography'],
    features: ['Dual Monochrome Sibling Polaroid Photos', 'Crimson Velvet Texture & White Lace Frame', 'Vibrant Floral Rakhi Thread Illustration'],
    heroImage: wishingRakshaBandhan,
    screenshots: [wishingRakshaBandhan],
    caseStudy: {
      problem: 'Evoking genuine sibling love, childhood memories, and warmth for Raksha Bandhan marketing campaigns.',
      solution: 'Utilized vintage monochrome polaroid photography framed in lace and velvet textures to create emotional intimacy.',
      impact: 'Generated exceptionally high user engagement and share rates across social media greeting campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-84-bonalu',
    title: 'Happy Bonalu — Telangana Cultural Prosperity Festival Poster',
    category: 'Wishing Posters',
    shortDescription: 'Telangana festival creative featuring a woman carrying decorative Bonam pots with neem leaves over a red state map silhouette.',
    fullOverview: 'A vibrant regional festival graphic poster celebrating Bonalu (బోనాలు). Features a traditional Telangana woman gracefully carrying stacked decorated terracotta Bonam pots with fresh neem leaves and lit deepam on her head, set over a red silhouetted map of Telangana State with Charminar line art and a street food vendor cart.',
    technologies: ['Photoshop', 'Regional Cultural Art', 'Map Graphic Design', 'Typography'],
    features: ['Terracotta Bonam Pots with Neem Leaves & Diya', 'Red Telangana State Map Silhouette & Charminar Artwork', 'Vibrant Floral Pattern & Prosperity Greetings'],
    heroImage: wishingBonalu,
    screenshots: [wishingBonalu],
    caseStudy: {
      problem: 'Celebrating the unique cultural identity, rituals, and heritage of Telangana\'s grand festival Bonalu.',
      solution: 'Combined iconic state geography, traditional Bonam attire illustration, and Hyderabad architectural line art.',
      impact: 'Widely praised across Telangana state media, municipal banners, and local community WhatsApp groups.'
    },
    featured: true
  },
  {
    id: 'wishing-85-muharram',
    title: 'Happy Muharram — Prayer & Devotion Poster',
    category: 'Wishing Posters',
    shortDescription: 'Serene spiritual poster illustrating a devout Muslim offering Sujud prayer on a prayer rug with faint mosque minaret silhouettes.',
    fullOverview: 'A serene and spiritual poster for Muharram. Features a hand-drawn digital line art illustration of a devout Muslim man offering Sujud (prostration) prayer on an ornate prayer rug (Janamaz), against a clean textured background with soft grey mosque dome and minaret silhouettes in the distance.',
    technologies: ['Photoshop', 'Digital Line Art Illustration', 'Islamic Art', 'Typography'],
    features: ['Sujud Prayer Hand-Drawn Line Art Illustration', 'Ornate Janamaz Prayer Rug Details', 'Soft Grey Mosque Minarets Silhouette & Bold Typography'],
    heroImage: wishingMuharram,
    screenshots: [wishingMuharram],
    caseStudy: {
      problem: 'Creating a dignified, minimalist Islamic poster for Muharram focusing on prayer, faith, and devotion.',
      solution: 'Employed expressive ink line illustration with soft atmospheric shading and clean typographic layout.',
      impact: 'Appreciated for its artistic simplicity and shared across international Islamic community networks.'
    },
    featured: true
  },
  {
    id: 'wishing-86-nag-panchami',
    title: 'Happy Nag Panchami — Strength & Protection Poster',
    category: 'Wishing Posters',
    shortDescription: 'Spiritual Nag Panchami creative featuring Lord Shiva in black meditation silhouette, Shivling with flowers, and open-hood cobra.',
    fullOverview: 'A sacred devotional poster for Nag Panchami (नाग पंचमी). Features Lord Shiva in a solid black dhyana meditation silhouette holding his Trishul, in front of a Shivling decorated with flowers, an open-hooded Nag Devta cobra with milk bowl offering, and a warm golden mandala watermark on aged parchment paper.',
    technologies: ['Photoshop', 'Spiritual Silhouette Art', 'Mythological Branding', 'Typography'],
    features: ['Lord Shiva Meditation Silhouette & Trishul', 'Decorated Shivling & Hooded Nag Devta Cobra Visual', 'Golden Mandala Rangoli & Parchment Paper Background'],
    heroImage: wishingNagPanchami,
    screenshots: [wishingNagPanchami],
    caseStudy: {
      problem: 'Conveying the sacred reverence of Nag Panchami and the protective blessings of Lord Shiva and Nag Devtas.',
      solution: 'Harmonized dark silhouette artwork with realistic snake photography and warm gold mandala illumination.',
      impact: 'Widely shared across devotional community portals, temple groups, and social greeting campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-87-varalakshmi-vratham',
    title: 'Happy Varalakshmi Vratham — Auspicious Prosperity Poster',
    category: 'Wishing Posters',
    shortDescription: 'Divine Varalakshmi Vratham creative showing Goddess Lakshmi seated on a pink lotus with golden kalash, coins, and golden elephants.',
    fullOverview: 'A radiant devotional poster celebrating Varalakshmi Vratham (వరలక్ష్మీ వ్రతం). Highlights Goddess Lakshmi in traditional auspicious red and gold silk attire seated on a blooming pink lotus, holding twin lotus flowers, with a golden kalash vessel overflowing with gold coins flanked by twin golden elephants, under marigold garlands.',
    technologies: ['Photoshop', 'Devotional Art', 'Gold Foil Graphic Design', 'Typography'],
    features: ['Goddess Varalakshmi Iconography on Pink Lotus', 'Gold Coin Kalash Flanked by Twin Golden Elephants', 'Fresh Marigold Garland & Real Estate Gratitude Message'],
    heroImage: wishingVaralakshmiVratham,
    screenshots: [wishingVaralakshmiVratham],
    caseStudy: {
      problem: 'Designing a traditional Varalakshmi Vratham poster that combines divine blessings with real estate developer brand messaging.',
      solution: 'Integrated classic South Indian Lakshmi art with subtle home-building gratitude typography.',
      impact: 'Extensively published across real estate brand campaigns and festive South Indian households.'
    },
    featured: true
  },
  {
    id: 'wishing-88-onam',
    title: 'Happy Onam — Kerala Harvest & Snake Boat Race Festival Poster',
    category: 'Wishing Posters',
    shortDescription: 'Colorful Onam poster split design pairing a Kathakali face mask and banana leaf Sadhya feast with Kerala Vallam Kali boat race.',
    fullOverview: 'A vibrant harvest festival creative celebrating Kerala Onam (ഓണാശംസകൾ). Features a split visual composition combining a detailed Kathakali dance face illustration and a traditional 26-dish Onam Sadhya feast served on a banana leaf on the left, with Kerala Vallam Kali snake boat racers rowing under coconut palm trees on the right.',
    technologies: ['Photoshop', 'Cultural Illustration', 'Festive Split Collage', 'Typography'],
    features: ['Kathakali Face Mask & Onam Sadhya Feast Visual', 'Kerala Vallam Kali Snake Boat Race & Palm Trees', 'Torn Paper Aesthetic & Warm Sun Gradient'],
    heroImage: wishingOnam,
    screenshots: [wishingOnam],
    caseStudy: {
      problem: 'Synthesizing Kerala\'s multi-faceted Onam traditions—dance, gastronomy, and boat racing—into a single iconic poster.',
      solution: 'Designed a bold torn-paper split composition contrasting intricate vector icons with painterly boat racing action.',
      impact: 'Achieved high viral reach across Kerala, Gulf diaspora communities, and tourism promotion channels.'
    },
    featured: true
  },
  {
    id: 'wishing-89-bathukamma',
    title: 'Happy Bathukamma — Telangana Floral Festival Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant Bathukamma creative showing a stacked floral arrangement on a yellow silk saree, with Charminar and Buddha statue line art backdrop.',
    fullOverview: 'A colorful regional festive poster for Bathukamma (బతుకమ్మ శుభాకాంక్షలు). Features a traditional concentric cone of fresh marigolds, lotus, and jasmine flowers placed on a folded yellow and red silk saree, set against a parchment backdrop featuring line art watermarks of Charminar, Hussain Sagar Buddha statue, and Kakatiya arches.',
    technologies: ['Photoshop', 'Floral Arrangement Photography', 'Regional Cultural Graphics', 'Typography'],
    features: ['Conical Marigold & Jasmine Floral Bathukamma Stack', 'Traditional Yellow & Red Silk Saree Support', 'Hyderabad Architectural Line Art Watermark'],
    heroImage: wishingBathukamma,
    screenshots: [wishingBathukamma],
    caseStudy: {
      problem: 'Honoring Telangana\'s unique floral festival Bathukamma with authentic regional cultural motifs.',
      solution: 'Prominently featured the floral mound resting on festive silk sarees with subtle historic landmark line art.',
      impact: 'Extensively shared across Telangana state media, women\'s cultural associations, and social feeds.'
    },
    featured: true
  },
  {
    id: 'wishing-90-dipawali',
    title: 'Happy Dipawali — Festival of Lights Celebration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Royal blue Dipawali creative featuring five glowing earthen diya oil lamps on an intricate gold mandala rangoli with hanging lamps.',
    fullOverview: 'A regal and glowing festive poster for Dipawali (दीपावली / दीपावली की हार्दिक शुभकामनाएं). Set on a royal navy blue background with intricate gold mandala corner ornaments, featuring five lit terracotta diya oil lamps with warm golden flames arranged over a detailed rangoli pattern, complemented by hanging gold oil lamps.',
    technologies: ['Photoshop', 'Gold Mandala Vector', 'Lighting Effects', 'Typography'],
    features: ['Five Lit Terracotta Diya Oil Lamps with Glowing Flames', 'Intricate Gold Foil Mandala Corner & Base Rangoli', 'Hanging Gold Oil Lamps & Heartfelt New Beginning Wishes'],
    heroImage: wishingDipawali,
    screenshots: [wishingDipawali],
    caseStudy: {
      problem: 'Creating a high-end, luxurious Diwali greeting banner for corporate executives and brand audiences.',
      solution: 'Used deep royal blue and gold foil contrast with realistic flame lighting and elegant serif typography.',
      impact: 'Selected as corporate festive header across multiple enterprise brand emailers and social campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-91-christmas-2025',
    title: 'Merry Christmas 2025 — Cool Modern Santa & Reindeer Poster',
    category: 'Wishing Posters',
    shortDescription: 'Trendy Christmas calendar creative featuring a cool Santa Claus in green velvet suit and white sneakers next to a reindeer.',
    fullOverview: 'A fresh, trendy commercial poster for Christmas 2025. Features a stylish Santa Claus wearing a green velvet suit, dark sunglasses, and crisp white sneakers posing next to a festive reindeer wearing a winter scarf, accompanied by a December 2025 calendar with December 25th circled.',
    technologies: ['Photoshop', 'Fashion Photography', 'Modern Festive Branding', 'Typography'],
    features: ['Modern Green Velvet Santa & White Sneakers Style', 'Festive Reindeer with Knit Winter Scarf', 'December 2025 Calendar Grid with Dec 25 Circled'],
    heroImage: wishingChristmas2025,
    screenshots: [wishingChristmas2025],
    caseStudy: {
      problem: 'Reimagining classic Christmas holiday marketing with a youthful, high-fashion street style aesthetic.',
      solution: 'Paired a forest green palette with contemporary streetwear fashion and clean editorial typography.',
      impact: 'Generated high engagement among youth brands, retail campaigns, and fashion e-commerce social channels.'
    },
    featured: true
  },
  {
    id: 'wishing-92-bhogi',
    title: 'Bhogi Panduga Subhakankshalu — Warm Bonfire Festival Poster',
    category: 'Wishing Posters',
    shortDescription: 'Traditional Telugu festival Bhogi creative featuring a roaring bonfire over a white mandala rangoli on deep blue backdrop.',
    fullOverview: 'A warm traditional festive creative for Bhogi Panduga (భోగి పండుగ శుభాకాంక్షలు). Features a vibrant roaring central bonfire (Bhogi Mantalu) with glowing embers built over an ornate white mandala rangoli on a deep indigo blue background with golden Telugu script.',
    technologies: ['Photoshop', 'Cultural Festival Photography', 'Telugu Calligraphy', 'Typography'],
    features: ['Roaring Bhogi Bonfire & Glowing Embers Visual', 'White Mandala Rangoli & Royal Blue Background', 'Vibrant Gold Telugu Calligraphy Header'],
    heroImage: wishingBhogi,
    screenshots: [wishingBhogi],
    caseStudy: {
      problem: 'Capturing the warmth, new beginnings, and traditional bonfire rituals of Bhogi for Sankranti season.',
      solution: 'Employed high-contrast fire photography over a deep blue mandala background with warm golden calligraphy.',
      impact: 'Massive festive sharing across Andhra Pradesh, Telangana, and NRI communities on Bhogi day.'
    },
    featured: true
  },
  {
    id: 'wishing-93-kanuma',
    title: 'Kanuma Subhakankshalu — Cattle & Harvest Festival Poster',
    category: 'Wishing Posters',
    shortDescription: 'Heartwarming Telugu harvest festival creative depicting a woman in silk saree feeding a decorated sacred cow on a rangoli.',
    fullOverview: 'A heartwarming cultural poster celebrating Kanuma (కనుమ శుభాకాంక్షలు). Depicts a traditional woman in a bright orange and yellow silk saree feeding a decorated sacred white cow (Gomatha) adorned with turmeric, kumkum, bell garlands, and silk cloth over an intricate floor rangoli pattern.',
    technologies: ['Photoshop', 'Cultural Character Art', 'Telugu Calligraphy', 'Typography'],
    features: ['Decorated Sacred Cow (Gomatha) & Silk Cloth', 'Traditional Woman Offering Prayers in Silk Saree', 'Gratitude Message to Farmers & Livestock'],
    heroImage: wishingKanuma,
    screenshots: [wishingKanuma],
    caseStudy: {
      problem: 'Honoring the agrarian gratitude to livestock and cattle during the third day of Sankranti (Kanuma).',
      solution: 'Created an authentic rural character illustration celebrating cattle worship and farm prosperity.',
      impact: 'Shared extensively across agricultural brands, rural communities, and festive family groups.'
    },
    featured: true
  },
  {
    id: 'wishing-94-nirjala-ekadashi',
    title: 'Nirjala Ekadashi — Divine Vishnu & Sheshnag Grace Poster',
    category: 'Wishing Posters',
    shortDescription: 'Devotional Nirjala Ekadashi poster featuring Lord Vishnu resting on Sheshnag in Ksheera Sagara with Goddess Lakshmi.',
    fullOverview: 'A majestic devotional poster for Nirjala Ekadashi (निर्जला एकादशी). Highlights Lord Vishnu in a serene reclining Anantasayana posture on the multi-headed serpent Sheshnag in the Ksheera Sagara (ocean of milk), with Goddess Lakshmi massaging his feet and Lord Brahma seated on a lotus, set on a crimson backdrop with Vishnu Tilak watermark.',
    technologies: ['Photoshop', 'Devotional 3D Art', 'Vedic Mythology', 'Typography'],
    features: ['Lord Vishnu Reclining on Multi-Headed Sheshnag', 'Goddess Lakshmi & Lord Brahma Iconography', 'Crimson Textured Backdrop & Divine Blessings Text'],
    heroImage: wishingNirjalaEkadashi,
    screenshots: [wishingNirjalaEkadashi],
    caseStudy: {
      problem: 'Depicting the supreme spiritual devotion and cosmic grace of Lord Vishnu on Nirjala Ekadashi.',
      solution: 'Combined vibrant Vaishnavite deity 3D sculpture art with subtle line art watermarks and divine lighting.',
      impact: 'Widely shared across devotional portals, temple channels, and religious social media accounts.'
    },
    featured: true
  },
  {
    id: 'wishing-95-national-picnic-day',
    title: 'National Picnic Day — Spring Lawn & Book Aesthetic Poster',
    category: 'Wishing Posters',
    shortDescription: 'Aesthetic spring outdoor poster featuring a white woven picnic blanket on green dandelion grass with coffee and an open book.',
    fullOverview: 'An aesthetic and serene spring lifestyle poster for National Picnic Day (23rd April). Displays an overhead flat-lay photography composition featuring a white woven picnic blanket spread on a vibrant green lawn dotted with yellow dandelions, featuring an open book, a cup of warm coffee, and a fresh white apple blossom flower.',
    technologies: ['Photoshop', 'Lifestyle Photography', 'Editorial Layout Design', 'Typography'],
    features: ['Overhead Flat-Lay Picnic Blanket & Lawn Dandelions Photography', 'Open Book, Coffee Cup & Apple Blossom Flower Visual', 'Clean Modern Serif Header & Designer Signature Watermark'],
    heroImage: wishingNationalPicnicDay,
    screenshots: [wishingNationalPicnicDay],
    caseStudy: {
      problem: 'Designing a relaxed, aesthetic spring lifestyle graphic for National Picnic Day celebration campaigns.',
      solution: 'Utilized natural sunlight photography, organic green textures, and clean white typography for a serene feel.',
      impact: 'Featured across lifestyle blogs, cafe promotions, and social media aesthetic mood boards.'
    },
    featured: true
  },
  {
    id: 'wishing-96-ganesh-chaturthi',
    title: 'Happy Ganesh Chaturthi — Dhol Tasha Festive Poster',
    category: 'Wishing Posters',
    shortDescription: 'Energetic crimson festive creative featuring Dhol Tasha drum performers with saffron flags in front of Lord Ganesha silhouette.',
    fullOverview: 'An energetic and joyous festival poster for Ganesh Chaturthi (गणेश चतुर्थी की हार्दिक शुभकामनाएं). Set on a vibrant crimson red backdrop featuring a glowing red illustration of Lord Ganesha in the background, with lively Dhol Tasha drum performers playing yellow dhol drums and waving saffron flags amidst a celebrating crowd.',
    technologies: ['Photoshop', 'Cultural Festival Illustration', 'Energetic Event Graphics', 'Typography'],
    features: ['Lively Dhol Tasha Drum Performers & Saffron Flags', 'Glowing Red Lord Ganesha Silhouette Backdrop', 'Rich Crimson Texture & Celebratory Crowd Silhouette'],
    heroImage: wishingGaneshChaturthi,
    screenshots: [wishingGaneshChaturthi],
    caseStudy: {
      problem: 'Capturing the high energy, rhythmic music, and grand festive procession of Ganesh Chaturthi.',
      solution: 'Combined vibrant red background tones with dynamic character artwork playing Dhol Tasha drums.',
      impact: 'Extensively shared during Ganesh Utsav across Maharashtra, Telangana, and social media event handles.'
    },
    featured: true
  },
  {
    id: 'wishing-97-world-book-day',
    title: 'World Book Day — Blue Sky & Open Book Inspiration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant blue sky poster featuring a hand holding an open hardcover book facing the sun, celebrating reading and imagination.',
    fullOverview: 'An inspiring educational and literary graphic poster for World Book Day (23rd April). Features a low-angle photograph of a hand holding an open hardcover book up against a clear azure blue sky, accompanied by bold white typography reading "World BOOK DAY" and an uplifting quote on knowledge and imagination.',
    technologies: ['Photoshop', 'Conceptual Photography', 'Modern Editorial Design', 'Typography'],
    features: ['Low-Angle Open Book Sky Photography', 'Azure Blue Sky Background & Bold Sans-Serif Header', 'Uplifting World Book Day Quote & Designer Watermark'],
    heroImage: wishingWorldBookDay,
    screenshots: [wishingWorldBookDay],
    caseStudy: {
      problem: 'Designing a clean, modern, and inspiring visual creative celebrating reading and literacy for World Book Day.',
      solution: 'Paired bright natural blue sky photography with high-contrast geometric typography for maximum visual impact.',
      impact: 'Featured across educational institutions, publishing brand handles, and digital library campaigns.'
    },
    featured: true
  },
  {
    id: 'wishing-98-world-press-freedom-day',
    title: 'World Press Freedom Day — Courage & Power of Truth Poster',
    category: 'Wishing Posters',
    shortDescription: 'Crimson textured poster featuring a large 3D news microphone over a crowd silhouette watermark, honoring journalism.',
    fullOverview: 'A powerful media awareness poster celebrating World Press Freedom Day (3rd May). Features a close-up 3D render of a news reporter microphone with "NEWS" cube header set on a textured crimson red background with a crowd silhouette watermark and bold headline "World PRESS FREEDOM DAY".',
    technologies: ['Photoshop', '3D Media Illustration', 'Editorial Advocacy Banner', 'Typography'],
    features: ['3D News Microphone & Cube Cube Header Render', 'Crimson Textured Backdrop with Crowd Silhouette', 'Bold "Truth & Courage" Journalism Tagline'],
    heroImage: wishingWorldPressFreedomDay,
    screenshots: [wishingWorldPressFreedomDay],
    caseStudy: {
      problem: 'Honoring independent journalism, press freedom, and the courage of reporters worldwide.',
      solution: 'Used bold metallic microphone graphics over intense red textured canvas with strong statement typography.',
      impact: 'Widely shared across media organizations, journalism forums, and human rights channels.'
    },
    featured: true
  },
  {
    id: 'wishing-99-autism-awareness-day',
    title: 'Autism Awareness Day — Teddy Bear & Rainbow Infinity Poster',
    category: 'Wishing Posters',
    shortDescription: 'Heartwarming sky blue creative featuring a plush teddy bear holding a rainbow infinity symbol, celebrating unique minds.',
    fullOverview: 'A heartwarming social awareness graphic poster for Autism Awareness Day / Month. Displays a cute soft blue plush teddy bear sitting against a light blue vignette background, holding a colorful wooden rainbow infinity symbol (autism neurodiversity mascot), with a scalloped blue header banner.',
    technologies: ['Photoshop', 'Social Awareness Graphics', '3D Soft Character Art', 'Typography'],
    features: ['Soft Blue Plush Teddy Bear Character', 'Vibrant Rainbow Infinity Symbol (Neurodiversity Mascot)', 'Scalloped Blue Badge Banner & Inclusion Message'],
    heroImage: wishingAutismAwarenessDay,
    screenshots: [wishingAutismAwarenessDay],
    caseStudy: {
      problem: 'Promoting neurodiversity acceptance, kindness, and understanding during Autism Awareness Month.',
      solution: 'Selected a friendly teddy bear visual holding the neurodiversity rainbow infinity symbol for warm emotional connection.',
      impact: 'Appreciated for its gentle tone and widely shared across schools, therapy centers, and advocacy groups.'
    },
    featured: true
  },
  {
    id: 'wishing-100-national-dna-day',
    title: 'National DNA Day — Building Blocks of Life Science Poster',
    category: 'Wishing Posters',
    shortDescription: 'Striking crimson poster featuring a black 3D double helix molecular DNA strand structure, celebrating genetic science.',
    fullOverview: 'A striking scientific graphic poster celebrating National DNA Day (25th April). Features a detailed 3D render of a black molecular double helix DNA strand structure stretching across a deep crimson textured background, with bold typography declaring "NATIONAL DNA DAY" and celebrating genetic discoveries.',
    technologies: ['Photoshop', 'Scientific 3D Rendering', 'Bold Typography', 'Graphic Design'],
    features: ['3D Black Molecular Double Helix DNA Strand', 'Crimson Textured Canvas & High-Contrast Typography', '25th April National DNA Day Scientific Quote'],
    heroImage: wishingNationalDnaDay,
    screenshots: [wishingNationalDnaDay],
    caseStudy: {
      problem: 'Creating a high-impact, modern scientific poster celebrating genetic science and DNA discoveries.',
      solution: 'Combined dramatic 3D molecular renders with bold editorial typography and crimson texture.',
      impact: 'Featured across biotechnology portals, research lab handles, and science education platforms.'
    },
    featured: true
  },
  {
    id: 'wishing-101-central-excise-day',
    title: 'Central Excise Day — Salute to Officers & Fair Taxation Poster',
    category: 'Wishing Posters',
    shortDescription: 'Royal blue national tribute poster featuring the Ashoka Lion emblem seal, crossed Indian flags, and gold star.',
    fullOverview: 'A dignified national tribute poster for Central Excise Day (24th February). Set on a royal blue background featuring the official Ashoka Lion capital emblem seal encircled in navy blue, topped with twin crossed Indian national flags and a gold star, expressing gratitude to Central Excise officers.',
    technologies: ['Photoshop', 'Government Emblem Branding', 'Patriotic Design', 'Typography'],
    features: ['Ashoka Lion Capital Emblem Seal', 'Twin Crossed Indian National Flags & Gold Star', 'Official Tribute Message to Central Excise Officers'],
    heroImage: wishingCentralExciseDay,
    screenshots: [wishingCentralExciseDay],
    caseStudy: {
      problem: 'Commemorating the dedication of Central Excise officers in strengthening the nation\'s economy and fair taxation.',
      solution: 'Used official state emblem seals, national tricolor flags, and a royal blue corporate palette.',
      impact: 'Published across government department portals, finance tax handles, and official social accounts.'
    },
    featured: true
  },
  {
    id: 'wishing-102-shivaji-jayanti',
    title: 'Chhatrapati Shivaji Jayanti — Courage & Vision Poster',
    category: 'Wishing Posters',
    shortDescription: 'Heroic portrait creative of Chhatrapati Shivaji Maharaj in a saffron turban with Devanagari calligraphy watermark.',
    fullOverview: 'A heroic historical graphic poster for Chhatrapati Shivaji Jayanti (छత్రपती शिवाजी महाराज जयंती). Features an artistic circular portrait illustration of Chhatrapati Shivaji Maharaj wearing a golden saffron turban and royal attire, framed by a Devanagari calligraphy watermark "छत्रपती शिवाजी" and flowing saffron silk flags.',
    technologies: ['Photoshop', 'Historical Portraiture', 'Devanagari Calligraphy', 'Typography'],
    features: ['Chhatrapati Shivaji Maharaj Circular Vector Portrait', 'Devanagari "छत्रपती शिवाजी" Calligraphy Watermark', 'Flying Saffron Silk Flags & Courage Quote'],
    heroImage: wishingShivajiJayanti,
    screenshots: [wishingShivajiJayanti],
    caseStudy: {
      problem: 'Honoring the legendary courage, vision, and Maratha leadership of Chhatrapati Shivaji Maharaj.',
      solution: 'Merged vibrant orange portraiture with traditional Devanagari calligraphy and clean textured canvas background.',
      impact: 'Extensively shared across Maharashtra, historical societies, and festive social media circles.'
    },
    featured: true
  },
  {
    id: 'wishing-103-world-bartender-day',
    title: 'World Bartender Day — Craft Drinks & Memorable Moments Poster',
    category: 'Wishing Posters',
    shortDescription: 'Vibrant crimson bar lounge creative featuring a smiling male bartender in a bow tie shaking a cocktail shaker.',
    fullOverview: 'A lively hospitality and nightlife graphic poster for World Bartender Day (24th February). Set against a dark red bar lounge counter with illuminated liquor bottles, featuring a smiling male bartender wearing a bow tie shaking a metallic cocktail shaker, styled with halftone dot art.',
    technologies: ['Photoshop', 'Hospitality Graphic Design', 'Halftone Retouching', 'Typography'],
    features: ['Professional Bartender Shaking Cocktail Graphic', 'Illuminated Bar Counter & Liquor Bottles Background', 'Modern Halftone Dot Pattern & Cheers Message'],
    heroImage: wishingWorldBartenderDay,
    screenshots: [wishingWorldBartenderDay],
    caseStudy: {
      problem: 'Celebrating the mixology craft, hospitality artists, and cocktail creators on World Bartender Day.',
      solution: 'Blended warm ambient bar lounge photography with punchy pop-art halftone dots and crisp typography.',
      impact: 'Featured across luxury bars, mixology academies, and hospitality brand social channels.'
    },
    featured: true
  },
  {
    id: 'wishing-104-tour-guide-day',
    title: 'International Tour Guide Day — Travel & Exploration Poster',
    category: 'Wishing Posters',
    shortDescription: 'Deep starry blue travel poster featuring a cheerful female tour guide with straw hat, binoculars, and map.',
    fullOverview: 'An adventurous tourism awareness poster celebrating International Tour Guide Day (21st February). Set on a deep starry blue background, featuring a smiling female tour guide dressed in a straw hat, leather fringe vest, with binoculars around her neck, carrying a travel map and gear.',
    technologies: ['Photoshop', 'Travel & Tourism Branding', 'Lifestyle Portraiture', 'Typography'],
    features: ['Female Tour Guide Lifestyle Character with Travel Gear', 'Deep Starry Blue Background with Light Scratches', 'Bold White Header "INTERNATIONAL TOUR GUIDE DAY"'],
    heroImage: wishingTourGuideDay,
    screenshots: [wishingTourGuideDay],
    caseStudy: {
      problem: 'Recognizing the passionate tour guides who bring history, culture, and destinations to life for travelers.',
      solution: 'Paired cheerful wanderlust portraiture with a deep celestial background and clean geometric typography.',
      impact: 'Shared widely across travel agencies, tour operator associations, and tourism boards.'
    },
    featured: true
  },
  {
    id: 'wishing-105-pravasi-bharatiya-divas',
    title: 'Pravasi Bharatiya Divas — Celebrating Global Indian Diaspora Poster',
    category: 'Wishing Posters',
    shortDescription: 'Patriotic NRI tribute poster featuring a commercial airplane wrapped in Indian tricolor ribbon taking off over family silhouettes.',
    fullOverview: 'A patriotic diaspora tribute poster celebrating Pravasi Bharatiya Divas / Non-Resident Indian (NRI) Day (9th January). Displays a large commercial jet airliner taking off over a city skyline watermark wrapped with a flying Indian tricolor ribbon, with blue silhouettes of traveling families and luggage below.',
    technologies: ['Photoshop', 'Vector Diaspora Art', 'Aviation Branding', 'Typography'],
    features: ['Commercial Jet Airplane with Flying Indian Tricolor Ribbon', 'City Skyline & Blue Family Traveling Silhouettes', 'Global Indian Diaspora Pride Statement'],
    heroImage: wishingPravasiBharatiyaDivas,
    screenshots: [wishingPravasiBharatiyaDivas],
    caseStudy: {
      problem: 'Honoring the global contributions, achievements, and heritage of non-resident Indians worldwide.',
      solution: 'Combined aviation takeoff imagery with national tricolor accents and family travel vector graphics.',
      impact: 'Extensively published across Indian embassies, NRI associations, and international travel brands.'
    },
    featured: true
  },
  {
    id: 'wishing-106-programmers-day',
    title: 'Happy Programmer\'s Day — Code Creators & Tech Innovation Poster',
    category: 'Wishing Posters',
    shortDescription: 'Minimalist tech poster featuring a 3D blue developer avatar holding a code plaque in front of a binary matrix waterfall.',
    fullOverview: 'A sleek tech graphic poster celebrating Programmer\'s Day (13th September / 256th day of the year). Features a smooth 3D blue developer avatar character holding a dark plaque with `< />` code tags, set against a clean white backdrop with falling 0 and 1 binary matrix code watermarks.',
    technologies: ['Photoshop', '3D Avatar Modeling', 'Tech Graphic Design', 'Typography'],
    features: ['3D Blue Developer Avatar Character', 'Dark `< />` Code Tag Plaque Visual', 'Falling Binary Matrix (0 and 1) Code Waterfall Background'],
    heroImage: wishingProgrammersDay,
    screenshots: [wishingProgrammersDay],
    caseStudy: {
      problem: 'Designing a modern, relatable celebration banner for software engineers and code creators on Programmer\'s Day.',
      solution: 'Paired a 3D claymorphism developer icon with a clean binary code waterfall and minimalist editorial typography.',
      impact: 'Extensively shared across IT companies, developer communities, tech bootcamps, and GitHub/LinkedIn feeds.'
    },
    featured: true
  },
  {
    id: 'wishing-107-kargil-vijay-diwas',
    title: 'Kargil Vijay Diwas — Salute to Brave Hearts Victory Poster',
    category: 'Wishing Posters',
    shortDescription: 'Patriotic tribute creative depicting an Indian soldier saluting while hoisting the Tricolor on a snowy mountain summit.',
    fullOverview: 'A solemn and patriotic tribute poster for Kargil Vijay Diwas (26th July). Displays a white silhouette of an Indian Armed Forces soldier saluting proudly next to the waving Indian National Tricolor flag planted atop a rugged snowy mountain peak silhouette, set on a textured royal blue sky background with distressed typography.',
    technologies: ['Photoshop', 'Patriotic Military Illustration', 'Distressed Typography', 'Digital Art'],
    features: ['Saluting Soldier Silhouette & Indian Tricolor Flag', 'Snowy Kargil Mountain Summit Silhouettes', 'Rugged Distressed Typography & Nation\'s Tribute Quote'],
    heroImage: wishingKargilVijayDiwas,
    screenshots: [wishingKargilVijayDiwas],
    caseStudy: {
      problem: 'Honoring the extraordinary valor, sacrifice, and victory of Indian soldiers during Operation Vijay.',
      solution: 'Used high-contrast white silhouette art against a textured deep blue mountain backdrop with bold distressed title typography.',
      impact: 'Widely featured across national news portals, military tribute handles, and social media commemorations on July 26.'
    },
    featured: true
  },
  {
    id: 'sambar-vada-authentic-dip-campaign',
    title: 'Sambar Vada — Hot Crisp Vada Dipped in Authentic Sambar',
    category: 'Digital Campaigns',
    shortDescription: 'Traditional South Indian culinary campaign poster featuring a golden crispy vada being dipped into rich hot sambar served on a banana leaf with coconut and tomato chutneys.',
    fullOverview: 'A mouth-watering culinary ad campaign poster for South Indian breakfast delicacies. Features a close-up action shot of a golden crispy Medu Vada being dipped into a steaming bowl of spicy vegetable sambar served on a fresh green banana leaf, accompanied by creamy coconut chutney and tangy tomato chutney.',
    technologies: ['Photoshop', 'Food Photography', 'Ad Campaign', 'Social Media'],
    features: [
      'High-Speed Dynamic Sambar Drizzle & Dip Action Shot',
      'Authentic South Indian Banana Leaf & Clayware Styling',
      'Rich Color Grading & Vibrant Chutney Contrast'
    ],
    heroImage: featuredSambarVadaDip,
    screenshots: [featuredSambarVadaDip],
    caseStudy: {
      problem: 'Creating a high-converting social media campaign ad for an authentic South Indian restaurant.',
      solution: 'Captured the visceral moment of dipping a crispy vada into hot sambar with rich color tones.',
      impact: 'Drove a 40% increase in morning breakfast delivery orders and social shares.'
    },
    featured: true
  },
  {
    id: 'mithai-that-melts-hearts-milkcake-campaign',
    title: 'Mithai That Melts Hearts — Milkcake Festive Campaign',
    category: 'Digital Campaigns',
    shortDescription: 'Mouth-watering sweet campaign creative showcasing rich granular ghee milkcake topped with pistachios, featuring a taped parchment note aesthetic.',
    fullOverview: 'An exquisite festive dessert campaign poster titled "MITHAI THAT MELTS HEARTS — Milkcake". Features top-down macro photography of golden caramelized milk cake pieces garnished with sliced pistachios, overlaid with a taped parchment paper note aesthetic and elegant typography.',
    technologies: ['Photoshop', 'Food Styling', 'Festive Campaign', 'Typography'],
    features: [
      'Taped Parchment Note Aesthetic & Script Typography Overlay',
      'Macro Texture Detail of Golden Ghee Caramelized Milkcake',
      'Warm Festive Palette with Vibrant Green Pistachio Accents'
    ],
    heroImage: featuredMithaiMilkcake,
    screenshots: [featuredMithaiMilkcake],
    caseStudy: {
      problem: 'Designing a compelling festive campaign poster for premium Indian sweets during festival season.',
      solution: 'Paired tactile macro food photography with an intimate taped paper note tagline.',
      impact: 'Boosted festival sweet box pre-orders by 55% during peak holiday sales.'
    },
    featured: true
  },
  {
    id: 'double-the-sweetness-kheer-jamun-campaign',
    title: 'Double The Sweetness — Badam Kheer & Gulab Jamun Duo Campaign',
    category: 'Digital Campaigns',
    shortDescription: 'Vibrant yellow scalloped border promotional banner featuring almond-loaded Badam Kheer in a carved brass bowl alongside warm Gulab Jamuns.',
    fullOverview: 'A bright, festive food campaign advertisement titled "DOUBLE THE SWEETNESS — A Sweet Duo You Can\'t Resist". Features a carved traditional brass bowl overflowing with creamy almond Badam Kheer and a brass plate with syrup-soaked Gulab Jamuns, framed in a scalloped festive red border on warm golden yellow.',
    technologies: ['Photoshop', 'Promotional Design', 'Food Photography', 'Ad Campaign'],
    features: [
      'Scalloped Festive Ad Border & Bold Red Banner Architecture',
      'Carved Brass Tableware & Rich Indian Dessert Composition',
      'High-Contrast Product Callouts ("Badam Kheer", "With Gulab Jamun")'
    ],
    heroImage: featuredBadamKheerGulabJamun,
    screenshots: [featuredBadamKheerGulabJamun],
    caseStudy: {
      problem: 'Promoting a sweet combo deal for festive dining and dessert delivery.',
      solution: 'Created a high-energy yellow and red scalloped campaign ad showcasing the pairing.',
      impact: 'Generated high click-through rates for dessert combo orders.'
    },
    featured: true
  },
  {
    id: 'explore-malaysia-island-paradise-campaign',
    title: 'Explore Malaysia — Island Paradise Travel Campaign',
    category: 'Digital Campaigns',
    shortDescription: 'Breathtaking travel campaign poster featuring emerald waters, dramatic karst limestone islands, traditional boats, and irresistible package pricing starting from ₹14,999/-.',
    fullOverview: 'A luxury travel campaign poster designed for international tour packages. Highlights crystal emerald waters of Malaysian karst sea islands with traditional wooden tour boats gliding through, layered with elegant white serif title typography "Explore Malaysia" and compelling price offer callouts.',
    technologies: ['Photoshop', 'Travel Marketing', 'Poster Design', 'Photo Composition'],
    features: [
      'Dramatic Sunset Island Aerial Photo Composition',
      'Elegant Script & Serif Typography Layout ("Explore Malaysia")',
      'High-Visibility Price Callout Banner ("STARTING FROM ₹14,999/- BOOK NOW")'
    ],
    heroImage: featuredExploreMalaysiaTravel,
    screenshots: [featuredExploreMalaysiaTravel],
    caseStudy: {
      problem: 'Driving high conversion inquiries for tropical international vacation packages.',
      solution: 'Combined aspirational island photography with clear, bold pricing and booking CTA.',
      impact: 'Increased holiday booking inquiries by 50% across digital ads.'
    },
    featured: true
  },
  {
    id: 'soft-buttery-idli-ghee-drizzle-campaign',
    title: 'Soft & Buttery Idli — Golden Ghee Drizzle Campaign',
    category: 'Digital Campaigns',
    shortDescription: 'Cinematic food ad campaign showcasing a steaming stack of pillow-soft podi idlis on a banana leaf with golden aromatic ghee pouring generously from a vintage spoon.',
    fullOverview: 'A dramatic, moody food advertising campaign poster for authentic South Indian dining. Features a stack of three steaming pillow-soft idlis dusted with spicy podi powder on a banana leaf inside an earthen terracotta bowl. Pure melted golden ghee is captured mid-air pouring from a vintage brass spoon.',
    technologies: ['Photoshop', 'Food Photography Art Direction', 'Social Media Campaign', 'Lighting Composition'],
    features: [
      'Macro Ghee Pouring Action Shot & Steam Effects',
      'Rustic Terracotta Bowls & Dark Chiaroscuro Lighting',
      'Poetic Copywriting ("On soft idli, ghee making every bite buttery and bright")'
    ],
    heroImage: featuredSoftIdliGhee,
    screenshots: [featuredSoftIdliGhee],
    caseStudy: {
      problem: 'Elevating traditional breakfast idli into a premium gourmet sensory experience.',
      solution: 'Used moody dark food photography with golden lighting highlighting pure ghee drizzle.',
      impact: 'Drove massive engagement and viral reshares on Instagram food campaigns.'
    },
    featured: true
  },
  {
    id: 'learn-create-grow-editorial',
    title: 'Learn Create Grow — Invest in Skills That Pay You Back for Life',
    category: 'Branding',
    shortDescription: 'Vibrant green editorial magazine mockup layout emphasizing creative skill investment, UI tool design, and workspace inspiration.',
    fullOverview: 'A high-impact editorial magazine spread design featuring hands holding an open creative magazine. Displays a modern mobile/desktop UI design workspace on the left page and a nostalgic creative workstation with colorful sticky notes (Ideas, Create, Inspire, Plan, Grow) on the right page.',
    technologies: ['Photoshop', 'Editorial Design', 'Brand Strategy', 'Visual Identity'],
    features: [
      'Dual-Page Open Editorial Magazine Mockup Layout',
      'Emerald Green Ray Studio Background & Lighting',
      'Creative Workspace & UI Tooling Inspiration Visuals'
    ],
    heroImage: featuredLearnCreateGrow,
    screenshots: [featuredLearnCreateGrow],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Inspiring creative professionals to invest in lifelong design skills and digital craftsmanship.',
      solution: 'Crafted a tangible editorial spread connecting modern UI tools with hands-on creative thinking.',
      impact: 'Drove strong engagement across educational and design community channels.'
    },
    featured: true
  },
  {
    id: 'websites-that-perform-ui-showcase',
    title: 'Websites That Don\'t Just Exist — They Perform',
    category: 'UI/UX Design',
    shortDescription: '3D laptop interface showcase featuring an unrolling responsive web UI paper roll with high-conversion landing page layouts.',
    fullOverview: 'A 3D perspective website showcase featuring an ultra-modern laptop screen where the web page gracefully unrolls down as a continuous paper roll onto the desk. Highlights clean hero UI, agency vision sections, interactive service cards, and conversion contact forms.',
    technologies: ['UI/UX Design', '3D Mockup', 'Responsive Design', 'Web Architecture'],
    features: [
      'Continuous Unrolling 3D Web UI Paper Roll Concept',
      'Ultra-Modern Cobalt Blue & Crisp White Color Scheme',
      'High-Conversion Component Cards & Form Architecture'
    ],
    heroImage: featuredWebsitesPerform,
    screenshots: [featuredWebsitesPerform],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Demonstrating web design performance beyond static screenshots.',
      solution: 'Created an unrolling 3D scroll mockup showing full landing page continuity.',
      impact: 'Increased client inquiries for web redesigns and high-performance UI projects.'
    },
    featured: true
  },
  {
    id: 'post-without-a-strategy-ad',
    title: 'This Happens When You Post Without a Strategy',
    category: 'Social Media Marketing',
    shortDescription: 'High-concept social media campaign poster featuring a melting ice cream scoop missing a waffle cone to illustrate un-strategized content marketing.',
    fullOverview: 'An award-winning conceptual advertising poster demonstrating content marketing strategy. Features hands holding an empty waffle cone while an ice cream scoop drops directly onto the table, paired with the bold slogan: "This happens when you post without a strategy."',
    technologies: ['Creative Strategy', 'Social Media', 'Photo Manipulation', 'Art Direction'],
    features: [
      'High-Speed Dynamic Liquid & Ice Cream Splatter Action Shot',
      'Bold Minimalist Editorial Typography Hierarchy',
      'Witty Metaphorical Concept for Content Marketing Strategy'
    ],
    heroImage: featuredPostWithoutStrategy,
    screenshots: [featuredPostWithoutStrategy],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Communicating the risks of random posting without strategic marketing planning.',
      solution: 'Used a relatable visual metaphor of missed execution (ice cream missing the cone).',
      impact: 'Became a viral marketing post shared by agency leads and strategists.'
    },
    featured: true
  },
  {
    id: 'life-in-a-metro-floor-graphics',
    title: 'Life in a METRO — Environmental Typography Campaign',
    category: 'Poster Design',
    shortDescription: 'High-impact 3D perspective floor typography graphics in a modern metro train interior illustrating urban commuting and brand visibility.',
    fullOverview: 'A dramatic environmental typography campaign set inside a high-speed metro train carriage. Giant vibrant yellow anamorphic floor typography reads "METRO" flanked by handwritten script "Life in a", creating an immersive perspective experience for passengers.',
    technologies: ['Environmental Graphic Design', '3D Perspective', 'Typography', 'Outdoor Media'],
    features: [
      'Anamorphic 3D Floor Typography Perspective Alignment',
      'High-Contrast Electric Yellow & Royal Blue Metro Floor Palette',
      'Realistic Train Interior Lighting & Passenger Context'
    ],
    heroImage: featuredLifeInAMetro,
    screenshots: [featuredLifeInAMetro],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Designing ambient out-of-home advertising that captures commuter attention inside transit spaces.',
      solution: 'Utilized floor-plane anamorphic typography visible from passenger walking angles.',
      impact: 'Generated high social sharing from metro commuters taking foot-POV photos.'
    },
    featured: true
  },
  {
    id: 'order-at-4pm-dip-by-411pm-biscuit-ad',
    title: 'Order at 4PM, Dip by 4:11PM — Tea Time Biscuit Campaign',
    category: 'Social Media Marketing',
    shortDescription: 'High-angle creative food ad featuring a tea clock cup, biscuit dipping action shot, and rapid delivery promise for tea-time snacks.',
    fullOverview: 'A warm, inviting 4 PM evening tea-time campaign poster viewed from top-down perspective. Features a tea cup designed as a clock face pointing to 4:11 PM, a hand dipping a biscuit into hot chai, and a biscuit packet layout on a warm wooden table.',
    technologies: ['Food Photography Art Direction', 'Creative Copywriting', 'Advertising Poster', 'Photoshop'],
    features: [
      'Top-Down Perspective Tea-Time Lifestyle Set Composition',
      'Custom Tea Cup Clock Face Vector Illustration & Graphic',
      'Warm Cozy Home Interior Lighting & Warm Color Grading'
    ],
    heroImage: featuredOrderAt4pmDipBy411pm,
    screenshots: [featuredOrderAt4pmDipBy411pm],
    liveDemoUrl: '',
    githubUrl: '',
    caseStudy: {
      problem: 'Promoting 10-minute quick-commerce delivery for evening tea-time snack cravings.',
      solution: 'Linked the exact minute of order placement to the moment of biscuit dipping.',
      impact: 'Increased 4 PM afternoon order conversion rates for snack delivery apps.'
    },
    featured: true
  },
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
    location: 'Hyderabad, India',
    responsibilities: [
      'Steering end-to-end brand identities, creative direction, and digital asset architecture for global client campaigns.',
      'Redesigned flagship brand identity increasing client engagement by 40%.',
      'Pioneered Generative AI asset pipelines for global social launches.'
    ],
    techStack: ['Photoshop', 'Illustrator', 'Figma', 'Firefly AI', 'ChatGPT', 'Midjourney', 'Brand Strategy', 'UI/UX']
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
    techStack: ['Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Brand Strategy', 'Unsplash', 'Freepik']
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
    techStack: ['Figma', 'Photoshop', 'Illustrator', 'UI/UX', 'Canva', 'Photopea']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Bavanaka Swathi',
    role: 'Product Engineer',
    company: 'Freyr Energy',
    avatar: swathiAvatar,
    quote: 'Nandini turned our solar energy product platforms into intuitive, high-converting visual experiences. Her precision in UI design systems and brand graphics elevated our user engagement tremendously.',
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
    name: 'Lakshmi Venkumahanti',
    role: 'Managing Director (MD)',
    company: 'All Hands Global',
    avatar: lakshmiAvatar,
    quote: 'Nandini\'s exceptional visual design leadership and creative direction transformed All Hands Global\'s brand identity. Her strategic vision, brand precision, and generative workflows consistently deliver world-class design excellence.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Premm Moparthi',
    role: 'Full Stack Developer',
    company: 'Tech Lead',
    avatar: premmAvatar,
    quote: 'Nandini seamlessly bridges graphic design and frontend engineering. Her pixel-perfect design assets and intuitive UI components make full-stack integration a absolute breeze.',
    rating: 5
  }
];
