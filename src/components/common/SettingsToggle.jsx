export function SettingsToggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`settings-toggle ${checked ? "checked" : ""}`}
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
    >
      <span className="settings-toggle-knob" />
    </button>
  );
}
