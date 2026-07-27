import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Dribbble, Instagram, Linkedin, Github } from 'lucide-react';
import { OrganicWave } from './OrganicWave';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const socialLinks = [
    { name: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <section id="contact" className="relative bg-mint-theme text-white overflow-hidden">
      
      {/* Top Wave Divider from Cream */}
      <OrganicWave fillColor="#FFF9ED" flipY={true} />

      <div className="py-20 px-4 sm:px-12 max-w-7xl mx-auto z-10 relative">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/90 mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-serif font-extrabold text-4xl sm:text-5xl text-white">
            Let's Work <span className="underline decoration-white/60 decoration-wavy underline-offset-8">Together</span>
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mt-3 font-medium">
            Have a new brand project, web experience, or design system query? Send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Glass Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white text-gray-900 shadow-2xl">
              <h3 className="font-serif font-bold text-xl text-[#1B4332] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:nandinivaddepalli.design@gmail.com"
                  className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-emerald-50 transition-colors"
                >
                  <div className="p-3 rounded-2xl bg-[#2D6A4F] text-white shadow-md group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-gray-500 uppercase tracking-widest block font-bold">
                      Direct Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1B4332] group-hover:text-[#52B788] transition-colors">
                      nandinivaddepalli.design@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-emerald-50 transition-colors"
                >
                  <div className="p-3 rounded-2xl bg-[#2D6A4F] text-white shadow-md group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-gray-500 uppercase tracking-widest block font-bold">
                      Phone / WhatsApp
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1B4332] group-hover:text-[#52B788] transition-colors">
                      +91 98765 43210
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl">
                  <div className="p-3 rounded-2xl bg-[#2D6A4F] text-white shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-gray-500 uppercase tracking-widest block font-bold">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1B4332]">
                      Hyderabad, India (Remote Available)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="pt-8 mt-8 border-t border-gray-100">
                <span className="text-xs font-sans text-gray-500 uppercase tracking-widest block mb-4 font-bold">
                  Connect On Socials
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-2xl bg-gray-100 text-[#1B4332] hover:bg-[#2D6A4F] hover:text-white transition-all shadow-sm"
                        title={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white text-gray-900 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center shadow-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-extrabold text-2xl text-[#1B4332]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md font-medium">
                    Thank you for reaching out. Nandini will review your brand project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full mint-btn-dark text-white font-bold text-xs uppercase"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-sans font-bold uppercase text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-bold uppercase text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold uppercase text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-bold uppercase text-gray-700 mb-2">
                      Project Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project scope, timeline, and goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full mint-btn-dark text-white font-sans font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <Sparkles className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
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
