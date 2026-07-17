export function ThemeToggleButton({ darkMode, setDarkMode, className = "" }) {
  return (
    <button
      className={`theme-btn ${className}`.trim()}
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      type="button"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
