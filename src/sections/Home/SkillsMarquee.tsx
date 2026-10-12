import {
  SiBun,
  SiReact,
  SiTypescript,
  SiDotnet,
  SiPhp,
  SiPostgresql,
  SiDrizzle,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiCloudflare,
  SiNginx,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

// Row 1: Core Technologies & Frameworks
const ROW_1_TECH = [
  { name: "ASP.NET", icon: SiDotnet, color: "#512bd4" },
  { name: "Bun", icon: SiBun, color: "#fbf0df" },
  { name: "React 19", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Drizzle ORM", icon: SiDrizzle, color: "#c5f74f" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Redis", icon: SiRedis, color: "#dc382d" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
];

// Row 2: Developer Tools, DevOps & Workflow (Reverse scroll)
const ROW_2_TOOLS = [
  { name: "VS Code", icon: VscCode, color: "#007acc" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Linux", icon: SiLinux, color: "#fcc624" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#f38020" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
];

export default function SkillsMarquee() {
  return (
    <section className="py-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Stack
        </h2>
      </div>

      {/* Two-row marquee container */}
      <div className="flex flex-col gap-2.5 py-3 border-y border-border">
        {/* Row 1: Core Tech (forward marquee) */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="animate-marquee flex items-center gap-2.5">
            {[...ROW_1_TECH, ...ROW_1_TECH].map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`tech-${skill.name}-${index}`}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-surface hover:border-border-hover hover:bg-surface-hover transition-colors whitespace-nowrap cursor-default group"
                >
                  <Icon
                    className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Tools & DevOps (backward/reverse marquee) */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="animate-marquee-reverse flex items-center gap-2.5">
            {[...ROW_2_TOOLS, ...ROW_2_TOOLS].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={`tool-${tool.name}-${index}`}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-surface hover:border-border-hover hover:bg-surface-hover transition-colors whitespace-nowrap cursor-default group"
                >
                  <Icon
                    className="w-4 h-4 transition-transform group-hover:scale-110 shrink-0"
                    style={{ color: tool.color }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
