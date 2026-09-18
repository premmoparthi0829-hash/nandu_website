import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsLeft, ChevronsRight, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Project } from '../types/app';
import { useData } from '../context/DataContext';

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
import surprisedByResults from '../assets/surprised_by_the_results.jpg';
import takeWhatYouNeed from '../assets/take_what_you_need.jpg';
import featuredLearnCreateGrow from '../assets/featured_learn_create_grow.jpg';
import featuredWebsitesPerform from '../assets/featured_websites_perform.jpg';
import featuredPostWithoutStrategy from '../assets/featured_post_without_strategy.jpg';
import featuredLifeInAMetro from '../assets/featured_life_in_a_metro.jpg';
import featuredOrderAt4pmDipBy411pm from '../assets/featured_order_at_4pm_dip_by_411pm.jpg';
import featuredFirstSignGoodCooking from '../assets/featured_first_sign_good_cooking.jpg';
import featuredTheParadiseJadalZamana from '../assets/featured_the_paradise_jadal_zamana.jpg';
import featuredIndianThaliFlavours from '../assets/featured_indian_thali_flavours.jpg';
import featuredSpecialOfferThali25Off from '../assets/featured_special_offer_thali_25_off.jpg';
import featuredThisOrThatChickenPaneer from '../assets/featured_this_or_that_chicken_paneer.jpg';
import featuredUrbanGrillCelebrateEveryFlavor from '../assets/featured_urban_grill_celebrate_every_flavor.jpg';
import featuredThisWeekSpecialMomosPasta from '../assets/featured_this_week_special_momos_pasta.jpg';
import featuredGoodFoodGoodVibes from '../assets/featured_good_food_good_vibes.jpg';
import featuredTangySpicyPaniPuri from '../assets/featured_tangy_spicy_pani_puri.jpg';
import featuredSproutedAmaranthMix from '../assets/featured_sprouted_amaranth_mix.jpg';
import featuredBurgerDangerousTaste from '../assets/featured_burger_dangerous_taste.jpg';
import featuredBurgerLandSoonParachute from '../assets/featured_burger_land_soon_parachute.jpg';
import featuredChaiKingsAroma from '../assets/featured_chai_kings_aroma.jpg';
import featuredYummyMangoMilk from '../assets/featured_yummy_mango_milk.jpg';
import featuredRealEstateHeyYouProperty from '../assets/featured_real_estate_hey_you_property.jpg';
import featuredBiryaniBreakTheGlass from '../assets/featured_biryani_break_the_glass.jpg';
import featuredBalmNCalmSkincare from '../assets/featured_balm_n_calm_skincare.jpg';
import featuredAndhraPradeshCultureMap from '../assets/featured_andhra_pradesh_culture_map.jpg';
import featuredDubaiFamilyVisitVisa from '../assets/featured_dubai_family_visit_visa.jpg';
import featuredAntheKitchenBiryaniChat from '../assets/featured_anthe_kitchen_biryani_chat.jpg';
import featuredWokTossedNoodles from '../assets/featured_wok_tossed_noodles.jpg';
import featuredRishiSagarA2CowGhee from '../assets/featured_rishi_sagar_a2_cow_ghee.jpg';
import featuredPassPassPulseKhatta from '../assets/featured_pass_pass_pulse_khatta.jpg';
import featuredPickleManiaSweetMango from '../assets/featured_pickle_mania_sweet_mango.jpg';
import featuredYumYumSnackitMilletMix from '../assets/featured_yumyum_snackit_millet_mix.jpg';
import featuredBaliVacationTourPackage from '../assets/featured_bali_vacation_tour_package.jpg';
import featuredSilkSareeRoyalCrown from '../assets/featured_silk_saree_royal_crown.jpg';
import featuredSpicyTimeBbqChickenTikka from '../assets/featured_spicy_time_bbq_chicken_tikka.jpg';
import featuredSpicyTimeBiryaniSpecial from '../assets/featured_spicy_time_biryani_special.jpg';

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
    id: 'yumyum-snackit-millet-mix-box-unboxing-ad',
    title: 'YumYum Snackit 8-in-1 — Millet Mix Box Unboxing Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredYumYumSnackitMilletMix,
    description: 'POV box unboxing creative showcasing 18.8g high-protein millet snack pouches in Hot & Sweet Chilli, Indian Masala, and Hing Jeera flavors.',
    technologies: ['Photoshop', 'Packaging Design', 'Social Media Campaign', 'Food Styling'],
  },
  {
    id: 'bali-vacation-tour-package-poster',
    title: 'BALI 04 Nights 05 Days — Travel Tour Package Poster',
    category: 'Poster',
    filterCategory: 'Graphic',
    image: featuredBaliVacationTourPackage,
    description: 'Breathtaking ocean island cliff travel advertisement showcasing Bali tour package inclusions with couple POV photo compositing.',
    technologies: ['Photoshop', 'Travel Marketing', 'Poster Design', 'Photo Compositing'],
  },
  {
    id: 'silk-saree-light-as-a-whisper-editorial',
    title: 'Light as a Whisper, Royal as a Crown — Luxury Silk Saree Ad',
    category: 'Branding',
    filterCategory: 'Branding',
    image: featuredSilkSareeRoyalCrown,
    description: 'High-fashion editorial print ad displaying deep maroon silk saree drapes with gold zari embroidery and elegant typography.',
    technologies: ['Photoshop', 'Fashion Editorial', 'Brand Copywriting', 'Luxury Advertising'],
  },
  {
    id: 'spicy-time-bbq-chicken-tikka-butter-chicken-ad',
    title: 'Spicy Time — BBQ Chicken Tikka Leg & Butter Chicken Ad',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredSpicyTimeBbqChickenTikka,
    description: 'Rich red culinary menu poster highlighting oven-roasted smoky BBQ chicken tikka legs and creamy butter chicken with butter naan.',
    technologies: ['Photoshop', 'Food Photography', 'Menu Design', 'Ad Creative'],
  },
  {
    id: 'spicy-time-lamb-chicken-biryani-ad',
    title: 'Spicy Time — Lamb Biryani & Chicken Biryani Menu Ad',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredSpicyTimeBiryaniSpecial,
    description: 'Dynamic red curved food poster showcasing rich aromatic lamb biryani and traditional chicken biryani bowls with dietary badges.',
    technologies: ['Photoshop', 'Food Styling', 'Social Media Marketing', 'Menu Design'],
  },
  {
    id: 'anthe-kitchen-biryani-day-chat-ad',
    title: 'Anthē! Kitchen — Team Lunch Biryani Day Chat Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredAntheKitchenBiryaniChat,
    description: 'Relatable WhatsApp group chat creative featuring steaming brass pot biryani and office lunch banter for Anthē! Kitchen.',
    technologies: ['Photoshop', 'Food Styling', 'Social Media Campaign', 'Creative Copywriting'],
  },
  {
    id: 'wok-tossed-noodles-fresh-poster',
    title: 'NOODLES — Wok-Tossed Goodness Served Hot & Fresh',
    category: 'Poster',
    filterCategory: 'Graphic',
    image: featuredWokTossedNoodles,
    description: 'Dynamic dark food poster featuring noodles twirled on a fork with bold yellow typography and hand-drawn chalk doodles.',
    technologies: ['Photoshop', 'Food Photography', 'Typography', 'Chalk Art'],
  },
  {
    id: 'rishi-sagar-a2-cow-desi-ghee-ad',
    title: 'Rishi Sagar — Premium A2 Cow Desi Ghee Campaign',
    category: 'Branding',
    filterCategory: 'Branding',
    image: featuredRishiSagarA2CowGhee,
    description: 'Warm kitchen lifestyle product creative displaying A2 cow ghee jar with rotis and 5 health benefit infographics.',
    technologies: ['Photoshop', 'Packaging Design', 'Infographic Design', 'Branding'],
  },
  {
    id: 'pass-pass-pulse-khatta-candy-ad',
    title: 'Pass Pass Pulse — KHAATTAAAAH! Mango Candy Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredPassPassPulseKhatta,
    description: 'High-energy top-down perspective ad featuring green tongue graphic, sunburst rays, and iconic Pass Pass Pulse candy.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Social Media Ad', 'Art Direction'],
  },
  {
    id: 'pickle-mania-sweet-mango-pickle-ad',
    title: 'Pikkle Mania — Sweet Mango Pickle Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredPickleManiaSweetMango,
    description: 'Vibrant pop-art food advertisement featuring an Indian woman with pink sunglasses licking delicious mango pickle off her finger.',
    technologies: ['Photoshop', 'Pop Art Design', 'Food Advertising', 'Social Media Marketing'],
  },
  {
    id: 'real-estate-hey-you-property-ad',
    title: 'Hey, You! Looking for the Right Property? — Real Estate Campaign',
    category: 'Poster',
    filterCategory: 'Graphic',
    image: featuredRealEstateHeyYouProperty,
    description: 'Clean modern real estate advertisement showcasing a 3D architectural villa layout, 3D hand gesture, and service icon suite.',
    technologies: ['Photoshop', '3D Architecture Styling', 'Poster Design', 'Real Estate Branding'],
  },
  {
    id: 'biryani-cravings-break-the-glass-ad',
    title: 'In Case of Biryani Cravings, Break the Glass — Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredBiryaniBreakTheGlass,
    description: 'Witty emergency box advertising creative featuring a steaming bucket of chicken biryani inside a red glass breaker cabinet.',
    technologies: ['Photoshop', '3D Composition', 'Food Photography', 'Ad Campaign'],
  },
  {
    id: 'balm-n-calm-skincare-product-ad',
    title: "Balm n' Calm — Eco Skincare Product Shoot & Campaign",
    category: 'Branding',
    filterCategory: 'Branding',
    image: featuredBalmNCalmSkincare,
    description: 'Trendy perspective photoshoot featuring paper cylinder skincare products and model on a blue checkered floor.',
    technologies: ['Photoshop', 'Product Photography', 'Brand Identity', 'Art Direction'],
  },
  {
    id: 'andhra-pradesh-satyameva-jayate-poster',
    title: 'Andhra Pradesh — Cultural Heritage Map Poster',
    category: 'Poster',
    filterCategory: 'Poster',
    image: featuredAndhraPradeshCultureMap,
    description: 'Vibrant state cultural pride creative featuring Kuchipudi dancer, Tirupati temple, Vizag ship, and authentic Andhra thali map silhouette.',
    technologies: ['Photoshop', 'Digital Photo Collage', 'Cultural Poster', 'Typography'],
  },
  {
    id: 'dubai-family-visit-visa-ad',
    title: 'Dubai Family Visit Visa — Spend Quality Time Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredDubaiFamilyVisitVisa,
    description: 'Bright travel promotion ad featuring a happy multi-generational family walking near Burj Al Arab with 1 & 2 month visa badges.',
    technologies: ['Photoshop', 'Travel Marketing', 'Social Media Ad', 'Photo Compositing'],
  },
  {
    id: 'sprouted-amaranth-mix-toddler-ad',
    title: 'Sprouted Amaranth Mix — Picky Eater Toddler Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredSproutedAmaranthMix,
    description: 'Warm lifestyle promotional creative featuring a smiling toddler enjoying sprouted amaranth porridge with five-star parent review quote.',
    technologies: ['Photoshop', 'Food Photography', 'Social Media Ad', 'Brand Copywriting'],
  },
  {
    id: 'burger-accused-dangerous-taste-ad',
    title: 'Accused of Having a Dangerous Taste — Burger Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredBurgerDangerousTaste,
    description: 'High-impact red background mugshot concept featuring a 12-inch double cheeseburger holding a crime booking sign.',
    technologies: ['Photoshop', 'Creative Concept', '3D Food Styling', 'Ad Campaign'],
  },
  {
    id: 'burger-we-will-land-soon-parachute-ad',
    title: "We'll Land Soon — Skydiving Burger Delivery Campaign",
    category: 'Poster',
    filterCategory: 'Graphic',
    image: featuredBurgerLandSoonParachute,
    description: 'Vibrant electric blue skydiving food delivery ad featuring a giant parachuting cheeseburger and rider action shot.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Ad Creative', 'Art Direction'],
  },
  {
    id: 'chai-kings-aroma-that-pulls-you-in-ad',
    title: 'Chai Kings — Aroma That Pulls You In Campaign',
    category: 'Poster',
    filterCategory: 'Branding',
    image: featuredChaiKingsAroma,
    description: 'Cinematic close-up food poster featuring steaming cutting chai glass and rich emerald green lighting.',
    technologies: ['Photoshop', 'Food Photography', 'Poster Design', 'Branding'],
  },
  {
    id: 'yummy-mango-milk-too-good-to-wait-ad',
    title: 'Too Good to Wait — Yummy Mango Milk Bottle Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredYummyMangoMilk,
    description: 'Playful product advertisement featuring a toddler reaching up to a mango milk bottle against a minimalist sky-blue background.',
    technologies: ['Photoshop', 'Packaging Design', '3D Rendering', 'Social Media Campaign'],
  },
  {
    id: 'urban-grill-celebrate-every-flavor-ad',
    title: 'Urban Grill — Celebrate Every Flavor Scroll Banner',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredUrbanGrillCelebrateEveryFlavor,
    description: 'Dramatic red scroll poster design showcasing clay pot biryani, floating pizza slices, and pastries for Urban Grill catering.',
    technologies: ['Photoshop', 'Food Styling', 'Social Media Ad', '3D Layout'],
  },
  {
    id: 'this-week-special-momos-pasta-ad',
    title: 'This Week Special — 30% Off Momos & 25% Off Pasta',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredThisWeekSpecialMomosPasta,
    description: 'Bright yellow and cyan dual-color promotional ad highlighting weekly discount offers on Momos and Alfredo Pasta.',
    technologies: ['Photoshop', 'Promotional Design', 'Social Media Campaign', 'Food Photography'],
  },
  {
    id: 'good-food-good-vibes-bibimbap-ad',
    title: 'Good Food Good Vibes — Craving Something Tasty?',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredGoodFoodGoodVibes,
    description: 'Vibrant orange and green culinary poster featuring a signature bibimbap bowl with fried egg, floating speech bubbles, and tomatoes.',
    technologies: ['Photoshop', 'Food Photography', 'Ad Creative', 'Social Media Marketing'],
  },
  {
    id: 'tangy-spicy-pani-puri-poster',
    title: 'Tangy. Spicy. Irresistible. — Pani Puri Poster',
    category: 'Poster',
    filterCategory: 'Branding',
    image: featuredTangySpicyPaniPuri,
    description: 'Rich emerald green textured background poster featuring traditional Indian Pani Puri platter with bold backdrop typography.',
    technologies: ['Photoshop', 'Food Poster', 'Typography', 'Cultural Branding'],
  },
  {
    id: 'first-sign-good-cooking-ad',
    title: 'The First Sign of Good Cooking — Culinary Poster',
    category: 'Poster',
    filterCategory: 'Branding',
    image: featuredFirstSignGoodCooking,
    description: 'Rich red background food poster showcasing traditional dal makhani and fresh naan layout.',
    technologies: ['Photoshop', 'Food Styling', 'Advertising Poster', 'Branding'],
  },
  {
    id: 'the-paradise-jadal-zamana-poster',
    title: 'The Paradise — Jadal Zamana Movie & Character Poster',
    category: 'Poster',
    filterCategory: 'Branding',
    image: featuredTheParadiseJadalZamana,
    description: 'Dramatic high-contrast cinema release poster featuring character portrait, dog, and dark raven typography.',
    technologies: ['Photoshop', 'Movie Poster', 'Character Design', 'Typography'],
  },
  {
    id: 'indian-thali-flavours-poster',
    title: 'Indian Thali — One Plate Many Flavours Poster',
    category: 'Poster',
    filterCategory: 'Branding',
    image: featuredIndianThaliFlavours,
    description: 'Vibrant yellow ornate border culinary poster showcasing traditional Indian thali platter and spices.',
    technologies: ['Photoshop', 'Food Poster', 'Cultural Branding', 'Illustration'],
  },
  {
    id: 'special-offer-thali-25-off-ad',
    title: 'Special Offer Thali — 25% Off Restaurant Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredSpecialOfferThali25Off,
    description: 'Deep red paisley background promotional thali discount banner with high-impact offer graphics.',
    technologies: ['Photoshop', 'Promotional Design', 'Social Media Ad', 'Campaign'],
  },
  {
    id: 'this-or-that-chicken-paneer-ad',
    title: 'This Or That — Chicken Tikka Masala vs Paneer Kadai',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredThisOrThatChickenPaneer,
    description: 'Interactive culinary choice campaign poster featuring floating ingredients and rich food photography.',
    technologies: ['Photoshop', 'Social Media Campaign', 'Food Photography', 'Advertising'],
  },
  {
    id: 'learn-create-grow-editorial',
    title: 'Learn Create Grow — Invest in Skills That Pay You Back for Life',
    category: 'Branding',
    filterCategory: 'Branding',
    image: featuredLearnCreateGrow,
    description: 'Vibrant green editorial magazine mockup layout emphasizing creative skill investment, UI tool design, and workspace inspiration.',
    technologies: ['Photoshop', 'Editorial Design', 'Brand Strategy', 'Visual Identity'],
  },
  {
    id: 'websites-that-perform-ui-showcase',
    title: 'Websites That Don\'t Just Exist — They Perform',
    category: 'UI/UX',
    filterCategory: 'UI/UX',
    image: featuredWebsitesPerform,
    description: '3D laptop interface showcase featuring an unrolling responsive web UI paper roll with high-conversion landing page layouts.',
    technologies: ['UI/UX Design', '3D Mockup', 'Responsive Design', 'Web Architecture'],
  },
  {
    id: 'post-without-a-strategy-ad',
    title: 'This Happens When You Post Without a Strategy',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredPostWithoutStrategy,
    description: 'High-concept social media campaign poster featuring a melting ice cream scoop missing a waffle cone to illustrate un-strategized content marketing.',
    technologies: ['Creative Strategy', 'Social Media', 'Photo Manipulation', 'Art Direction'],
  },
  {
    id: 'life-in-a-metro-floor-graphics',
    title: 'Life in a METRO — Environmental Typography Campaign',
    category: 'Poster',
    filterCategory: 'Poster',
    image: featuredLifeInAMetro,
    description: 'High-impact 3D perspective floor typography graphics in a modern metro train interior illustrating urban commuting and brand visibility.',
    technologies: ['Environmental Graphic Design', '3D Perspective', 'Typography', 'Outdoor Media'],
  },
  {
    id: 'order-at-4pm-dip-by-411pm-biscuit-ad',
    title: 'Order at 4PM, Dip by 4:11PM — Tea Time Biscuit Campaign',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: featuredOrderAt4pmDipBy411pm,
    description: 'High-angle creative food ad featuring a tea clock cup, biscuit dipping action shot, and rapid delivery promise for tea-time snacks.',
    technologies: ['Food Photography Art Direction', 'Creative Copywriting', 'Advertising Poster', 'Photoshop'],
  },
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
    id: 'sahib-barbeque-biryani-haleem',
    title: 'Sahib\'s Barbeque — Biryani & Haleem Chat Poster',
    category: 'Social Media',
    filterCategory: 'Social Media',
    image: sahibBarbequeBiryani,
    description: 'Witty social media campaign poster featuring funny chat text bubbles over authentic Biryani & Haleem.',
    technologies: ['Photoshop', 'Food Photography', 'Social Media Design', 'Advertising'],
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
    technologies: ['Photoshop', 'Infographic Design', 'UI Blueprint', 'Social Media Guide'],
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxDirection, setLightboxDirection] = useState<number>(1);

  const { projects: dynamicProjects } = useData();

  // Map of default project IDs to their freshly imported asset images
  const defaultImageMap: Record<string, string> = React.useMemo(() => {
    const map: Record<string, string> = {};
    ALL_PROJECTS.forEach(p => {
      if (p.id && p.image) map[p.id] = p.image;
    });
    return map;
  }, []);

  const EXCLUDED_IDS = [
    'happy-labor-day-may-1st',
    'we-make-your-brand-stronger',
    'giving-your-brand-an-extra-edge',
    'designers-are-not-design-machine',
    'dominate-attention',
    'designing-is-not-making-2-minute-noodles',
    'ideas-from-heart-brain-neural-art',
    'last-voyage-to-glory',
    'tropical-fruit-juice-trophy',
    'july-is-here-chapter-07',
    'graphic-design-trends-you-should-try'
  ];

  // Combine dynamic projects from Admin Panel + default portfolio assets
  const combinedProjects: ProjectItem[] = [
    ...dynamicProjects.map((dp) => {
      const fallback = defaultImageMap[dp.id];
      const validImage = (dp.heroImage && (dp.heroImage.startsWith('data:') || dp.heroImage.startsWith('blob:') || dp.heroImage.startsWith('http')))
        ? dp.heroImage
        : (fallback || dp.heroImage);

      return {
        id: dp.id,
        title: dp.title,
        category: dp.category,
        filterCategory: dp.category === 'Branding' ? 'Branding' : dp.category === 'Packaging' ? 'Packaging' : dp.category === 'Print' ? 'Print' : 'Graphic',
        image: validImage,
        description: dp.shortDescription,
        technologies: dp.technologies,
      };
    }),
    ...ALL_PROJECTS.filter((ap) => !dynamicProjects.some((dp) => dp.id === ap.id)),
  ].filter((p) => !EXCLUDED_IDS.includes(p.id));

  // Filter projects by selected category
  const filteredProjects = activeCategory === 'All'
    ? combinedProjects
    : combinedProjects.filter(p => p.filterCategory === activeCategory || p.category === activeCategory);

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

  const currentLightboxProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  return (
    <section id="campaign-designs" className="w-full relative py-4">
      {/* Header Typography with Exactly One Space Gap & Creative Script */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 flex-wrap">
        <div className="flex items-baseline flex-wrap">
          <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-sans select-none leading-none">
            Campaign
          </span>
          <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white select-none leading-none">&nbsp;</span>
          <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#88D900] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
            Designs
          </span>
        </div>

        {/* Sub-category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#88D900] text-black shadow-[0_0_12px_rgba(136,217,0,0.4)]'
                  : 'bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Campaign Design Cards — Matching Invite Designs style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 items-start">
        {filteredProjects.map((item, idx) => {
          const itemIndexInFiltered = filteredProjects.findIndex(p => p.id === item.id);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 10) * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => {
                setLightboxDirection(1);
                setLightboxIndex(itemIndexInFiltered !== -1 ? itemIndexInFiltered : 0);
              }}
              className="group cursor-pointer flex flex-col items-center w-full"
            >
              {/* Pure Image Card with rounded-xl, shadow-xl, and smooth hover glow */}
              <div className="w-full relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 group-hover:shadow-[0_15px_35px_rgba(136,217,0,0.25)] border border-white/10 group-hover:border-[#88D900]/40">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.03]"
                  onError={(e) => {
                    const fallback = defaultImageMap[item.id];
                    if (fallback && e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          );
        })}
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

            {/* Continuous Horizontal Track Lightbox Track */}
            <div
              className="relative max-w-5xl w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sliding Track */}
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
                          loading="lazy"
                          decoding="async"
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

export default FeaturedProjects;
