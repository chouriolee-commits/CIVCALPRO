import { THEME_OPTIONS, FONT_OPTIONS, LANGUAGE_OPTIONS } from "./configuracion.data.js";

// Helper de escritura + labels derivados, compartido entre la vista
// de escritorio (con tabs) y la móvil (grupos apilados).
export function useConfiguracion(settings, onSettingsChange) {
  const updateSetting = (key, value) => {
    onSettingsChange((prev) => ({ ...prev, [key]: value }));
  };

  const themeLabel =
    THEME_OPTIONS.find((option) => option.value === settings.themeMode)?.label ||
    "Sistema";

  const fontLabel =
    FONT_OPTIONS.find((option) => option.value === settings.fontSize)?.label ||
    "Normal";

  const languageLabel =
    LANGUAGE_OPTIONS.find((option) => option.value === settings.language)?.label ||
    "Español";

  return { updateSetting, themeLabel, fontLabel, languageLabel };
}
