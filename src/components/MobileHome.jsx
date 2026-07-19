import { Fragment, useState } from "react";
import logoImg from "../assets/img/civcalprologo.png";
import { Icon } from "./common/Icon.jsx";
import { ThemeToggleButton } from "./ThemeToggleButton.jsx";
import { LearnButton } from "./LearnButton.jsx";
import { getDisplayValue } from "../utils/format.js";
import { MODULES } from "../data/constants.js";

export function MobileHome({ onNavigate, darkMode, setDarkMode, dashboardData }) {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  const stats = [
    {
      label: "Proyectos",
      value: getDisplayValue(dashboardData.projectsCount),
      color: "var(--green)",
    },
    {
      label: "Cálculos",
      value: getDisplayValue(dashboardData.calculationsCount),
      color: "var(--text-main)",
    },
    {
      label: "Exportados",
      value: getDisplayValue(dashboardData.exportsCount),
      color: "var(--text-main)",
    },
    {
      label: "Normas",
      value: "Listas",
      color:
        dashboardData.normsStatus === "OK"
          ? "var(--green)"
          : "var(--text-main)",
    },
  ];

  return (
    <>
      <header className="mobile-topbar">
        <button className="menu-btn" onClick={() => setShowMenuDrawer(true)}>
          <Icon name="menu" size={22} />
        </button>
        <div className="logo-row">
          <img src={logoImg} alt="CIVCALPRO logo" />
          <strong>
            CIVCA<span>LPRO</span>
          </strong>
        </div>
        <div className="mobile-topbar-actions">
          <LearnButton />
          <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>

      <div className="mobile-page">
        <div className="mobile-greeting">
          <h2>
            Bienvenido a{" "}
            <span style={{ color: "var(--green)" }}>CivCalPro</span>
          </h2>
          <p>¿Qué deseas calcular hoy?</p>
        </div>

        {/* Stats rápidas mobile */}
        <div className="mobile-stats-row">
          {stats.map((stat, idx) => (
            <Fragment key={`stat-row-${idx}`}>
              {idx !== 0 && <div className="mobile-stat-div" />}
              <div className="mobile-stat">
                <span className="mobile-stat-val" style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className="mobile-stat-lbl">{stat.label}</span>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="mobile-section-label">Módulos Principales</div>
        <div className="mobile-module-list">
          {MODULES.map((m) => (
            <div
              key={m.id}
              data-module={m.key}
              className="mobile-module-card"
              style={{ background: m.bg }}
              onClick={() => onNavigate(m.key)}
            >
              <div
                className="mobile-module-card-icon"
                style={{ background: m.bg }}
              >
                <img src={m.iconSrc} alt={m.label} />
              </div>
              <div className="mobile-module-card-info">
                <h4>
                  <span className="module-label">{m.label}</span>
                </h4>
                <p>{m.desc}</p>
              </div>
              <span className="mobile-chevron">
                <Icon name="chevron" size={16} />
              </span>
            </div>
          ))}
        </div>

        <div className="recent-section">
          <div className="recent-header">
            <div className="mobile-section-label" style={{ margin: 0 }}>
              Proyectos Recientes
            </div>
            <span>Ver todos</span>
          </div>
          {dashboardData.recentProjects.length > 0 ? (
            dashboardData.recentProjects.map((p, i) => (
              <div
                key={i}
                className="recent-card"
                style={{ marginTop: i === 0 ? 10 : 8 }}
              >
                <div
                  className="recent-thumb"
                  style={{ background: p.bg, fontSize: 22 }}
                >
                  {p.emoji}
                </div>
                <div className="recent-info">
                  <strong>{p.nombre}</strong>
                  <small>Actualizado {p.tiempo}</small>
                  <div className="recent-progress">
                    <div
                      className="recent-progress-bar"
                      style={{ width: `${p.pct}%`, background: p.color }}
                    />
                  </div>
                </div>
                <span className="mobile-chevron">
                  <Icon name="chevron" size={16} />
                </span>
              </div>
            ))
          ) : (
            <div className="home-empty-state">
              No hay proyectos recientes disponibles.
            </div>
          )}
        </div>
      </div>

      <nav className="mobile-bottom-nav">
        <button
          className="mobile-nav-item active"
          onClick={() => onNavigate("inicio")}
        >
          <Icon name="home" size={22} /> Inicio
        </button>
        <button
          className="mobile-nav-item"
          onClick={() => onNavigate("proyectos")}
        >
          <Icon name="folder" size={22} /> Proyectos
        </button>
        <button className="mobile-fab">
          <Icon name="plus" size={26} />
        </button>
        <button
          className="mobile-nav-item"
          onClick={() => onNavigate("reportes")}
        >
          <Icon name="chart" size={22} />
          Reportes
        </button>
        <button
          className="mobile-nav-item"
          onClick={() => onNavigate("historial")}
        >
          <Icon name="clock" size={22} /> Historial
        </button>
      </nav>

      {showMenuDrawer && (
        <div
          className="mobile-side-overlay"
          onClick={() => setShowMenuDrawer(false)}
        >
          <div
            className="mobile-side-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header">
              <strong>CIVCALPRO</strong>
            </div>

          <button
            className="drawer-module-item"
            onClick={() => {
              setShowMenuDrawer(false);
              onNavigate("configuracion");
            }}
          >
            <Icon name="settings" size={18} />
            Configuración
          </button>

            <button
              className="drawer-module-item"
              onClick={() => {
                setShowMenuDrawer(false);
                onNavigate("ayuda");
              }}
            >
              <Icon name="help" size={18} />
              Ayuda
            </button>

            <button
              className="drawer-module-item"
              onClick={() => {
                setShowMenuDrawer(false);
                onNavigate("normas");
              }}
            >
              <Icon name="book" size={18} />
              Normas COVENIN
            </button>
          </div>
        </div>
      )}
    </>
  );
}
