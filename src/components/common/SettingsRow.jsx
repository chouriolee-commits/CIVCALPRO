import { Icon } from "./Icon.jsx";

export function SettingsRow({ title, subtitle, action, icon, destructive = false }) {
  return (
    <div className={`settings-row ${destructive ? "destructive" : ""}`}>
      <div className="settings-row-copy">
        <span className="settings-row-title">
          {icon && (
            <span className="settings-row-icon">
              <Icon name={icon} size={15} />
            </span>
          )}
          {title}
        </span>
        <span className="settings-row-subtitle">{subtitle}</span>
      </div>
      {action}
    </div>
  );
}
