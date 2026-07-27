import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, ArrowRight, Star, Heart, CheckCircle2 } from 'lucide-react';
import creamyImg from '../assets/project_creamy.png';

export const CreamyShowcase: React.FC = () => {
  const [selectedWeight, setSelectedWeight] = useState('100g');

  return (
    <div className="w-full bg-[#52B788] text-white rounded-[32px] overflow-hidden relative font-sans shadow-2xl">
      
      {/* Top Navbar inside Viewport Frame */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
        <span className="font-heading font-black text-2xl tracking-tight text-white">
          Creamy
        </span>

        {/* Floating Pill Nav Menu */}
        <div className="hidden sm:flex items-center gap-6 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-heading font-extrabold uppercase tracking-wider">
          <span className="px-3.5 py-1 rounded-full bg-black text-white font-black cursor-pointer">HOME</span>
          <span className="hover:text-black cursor-pointer transition-colors">MENU</span>
          <span className="hover:text-black cursor-pointer transition-colors">ABOUT</span>
          <span className="hover:text-black cursor-pointer transition-colors">CONTACT</span>
        </div>

        {/* Cart & Profile Badges */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center relative cursor-pointer">
            <ShoppingBag className="w-4 h-4 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-extrabold flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Hero Body Content */}
      <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column Text & Action Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-4xl sm:text-6xl leading-[1.02] tracking-tight text-white"
          >
            Taste Joy in <br />
            Every Bite
          </motion.h1>

          <p className="text-xs sm:text-sm text-white/95 max-w-md leading-relaxed font-semibold">
            They aren't just about incredible taste, they're designed for your well-being. With immersive flavor pairings and zero sugar options.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="px-7 py-3.5 rounded-full bg-white text-[#2D6A4F] font-heading font-black text-xs uppercase tracking-wider shadow-lg hover:bg-gray-100 transition-all">
              ORDER NOW
            </button>
            <button className="px-7 py-3.5 rounded-full bg-[#1B4332] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md hover:bg-black transition-all">
              SEE MENU ITEMS
            </button>
          </div>
        </div>

        {/* Right Column: 3D Product Tubs & Flavor Weights */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          
          {/* Weight Selectors (Top Right) */}
          <div className="self-end flex items-center gap-2 mb-4">
            {['50g', '100g', '500g'].map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                className={`px-3.5 py-1 rounded-full text-[11px] font-heading font-extrabold transition-all ${
                  selectedWeight === w
                    ? 'bg-white text-[#2D6A4F] shadow-md scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          {/* Product Image Mockup Showcase */}
          <div className="relative w-full max-w-md h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <img
              src={creamyImg}
              alt="Nick's Mint Chokladchip Ice Cream"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

      {/* Bottom Organic Wave Curve Section (Cream Background) */}
      <div className="relative bg-[#FFF9ED] text-[#1F1916] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 -mt-6">
        
        {/* Customer Review Avatar Stack */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              SJ
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              AR
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              MK
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-heading font-black text-gray-900 block leading-tight">
              10K+ Reviews
            </span>
            <span className="text-[10px] text-gray-600 font-semibold">
              Customers are satisfied
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
