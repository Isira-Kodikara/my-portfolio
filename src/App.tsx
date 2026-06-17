/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tab } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Home);
  const [isSplashActive, setIsSplashActive] = useState<boolean>(true);
  
  // Theme state setup supporting local storage and preferences
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    if (isSplashActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSplashActive]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case Tab.Home:
        return <Hero setActiveTab={setActiveTab} />;
      case Tab.Skills:
        return <Skills />;
      case Tab.About:
        return <About />;
      case Tab.Contact:
        return <Contact />;
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isSplashActive && (
          <SplashScreen key="splash" onFinished={() => setIsSplashActive(false)} />
        )}
      </AnimatePresence>

      <div 
        id="app-container" 
        className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between py-6 relative transition-colors duration-300"
      >
      {/* Decorative ambient blurred backing gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--accent-orange)_0%,_transparent_65%)] opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--accent-coral)_0%,_transparent_65%)] opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />

      {/* Navigation Header with Active state and Theme controls */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onContactClick={() => setActiveTab(Tab.Contact)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Container Frame */}
      <main id="main-content" className="flex-grow flex flex-col items-center justify-center w-full relative z-10 px-4 md:px-8 mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id="active-screen-frame"
            className="w-full flex-grow flex flex-col"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActiveScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer copyright block */}
      <footer id="app-footer" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 border-t border-brand-thin-border mt-12 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-brand-text/50">
          © {new Date().getFullYear()} Isira Kodikara. Engineered for high performance & responsive accuracy.
        </p>
        <div className="flex gap-4 items-center">
          <span className="font-mono text-[9px] text-accent-orange uppercase tracking-widest animate-pulse font-bold">
            ● Focus Pipeline Active
          </span>
        </div>
      </footer>
    </div>
    </>
  );
}
