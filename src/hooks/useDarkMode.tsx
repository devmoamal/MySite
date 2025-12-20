import useThemeStore from "@/stores/ThemeStore";

function useDarkMode() {
  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggle);

  return { theme, toggle };
}

export default useDarkMode;
