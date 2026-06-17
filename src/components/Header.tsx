/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Sun, Moon } from 'lucide-react';
import { Tab } from '../types';
import { ISIRA_INFO } from '../data';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  onContactClick: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ activeTab, setActiveTab, onContactClick, isDark, toggleTheme }: HeaderProps) {
  const navItems = [
    { label: 'Home', value: Tab.Home },
    { label: 'About', value: Tab.About },
    { label: 'Skills', value: Tab.Skills },
    { label: 'Get in Touch', value: Tab.Contact }
  ];

  return (
    <header className="w-full sticky top-6 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <div 
        id="navigation-bar" 
        className="w-full h-16 bg-brand-card border border-brand-thin-border px-4 md:px-8 rounded-full shadow-lg flex items-center justify-between transition-all duration-300"
      >
        {/* Brand Logo */}
        <div id="brand-logo" className="flex items-center cursor-pointer select-none" onClick={() => setActiveTab(Tab.Home)}>
          <span className="font-display font-black text-lg md:text-xl tracking-tight text-brand-text">Isira </span>
          <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-accent-orange ml-1">Kodikara</span>
        </div>

        {/* Navigation Items - Desktop */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.value;
            return (
              <button
                key={item.value}
                id={`nav-${item.value}`}
                onClick={() => setActiveTab(item.value)}
                className="relative px-4 py-2 font-display text-sm font-semibold transition-colors duration-200 cursor-pointer focus:outline-none"
                style={{ color: isActive ? 'var(--accent-orange)' : 'var(--subtext-color)' }}
              >
                {isActive && (
                  <motion.div
                    id={`active-indicator-${item.value}`}
                    layoutId="navbar-indicator"
                    className="absolute inset-x-2 bottom-0 h-0.5 bg-accent-orange rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Widgets */}
        <div id="nav-contact" className="flex items-center gap-3">
          {/* Theme Toggle Switch */}
          <button
            id="theme-toggle-button"
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="w-9 h-9 rounded-full bg-brand-bg hover:bg-accent-orange/10 border border-brand-thin-border flex items-center justify-center transition-all duration-200 cursor-pointer text-brand-text"
          >
            {isDark ? <Sun size={15} className="text-accent-orange animate-pulse" /> : <Moon size={15} className="text-brand-text" />}
          </button>

          {/* Phone Display Label - Desktop */}
          <a
            id="phone-link"
            href={`tel:${ISIRA_INFO.phone.replace(/\s+/g, '')}`}
            className="hidden md:flex items-center gap-2 font-mono text-xs font-semibold text-brand-text hover:text-accent-orange transition-colors"
          >
            {ISIRA_INFO.phone}
          </a>
          
          <button
            id="phone-cta-button"
            onClick={onContactClick}
            aria-label="Call Isira"
            className="w-9 h-9 bg-brand-text hover:bg-accent-orange text-brand-bg rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Navigation - Mobile Drawer style below the header */}
      <div id="mobile-nav-belt" className="lg:hidden mt-3 overflow-x-auto scrollbar-none flex gap-1 justify-center py-1.5 bg-brand-card/90 backdrop-blur border border-brand-thin-border rounded-full shadow-md max-w-sm mx-auto px-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.value;
          return (
            <button
              key={item.value}
              id={`nav-mobile-${item.value}`}
              onClick={() => setActiveTab(item.value)}
              className="px-3 py-1.5 rounded-full font-display text-[11px] font-bold whitespace-nowrap transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: isActive ? 'var(--accent-orange)' : 'transparent',
                color: isActive ? '#FFFFFF' : 'var(--subtext-color)'
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
