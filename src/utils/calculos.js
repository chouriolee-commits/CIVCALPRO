export const calcularVolumen = ({ largo, ancho, altura, cantidad = 1 }) => {
  const volumenUnitario = (Number(largo) || 0) * (Number(ancho) || 0) * (Number(altura) || 0);
  const volumenTotal = volumenUnitario * (Number(cantidad) || 0);

  return {
    volumenUnitario,
    volumenTotal,
  };
};

export const getDisplayValue = (value, fallback = "-") =>
  value === null || value === undefined || value === "" ? fallback : value;

export const getInitials = (name) => {
  if (!name) return "UI";

  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
};

export const formatStorageSize = (bytes) => {
  if (!bytes) return "0.0 MB";

  const mb = bytes / (1024 * 1024);
  return `${mb < 0.1 ? mb.toFixed(2) : mb.toFixed(1)} MB`;
};

export const calculateStorageUsage = (storageApi = globalThis.localStorage) => {
  if (!storageApi) return 0;

  try {
    let total = 0;
    for (let index = 0; index < storageApi.length; index += 1) {
      const key = storageApi.key(index);
      const value = storageApi.getItem(key);
      if (!key || value === null) continue;
      total += key.length + value.length;
    }

    return total * 2;
  } catch {
    return 0;
  }
};

export const resolveDarkMode = (themeMode, prefersDark) =>
  themeMode === "dark" || (themeMode === "system" && prefersDark);
