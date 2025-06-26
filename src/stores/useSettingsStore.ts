import { changeLanguage } from "@/i18n";
import { create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

const defaultSettings: Settings = {
  theme: "light", // default theme
  language: "zh", // default language
};

interface Settings {
  theme: string; // e.g., "light" or "dark"
  language: string; // e.g., "system:,"en", "zh", etc.
}

interface SettingsState extends Settings {
  toggleTheme: () => void; // Method to toggle theme
  setLanguage: (language: string) => void; // Method to set language
}

const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      ...defaultSettings,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
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
