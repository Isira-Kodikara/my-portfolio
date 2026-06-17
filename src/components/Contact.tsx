/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ISIRA_INFO } from '../data';
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle2, Github, Linkedin, Facebook, Instagram, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$5,000 - $10,000',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.description,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitSuccess(true);
        setShowToast(true);
        setFormData((prev) => ({
          ...prev,
          name: '',
          email: '',
          description: ''
        }));

        // Clear success indicator after 5 seconds
        setTimeout(() => {
          setIsSubmitSuccess(false);
        }, 5000);
        
        // Auto-hide toast after 4.5 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 4500);
      } else {
        console.error("Form submission error", result);
        alert("Failed to send message. Please check your configuration.");
      }
    } catch (error) {
      console.error("Network error", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="w-full flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
      
      {/* Intro Header */}
      <div id="contact-header" className="max-w-2xl text-left mb-16">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-brand-text leading-tight">
          Contact Me — <span className="text-accent-orange">Let’s connect and build something amazing.</span>
        </h2>
        <p className="mt-4 text-brand-text/70 font-sans text-base md:text-lg leading-relaxed">
          I’ll get back to you as soon as possible.
        </p>
      </div>

      <div id="contact-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
        
        {/* Contact Coordinates left panel (5 columns) */}
        <div id="coordinates-panel" className="lg:col-span-5 space-y-8 bg-brand-card border-2 border-brand-border p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-left relative overflow-hidden shadow-sm">
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-accent-orange/10 rounded-full blur-xl pointer-events-none" />
          
          <div>
            <span className="font-mono text-[10px] font-bold tracking-wider text-accent-orange uppercase">Active Base Coordinates</span>
            <h3 className="font-display font-black text-2xl text-brand-text mt-2">Let's Connect.</h3>
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start gap-3.5 text-sm">
              <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-thin-border flex items-center justify-center text-accent-orange shadow-sm shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-text/50">Email</dt>
                <dd className="font-display font-bold text-brand-text mt-0.5 hover:text-accent-orange transition-colors">
                  <a href={`mailto:${ISIRA_INFO.email}`}>{ISIRA_INFO.email}</a>
                </dd>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 text-sm">
              <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-thin-border flex items-center justify-center text-accent-orange shadow-sm shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-text/50">Phone</dt>
                <dd className="font-display font-bold text-brand-text mt-0.5">
                  <a href={`tel:${ISIRA_INFO.phone}`}>{ISIRA_INFO.phone}</a>
                </dd>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 text-sm">
              <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-thin-border flex items-center justify-center text-accent-orange shadow-sm shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <dt className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-text/50">Location</dt>
                <dd className="font-display font-bold text-brand-text mt-0.5">{ISIRA_INFO.address}</dd>
              </div>
            </div>
          </div>

          <div id="socials-subpanel" className="pt-6 border-t border-brand-thin-border">
            <span className="font-mono text-[11px] font-bold tracking-wider text-brand-text uppercase block">Follow Me</span>
            <div className="flex flex-wrap gap-3 mt-3">
              {ISIRA_INFO.socials.map((soc) => {
                const IconComponent = (() => {
                  switch (soc.platform.toLowerCase()) {
                    case 'github': return Github;
                    case 'linkedin': return Linkedin;
                    case 'facebook': return Facebook;
                    case 'instagram': return Instagram;
                    default: return null;
                  }
                })();
                
                return (
                  <a
                    key={soc.platform}
                    href={soc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${soc.platform}`}
                    className="w-10 h-10 rounded-full bg-brand-bg hover:bg-brand-text text-brand-text hover:text-brand-bg border border-brand-thin-border hover:border-brand-border flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </a>
                );
              })}
            </div>
          </div>

          <div id="open-opportunities-subpanel" className="pt-6 border-t border-brand-thin-border flex gap-3.5 items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-brand-text">Open to Opportunities</h4>
              <p className="font-sans text-[10px] text-brand-text/60 mt-0.5">Available for internships & freelance work.</p>
            </div>
          </div>
        </div>

        {/* Input Inquiry Form right panel (7 columns) */}
        <div id="inquiry-form-panel" className="lg:col-span-7 bg-brand-card border-2 border-brand-border p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm text-left">
          
          <form id="project-estimator-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3.5 bg-brand-bg focus:bg-brand-card border border-brand-thin-border focus:border-brand-border outline-none rounded-xl font-display text-sm font-bold text-brand-text transition-all"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3.5 bg-brand-bg focus:bg-brand-card border border-brand-thin-border focus:border-brand-border outline-none rounded-xl font-display text-sm font-bold text-brand-text transition-all"
              />
            </div>

            {/* Scope Details Text Area */}
            <div className="flex flex-col gap-2">
              <textarea
                required
                rows={5}
                placeholder="Message *"
                value={formData.description}
                onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-3.5 bg-brand-bg focus:bg-brand-card border border-brand-thin-border focus:border-brand-border outline-none rounded-xl font-sans text-sm text-brand-text leading-relaxed transition-all resize-none"
              />
            </div>

            {/* Form submit button full width */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.description}
                className="w-full py-4 bg-[#00FF66] hover:bg-[#00E55C] disabled:bg-brand-bg text-black disabled:text-brand-text/30 rounded-xl font-display text-sm font-extrabold tracking-wider transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed uppercase border border-transparent"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : isSubmitSuccess ? (
                  <>
                    <CheckCircle2 size={16} className="text-black shrink-0 animate-bounce" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send size={14} className="fill-black" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </div>
          </form>

        </div>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            id="success-toast-notification"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] max-w-xs sm:max-w-md w-[calc(100vw-3rem)] bg-brand-card/95 hover:bg-brand-card/100 backdrop-blur-md border-2 border-emerald-500/40 p-4 sm:p-5 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] flex gap-4 text-left items-start overflow-hidden focus:outline-none"
          >
            {/* Soft decorative green corner pulse */}
            <div className="absolute right-0 top-0 w-16 h-16 bg-emerald-500/10 rounded-full blur-lg pointer-events-none" />

            {/* Success Ring Indicator */}
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
              <CheckCircle2 size={20} className="animate-pulse" />
            </div>

            {/* Content text block */}
            <div className="flex-grow pr-2">
              <h4 className="font-display font-black text-sm text-brand-text">
                Inquiry Received!
              </h4>
              <p className="font-sans text-xs text-brand-text/75 leading-relaxed mt-1">
                Your message has been successfully encrypted and routed. Isira will review and get back to you shortly.
              </p>
            </div>

            {/* Manual Dismiss Button */}
            <button
              onClick={() => setShowToast(false)}
              aria-label="Dismiss Notification"
              className="w-6 h-6 rounded-md bg-brand-bg hover:bg-brand-text/10 text-brand-text/40 hover:text-brand-text flex items-center justify-center transition-all shrink-0 cursor-pointer border border-brand-thin-border"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
