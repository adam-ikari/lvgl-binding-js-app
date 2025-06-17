import i18n from "@/i18n";
import { create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";

interface SettingsState {
  theme: string; // e.g., "light" or "dark"
  toggleTheme: () => void; // Method to toggle theme
  language: string; // language setting
  setLanguage: (lang: string) => void; // Method to set language
}

const useSettingsStore = create(
  persist<SettingsState>(
    (set) => ({
      theme: "light", // default theme
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
      language: "en", // default language
      setLanguage: (lang: string) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },
    }),
    {
      name: "settings-storage", // unique name for the storage
    } as PersistOptions<SettingsState, SettingsState>,
  ),
);

export type { SettingsState };
export { useSettingsStore };
