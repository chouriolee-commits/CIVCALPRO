import { useEffect } from "react";
import { useSystemTheme } from "./useSync.js";
import { SYSTEM_THEME_QUERY, THEME_KEY } from "../data/constants.js";

const resolveDarkMode = (themeMode, prefersDark) =>
  themeMode === "dark" || (themeMode === "system" && prefersDark);

// Deriva darkMode a partir de settings.themeMode + preferencia del
// sistema, y expone un setDarkMode(bool) que escribe themeMode de
// vuelta en settings (igual al comportamiento original de App).
export function useTheme(settings, setSettings) {
  const prefersDark = useSystemTheme(SYSTEM_THEME_QUERY);
  const darkMode = resolveDarkMode(settings.themeMode, prefersDark);

  const setDarkMode = (nextDark) => {
    setSettings((prev) => ({
      ...prev,
      themeMode: nextDark ? "dark" : "light",
    }));
  };

  // Persistencia vestigial: nada vuelve a leer THEME_KEY (el modo
  // oscuro real se deriva de settings.themeMode), pero se conserva
  // el mismo efecto secundario que existía antes del refactor.
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
    } catch {}
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
