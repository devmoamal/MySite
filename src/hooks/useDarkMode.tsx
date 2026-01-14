import useThemeStore from "@/stores/ThemeStore";
import { useEffect } from "react";

function useDarkMode() {
  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggle);

  // Changing dom to the theme
  useEffect(() => {
    document.documentElement.className = theme;
    document.documentElement.style.backgroundColor = "var(--background)";
  }, [theme]);

  return { theme, toggle };
}

export default useDarkMode;
