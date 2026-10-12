import { Link } from "@tanstack/react-router";
import useDarkMode from "@/hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className = "" }: NavbarProps) {
  const { theme, toggle } = useDarkMode();

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border transition-colors ${className}`}
    >
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Navigation Tabs on the left (replacing logo/name) */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            activeProps={{
              className: "text-foreground font-semibold",
            }}
            inactiveProps={{
              className: "text-text-muted hover:text-foreground",
            }}
            className="text-xs sm:text-sm transition-colors font-medium"
          >
            Home
          </Link>

          <Link
            to="/projects"
            activeProps={{
              className: "text-foreground font-semibold",
            }}
            inactiveProps={{
              className: "text-text-muted hover:text-foreground",
            }}
            className="text-xs sm:text-sm transition-colors font-medium"
          >
            Projects
          </Link>

          <Link
            to="/resume"
            activeProps={{
              className: "text-foreground font-semibold",
            }}
            inactiveProps={{
              className: "text-text-muted hover:text-foreground",
            }}
            className="text-xs sm:text-sm transition-colors font-medium"
          >
            Resume
          </Link>
        </nav>

        {/* Dark/Light mode toggle - pure icon, no border, no background */}
        <button
          onClick={toggle}
          aria-label="Toggle color theme"
          className="p-1.5 text-text-muted hover:text-foreground transition-colors cursor-pointer"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
          )}
        </button>
      </div>
    </header>
  );
}
