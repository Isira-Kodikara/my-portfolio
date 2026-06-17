/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code2, Terminal, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onFinished: () => void;
  key?: string;
}

export default function SplashScreen({ onFinished }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState('Booting core system...');

  const loadingSteps = [
    { threshold: 10, status: 'Booting portfolio environment...' },
    { threshold: 30, status: 'Initializing PHP & Laravel architecture...' },
    { threshold: 55, status: 'Setting up high-performance full-stack components...' },
    { threshold: 75, status: 'Optimizing responsive layout views...' },
    { threshold: 90, status: 'Rendering Isira Kodikara profile...' },
    { threshold: 100, status: 'Systems check pass. Active!' },
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    // Simulate loading speed with variable increments
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small delay for smooth exit transition experience
          setTimeout(() => {
            onFinished();
          }, 800);
          return 100;
        }

        const increment = Math.floor(Math.random() * 8) + 4; // 4 to 11% increments
        const next = Math.min(prev + increment, 100);

        // Find status matching current progress
        const matched = loadingSteps.find(step => next <= step.threshold);
        if (matched) {
          setCurrentStatus(matched.status);
        }

        return next;
      });
    };

    timer = setInterval(updateProgress, 120);

    return () => {
      clearInterval(timer);
    };
  }, [onFinished]);

  return (
    <motion.div
      id="splash-screen"
      className="fixed inset-0 bg-brand-bg z-50 flex flex-col items-center justify-center p-6 select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Dynamic Backing Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,_var(--accent-orange)_0%,_transparent_65%)] opacity-[0.04] dark:opacity-[0.03] pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[radial-gradient(circle,_var(--accent-coral)_0%,_transparent_65%)] opacity-[0.04] dark:opacity-[0.03] pointer-events-none blur-3xl" />

      <div className="w-full max-w-md flex flex-col items-center text-center relative z-10">
        
        {/* Animated Brand Logo / Hexagon Icon Wrapper */}
        <motion.div
          id="splash-logo-container"
          className="relative mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
        >
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-orange to-accent-coral opacity-15 blur-md animate-pulse" />
          
          <div className="relative w-20 h-20 rounded-2xl bg-brand-card border-2 border-brand-border flex items-center justify-center shadow-lg">
            <Code2 className="text-accent-orange" size={36} />
            
            {/* Embedded details */}
            <div className="absolute -top-1 -right-1 bg-accent-coral text-white rounded-full p-1 border border-brand-bg">
              <Sparkles size={8} />
            </div>
          </div>
        </motion.div>

        {/* Name and Tagline */}
        <motion.h1
          id="splash-title"
          className="font-display font-black text-3xl sm:text-4xl text-brand-text tracking-tight mb-2 uppercase"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Isira Kodikara
        </motion.h1>

        <motion.div
          id="splash-descriptor"
          className="flex items-center gap-2 mb-10"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Terminal size={12} className="text-accent-coral" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand-text/60 font-bold">
            Laravel & PHP Full-Stack Developer
          </span>
        </motion.div>

        {/* Progress Bar Container */}
        <div id="splash-progress-container" className="w-full bg-brand-card border border-brand-thin-border p-2 rounded-2xl shadow-sm mb-4">
          <div className="relative w-full h-2.5 bg-brand-bg/50 rounded-full overflow-hidden">
            <motion.div
              id="splash-progress-bar"
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent-orange to-accent-coral rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
        </div>

        {/* Dynamic Status Text & Percentage Bar */}
        <div className="w-full flex items-center justify-between px-2 font-mono text-[11px]">
          <motion.div
            key={currentStatus}
            id="splash-status-text"
            className="text-brand-text/70 text-left truncate max-w-[80%]"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {currentStatus}
          </motion.div>
          <div id="splash-percentage" className="text-accent-orange font-bold text-right">
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}
