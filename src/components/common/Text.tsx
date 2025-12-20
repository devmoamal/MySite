import { cn } from "@/lib/utils";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

function Text({ children, className }: TextProps) {
  return <div className={cn("text-text", className)}>{children}</div>;
}

export default Text;
