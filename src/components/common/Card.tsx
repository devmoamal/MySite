import { cn } from "@/lib/utils";

type CardProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Card({ children, onClick, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start p-2 hover:opacity-90 transition-all",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;
