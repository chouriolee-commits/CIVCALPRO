import { ThemeToggleButton } from "./ThemeToggleButton.jsx";
import { MODULES } from "../data/constants.js";

export function Topbar({ title, darkMode, setDarkMode, activeModule }) {
  const modulo = MODULES.find((m) => m.key === activeModule);

  return (
    <header className="topbar desktop-only">
      <div className="topbar-left">
        {/* Breadcrumb */}
        <div className="topbar-breadcrumb">
          {modulo ? (
            <>
              <span
                className="topbar-breadcrumb-icon"
                style={{
                  width: 22,
                  height: 22,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img src={modulo.iconSrc} alt={modulo.label} />
              </span>
              <span className="topbar-breadcrumb-main">{modulo.label}</span>
              <span className="topbar-breadcrumb-sep">›</span>
              <span className="topbar-breadcrumb-sub">
                Cálculo de elementos
              </span>
            </>
          ) : (
            <span className="topbar-breadcrumb-main">{title}</span>
          )}
        </div>

        {/* Línea verde debajo del módulo activo */}
        {modulo && <div className="topbar-breadcrumb-underline" />}
      </div>

      <div className="topbar-right">
        <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}
