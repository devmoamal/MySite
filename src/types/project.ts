import type { TECHNOLOGIES } from "@/constants";
import type { LucideIcon } from "lucide-react";

export type Stack = (typeof TECHNOLOGIES)[number];

export type Project = {
  title: string;
  description: string;
  Icon: LucideIcon;
  stack?: Stack[];
  link: string;
};
