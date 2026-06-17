/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ISIRA_INFO } from '../data';
import { Code, Zap, Users, Cpu } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'HTML & CSS Experience', value: '3 Years', icon: <Code className="text-accent-orange" size={20} /> },
    { label: 'JavaScript Experience', value: '1 Year', icon: <Zap className="text-accent-orange" size={20} /> },
    { label: 'Laravel & PHP Experience', value: '6 Months', icon: <Cpu className="text-accent-orange" size={20} /> },
    { label: 'Active Projects', value: 'In Progress', icon: <Users className="text-accent-orange" size={20} /> }
  ];

  const tools = [
    'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Laravel', 'Livewire', 'MySQL', 'Python', 'Java', 'Git'
  ];

  return (
    <section id="about-section" className="w-full flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
      
      {/* Intro Header */}
      <div id="about-header" className="max-w-2xl text-left mb-12">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-brand-text leading-tight animate-fade-in">
          About <span className="text-accent-orange">Isira</span>
        </h2>
        <p className="mt-4 font-display font-bold text-xl md:text-2xl text-accent-coral italic">
          "{ISIRA_INFO.aboutQuote}"
        </p>
      </div>

      <div id="about-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
        
        {/* Bio Story on the left (7 columns) */}
        <div id="about-story-col" className="lg:col-span-7 space-y-6 text-left">
          <p className="font-sans text-brand-text/80 text-base md:text-lg leading-relaxed">
            {ISIRA_INFO.aboutStory}
          </p>
          <p className="font-sans text-brand-text/70 text-sm md:text-base leading-relaxed">
            From structuring complex database schemas to crafting responsive frontend layouts, my goal is to build secure, reliable, and smooth software systems that solve real-world problems.
          </p>

          <div id="tech-stack-subsection" className="pt-6">
            <h3 className="font-display font-bold text-lg text-brand-text mb-4">
              Core Tech Stack & Skills:
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span 
                  key={idx} 
                  className="bg-brand-card border border-brand-thin-border hover:border-accent-orange px-4 py-2 rounded-xl text-brand-text/80 font-mono text-xs font-semibold shadow-sm transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Column on the right (5 columns) */}
        <div id="about-stats-col" className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-brand-card border-2 border-brand-border p-6 rounded-3xl shadow-sm text-left flex flex-col justify-between h-40 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center border border-brand-thin-border shadow-sm mb-4">
                {stat.icon}
              </div>
              <div>
                <dt className="font-mono text-[9px] tracking-wider uppercase text-brand-text/50 mb-1 leading-none">
                  {stat.label}
                </dt>
                <dd className="font-display font-black text-xl text-brand-text leading-none">
                  {stat.value}
                </dd>
              </div>
            </motion.div>
          ))}
        </div>

      </div>



    </section>
  );
}
