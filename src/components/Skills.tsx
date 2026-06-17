/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SKILL_GROUPS, ISIRA_INFO } from '../data';
import { Award, Code2, BrainCircuit, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

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
    if (category.toLowerCase().includes('full-stack')) {
      return <Code2 className="text-accent-orange" size={20} />;
    }
    if (category.toLowerCase().includes('martial')) {
      return <Award className="text-accent-coral" size={20} />;
    }
    return <BrainCircuit className="text-brand-text/80" size={20} />;
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
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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

                {/* List of Skills within category */}
                <div className="space-y-6">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} id={`skill-item-${idx}-${sIdx}`} className="space-y-2 text-left">
                      <div className="flex items-center justify-between text-xs font-semibold text-brand-text">
                        <span className="font-display tracking-tight hover:text-accent-orange transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-brand-text/60">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Bar Gauge representation with offset animation */}
                      <div className="w-full h-2 bg-brand-bg rounded-full border border-brand-thin-border overflow-hidden p-[0.5px]">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ 
                            backgroundColor: 'var(--accent-orange)' 
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.2 + (sIdx * 0.1), duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
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

      {/* Focus & Synergy callout */}
      <div id="skills-synergy-banner" className="mt-16 bg-brand-card border-2 border-brand-border p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-brand-bg border border-brand-thin-border text-accent-orange flex items-center justify-center shrink-0">
          <ShieldAlert size={28} className="animate-bounce" />
        </div>
        <div className="text-left">
          <h3 className="font-display font-black text-xl text-brand-text mb-1">
            Frontend × Backend Synergy
          </h3>
          <p className="font-sans text-sm text-brand-text/75 leading-relaxed">
            By combining scalable user interfaces with reliable, type-safe API servers, I maintain a continuous full-stack workflow. High standards in component modularity and API design ensure solid, secure solutions for production systems.
          </p>
        </div>
      </div>

    </section>
  );
}
