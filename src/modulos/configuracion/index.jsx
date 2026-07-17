import { useState } from "react";
import { Icon } from "../../components/common/Icon.jsx";
import { SegmentedControl } from "../../components/common/SegmentedControl.jsx";
import { SettingsRow } from "../../components/common/SettingsRow.jsx";
import { SettingsCard } from "../../components/common/SettingsCard.jsx";
import { SettingsToggle } from "../../components/common/SettingsToggle.jsx";
import { formatStorageSize } from "../../utils/storage.js";
import { APP_VERSION } from "../../data/constants.js";
import {
  SETTINGS_SECTIONS,
  SETTINGS_COPY,
  THEME_OPTIONS,
  FONT_OPTIONS,
  LANGUAGE_OPTIONS,
} from "./configuracion.data.js";
import { useConfiguracion } from "./useConfiguracion.js";

export default function ModuloConfiguracion({
  settings,
  onSettingsChange,
  onResetAllData,
  storageUsage,
  darkMode,
}) {
  const [activeSection, setActiveSection] = useState("apariencia");
  const { updateSetting, themeLabel, fontLabel, languageLabel } =
    useConfiguracion(settings, onSettingsChange);

  const deviceMode = darkMode ? "Modo oscuro activo" : "Modo claro activo";

  return (
    <div className="page settings-page">
      <div className="settings-shell">
        <aside className="settings-nav">
          <div className="settings-nav-title">
            <Icon name="settings" size={18} />
            <span>Configuración</span>
          </div>
          {SETTINGS_SECTIONS.map((section) => (
            <button
              key={section.key}
              type="button"
              className={`settings-nav-item ${activeSection === section.key ? "active" : ""}`}
              onClick={() => setActiveSection(section.key)}
            >
              <span className="settings-nav-item-icon">
                <Icon name={section.icon} size={16} />
              </span>
              <span className="settings-nav-item-copy">
                <strong>{section.label}</strong>
                <small>{section.desc}</small>
              </span>
              <Icon name="chevron" size={14} />
            </button>
          ))}
        </aside>

        <div className="settings-content">
          <SettingsCard
            title={SETTINGS_COPY[activeSection].title}
            subtitle={SETTINGS_COPY[activeSection].subtitle}
            icon={SETTINGS_SECTIONS.find((section) => section.key === activeSection)?.icon || "settings"}
            accent="blue"
          >
            {activeSection === "apariencia" && (
              <>
                <SettingsRow
                  title="Tema"
                  subtitle="Apariencia visual de la app"
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
                  title="Tamaño de fuente"
                  subtitle="Tamaño del texto en la interfaz"
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
                  subtitle="Idioma de la interfaz"
                  icon="globe"
                  action={
                    <SegmentedControl
                      options={LANGUAGE_OPTIONS}
                      value={settings.language}
                      onChange={(value) => updateSetting("language", value)}
                    />
                  }
                />
                <div className="settings-summary">
                  <div className="settings-summary-item">
                    <strong>Tema actual</strong>
                    <span>{themeLabel}</span>
                  </div>
                  <div className="settings-summary-item">
                    <strong>Fuente</strong>
                    <span>{fontLabel}</span>
                  </div>
                  <div className="settings-summary-item">
                    <strong>Idioma</strong>
                    <span>{languageLabel}</span>
                  </div>
                </div>
              </>
            )}

            {activeSection === "dispositivo" && (
              <>
                <SettingsRow
                  title="Modo de operación"
                  subtitle="La app funciona sin internet"
                  icon="monitor"
                  action={<span className="settings-pill success">Offline</span>}
                />
                <div className="settings-divider" />
                <SettingsRow
                  title="Equipo actual"
                  subtitle="La configuración se guarda en este dispositivo"
                  icon="device"
                  action={<span className="settings-pill">Este equipo</span>}
                />
                <div className="settings-divider" />
                <SettingsRow
                  title="Tema activo"
                  subtitle="Se aplica según la preferencia elegida"
                  icon="sun"
                  action={<span className="settings-pill">{deviceMode}</span>}
                />
              </>
            )}

            {activeSection === "datos" && (
              <>
                <SettingsRow
                  title="Autoguardar cálculos"
                  subtitle="Guarda cada cálculo en el historial"
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
                  title="Almacenamiento local usado"
                  subtitle="Proyectos y cálculos guardados"
                  icon="database"
                  action={<span className="settings-pill">{formatStorageSize(storageUsage)}</span>}
                />
                <div className="settings-divider" />
                <SettingsRow
                  title="Borrar todos los datos"
                  subtitle="Elimina proyectos e historial local"
                  icon="trash2"
                  destructive
                  action={
                    <button type="button" className="danger-btn" onClick={onResetAllData}>
                      Borrar datos
                    </button>
                  }
                />
              </>
            )}

            {activeSection === "exportacion" && (
              <>
                <div className="settings-feature-grid">
                  <div className="settings-feature">
                    <Icon name="file" size={18} />
                    <strong>PDF</strong>
                    <small>Listo para entregar</small>
                  </div>
                  <div className="settings-feature">
                    <Icon name="table" size={18} />
                    <strong>Excel</strong>
                    <small>Exportaciones tabulares</small>
                  </div>
                  <div className="settings-feature">
                    <Icon name="share" size={18} />
                    <strong>Compartir</strong>
                    <small>Archivos locales o enlace</small>
                  </div>
                </div>
                <div className="settings-divider" />
                <SettingsRow
                  title="Exportar último cálculo"
                  subtitle="Acceso rápido desde la pantalla principal"
                  icon="export"
                  action={<span className="settings-pill">Disponible</span>}
                />
              </>
            )}

            {activeSection === "acerca" && (
              <>
                <SettingsRow
                  title="Versión"
                  subtitle="Versión actual de la app"
                  icon="check_circle"
                  action={<span className="settings-pill success">{APP_VERSION}</span>}
                />
                <div className="settings-divider" />
                <SettingsRow
                  title="VENIN incluidas"
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
              </>
            )}
          </SettingsCard>
        </div>
      </div>
    </div>
  );
}
