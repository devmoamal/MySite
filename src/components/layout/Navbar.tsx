import useDarkMode from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import IconButton from "../common/IconButton";
import Text from "../common/Text";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  const { theme, toggle } = useDarkMode();
  const icon = theme === "dark" ? Sun : Moon;

  return (
    <nav
      className={cn(
        "static top-0 left-0 right-0 z-50 flex bg-background items-center px-4 py-2 justify-between",
        className
      )}
    >
      {/* Logo here */}
      <Text className="text-text" weight="bold" size="lg">
        M
      </Text>

      {/* Dark mode toggle */}
      <IconButton Icon={icon} onClick={toggle} />
    </nav>
  );
}

export default Navbar;
