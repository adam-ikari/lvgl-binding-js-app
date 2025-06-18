import { changeLanguage } from "@/i18n";
import { create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface SettingsState {
  theme: string; // e.g., "light" or "dark"
  toggleTheme: () => void; // Method to toggle theme
  language: string; // language setting
  setLanguage: (language: string) => void; // Method to set language
}

const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      theme: "light", // default theme
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      language: "system", // default language
      setLanguage: (language: string) => {
        set({ language });
        changeLanguage(language);
      },
    }),
    {
      name: "settings-storage", // unique name for the storage
      version: 1, // version number for migrations
    } as PersistOptions<SettingsState, SettingsState>,
  ),
);

export type { SettingsState };
export { useSettingsStore };
