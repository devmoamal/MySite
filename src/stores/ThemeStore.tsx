import { DEFAULT_THEME } from "@/constants";
import type { Theme } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStoreState = {
  theme: Theme;
  toggle: () => void;
};

const toggle = (theme: Theme): Theme => {
  return theme == "dark" ? "light" : "dark";
};

const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      theme: DEFAULT_THEME,
      toggle: () => set((state) => ({ theme: toggle(state.theme) })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
