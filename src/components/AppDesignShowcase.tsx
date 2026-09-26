import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Play,
  Search,
  Heart,
  User,
  Download,
  Film,
  Menu,
  ChevronRight,
  Star,
  Check,
  X,
  CreditCard,
  ShieldCheck,
  Bell,
  Globe,
  Settings,
  Trash2,
  Lock,
  ArrowLeft,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Info,
  SlidersHorizontal,
  Maximize2,
  ChevronLeft
} from 'lucide-react';

// Interfaces
export interface ScreenItem {
  id: string;
  title: string;
  subtitle: string;
  component: React.ReactNode;
}

// Phone Frame Wrapper Component
const PhoneMockup: React.FC<{
  children: React.ReactNode;
  time?: string;
  className?: string;
  onClick?: () => void;
  shadow?: boolean;
}> = ({ children, time = "10:30", className = "", onClick, shadow = true }) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-[240px] sm:w-[260px] md:w-[270px] aspect-[9/19.5] bg-[#0c0d10] rounded-[44px] p-[10px] sm:p-[12px] border-[3.5px] border-[#383a42] ring-1 ring-white/10 ${
        shadow ? 'shadow-[0_25px_60px_rgba(0,0,0,0.85)]' : ''
      } transition-transform duration-300 hover:scale-[1.02] cursor-pointer group flex flex-col overflow-hidden select-none ${className}`}
    >
      {/* Outer Metallic Chamfer Border */}
      <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none z-30" />

      {/* Side Buttons */}
      <div className="absolute -left-[5.5px] top-20 w-[3px] h-7 bg-[#484b54] rounded-l-sm" />
      <div className="absolute -left-[5.5px] top-32 w-[3px] h-11 bg-[#484b54] rounded-l-sm" />
      <div className="absolute -left-[5.5px] top-48 w-[3px] h-11 bg-[#484b54] rounded-l-sm" />
      <div className="absolute -right-[5.5px] top-28 w-[3px] h-14 bg-[#484b54] rounded-r-sm" />

      {/* Screen Inner Viewport */}
      <div className="relative w-full h-full bg-[#08090c] rounded-[34px] overflow-hidden flex flex-col text-white font-sans text-xs">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 w-[84px] h-[20px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
          <div className="w-2.5 h-2.5 rounded-full bg-[#16171a] border border-[#2a2b30]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0f1d] border border-[#1e263d] flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#3b82f6]/60" />
          </div>
        </div>

        {/* Top Status Bar */}
        <div className="relative z-30 w-full pt-2 px-5 pb-1 flex items-center justify-between text-[10px] font-semibold text-gray-300">
          <span>{time}</span>
          <div className="flex items-center gap-1.5 text-[9px]">
            <span>5G</span>
            <div className="w-3.5 h-2 rounded-[2px] border border-gray-300 p-[1px] flex items-center">
              <div className="w-full h-full bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content Container */}
        <div className="flex-1 w-full h-full overflow-y-auto no-scrollbar relative flex flex-col">
          {children}
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="relative z-40 w-full py-1.5 flex justify-center bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <div className="w-24 h-1 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INDIVIDUAL POPPY APP MOBILE UI SCREENS
// ============================================================================

// 1. Splash & Auth Landing Screen
const ScreenSplash: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col items-center justify-between p-5 text-center relative overflow-hidden">
    {/* Glowing Ambient Background Orbs */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-purple-700/20 via-blue-600/20 to-transparent blur-3xl pointer-events-none" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600/15 via-purple-900/20 to-transparent blur-2xl pointer-events-none" />

    <div className="w-full pt-12 flex flex-col items-center">
      {/* Poppy Brand Logo */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-[2px] shadow-[0_0_30px_rgba(124,58,237,0.5)] mb-4 flex items-center justify-center">
        <div className="w-full h-full bg-[#0c0c14] rounded-[14px] flex items-center justify-center">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-400 flex items-center justify-center shadow-inner transform rotate-12">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-black tracking-wider text-white font-sans">POPPY</h1>
      <p className="text-[10px] text-gray-400 mt-2 max-w-[170px] leading-relaxed">
        Enter your registered Phone Number to Sign Up
      </p>
    </div>

    <div className="w-full space-y-3 pb-4 z-10">
      <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-black font-bold text-xs shadow-lg hover:bg-white transition-all">
        Sign Up
      </button>

      <div className="text-[10px] text-gray-400">
        Existing account? <span className="text-white font-bold underline cursor-pointer">Log in</span>
      </div>

      <div className="flex items-center gap-2 my-2">
        <div className="flex-1 h-[1px] bg-gray-800" />
        <span className="text-[9px] text-gray-500 uppercase tracking-widest">Or Sign up with</span>
        <div className="flex-1 h-[1px] bg-gray-800" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
          <span className="font-bold text-xs text-red-400">G</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
          <span className="font-bold text-xs text-white">🍎</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
          <span className="font-bold text-xs text-blue-400">f</span>
        </div>
      </div>
    </div>
  </div>
);

// 2. Sign Up Form Screen
const ScreenSignUp: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col p-4 text-left relative overflow-hidden">
    <div className="flex items-center justify-between py-2">
      <ArrowLeft className="w-4 h-4 text-gray-300 cursor-pointer" />
      <span className="text-xs font-bold text-gray-200">Sign Up</span>
      <div className="w-4" />
    </div>

    <div className="mt-3 text-center">
      <h2 className="text-base font-black text-white">Let's get started</h2>
      <p className="text-[9px] text-gray-400 mt-0.5">
        Watch The Latest Movies, Drama's and Series are here
      </p>
    </div>

    <div className="mt-5 space-y-3 flex-1">
      <div>
        <label className="text-[9px] text-gray-400 block mb-1">Your name</label>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] text-gray-300">
          Momin Sam
        </div>
      </div>

      <div>
        <label className="text-[9px] text-gray-400 block mb-1">Your email</label>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] text-gray-300">
          mominsam9999@gmail.com
        </div>
      </div>

      <div>
        <label className="text-[9px] text-gray-400 block mb-1">Password</label>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] text-gray-300 flex items-center justify-between">
          <span>••••••••••••</span>
          <Lock className="w-3 h-3 text-gray-500" />
        </div>
      </div>

      <div>
        <label className="text-[9px] text-gray-400 block mb-1">Confirm Password</label>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] text-gray-300 flex items-center justify-between">
          <span>••••••••••••</span>
          <Lock className="w-3 h-3 text-gray-500" />
        </div>
      </div>

      <div className="flex items-start gap-1.5 pt-1">
        <div className="w-3 h-3 rounded bg-purple-600 flex items-center justify-center mt-0.5 flex-shrink-0">
          <Check className="w-2 h-2 text-white" />
        </div>
        <p className="text-[8px] text-gray-400 leading-tight">
          I agree to the <span className="text-white underline">Terms and Services</span> and <span className="text-white underline">Privacy Policy</span>
        </p>
      </div>
    </div>

    <button className="w-full py-2.5 rounded-full bg-white text-black font-bold text-xs shadow-lg mt-3">
      Sign Up
    </button>
  </div>
);

// 3. Login Screen
const ScreenLogin: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col p-4 text-left relative overflow-hidden">
    <div className="flex items-center justify-between py-2">
      <ArrowLeft className="w-4 h-4 text-gray-300 cursor-pointer" />
      <span className="text-xs font-bold text-gray-200">Login</span>
      <div className="w-4" />
    </div>

    <div className="mt-4 text-center">
      <h2 className="text-lg font-black text-white">Hi, Sam</h2>
      <p className="text-xs text-purple-400 font-semibold">Welcome back!</p>
      <p className="text-[9px] text-gray-400 mt-1 max-w-[180px] mx-auto">
        Log is to Poppy using your social account or email to continue us
      </p>
    </div>

    {/* Social Logins */}
    <div className="flex justify-center items-center gap-3 my-4">
      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
        <span className="font-bold text-xs text-red-400">G</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
        <span className="font-bold text-xs text-white">🍎</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
        <span className="font-bold text-xs text-blue-400">f</span>
      </div>
    </div>

    <div className="space-y-3 flex-1">
      <div>
        <label className="text-[9px] text-gray-400 block mb-1">Your email</label>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] text-gray-300">
          mominsam9999@gmail.com
        </div>
      </div>

      <div>
        <label className="text-[9px] text-gray-400 block mb-1">Password</label>
        <div className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[10px] text-gray-300 flex items-center justify-between">
          <span>••••••••••••</span>
          <Lock className="w-3 h-3 text-gray-500" />
        </div>
      </div>
    </div>

    <div className="text-center my-2">
      <span className="text-[9px] text-gray-400 hover:text-white cursor-pointer">Forgot password?</span>
    </div>

    <button className="w-full py-2.5 rounded-full bg-white text-black font-bold text-xs shadow-lg">
      Log In
    </button>
  </div>
);

// 4. Home Streaming Dashboard Screen
const ScreenHome: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col text-left relative overflow-hidden pb-10">
    {/* Top Bar */}
    <div className="p-3 flex items-center justify-between border-b border-white/5">
      <Menu className="w-4 h-4 text-gray-300 cursor-pointer" />
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 rounded-md bg-purple-600 flex items-center justify-center">
          <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
        </div>
        <span className="font-black text-xs tracking-wider">POPPY</span>
      </div>
      <div className="flex items-center gap-2">
        <Search className="w-3.5 h-3.5 text-gray-300" />
        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
      </div>
    </div>

    {/* Category Pills */}
    <div className="flex items-center gap-1.5 px-3 py-2 overflow-x-auto no-scrollbar">
      {['All', 'Movies', 'Tv shows', 'Drama', 'Comedy'].map((cat, idx) => (
        <span
          key={cat}
          className={`px-2.5 py-1 rounded-full text-[9px] font-bold whitespace-nowrap ${
            idx === 0
              ? 'bg-white text-black'
              : 'bg-white/10 text-gray-400 hover:text-white'
          }`}
        >
          {cat}
        </span>
      ))}
    </div>

    {/* Featured Hero Banner */}
    <div className="mx-3 my-1 relative rounded-xl overflow-hidden aspect-[16/9] bg-gradient-to-t from-black via-purple-950/40 to-slate-900 border border-white/10 flex flex-col justify-end p-2.5 shadow-lg group">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-black/60 to-transparent z-10" />
      <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded-full bg-amber-500/90 text-[8px] font-bold text-black flex items-center gap-1">
        <Star className="w-2 h-2 fill-black" />
        <span>With Subscription</span>
      </div>

      <div className="relative z-20">
        <h3 className="text-xs font-black text-white leading-tight">Mirzapur : New Season</h3>
        <p className="text-[8px] text-gray-300 mt-0.5">Crime • Drama • Action</p>
      </div>

      <div className="absolute bottom-1 right-2 z-20 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </div>
    </div>

    {/* Most Popular Section */}
    <div className="px-3 mt-2">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-bold text-white">Most popular</span>
        <span className="text-[8px] font-semibold text-purple-400 cursor-pointer">See All</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { title: 'FARZI', score: '4.3', tag: 'Farzi', bg: 'from-amber-900/80 to-purple-950' },
          { title: 'KERALA STORY', score: '4.5', tag: 'The kerala story', bg: 'from-emerald-950 to-slate-900' },
          { title: 'PANCHAYAT', score: '4.8', tag: 'Panchayat', bg: 'from-blue-950 to-indigo-950' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col">
            <div className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${item.bg} border border-white/10 p-1.5 flex flex-col justify-between relative overflow-hidden shadow-md`}>
              <div className="flex justify-end">
                <span className="text-[7px] bg-black/60 backdrop-blur-md px-1 py-0.5 rounded text-amber-400 font-bold flex items-center gap-0.5">
                  ★ {item.score}
                </span>
              </div>
              <span className="text-[8px] font-black tracking-tighter text-white leading-none">
                {item.title}
              </span>
            </div>
            <span className="text-[8px] font-semibold text-gray-300 mt-1 truncate">{item.tag}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Latest Movies Section */}
    <div className="px-3 mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-bold text-white">Latest movies</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { title: 'KALKI', bg: 'from-amber-950 to-black' },
          { title: 'MAHARAJA', bg: 'from-[#1c120c] to-[#0a0a0f]' },
          { title: 'KUNG FU PANDA', bg: 'from-emerald-900 to-black' },
        ].map((item, i) => (
          <div key={i} className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${item.bg} border border-white/10 p-1.5 flex flex-col justify-end relative overflow-hidden shadow-md`}>
            <span className="text-[8px] font-black text-white">{item.title}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Fixed Nav Bar */}
    <div className="absolute bottom-0 inset-x-0 bg-black/90 backdrop-blur-md border-t border-white/10 px-4 py-1.5 flex items-center justify-between text-gray-400 z-30">
      <div className="flex flex-col items-center text-white">
        <div className="p-1 rounded-full bg-white/20">
          <Film className="w-3 h-3" />
        </div>
        <span className="text-[7px] font-bold mt-0.5">Home</span>
      </div>
      <div className="flex flex-col items-center hover:text-white">
        <Search className="w-3.5 h-3.5" />
      </div>
      <div className="flex flex-col items-center hover:text-white">
        <Download className="w-3.5 h-3.5" />
      </div>
      <div className="flex flex-col items-center hover:text-white">
        <User className="w-3.5 h-3.5" />
      </div>
    </div>
  </div>
);

// 5. Movie Detail Screen (Kung Fu Panda 4)
const ScreenMovieDetail: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col text-left relative overflow-hidden">
    {/* Top Action Controls */}
    <div className="absolute top-2 inset-x-0 px-3 z-30 flex items-center justify-between">
      <div className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
        <ArrowLeft className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
        <Heart className="w-3.5 h-3.5 text-white" />
      </div>
    </div>

    {/* Poster Image Hero */}
    <div className="w-full aspect-[4/5] relative bg-gradient-to-b from-amber-600/30 via-emerald-950 to-[#060709] border-b border-white/10 flex items-center justify-center">
      <div className="w-3/4 aspect-[3/4] rounded-xl bg-gradient-to-tr from-emerald-600 via-amber-500 to-yellow-300 p-2 shadow-2xl flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center mb-2">
          <Play className="w-6 h-6 text-yellow-400 fill-yellow-400 ml-1" />
        </div>
        <span className="font-black text-sm text-black uppercase tracking-tight leading-tight">
          KUNG FU PANDA 4
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-transparent" />
    </div>

    {/* Content Details */}
    <div className="p-3 -mt-6 relative z-20 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 text-[8px] text-gray-400 font-semibold mb-2">
          <span className="px-1.5 py-0.5 rounded bg-white/10 text-white">2024</span>
          <span>•</span>
          <span>94 Minutes</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">Adventure</span>
        </div>

        {/* Big Play Button */}
        <button className="w-full py-2.5 rounded-full bg-white text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-lg mb-3">
          <Play className="w-3.5 h-3.5 fill-black" />
          <span>Play</span>
        </button>

        {/* Actions Bar */}
        <div className="flex justify-around items-center py-2 border-y border-white/10 text-[8px] text-gray-400">
          <div className="flex flex-col items-center cursor-pointer hover:text-white">
            <Film className="w-3.5 h-3.5 mb-0.5" />
            <span>Trailer</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-white">
            <ThumbsUp className="w-3.5 h-3.5 mb-0.5" />
            <span>Like</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-white">
            <ThumbsDown className="w-3.5 h-3.5 mb-0.5" />
            <span>Dislike</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-white">
            <Download className="w-3.5 h-3.5 mb-0.5" />
            <span>Download</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-white">
            <Share2 className="w-3.5 h-3.5 mb-0.5" />
            <span>Share</span>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mt-2.5">
          <h4 className="text-[9px] font-bold text-white mb-1">Synopsis</h4>
          <p className="text-[8px] text-gray-400 leading-relaxed line-clamp-3">
            Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going. <span className="text-purple-400 font-bold">More</span>
          </p>
        </div>

        {/* IMDb & Languages */}
        <div className="mt-2 text-[8px] text-gray-400 space-y-0.5">
          <div><span className="text-white font-bold">IMDb:</span> 6.3</div>
          <div><span className="text-white font-bold">Languages:</span> Audio (3), Subtitles (2)</div>
        </div>
      </div>
    </div>
  </div>
);

// 6. Trailer Player Screen
const ScreenTrailerPlayer: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col text-left relative overflow-hidden">
    {/* Video Player Box */}
    <div className="w-full aspect-[16/9] bg-black relative border-b border-white/10 flex items-center justify-center group">
      <div className="absolute inset-0 bg-gradient-to-tr from-red-950/60 via-black to-slate-900" />
      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center z-10">
        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
      </div>

      {/* Scrubber Bar */}
      <div className="absolute bottom-1 inset-x-2 flex items-center gap-1.5 text-[7px] text-gray-300 z-10">
        <span>1:05</span>
        <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="w-1/2 h-full bg-purple-500 rounded-full" />
        </div>
        <span>2:23</span>
      </div>
    </div>

    {/* Cast & Crew Section */}
    <div className="p-3 flex-1 flex flex-col justify-between">
      <div>
        <h4 className="text-[10px] font-bold text-white mb-2">Cast and Crew</h4>

        <div className="space-y-2">
          {[
            { name: 'Jack Black', role: 'Panda Po' },
            { name: 'Dustin Hoffman', role: 'Master Shifu' },
            { name: 'Viola Davis', role: 'Chameleon' },
            { name: 'Ian McShane', role: 'Tai Lung' },
          ].map((cast, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[8px] font-bold text-white">
                {cast.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="text-[8px] font-bold text-white leading-none">{cast.name}</div>
                <div className="text-[7px] text-gray-400">{cast.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-3">
        <div className="flex gap-3 border-b border-white/10 pb-1 text-[8px] font-bold text-gray-400">
          <span className="text-white border-b border-purple-500 pb-1">Related</span>
          <span>Explore</span>
          <span>More Details</span>
        </div>

        {/* Small Poster Carousel */}
        <div className="grid grid-cols-3 gap-1.5 mt-2">
          {[1, 2, 3].map((num) => (
            <div key={num} className="aspect-[3/4] rounded bg-gradient-to-br from-amber-900 to-black p-1 flex items-end border border-white/10">
              <span className="text-[6px] font-bold text-white">KUNG FU {num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// 7. Search & Discovery Screen
const ScreenSearch: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col p-3 text-left relative overflow-hidden">
    {/* Search Input Bar */}
    <div className="w-full bg-white/10 border border-white/15 rounded-xl px-3 py-2 flex items-center gap-2 text-gray-400 text-[9px] mb-3">
      <Search className="w-3 h-3 text-gray-400" />
      <span className="truncate">Type name, actor, title...</span>
    </div>

    {/* Category Pills */}
    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mb-3">
      {['All', 'Movies', 'Tv shows', 'Drama', 'Comedy'].map((cat, idx) => (
        <span
          key={cat}
          className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${
            idx === 0 ? 'bg-white text-black' : 'bg-white/10 text-gray-400'
          }`}
        >
          {cat}
        </span>
      ))}
    </div>

    {/* Genres Tag Grid */}
    <div className="mb-3">
      <span className="text-[9px] font-bold text-gray-300 block mb-1.5">Genres</span>
      <div className="grid grid-cols-2 gap-1.5">
        {['Action', 'Adventure', 'Drama', 'Comedy', 'Fantasy', 'Anime'].map((g) => (
          <div key={g} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center text-[8px] font-bold text-gray-200 hover:bg-white/10 cursor-pointer">
            {g}
          </div>
        ))}
      </div>
    </div>

    {/* Recommended Section */}
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[9px] font-bold text-white">Recommend for you</span>
        <span className="text-[7px] text-purple-400 font-semibold">See All</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border border-white/10 p-1.5 flex items-end">
          <span className="text-[8px] font-black text-white">THE BOYS</span>
        </div>
        <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-red-950 to-slate-900 border border-white/10 p-1.5 flex items-end">
          <span className="text-[8px] font-black text-white">FAST X</span>
        </div>
      </div>
    </div>
  </div>
);

// 8. User Profile & Settings Screen
const ScreenProfile: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col p-3 text-left relative overflow-hidden">
    {/* User Card */}
    <div className="flex items-center gap-2.5 p-2 bg-white/5 border border-white/10 rounded-xl mb-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px]">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold text-white">
          S
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-[10px] font-bold text-white leading-none">Momin Sam</h3>
        <p className="text-[7px] text-gray-400 mt-0.5">mominsam9999@gmail.com</p>
      </div>
    </div>

    {/* Premium Member Banner */}
    <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black mb-3 shadow-lg">
      <div className="flex items-center gap-1 text-[9px] font-black">
        <Star className="w-3 h-3 fill-black" />
        <span>Premium Member</span>
      </div>
      <p className="text-[7.5px] font-semibold mt-0.5 text-black/90">
        New movies are coming for you, Download Now!
      </p>
    </div>

    {/* Settings Lists */}
    <div className="space-y-3 text-[8.5px]">
      <div>
        <span className="text-gray-400 font-bold block mb-1">Account</span>
        <div className="space-y-1">
          <div className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-3 h-3 text-gray-400" />
              <span className="text-gray-200">Member</span>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>
          <div className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-gray-400" />
              <span className="text-gray-200">Change Password</span>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>
        </div>
      </div>

      <div>
        <span className="text-gray-400 font-bold block mb-1">General</span>
        <div className="space-y-1">
          <div className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-3 h-3 text-gray-400" />
              <span className="text-gray-200">Notification</span>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>
          <div className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-gray-400" />
              <span className="text-gray-200">Language</span>
            </div>
            <ChevronRight className="w-3 h-3 text-gray-500" />
          </div>
          <div className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trash2 className="w-3 h-3 text-red-400" />
              <span className="text-red-400 font-bold">Clear Cache</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 9. Payment Method Checkout Screen
const ScreenPayment: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col p-3 text-left relative overflow-hidden">
    <div className="flex items-center justify-between py-1 mb-2">
      <ArrowLeft className="w-3.5 h-3.5 text-gray-300" />
      <span className="text-[10px] font-bold text-white">Payment Method</span>
      <div className="w-3.5" />
    </div>

    <div className="text-center my-2">
      <h3 className="text-xs font-black text-white">Choose to PAY</h3>
      <p className="text-[7.5px] text-gray-400 max-w-[170px] mx-auto mt-0.5">
        Your payment is encrypted and you change your payment method at anytime.
      </p>
    </div>

    <div className="space-y-2.5 my-3 flex-1">
      {/* Credit / Debit Option */}
      <div className="p-2.5 bg-white/5 border border-white/15 rounded-xl">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8.5px] font-bold text-white">Credit or Debit Card</span>
          <div className="w-3 h-3 rounded-full border border-gray-400" />
        </div>
        <div className="flex gap-2 items-center text-[7px] text-gray-400 font-semibold">
          <span className="px-1 py-0.5 bg-blue-600/30 text-blue-400 rounded">VISA</span>
          <span className="px-1 py-0.5 bg-red-600/30 text-red-400 rounded">MasterCard</span>
        </div>
      </div>

      {/* UPI Autopay Option */}
      <div className="p-2.5 bg-white/5 border border-purple-500/50 rounded-xl bg-purple-950/20">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[8.5px] font-bold text-white">UPI Autopay</span>
          <div className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center">
            <Check className="w-2 h-2 text-white" />
          </div>
        </div>
        <div className="flex gap-1.5 text-[6.5px] text-gray-300 font-bold">
          <span className="px-1 py-0.5 bg-white/10 rounded">GPay</span>
          <span className="px-1 py-0.5 bg-white/10 rounded">PhonePe</span>
          <span className="px-1 py-0.5 bg-white/10 rounded">Paytm</span>
        </div>
      </div>

      <button className="w-full py-2 border border-dashed border-white/20 rounded-xl text-[8px] font-bold text-gray-300 flex items-center justify-center gap-1 hover:bg-white/5">
        <span>+ Add New</span>
      </button>
    </div>

    <button className="w-full py-2.5 rounded-full bg-white text-black font-bold text-xs shadow-lg">
      Purchase Now
    </button>
  </div>
);

// 10. Offline Downloads Screen
const ScreenDownloads: React.FC = () => (
  <div className="flex-1 bg-[#060709] flex flex-col p-3 text-left relative overflow-hidden">
    <div className="flex items-center justify-between py-1 border-b border-white/10 mb-3">
      <ArrowLeft className="w-3.5 h-3.5 text-gray-300" />
      <span className="text-[10px] font-bold text-white">Download</span>
      <div className="w-3.5" />
    </div>

    <div className="space-y-2">
      <div className="p-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2.5">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-900 to-black p-1 flex items-center justify-center text-[7px] font-bold text-white border border-white/10">
          MONEY HEIST
        </div>

        <div className="flex-1">
          <h4 className="text-[8.5px] font-bold text-white leading-tight">Money Heist : Season 1</h4>
          <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
            <div className="w-3/4 h-full bg-purple-500 rounded-full" />
          </div>
          <span className="text-[7px] text-gray-400 mt-0.5 block">1.28 GB of 1.78 GB</span>
        </div>

        <button className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white">
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

// Array of all 10 screens for the Gallery Grid
const screensList: ScreenItem[] = [
  { id: 'splash', title: 'Splash / Auth', subtitle: 'Onboarding & Social Login', component: <ScreenSplash /> },
  { id: 'signup', title: 'Sign Up', subtitle: 'User Registration Form', component: <ScreenSignUp /> },
  { id: 'login', title: 'Login Screen', subtitle: 'Account Authentication', component: <ScreenLogin /> },
  { id: 'home', title: 'Home Dashboard', subtitle: 'Streaming Catalog & Hero', component: <ScreenHome /> },
  { id: 'detail', title: 'Movie Detail', subtitle: 'Kung Fu Panda 4 Overview', component: <ScreenMovieDetail /> },
  { id: 'trailer', title: 'Trailer Player', subtitle: 'Video Player & Cast Info', component: <ScreenTrailerPlayer /> },
  { id: 'search', title: 'Search & Discovery', subtitle: 'Filter by Genre & Actor', component: <ScreenSearch /> },
  { id: 'profile', title: 'User Profile', subtitle: 'Settings & Premium Status', component: <ScreenProfile /> },
  { id: 'payment', title: 'Payment Method', subtitle: 'Checkout & UPI Autopay', component: <ScreenPayment /> },
  { id: 'download', title: 'Downloads Manager', subtitle: 'Offline Content Progress', component: <ScreenDownloads /> },
];

// ============================================================================
// MAIN CASE STUDY COMPONENT (REPRODUCING USER'S DESIGN EXACTLY)
// ============================================================================
export const AppDesignShowcase: React.FC = () => {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[1440px] mx-auto my-16 px-4 sm:px-6 lg:px-10 text-black">
      {/* ------------------------------------------------------------------------ */}
      {/* BOARD 1: APP DESIGN CASE STUDY OVERVIEW (REPLICATING IMAGE 1) */}
      {/* ------------------------------------------------------------------------ */}
      <div className="w-full creative-paper-bg rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 lg:p-16 border border-gray-300/80 shadow-2xl relative overflow-hidden mb-16">
        
        {/* Title Header */}
        <div className="flex items-baseline flex-wrap mb-10">
          <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0f1115] tracking-tight font-sans select-none leading-none">
            App
          </span>
          <span className="text-5xl sm:text-6xl md:text-7xl font-black select-none leading-none">&nbsp;</span>
          <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#0284C7] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
            Design
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Client Case Study Details */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Client Headline */}
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#0284C7] tracking-tight">
                Client: Poppy
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-600 italic mt-0.5">
                Premium Movie & TV Streaming App
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium leading-relaxed max-w-xl mb-6">
              Poppy is a subscription-based movie and TV streaming app designed to deliver a seamless viewing experience across mobile, tablet, and smart TV platforms. The app aims to provide personalized recommendations, curated collections, and high-quality streaming with an intuitive user interface.
            </p>

            {/* Key Features Title */}
            <h4 className="text-xl sm:text-2xl font-black text-[#0284C7] tracking-tight mb-4">
              Key features
            </h4>

            {/* Key Features Bullet List */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-800 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Style:</strong> Minimalist, cinematic, bold visuals, immersive dark UI.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Target Audience:</strong> Age 16–45, globally distributed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Home screen</strong> with personalized recommendations and trending content.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Search & filter</strong> with genres, actors, and more.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Watchlist</strong> and continue watching sections.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Video player</strong> with subtitles, quality settings, and playback controls.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Content detail pages</strong> with trailers, cast info, and reviews.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0284C7] font-black text-base leading-none">•</span>
                <span><strong className="font-bold text-black">Subscription management</strong> and in-app purchases.</span>
              </li>
            </ul>

          </div>

          {/* Right Column: 3D Stage Pedestals & Dual Phone Mockups (Matching Image 1) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* 3D Dark Podium Base */}
            <div className="absolute bottom-0 w-full max-w-[460px] h-[100px] bg-gradient-to-b from-[#22242a] via-[#14151a] to-[#090a0d] rounded-t-3xl border-t-2 border-[#383c48] shadow-[0_30px_60px_rgba(0,0,0,0.6)] transform skew-x-[-12deg]" />
            <div className="absolute bottom-[-15px] right-2 w-[220px] h-[130px] bg-gradient-to-b from-[#2a2c35] to-[#0c0d10] rounded-t-3xl border-t-2 border-[#424756] shadow-[0_30px_60px_rgba(0,0,0,0.7)] transform skew-x-[-12deg]" />

            {/* Left Phone Mockup (Splash Screen) */}
            <div className="relative z-10 -mr-6 sm:-mr-10 transform hover:translate-y-[-8px] transition-transform duration-300">
              <PhoneMockup time="10:27" onClick={() => setSelectedScreenIndex(0)}>
                <ScreenSplash />
              </PhoneMockup>
            </div>

            {/* Right Elevated Phone Mockup (Home Streaming Dashboard) */}
            <div className="relative z-20 -mt-12 transform hover:translate-y-[-8px] transition-transform duration-300">
              <PhoneMockup time="10:30" onClick={() => setSelectedScreenIndex(3)}>
                <ScreenHome />
              </PhoneMockup>
            </div>

          </div>

        </div>

      </div>

      {/* ------------------------------------------------------------------------ */}
      {/* BOARD 2: MAIN SCREENS GRID SHOWCASE (REPLICATING IMAGE 2) */}
      {/* ------------------------------------------------------------------------ */}
      <div className="w-full creative-paper-bg rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 lg:p-16 border border-gray-300/80 shadow-2xl relative overflow-hidden">
        
        {/* Title Header */}
        <div className="flex items-baseline flex-wrap mb-12">
          <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0f1115] tracking-tight font-sans select-none leading-none">
            Main
          </span>
          <span className="text-5xl sm:text-6xl md:text-7xl font-black select-none leading-none">&nbsp;</span>
          <span className="font-creative-script text-5xl sm:text-6xl md:text-7xl text-[#0284C7] rotate-[-5deg] font-bold drop-shadow-sm select-none pointer-events-none -mt-2">
            Screens
          </span>
        </div>

        {/* 10 Core Mobile Screen Grid + Close-up Widget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
          
          {/* Render 10 Phones */}
          {screensList.map((screen, index) => (
            <div key={screen.id} className="flex flex-col items-center group">
              <PhoneMockup onClick={() => setSelectedScreenIndex(index)}>
                {screen.component}
              </PhoneMockup>
              <div className="mt-3 text-center">
                <span className="text-xs font-bold text-gray-900 group-hover:text-[#0284C7] transition-colors block">
                  {screen.title}
                </span>
                <span className="text-[10px] text-gray-500 font-medium block">
                  {screen.subtitle}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Close-up iPhone iOS Home Screen App Icon Frame (Matching Bottom Left of Image 2) */}
        <div className="mt-14 pt-10 border-t border-gray-300/60 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6">
            {/* Close-up Metallic Phone Frame Edge */}
            <div className="w-48 sm:w-56 h-32 rounded-2xl bg-[#111318] p-3 border-2 border-gray-700 shadow-xl overflow-hidden relative flex flex-col justify-end">
              {/* Dynamic Island Top */}
              <div className="absolute top-2 left-4 w-16 h-3.5 bg-black rounded-full" />
              <div className="absolute top-2.5 right-4 text-[9px] font-bold text-white">11:52</div>

              {/* iOS Home App Grid */}
              <div className="grid grid-cols-4 gap-3 mt-4 items-center">
                {/* Poppy App Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-[2px] shadow-lg flex items-center justify-center">
                    <div className="w-full h-full bg-[#0c0c14] rounded-[10px] flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="text-[8px] font-semibold text-white mt-1">Poppy</span>
                </div>

                {/* Calendar Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-white text-black p-1 flex flex-col items-center justify-center shadow-md">
                    <span className="text-[6px] font-bold text-red-500 uppercase leading-none">Friday</span>
                    <span className="text-xs font-black leading-none mt-0.5">26</span>
                  </div>
                  <span className="text-[8px] font-semibold text-white mt-1">Calendar</span>
                </div>

                {/* Photos Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-blue-500 opacity-90" />
                  </div>
                  <span className="text-[8px] font-semibold text-white mt-1">Photos</span>
                </div>

                {/* Maps Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 p-1 flex items-center justify-center shadow-md text-white font-bold text-xs">
                    🗺️
                  </div>
                  <span className="text-[8px] font-semibold text-white mt-1">Maps</span>
                </div>
              </div>
            </div>

            <div className="text-left max-w-md">
              <h4 className="text-lg font-black text-gray-900">Custom Brand Identity & App Launcher</h4>
              <p className="text-xs text-gray-600 font-medium leading-relaxed mt-1">
                Poppy's distinct brand visual language features dark sleek cinematic contrast, vivid purple-indigo gradients, and instant high-impact mobile home screen presence.
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            UI/UX Case Study • 2026
          </div>

        </div>

      </div>

      {/* ------------------------------------------------------------------------ */}
      {/* INTERACTIVE FULL-SCREEN LIGHTBOX MODAL */}
      {/* ------------------------------------------------------------------------ */}
      <AnimatePresence>
        {selectedScreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScreenIndex(null)}
            className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedScreenIndex(null)}
              className="fixed top-6 right-6 z-[130] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedScreenIndex((prev) => (prev! > 0 ? prev! - 1 : screensList.length - 1));
              }}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-[130] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedScreenIndex((prev) => (prev! < screensList.length - 1 ? prev! + 1 : 0));
              }}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-[130] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Expanded Center Lightbox Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center"
            >
              <div className="transform scale-110 sm:scale-125 md:scale-150 transition-transform duration-300">
                <PhoneMockup shadow={false}>
                  {screensList[selectedScreenIndex].component}
                </PhoneMockup>
              </div>

              <div className="mt-12 sm:mt-16 text-center text-white">
                <h3 className="text-xl font-black text-[#0284C7]">
                  {screensList[selectedScreenIndex].title}
                </h3>
                <p className="text-xs text-gray-300 font-medium mt-1">
                  {screensList[selectedScreenIndex].subtitle} ({selectedScreenIndex + 1} of {screensList.length})
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AppDesignShowcase;
