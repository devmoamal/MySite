import { cn } from "@/lib/utils";

type AvatarProps = {
  size?: "sm" | "md" | "lg";
  src?: string;
  className?: string;
};

function Avatar({ size = "md", src, className }: AvatarProps) {
  return (
    <div
      className={cn(
        size === "sm" && "h-8 w-8",
        size === "md" && "h-16 w-16",
        size === "lg" && "h-24 w-24",
        "overflow-hidden rounded-full",
        className
      )}
    >
      <img className={"h-full w-full object-cover"} src={src} alt="avatar" />
    </div>
  );
}

export default Avatar;
