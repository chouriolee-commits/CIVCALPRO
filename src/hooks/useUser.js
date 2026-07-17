import { usePersistentState } from "./useProyecto.js";
import { USER_KEY, DEFAULT_USER } from "../data/constants.js";

// Usuario local, sincronizado con localStorage bajo USER_KEY.
export function useUser() {
  return usePersistentState(USER_KEY, DEFAULT_USER);
}
