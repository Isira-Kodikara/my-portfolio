/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Tab {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Contact = 'contact'
}

export interface SkillGroup {
  category: string;
  isMartial?: boolean;
  skills: { name: string; level?: number; iconName?: string }[];
}

export interface Work {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  client: string;
  year: string;
  link?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  replyText?: string;
  isPending?: boolean;
}
