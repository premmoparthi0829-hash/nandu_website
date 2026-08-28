import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsLeft, ChevronsRight, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types/app';
import { useData } from '../context/DataContext';

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
import rollTheDice from '../assets/roll_the_dice.jpg';
import trustBranding from '../assets/trust_begins_with_branding.jpg';
import brandStandOut from '../assets/brand_stand_out.jpg';
import creativityOverheats from '../assets/creativity_overheats.jpg';
import friendshipDay from '../assets/friendship_day.jpg';
import youGotAMail from '../assets/you_got_a_mail.jpg';
import digitalMarketing from '../assets/digital_marketing.jpg';
import admissionOpen from '../assets/admission_open.jpg';
import workCreatively from '../assets/work_creatively_brand_strategically.jpg';
import bestDigitalAgency from '../assets/best_digital_marketing_agency.jpg';
import socialMediaAdsCreative from '../assets/social_media_ads_creative.jpg';
import happyIndependenceDay from '../assets/happy_independence_day.jpg';
import teamIndiaT20 from '../assets/team_india_t20_victory.jpg';
import socialMediaFlyers from '../assets/social_media_flyer_designs.jpg';
import socialMediaManagement from '../assets/social_media_marketing_management.jpg';
import postingEveryday from '../assets/posting_everyday_build_brand.jpg';
import takeWhatYouNeed from '../assets/take_what_you_need.jpg';
import surprisedByResults from '../assets/surprised_by_the_results.jpg';

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
    id: 'chai-refresh-desktop-concept',
    title: 'Chai Refresh — Desktop Context Menu Concept',
    category: 'Poster',
    filterCategory: 'Poster',
    image: chaiRefreshPoster,
    description: 'Creative Indian tea poster featuring a steaming glass of cutting chai with an OS desktop right-click menu selecting "Refresh".',
    technologies: ['Photoshop', 'Photo Manipulation', 'Creative Concept', 'UI Overlay'],
  },
  {
    id: 'the-palette-that-paints-your-identity',
    title: 'The Palette That Paints Your Identity — Peacock Art',
    category: 'Branding',
    filterCategory: 'Branding',
    image: palettePaintsYourIdentity,
    description: 'Striking brand identity poster featuring a monochrome peacock with a colorful Pantone color swatch fan tail.',
    technologies: ['Photoshop', 'Brand Identity', 'Photo Manipulation', 'Typography'],
  },
  {
    id: 'seo-is-not-dead-keyboard-grenade',
    title: 'SEO is Not Dead — Keyboard Grenade Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: keyboardGrenadeSeo,
    description: 'High-concept performance marketing poster featuring a keyboard key grenade under a Google AI search bar. "SEO is Not Dead."',
    technologies: ['Photoshop', '3D Composition', 'Ad Creative', 'Digital Marketing'],
  },
  {
    id: 'designing-is-not-making-2-minute-noodles',
    title: 'Designing Is Not Making 2 Minute Noodles',
    category: 'Poster',
    filterCategory: 'Poster',
    image: designingNot2MinNoodles,
    description: 'Bold studio manifesto poster featuring a chrome showerhead pouring cooked spaghetti noodles onto a plate.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Typography', 'Poster Design'],
  },
  {
    id: 'ideas-from-heart-brain-neural-art',
    title: 'Ideas From Heart — Brain & Heart Neural Art',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: ideasFromHeart,
    description: 'Minimalist studio concept poster featuring a human brain connected to a heart via colorful electric neural cables.',
    technologies: ['Photoshop', '3D Photomontage', 'Conceptual Design', 'Typography'],
  },
  {
    id: 'sahib-barbeque-biryani-haleem',
    title: 'Sahib\'s Barbeque — Biryani & Haleem Chat Poster',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: sahibBarbequeBiryani,
    description: 'Witty social media campaign poster featuring funny chat text bubbles over authentic Biryani & Haleem.',
    technologies: ['Photoshop', 'Food Photography', 'Social Media Design', 'Advertising'],
  },
  {
    id: 'last-voyage-to-glory',
    title: 'The Last Voyage to Glory — World Cup Rowing',
    category: 'Poster',
    filterCategory: 'Poster',
    image: lastVoyageToGlory,
    description: 'Surreal sports poster depicting Neymar, Messi, and Ronaldo rowing along a sweater zipper toward the FIFA World Cup Trophy.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Sports Poster', '3D Composition'],
  },
  {
    id: 'tropical-fruit-juice-trophy',
    title: 'Tropical Fruit Juice Trophy & Arch of Flavors',
    category: 'Branding',
    filterCategory: 'Branding',
    image: tropicalFruitJuiceTrophy,
    description: 'Vibrant product display poster featuring a trophy sculpted from tropical fruits under an arch of 13 fruit juice cans.',
    technologies: ['Photoshop', 'Product Design', 'Photo Manipulation', 'Packaging'],
  },
  {
    id: 'gulab-jamun-tempting-order-now',
    title: 'Tempting Gulab Jamun — Food Advertising',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: gulabJamunTempting,
    description: 'High-contrast food delivery poster featuring a hand dipping a syrup-soaked Gulab Jamun on bright yellow backdrop. "tempting? To phir order kro."',
    technologies: ['Photoshop', 'Food Photography', 'Ad Creative', 'Typography'],
  },
  {
    id: 'celebrating-national-sports-day',
    title: 'Celebrating National Sports Day — Indian Heroes',
    category: 'Poster',
    filterCategory: 'Poster',
    image: celebratingNationalSportsDay,
    description: 'Patriotic tribute poster celebrating National Sports Day with iconic Indian sports heroes and 3D Ashoka Chakra emblem.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Event Poster', 'Typography'],
  },
  {
    id: 'silk-meets-swagger',
    title: 'Silk Meets Swagger! — Fashion Editorial',
    category: 'Poster',
    filterCategory: 'Poster',
    image: silkMeetsSwagger,
    description: 'Bold fashion promotional poster featuring streetwear styling, electric yellow typography, and modern attitude visual design.',
    technologies: ['Photoshop', 'Typography', 'Fashion Styling', 'Poster Art'],
  },
  {
    id: 'caffeine-army-best-version',
    title: 'Caffeine Army — Packaging & Membership',
    category: 'Branding',
    filterCategory: 'Branding',
    image: caffeineArmy,
    description: 'Dynamic floating product packaging poster featuring Caffeine Army supplement cans unboxing experience. "YOUR BEST VERSION STARTS NOW!".',
    technologies: ['Photoshop', 'Packaging Design', '3D Product Rendering', 'E-Commerce Branding'],
  },
  {
    id: 'goa-sun-sand-fun-nightlife',
    title: 'Goa — Sun, Sand, Fun & Nightlife',
    category: 'Poster',
    filterCategory: 'Poster',
    image: goaHolidayPackage,
    description: 'Vibrant holiday package promotional poster featuring thrilling paragliding ocean-view shot and itinerary highlights.',
    technologies: ['Photoshop', 'Travel Branding', 'Typography', 'Icon Design'],
  },
  {
    id: 'real-estate-phase-1-possession-soon',
    title: 'Phase 1 — Possession Soon (Luxury Real Estate)',
    category: 'Branding',
    filterCategory: 'Branding',
    image: realEstatePhase1,
    description: 'Tactile concept poster featuring yellow fabric pulled down by hand revealing modern residential luxury towers. "Once it\'s Gone, it\'s Gone".',
    technologies: ['Photoshop', 'Real Estate Branding', 'Visual Composition', '3D Architecture'],
  },
  {
    id: 'happy-national-logistics-day',
    title: 'Happy National Logistics Day',
    category: 'Poster',
    filterCategory: 'Poster',
    image: happyNationalLogisticsDay,
    description: 'Striking multi-modal transport poster featuring commercial airliner, freight truck on sea bridge, and container ship.',
    technologies: ['Photoshop', 'Photo Composition', 'Typography', 'Corporate Campaign'],
  },
  {
    id: 'happy-labor-day-may-1st',
    title: 'Happy Labor Day — May 1st',
    category: 'Poster',
    filterCategory: 'Poster',
    image: happyLaborDay,
    description: 'High-impact Labor Day promotional poster featuring bold red distressed typography and detailed worker hand photomontage with wrench.',
    technologies: ['Photoshop', 'Typography', 'Photo Manipulation', 'Poster Design'],
  },
  {
    id: 'we-make-your-brand-stronger',
    title: 'We Make Your Brand Stronger Than You Think',
    category: 'Branding',
    filterCategory: 'Branding',
    image: brandStrongerAnt,
    description: 'Creative branding poster featuring an ant in boxing gloves standing triumphantly on a knocked out elephant. "We Make Your BRAND Stronger Than You Think."',
    technologies: ['Photoshop', 'Photo Manipulation', 'Branding Strategy', 'Poster Art'],
  },
  {
    id: 'giving-your-brand-an-extra-edge',
    title: 'Giving Your Brand An Extra Edge',
    category: 'Branding',
    filterCategory: 'Branding',
    image: givingBrandExtraEdge,
    description: '3D conceptual poster featuring wooden carved typography emerging sharp and refined from a red pencil sharpener. "Giving Your Brand An Extra Edge."',
    technologies: ['Photoshop', '3D Composition', 'Typography', 'Creative Branding'],
  },
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
  {
    id: 'work-creatively-brand-strategically',
    title: 'Work Creatively, Brand Strategically',
    category: 'Branding',
    filterCategory: 'Branding',
    image: workCreatively,
    description: 'Flat lay top-down desktop poster design on deep red textured background. "Work Creatively, Brand Strategically. Avadesign helps you build a brand that not only looks good, but also leaves a lasting impression on your audience."',
    technologies: ['Photoshop', 'Branding Strategy', 'Graphic Design', 'Typography'],
  },
  {
    id: 'best-digital-marketing-agency',
    title: 'Best Digital Marketing Agency',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: bestDigitalAgency,
    description: 'Vibrant cobalt blue editorial creative featuring a woman reading Business Times with headline "Where is the best digital marketing agency?". Slogan: "She is still searching! But you don\'t have to because WE ARE HERE!!"',
    technologies: ['Photoshop', 'Typography', 'Social Media Design', 'Photo Manipulation'],
  },
  {
    id: 'social-media-ads-creative',
    title: 'Social Media Ads Creative',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: socialMediaAdsCreative,
    description: 'High-concept red studio ad creative featuring a classical Greek philosopher statue working on a MacBook. Glassmorphic UI cards showcase Micro and Nano ad strategy packages.',
    technologies: ['Photoshop', '3D Composition', 'Ad Creative', 'Glassmorphism'],
  },
  {
    id: 'happy-independence-day-india-gate',
    title: 'Happy Independence Day — India Gate',
    category: 'Poster',
    filterCategory: 'Poster',
    image: happyIndependenceDay,
    description: 'Majestic blue sky architectural poster featuring India Gate wrapped with a floating 3D Indian tricolor ribbon. "Happy Independence Day — Building a Stronger India, One Structure at a Time."',
    technologies: ['Photoshop', 'Photo Manipulation', '3D Ribbon Design', 'Poster Design'],
  },
  {
    id: 'team-india-t20-world-cup-victory',
    title: 'Congratulations Team India — T20 World Cup',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: teamIndiaT20,
    description: 'High-impact sports celebration poster featuring Virat Kohli and Rohit Sharma celebrating with the ICC Men\'s T20 World Cup trophy wrapped in the Indian flag. "Congratulations Team India — We achieved the Target 2nd time!!"',
    technologies: ['Photoshop', 'Sports Poster Design', 'Photo Manipulation', 'Typography'],
  },
  {
    id: 'social-media-flyer-designs-showcase',
    title: 'Social Media Flyer Designs Showcase',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: socialMediaFlyers,
    description: 'Sleek dark green showcase banner presenting 5 vertical promotional flyer designs (We Are Open, Fashion Fest, Micap Event, Stepping into April, Gospel Explosion) with a glassmorphic badge: "Design • Print • Advertisement".',
    technologies: ['Photoshop', 'Flyer Design', 'Portfolio Layout', 'Glassmorphism'],
  },
  {
    id: 'social-media-marketing-management',
    title: 'Social Media Marketing Management',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: socialMediaManagement,
    description: 'Modern minimalist social media management ad poster featuring a hand holding an iPhone surrounded by floating 3D social app icons — LinkedIn, Facebook, YouTube, TikTok, Instagram, WhatsApp, and Pinterest.',
    technologies: ['Photoshop', '3D Icon Design', 'Social Media Management', 'Ad Creative'],
  },
  {
    id: 'posting-everyday-build-a-brand',
    title: "Posting Everyday Doesn't Build a Brand",
    category: 'Branding',
    filterCategory: 'Branding',
    image: postingEveryday,
    description: 'Vibrant orange retro typewriter poster featuring crisp typography on paper sheet. "Posting Everyday Doesn\'t Automatically Build a Brand — Brand Strategy First."',
    technologies: ['Photoshop', 'Typography', 'Branding Strategy', 'Poster Art'],
  },
  {
    id: 'take-what-you-need-agency-services',
    title: 'Take What You Need — Agency Services',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: takeWhatYouNeed,
    description: 'Creative purple tear-off bulletin board poster concept. "Take What You Need — Graphic Designing, Photography, Web Designing, Branding, Social Media Marketing, Videography, Copywriting, Video Editing."',
    technologies: ['Photoshop', 'Graphic Design', 'Creative Concept', 'Typography'],
  },
  {
    id: 'surprised-by-the-results-digital-strategy',
    title: 'Surprised By The Results? — Smart Strategy',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: surprisedByResults,
    description: 'Minimalist editorial studio poster featuring a 3D animated character girl with wide eyes. "Surprised By The Results? That\'s what happens when CREATIVITY meets smart DIGITAL STRATEGY."',
    technologies: ['Photoshop', '3D Character Art', 'Ad Creative', 'Typography'],
  },
  {
    id: 'happy-ram-navami-festival-poster',
    title: 'Happy Ram Navami — Festival Poster Design',
    category: 'Poster',
    filterCategory: 'Poster',
    image: happyRamNavami,
    description: 'Devotional Ram Navami poster featuring carved idols of Lord Ram and Lord Hanuman bowing in reverence with hanging brass bells.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Festival Campaign', 'Typography'],
  },
  {
    id: 'mera-bharat-mahan-74-years-progress',
    title: 'Mera Bharat Mahan — 74 Years of Progress',
    category: 'Poster',
    filterCategory: 'Poster',
    image: meraBharatMahan,
    description: 'Monochromatic cultural map poster featuring the Indian Tricolor Flag surrounded by 74 years of progress sketches.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Patriotic Campaign', 'Illustration'],
  },
  {
    id: 'every-crowd-carries-countless-opportunities',
    title: 'Every Crowd Carries Countless Opportunities',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: everyCrowdCarriesOpportunities,
    description: 'Minimalist editorial poster featuring a queue of people walking up an elevated staircase into endless possibilities.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Minimalist Design', 'Typography'],
  },
  {
    id: 'lies-i-tell-myself-biryani',
    title: 'Lies I Tell Myself — Biryani & Pop Culture',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: liesITellMyself,
    description: 'Witty social media poster comparing everyday binge habits (Netflix, Instagram) with Biryani craving.',
    technologies: ['Photoshop', 'Social Media Design', 'Food Photography', 'Ad Creative'],
  },
  {
    id: 'when-design-approves-first-attempt',
    title: 'When Design Approves In First Attempt! — Meme Poster',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: whenDesignApprovesFirstAttempt,
    description: 'Humorous designer meme poster celebrating first-attempt client design approvals.',
    technologies: ['Photoshop', 'Meme Marketing', 'Social Media Design', 'Typography'],
  },
  {
    id: 'weekend-vibes-designer-office-changes',
    title: 'Weekend Vibes — Designer Office Tug of War',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: weekendVibesDesignerOffice,
    description: 'Witty social media agency poster showing a designer leaving office at 7 pm pulled back by last moment changes.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Agency Culture', 'Ad Creative'],
  },
  {
    id: 'we-dont-talk-we-create',
    title: 'We Don\'t Talk We Create — Agency Manifesto',
    category: 'Branding',
    filterCategory: 'Branding',
    image: weDontTalkWeCreate,
    description: 'Sleek monochrome editorial poster featuring 3D white face sculpture with glasses over a social media platform bar.',
    technologies: ['Photoshop', '3D Sculpting', 'Brand Strategy', 'Typography'],
  },
  {
    id: 'happy-teachers-day-blackboard-tribute',
    title: 'Happy Teacher\'s Day — Classroom Blackboard Tribute',
    category: 'Poster',
    filterCategory: 'Poster',
    image: happyTeachersDay,
    description: 'Heartwarming Teacher\'s Day tribute poster featuring a student drawing Dr. Radhakrishnan on a classroom blackboard.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Chalk Illustration', 'Typography'],
  },
  {
    id: 'creativity-needs-space-production-planning',
    title: 'Creativity Needs Space / Production Needs Planning',
    category: 'Poster',
    filterCategory: 'Poster',
    image: creativityNeedsSpaceProductionPlanning,
    description: 'Monochromatic green studio stage poster featuring green furniture and bold wall typography.',
    technologies: ['Photoshop', '3D Room Rendering', 'Typography', 'Architectural Design'],
  },
  {
    id: 'interview-tomorrow-be-ready',
    title: 'Interview Tomorrow. Be Ready. — Alert Poster',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: interviewTomorrowBeReady,
    description: 'Striking red event reminder poster featuring a 3D yellow notification bell with notification badge on calendar backdrop.',
    technologies: ['Photoshop', '3D Icon Design', 'Social Media Design', 'Typography'],
  },
  {
    id: 'july-is-here-chapter-07',
    title: 'July Is Here — Chapter 07 New Goals Poster',
    category: 'Branding',
    filterCategory: 'Branding',
    image: julyIsHereChapter07,
    description: 'Elegant monthly milestone poster featuring an open burgundy editorial book and incoming call UI badge.',
    technologies: ['Photoshop', 'Editorial Layout', '3D Mockup', 'Brand Identity'],
  },
  {
    id: 'graphic-design-trends-you-should-try',
    title: 'Graphic Design Trends You Should Try — App Bracelet',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: graphicDesignTrendsYouShouldTry,
    description: 'High-concept creative poster featuring a hand wearing a floating metallic bracelet of 3D glass app icons.',
    technologies: ['Photoshop', '3D Token Rendering', 'Photo Manipulation', 'Typography'],
  },
  {
    id: 'tell-us-your-story-we-will-design-it',
    title: 'Tell Us Your Story — We Will Design It',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: tellUsYourStoryWeWillDesignIt,
    description: 'Corporate agency ad poster featuring a top-down view of a business meeting exchanging chat bubbles.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Social Media Design', 'Corporate Branding'],
  },
  {
    id: 'happy-childrens-day-dreams-soar',
    title: 'Happy Children\'s Day — Let Your Dreams Soar',
    category: 'Poster',
    filterCategory: 'Poster',
    image: happyChildrensDay,
    description: 'Vibrant Children\'s Day poster featuring a superhero child with yellow mask, red cape, and launching 3D rocket.',
    technologies: ['Photoshop', '3D Composition', 'Character Retouching', 'Poster Art'],
  },
  {
    id: 'movie-night-cinema-screen-poster',
    title: 'Movie Night — Cinema Theater Screen Poster',
    category: 'Poster',
    filterCategory: 'Poster',
    image: movieNightCinemaScreen,
    description: 'Atmospheric theater poster featuring red velvet seats and a giant glowing movie screen displaying typography.',
    technologies: ['Photoshop', 'Typography', 'Lighting FX', 'Poster Art'],
  },
  {
    id: 'we-are-hiring-graphics-designer-green-chairs',
    title: 'We Are Hiring Graphics Designer — Studio Armchairs',
    category: 'Poster',
    filterCategory: 'Poster',
    image: weAreHiringGraphicsDesigner,
    description: 'Luxury recruitment poster featuring green velvet armchairs under a spotlight with floating app icons.',
    technologies: ['Photoshop', '3D Room Design', 'Recruitment Campaign', 'Typography'],
  },
  {
    id: 'youtube-dimensions-cheat-sheet-guide',
    title: 'YouTube Dimensions Cheat Sheet — Creator Guide',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: youtubeDimensionsCheatSheet,
    description: 'Technical design cheat sheet displaying precise dimension blueprints for YouTube channel assets.',
    technologies: ['Photoshop', 'Infographic Design', 'UI Blueprint', 'Technical Guide'],
  },
  {
    id: 'instagram-dimensions-cheat-sheet-guide',
    title: 'Instagram Dimensions Cheat Sheet — Creator Guide',
    category: 'Graphic',
    filterCategory: 'Graphic',
    image: instagramDimensionsCheatSheet,
    description: 'Infographic cheat sheet displaying exact pixel dimension specifications for Instagram media formats.',
    technologies: ['Photoshop', 'Infographic Design', 'UI Blueprint', 'Social Media Guide'],
  },
];

const CATEGORIES = ['All', 'Graphic', 'Poster', 'Branding', 'Social Media'];

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [page, setPage] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxDirection, setLightboxDirection] = useState<number>(1); // 1 = next (page turns left), -1 = prev (page turns right)

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

  // Keyboard navigation for image lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setLightboxDirection(-1);
        setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxDirection(1);
        setLightboxIndex(prev => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredProjects.length]);

  // Auto-scroll Lightbox images at smooth medium speed (every 3.8 seconds)
  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const timer = setInterval(() => {
      setLightboxDirection(1);
      setLightboxIndex(prev => (prev !== null ? (prev + 1) % filteredProjects.length : 0));
    }, 3800);
    return () => clearInterval(timer);
  }, [lightboxIndex, filteredProjects.length]);

  // Ultra-Fast & Sleek Gallery Slide Variants — No Black Screen Gap
  const galleryVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.28,
        ease: [0.25, 1, 0.5, 1], // fast, crisp, fluid
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  const currentLightboxProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <section
      id="projects"
      className="relative h-screen flex flex-col px-4 sm:px-8 pt-6 pb-4 bg-[#090909] text-white overflow-hidden border-t border-white/5 font-sans"
    >
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto flex flex-col flex-1 items-center min-h-0">
        
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-3 shrink-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] uppercase tracking-wider mb-1.5 shadow-md">
            <Sparkles className="w-3 h-3" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-heading font-bold text-xl sm:text-3xl text-white tracking-tight">
            MY <span className="text-[#88D900]">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Category Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-3 text-sm sm:text-base font-medium shrink-0"
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
                className="relative py-1 px-1 transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                <span className={isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}>
                  {cat}
                </span>
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

        {/* Grid Container — fills remaining height perfectly */}
        <div className="relative w-full max-w-5xl px-6 sm:px-14 flex-1 min-h-0">

          {/* Left Arrow */}
          <button
            onClick={handlePrevPage}
            aria-label="Previous Projects"
            className="absolute left-0 sm:-left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#88D900] hover:bg-[#9BE01A] text-black font-extrabold flex items-center justify-center shadow-[0_0_15px_rgba(136,217,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronsLeft className="w-5 h-5 stroke-[3]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextPage}
            aria-label="Next Projects"
            className="absolute right-0 sm:-right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#88D900] hover:bg-[#9BE01A] text-black font-extrabold flex items-center justify-center shadow-[0_0_15px_rgba(136,217,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <ChevronsRight className="w-5 h-5 stroke-[3]" />
          </button>

          {/* 3×2 Grid — fills full remaining height, no scroll */}
          <motion.div layout className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 h-full">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((item) => {
                const itemIndexInFiltered = filteredProjects.findIndex(p => p.id === item.id);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      setLightboxDirection(1);
                      setLightboxIndex(itemIndexInFiltered !== -1 ? itemIndexInFiltered : 0);
                    }}
                    className="group relative rounded-xl overflow-hidden bg-[#0a0a0a] shadow-lg border border-white/5 cursor-pointer hover:shadow-[0_0_30px_rgba(136,217,0,0.2)] hover:border-[#88D900]/60 transition-all duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      style={{ imageRendering: 'high-quality' }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2 sm:p-3">
                      <div className="flex justify-end">
                        <span
                          className="w-8 h-8 rounded-full bg-[#88D900] text-black flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform"
                          title="Open Full Image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <span className="text-[#88D900] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-0.5 block">{item.category}</span>
                        <h3 className="text-white text-[10px] sm:text-xs font-bold line-clamp-2 flex items-start justify-between gap-1">
                          <span>{item.title}</span>
                          <ExternalLink className="w-3 h-3 shrink-0 mt-0.5 text-[#88D900]" />
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Page indicator dots */}
        <div className="flex items-center gap-2 mt-3 shrink-0">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === currentPage
                  ? 'w-5 h-2 bg-[#88D900] shadow-[0_0_8px_rgba(136,217,0,0.6)]'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onImageClick={(img) => {
            const idx = filteredProjects.findIndex(p => p.image === img);
            setLightboxDirection(1);
            setLightboxIndex(idx !== -1 ? idx : 0);
          }}
        />
      )}

      {/* Fullscreen HD Lightbox with High Resolution View & Clean Dark Backdrop */}
      <AnimatePresence>
        {currentLightboxProject && lightboxIndex !== null && (
          <motion.div
            key="lightbox-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-5 select-none overflow-hidden"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#151515] border border-white/20 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
              title="Close (Esc)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxDirection(-1);
                setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredProjects.length - 1));
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#151515]/90 hover:bg-[#88D900] text-white hover:text-black border border-white/20 hover:border-[#88D900] flex items-center justify-center backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Previous Image (←)"
            >
              <ChevronsLeft className="w-6 h-6 stroke-[3]" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxDirection(1);
                setLightboxIndex(prev => (prev !== null && prev < filteredProjects.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#151515]/90 hover:bg-[#88D900] text-white hover:text-black border border-white/20 hover:border-[#88D900] flex items-center justify-center backdrop-blur-md shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Next Image (→)"
            >
              <ChevronsRight className="w-6 h-6 stroke-[3]" />
            </button>

            {/* Instagram-Style Continuous Horizontal Track Carousel */}
            <div
              className="relative max-w-5xl w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sliding Filmstrip Track */}
              <div className="w-full flex-1 flex items-center overflow-hidden relative">
                <motion.div
                  className="flex w-full h-full items-center"
                  animate={{ x: `-${lightboxIndex * 100}%` }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 30,
                    mass: 0.8,
                  }}
                >
                  {filteredProjects.map((proj, idx) => (
                    <div
                      key={proj.id || idx}
                      className="w-full h-full flex-shrink-0 flex items-center justify-center px-2 sm:px-6"
                    >
                      <div className="relative max-w-full max-h-[78vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] bg-[#050505] border border-white/10">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-xl shadow-2xl select-none"
                          style={{
                            imageRendering: 'auto',
                            WebkitBackfaceVisibility: 'hidden',
                            transform: 'translateZ(0)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Title Bar */}
              <div className="mt-3 max-w-xl w-full px-5 py-3 rounded-2xl bg-[#151515]/95 border border-white/10 backdrop-blur-md flex items-center justify-center text-center shadow-2xl z-20 shrink-0">
                <h4 className="text-white text-xs sm:text-sm font-bold truncate max-w-full">
                  {currentLightboxProject.title}
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
