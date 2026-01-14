import { cn } from "@/lib/utils";

type TextProps = {
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "bold";
  link?: string;

  children?: React.ReactNode;
  className?: string;
};

function Text({
  size = "md",
  weight = "normal",
  link,
  children,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        size === "xs" && "text-xs",
        size === "sm" && "text-sm",
        size === "md" && "text-md",
        size === "lg" && "text-lg",
        weight === "normal" && "font-normal",
        weight === "medium" && "font-medium",
        weight === "bold" && "font-bold",

        link ? "cursor-pointer underline" : "",

        className
      )}
    >
      {children}
    </p>
  );
}

export default Text;
