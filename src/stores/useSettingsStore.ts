import { create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface SettingsState {
  theme: string; // e.g., "light" or "dark"
  toggleTheme?: () => void; // Optional method to toggle theme
}

const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      theme: "light", // default theme
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "settings-storage", // unique name for the storage
    } as PersistOptions<SettingsState, SettingsState>,
  ),
);

export type { SettingsState };
export { useSettingsStore };
