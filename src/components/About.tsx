/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ISIRA_INFO } from '../data';
import { Briefcase, Award, GraduationCap, School, Download } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '6 Months', label: 'Trainee Web Developer', icon: <Briefcase className="text-accent-orange" size={20} /> },
    { value: '1st Dan Black Belt', label: 'Karate Coach', icon: <Award className="text-accent-orange" size={20} /> },
    { value: 'Year 1 Completed', label: 'BEng (Hons) Software Engineering at IIT', icon: <GraduationCap className="text-accent-orange" size={20} /> },
    { value: 'University of Canberra', label: 'July Intake', icon: <School className="text-accent-orange" size={20} /> }
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

          <motion.a
            id="download-cv-btn"
            href="/Isira_CV_SEEK.pdf"
            download
            className="mt-4 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent-orange text-white font-display font-bold text-sm tracking-wide shadow-lg shadow-accent-orange/25 hover:shadow-xl hover:shadow-accent-orange/35 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 200 }}
            whileHover={{ y: -2 }}
          >
            <Download size={16} strokeWidth={2.5} />
            Download CV
          </motion.a>

        </div>

        {/* Stats Column on the right (5 columns) */}
        <div id="about-stats-col" className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-brand-card border-2 border-brand-border p-6 rounded-3xl shadow-sm text-left flex flex-col justify-between min-h-[10rem] hover:shadow-md transition-shadow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center border border-brand-thin-border shadow-sm mb-4">
                {stat.icon}
              </div>
              <div>
                <dd className="font-display font-black text-lg text-brand-text leading-tight mb-1">
                  {stat.value}
                </dd>
                <dt className="font-sans text-[11px] tracking-wide text-brand-text/55 leading-snug">
                  {stat.label}
                </dt>
              </div>
            </motion.div>
          ))}
        </div>

      </div>



    </section>
  );
}
