import { ALL_PROJECTS, OPEN_SOURCE_PROJECTS } from "@/constants/projects";
import { Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const cloudProject = ALL_PROJECTS[0];

  return (
    <div className="flex flex-col gap-10 pt-4 pb-16">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
      </div>

      {/* Cloud Project */}
      {cloudProject && (
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Production Software
          </h2>

          <a
            href={cloudProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-4 sm:p-5 rounded-xl border border-border bg-surface hover:border-border-hover transition-all block"
          >
            {/* Banner image */}
            {cloudProject.image && (
              <div className="relative w-full sm:w-[280px] md:w-[320px] h-[180px] sm:h-[175px] rounded-lg overflow-hidden bg-surface-card border border-border/60 shrink-0">
                <img
                  src={cloudProject.image}
                  alt={cloudProject.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}

            {/* Details */}
            <div className="flex-1 w-full flex flex-col items-start justify-start space-y-1.5 min-w-0 sm:pt-0.5">
              <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-foreground group-hover:text-accent transition-colors">
                {cloudProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {cloudProject.description}
              </p>
            </div>
          </a>
        </section>
      )}

      {/* Minimal Open Source Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Open Source
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {OPEN_SOURCE_PROJECTS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-xl border border-border bg-surface hover:border-border-hover hover:bg-surface-hover transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-text-muted group-hover:text-foreground transition-colors" />
                  <h3 className="font-semibold text-base tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 self-end sm:self-center">
                <div className="w-8 h-8 rounded-lg border border-border bg-surface-card flex items-center justify-center text-text-muted group-hover:text-foreground group-hover:border-border-hover transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
