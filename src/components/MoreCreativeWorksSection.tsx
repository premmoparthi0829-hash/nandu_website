import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Image as ImageIcon, Layers, Upload, LayoutGrid, Package } from 'lucide-react';
import { ParticleWaveBackground } from './ParticleWaveBackground';

// Import assets
import brochure1HomeInterior from '../assets/brochure_1_home_interior.png';
import brochure2SavoreRestaurant from '../assets/brochure_2_savore_restaurant.png';
import brochure3PremiumLiving from '../assets/brochure_3_premium_living.png';
import brochure4WanderVistaTravel from '../assets/brochure_4_wandervista_travel.png';
import brochure5CodeVistaTech from '../assets/brochure_5_codevista_tech.png';
import brochure6RadianceBeauty from '../assets/brochure_6_radiance_beauty.png';
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
import realEstatePhase1 from '../assets/real_estate_phase_1.jpg';
import brandStrongerAnt from '../assets/brand_stronger_ant.jpg';
import sahibBarbequeBiryani from '../assets/sahib_barbeque_biryani.jpg';
import tropicalFruitJuiceTrophy from '../assets/tropical_fruit_juice_trophy.jpg';
import designsNotMachine from '../assets/designers_not_machine.jpg';
import dominateAttention from '../assets/dominate_attention.jpg';
import goaholiday from '../assets/goa_holiday_package.jpg';
import caffeineArmy from '../assets/caffeine_army.jpg';
import wrinkledPaper from '../assets/wrinkled_paper.png';

interface CreativeItem {
  id: string;
  category: 'billboard' | 'brochure' | 'package' | 'standee';
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
  const [activeTab, setActiveTab] = useState<'all' | 'brochure' | 'billboard' | 'package' | 'standee'>('all');
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);
  const [currentBillboardIndex, setCurrentBillboardIndex] = useState<number>(0);
  const [billboardDirection, setBillboardDirection] = useState<number>(1);

  // Brochure items (all use standalone high-res 3D PNG mockup images)
  const brochures: CreativeItem[] = [
    {
      id: 'br-1',
      category: 'brochure',
      title: 'Home Interior Design — Luxury Living Space',
      subtitle: 'Modern Minimalist Architecture Catalog',
      image: brochure1HomeInterior,
      fullMockupImage: brochure1HomeInterior,
      client: 'Livspace Interiors',
      dimensions: 'A4 Landscape Opened Spread',
    },
    {
      id: 'br-2',
      category: 'brochure',
      title: 'Savoré Restaurant — Menu & Brand Catalogue',
      subtitle: 'A Culinary Journey of Flavors & Menu Spread',
      image: brochure2SavoreRestaurant,
      fullMockupImage: brochure2SavoreRestaurant,
      client: 'Savoré Restaurant',
      dimensions: 'A4 Landscape Opened Spread',
    },
    {
      id: 'br-3',
      category: 'brochure',
      title: 'Premium Living Spaces — Discover A Better Tomorrow',
      subtitle: 'Modern Homes & Real Estate Luxury Brochure Spread',
      image: brochure3PremiumLiving,
      fullMockupImage: brochure3PremiumLiving,
      client: 'Premium Living Spaces',
      dimensions: 'A4 Landscape Opened Spread',
    },
    {
      id: 'br-4',
      category: 'brochure',
      title: 'WanderVista Travel Agency — Complete Travel Solutions',
      subtitle: 'Your Journey Our Passion & Popular Destinations Catalogue',
      image: brochure4WanderVistaTravel,
      fullMockupImage: brochure4WanderVistaTravel,
      client: 'WanderVista Travel',
      dimensions: 'A4 Landscape Opened Spread',
    },
    {
      id: 'br-5',
      category: 'brochure',
      title: 'CodeVista Technologies — Software Solutions Catalogue',
      subtitle: 'Technology That Turns Ideas Into Impact & Software Solutions',
      image: brochure5CodeVistaTech,
      fullMockupImage: brochure5CodeVistaTech,
      client: 'CodeVista Technologies',
      dimensions: 'A4 Landscape Opened Spread',
    },
    {
      id: 'br-6',
      category: 'brochure',
      title: 'Radiance Beauty Parlour — Professional Care Catalogue',
      subtitle: 'Reveal a More Beautiful You & Our Beauty Services Spread',
      image: brochure6RadianceBeauty,
      fullMockupImage: brochure6RadianceBeauty,
      client: 'Radiance Beauty Parlour',
      dimensions: 'A4 Landscape Opened Spread',
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
      image: designsNotMachine,
      client: 'Creative Studio',
      dimensions: '3ft x 6ft Roll-Up Standee Banner',
    },
    {
      id: 'st-2',
      category: 'standee',
      title: 'Dominate Attention — Graphic Design Career Standee',
      subtitle: 'Learn Professional Design & Elevate Brand Presence',
      image: brandStrongerAnt,
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

  return (
    <section id="more-creative-works" className="w-full bg-[#090909] text-white relative py-14 sm:py-18 md:py-24 overflow-hidden border-t border-white/10">
      
      {/* Dynamic Particle Wave Background Animation (Matches Skills Section) */}
      <ParticleWaveBackground className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70" />

      {/* Header & Controls Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-14 text-center relative z-10">
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-white uppercase"
        >
          More <span className="text-[#88D900]">Creative Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-gray-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-2.5"
        >
          Explore high-impact brochure spreads, outdoor billboards, and premium brand displays.
        </motion.p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-7">
          {[
            { id: 'brochure', label: 'Brochures', icon: ImageIcon },
            { id: 'billboard', label: 'Billboards', icon: Layers },
            { id: 'package', label: 'Package Design', icon: Package },
            { id: 'standee', label: 'Standees', icon: Upload },
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

          {/* 6 Opened Brochure Spread Mockups directly sitting on paper background - 3-Column Grid View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
            {brochures.map((brochure, idx) => (
              <motion.div
                key={brochure.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? -1.2 : 1.2 }}
                onClick={() => setSelectedItem(brochure)}
                className="group cursor-pointer relative"
              >
                {brochure.fullMockupImage ? (
                  /* Render Direct User Uploaded High-Res 3D PNG Mockup */
                  <div className="relative w-full overflow-visible">
                    <img
                      src={brochure.fullMockupImage}
                      alt={brochure.title}
                      className="w-full h-auto object-contain filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:scale-105"
                      style={{ imageRendering: 'high-quality', transform: 'translateZ(0)' }}
                    />
                  </div>
                ) : (
                  /* Render Bifold Spread Mockup matching user reference - Zero Gaps, Fully Fit Box */
                  <>
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_-8px_rgba(0,0,0,0.4)] border border-gray-400/50 bg-[#0e0f14] transition-all duration-300">
                      <div className="relative flex aspect-[1.75/1] w-full h-full overflow-hidden">
                        
                        {/* Left Page Spread */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                          <img
                            src={brochure.leftPageImage || brochure.image}
                            alt={`${brochure.title} Left Page`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 pointer-events-none" />
                        </div>

                        {/* Center Spine Line */}
                        <div className="w-[2px] bg-black/80 z-20 h-full shrink-0" />

                        {/* Right Page Spread */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                          <img
                            src={brochure.rightPageImage || brochure.image}
                            alt={`${brochure.title} Right Page`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 pointer-events-none" />
                        </div>

                        {/* Hover Overlay & Action */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                          <span className="p-3 bg-white/95 text-black rounded-full shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                            <Maximize2 className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Ground Shadow */}
                    <div className="w-[94%] h-3.5 bg-black/25 rounded-full blur-md mx-auto -mt-1 group-hover:w-[98%] group-hover:bg-black/40 transition-all" />
                  </>
                )}
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
                      loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
                loading="eager"
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
              className="group cursor-pointer w-full flex justify-center items-center md:col-span-2 md:max-w-[75%] md:mx-auto"
            >
              <img
                src={packageDesignPeanovaJar}
                alt="Peanova Peanut Butter Jar & Label Spread Package Design"
                className="max-w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="eager"
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

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141414] border border-white/20 rounded-2xl max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div>
                  <span className="text-xs font-bold text-[#88D900] uppercase tracking-wider">
                    {selectedItem.category.toUpperCase()} DESIGN • {selectedItem.client}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="p-4 sm:p-6 flex-1 overflow-auto flex items-center justify-center bg-black/60">
                {selectedItem.leftPageImage && selectedItem.rightPageImage ? (
                  <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700/80 bg-[#0e0f14]">
                    <div className="relative flex aspect-[1.75/1] w-full overflow-hidden">
                      <div className="w-1/2 h-full relative overflow-hidden">
                        <img src={selectedItem.leftPageImage} alt={`${selectedItem.title} Left`} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-[2px] bg-black/80 z-20 h-full shrink-0" />
                      <div className="w-1/2 h-full relative overflow-hidden">
                        <img src={selectedItem.rightPageImage} alt={`${selectedItem.title} Right`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedItem.fullMockupImage || selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    style={{ imageRendering: 'high-quality', transform: 'translateZ(0)' }}
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0d0d0d] flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                <div>
                  <p><strong className="text-white">Subtitle:</strong> {selectedItem.subtitle || 'Custom Design Concept'}</p>
                  <p><strong className="text-white">Format:</strong> {selectedItem.dimensions || 'High Resolution Print Ready'}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 bg-[#88D900] text-black font-extrabold rounded-full hover:bg-[#9EF01A] transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MoreCreativeWorksSection;
