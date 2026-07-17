export const readJSON = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const formatStorageSize = (bytes) => {
  if (!bytes) return "0.0 MB";
  const mb = bytes / (1024 * 1024);
  return `${mb < 0.1 ? mb.toFixed(2) : mb.toFixed(1)} MB`;
};

export const getLocalStorageUsage = () => {
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (!key || value === null) continue;
      total += key.length + value.length;
    }
    return total * 2;
  } catch {
    return 0;
  }
};
