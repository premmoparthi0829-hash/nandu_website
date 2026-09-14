import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, Image as ImageIcon, Layers, Upload, LayoutGrid } from 'lucide-react';

// Import assets
import brochure1HomeInterior from '../assets/brochure_1_home_interior.png';
import brochure2SavoreRestaurant from '../assets/brochure_2_savore_restaurant.png';
import brochure3PremiumLiving from '../assets/brochure_3_premium_living.png';
import brochure4WanderVistaTravel from '../assets/brochure_4_wandervista_travel.png';
import brochure5CodeVistaTech from '../assets/brochure_5_codevista_tech.png';
import brochure6RadianceBeauty from '../assets/brochure_6_radiance_beauty.png';
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
  category: 'billboard' | 'brochure' | 'standee';
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
  const [activeTab, setActiveTab] = useState<'all' | 'brochure' | 'billboard' | 'standee'>('all');
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);

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
      title: 'Rameshwar City — Luxury Bunglow Billboard',
      subtitle: 'Book Own Bunglow With 44 Lifestyle Amenities (2 & 3 BHK)',
      image: realEstatePhase1,
      client: 'Rameshwar Group',
      dimensions: '40ft x 20ft Highway Outdoor',
    },
    {
      id: 'bb-mangalam',
      category: 'billboard',
      title: 'Mangalam Jewelry — Festival Offer Billboard',
      subtitle: 'Upto 25% Off Exchange Value Campaign',
      image: brandStrongerAnt,
      client: 'Mangalam Jewellers',
      dimensions: '30ft x 15ft Roadside Banner',
    },
    {
      id: 'bb-ankur',
      category: 'billboard',
      title: 'Ankur Oil — Healthy Lifestyle City Billboard',
      subtitle: 'Swad ma Swasthya Lavo Brand Campaign',
      image: tropicalFruitJuiceTrophy,
      client: 'Ankur Industry',
      dimensions: '20ft x 10ft Urban Hoarding',
    },
  ];

  // Standee items
  const standees: CreativeItem[] = [
    {
      id: 'st-1',
      category: 'standee',
      title: 'Rameshwar — Bunglow Booking Standee',
      subtitle: '3.5 & 4.5 BHK Luxury Amenities',
      image: realEstatePhase1,
      client: 'Rameshwar City',
      dimensions: '3ft x 6ft Roll-Up Banner',
    },
    {
      id: 'st-2',
      category: 'standee',
      title: 'Equinoxx — Career On Freelancing',
      subtitle: 'Graphic Design & 3D Workshop Roll-Up',
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
    <section id="more-creative-works" className="w-full creative-paper-bg text-black relative py-14 sm:py-18 md:py-24 overflow-hidden border-t border-b border-gray-300">
      
      {/* Real Paper Grain & Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply pointer-events-none bg-repeat bg-[size:600px_600px] z-0"
        style={{ backgroundImage: `url(${wrinkledPaper})` }}
      />

      {/* Header & Controls Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-14 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-[#88D900] text-xs font-bold uppercase tracking-widest mb-4 shadow-lg"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>OOH & Print Graphic Design Portfolio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-black uppercase"
        >
          More <span className="text-[#62c100]">Creative Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="text-gray-700 font-medium text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-2.5"
        >
          Mockup gallery featuring opened bifold brochures, outdoor hoardings, and roll-up standees.
        </motion.p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-7">
          {[
            { id: 'all', label: 'All Creative Works', icon: LayoutGrid },
            { id: 'brochure', label: 'Brochures', icon: ImageIcon },
            { id: 'billboard', label: 'Billboards', icon: Layers },
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
                    ? 'bg-black text-[#88D900] shadow-xl scale-105 ring-2 ring-[#88D900]'
                    : 'bg-white/80 text-black border border-gray-300 hover:bg-black hover:text-white'
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
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-black tracking-tight font-sans select-none leading-none">
              Brochure
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-black select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#62c100] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
              Design
            </span>
          </div>

          {/* 6 Opened Brochure Spread Mockups directly sitting on paper background */}
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
                      className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105"
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
      {/* 2. BILL BOARD DESIGN SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'billboard') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-28 relative z-10">
          
          {/* Header Typography with Exactly One Space Gap */}
          <div className="mb-10 flex items-baseline flex-wrap">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-black tracking-tight font-sans select-none leading-none">
              Bill Board
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-black select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#62c100] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
              Design
            </span>
          </div>

          {/* Billboard Grid (1 Main Left + 2 Stacked Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Main Left Billboard Mockup */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedItem(billboards[0])}
              className="lg:col-span-7 group cursor-pointer relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_45px_-10px_rgba(0,0,0,0.32)] border-3 border-[#25272e] bg-[#1a1b20]">
                {/* Top Lights */}
                <div className="flex justify-around px-10 py-1 bg-[#1f2026]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-3.5 h-1.5 bg-yellow-400 rounded-b-sm shadow-[0_0_6px_#facc15]" />
                  ))}
                </div>

                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={billboards[0].image}
                    alt={billboards[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/20 opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Steel Legs */}
              <div className="flex justify-center items-center gap-20 mt-2">
                <div className="w-4.5 h-12 bg-gradient-to-b from-gray-700 to-black rounded-t-sm shadow-md" />
                <div className="w-7 h-14 bg-gradient-to-b from-gray-800 to-black rounded-t-sm shadow-lg" />
                <div className="w-4.5 h-12 bg-gradient-to-b from-gray-700 to-black rounded-t-sm shadow-md" />
              </div>
            </motion.div>

            {/* Right 2 Stacked Billboard Mockups */}
            <div className="lg:col-span-5 flex flex-col gap-7">
              {billboards.slice(1).map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.018 }}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-[0_16px_32px_-8px_rgba(0,0,0,0.28)] border-3 border-[#25272e] bg-[#1a1b20]"
                >
                  <div className="flex justify-around px-8 py-1 bg-[#1f2026]">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-3 h-1.5 bg-yellow-400 rounded-b-sm shadow-[0_0_5px_#facc15]" />
                    ))}
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. STANDEE DESIGN SECTION */}
      {/* ========================================================================= */}
      {(activeTab === 'all' || activeTab === 'standee') && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-14 relative z-10">
          
          {/* Header Typography with Exactly One Space Gap */}
          <div className="mb-10 flex items-baseline flex-wrap">
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-black tracking-tight font-sans select-none leading-none">
              Standee
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-black text-black select-none leading-none">&nbsp;</span>
            <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#62c100] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
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
              className="bg-[#141414] border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative"
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
                  <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700/80 bg-[#0e0f14]">
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
                    className="max-h-[60vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
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
