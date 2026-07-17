import { Icon } from "./common/Icon.jsx";
import { getDisplayValue } from "../utils/format.js";
import { MODULES, ACCESOS } from "../data/constants.js";

export function DesktopHome({ onNavigate, dashboardData }) {
  const today = new Date().toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const todayFormatted = today.charAt(0).toUpperCase() + today.slice(1);

  const stats = [
    {
      label: "Proyectos",
      value: getDisplayValue(dashboardData.projectsCount),
      sub: dashboardData.activeProjects
        ? `${dashboardData.activeProjects} en progreso`
        : "Aún no hay datos",
      icon: "folder",
      color: "var(--green)",
    },
    {
      label: "Cálculos",
      value: getDisplayValue(dashboardData.calculationsCount),
      sub: dashboardData.calculationsWeek
        ? `esta semana: ${dashboardData.calculationsWeek}`
        : "Aún no hay datos",
      icon: "calc",
      color: "var(--text-main)",
    },
    {
      label: "Exportados",
      value: getDisplayValue(dashboardData.exportsCount),
      sub: dashboardData.exportDetail || "Aún no hay datos",
      icon: "export",
      color: "var(--text-main)",
    },
    {
      label: "Normas",
      value: "Listas",
      sub: "Normas COVENIN ",
      icon: "book",
      color: "var(--green)",
    },
  ];

  return (
    <div className="page">
      {/* Saludo */}
      <div className="home-greeting">
        <div>
          <h1>
            Bienvenido a <span>CivCalPro</span>
          </h1>
          <p>{todayFormatted} — aquí está el resumen de tu actividad</p>
        </div>
      </div>

      {/* Métricas */}
      <div className="home-stats">
        {stats.map((s, i) => (
          <div key={i} className="home-stat-card">
            <div className="home-stat-label">
              <Icon name={s.icon} size={14} /> {s.label}
            </div>
            <div className="home-stat-value" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="home-stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Fila 2: módulos + proyectos */}
      <div className="home-row2">
        <div className="home-card">
          <div className="home-card-header">
            <span className="home-card-title">Módulos de cálculo</span>
          </div>
          <div className="home-module-list">
            {MODULES.map((m) => (
              <div
                key={m.id}
                data-module={m.key}
                className="home-module-item"
                style={{ background: m.bg }}
                onClick={() => onNavigate(m.key)}
              >
                <div className="home-module-icon" style={{ background: m.bg }}>
                  <img src={m.iconSrc} alt={m.label} />
                </div>
                <div className="home-module-info">
                  <strong>
                    <span className="module-label">{m.label}</span>
                  </strong>
                  <small>{m.desc}</small>
                </div>
                <span className="home-module-arrow">
                  <Icon name="chevron" size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-header">
            <span className="home-card-title">Proyectos recientes</span>
            <span className="home-card-link">Ver todos</span>
          </div>
          <div className="home-proj-list">
            {dashboardData.recentProjects.length > 0 ? (
              dashboardData.recentProjects.map((p, i) => (
                <div key={i} className="home-proj-item">
                  <div className="home-proj-thumb" style={{ background: p.bg }}>
                    {p.emoji}
                  </div>
                  <div className="home-proj-info">
                    <strong>{p.nombre}</strong>
                    <small>Actualizado {p.tiempo}</small>
                    <div className="home-pbar-wrap">
                      <div
                        className="home-pbar"
                        style={{ width: `${p.pct}%`, background: p.color }}
                      />
                    </div>
                  </div>
                  <span className="home-proj-pct">{p.pct}%</span>
                </div>
              ))
            ) : (
              <div className="home-empty-state">
                No hay proyectos recientes disponibles.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fila 3: historial + acceso rápido */}
      <div className="home-row3">
        <div className="home-card">
          <div className="home-card-header">
            <span className="home-card-title">Últimos cálculos</span>
            <span className="home-card-link">Ver historial</span>
          </div>
          <div className="home-hist-list">
            {dashboardData.recentCalculations.length > 0 ? (
              dashboardData.recentCalculations.map((h, i) => (
                <div key={i} className="home-hist-item">
                  <div
                    className="home-hist-dot"
                    style={{ background: h.color }}
                  />
                  <div className="home-hist-info">
                    <strong>
                      {h.desc}
                      <span
                        className="home-hist-badge"
                        style={{ background: h.badgeBg, color: h.badgeColor }}
                      >
                        {h.modulo}
                      </span>
                    </strong>
                    <small>
                      {h.proyecto} — {h.resultado}
                    </small>
                  </div>
                  <span className="home-hist-time">{h.tiempo}</span>
                </div>
              ))
            ) : (
              <div className="home-empty-state">
                No hay cálculos recientes disponibles.
              </div>
            )}
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-header">
            <span className="home-card-title">Acceso rápido</span>
          </div>
          <div className="home-acceso-list">
            {ACCESOS.map((a, i) => (
              <div key={i} className="home-acceso-item">
                <div className="home-acceso-icon" style={{ background: a.bg }}>
                  <span style={{ color: a.iconColor }}>
                    <Icon name={a.icon} size={16} />
                  </span>
                </div>
                <div className="home-acceso-info">
                  <strong>{a.label}</strong>
                  <small>{a.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
