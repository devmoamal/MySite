import ProjectCard from "@/components/Project";
import { SAAS_PROJECTS } from "@/constants";
import { cn } from "@/lib/utils";
import Text from "@/components/common/Text";

type SaasProjectsProps = {
  className?: string;
};

function SaasProjects({ className }: SaasProjectsProps) {
  return (
    <div className={cn("my-6", className)}>
      {/* Title */}
      <Text className="text-text" weight="bold" size="lg">
        SaaS Projects
      </Text>

      {/* Separator */}
      <hr className="my-2" />

      {/* Project display here */}
      <div className="flex flex-col gap-y-2">
        {SAAS_PROJECTS.length === 0 ? (
          <Text className="text-text w-full text-center">
            No saas projects yet
          </Text>
        ) : (
          SAAS_PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        )}
      </div>
    </div>
  );
}

export default SaasProjects;
