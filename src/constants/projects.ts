import type { Project } from "@/types";
import { Github } from "lucide-react";

/**
 * Technologies
 */
export const TECHNOLOGIES = [
  "C#",
  "PHP",
  "Python",
  "JavaScript",

  "Bun",
  "Hono",
  "Drizzle",
  "PostgreSQL",
  "Sqlite",

  "Vite",
  "ReactJs",

  "Typescript",
  "Tailwind CSS",
  "Zod",
  "Zustand",
  "Tanstack-Query",
  "Tanstack-Router",

  "Bruno",
] as const;

/**
 * Open source projects
 */
export const OPEN_SOURCE_PROJECTS: Project[] = [
  {
    title: "My Link Space",
    description: "Simple and lightweight self-hosted link in bio sites like",
    Icon: Github,
    stack: ["Bun", "Hono", "Vite", "ReactJs", "Sqlite"],
    link: "https://github.com/devmoamal/MyLinkSpace",
  },

  {
    title: "Pixel Space",
    description:
      "A simple ReactJS app that can create pixel art and export it.",
    Icon: Github,
    stack: ["Vite", "ReactJs"],
    link: "https://github.com/devmoamal/PixelSpace",
  },

  {
    title: "Lite Markdown Editor",
    description: "A minimal markdown block editor ( Notion Like ).",
    Icon: Github,
    stack: ["Vite", "ReactJs"],
    link: "https://github.com/devmoamal/LiteMarkdownEditor",
  },
];

/**
 * SaaS projects
 */
export const SAAS_PROJECTS: Project[] = [];
