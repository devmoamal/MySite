import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconButtonProps = {
  Icon: LucideIcon;
  size?: number;
  onClick?: () => void;
  className?: string;
};

function IconButton({ Icon, size = 24, onClick, className }: IconButtonProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full cursor-pointer text-foreground hover:opacity-80 transition-opacity",
        className
      )}
      onClick={onClick}
    >
      <Icon size={size} fill="currentColor" fillOpacity={0.2} />
    </div>
  );
}

export default IconButton;
