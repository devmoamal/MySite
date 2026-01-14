import { cn } from "@/lib/utils";
import Card from "./common/Card";
import Text from "./common/Text";
import type { Project } from "@/types";

export type ProjectCardProps = {
  project: Project;
  // image?: string;
  className?: string;
};

function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "bg-foreground text-text-foreground rounded-xl cursor-pointer",
        className
      )}
      onClick={() => window.open(project.link)}
    >
      {/* Title section */}
      <div className="flex items-center gap-x-2">
        <Text size="lg" weight="bold">
          {project.title}
        </Text>
      </div>

      {/* Description section */}
      <Text size="md" weight="normal">
        {project.description}
      </Text>

      {/**
       * Stack section
       * if stack is not empty, render it
       */}
      {project.stack ? (
        <>
          <hr className="border-text-foreground/40 w-full my-1" />
          <div className="flex gap-x-2 items-center flex-wrap">
            {project.stack.map((stack) => (
              <Text
                key={stack}
                size="sm"
                weight="normal"
                link={`https://google.com?search=${stack}`}
              >
                {stack}
              </Text>
            ))}
          </div>
        </>
      ) : undefined}
    </Card>
  );
}

export default ProjectCard;
