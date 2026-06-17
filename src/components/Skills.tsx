/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SKILL_GROUPS, ISIRA_INFO } from '../data';
import { Code2, Server, Database, Wrench, Sparkles, BookOpen } from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 25 } }
  };

  const getCategoryIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes('frontend')) return <Code2 className="text-accent-orange" size={20} />;
    if (lower.includes('backend')) return <Server className="text-accent-orange" size={20} />;
    if (lower.includes('database')) return <Database className="text-accent-orange" size={20} />;
    if (lower.includes('tools')) return <Wrench className="text-accent-orange" size={20} />;
    if (lower.includes('additional')) return <Sparkles className="text-accent-orange" size={20} />;
    return <Code2 className="text-brand-text/80" size={20} />;
  };

  return (
    <section id="skills-section" className="w-full flex-grow max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
      
      {/* Header Intro block */}
      <div id="skills-header" className="max-w-2xl text-left mb-16">
        <div className="mb-4 inline-flex items-center gap-2 bg-accent-orange/10 border border-accent-orange/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-orange">
          <BookOpen size={12} className="animate-pulse" />
          <span>Academic & Personal Mastery</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-brand-text leading-tight">
          Competencies & <span className="text-accent-orange">Skills</span>
        </h2>
        <p className="mt-4 text-brand-text/70 font-sans text-base md:text-lg leading-relaxed">
          {ISIRA_INFO.skillsSubtitle}
        </p>
      </div>

      {/* Grid structure for Skill Categories */}
      <motion.div 
        id="skills-group-grid" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {SKILL_GROUPS.map((group, idx) => {
          return (
            <motion.div
              key={idx}
              id={`skill-group-card-${idx}`}
              className="bg-brand-card border-2 border-brand-border rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
              variants={itemVariants}
            >
              <div className="absolute right-0 top-0 w-24 h-24 bg-accent-orange/5 rounded-full blur-xl pointer-events-none" />

              <div>
                {/* Section title header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-thin-border">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-thin-border flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-display font-black text-base md:text-lg text-brand-text leading-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skills as tags/chips */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      id={`skill-item-${idx}-${sIdx}`}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-brand-bg border border-brand-thin-border text-sm font-semibold font-display text-brand-text tracking-tight hover:border-accent-orange/50 hover:text-accent-orange transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (sIdx * 0.08), duration: 0.4, ease: 'easeOut' }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Skill Footnote Accent */}
              <div className="mt-8 pt-4 border-t border-brand-thin-border flex items-center justify-between text-[10px] font-mono font-bold text-brand-text/50">
                <span>SYSTEM PARAMETERS</span>
                <span className="flex items-center gap-1">
                  <Sparkles size={10} className="text-accent-orange" />
                  ACTIVE PRACTICE
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>



    </section>
  );
}

