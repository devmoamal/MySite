import { OPEN_SOURCE_PROJECTS } from "@/constants/projects";
import { Github, ArrowUpRight } from "lucide-react";

export default function OpenSourceSection() {
  return (
    <section className="py-6">
      {/* Big bold header */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Open Source
        </h2>
      </div>

      {/* One minimal card per row */}
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
  );
}
