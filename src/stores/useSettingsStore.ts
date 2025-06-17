import { create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface SettingsState {
  theme: string; // e.g., "light" or "dark"
  setTheme: (newTheme: string) => void;
}

const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      theme: "light", // default theme
      setTheme: (newTheme: string) => set({ theme: newTheme }),
    }),
    {
      name: "settings-storage", // unique name for the storage
    } as PersistOptions<SettingsState, SettingsState>,
  ),
);

export type { SettingsState };
export { useSettingsStore };
