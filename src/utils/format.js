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
