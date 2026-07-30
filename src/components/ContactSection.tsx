import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: 'Brand Identity Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-12 bg-[#090909] text-white overflow-hidden w-full max-w-full">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#88D900]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[#88D900] font-heading font-bold text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CREATIVE PROJECT</span>
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 sm:mb-4">
            LET'S WORK <span className="text-[#88D900]">TOGETHER</span>
          </h2>
          <p className="font-body text-[#9CA3AF] text-xs sm:text-sm md:text-base max-w-xl">
            Have a new brand identity project, print packaging, digital campaign, or design system query? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* Left Column: Direct Contacts & Map Card */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="luxury-card p-5 sm:p-8 space-y-4 sm:space-y-6 w-full">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 sm:mb-6">
                Direct Contact Details
              </h3>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#88D900] transition-all group overflow-hidden"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#88D900]/10 text-[#88D900] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[9px] sm:text-[10px] font-heading font-extrabold text-[#9CA3AF] uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-xs sm:text-sm font-body text-white font-semibold group-hover:text-[#88D900] transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#88D900] transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#88D900]/10 text-[#88D900] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-heading font-extrabold text-[#9CA3AF] uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-body text-white font-semibold group-hover:text-[#88D900] transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#090909] border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#88D900]/10 text-[#88D900] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-heading font-extrabold text-[#9CA3AF] uppercase tracking-wider block">
                    Base Location
                  </span>
                  <span className="text-xs sm:text-sm font-body text-white font-semibold">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-body text-[#9CA3AF]">Connect on:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-[#090909] border border-white/10 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2.5 sm:p-3 rounded-full bg-[#090909] border border-white/10 text-white hover:text-[#88D900] hover:border-[#88D900] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Dark Location Card / Availability Status */}
            <div className="luxury-card p-5 sm:p-6 border border-[#88D900]/40 flex items-center justify-between w-full">
              <div>
                <span className="text-xs font-heading font-bold text-[#88D900] uppercase tracking-wider block mb-1">
                  AVAILABILITY STATUS
                </span>
                <p className="text-xs sm:text-sm font-body text-white font-semibold">
                  Open for Freelance &amp; Lead Brand Contracts
                </p>
              </div>
              <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#88D900] animate-ping shrink-0 ml-2" />
            </div>
          </div>

          {/* Right Column: Animated Luxury Form */}
          <div className="lg:col-span-7 w-full">
            <div className="luxury-card p-5 sm:p-8 md:p-10 w-full">
              {submitted ? (
                <div className="py-8 sm:py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#88D900] text-black flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_30px_#88D900]">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#9CA3AF] max-w-md mb-6">
                    Thank you for reaching out. Nandini will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', service: 'Brand Identity Design', message: '' });
                    }}
                    className="btn-neon bg-[#88D900] text-black text-xs font-extrabold uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 sm:mb-6">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                    {/* Name */}
                    <div className="w-full">
                      <label className="text-xs font-heading font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-3 rounded-2xl bg-[#090909] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#88D900] transition-colors text-xs sm:text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="w-full">
                      <label className="text-xs font-heading font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-3 rounded-2xl bg-[#090909] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#88D900] transition-colors text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                    {/* Subject */}
                    <div className="w-full">
                      <label className="text-xs font-heading font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="New Brand Identity Inquiry"
                        className="w-full px-3.5 py-3 rounded-2xl bg-[#090909] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#88D900] transition-colors text-xs sm:text-sm"
                      />
                    </div>

                    {/* Service Category */}
                    <div className="w-full">
                      <label className="text-xs font-heading font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-2xl bg-[#090909] border border-white/10 text-white focus:outline-none focus:border-[#88D900] transition-colors text-xs sm:text-sm"
                      >
                        <option value="Brand Identity Design">Brand Identity Design</option>
                        <option value="Print & Packaging">Print &amp; Packaging</option>
                        <option value="Social Media & Ads">Social Media &amp; Ads</option>
                        <option value="UI UX & Web Design">UI UX &amp; Web Design</option>
                        <option value="Motion & Reel Design">Motion &amp; Reel Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="w-full">
                    <label className="text-xs font-heading font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5">
                      Project Details &amp; Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your brand goals, scope, and target launch timeline..."
                      className="w-full px-3.5 py-3 rounded-2xl bg-[#090909] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#88D900] transition-colors text-xs sm:text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-neon bg-[#88D900] text-black w-full justify-center text-xs font-button uppercase tracking-wider font-extrabold"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Design Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
