import type { Project, OpenSourceProject } from "@/types";
import { Globe } from "lucide-react";

/**
 * Technologies
 */
export const TECHNOLOGIES = [
  "Bun",
  "Hono",
  "ReactJs",
  "Typescript",
  "Vite",
  "Drizzle",
  "PostgreSQL",
  "Sqlite",
  "Tailwind CSS",
  "Python",
  "C#",
  "JavaScript",
  "PHP",
  "Zod",
  "Zustand",
  "Tanstack-Query",
  "Tanstack-Router",
  "Bruno",
] as const;

/**
 * Projects (Rafidain Land Cloud)
 */
export const ALL_PROJECTS: Project[] = [
  {
    title: "Rafidain Land",
    tagline: "E-Commerce",
    description: "A high-performance digital commerce platform",
    image: "./rafidainland.png",
    Icon: Globe,
    link: "https://rafidainland.cloud",
    category: "Cloud",
    featured: true,
    statusBadge: "Live Platform",
  },
];

export const FEATURED_PROJECTS = ALL_PROJECTS;

/**
 * Minimalist Open Source Projects (One card per row, no stack pills, pure description)
 */
export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  {
    title: "MyLinkSpace",
    description:
      "Simple, lightweight, and customizable self-hosted link-in-bio platform giving you complete ownership of your personal links and brand.",
    link: "https://github.com/devmoamal/MyLinkSpace",
  },
  {
    title: "bhvrd",
    description:
      "CLI scaffolding tool designed to bootstrap full-stack monorepos powered by Bun, Hono, Vite, React, and Drizzle ORM in seconds.",
    link: "https://github.com/devmoamal/bhvrd",
  },
];
