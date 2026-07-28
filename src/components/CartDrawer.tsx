import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Sparkles, User, Mail, MessageSquare } from 'lucide-react';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const CartDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  selectedService = 'Brand Identity Systems',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: selectedService,
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden text-gray-900">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide-over Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-full sm:max-w-md bg-white text-gray-900 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 bg-[#1B4332] text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  <div>
                    <h2 className="font-heading font-black text-lg">Hire Nandini</h2>
                    <span className="text-[10px] text-white/70 font-semibold block">
                      Start Your Brand Design Project
                    </span>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 flex-1 overflow-y-auto">
                {submitted ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-black text-2xl text-gray-900">
                      Inquiry Sent!
                    </h3>
                    <p className="text-xs text-gray-600 font-semibold max-w-xs mx-auto">
                      Thank you for reaching out. Nandini will review your project details and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Full Name
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#52B788]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-700 mb-1.5">
                        Your Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#52B788]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#52B788]"
                      >
                        <option value="Brand Identity Systems">Brand Identity Systems</option>
                        <option value="Social & Ad Campaign Creatives">Social & Ad Campaign Creatives</option>
                        <option value="Print & Packaging Dielines">Print & Packaging Dielines</option>
                        <option value="Video & Motion Design">Video & Motion Design</option>
                        <option value="UI/UX & Web Design">UI/UX & Web Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-gray-700 mb-1.5">
                        Project Details / Goals
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell Nandini about your project goals, timelines, or inspiration..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-semibold focus:outline-none focus:border-[#52B788]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#1B4332] text-white font-heading font-black text-xs uppercase tracking-wider shadow-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
