import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import brandNamoNakodaRealty from '../assets/brand_namo_nakoda_realty.png';
import brandBowlFul from '../assets/brand_bowl_ful.png';
import brandPrakashBhatewaraGroup from '../assets/brand_prakash_bhatewara_group.png';
import brandLecheBoom from '../assets/brand_leche_boom.png';
import brandBrijwasi from '../assets/brand_brijwasi.png';
import brandScoopa from '../assets/brand_scoopa.png';
import brandLivore from '../assets/brand_livore.png';
import brandSwasthi from '../assets/brand_swasthi.png';
import brandSaregama from '../assets/brand_saregama.png';
import brandDistrictZomato from '../assets/brand_district_zomato.png';
import brandCrumo from '../assets/brand_crumo.png';
import brandWanderVista from '../assets/brand_wandervista.png';
import brandKalakrutiDesigns from '../assets/brand_kalakruti_designs.png';
import brandDravidam from '../assets/brand_dravidam.png';
import brandCleanMaxSolar from '../assets/brand_cleanmax_solar.png';
import brandRamkyGroup from '../assets/brand_ramky_group.png';
import brandManaVuuruRuchulu from '../assets/brand_mana_vuuru_ruchulu.png';
import brandGlobalDegrees from '../assets/brand_global_degrees.png';
import brandTheBearHouse from '../assets/brand_the_bear_house.png';

interface RealBrand {
  id: string;
  name: string;
  image: string;
}

const REAL_BRANDS: RealBrand[] = [
  { id: 'the-bear-house', name: 'The Bear House', image: brandTheBearHouse },
  { id: 'cleanmax-solar', name: 'CleanMax Solar', image: brandCleanMaxSolar },
  { id: 'ramky-group', name: 'Ramky Group', image: brandRamkyGroup },
  { id: 'mana-vuuru-ruchulu', name: 'Mana Vuuru Ruchulu', image: brandManaVuuruRuchulu },
  { id: 'global-degrees', name: 'Global Degrees', image: brandGlobalDegrees },
  { id: 'kalakruti-designs', name: 'Kalakruti Designs', image: brandKalakrutiDesigns },
  { id: 'dravidam', name: 'Dravidam South Indian Kitchen', image: brandDravidam },
  { id: 'crumo', name: 'Crumo', image: brandCrumo },
  { id: 'wandervista', name: 'WanderVista', image: brandWanderVista },
  { id: 'saregama', name: 'Saregama', image: brandSaregama },
  { id: 'district-zomato', name: 'District by Zomato', image: brandDistrictZomato },
  { id: 'namo-nakoda-realty', name: 'Namo Nakoda Realty', image: brandNamoNakodaRealty },
  { id: 'bowl-ful', name: 'BOWL FUL', image: brandBowlFul },
  { id: 'prakash-bhatewara-group', name: 'Prakash Bhatewara Group', image: brandPrakashBhatewaraGroup },
  { id: 'leche-boom', name: 'Leche Boom', image: brandLecheBoom },
  { id: 'brijwasi', name: 'Brijwasi', image: brandBrijwasi },
  { id: 'scoopa', name: 'Scoopa', image: brandScoopa },
  { id: 'livore', name: 'Livore', image: brandLivore },
  { id: 'swasthi', name: 'Swasthi', image: brandSwasthi },
];

export const BrandsWorkedSection: React.FC = () => {
  // Multiply array by 2 for seamless 100% infinite marquee loop matching translateX(-50%)
  const duplicatedBrands = [
    ...REAL_BRANDS,
    ...REAL_BRANDS,
  ];

  return (
    <section id="brands" className="py-16 sm:py-24 bg-[#090909] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#88D900]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12"
      >
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>BRAND COLLABORATIONS</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            BRANDS <span className="text-[#88D900]">WORKED WITH</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl px-2">
            Trusted by product leaders, founders, and marketing executives who experienced Nandini's visual design leadership firsthand.
          </p>
        </div>
      </motion.div>

      {/* Infinite Marquee Slider */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-4 sm:gap-6 animate-marquee py-2 sm:py-4">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="shrink-0 flex items-center justify-center w-[160px] min-[400px]:w-[190px] sm:w-[220px] h-[100px] sm:h-[140px] cursor-pointer group px-2"
            >
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain pointer-events-none group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
