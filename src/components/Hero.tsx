/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUpRight, HelpCircle, GraduationCap, Code2, Users } from 'lucide-react';
import { Tab } from '../types';
import { ISIRA_INFO } from '../data';
import portraitImg from '../assets/images/regenerated_image_1781677229733.png';

interface HeroProps {
  setActiveTab: (tab: Tab) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  const [activeBadge, setActiveBadge] = useState<'learn' | 'build' | 'teach' | null>(null);

  const handleHireMeClick = () => {
    // Standard transition behavior or direct to external address
    window.open(ISIRA_INFO.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero-section" className="w-full flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-16 select-none relative">
      
      {/* LEFT COLUMN: Headlines & Description */}
      <div id="hero-left-col" className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-10">
        
        {/* Subtle decorative quote marker */}
        <div className="mb-4 inline-flex items-center gap-2 bg-accent-orange/10 border border-accent-orange/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-orange">
          <Sparkles size={12} className="animate-pulse" />
          <span>Laravel & PHP Practitioner</span>
        </div>

        {/* Hey, There I am Isira Kodikara heading */}
        <div id="hero-heading-container" className="relative">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-text leading-tight sm:leading-none pb-6">
            Hey, There <br className="hidden sm:inline" />
            I am <span className="relative inline-block text-brand-text">
              Isira Kodikara
              {/* Handdrawn style orange underline flourish */}
              <span className="absolute left-0 -bottom-1 w-full h-4 pointer-events-none">
                <svg viewBox="0 0 160 16" width="100%" height="100%" preserveAspectRatio="none" className="text-accent-orange fill-none stroke-current" strokeWidth="3" strokeLinecap="round">
                  <path d="M 3,10 Q 40,2 80,6 T 155,8" />
                  <path d="M 8,14 Q 50,5 92,9 T 150,11" opacity="0.8" />
                </svg>
              </span>
            </span>
          </h1>
        </div>

        {/* Headline / Tagline */}
        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-accent-coral tracking-tight mb-4 uppercase">
          Creative Full-Stack Developer
        </h2>

        {/* Dynamic target bio paragraph */}
        <p id="hero-description" className="mt-2 text-brand-text/80 font-sans text-base md:text-lg leading-relaxed max-w-lg">
          Building robust web applications with Laravel, PHP, and clean code principles — focused on performance, elegant design, and scalable solutions.
        </p>

        {/* Layout with 2 Call-to-actions */}
        <div id="hero-act-layout" className="mt-10 flex flex-wrap items-center gap-6">
          {/* Get in Touch - Dark Pill Button */}
          <button
            id="hero-get-in-touch-btn"
            onClick={() => setActiveTab(Tab.Contact)}
            className="px-8 py-4 bg-brand-text hover:bg-accent-orange text-brand-bg hover:text-white rounded-full font-display text-sm font-extrabold tracking-wide shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border-2 border-brand-text hover:border-accent-orange"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} />
          </button>

          {/* View My Competencies - Underlined button */}
          <button
            id="hero-view-competencies-btn"
            onClick={() => setActiveTab(Tab.Skills)}
            className="font-display font-extrabold text-base text-brand-text hover:text-accent-coral transition-colors duration-300 relative py-1 group bg-transparent border-none cursor-pointer outline-none"
          >
            <span>View My Competencies</span>
            {/* Elegant thick border line below */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-text group-hover:bg-accent-coral transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: Visual Offset Photo & Dynamic Orbits with semicircles */}
      <div id="hero-right-col" className="w-full lg:w-1/2 flex items-center justify-center relative py-12 z-0">
        
        {/* Playful Floating Geometric Accents *around* the image */}
        <div id="floating-geometrics" className="absolute inset-0 pointer-events-none">
          {/* Small orange floating triangle top-right */}
          <div className="absolute top-10 right-10 md:right-16 w-10 h-10 animate-bounce text-accent-orange opacity-80">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <polygon points="50,15 90,85 10,85" />
            </svg>
          </div>

          {/* Small coral floating circle bottom-left */}
          <div className="absolute bottom-12 left-8 sm:left-16 w-8 h-8 rounded-full border-4 border-accent-coral animate-pulse opacity-70" />

          {/* Small dark gray floating wireframe square top-left */}
          <div className="absolute top-16 left-6 w-7 h-7 border-2 border-brand-text/40 rotate-12" />
        </div>

        <div id="orbits-container" className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center">
          
          {/* Subtle dashed curved lines (orbits) behind */}
          <div id="orbiting-dashed-curves" className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 500 500">
              {/* Outer orbit tilted left */}
              <ellipse 
                cx="250" 
                cy="250" 
                rx="220" 
                ry="140" 
                className="stroke-brand-text/30 dark:stroke-brand-text/20 stroke-2 fill-none" 
                strokeDasharray="6,8" 
                transform="rotate(-15 250 250)" 
              />
              {/* Secondary offset orbit */}
              <ellipse 
                cx="250" 
                cy="250" 
                rx="160" 
                ry="220" 
                className="stroke-accent-orange/40 stroke-[1.5] fill-none" 
                strokeDasharray="4,6" 
                transform="rotate(20 250 250)" 
              />
            </svg>
          </div>

          {/* PROFILE PHOTO LAYOUT (With thick dark border & offset solid orange circle background creating shadow effect) */}
          <div id="portrait-shadow-structure" className="relative w-[230px] h-[230px] sm:w-[320px] sm:h-[320px] rounded-full">
            
            {/* Shifty hard solid orange circle backdrop (offset right and down) */}
            <div 
              id="portrait-orange-offset" 
              className="absolute inset-0 rounded-full bg-accent-orange translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6" 
            />

            {/* Profile Photo Wrapper - High precision thick dark border */}
            <div 
              id="portrait-frame" 
              className="absolute inset-0 rounded-full border-4 border-brand-border bg-brand-card overflow-hidden"
            >
              {/* Profile photo of Isira */}
              <img
                id="portrait-photo-img"
                src={portraitImg}
                alt="Isira Smiling Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* SEMI-CIRCLE BADGES (attached to orbits) */}
          
          {/* Badge 1: LEARN (Vibrant Orange, placed at top-center left) */}
          <motion.div 
            id="badge-learn"
            className="absolute top-2 sm:top-8 left-[30%] -translate-x-1/2 z-20 cursor-pointer"
            onHoverStart={() => setActiveBadge('learn')}
            onHoverEnd={() => setActiveBadge(null)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-accent-orange text-white font-mono font-black text-xs uppercase px-5 py-2.5 rounded-t-full rounded-b-none border-b border-white/20 shadow-md flex items-center gap-1.5 leading-none">
              <GraduationCap size={13} />
              <span>LEARN</span>
            </div>
          </motion.div>

          {/* Badge 2: BUILD (Dark Grey, placed middle-right) */}
          <motion.div 
            id="badge-build"
            className="absolute top-[45%] -right-2 sm:-right-6 -translate-y-1/2 z-20 cursor-pointer"
            onHoverStart={() => setActiveBadge('build')}
            onHoverEnd={() => setActiveBadge(null)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Placed rotated/semicircle facing to the side */}
            <div className="bg-brand-text text-brand-bg font-mono font-black text-xs uppercase px-5 py-2.5 rounded-t-full rounded-b-none rotate-90 origin-center shadow-md flex items-center gap-1.5 leading-none">
              <Code2 size={13} />
              <span>BUILD</span>
            </div>
          </motion.div>

          {/* Badge 3: TEACH (Coral/Red, placed bottom-left) */}
          <motion.div 
            id="badge-teach"
            className="absolute -bottom-2 sm:bottom-6 left-1/4 -translate-x-1/2 z-20 cursor-pointer"
            onHoverStart={() => setActiveBadge('teach')}
            onHoverEnd={() => setActiveBadge(null)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Placed rotated beautifully */}
            <div className="bg-accent-coral text-white font-mono font-black text-xs uppercase px-5 py-2.5 rounded-t-full rounded-b-none -rotate-145 origin-center shadow-md flex items-center gap-1.5 leading-none">
              <Users size={13} />
              <span>TEACH</span>
            </div>
          </motion.div>

          {/* Interactive display descriptions of Isira's active categories */}
          <div id="badge-explanation" className="absolute -bottom-16 sm:-bottom-24 left-1/2 -translate-x-1/2 w-72 text-center pointer-events-none h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {activeBadge === 'learn' && (
                <motion.div
                  key="learn-caption"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-brand-card border border-brand-thin-border px-4 py-2 rounded-xl shadow-md text-brand-text font-display text-xs font-bold flex items-center gap-1.5"
                >
                  <Sparkles size={11} className="text-accent-orange animate-spin-slow" />
                  <span>Mastering PHP, Laravel architectural patterns, and database design.</span>
                </motion.div>
              )}
              {activeBadge === 'build' && (
                <motion.div
                  key="build-caption"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-brand-card border border-brand-thin-border px-4 py-2 rounded-xl shadow-md text-brand-text font-display text-xs font-bold flex items-center gap-1.5"
                >
                  <Sparkles size={11} className="text-brand-text" />
                  <span>Developing high-performance, robust full-stack web applications.</span>
                </motion.div>
              )}
              {activeBadge === 'teach' && (
                <motion.div
                  key="teach-caption"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-brand-card border border-brand-thin-border px-4 py-2 rounded-xl shadow-md text-brand-text font-display text-xs font-bold flex items-center gap-1.5"
                >
                  <Sparkles size={11} className="text-accent-coral" />
                  <span>Advocating for clean code principles and secure, optimized architectures.</span>
                </motion.div>
              )}
              {!activeBadge && (
                <motion.span 
                  key="default-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  className="font-mono text-[9px] tracking-widest uppercase text-brand-text/50"
                >
                  Hover LEARN / BUILD / TEACH badges
                </motion.span>
               )}
            </AnimatePresence>
          </div>

        </div>
      </div>
      
    </section>
  );
}
