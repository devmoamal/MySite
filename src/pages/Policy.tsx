import { cn } from "@/lib/utils";

type PolicyProps = {
  className?: string;
  children: React.ReactNode;
};

function Policy({ className, children }: PolicyProps) {
  return <div className={cn("", className)}>{children}</div>;
}

export default Policy;
