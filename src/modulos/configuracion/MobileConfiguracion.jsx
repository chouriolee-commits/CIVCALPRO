import { Icon } from "../../components/common/Icon.jsx";
import { SegmentedControl } from "../../components/common/SegmentedControl.jsx";
import { SettingsRow } from "../../components/common/SettingsRow.jsx";
import { SettingsToggle } from "../../components/common/SettingsToggle.jsx";
import { formatStorageSize } from "../../utils/storage.js";
import { APP_VERSION } from "../../data/constants.js";
import { THEME_OPTIONS, FONT_OPTIONS, LANGUAGE_OPTIONS } from "./configuracion.data.js";
import { useConfiguracion } from "./useConfiguracion.js";

export default function MobileConfiguracion({
  onBack,
  settings,
  onSettingsChange,
  onResetAllData,
  storageUsage,
  darkMode,
}) {
  const { updateSetting, themeLabel, fontLabel, languageLabel } =
    useConfiguracion(settings, onSettingsChange);

  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>
        <h2>Configuración</h2>
        <div className="mobile-topbar-actions">
          <span className="settings-pill success">
            {darkMode ? "Oscuro" : "Claro"}
          </span>
        </div>
      </header>

      <div className="mobile-page mobile-settings-page">
        <div className="mobile-settings-banner">
          <strong>Sin login ni cuenta</strong>
          <p>La app funciona offline y el dispositivo conserva tus preferencias.</p>
        </div>

        <div className="mobile-settings-group">
          <div className="mobile-section-label">Apariencia</div>
          <div className="mobile-settings-card">
            <SettingsRow
              title="Tema"
              subtitle={themeLabel}
              icon="palette"
              action={
                <SegmentedControl
                  options={THEME_OPTIONS}
                  value={settings.themeMode}
                  onChange={(value) => updateSetting("themeMode", value)}
                />
              }
            />
            <div className="settings-divider" />
            <SettingsRow
              title="Fuente"
              subtitle={fontLabel}
              icon="text"
              action={
                <SegmentedControl
                  options={FONT_OPTIONS}
                  value={settings.fontSize}
                  onChange={(value) => updateSetting("fontSize", value)}
                />
              }
            />
            <div className="settings-divider" />
            <SettingsRow
              title="Idioma"
              subtitle={languageLabel}
              icon="globe"
              action={
                <SegmentedControl
                  options={LANGUAGE_OPTIONS}
                  value={settings.language}
                  onChange={(value) => updateSetting("language", value)}
                />
              }
            />
          </div>
        </div>

        <div className="mobile-settings-group">
          <div className="mobile-section-label">Datos</div>
          <div className="mobile-settings-card">
            <SettingsRow
              title="Autoguardar"
              subtitle="Cálculos al historial"
              icon="save"
              action={
                <SettingsToggle
                  checked={settings.autosave}
                  onChange={(value) => updateSetting("autosave", value)}
                />
              }
            />
            <div className="settings-divider" />
            <SettingsRow
              title="Almacenamiento"
              subtitle={formatStorageSize(storageUsage)}
              icon="database"
              action={<span className="settings-pill">Usado</span>}
            />
            <div className="settings-divider" />
            <SettingsRow
              title="Borrar datos"
              subtitle="Elimina el contenido local"
              icon="trash2"
              destructive
              action={
                <button
                  type="button"
                  className="danger-btn"
                  onClick={onResetAllData}
                >
                  Borrar
                </button>
              }
            />
          </div>
        </div>

        <div className="mobile-settings-group">
          <div className="mobile-section-label">Acerca de</div>
          <div className="mobile-settings-card">
            <SettingsRow
              title="Versión"
              subtitle="App actual"
              icon="check_circle"
              action={<span className="settings-pill success">{APP_VERSION}</span>}
            />
            <div className="settings-divider" />
            <SettingsRow
              title="Normas COVENIN "
              subtitle="Biblioteca normativa integrada"
              icon="book"
              action={<span className="settings-pill">Lista</span>}
            />
            <div className="settings-divider" />
            <SettingsRow
              title="Modo de operación"
              subtitle="La app funciona sin internet"
              icon="info"
              action={<span className="settings-pill success">Offline</span>}
            />
          </div>
        </div>
      </div>
    </>
  );
}
