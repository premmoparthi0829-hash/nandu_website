import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Eye, EyeOff, Sparkles, X, ArrowRight } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [passcode, setPasscode] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'nandini2026') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`relative w-full max-w-md bg-[#121212] border ${
            error ? 'border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.4)]' : 'border-[#88D900]/40 shadow-[0_0_35px_rgba(136,217,0,0.2)]'
          } rounded-3xl p-6 sm:p-8 text-white transition-all`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#1c1c1c] text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#88D900]/10 border border-[#88D900]/40 text-[#88D900] flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(136,217,0,0.3)]">
              <ShieldCheck className="w-7 h-7 stroke-[2]" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] border border-white/10 text-[#88D900] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              <span>ADMINISTRATOR ACCESS</span>
            </div>

            <h2 className="font-heading font-black text-2xl text-white tracking-tight">
              PORTFOLIO CONTROL PORTAL
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Enter passcode to manage projects, bio, services & inbox messages.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPass ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Admin Passcode..."
                className="w-full bg-[#090909] border border-white/15 rounded-xl py-3 pl-11 pr-11 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#88D900] transition-colors"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-xs text-red-400 text-center font-mono font-bold animate-pulse">
                ⚠️ Incorrect Passcode. (Default: admin123)
              </p>
            )}

            <button
              type="submit"
              className="btn-neon w-full justify-center py-3 text-xs uppercase font-extrabold flex items-center gap-2 cursor-pointer"
            >
              <span>ACCESS DASHBOARD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Hint Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <p className="text-[11px] text-gray-500 font-mono">
              Default passcode: <span className="text-[#88D900] font-bold">admin123</span>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
