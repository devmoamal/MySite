import { OPEN_SOURCE_PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/Project";
import Text from "@/components/common/Text";

type OpenSourceProjectsProps = {
  className?: string;
};

function OpenSourceProjects({ className }: OpenSourceProjectsProps) {
  return (
    <div className={cn("my-6", className)}>
      {/* Title */}
      <Text className="text-text" weight="bold" size="lg">
        Open Source Projects
      </Text>

      {/* Separator */}
      <hr className="my-2" />

      {/* Project display here */}
      <div className="flex flex-col gap-y-2">
        {OPEN_SOURCE_PROJECTS.length === 0 ? (
          <Text className="text-text w-full text-center">No projects yet</Text>
        ) : (
          OPEN_SOURCE_PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        )}
      </div>
    </div>
  );
}

export default OpenSourceProjects;
