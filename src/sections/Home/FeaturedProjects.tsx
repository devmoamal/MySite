import { ALL_PROJECTS } from "@/constants/projects";

export default function FeaturedProjects() {
  const project = ALL_PROJECTS[0];

  if (!project) return null;

  return (
    <section className="py-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Projects
        </h2>
      </div>

      {/* Project Card */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-4 sm:p-5 rounded-xl border border-border bg-surface hover:border-border-hover transition-all block"
      >
        {/* Left: Banner image without size hover and without badge */}
        {project.image && (
          <div className="relative w-full sm:w-[280px] md:w-[320px] h-[180px] sm:h-[175px] rounded-lg overflow-hidden bg-surface-card border border-border/60 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        )}

        {/* Right: Title in top-left start, description directly under it */}
        <div className="flex-1 w-full flex flex-col items-start justify-start space-y-1.5 min-w-0 sm:pt-0.5">
          <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>
      </a>
    </section>
  );
}
