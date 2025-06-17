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
      version: 1, // version number for migrations
      throttle: 1000, // save at most once per second
      onRehydrateStorage: () => (state) => {
        // Force save when rehydrated
        if (state) {
          useSettingsStore.persist.save();
        }
      },
    } as PersistOptions<SettingsState, SettingsState>,
  ),
);

export type { SettingsState };
export { useSettingsStore };
