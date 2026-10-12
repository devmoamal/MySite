import type { TECHNOLOGIES } from "@/constants";
import type { LucideIcon } from "lucide-react";

export type Stack = (typeof TECHNOLOGIES)[number];

export type Project = {
  title: string;
  description: string;
  tagline?: string;
  image?: string;
  Icon?: LucideIcon;
  stack?: readonly Stack[] | Stack[];
  link: string;
  github?: string;
  demo?: string;
  category?: "Full Stack" | "Backend" | "Frontend" | "Tooling" | "AI" | "Cloud";
  featured?: boolean;
  statusBadge?: string;
};

export type OpenSourceProject = {
  title: string;
  description: string;
  link: string;
};
