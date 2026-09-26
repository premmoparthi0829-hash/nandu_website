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
    id: 'wishing-1-new-year-2026',
    title: 'New Year 2026 — New Experiences Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNewYear2026,
    description: 'Vibrant blue festive New Year 2026 celebration poster featuring bold typography and wine glass cheer illustration.',
    technologies: ['Photoshop', 'Festive Design', 'Vector Illustration', 'Typography'],
  },
  {
    id: 'wishing-2-national-youth-day',
    title: 'National Youth Day — Swami Vivekananda Tribute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalYouthDay,
    description: 'Patriotic National Youth Day tribute poster featuring Swami Vivekananda portrait, India map outline, and inspirational quote on deep red backdrop.',
    technologies: ['Photoshop', 'Patriotic Design', 'Poster Art', 'Typography'],
  },
  {
    id: 'wishing-3-indian-army-day',
    title: 'Indian Army Day — Guardians of Our Nation Tribute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingIndianArmyDay,
    description: 'Heroic Indian Army Day tribute poster featuring armed forces salute, fighter jet, Indian flag, and India Gate monument in golden light.',
    technologies: ['Photoshop', 'Military Art', 'Photo Manipulation', 'Patriotic Banner'],
  },
  {
    id: 'wishing-4-national-startup-day',
    title: 'National Startup Day — Global Innovation Index Campaign Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalStartupDay,
    description: 'Creative National Startup Day celebratory poster featuring 3D lightbulb rocket launch and business analytics doodles on peach backdrop.',
    technologies: ['Photoshop', '3D Illustration', 'Infographic Design', 'Startup Campaign'],
  },
  {
    id: 'wishing-5-national-voters-day',
    title: "National Voters' Day — Democracy Ballot Power Poster",
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalVotersDay,
    description: "Powerful National Voters' Day poster showcasing tricolor inked voter finger overlaying India map outline and crowd illustration.",
    technologies: ['Photoshop', 'Civic Design', 'Photo Compositing', 'Typography'],
  },
  {
    id: 'wishing-6-republic-day',
    title: 'Happy Republic Day — January 26 Constitution Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingRepublicDay,
    description: 'Patriotic Republic Day poster featuring hand-sketched Red Fort architectural illustration, waving Indian Tricolor flag, and constitutional history inscription.',
    technologies: ['Photoshop', 'Architectural Sketch', 'Patriotic Poster', 'Typography'],
  },
  {
    id: 'wishing-7-world-cancer-day',
    title: 'World Cancer Day — February 4 Hope & Care Ribbon Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldCancerDay,
    description: 'Inspiring World Cancer Day awareness poster featuring blue ribbon held in supportive hands illustration against cloud sky backdrop.',
    technologies: ['Photoshop', 'Awareness Campaign', 'Vector Illustration', 'Healthcare Graphic'],
  },
  {
    id: 'wishing-8-valentines-day',
    title: "Happy Valentine's Day — Delivering Happiness With Love Poster",
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingValentinesDay,
    description: "Breathtaking Valentine's Day promotional poster featuring airplane flying above fluffy heart-shaped cloud formation in deep blue sky.",
    technologies: ['Photoshop', 'Photo Manipulation', '3D Sky Composition', 'Romantic Banner'],
  },
  {
    id: 'wishing-9-national-science-day',
    title: 'National Science Day — Sir C.V. Raman Nobel Prize Quote Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalScienceDay,
    description: 'Educational National Science Day tribute poster featuring black & white Sir C.V. Raman portrait, handwritten signature, and mathematical physics background formulas.',
    technologies: ['Photoshop', 'Editorial Layout', 'Science Poster', 'Typography'],
  },
  {
    id: 'wishing-10-world-wildlife-day',
    title: "World Wildlife Day — Embrace Nature's Diversity Poster",
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldWildlifeDay,
    description: "Cinematic World Wildlife Day poster featuring majestic Bengal tiger and African savanna elephant in high-contrast typography landscape composition.",
    technologies: ['Photoshop', 'Wildlife Photography', 'Environmental Banner', '3D Text Composite'],
  },
  {
    id: 'wishing-11-national-safety-month',
    title: 'National Safety Month — Safety is Not Optional Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalSafetyMonth,
    description: 'Corporate safety awareness poster for Kovic Projects Limited featuring blue hardhat, reflective safety vest, ear defenders, work boots, and danger tape.',
    technologies: ['Photoshop', 'Corporate Safety Banner', '3D Product Styling', 'Typography'],
  },
  {
    id: 'wishing-12-international-womens-day',
    title: "Happy International Women's Day — March 8 Team Tribute Poster",
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalWomensDay,
    description: "High-impact team celebration poster featuring a grid collage of black & white women team portraits framed around a giant vibrant orange '8' emblem.",
    technologies: ['Photoshop', 'Photo Collage', 'Typography', 'Brand Celebration'],
  },
  {
    id: 'wishing-13-national-mathematics-day',
    title: 'Happy National Mathematics Day — Power of Logic & Problem Solving Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalMathematicsDay,
    description: 'Inspirational STEM education poster showing students gathered around a geometry blackboard table in an electric blue room with 3D wall typography.',
    technologies: ['Photoshop', 'STEM Graphics', '3D Room Rendering', 'Educational Poster'],
  },
  {
    id: 'wishing-14-world-water-day',
    title: 'World Water Day — A Drop of Water Worth More Than Gold Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldWaterDay,
    description: 'Environmental awareness poster showcasing chrome water tap pouring crystal clear water onto lathered washing hands with cyan typography quote.',
    technologies: ['Photoshop', 'Macro Photography Art Direction', 'Clean Minimalist Banner', 'Environmental Awareness'],
  },
  {
    id: 'wishing-15-world-theatre-day',
    title: 'Happy World Theatre Day — Stage, Cinema & Performing Arts Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldTheatreDay,
    description: 'Vibrant crimson performing arts celebration poster featuring vintage movie projector, film reel, clapperboard, studio microphone, popcorn, and stage pedestal.',
    technologies: ['Photoshop', '3D Performing Arts Composition', 'Cinema Graphic', 'Typography'],
  },
  {
    id: 'wishing-16-ambedkar-jayanti',
    title: 'Happy Ambedkar Jayanti — Sometime Hero Use Pen Tribute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingAmbedkarJayanti,
    description: 'Minimalist tribute poster for Dr. B.R. Ambedkar featuring a metallic bronze profile bust with green tricolor light gradient on textured paper.',
    technologies: ['Photoshop', '3D Metallic Bust Rendering', 'Patriotic Poster', 'Typography'],
  },
  {
    id: 'wishing-17-gandhi-jayanti',
    title: 'Happy Gandhi Jayanti — He Lived Simply, Impact Was Profound Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingGandhiJayanti,
    description: 'Monochrome high-fashion editorial style tribute poster for Mahatma Gandhi walking with walking stick and charkha wheel.',
    technologies: ['Photoshop', 'Monochrome Editorial', 'Patriotic Banner', 'Typography'],
  },
  {
    id: 'wishing-18-international-dance-day',
    title: 'International Dance Day — Timeless Interpretation of Life Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalDanceDay,
    description: 'Dynamic high-energy street dance poster featuring a hip-hop dancer jumping in a green hoodie over deep blue radial gradient background.',
    technologies: ['Photoshop', 'Action Photography', 'Dynamic Composition', 'Typography'],
  },
  {
    id: 'wishing-19-labour-day',
    title: 'Labour Day — Honoring Workers Who Build Our Future Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingLabourDay,
    description: 'Vibrant corporate Labour Day poster featuring a diverse row of professionals (engineers, doctors, nurses, sanitation workers, police) sitting on an orange 01 structure.',
    technologies: ['Photoshop', 'Corporate Photo Compositing', '3D Geometry', 'Typography'],
  },
  {
    id: 'wishing-20-national-technology-day',
    title: 'National Technology Day — Innovation Step Toward Growth Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalTechnologyDay,
    description: 'Futuristic tech poster featuring a sleek white-and-blue robotic cybernetic hand pointing upward against neon purple fiber optic light trails.',
    technologies: ['Photoshop', '3D Cybernetic Rendering', 'Futuristic Lighting', 'Typography'],
  },
  {
    id: 'wishing-21-international-nurses-day',
    title: 'International Nurses Day — Everyday Heroes Powered by Care Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalNursesDay,
    description: 'Empowering International Nurses Day poster featuring a confident female nurse standing in blue medical scrubs with a waving red superhero cape.',
    technologies: ['Photoshop', 'Healthcare Banner', 'Superhero Concept', 'Typography'],
  },
  {
    id: 'wishing-22-world-telecommunication-day',
    title: 'World Telecommunication Day — Bridging Digital Divides Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldTelecommunicationDay,
    description: 'Clean technical blueprint poster featuring a giant satellite dish, world map contour, smartphone, laptop, and wireless antenna icons in cyan blue.',
    technologies: ['Photoshop', 'Technical Vector Blueprint', 'Telecom Graphic', 'Typography'],
  },
  {
    id: 'wishing-23-international-museum-day',
    title: 'International Museum Day — 18 May Cultural Heritage Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalMuseumDay,
    description: 'Scrapbook collage poster for International Museum Day featuring Classical Greek Caryatid statues, ancient pottery, torn paper edges, and European architecture.',
    technologies: ['Photoshop', 'Scrapbook Collage Layout', 'Cultural Heritage Art', 'Typography'],
  },
  {
    id: 'wishing-24-world-bee-day',
    title: 'World Bee Day — 20th May Honeycomb & Sunflower Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldBeeDay,
    description: 'Vibrant yellow & orange nature poster featuring a honeybee perching on a stack of dripping golden honeycombs surrounded by sunflowers.',
    technologies: ['Photoshop', 'Macro Photography Composite', 'Nature Banner', 'Brush Lettering Typography'],
  },
  {
    id: 'wishing-25-world-bicycle-day',
    title: 'Happy World Bicycle Day — Two Wheels Endless Discoveries Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldBicycleDay,
    description: 'Breathtaking adventure sports poster featuring a cyclist standing with a bicycle on a cliff edge overlooking a snowy mountain peak under blue sky.',
    technologies: ['Photoshop', 'Landscape Photography', 'Adventure Sports Banner', 'Typography'],
  },
  {
    id: 'wishing-26-international-yoga-day',
    title: 'International Yoga Day — Celebrate Wellness Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalYogaDay,
    description: 'Serene sunset wellness poster featuring a silhouette of a yogi in Lord of Dance pose against a radiant golden sun disc and lake landscape.',
    technologies: ['Photoshop', 'Silhouette Compositing', 'Wellness Banner', 'Typography'],
  },
  {
    id: 'wishing-27-national-statistics-day',
    title: 'National Statistics Day — 29 June Data Drives Decisions Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalStatisticsDay,
    description: 'Corporate analytics poster featuring a businessman standing on a half-globe looking up at rising 3D bar charts and a colorful pie chart.',
    technologies: ['Photoshop', '3D Data Visualization', 'Corporate Infographic', 'Typography'],
  },
  {
    id: 'wishing-28-national-doctors-day',
    title: "National Doctor's Day — July 1st Everyday Hero Poster",
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalDoctorsDay,
    description: "Empowering healthcare poster showing a doctor in lab coat with stethoscope casting a standing superhero shadow silhouette on cream backdrop.",
    technologies: ['Photoshop', 'Healthcare Concept', 'Shadow Manipulation', 'Typography'],
  },
  {
    id: 'wishing-29-ca-day',
    title: 'Happy CA Day — July 1st Chartered Accountant Honor Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingCaDay,
    description: 'Bold crimson financial poster featuring a 3D wooden Chartered Accountant seal stamp and AUDIT watermark.',
    technologies: ['Photoshop', '3D Product Rendering', 'Financial Branding', 'Typography'],
  },
  {
    id: 'wishing-30-world-population-day',
    title: 'World Population Day — Easy to Add, Difficult to Maintain Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldPopulationDay,
    description: 'Humorous editorial cartoon poster showing a large family of 8 packed onto a single yellow scooter riding through a city skyline.',
    technologies: ['Photoshop', 'Editorial Illustration', 'Cartoon Character Art', 'Typography'],
  },
  {
    id: 'wishing-31-world-emoji-day',
    title: 'World Emoji Day — If Branding Team Had Faces Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldEmojiDay,
    description: 'Creative agency team poster for World Emoji Day on July 17th, replacing office team members\' faces with expressive yellow emojis at work.',
    technologies: ['Photoshop', 'Photo Manipulation', 'Emoji Vector Graphics', 'Creative Agency Banner'],
  },
  {
    id: 'wishing-32-international-chess-day',
    title: 'International Chess Day — Every Move Builds a Brighter Mind Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalChessDay,
    description: 'Inspiring youth sports poster for International Chess Day featuring young students focused over a chessboard with grandmaster watermarks.',
    technologies: ['Photoshop', 'Sports Photography', 'Composite Design', 'Typography'],
  },
  {
    id: 'wishing-33-national-handloom-day',
    title: 'National Handloom Day — A Legacy Woven by Hand Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalHandloomDay,
    description: 'Artisanal heritage tribute poster for National Handloom Day featuring a Rajasthani weaver operating a traditional wooden loom.',
    technologies: ['Photoshop', 'Cultural Artwork', 'Textile Texture Design', 'Calligraphy'],
  },
  {
    id: 'wishing-34-quit-india-movement',
    title: 'Quit India Movement — Freedom Fighters Salute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingQuitIndiaMovement,
    description: 'Historical patriotic poster saluting freedom fighters with Mahatma Gandhi, Dandi march statues, and flowing Indian flag ribbon.',
    technologies: ['Photoshop', 'Patriotic Design', 'Historic Photo Collage', 'Typography'],
  },
  {
    id: 'wishing-35-world-photography-day',
    title: 'World Photography Day — We Turn Clicks Into Stories And Art Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldPhotographyDay,
    description: 'Surreal creative artwork for World Photography Day showing a DSLR lens erupting into a scenic mountain waterfall and bridge landscape.',
    technologies: ['Photoshop', 'Surreal Photo Manipulation', 'Nature Photography Blend', 'Typography'],
  },
  {
    id: 'wishing-36-national-space-day',
    title: '1st National Space Day — Touching Lives While Touching the Moon Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalSpaceDay,
    description: 'Dramatic space exploration poster celebrating India\'s 1st National Space Day on August 23rd with ISRO LVM3 rocket launching into starry space.',
    technologies: ['Photoshop', 'Space Graphics', '3D Rocket Launch Effects', 'Typography'],
  },
  {
    id: 'wishing-37-national-sports-day',
    title: 'National Sports Day — Honoring Our National Heroes Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalSportsDay,
    description: 'Dynamic sports tribute poster honoring Indian sports champions including Neeraj Chopra, MS Dhoni, Sunil Chhetri, Mary Kom, and PV Sindhu.',
    technologies: ['Photoshop', 'Sports Photo Manipulation', 'Patriotic Collage Art', 'Typography'],
  },
  {
    id: 'wishing-38-teachers-day',
    title: 'Happy Teacher\'s Day — Great Teachers Inspire Chalkboard Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingTeachersDay,
    description: 'Classroom chalkboard tribute poster featuring chalk portraits of legendary Indian scientists Dr. APJ Abdul Kalam, Dr. C.V. Raman, and Dr. Homi Bhabha.',
    technologies: ['Photoshop', 'Chalkboard Sketch Illustration', 'Academic Design', 'Typography'],
  },
  {
    id: 'wishing-39-international-literacy-day',
    title: 'International Literacy Day — Powerful Tool for Freedom Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalLiteracyDay,
    description: 'Striking educational poster for International Literacy Day featuring a graduation mortarboard cap atop leatherbound books on rich crimson red background.',
    technologies: ['Photoshop', '3D Product Render', 'Educational Graphic', 'Typography'],
  },
  {
    id: 'wishing-40-engineers-day',
    title: 'Happy Engineers\' Day — Built by Vision Powered by Engineers Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingEngineersDay,
    description: 'Architectural engineering tribute poster featuring a modern high-speed train crossing a massive arched railway bridge over a river gorge.',
    technologies: ['Photoshop', 'Architectural Drafting Illustration', 'Engineering Branding', 'Typography'],
  },
  {
    id: 'wishing-41-world-tourism-day',
    title: 'World Tourism Day — Travel Opens Minds Connects Hearts Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldTourismDay,
    description: 'Vibrant travel poster celebrating World Tourism Day featuring famous world landmarks (Statue of Liberty, Big Ben, Eiffel Tower, Pyramids) on a tropical beach island with an airplane.',
    technologies: ['Photoshop', 'Travel Poster Manipulation', 'Landmark Composite', 'Typography'],
  },
  {
    id: 'wishing-42-world-heart-day',
    title: 'World Heart Day — Be Heart Smart Live Longer Live Better Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldHeartDay,
    description: 'Striking medical awareness poster featuring a giant 3D red anatomical heart encircled by a winding spiral path with walking people.',
    technologies: ['Photoshop', '3D Healthcare Graphic', 'Anatomical Model Render', 'Typography'],
  },
  {
    id: 'wishing-43-international-coffee-day',
    title: 'International Coffee Day — 1st of October Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalCoffeeDay,
    description: 'Warm cafe promotion poster for International Coffee Day featuring a doodle artwork frame with a steaming espresso cup and roasted coffee beans.',
    technologies: ['Photoshop', 'Doodle Art Composite', 'Beverage Branding', 'Typography'],
  },
  {
    id: 'wishing-44-indian-air-force-day',
    title: 'Indian Air Force Day — Honouring the Guardians of Our Skies Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingIndianAirForceDay,
    description: 'Heroic military aviation poster for Indian Air Force Day (8 October) featuring a Sukhoi Su-30MKI fighter jet soaring through blue skies with Indian Tricolor ribbon.',
    technologies: ['Photoshop', 'Aviation Composite', 'Military Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-45-world-post-day',
    title: 'World Post Day — 9th October Postal Mail Tribute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldPostDay,
    description: 'Clean vector illustration poster for World Post Day featuring a classic red mailbox surrounded by flying envelopes and paper airplanes.',
    technologies: ['Photoshop', 'Vector Illustration', 'Postal Branding', 'Typography'],
  },
  {
    id: 'wishing-46-national-unity-day',
    title: 'National Unity Day — Embracing Diversity Fostering Unity Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalUnityDay,
    description: 'Monumental tribute poster for National Unity Day featuring a golden Statue of Unity (Sardar Vallabhbhai Patel) resting on a floating island with glowing sun.',
    technologies: ['Photoshop', 'Monumental 3D Artwork', 'Patriotic Design', 'Typography'],
  },
  {
    id: 'wishing-47-national-education-day',
    title: 'National Education Day — The More We Learn The Stronger Our Nation Becomes Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalEducationDay,
    description: 'Creative academic poster for National Education Day featuring a schoolboy sitting on a giant yellow pencil under a graduation cap pillar.',
    technologies: ['Photoshop', 'Surreal Composite Illustration', 'Educational Branding', 'Typography'],
  },
  {
    id: 'wishing-48-childrens-day',
    title: 'Happy Children\'s Day — Pandit Jawaharlal Nehru Birth Anniversary Tribute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingChildrensDay,
    description: 'Nostalgic scrapbook-style tribute poster for Children\'s Day featuring a vintage black-and-white photo of Chacha Nehru surrounded by smiling children.',
    technologies: ['Photoshop', 'Scrapbook Vintage Collage', 'Photo Editing', 'Typography'],
  },
  {
    id: 'wishing-49-international-mens-day',
    title: 'Happy International Men\'s Day — Building, Leading, and Creating Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalMensDay,
    description: 'Sleek executive tribute poster for International Men\'s Day featuring a crisp white collared shirt and blue tie graphic against a dark geometric grid.',
    technologies: ['Photoshop', 'Minimalist Corporate Graphic', 'Fashion Vector Render', 'Typography'],
  },
  {
    id: 'wishing-50-national-constitution-day',
    title: 'National Constitution Day — Honoring Vision, Values & Democratic Ideals Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalConstitutionDay,
    description: 'Dignified civic poster for National Constitution Day featuring a 3D wooden judge gavel beside a standing Indian Tricolor desktop flag and India map contour.',
    technologies: ['Photoshop', '3D Legal Graphic', 'Patriotic Design', 'Typography'],
  },
  {
    id: 'wishing-51-national-security-day',
    title: 'National Security Day — Commemorating Our Security Forces Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalSecurityDay,
    description: 'Comprehensive defense poster for National Security Day (04 March) featuring a main battle tank, naval warship, fighter jet formation with Tricolor smoke, and armed forces silhouettes.',
    technologies: ['Photoshop', 'Defense Collage Composite', 'Military Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-52-international-mother-language-day',
    title: 'International Mother Language Day — Telugu Talli Honor Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalMotherLanguageDay,
    description: 'Cultural linguistic poster for International Mother Language Day featuring a golden Telugu Talli statue against a traditional mandala pattern and bold Telugu typography.',
    technologies: ['Photoshop', 'Cultural Artwork', 'Telugu Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-53-har-ghar-tiranga',
    title: 'Har Ghar Tiranga — One Nation, One Flag, One Spirit Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingHarGharTiranga,
    description: 'Vibrant national campaign poster for Har Ghar Tiranga featuring twin waving Indian Tricolors with Ashoka Chakra emblem, peace doves, and historic landmark silhouettes.',
    technologies: ['Photoshop', 'Patriotic Campaign Design', 'Vector Flag Artwork', 'Typography'],
  },
  {
    id: 'wishing-54-vishwakarma-puja',
    title: 'Vishwakarma Puja — Celebrating Creativity, Skill & Innovation Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingVishwakarmaPuja,
    description: 'Devotional festival poster for Vishwakarma Puja featuring a divine illustration of Lord Vishwakarma holding architectural tools and the globe on a rich maroon background.',
    technologies: ['Photoshop', 'Devotional Digital Art', 'Festival Branding', 'Typography'],
  },
  {
    id: 'wishing-55-indian-navy-day',
    title: 'Indian Navy Day — Because They Guard the Seas We Sail With Confidence Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingIndianNavyDay,
    description: 'Majestic maritime defense poster for Indian Navy Day featuring a guided missile destroyer warship plowing through deep blue ocean waves with 3D "NAVY" text.',
    technologies: ['Photoshop', 'Naval Aviation & Warship Composite', 'Military Graphics', 'Typography'],
  },
  {
    id: 'wishing-56-indian-armed-force-flag-day',
    title: 'Indian Armed Force Flag Day — A Flag That Stands Tall Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingIndianArmedForceFlagDay,
    description: 'Patriotic defense poster for Armed Forces Flag Day featuring Army, Air Force, and Navy emblem badges over marching servicemen and hand holding the Tricolor.',
    technologies: ['Photoshop', 'Tri-Services Defense Collage', 'Emblem Graphics', 'Typography'],
  },
  {
    id: 'wishing-57-international-anti-corruption-day',
    title: 'International Anti Corruption Day — Break The Chain Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalAntiCorruptionDay,
    description: 'Impactful civic poster for International Anti Corruption Day (09th December) featuring a line art sketch of two raised fists snapping a rusty chain.',
    technologies: ['Photoshop', 'Line Art Sketching', 'Civic Advocacy Design', 'Typography'],
  },
  {
    id: 'wishing-58-human-rights-day',
    title: 'Human Rights Day — 10th December UN Declaration Commemoration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingHumanRightsDay,
    description: 'Global advocacy poster for Human Rights Day featuring a raised fist gripping a microphone above a tape-mounted craft paper banner backdrop.',
    technologies: ['Photoshop', 'Advocacy Graphic Design', 'Paper Texture Collage', 'Typography'],
  },
  {
    id: 'wishing-59-international-mountain-day',
    title: 'International Mountain Day — Honor the World\'s Most Powerful Landscapes Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalMountainDay,
    description: 'Breathtaking nature poster for International Mountain Day (11 December) featuring a sunlit snow-capped mountain peak towering into crisp blue skies.',
    technologies: ['Photoshop', 'Landscape Photography', 'Nature Banner Art', 'Typography'],
  },
  {
    id: 'wishing-60-national-farmers-day',
    title: 'National Farmer\'s Day — Honouring the Hands That Turn Seeds Into Life Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalFarmersDay,
    description: 'Tribute poster for National Farmer\'s Day (Kisan Diwas on 23rd December) featuring a hand-drawn sketch of an Indian farmer planting rice saplings in a paddy field.',
    technologies: ['Photoshop', 'Hand Sketch Illustration', 'Agricultural Tribute', 'Typography'],
  },
  {
    id: 'wishing-61-national-civil-services-day',
    title: 'National Civil Services Day — Honoring the Servants of the Nation Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalCivilServicesDay,
    description: 'Dignified governance poster for National Civil Services Day (21 April) featuring the golden Ashoka Lion Capital atop a domed monument under waving tricolor banners.',
    technologies: ['Photoshop', '3D Monumental Artwork', 'Governance Design', 'Typography'],
  },
  {
    id: 'wishing-62-good-governance-day',
    title: 'Good Governance Day — Atal Bihari Vajpayee Birth Anniversary Tribute Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingGoodGovernanceDay,
    description: 'Commemorative political poster for Good Governance Day honoring Shri Atal Bihari Vajpayee with an India map silhouette and jet flypast tricolor smoke trail.',
    technologies: ['Photoshop', 'Political Tribute Design', 'Patriotic Graphics', 'Typography'],
  },
  {
    id: 'wishing-63-mothers-day',
    title: 'Happy Mother\'s Day — Behind Every Strict No is Endless Love Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingMothersDay,
    description: 'Humorous family character illustration for Mother\'s Day featuring an Indian Amma with a stick playfully chasing a frightened little boy holding a smartphone.',
    technologies: ['Photoshop', '3D Character Art', 'Humorous Storytelling', 'Typography'],
  },
  {
    id: 'wishing-64-fathers-day',
    title: 'Happy Father\'s Day — Behind Every Strong Family is a Stronger Father Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingFathersDay,
    description: 'Emotional tribute poster for Father\'s Day (21 June) featuring a halftone vector silhouette of a father carrying his child on his shoulders on a deep crimson backdrop.',
    technologies: ['Photoshop', 'Halftone Vector Illustration', 'Family Tribute Art', 'Typography'],
  },
  {
    id: 'wishing-65-international-day-of-friendship',
    title: 'International Day of Friendship — 30th July Pinky Promise Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingInternationalDayOfFriendship,
    description: 'Pop-art comic graphic for International Day of Friendship (30th July) featuring two halftone hands making a pinky promise against a textured white paper canvas.',
    technologies: ['Photoshop', 'Halftone Pop Art', 'Comic Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-66-makar-sankranti',
    title: 'Happy Makar Sankranti — Kite Festival Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingMakarSankranti,
    description: 'Vibrant harvest festival poster for Makar Sankranti featuring colorful flying kites, thread spool (firkee), til sweets bowl, and kumkum/haldi ceremonial bowls.',
    technologies: ['Photoshop', 'Festive Photography Render', 'Harvest Festival Design', 'Typography'],
  },
  {
    id: 'wishing-67-saraswati-puja',
    title: 'Happy Saraswati Puja — Musical Coffee Fusion Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingSaraswatiPuja,
    description: 'Artistic fusion poster for Saraswati Puja featuring a swan-shaped veena electric guitar line art with coffee beans and steaming espresso beside Goddess Saraswati playing veena.',
    technologies: ['Photoshop', 'Line Art Fusion', 'Devotional Art', 'Typography'],
  },
  {
    id: 'wishing-68-maha-shivaratri',
    title: 'Happy Maha Shivaratri — Sacred Shiva Lingam Blessing Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingMahaShivaratri,
    description: 'Devotional festival poster for Maha Shivaratri featuring a sacred Shiva Lingam adorned with tilak and marigold flowers against flowing red silk backdrop.',
    technologies: ['Photoshop', '3D Devotional Rendering', 'Fabric Simulation', 'Typography'],
  },
  {
    id: 'wishing-69-valentines-day-cat',
    title: 'Happy Valentine\'s Day — Cat Under Heart Tree Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingValentinesDayCat,
    description: 'Charming Valentine\'s Day card illustration featuring a cute black-and-white tuxedo cat in a red scarf sitting under a heart-leaf tree with gift boxes and a love letter.',
    technologies: ['Photoshop', 'Watercolor Illustration', 'Greeting Card Design', 'Typography'],
  },
  {
    id: 'wishing-70-ugadi',
    title: 'Ugadi Subhakankshalu — Traditional Telugu New Year Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingUgadi,
    description: 'Warm traditional Telugu New Year poster for Ugadi featuring a clay kalash with mango leaves, brass oil lamp (diya), raw mango slices, and marigold flower garland.',
    technologies: ['Photoshop', 'Cultural Festival Photography', 'Telugu Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-71-holi',
    title: 'Happy Holi — Vibrant Festival of Colours Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingHoli,
    description: 'Vibrant festive poster for Holi featuring an ornamental clay pot overflowing with magenta pink gulal, traditional dholak drums, crossed pichkaris, and colorful powder plates.',
    technologies: ['Photoshop', 'Digital Illustration', 'Festive Branding', 'Typography'],
  },
  {
    id: 'wishing-72-navratri',
    title: 'Happy Navratri — Foundations of Faith Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNavratri,
    description: 'Elegant Navratri festival poster featuring traditional red skirt, silver anklets, white mandala rangoli, and sacred red footprints with empowering typography.',
    technologies: ['Photoshop', 'Cultural Branding', 'Minimalist Illustration', 'Typography'],
  },
  {
    id: 'wishing-73-eid-al-fitr-2026',
    title: 'Happy Eid Al-Fitr 2026 — Blessed Crescent & Mosque Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingEidAlFitr2026,
    description: 'Sophisticated Eid al-Fitr 2026 poster featuring an ornate illuminated mosque minaret, golden dome, hanging crescent stars, and elegant Arabic calligraphy.',
    technologies: ['Photoshop', 'Islamic Geometric Design', 'Arabic Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-74-ram-navami',
    title: 'Shree Ram Navami — Divine Kodanda Bow & Arrow Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingRamNavami,
    description: 'Magnificent Sri Ram Navami poster featuring divine blue hands lifting the golden Kodanda bow and arrow, sunburst rays, temple pillars, and Sanskrit shlokas.',
    technologies: ['Photoshop', '3D Digital Render', 'Sanskrit Typography', 'Divine Lighting'],
  },
  {
    id: 'wishing-75-mahavir-jayanti',
    title: 'Happy Mahavir Jayanti — Peace & Compassion Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingMahavirJayanti,
    description: 'Serene Mahavir Jayanti poster featuring a layered red papercut silhouette of Lord Mahavira in dhyana meditation within a golden temple arch.',
    technologies: ['Photoshop', 'Papercut Art Effect', 'Spiritual Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-76-hanuman-jayanti',
    title: 'Happy Hanuman Jayanti — Strength & Devotion Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingHanumanJayanti,
    description: 'Awestruck devotional poster for Hanuman Jayanti featuring Lord Hanuman kneeling with Gada mace, Ram mantra halo, and hanging golden temple bells against a sunset sky.',
    technologies: ['Photoshop', '3D Digital Rendering', 'Devotional Graphics', 'Typography'],
  },
  {
    id: 'wishing-77-good-friday',
    title: 'Good Friday — Path of Love & Sacrifice Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingGoodFriday,
    description: 'Solemn Good Friday reflection poster featuring Jesus Christ on the wooden cross, crown of thorns, and high-contrast monochrome backdrop.',
    technologies: ['Photoshop', 'Monochrome Digital Art', 'Religious Poster Design', 'Typography'],
  },
  {
    id: 'wishing-78-buddha-purnima',
    title: 'Happy Buddha Purnima — Enlightenment & Peace Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingBuddhaPurnima,
    description: 'Minimalist Buddha Purnima poster featuring Lord Buddha in meditative silhouette against a glowing orange full moon sun and wild grass silhouettes.',
    technologies: ['Photoshop', 'Minimalist Vector Art', 'Zen Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-79-narsimha-jayanti',
    title: 'Mahavtar Narsimha Jayanti — Divine Victory Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNarsimhaJayanti,
    description: 'Epic cinematic artwork depicting Mahavtar Narsimha defeating Hiranyakashipu in a grand marble temple courtyard with golden drapes and Sanskrit mantras.',
    technologies: ['Photoshop', 'Cinematic Concept Art', 'Sanskrit Typography', 'Digital Illustration'],
  },
  {
    id: 'wishing-80-parshuram-jayanti',
    title: 'Parshuram Jayanti — Fearless Strength & Justice Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingParshuramJayanti,
    description: 'Royal blue celestial artwork featuring Lord Parshuram on a mountain peak raising his bow and axe under a full moon arch.',
    technologies: ['Photoshop', 'Vector Silhouette Illustration', 'Mythological Art', 'Typography'],
  },
  {
    id: 'wishing-81-rath-yatra',
    title: 'Happy Rath Yatra — Jai Jagannath Chariot Festival Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingRathYatra,
    description: 'Vibrant Odissi dancers and dholak musicians celebrating in front of the monochrome Jagannath temple chariots for Puri Rath Yatra.',
    technologies: ['Photoshop', 'Cultural Dance Illustration', 'Festival Graphics', 'Typography'],
  },
  {
    id: 'wishing-82-durga-ashtami',
    title: 'Subho Durga Ashtami — Maa Durga Blessing Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingDurgaAshtami,
    description: 'Crimson festive poster with ornate golden arch, Maa Durga face watermark, and black silhouette of Goddess Durga riding her lion.',
    technologies: ['Photoshop', 'Cultural Branding', 'Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-83-raksha-bandhan',
    title: 'Happy Raksha Bandhan — Bond of Love & Lifelong Support Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingRakshaBandhan,
    description: 'Heartwarming polaroid style poster showcasing siblings applying tilak and tying Rakhi, set on crimson velvet texture with ornate lace.',
    technologies: ['Photoshop', 'Polaroid Collage', 'Festive Photography', 'Typography'],
  },
  {
    id: 'wishing-84-bonalu',
    title: 'Happy Bonalu — Telangana Cultural Prosperity Festival Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingBonalu,
    description: 'Telangana festival creative featuring a woman carrying decorative Bonam pots with neem leaves over a red state map silhouette and street food cart.',
    technologies: ['Photoshop', 'Regional Cultural Art', 'Map Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-85-muharram',
    title: 'Happy Muharram — Prayer & Devotion Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingMuharram,
    description: 'Serene spiritual poster illustrating a devout Muslim offering Sujud prayer on a prayer rug with faint mosque minaret silhouettes.',
    technologies: ['Photoshop', 'Digital Line Art Illustration', 'Islamic Art', 'Typography'],
  },
  {
    id: 'wishing-86-nag-panchami',
    title: 'Happy Nag Panchami — Strength & Protection Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNagPanchami,
    description: 'Spiritual Nag Panchami creative featuring Lord Shiva in black meditation silhouette, Shivling with flowers, open-hood cobra, and gold mandala on parchment.',
    technologies: ['Photoshop', 'Spiritual Silhouette Art', 'Mythological Branding', 'Typography'],
  },
  {
    id: 'wishing-87-varalakshmi-vratham',
    title: 'Happy Varalakshmi Vratham — Auspicious Prosperity Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingVaralakshmiVratham,
    description: 'Divine Varalakshmi Vratham creative showing Goddess Lakshmi seated on a pink lotus with golden kalash, coins, and golden elephants.',
    technologies: ['Photoshop', 'Devotional Art', 'Gold Foil Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-88-onam',
    title: 'Happy Onam — Kerala Harvest & Snake Boat Race Festival Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingOnam,
    description: 'Colorful Onam poster split design pairing a Kathakali face mask and banana leaf Sadhya feast with Kerala Vallam Kali boat race under palm trees.',
    technologies: ['Photoshop', 'Cultural Illustration', 'Festive Split Collage', 'Typography'],
  },
  {
    id: 'wishing-89-bathukamma',
    title: 'Happy Bathukamma — Telangana Floral Festival Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingBathukamma,
    description: 'Vibrant Bathukamma creative showing a stacked floral arrangement on a yellow silk saree, with Charminar and Buddha statue line art backdrop.',
    technologies: ['Photoshop', 'Floral Arrangement Photography', 'Regional Cultural Graphics', 'Typography'],
  },
  {
    id: 'wishing-90-dipawali',
    title: 'Happy Dipawali — Festival of Lights Celebration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingDipawali,
    description: 'Royal blue Dipawali creative featuring five glowing earthen diya oil lamps on an intricate gold mandala rangoli with hanging lamps.',
    technologies: ['Photoshop', 'Gold Mandala Vector', 'Lighting Effects', 'Typography'],
  },
  {
    id: 'wishing-91-christmas-2025',
    title: 'Merry Christmas 2025 — Cool Modern Santa & Reindeer Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingChristmas2025,
    description: 'Trendy Christmas calendar creative featuring a cool Santa Claus in green velvet suit and white sneakers with sunglasses next to a reindeer.',
    technologies: ['Photoshop', 'Fashion Photography', 'Modern Festive Branding', 'Typography'],
  },
  {
    id: 'wishing-92-bhogi',
    title: 'Bhogi Panduga Subhakankshalu — Warm Bonfire Festival Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingBhogi,
    description: 'Traditional Telugu festival Bhogi creative featuring a roaring bonfire over a white mandala rangoli on deep blue backdrop with golden typography.',
    technologies: ['Photoshop', 'Cultural Festival Photography', 'Telugu Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-93-kanuma',
    title: 'Kanuma Subhakankshalu — Cattle & Harvest Festival Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingKanuma,
    description: 'Heartwarming Telugu harvest festival creative depicting a woman in silk saree feeding a decorated sacred cow (Gomatha) on a rangoli.',
    technologies: ['Photoshop', 'Cultural Character Art', 'Telugu Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-94-nirjala-ekadashi',
    title: 'Nirjala Ekadashi — Divine Vishnu & Sheshnag Grace Poster',
    category: 'Wishing Posters',
    shortDescription: 'Devotional Nirjala Ekadashi poster featuring Lord Vishnu resting on Sheshnag in Ksheera Sagara with Goddess Lakshmi.',
    image: wishingNirjalaEkadashi,
    description: 'Devotional poster for Nirjala Ekadashi featuring Lord Vishnu resting on Sheshnag with Goddess Lakshmi and Lord Brahma on crimson backdrop.',
    technologies: ['Photoshop', 'Devotional 3D Art', 'Vedic Mythology', 'Typography'],
  },
  {
    id: 'wishing-95-national-picnic-day',
    title: 'National Picnic Day — Spring Lawn & Book Aesthetic Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalPicnicDay,
    description: 'Aesthetic spring outdoor poster featuring a white woven picnic blanket on green dandelion grass with coffee, an open book, and apple blossom.',
    technologies: ['Photoshop', 'Lifestyle Photography', 'Editorial Layout Design', 'Typography'],
  },
  {
    id: 'wishing-96-ganesh-chaturthi',
    title: 'Happy Ganesh Chaturthi — Dhol Tasha Festive Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingGaneshChaturthi,
    description: 'Energetic crimson festive creative featuring Dhol Tasha drum performers with saffron flags in front of Lord Ganesha silhouette backdrop.',
    technologies: ['Photoshop', 'Cultural Festival Illustration', 'Energetic Event Graphics', 'Typography'],
  },
  {
    id: 'wishing-97-world-book-day',
    title: 'World Book Day — Blue Sky & Open Book Inspiration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldBookDay,
    description: 'Vibrant blue sky poster featuring a hand holding an open hardcover book facing the sun, celebrating reading and imagination.',
    technologies: ['Photoshop', 'Conceptual Photography', 'Modern Editorial Design', 'Typography'],
  },
  {
    id: 'wishing-98-world-press-freedom-day',
    title: 'World Press Freedom Day — Courage & Power of Truth Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldPressFreedomDay,
    description: 'Crimson textured poster featuring a large 3D news microphone over a crowd silhouette watermark, honoring journalism and free press.',
    technologies: ['Photoshop', '3D Media Illustration', 'Editorial Advocacy Banner', 'Typography'],
  },
  {
    id: 'wishing-99-autism-awareness-day',
    title: 'Autism Awareness Day — Teddy Bear & Rainbow Infinity Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingAutismAwarenessDay,
    description: 'Heartwarming sky blue creative featuring a plush teddy bear holding a rainbow infinity symbol, celebrating unique minds.',
    technologies: ['Photoshop', 'Social Awareness Graphics', '3D Soft Character Art', 'Typography'],
  },
  {
    id: 'wishing-100-national-dna-day',
    title: 'National DNA Day — Building Blocks of Life Science Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingNationalDnaDay,
    description: 'Striking crimson poster featuring a black 3D double helix molecular DNA strand structure, celebrating genetic science.',
    technologies: ['Photoshop', 'Scientific 3D Rendering', 'Bold Typography', 'Graphic Design'],
  },
  {
    id: 'wishing-101-central-excise-day',
    title: 'Central Excise Day — Salute to Officers & Fair Taxation Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingCentralExciseDay,
    description: 'Royal blue national tribute poster featuring the Ashoka Lion emblem seal, crossed Indian flags, and gold star honoring Central Excise officers.',
    technologies: ['Photoshop', 'Government Emblem Branding', 'Patriotic Design', 'Typography'],
  },
  {
    id: 'wishing-102-shivaji-jayanti',
    title: 'Chhatrapati Shivaji Jayanti — Courage & Vision Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingShivajiJayanti,
    description: 'Heroic portrait creative of Chhatrapati Shivaji Maharaj in a saffron turban with Devanagari calligraphy watermark and flying saffron flags.',
    technologies: ['Photoshop', 'Historical Portraiture', 'Devanagari Calligraphy', 'Typography'],
  },
  {
    id: 'wishing-103-world-bartender-day',
    title: 'World Bartender Day — Craft Drinks & Memorable Moments Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingWorldBartenderDay,
    description: 'Vibrant crimson bar lounge creative featuring a smiling male bartender in a bow tie shaking a cocktail with halftone dot patterns.',
    technologies: ['Photoshop', 'Hospitality Graphic Design', 'Halftone Retouching', 'Typography'],
  },
  {
    id: 'wishing-104-tour-guide-day',
    title: 'International Tour Guide Day — Travel & Exploration Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingTourGuideDay,
    description: 'Deep starry blue travel poster featuring a cheerful female tour guide in straw hat and leather vest with binoculars and map.',
    technologies: ['Photoshop', 'Travel & Tourism Branding', 'Lifestyle Portraiture', 'Typography'],
  },
  {
    id: 'wishing-105-pravasi-bharatiya-divas',
    title: 'Pravasi Bharatiya Divas — Celebrating Global Indian Diaspora Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingPravasiBharatiyaDivas,
    description: 'Patriotic NRI tribute poster featuring a commercial airplane wrapped in Indian tricolor ribbon taking off over family travel silhouettes.',
    technologies: ['Photoshop', 'Vector Diaspora Art', 'Aviation Branding', 'Typography'],
  },
  {
    id: 'wishing-106-programmers-day',
    title: 'Happy Programmer\'s Day — Code Creators & Tech Innovation Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingProgrammersDay,
    description: 'Minimalist tech poster featuring a 3D blue developer avatar holding a code plaque in front of a binary matrix waterfall.',
    technologies: ['Photoshop', '3D Avatar Modeling', 'Tech Graphic Design', 'Typography'],
  },
  {
    id: 'wishing-107-kargil-vijay-diwas',
    title: 'Kargil Vijay Diwas — Salute to Brave Hearts Victory Poster',
    category: 'Wishing Posters',
    filterCategory: 'Wishing Posters',
    image: wishingKargilVijayDiwas,
    description: 'Patriotic tribute creative depicting an Indian soldier saluting while hoisting the Tricolor on a snowy mountain summit.',
    technologies: ['Photoshop', 'Patriotic Military Illustration', 'Distressed Typography', 'Digital Art'],
  },
  {
    id: 'sambar-vada-authentic-dip-campaign',
    title: 'Sambar Vada — Hot Crisp Vada Dipped in Authentic Sambar',
    category: 'Campaigns',
    filterCategory: 'Campaigns',
    image: featuredSambarVadaDip,
    description: 'Traditional South Indian culinary campaign poster featuring a golden crispy vada being dipped into rich hot sambar served on a banana leaf with coconut and tomato chutneys.',
    technologies: ['Photoshop', 'Food Photography', 'Ad Campaign', 'Social Media'],
  },
  {
    id: 'mithai-that-melts-hearts-milkcake-campaign',
    title: 'Mithai That Melts Hearts — Milkcake Festive Campaign',
    category: 'Campaigns',
    filterCategory: 'Campaigns',
    image: featuredMithaiMilkcake,
    description: 'Mouth-watering sweet campaign creative showcasing rich granular ghee milkcake topped with pistachios, featuring a taped parchment note aesthetic.',
    technologies: ['Photoshop', 'Food Styling', 'Festive Campaign', 'Typography'],
  },
  {
    id: 'double-the-sweetness-kheer-jamun-campaign',
    title: 'Double The Sweetness — Badam Kheer & Gulab Jamun Duo Campaign',
    category: 'Campaigns',
    filterCategory: 'Campaigns',
    image: featuredBadamKheerGulabJamun,
    description: 'Vibrant yellow scalloped border promotional banner featuring almond-loaded Badam Kheer in a carved brass bowl alongside warm Gulab Jamuns.',
    technologies: ['Photoshop', 'Promotional Design', 'Food Photography', 'Ad Campaign'],
  },
  {
    id: 'explore-malaysia-island-paradise-campaign',
    title: 'Explore Malaysia — Island Paradise Travel Campaign',
    category: 'Campaigns',
    filterCategory: 'Campaigns',
    image: featuredExploreMalaysiaTravel,
    description: 'Breathtaking travel campaign poster featuring emerald waters, dramatic karst limestone islands, traditional boats, and irresistible package pricing starting from ₹14,999/-.',
    technologies: ['Photoshop', 'Travel Marketing', 'Poster Design', 'Photo Composition'],
  },
  {
    id: 'soft-buttery-idli-ghee-drizzle-campaign',
    title: 'Soft & Buttery Idli — Golden Ghee Drizzle Campaign',
    category: 'Campaigns',
    filterCategory: 'Campaigns',
    image: featuredSoftIdliGhee,
    description: 'Cinematic food ad campaign showcasing a steaming stack of pillow-soft podi idlis on a banana leaf with golden aromatic ghee pouring generously from a vintage spoon.',
    technologies: ['Photoshop', 'Food Photography Art Direction', 'Social Media Campaign', 'Lighting Composition'],
  },
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

const CATEGORIES = ['All', 'Wishing Posters', 'Campaigns', 'Graphic', 'Poster', 'Branding', 'Social Media'];

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
        filterCategory: dp.category === 'Campaigns' || dp.category === 'Digital Campaigns' ? 'Campaigns' : dp.category === 'Branding' ? 'Branding' : dp.category === 'Packaging' ? 'Packaging' : dp.category === 'Print' ? 'Print' : 'Graphic',
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
    : combinedProjects.filter(p => 
        p.filterCategory === activeCategory || 
        p.category === activeCategory ||
        (activeCategory === 'Campaigns' && (
          p.category === 'Campaigns' || 
          p.category === 'Digital Campaigns' || 
          p.filterCategory === 'Campaigns' ||
          p.title.toLowerCase().includes('campaign') || 
          (p.technologies && p.technologies.some(t => t.toLowerCase().includes('campaign')))
        ))
      );

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

  // Lock body scroll when lightbox is open to prevent page scrolling
  React.useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

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

      {/* Fullscreen HD Lightbox centered 100% dead-center in screen matching exact reference */}
      <AnimatePresence>
        {currentLightboxProject && lightboxIndex !== null && (
          <motion.div
            key="lightbox-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 select-none overflow-hidden cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Right Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Direct Centered Image inside Flexbox Overlay Container */}
            <motion.img
              key={currentLightboxProject.id || lightboxIndex}
              src={currentLightboxProject.image}
              alt={currentLightboxProject.title}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none pointer-events-auto block"
              style={{ imageRendering: 'high-quality' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
