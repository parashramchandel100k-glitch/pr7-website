import {
  BrainCircuit,
  Code2,
  Video,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type WhatIDoItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHAT_I_DO: WhatIDoItem[] = [
  {
    icon: BrainCircuit,
    title: "AI Projects",
    description:
      "Designing and shipping small AI-powered tools — from prompt systems to full products — to learn by building real things.",
  },
  {
    icon: Code2,
    title: "Website & App Building",
    description:
      "Building fast, modern websites and apps with clean code, from landing pages to full product interfaces.",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Turning what I learn and build into videos and posts — documenting the process, not just the results.",
  },
  {
    icon: FlaskConical,
    title: "Digital Experiments",
    description:
      "Trying new ideas in public — small bets, quick builds, and honest results, whether they work or not.",
  },
];

export type ProjectStatus = "Live" | "In Progress" | "Coming Soon";

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  /** Set to a real URL once the project is live. "#" is a safe placeholder. */
  url: string;
};

export const PROJECTS: Project[] = [
  {
    name: "AI Projects",
    description:
      "A running collection of AI experiments — automation, tooling and prompt-driven products built to solve real problems.",
    status: "In Progress",
    url: "#",
  },
  {
    name: "Personal AI Assistant",
    description:
      "A custom assistant built to manage tasks, research and content workflows — designed and trained from the ground up.",
    status: "In Progress",
    url: "#",
  },
  {
    name: "Creator Tools",
    description:
      "Lightweight tools for creators — thumbnail helpers, caption generators and content planners built from real workflow needs.",
    status: "Coming Soon",
    url: "#",
  },
  {
    name: "Web Apps",
    description:
      "Full-stack web applications exploring modern frontend design paired with AI-driven backends.",
    status: "In Progress",
    url: "#",
  },
  {
    name: "Future Startup",
    description:
      "The long-term build — an idea in motion, shaped in public as it moves from concept to company.",
    status: "Coming Soon",
    url: "#",
  },
];

export const ABOUT_TEXT =
  "I'm Parshuram, a young Indian creator building my skills in AI, websites, content and business. Instead of waiting for the perfect opportunity, I'm building everything from scratch and documenting the journey.";

export const JOURNEY_TEXT =
  "I'm documenting the process of learning AI, building products, creating content and turning ideas into real businesses.";
