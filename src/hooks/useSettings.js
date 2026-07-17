import { usePersistentState } from "./useProyecto.js";
import { DEFAULT_SETTINGS, SETTINGS_KEY } from "../data/constants.js";

// Ajustes del usuario, sincronizados con localStorage bajo SETTINGS_KEY.
export function useSettings() {
  return usePersistentState(SETTINGS_KEY, DEFAULT_SETTINGS);
}
