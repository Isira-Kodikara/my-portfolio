/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SkillGroup, Work } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5 & CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 65 },
      { name: "Responsive & Accessible UI", level: 75 },
      { name: "Tailwind CSS", level: 60 }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "PHP", level: 70 },
      { name: "Laravel Framework", level: 60 },
      { name: "Livewire", level: 55 },
      { name: "MySQL & Database Design", level: 65 }
    ]
  },
  {
    category: "Tools & Emerging Skills",
    skills: [
      { name: "Git & Collaborative Workflows", level: 70 },
      { name: "Python (Basics)", level: 40 },
      { name: "Java (Basics)", level: 35 },
      { name: "Terminal & Command Line", level: 75 }
    ]
  }
];

export const WORKS: Work[] = [
  {
    id: 'taskflow',
    title: 'TaskFlow SaaS Dashboard',
    category: 'Full-Stack Development',
    description: 'A modular, high-performance workflow and task management suite supporting real-time team collaboration, status metrics, and custom calendar integrations.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600',
    tags: ['SaaS Design', 'React Full-Stack', 'Team Tools'],
    client: 'Flowstate Technologies',
    year: '2026',
    link: '#taskflow'
  },
  {
    id: 'apex-analytics',
    title: 'Apex Analytics Dashboard',
    category: 'Creative Engineering',
    description: 'A responsive developer telemetry dashboard aggregating API performance logs, database query throughput, and frontend web vitals.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    tags: ['Developer Tools', 'Data Visualization', 'Vitals System'],
    client: 'Apex Software Group',
    year: '2025',
    link: '#apex-analytics'
  },
  {
    id: 'shop-engine',
    title: 'E-Commerce Shop Engine',
    category: 'Full-Stack Development',
    description: 'A high-performance digital checkout and storefront experience featuring quick-fill autocomplete, automated inventory matching, and Stripe webhooks.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600',
    tags: ['Stripe Payments', 'Inventory Systems', 'Tailwind CSS'],
    client: 'Nova Retail Corp',
    year: '2026',
    link: '#shop-engine'
  }
];

export const ISIRA_INFO = {
  aboutQuote: "I build robust, scalable web applications with clean code and modern design.",
  aboutStory: "I am a passionate software engineer dedicated to building reliable, high-performance web applications. I've been interested in computers and software engineering since I was a kid, which led me to explore web development over the past few years. I started with HTML and CSS three years ago, moved into JavaScript one year later, and recently began working with PHP and Laravel. I specialize in full-stack development with Laravel and Livewire, bridging intuitive frontend layouts with solid, secure backend APIs.",
  skillsSubtitle: "Dedicated to crafting robust, responsive full-stack applications with Laravel and PHP, focusing on clean code, performance optimization, and modern web development practices.",
  email: "kodikaraisira@gmail.com",
  phone: "+94773594855",
  address: "No. 130, Bope Rd, Bope, Galle, 80000, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/isira-kodikara",
  github: "https://github.com/isira-kodikara",
  socials: [
    { platform: 'Github', link: 'https://github.com/isira-kodikara' },
    { platform: 'LinkedIn', link: 'https://www.linkedin.com/in/isira-kodikara' },
    { platform: 'Facebook', link: 'https://www.facebook.com/isira.kodikara' },
    { platform: 'Instagram', link: 'https://instagram.com/isira_asi' }
  ]
};
