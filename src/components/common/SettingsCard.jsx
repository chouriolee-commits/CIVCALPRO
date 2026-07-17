import { Icon } from "./Icon.jsx";

export function SettingsCard({ title, subtitle, icon, children, accent = "neutral" }) {
  return (
    <section className={`settings-card accent-${accent}`}>
      <div className="settings-card-header">
        <div className="settings-card-title">
          <span className="settings-card-icon">
            <Icon name={icon} size={18} />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
