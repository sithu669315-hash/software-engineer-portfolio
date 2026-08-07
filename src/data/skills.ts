import {
  //frontend
  FaHtml5,
  FaCss3Alt,
  //FaReact,
  FaBootstrap,
  //backend
  //FaNodeJs,
  FaLaravel,
  //softskills
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
} from "react-icons/fa";
import { 
  //SiTypescript, 
  //SiNextdotjs,
  SiTailwindcss,
  //SiPostgresql,
  SiMysql,
  SiJavascript,
  SiPhp,
  SiVercel,
  //SiGit,
} from "react-icons/si";
import type { Skill } from "../types";

export const skills: Skill[] = [
  // Frontend
  //{ name: "React", icon: FaReact, proficiency: 60, category: "Frontend" },
  //{ name: "Next.js", icon: SiNextdotjs, proficiency: 60, category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    proficiency: 70,
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    proficiency: 60,
    category: "Frontend",
  },
  { name: "HTML", icon: FaHtml5, proficiency: 92, category: "Frontend" },
  { name: "CSS", icon: FaCss3Alt, proficiency: 80, category: "Frontend" },

  // Backend
  //{ name: "Node.js", icon: FaNodeJs, proficiency: 30, category: "Backend" },
  { name: "Laravel", icon: FaLaravel, proficiency: 40, category: "Backend" },
  //{ name: 'GraphQL', icon: SiGraphql, proficiency: 78, category: 'Backend' },
  //{ name: 'Django', icon: SiDjango, proficiency: 70, category: 'Backend' },

  // Database
  //{ name: "PostgreSQL",icon: SiPostgresql, proficiency: 0, category: "Database",},
  { name: "Mysql", icon: SiMysql, proficiency: 40, category: "Database" },
  //{ name: 'Mon', icon: SiMongodb, proficiency: 82, category: 'Database' },
  //{ name: 'Redis', icon: SiRedis, proficiency: 75, category: 'Database' },
  //{ name: 'Prisma', icon: SiPrisma, proficiency: 85, category: 'Database' },

  // Languages
  //{ name: "TypeScript", icon: SiTypescript, proficiency: 0, category: "Languages",},
  {
    name: "JavaScript",
    icon:  SiJavascript ,
    proficiency: 60,
    category: "Languages",
  },
  { name: "PHP", icon: SiPhp, proficiency: 30, category: "Languages" },
  //{ name: 'Go', icon: SiGo, proficiency: 60, category: 'Languages' },

  // Frameworks & Tools
  //{ name: "Git", icon: SiGit, proficiency: 30, category: "Tools" },
  //{ name: 'Docker', icon: SiDocker, proficiency: 78, category: 'Tools' },
  //{ name: 'AWS', icon: FaAws, proficiency: 74, category: 'Tools' },
  //{ name: 'Figma', icon: SiFigma, proficiency: 70, category: 'Tools' },
  { name: "Vercel", icon: SiVercel, proficiency: 60, category: "Tools" },

  // Soft Skills
  {
    name: "Team work",
    icon: FaUsers,
    proficiency: 88,
    category: "Soft Skills",
  },
  {
    name: "Problem Solving",
    icon: FaLightbulb,
    proficiency: 70,
    category: "Soft Skills",
  },
  {
    name: "Communication",
    icon: FaComments,
    proficiency: 80,
    category: "Soft Skills",
  },
  {
    name: "Time Management",
    icon: FaClock,
    proficiency: 70,
    category: "Soft Skills",
  },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Languages",
  "Tools",
  "Soft Skills",
] as const;
