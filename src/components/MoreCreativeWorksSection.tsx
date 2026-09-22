import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Image as ImageIcon, Layers, Upload, LayoutGrid, Package, Heart, Flame } from 'lucide-react';
import { FeaturedProjects } from './FeaturedProjects';

// Import assets
import brochureRedesign1RealEstate from '../assets/brochure_redesign_1_real_estate.jpg';
import brochureRedesign2WildlifeNature from '../assets/brochure_redesign_2_wildlife_nature.jpg';
import brochureRedesign3BuildYourFuture from '../assets/brochure_redesign_3_build_your_future.jpg';
import brochureRedesign4BusinessProposal from '../assets/brochure_redesign_4_business_proposal.jpg';
import brochureRedesign5FeatherFoodMenu from '../assets/brochure_redesign_5_feather_food_menu.jpg';
import brochureRedesign6HealthyFood from '../assets/brochure_redesign_6_healthy_food.jpg';
import brochureRedesign7CorporateBlue from '../assets/brochure_redesign_7_corporate_blue.jpg';
import brochureRedesign8SmartTeams from '../assets/brochure_redesign_8_smart_teams.jpg';
import brochureRedesign9CreativeAgency from '../assets/brochure_redesign_9_creative_agency.jpg';
import brochureRedesign10IcedStrawberryLatte from '../assets/brochure_redesign_10_iced_strawberry_latte.jpg';

import wandervistaVacationBillboard from '../assets/billboard_1_wandervista_vacation.png';
import chimoFruitJuiceBillboard from '../assets/billboard_2_chimo_fruit_juice.png';
import munchCultureBillboard from '../assets/billboard_3_munch_culture_chin_chin.png';
import livoreBuyBetterBillboard from '../assets/billboard_4_livore_buy_better.png';
import packageDesignLivoreCashew from '../assets/package_design_livore_cashew.jpg';
import packageDesignCrumoCookies from '../assets/package_design_crumo_cookies.jpg';
import packageDesignMoomuDonuts from '../assets/package_design_moomu_donuts.jpg';
import packageDesignScoopaMerch from '../assets/package_design_scoopa_merch.jpg';
import packageDesignTropicsCafe from '../assets/package_design_tropics_cafe.jpg';
import packageDesignPicklePantry from '../assets/package_design_pickle_pantry.jpg';
import packageDesignPureFroot from '../assets/package_design_pure_froot.jpg';
import packageDesignSamuhBeatitBiteit from '../assets/package_design_samuh_beatit_biteit.jpg';
import packageDesignAarvikaSweets from '../assets/package_design_aarvika_sweets.jpg';
import packageDesignVeloraBeauty from '../assets/package_design_velora_beauty.jpg';
import packageDesignChocoRetto from '../assets/package_design_choco_retto.jpg';
import packageDesignStrikersCookie from '../assets/package_design_strikers_cookie.jpg';
import packageDesignTcfPumpkinSeed from '../assets/package_design_tcf_pumpkin_seed.jpg';
import packageDesignPeanovaWorkstation from '../assets/package_design_peanova_workstation.png';
import packageDesignSwasthiMakhana from '../assets/package_design_swasthi_makhana.jpg';
import packageDesignOnyxChinchin from '../assets/package_design_onyx_chinchin.jpg';
import packageDesignPeanovaJar from '../assets/package_design_peanova_jar.jpg';
import packageDesignStoneMillMintCoconutChutney from '../assets/package_design_stone_mill_mint_coconut_chutney.jpg';
import packageDesignYumYumInstantPorridgeHoney from '../assets/package_design_yumyum_instant_porridge_honey.jpg';
import packageDesignBowlfulUpma from '../assets/package_design_bowlful_upma.jpg';
import packageDesignStudentBiryaniBag from '../assets/package_design_student_biryani_bag.jpg';
import packageDesignProteinBallCo from '../assets/package_design_protein_ball_co.jpg';
import packageDesignHiDogFood from '../assets/package_design_hi_dog_food.jpg';
import packageDesignMooMooMilkCartons from '../assets/package_design_moo_moo_milk_cartons.jpg';
import packageDesignLecheBoomMoodMilk from '../assets/package_design_leche_boom_mood_milk.jpg';
import packageDesignGooGooFruitDrink from '../assets/package_design_goo_goo_fruit_drink.jpg';
import packageDesignPackagingOclockCustomFood from '../assets/package_design_packaging_oclock_custom_food.jpg';
import packageDesignTwoBrothersFaralBox from '../assets/package_design_two_brothers_faral_box.jpg';
import packageDesignBrijwasiAttaLadoo from '../assets/package_design_brijwasi_atta_ladoo.jpg';
import packageDesignBrijwasiKajuBurfi from '../assets/package_design_brijwasi_kaju_burfi.jpg';
import packageDesignBrijwasiBoondiLadoo from '../assets/package_design_brijwasi_boondi_ladoo.jpg';
import packageDesignMasterCookUpmaPoha from '../assets/package_design_master_cook_upma_poha.jpg';
import packageDesignHappyJoyPotatoChips from '../assets/package_design_happy_joy_potato_chips.jpg';
import packageDesignWeGoCupHolderBox from '../assets/package_design_we_go_cup_holder_box.jpg';
import packageDesignMilkshakesCharacterCartons from '../assets/package_design_milkshakes_character_cartons.jpg';
import realEstatePhase1 from '../assets/real_estate_phase_1.jpg';
import sahibBarbequeBiryani from '../assets/sahib_barbeque_biryani.jpg';
import tropicalFruitJuiceTrophy from '../assets/tropical_fruit_juice_trophy.jpg';
import goaholiday from '../assets/goa_holiday_package.jpg';
import caffeineArmy from '../assets/caffeine_army.jpg';
import wrinkledPaper from '../assets/wrinkled_paper.png';

import invite1WeddingNatashaMayank from '../assets/invite_1_wedding_natasha_mayank.jpg';
import invite2GruhapravesamNadesha from '../assets/invite_2_gruhapravesam_nadesha.jpg';
import invite3PappanamEpuduPeduthunav from '../assets/invite_3_pappanam_epudu_peduthunav.jpg';
import invite4GruhapravesamSuddhapalli from '../assets/invite_4_gruhapravesam_suddhapalli.jpg';
import invite5BabyShowerSushmithaPrasanna from '../assets/invite_5_baby_shower_sushmitha_prasanna.jpg';
import invite6NischayaThamboolaluRohitPravallika from '../assets/invite_6_nischaya_thamboolalu_rohit_pravallika.jpg';
import invite7GruhapravesamDandamudiAnilBhavya from '../assets/invite_7_gruhapravesam_dandamudi_anil_bhavya.jpg';
import invite8GruhapravesamArjunRamya from '../assets/invite_8_gruhapravesam_arjun_ramya.jpg';
import invite9AnnaprasanaNushitha from '../assets/invite_9_annaprasana_nushitha.jpg';
import invite10WeddingEntranceMeghnaRitesh from '../assets/invite_10_wedding_entrance_meghna_ritesh.jpg';
import invite11PoojaPrakashWeddingSchedule from '../assets/invite_11_pooja_prakash_wedding_schedule.jpg';
import invite12AnkithaAhaaPellochantha from '../assets/invite_12_ankitha_ahaa_pellochantha.jpg';
import invite13EarPiercedCeremonyRaha from '../assets/invite_13_ear_pierced_ceremony_raha.jpg';
import invite14WeddingSumuhurthamJeelakarraBellam from '../assets/invite_14_wedding_sumuhurtham_jeelakarra_bellam.jpg';
import invite15WeddingSupriyaArjun from '../assets/invite_15_wedding_supriya_arjun.jpg';

interface CreativeItem {
  id: string;
  category: 'billboard' | 'brochure' | 'package' | 'standee' | 'invite';
  title: string;
  subtitle?: string;
  image: string;
  fullMockupImage?: string;
  leftPageImage?: string;
  rightPageImage?: string;
  client?: string;
  dimensions?: string;
}

export const MoreCreativeWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'brochure' | 'billboard' | 'package' | 'standee' | 'invite'>('all');
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);
  const [currentBillboardIndex, setCurrentBillboardIndex] = useState<number>(0);
  const [billboardDirection, setBillboardDirection] = useState<number>(1);

  // Lock body scroll when selectedItem lightbox is open
  useEffect(() => {
    if (selectedItem !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  // Brochure items (10 redesigned vertical brochure layouts)
  const brochures: CreativeItem[] = [
    {
      id: 'br-1',
      category: 'brochure',
      title: 'Real Estate Brochure Layout',
      subtitle: 'Modern Architectural & Property Showcase Brochure',
      image: brochureRedesign1RealEstate,
      fullMockupImage: brochureRedesign1RealEstate,
      client: 'Real Estate Layout',
      dimensions: '819 x 1024 Vertical Catalog Layout',
    },
    {
      id: 'br-2',
      category: 'brochure',
      title: 'Wildlife Nature Zoo Trifold Brochure',
      subtitle: 'Wildlife & Nature Exploration Trifold Brochure Design',
      image: brochureRedesign2WildlifeNature,
      fullMockupImage: brochureRedesign2WildlifeNature,
      client: 'Wildlife Nature Park',
      dimensions: '819 x 1024 Vertical Trifold Spread',
    },
    {
      id: 'br-3',
      category: 'brochure',
      title: 'Build Your Future Course Brochure',
      subtitle: 'Educational & Skill Training Trifold Brochure',
      image: brochureRedesign3BuildYourFuture,
      fullMockupImage: brochureRedesign3BuildYourFuture,
      client: 'Future Skills Training',
      dimensions: '819 x 1024 Vertical Trifold Brochure',
    },
    {
      id: 'br-4',
      category: 'brochure',
      title: 'Business Proposal Corporate Brochure',
      subtitle: 'Modern Financial & Investment Business Proposal Layout',
      image: brochureRedesign4BusinessProposal,
      fullMockupImage: brochureRedesign4BusinessProposal,
      client: 'Acme Group',
      dimensions: '819 x 1024 Corporate Catalog Layout',
    },
    {
      id: 'br-5',
      category: 'brochure',
      title: 'Feather Food Menu Brochure',
      subtitle: 'Restaurant & Catering Culinary Menu Brochure',
      image: brochureRedesign5FeatherFoodMenu,
      fullMockupImage: brochureRedesign5FeatherFoodMenu,
      client: 'Feather Food Restaurant',
      dimensions: '819 x 1024 Culinary Menu Brochure',
    },
    {
      id: 'br-6',
      category: 'brochure',
      title: 'Healthy Food Restaurant Trifold Brochure',
      subtitle: 'Fresh Organic Salad & Healthy Dining Menu',
      image: brochureRedesign6HealthyFood,
      fullMockupImage: brochureRedesign6HealthyFood,
      client: 'Healthy Food Restaurant',
      dimensions: '819 x 1024 Vertical Trifold Brochure',
    },
    {
      id: 'br-7',
      category: 'brochure',
      title: 'Corporate Blue Architecture Brochure Design',
      subtitle: 'Modern Corporate Business Solutions & Company Overview',
      image: brochureRedesign7CorporateBlue,
      fullMockupImage: brochureRedesign7CorporateBlue,
      client: 'Corporate Business Solutions',
      dimensions: '819 x 1024 Vertical Trifold Brochure',
    },
    {
      id: 'br-8',
      category: 'brochure',
      title: 'Smart Teams Business Solutions Brochure',
      subtitle: 'Innovative Corporate Services & Team Success Layout',
      image: brochureRedesign8SmartTeams,
      fullMockupImage: brochureRedesign8SmartTeams,
      client: 'Smart Teams Inc.',
      dimensions: '819 x 1024 Vertical Trifold Brochure',
    },
    {
      id: 'br-9',
      category: 'brochure',
      title: 'Creative Marketing Agency Brochure',
      subtitle: 'Full Brand Identity, Services & Retractable Standee Suite',
      image: brochureRedesign9CreativeAgency,
      fullMockupImage: brochureRedesign9CreativeAgency,
      client: 'Creative Marketing Agency',
      dimensions: '819 x 1024 Vertical Trifold & Standee Suite',
    },
    {
      id: 'br-10',
      category: 'brochure',
      title: 'Iced Strawberry Latte Coffee Menu Brochure',
      subtitle: 'Specialty Coffee, Cookies & Beverage Digital Board Menu',
      image: brochureRedesign10IcedStrawberryLatte,
      fullMockupImage: brochureRedesign10IcedStrawberryLatte,
      client: 'Iced Strawberry Cafe',
      dimensions: '819 x 1024 Cafe Menu Brochure Board',
    },
  ];

  // Billboard items
  const billboards: CreativeItem[] = [
    {
      id: 'bb-main',
      category: 'billboard',
      title: 'WanderVista Travel Agency — VACATION Campaign',
      subtitle: "Explore Discover Belong — You Can't Cross The Sea Merely By Standing & Staring",
      image: wandervistaVacationBillboard,
      client: 'WanderVista Travel',
      dimensions: '40ft x 20ft Outdoor Hoarding',
    },
    {
      id: 'bb-2',
      category: 'billboard',
      title: 'chiMo Fresh Fruit Juice — FOUR Flavour Campaign',
      subtitle: 'Mango Bliss, Dragon Fruit, Pineapple Twist & Kiwi Delight',
      image: chimoFruitJuiceBillboard,
      client: 'chiMo Juices',
      dimensions: '30ft x 12ft Outdoor Hoarding',
    },
    {
      id: 'bb-3',
      category: 'billboard',
      title: 'Munch Culture — Classic CHIN CHIN Campaign',
      subtitle: 'Bite into Happiness, Crunch into Culture! Classic Snacks Hoarding',
      image: munchCultureBillboard,
      client: 'Munch Culture',
      dimensions: '30ft x 12ft Outdoor Hoarding',
    },
    {
      id: 'bb-4',
      category: 'billboard',
      title: 'Livore — Buy Better, Live Better Campaign',
      subtitle: 'Premium Quality, 100% Natural, Healthy Choice Dry Fruits & Nuts',
      image: livoreBuyBetterBillboard,
      client: 'Livore Foods',
      dimensions: '30ft x 12ft Outdoor Hoarding',
    },
  ];

  // Auto-scroll billboards every 3.5 seconds
  useEffect(() => {
    if (activeTab !== 'all' && activeTab !== 'billboard') return;

    const timer = setInterval(() => {
      setBillboardDirection(1);
      setCurrentBillboardIndex((prev) => (prev >= billboards.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [activeTab, billboards.length]);

  // Standee items
  const standees: CreativeItem[] = [
    {
      id: 'st-main',
      category: 'standee',
      title: 'We Design Ideas From The Heart — Creative Standee',
      subtitle: 'Premium Graphic Design Studio Promotional Display',
      image: caffeineArmy,
      client: 'Creative Studio',
      dimensions: '3ft x 6ft Roll-Up Standee Banner',
    },
    {
      id: 'st-2',
      category: 'standee',
      title: 'Dominate Attention — Graphic Design Career Standee',
      subtitle: 'Learn Professional Design & Elevate Brand Presence',
      image: tropicalFruitJuiceTrophy,
      client: 'Equinoxx Creative Academy',
      dimensions: '3ft x 6.5ft Retractable Banner',
    },
    {
      id: 'st-3',
      category: 'standee',
      title: 'Alimentos — Banquet & Hall Event Management',
      subtitle: 'Wedding & Special Event Promotions Standee',
      image: goaholiday,
      client: 'Alimentos Banquet',
      dimensions: '3ft x 6ft Roll-Up Banner',
    },
    {
      id: 'st-4',
      category: 'standee',
      title: 'Octant Pizza — Flat 50% Off Promo Standee',
      subtitle: 'Restaurant Menu & Special Deals Pull-Up Banner',
      image: sahibBarbequeBiryani,
      client: 'Octant Pizza',
      dimensions: '3.5ft x 7ft Food Court Standee',
    },
  ];

  // Invite Design items
  const invites: CreativeItem[] = [
    {
      id: 'inv-1',
      category: 'invite',
      title: 'Wedding Invite — Natasha & Mayank',
      subtitle: 'Traditional Indian Wedding Invitation Design',
      image: invite1WeddingNatashaMayank,
      fullMockupImage: invite1WeddingNatashaMayank,
      client: 'Natasha & Mayank',
    },
    {
      id: 'inv-2',
      category: 'invite',
      title: 'Gruhapravesam Invite — Nadesha Vari Family',
      subtitle: 'Traditional Housewarming Invitation Design in Telugu',
      image: invite2GruhapravesamNadesha,
      fullMockupImage: invite2GruhapravesamNadesha,
      client: 'Nadesha Family',
    },
    {
      id: 'inv-3',
      category: 'invite',
      title: 'Traditional Wedding Celebration Invite',
      subtitle: "The 'Pappanam epudu peduthunav' Season Invitation Design",
      image: invite3PappanamEpuduPeduthunav,
      fullMockupImage: invite3PappanamEpuduPeduthunav,
      client: 'Cultural Celebrations',
    },
    {
      id: 'inv-4',
      category: 'invite',
      title: 'Gruhapravesam Invite — Suddhapalli Vari Family',
      subtitle: 'Grand Housewarming Invitation Design',
      image: invite4GruhapravesamSuddhapalli,
      fullMockupImage: invite4GruhapravesamSuddhapalli,
      client: 'Suddhapalli Family',
    },
    {
      id: 'inv-5',
      category: 'invite',
      title: 'Baby Shower Invite — Sushmitha & Prasanna',
      subtitle: 'Floral & Traditional Baby Shower Invitation Design',
      image: invite5BabyShowerSushmithaPrasanna,
      fullMockupImage: invite5BabyShowerSushmithaPrasanna,
      client: 'Sushmitha & Prasanna',
    },
    {
      id: 'inv-6',
      category: 'invite',
      title: 'Nischaya Thamboolalu Invite — Rohit Raghuvendra & Pravallika',
      subtitle: 'Traditional Telugu Engagement Ceremony Invitation',
      image: invite6NischayaThamboolaluRohitPravallika,
      fullMockupImage: invite6NischayaThamboolaluRohitPravallika,
      client: 'Vemu Family',
    },
    {
      id: 'inv-7',
      category: 'invite',
      title: 'Gruhapravesam Invite — Dandamudi Anil Kumar & Bhavya Swoorthi',
      subtitle: 'Traditional Housewarming Invitation Design with Lotus & Ganesha',
      image: invite7GruhapravesamDandamudiAnilBhavya,
      fullMockupImage: invite7GruhapravesamDandamudiAnilBhavya,
      client: 'Dandamudi Family',
    },
    {
      id: 'inv-8',
      category: 'invite',
      title: 'Gruhapravesam Pooja Ceremony Invite',
      subtitle: 'Traditional Housewarming Invitation Design with Floral Garland & Kalasam',
      image: invite8GruhapravesamArjunRamya,
      fullMockupImage: invite8GruhapravesamArjunRamya,
      client: 'San Diego Housewarming',
    },
    {
      id: 'inv-9',
      category: 'invite',
      title: 'Annaprasana Veduka Invite — Chi. Nushitha',
      subtitle: 'Traditional Baby First Rice Feeding Ceremony Invitation',
      image: invite9AnnaprasanaNushitha,
      fullMockupImage: invite9AnnaprasanaNushitha,
      client: 'Maddineni Family',
    },
    {
      id: 'inv-10',
      category: 'invite',
      title: 'Wedding Welcome Standee & Board — Meghna & Ritesh',
      subtitle: 'Floral Decorative Wedding Entrance Board Design',
      image: invite10WeddingEntranceMeghnaRitesh,
      fullMockupImage: invite10WeddingEntranceMeghnaRitesh,
      client: 'Meghna & Ritesh',
    },
    {
      id: 'inv-11',
      category: 'invite',
      title: 'Pooja & Prakash Wedding Ceremony Schedule Invite',
      subtitle: 'Illustrated Traditional Haldi, Mehendi & Wedding Schedule Card',
      image: invite11PoojaPrakashWeddingSchedule,
      fullMockupImage: invite11PoojaPrakashWeddingSchedule,
      client: 'Pooja & Prakash',
    },
    {
      id: 'inv-12',
      category: 'invite',
      title: 'Ahaa Pellochantha Invite — Ankitha Chi la sow',
      subtitle: 'Modern Traditional Fun Bride Celebration Invite',
      image: invite12AnkithaAhaaPellochantha,
      fullMockupImage: invite12AnkithaAhaaPellochantha,
      client: 'Ankitha',
    },
    {
      id: 'inv-13',
      category: 'invite',
      title: 'Ear Pierced Ceremony Invite — Little Princess Raha',
      subtitle: 'Floral & Lotus Ear Piercing Ceremony Invitation Card',
      image: invite13EarPiercedCeremonyRaha,
      fullMockupImage: invite13EarPiercedCeremonyRaha,
      client: 'Baby Raha Family',
    },
    {
      id: 'inv-14',
      category: 'invite',
      title: 'Traditional Sumuhurtham Wedding Invite',
      subtitle: 'Jeelakarra Bellam & Temple Backdrop Wedding Invitation',
      image: invite14WeddingSumuhurthamJeelakarraBellam,
      fullMockupImage: invite14WeddingSumuhurthamJeelakarraBellam,
      client: 'Wedding Celebrations',
    },
    {
      id: 'inv-15',
      category: 'invite',
      title: 'Traditional Temple Wedding Invite — Supriya & Arjun',
      subtitle: 'Royal South Indian Temple Gopuram Wedding Invitation',
      image: invite15WeddingSupriyaArjun,
      fullMockupImage: invite15WeddingSupriyaArjun,
      client: 'Supriya & Arjun',
    },
  ];

  return (
    <section id="more-creative-works" className="w-full bg-[#090909] text-white relative py-14 sm:py-18 md:py-24 overflow-hidden border-t border-white/10">
      
      {/* Header & Controls Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-14 text-center relative z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white uppercase"
        >
          Portfolio <span className="text-[#88D900]">Projects & Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-gray-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-2.5"
        >
          Explore featured project campaigns, brochure spreads, outdoor billboards, custom package designs, standees, and invite designs.
        </motion.p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-7">
          {[
            { id: 'all', label: 'All Works', icon: LayoutGrid },
            { id: 'featured', label: 'Featured Projects', icon: Flame },
            { id: 'brochure', label: 'Brochures', icon: ImageIcon },
            { id: 'billboard', label: 'Billboards', icon: Layers },
            { id: 'package', label: 'Package Design', icon: Package },
            { id: 'standee', label: 'Standees', icon: Upload },
            { id: 'invite', label: 'Invite Designs', icon: Heart },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#88D900] text-black shadow-[0_0_20px_rgba(136,217,0,0.5)] scale-105 ring-2 ring-[#88D900]'
                    : 'bg-white/10 text-gray-300 border border-white/15 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FEATURED PROJECTS SHOWCASE BLOCK (COMBINED INSIDE MORE CREATIVE WORKS) */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'featured') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-16 relative z-10">
          <FeaturedProjects />
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. BROCHURE DESIGN SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'brochure') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-28 relative z-10">
          
          {/* Header Typography with Exactly One Space Gap */}
          <div className="mb-10 flex items-baseline flex-wrap">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-sans select-none leading-none">
              Brochure
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#88D900] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
              Design
            </span>
          </div>

          {/* 5 Redesigned Brochure Images — Direct Raw Image Display preserving 819:1024 Aspect Ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14 items-center justify-items-center">
            {brochures.map((brochure, idx) => (
              <motion.div
                key={brochure.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ scale: 1.025 }}
                onClick={() => setSelectedItem(brochure)}
                className="group cursor-pointer relative w-full flex justify-center items-center"
              >
                <img
                  src={brochure.image}
                  alt={brochure.title}
                  className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                  style={{ imageRendering: '-webkit-optimize-contrast', aspectRatio: '819 / 1024' }}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. BILL BOARD DESIGN SECTION - SINGLE IMAGE VIEW WITH SCROLL ANIMATION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'billboard') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-28 relative z-10">
          
          {/* Header Typography & Single-View Controls */}
          <div className="mb-8 flex items-baseline justify-between flex-wrap gap-4">
            <div className="flex items-baseline flex-wrap">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-sans select-none leading-none">
                Bill Board
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white select-none leading-none">&nbsp;</span>
              <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#88D900] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
                Design
              </span>
            </div>

          </div>

          {/* Single Image Viewport - Pre-loaded with zero lag and smooth instant crossfade */}
          <div className="relative w-full min-h-[300px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center py-2 overflow-hidden">
            {billboards.map((item, idx) => {
              const isActive = idx === currentBillboardIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group cursor-pointer w-full flex flex-col items-center justify-center transition-all duration-500 ease-out ${
                    isActive
                      ? 'relative opacity-100 scale-100 pointer-events-auto z-10'
                      : 'absolute inset-0 opacity-0 scale-95 pointer-events-none z-0'
                  }`}
                >
                  {/* Real Raw Billboard Image pasted directly on paper canvas at 100% native HD pixel resolution */}
                  <div className="relative w-full max-w-[1024px] mx-auto overflow-visible flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                      loading="lazy"
                  decoding="async"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-6">
            {billboards.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setBillboardDirection(idx > currentBillboardIndex ? 1 : -1);
                  setCurrentBillboardIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentBillboardIndex
                    ? 'w-10 bg-[#88D900] shadow-[0_0_12px_#88D900]'
                    : 'w-2.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to billboard slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. PACKAGE DESIGN SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'package') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-28 relative z-10">
          
          {/* Header Typography with Exactly One Space Gap */}
          <div className="mb-12 flex items-baseline flex-wrap">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-sans select-none leading-none">
              Package
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#88D900] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
              Design
            </span>
          </div>

          {/* 7 Package Product Designs pasted directly on canvas without box containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center justify-items-center">
            
            {/* Package 1: Livore Chutta Cashew */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-livore-cashew',
                category: 'package',
                title: 'Livore Chutta Cashew — Package Design',
                subtitle: 'Dry Fruits Packaging Box & Label Design',
                image: packageDesignLivoreCashew,
                client: 'Livore Foods',
                dimensions: 'Flexible Stand-Up Pouch / Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignLivoreCashew}
                alt="Livore Chutta Cashew Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 2: Crumo Vanilla Pop Cookies */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-crumo-cookies',
                category: 'package',
                title: 'Crumo Vanilla Pop — Cookie Box Packaging',
                subtitle: 'Gourmet Cookie Packaging Box & Character Branding',
                image: packageDesignCrumoCookies,
                client: 'Crumo Foods',
                dimensions: 'Retail Cookie Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignCrumoCookies}
                alt="Crumo Vanilla Pop Cookie Box Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 3: Moomu Donut Box */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-moomu-donuts',
                category: 'package',
                title: 'Moomu — Sweet Donut Packaging Box',
                subtitle: 'Takeaway Donut Handle Box & Fun Illustrator Branding',
                image: packageDesignMoomuDonuts,
                client: 'Moomu Bakery',
                dimensions: 'Bakery Handle Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignMoomuDonuts}
                alt="Moomu Donut Packaging Box"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 4: Scoopa Ice Cream Merchandise & Brand Kit */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-scoopa-merch',
                category: 'package',
                title: 'Scoopa — Happiness In Every Scoop Brand & Packaging Kit',
                subtitle: 'Complete Merchandise, Apparel & Packaging System',
                image: packageDesignScoopaMerch,
                client: 'Scoopa Ice Cream',
                dimensions: 'Complete Brand Identity & Packaging Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignScoopaMerch}
                alt="Scoopa Ice Cream Packaging & Merchandise Kit"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 5: Tropics Cafe Coffee Cups */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-tropics-cafe',
                category: 'package',
                title: 'Tropics Cafe — Geometric Coffee Cup Packaging',
                subtitle: '3D Paper Coffee Cup & Pattern Branding Design',
                image: packageDesignTropicsCafe,
                client: 'Tropics Cafe',
                dimensions: 'Eco Takeaway Coffee Cup Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignTropicsCafe}
                alt="Tropics Cafe Coffee Cup Packaging Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 6: The Pickle Pantry Label Spreads */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-pickle-pantry',
                category: 'package',
                title: 'The Pickle Pantry — Gourmet Jar Label Design Suite',
                subtitle: 'Sweet & Sour, Original, and Garlic Flavor Jar Labels',
                image: packageDesignPicklePantry,
                client: 'The Pickle Pantry',
                dimensions: 'Glass Jar Wrap-Around Label Design'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignPicklePantry}
                alt="The Pickle Pantry Jar Label Design Suite"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 7: Pure Froot Can Labels */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-pure-froot',
                category: 'package',
                title: 'Pure Froot — Sparkling Fruit Drink Can Label Suite',
                subtitle: 'Mango Passion, Red Tomato, and Peach Please Label Designs',
                image: packageDesignPureFroot,
                client: 'Pure Froot Beverage Co.',
                dimensions: '330ml Aluminum Can Label Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignPureFroot}
                alt="Pure Froot Sparkling Drink Can Label Suite"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 8: Samuh Beatit Biteit Chocolate Biscuit */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-samuh-beatit-biteit',
                category: 'package',
                title: 'Samuh Beatit Biteit — Flavoured Chocolate Biscuit Packaging',
                subtitle: 'Flow-Wrap Packaging & Technical Dimension Layout Design',
                image: packageDesignSamuhBeatitBiteit,
                client: 'Samuh Foods',
                dimensions: '138mm x 128mm Wrapper & Flow-Pack Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignSamuhBeatitBiteit}
                alt="Samuh Beatit Biteit Chocolate Biscuit Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 9: Aarvika Sweets Premium Assorted Sweets */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-aarvika-sweets',
                category: 'package',
                title: 'Aarvika Sweets — Assorted Premium Sweets Luxury Box',
                subtitle: 'KLD Die-Line Layout & Festive Sweets Box Mockup',
                image: packageDesignAarvikaSweets,
                client: 'Aarvika Sweets',
                dimensions: '500g Premium Festive Sweets Rigid Box & Die-Line'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignAarvikaSweets}
                alt="Aarvika Sweets Assorted Premium Sweets Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 10: Velora Beauty Cherry Velvet Lip Gloss */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-velora-beauty',
                category: 'package',
                title: 'Velora Beauty — Cherry Velvet Lip Gloss Packaging',
                subtitle: 'Cosmetic Box Layout, Color Palette & Typography Panel',
                image: packageDesignVeloraBeauty,
                client: 'Velora Cosmetics',
                dimensions: 'Lip Gloss Unit Carton & Bottle Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignVeloraBeauty}
                alt="Velora Beauty Cherry Velvet Lip Gloss Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 11: Choco Retto Crunchy Choco Snack */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-choco-retto',
                category: 'package',
                title: 'Choco Retto — Crunchy Choco Snack Packaging',
                subtitle: 'Pillow Pouch Wrapper Design & Product 3D Rendering',
                image: packageDesignChocoRetto,
                client: 'Cisadane Food',
                dimensions: '35g Foil Pillow Pouch Snack Package'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignChocoRetto}
                alt="Choco Retto Crunchy Choco Snack Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 12: Strikers Cookie Character Window Box */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-strikers-cookie',
                category: 'package',
                title: 'Strikers Cookie — Character Mouth Window Box',
                subtitle: 'Die-Cut Window Cookie Box Packaging & Mascot Design',
                image: packageDesignStrikersCookie,
                client: 'Strikers Bakery',
                dimensions: 'Gourmet Cookie Window Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignStrikersCookie}
                alt="Strikers Cookie Character Window Box Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 13: TCF (The Coders Farm) Pumpkin Seed Pouch */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-tcf-pumpkin-seed',
                category: 'package',
                title: 'The Coders Farm — Pumpkin Seed Stand-Up Pouch',
                subtitle: 'Super Crunchy Nutrient Boost Pouch Packaging Spread',
                image: packageDesignTcfPumpkinSeed,
                client: 'The Coders Farm (TCF)',
                dimensions: '100g Resealable Stand-Up Pouch Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignTcfPumpkinSeed}
                alt="The Coders Farm Pumpkin Seed Pouch Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 14: Peanova Peanut Butter Workstation */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-peanova-workstation',
                category: 'package',
                title: 'Peanova Peanut Butter — Illustrator Workstation Design',
                subtitle: 'Vector Label Art & Packaging Workspace Layout',
                image: packageDesignPeanovaWorkstation,
                client: 'Peanova Foods',
                dimensions: 'Label Vector Graphics & Brand Design'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignPeanovaWorkstation}
                alt="Peanova Peanut Butter Illustrator Workstation Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 15: Swasthi Makhana Popped Fox Nuts */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-swasthi-makhana',
                category: 'package',
                title: 'Swasthi Makhana — Popped Fox Nuts Stand-Up Pouch',
                subtitle: 'Salt & Black Pepper Flavor Healthy Snack Pouch',
                image: packageDesignSwasthiMakhana,
                client: 'Swasthi Organics',
                dimensions: '200g Resealable Stand-Up Pouch Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignSwasthiMakhana}
                alt="Swasthi Makhana Popped Fox Nuts Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 16: Onyx Crunchy Bites Chin Chin */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-onyx-chinchin',
                category: 'package',
                title: 'Onyx Crunchy Bites — Chin Chin Onion Flavour Pouches',
                subtitle: 'Front & Back Flexible Pouch Snack Packaging System',
                image: packageDesignOnyxChinchin,
                client: 'Mom & Me Whole Foods',
                dimensions: '100g Stand-Up Snack Pouch Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignOnyxChinchin}
                alt="Onyx Crunchy Bites Chin Chin Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 17: Peanova Peanut Butter Jar & Label Spread */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-peanova-jar',
                category: 'package',
                title: 'Peanova Peanut Butter — Smooth & Rich Peanut Spread',
                subtitle: 'Complete Jar Label Spread, Sachet & 3D Jar Packaging Mockup',
                image: packageDesignPeanovaJar,
                client: 'Peanova Foods',
                dimensions: '500g Jar Label & Single-Serve Sachet Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignPeanovaJar}
                alt="Peanova Peanut Butter Jar & Label Spread Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 18: The Stone Mill Co. Mint Coconut Chutney */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-stone-mill-mint-chutney',
                category: 'package',
                title: 'The Stone Mill Co. — Mint Coconut Chutney Box Packaging',
                subtitle: 'Instant Chutney Box Packaging & Food Presentation',
                image: packageDesignStoneMillMintCoconutChutney,
                client: 'The Stone Mill Co.',
                dimensions: 'Instant Food Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignStoneMillMintCoconutChutney}
                alt="The Stone Mill Co. Mint Coconut Chutney Box Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 19: YumYum Instant Porridge Honey */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-yumyum-instant-porridge',
                category: 'package',
                title: 'YumYum — Instant Porridge Honey Pouch Packaging',
                subtitle: 'Breakfast Porridge Stand-Up Pouch & Morning Branding',
                image: packageDesignYumYumInstantPorridgeHoney,
                client: 'YumYum Foods',
                dimensions: 'Resealable Stand-Up Food Pouch'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignYumYumInstantPorridgeHoney}
                alt="YumYum Instant Porridge Honey Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 20: Bowlful Instant Upma */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-bowlful-upma',
                category: 'package',
                title: 'Bowlful — Instant Upma Food Pouch & Campaign',
                subtitle: 'Ready to Eat Food Pouch Packaging & Advertising Design',
                image: packageDesignBowlfulUpma,
                client: 'Bowlful Foods',
                dimensions: 'Foil Pouch & Campaign Layout'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignBowlfulUpma}
                alt="Bowlful Instant Upma Packaging & Campaign"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 21: Student Biryani Takeaway Bag */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-student-biryani-bag',
                category: 'package',
                title: 'Student Biryani — Takeaway Paper Bag Packaging',
                subtitle: 'Food Delivery Paper Bag & Restaurant Brand Identity',
                image: packageDesignStudentBiryaniBag,
                client: 'Student Biryani',
                dimensions: 'Kraft Paper Takeaway Bag'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignStudentBiryaniBag}
                alt="Student Biryani Takeaway Bag Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 22: The Protein Ball Co */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-protein-ball-co',
                category: 'package',
                title: 'The Protein Ball Co. — Brand & Snack Packaging System',
                subtitle: 'Plant-Based Snack Packaging & Grid Advertising Campaign',
                image: packageDesignProteinBallCo,
                client: 'The Protein Ball Co.',
                dimensions: 'Snack Flow-Wrap Pouch Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignProteinBallCo}
                alt="The Protein Ball Co. Snack Packaging System"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 23: Hi! Dog Food Packaging */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-hi-dog-food',
                category: 'package',
                title: 'Hi! — Dog Food Colorful Bag Packaging Suite',
                subtitle: 'Playful Mascot & Modern Pet Food Brand Packaging System',
                image: packageDesignHiDogFood,
                client: 'Hi! Pet Care',
                dimensions: '2kg Stand-Up Pet Food Bag Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignHiDogFood}
                alt="Hi! Dog Food Packaging Suite"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 24: Moo Moo Pure Milk Cartons */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-moo-moo-milk-cartons',
                category: 'package',
                title: 'Moo Moo — 100% Pure Milk Gable-Top Carton Packaging',
                subtitle: 'Toned & Skimmed Milk Paper Gable-Top Carton Design',
                image: packageDesignMooMooMilkCartons,
                client: 'Moo Moo Dairy',
                dimensions: 'Paper Gable-Top Milk Carton Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignMooMooMilkCartons}
                alt="Moo Moo Pure Milk Cartons Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 25: Leche Boom Mood Milk */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-leche-boom-mood-milk',
                category: 'package',
                title: 'Leche Boom — Mood Milk Bottle & Character Branding',
                subtitle: 'Flavored Milk Bottle Packaging & Pop Art Campaign',
                image: packageDesignLecheBoomMoodMilk,
                client: 'Leche Boom Dairy',
                dimensions: '3D Bottle Packaging & Label Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignLecheBoomMoodMilk}
                alt="Leche Boom Mood Milk Bottle Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 26: Goo Goo 100% Fructe Drink Sachet */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-goo-goo-fruit-drink',
                category: 'package',
                title: 'Goo Goo — 100% Fructe Apple & Blueberry Sachet',
                subtitle: 'Fruit Juice Sachet Packaging & Mascot Branding',
                image: packageDesignGooGooFruitDrink,
                client: 'Goo Goo Juices',
                dimensions: '200ml Flexible Sachet Drink Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignGooGooFruitDrink}
                alt="Goo Goo 100% Fructe Drink Sachet Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 27: Packaging O'Clock Custom Food Packaging */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-packaging-oclock-custom-food',
                category: 'package',
                title: "Packaging O'Clock — Custom Food Packaging Suite",
                subtitle: 'Sandwich, Burger, Fries, Popcorn & Drink Packaging System',
                image: packageDesignPackagingOclockCustomFood,
                client: 'Packaging O Clock',
                dimensions: 'Complete Food Takeaway Packaging System'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignPackagingOclockCustomFood}
                alt="Packaging O'Clock Custom Food Packaging Suite"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 28: Two Brothers Organic Farms Faral Box */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-two-brothers-faral-box',
                category: 'package',
                title: 'Two Brothers Organic Farms — Diwali Faral Festive Gift Box',
                subtitle: 'Festive Sweet & Snack Floral Box Packaging Design',
                image: packageDesignTwoBrothersFaralBox,
                client: 'Two Brothers Organic Farms',
                dimensions: 'Rigid Festive Gift Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignTwoBrothersFaralBox}
                alt="Two Brothers Organic Farms Faral Gift Box Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 29: Brijwasi Atta Ladoo */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-brijwasi-atta-ladoo',
                category: 'package',
                title: 'Brijwasi — Atta Ladoo Sweet Packaging & Poster Campaign',
                subtitle: 'Traditional Indian Sweet Box & Mathura Heritage Branding',
                image: packageDesignBrijwasiAttaLadoo,
                client: 'Brijwasi Sweets',
                dimensions: 'Sweet Box Packaging & Poster Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignBrijwasiAttaLadoo}
                alt="Brijwasi Atta Ladoo Sweet Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 30: Brijwasi Kaju Burfi */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-brijwasi-kaju-burfi',
                category: 'package',
                title: 'Brijwasi — Kaju Burfi Royal Purple Sweet Packaging',
                subtitle: 'Premium Cashew Sweet Box & Heritage Branding Design',
                image: packageDesignBrijwasiKajuBurfi,
                client: 'Brijwasi Sweets',
                dimensions: 'Luxury Sweet Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignBrijwasiKajuBurfi}
                alt="Brijwasi Kaju Burfi Sweet Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 31: Brijwasi Boondi Ladoo */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-brijwasi-boondi-ladoo',
                category: 'package',
                title: 'Brijwasi — Boondi Ladoo Magenta Festive Sweet Packaging',
                subtitle: 'Gram Pulse Flour & Saffron Sweet Box Packaging Design',
                image: packageDesignBrijwasiBoondiLadoo,
                client: 'Brijwasi Sweets',
                dimensions: 'Festive Sweet Box Packaging'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignBrijwasiBoondiLadoo}
                alt="Brijwasi Boondi Ladoo Sweet Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 32: Master Cook Instant Homestyle Upma & Poha */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-master-cook-upma-poha',
                category: 'package',
                title: 'Master Cook — Instant Homestyle Upma & Poha Pouches',
                subtitle: 'Fresh Lock Technology Ready-to-Eat Food Stand-Up Pouches',
                image: packageDesignMasterCookUpmaPoha,
                client: 'Master Cook Foods',
                dimensions: 'Stand-Up Foil Pouch Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignMasterCookUpmaPoha}
                alt="Master Cook Instant Homestyle Upma & Poha Pouches"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 33: Happy Joy Potato Chips */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-happy-joy-potato-chips',
                category: 'package',
                title: 'Happy Joy — Perfectly Salty Potato Chips Packaging Suite',
                subtitle: 'Crispy Snack Foil Bag, Dieline Spread & Brand Graphic Identity',
                image: packageDesignHappyJoyPotatoChips,
                client: 'Happy Joy Snacks',
                dimensions: '8 oz Potato Chips Foil Bag & Brand Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignHappyJoyPotatoChips}
                alt="Happy Joy Potato Chips Packaging Suite"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 34: We Go Takeaway Cup Holder Box */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-we-go-cup-holder-box',
                category: 'package',
                title: 'We Go — Takeaway Coffee & Drink Cup Holder Box',
                subtitle: 'Foldable Handle Cup Carrier Box Technical Dieline & 3D Spread',
                image: packageDesignWeGoCupHolderBox,
                client: 'We Go Coffee & Beverages',
                dimensions: '4-10 Cup Takeaway Carrier Box Dielines'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignWeGoCupHolderBox}
                alt="We Go Takeaway Cup Holder Box Packaging"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Package 35: Milkshakes Strawberry & Apple Character Cartons */}
            <div 
              onClick={() => setSelectedItem({
                id: 'pkg-milkshakes-character-cartons',
                category: 'package',
                title: 'Milkshakes — Strawberry & Apple Character Milk Cartons',
                subtitle: 'Playful Panda & Fox Character Mini Milk Carton Packaging System',
                image: packageDesignMilkshakesCharacterCartons,
                client: 'Milkshakes Beverage Co.',
                dimensions: 'Mini Gable-Top Character Milk Carton Suite'
              })}
              className="group cursor-pointer w-full flex justify-center items-center"
            >
              <img
                src={packageDesignMilkshakesCharacterCartons}
                alt="Milkshakes Strawberry & Apple Character Cartons"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. STANDEE DESIGN SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'standee') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-14 relative z-10">
          
          {/* Header Typography with Exactly One Space Gap */}
          <div className="mb-10 flex items-baseline flex-wrap">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-sans select-none leading-none">
              Standee
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#88D900] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
              Design
            </span>
          </div>

          {/* 4 Standee Banner Mockups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-end">
            {standees.map((standee, idx) => (
              <motion.div
                key={standee.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(standee)}
                className="group cursor-pointer flex flex-col items-center w-full"
              >
                {/* Top Rail */}
                <div className="w-[88%] h-3 bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 rounded-t-sm shadow-md border-b border-gray-600 z-10" />

                {/* Roll-up Banner Canvas */}
                <div className="w-[90%] aspect-[9/19.5] bg-gray-900 relative overflow-hidden rounded-sm border-2 border-gray-400/80 shadow-2xl">
                  <img
                    src={standee.image}
                    alt={standee.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/12 via-transparent to-black/25 opacity-55 pointer-events-none" />
                </div>

                {/* Base Stand */}
                <div className="w-[96%] flex flex-col items-center mt-0.5">
                  <div className="w-full h-5.5 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 rounded-b-md shadow-xl border-t border-gray-400 flex items-center justify-around px-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  </div>
                  <div className="flex justify-between w-[90%] -mt-0.5">
                    <div className="w-7 h-2 bg-gray-800 rounded-b-sm shadow-md" />
                    <div className="w-7 h-2 bg-gray-800 rounded-b-sm shadow-md" />
                  </div>
                </div>

                {/* Ground Shadow */}
                <div className="w-[85%] h-3.5 bg-black/25 rounded-full blur-md mt-1.5 group-hover:w-[92%] transition-all" />
              </motion.div>
            ))}
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. INVITE DESIGNS SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'invite') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-14 relative z-10">
          
          {/* Header Typography with Exactly One Space Gap */}
          <div className="mb-10 flex items-baseline flex-wrap">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight font-sans select-none leading-none">
              Invite
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#88D900] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
              Designs
            </span>
          </div>

          {/* 5 Invite Images displayed naturally with original aspect ratio & clean presentation (no box section frames) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            {invites.map((invite, idx) => (
              <motion.div
                key={invite.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedItem(invite)}
                className="group cursor-pointer flex flex-col items-center w-full"
              >
                {/* Pure Image retaining natural aspect ratio without artificial box section framing */}
                <div className="w-full relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 group-hover:shadow-[0_15px_35px_rgba(136,217,0,0.2)]">
                  <img
                    src={invite.image}
                    alt={invite.title}
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      )}

      {/* Clean Image-Only Lightbox Overlay with Opening Animation */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out overflow-hidden select-none"
          >
            {/* Top Right Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="fixed top-5 right-5 sm:top-6 sm:right-6 z-[110] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Close"
              title="Close"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Direct Centered Image inside Flexbox Overlay Container */}
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              src={selectedItem.fullMockupImage || selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] select-none pointer-events-auto block"
              style={{ imageRendering: 'high-quality' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MoreCreativeWorksSection;
