import { useEffect, useState } from "react";

const readStoredValue = (key, fallback) => {
  if (typeof window === "undefined") return fallback;

  try {
    const serializedValue = window.localStorage.getItem(key);
    if (serializedValue === null) return fallback;

    const parsedValue = JSON.parse(serializedValue);

    if (
      typeof fallback === "object" &&
      fallback !== null &&
      !Array.isArray(fallback)
    ) {
      return { ...fallback, ...parsedValue };
    }

    return parsedValue;
  } catch {
    return fallback;
  }
};

export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue));

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (value === undefined) {
        window.localStorage.removeItem(key);
        return;
      }

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  return [value, setValue];
}
