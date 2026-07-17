import logoImg from "../assets/img/civcalprologo.png";
import { Icon } from "./common/Icon.jsx";
import { MODULES } from "../data/constants.js";

export function Sidebar({ activeModule, onNavigate }) {
  return (
    <aside className="sidebar desktop-only">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <img src={logoImg} alt="CIVCALPRO logo" />
        </div>
        <div className="logo-text">
          <strong>
            CIVCA<span>LPRO</span>
          </strong>
          <small>Software de Cálculo para la Construcción</small>
        </div>
      </div>
      <nav className="sidebar-nav">
        <div className="sidebar-section-label">Principal</div>
        <button
          className={`sidebar-item ${activeModule === "inicio" ? "active" : ""}`}
          onClick={() => onNavigate("inicio")}
        >
          <span className="item-icon">
            <Icon name="home" size={15} />
          </span>
          Inicio
        </button>
        <div className="sidebar-section-label">Módulos Principales</div>
        {MODULES.map((m) => (
          <button
            key={m.id}
            data-module={m.key}
            className={`sidebar-item ${activeModule === m.key ? "active" : ""}`}
            onClick={() => onNavigate(m.key)}
          >
            <span className="item-icon">
              <img src={m.iconSrc} alt={m.label} />
            </span>
            <span className="module-label">
              {m.id}. {m.label}
            </span>
          </button>
        ))}
        <div className="sidebar-section-label">Gestión</div>
        <button
          className={`sidebar-item ${activeModule === "proyectos" ? "active" : ""}`}
          onClick={() => onNavigate("proyectos")}
        >
          <span className="item-icon">
            <Icon name="folder" size={15} />
          </span>
          Proyectos
        </button>
        <button
          className={`sidebar-item ${activeModule === "historial" ? "active" : ""}`}
          onClick={() => onNavigate("historial")}
        >
          <span className="item-icon">
            <Icon name="clock" size={15} />
          </span>
          Historial de Cálculos
        </button>
        <button
          className={`sidebar-item ${activeModule === "reportes" ? "active" : ""}`}
          onClick={() => onNavigate("reportes")}
        >
          <span className="item-icon">
            <Icon name="chart" size={15} />
          </span>
          Reportes
        </button>
        <div className="sidebar-section-label">Ajustes</div>
        <button
          className={`sidebar-item ${activeModule === "configuracion" ? "active" : ""}`}
          onClick={() => onNavigate("configuracion")}
        >
          <span className="item-icon">
            <Icon name="settings" size={15} />
          </span>
          Configuración
        </button>
        <button
          className={`sidebar-item ${activeModule === "ayuda" ? "active" : ""}`}
          onClick={() => onNavigate("ayuda")}
        >
          <span className="item-icon">
            <Icon name="help" size={15} />
          </span>
          Ayuda
        </button>
        <button
          type="button"
          className={`sidebar-item sidebar-normas-item ${activeModule === "normas" ? "active" : ""}`}
          onClick={() => onNavigate("normas")}
        >
          <span className="item-icon sidebar-normas-icon">
            <Icon name="book" size={15} />
          </span>
          Normas COVENIN
        </button>
      </nav>
    </aside>
  );
}
