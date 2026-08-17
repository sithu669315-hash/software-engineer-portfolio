import type { IconType } from 'react-icons';

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Languages'
  | 'Frameworks'
  | 'Tools'
  | 'Soft Skills';

export interface Skill {
  name: string;
  icon: IconType;
  proficiency: number; // 0-100
  category: SkillCategory;
}

export interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  //Major:string;
  org: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  gallery: string[];
  features: string[];
  challenges: string;
  solutions: string;
  architecture: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}
