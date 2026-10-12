import { createFileRoute } from "@tanstack/react-router";
import Resume from "@/pages/Resume";

export const Route = createFileRoute("/resume")({
  component: ResumeComponent,
});

function ResumeComponent() {
  return <Resume />;
}
