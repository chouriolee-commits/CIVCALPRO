import { useState, useEffect, Fragment } from "react";
import logoImg from "./assets/img/civcalprologo.png";
import reglaImg from "./assets/img/regla.png";
import mezcladoraImg from "./assets/img/mezcladora.png";
import libroImg from "./assets/img/libro.png";
import calculadoraImg from "./assets/img/calculadora.png";
import columnaImg from "./assets/img/columna.png";
import excavacionImg from "./assets/img/excavacion.png";
import losaImg from "./assets/img/losa.png";
import muroImg from "./assets/img/muro.png";
import otroImg from "./assets/img/otro.png";
import pisoImg from "./assets/img/piso.png";
import vigaImg from "./assets/img/viga.png";
import zapataImg from "./assets/img/zapata.png";
import "./App.css";


// ─── ICONS ───────────────────────────────────────────────────
const Icon = ({ name, size = 18 }) => {
  const icons = {
    home: (
      <path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
    folder: (
      <>
        <rect
          x="2"
          y="7"
          width="20"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M2 7l4-4h6l2 2h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    clock: (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    chart: (
      <>
        <rect x="3" y="12" width="4" height="8" rx="1" fill="currentColor" />
        <rect x="10" y="7" width="4" height="13" rx="1" fill="currentColor" />
        <rect x="17" y="3" width="4" height="17" rx="1" fill="currentColor" />
      </>
    ),
    settings: (
      <>
        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    help: (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </>
    ),
    bell: (
      <path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    ),
    menu: (
      <>
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    chevron: (
      <path
        d="M9 18l6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    back: (
      <path
        d="M15 18l-6-6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    save: (
      <>
        <path
          d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline
          points="17 21 17 13 7 13 7 21"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline
          points="7 3 7 8 15 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    trash: (
      <>
        <polyline
          points="3 6 5 6 21 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 11v6M14 11v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    plus: (
      <>
        <line
          x1="12"
          y1="5"
          x2="12"
          y2="19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </>
    ),
    calc: (
      <>
        <rect
          x="4"
          y="2"
          width="16"
          height="20"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="8"
          y1="6"
          x2="16"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="8" cy="11" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="16" cy="11" r="1" fill="currentColor" />
        <circle cx="8" cy="15" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
        <circle cx="8" cy="19" r="1" fill="currentColor" />
        <circle cx="12" cy="19" r="1" fill="currentColor" />
      </>
    ),
    user: (
      <>
        <path
          d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="7"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    arrow_r: (
      <path
        d="M5 12h14M12 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    wifi: (
      <>
        <path
          d="M5 12.55a11 11 0 0114.08 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1.42 9a16 16 0 0121.16 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8.53 16.11a6 6 0 016.95 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </>
    ),
    export: (
      <>
        <path
          d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline
          points="17 8 12 3 7 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="12"
          y1="3"
          x2="12"
          y2="15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    refresh: (
      <>
        <polyline
          points="23 4 23 10 17 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.49 15a9 9 0 11-2.12-9.36L23 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    bulb: (
      <>
        <path
          d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" fill="none" stroke="currentColor" strokeWidth="2"/>
      </>
    ),
    device: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name]}
    </svg>
  );
};

// ─── DATA ─────────────────────────────────────────────────────
const MODULES = [
  {
    id: 1,
    key: "computos",
    label: "Cómputos Métricos",
    desc: "Bloques, columnas, vigas, losas y más.",
    icon: <img src={reglaImg} alt="Cómputos Métricos" />,
    color: "card-green",
    btnColor: "btn-green",
    bg: "#E8F8EF",
  },
  {
    id: 2,
    key: "concreto",
    label: "Dosificación de Concreto",
    desc: "f'c 150 / 180 / 210 kg/cm².",
    icon: <img src={mezcladoraImg} alt="Dosificación de Concreto" />,
    color: "card-orange",
    btnColor: "btn-orange",
    bg: "#FEF3E8",
  },
  {
    id: 3,
    key: "biblioteca",
    label: "Biblioteca de Materiales",
    desc: "Acero, bloques, áridos y acabados.",
    icon: <img src={libroImg} alt="Biblioteca de Materiales" />,
    color: "card-purple",
    btnColor: "btn-purple",
    bg: "#F3EFFE",
  },
  {
    id: 4,
    key: "estimacion",
    label: "Estimación de Materiales",
    desc: "Pintura, cerámica, repello y enchape.",
    icon: <img src={calculadoraImg} alt="Estimación de Materiales" />,
    color: "card-blue",
    btnColor: "btn-blue",
    bg: "#EFF4FF",
  },
];

const ELEMENTOS = [
  { id: "columna", label: "Columna", icon: <img src={columnaImg} alt="Columna" /> },
  { id: "viga", label: "Viga", icon: <img src={vigaImg} alt="Viga" /> },
  { id: "losa", label: "Losa", icon: <img src={losaImg} alt="Losa" /> },
  { id: "muro", label: "Muro", icon: <img src={muroImg} alt="Muro" /> },
  { id: "zapata", label: "Zapata", icon: <img src={zapataImg} alt="Zapata" /> },
  { id: "piso", label: "Piso", icon: <img src={pisoImg} alt="Piso" /> },
  { id: "excavacion", label: "Excavación", icon: <img src={excavacionImg} alt="Excavación" /> },
  { id: "otro", label: "Otro", icon: <img src={otroImg} alt="Otro" /> },
];

const PASOS = [
  {
    num: 1,
    label: "Seleccionar elemento",
    sub: "Elige el tipo de elemento a calcular",
  },
  {
    num: 2,
    label: "Ingresar dimensiones",
    sub: "Ingresa las medidas requeridas",
  },
  { num: 3, label: "Resultados", sub: "Visualiza los resultados del cálculo" },
  { num: 4, label: "Guardar", sub: "Guarda el cómputo en tu proyecto" },
];

const STATS = [
  {
    label: "Proyectos",
    value: "6",
    sub: "4 en progreso",
    icon: "folder",
    color: "var(--green)",
  },
  {
    label: "Cálculos",
    value: "38",
    sub: "esta semana: 12",
    icon: "calc",
    color: "var(--text-main)",
  },
  {
    label: "Exportados",
    value: "14",
    sub: "PDF y Excel",
    icon: "export",
    color: "var(--text-main)",
  },
  {
    label: "Normas",
    value: "OK",
    sub: "COVENIN actualizadas",
    icon: "wifi",
    color: "var(--green)",
  },
];

const PROYECTOS = [
  {
    nombre: "Edif. Residencial - Santa Marta",
    emoji: "🏢",
    pct: 65,
    color: "var(--green)",
    bg: "#EFF4FF",
    tiempo: "hace 2 días",
  },
  {
    nombre: "C. Comercial - Barranquilla",
    emoji: "🏗️",
    pct: 40,
    color: "var(--orange)",
    bg: "#FEF3E8",
    tiempo: "hace 5 días",
  },
  {
    nombre: "Colegio Municipal - Medellín",
    emoji: "🏛️",
    pct: 25,
    color: "var(--purple)",
    bg: "#F3EFFE",
    tiempo: "hace 3 días",
  },
];

const HISTORIAL = [
  {
    desc: "Columna 0.30×0.30 m — ×12",
    modulo: "Cómputos",
    proyecto: "Edif. Residencial",
    resultado: "3.24 m³",
    color: "var(--green)",
    badgeBg: "#E8F8EF",
    badgeColor: "#166534",
    tiempo: "Hoy",
  },
  {
    desc: "Concreto f'c 210 — 3 m³",
    modulo: "Concreto",
    proyecto: "Edif. Residencial",
    resultado: "21 sacos",
    color: "var(--orange)",
    badgeBg: "#FEF3E8",
    badgeColor: "#9A3412",
    tiempo: "Ayer",
  },
  {
    desc: "Pintura interior — 120 m²",
    modulo: "Estimación",
    proyecto: "Edif. Residencial",
    resultado: "8 galones",
    color: "var(--blue)",
    badgeBg: "#EFF4FF",
    badgeColor: "#1D4ED8",
    tiempo: "Ayer",
  },
];

const ACCESOS = [
  {
    label: "Nuevo proyecto",
    sub: "Organiza tus cálculos en un proyecto",
    icon: "plus",
    bg: "#E8F8EF",
    iconColor: "#166534",
  },
  {
    label: "Exportar último cálculo",
    sub: "Descarga el PDF de la columna de hoy",
    icon: "export",
    bg: "#EFF4FF",
    iconColor: "#1D4ED8",
  },
  {
    label: "Normas COVENIN",
    sub: "Última actualización: hace 2 días",
    icon: "refresh",
    bg: "#FEF3E8",
    iconColor: "#9A3412",
  },
];

const EMPTY_DASHBOARD = {
  projectsCount: null,
  activeProjects: null,
  calculationsCount: null,
  calculationsWeek: null,
  exportsCount: null,
  exportDetail: null,
  normsStatus: null,
  normsDetail: null,
  recentProjects: [],
  recentCalculations: [],
};

const getDisplayValue = (value, fallback = "-") =>
  value === null || value === undefined || value === "" ? fallback : value;

const getInitials = (name) => {
  if (!name) return "UI";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
};

// ─── THEME TOGGLE ─────────────────────────────────────────────
function ThemeToggleButton({ darkMode, setDarkMode, className = "" }) {
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

// ─── SIDEBAR ──────────────────────────────────────────────────
function Sidebar({ activeModule, onNavigate, user }) {
  const displayName = user?.name || "Invitado";
  const displayRole = user?.isLoggedIn ? user.role || "Usuario" : "Invitado";

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
            <span className="item-icon">{m.icon}</span>
            <span className="module-label">{m.id}. {m.label}</span>
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
        <button className="sidebar-item">
          <span className="item-icon">
            <Icon name="settings" size={15} />
          </span>
          Configuración
        </button>
        <button className="sidebar-item">
          <span className="item-icon">
            <Icon name="help" size={15} />
          </span>
          Ayuda
        </button>
      </nav>
      <div className="sidebar-user">
        <div className="device-icon">
          <Icon name="device" size={16} />
        </div>
        <div className="user-info">
          <strong>CivCalPro</strong>
          <small>Modo offline</small>
        </div>
      </div>
    </aside>
  );
}

// ─── TOPBAR ───────────────────────────────────────────────────
function Topbar({ title, darkMode, setDarkMode, showOnline = false }) {
  return (
    <header className="topbar desktop-only">
      <div className="topbar-left">
        <span className="topbar-title">{title}</span>
      </div>
      <div className="topbar-right">
        {showOnline && (
          <div className="normas-badge">
            <Icon name="book" size={13} /> Normas COVENIN incluidas
          </div>
        )}
        <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
        <button className="notif-btn">
          <Icon name="bell" size={22} />
          <span className="notif-badge">3</span>
        </button>
      </div>
    </header>
  );
}

// ─── DESKTOP HOME (NUEVO DASHBOARD) ───────────────────────────
function DesktopHome({ onNavigate, user, dashboardData }) {
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
      sub: "COVENIN incluidas",
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
          <p>{todayFormatted} —  aquí está el resumen de tu actividad</p>
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
                  {m.icon}
                </div>
                <div className="home-module-info">
                  <strong><span className="module-label">{m.label}</span></strong>
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

// ─── DESKTOP MÓDULO 1 — CÓMPUTOS MÉTRICOS ────────────────────
function ModuloComputos() {
  const [elemento, setElemento] = useState("columna");
  const [largo, setLargo] = useState("0.30");
  const [ancho, setAncho] = useState("0.30");
  const [altura, setAltura] = useState("3.00");
  const [cantidad, setCantidad] = useState("12");

  const volUnitario =
    (parseFloat(largo) || 0) *
    (parseFloat(ancho) || 0) *
    (parseFloat(altura) || 0);
  const volTotal = volUnitario * (parseFloat(cantidad) || 0);

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Cómputos <span>Métricos</span>
        </h1>
        <p>
          Calcula cantidades de obra a partir de las dimensiones de tu proyecto.
        </p>
      </div>
      <div className="module-preview">
        <div className="stepper-sidebar">
          <div className="stepper-sidebar-title">1. Cómputos Métricos</div>
          {PASOS.map((p) => (
            <div
              key={p.num}
              className={`stepper-step ${p.num === 1 ? "active" : ""}`}
            >
              <div className="step-num">{p.num}</div>
              <div className="step-info">
                <strong>{p.label}</strong>
                <small>{p.sub}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="preview-content">
          <h2>Seleccionar elemento a calcular</h2>
          <p>
            Elige el tipo de elemento que deseas calcular para tu cómputo
            métrico.
          </p>
          <div className="element-selector">
            {ELEMENTOS.map((el) => (
              <button
                key={el.id}
                className={`element-btn ${elemento === el.id ? "active" : ""}`}
                onClick={() => setElemento(el.id)}
              >
                <span className="element-btn-icon">{el.icon}</span>
                {el.label}
              </button>
            ))}
          </div>
          <div className="form-section-title">Datos del elemento</div>
          <div className="form-grid">
            <div className="form-field">
              <label>Proyecto</label>
              <select defaultValue="edificio">
                <option value="edificio">
                  Edificio Residencial - Santa Marta
                </option>
                <option value="otro">Otro proyecto</option>
              </select>
            </div>
            <div className="form-field">
              <label>Nivel / Piso</label>
              <select defaultValue="nivel1">
                <option value="nivel1">Nivel 1</option>
                <option value="nivel2">Nivel 2</option>
                <option value="nivel3">Nivel 3</option>
              </select>
            </div>
          </div>
          <div className="form-grid form-grid-4">
            <div className="form-field">
              <label>Largo (m)</label>
              <input
                type="number"
                value={largo}
                step="0.01"
                onChange={(e) => setLargo(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Ancho (m)</label>
              <input
                type="number"
                value={ancho}
                step="0.01"
                onChange={(e) => setAncho(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Altura (m)</label>
              <input
                type="number"
                value={altura}
                step="0.01"
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Cantidad</label>
              <input
                type="number"
                value={cantidad}
                min="1"
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          </div>
          <div className="result-bar">
            <span className="result-bar-left">
              Volumen unitario:&nbsp;&nbsp;
              <strong>{volUnitario.toFixed(2)} m³</strong>
            </span>
            <span className="result-bar-right">
              Volumen total: {volTotal.toFixed(2)} m³
            </span>
          </div>
          <div className="action-row">
            <button className="btn btn-ghost">
              <Icon name="trash" size={15} /> Limpiar
            </button>
            <button className="btn btn-green">
              <Icon name="calc" size={15} /> Calcular
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── DATOS: DOSIFICACIONES DE CONCRETO ───────────────────────
const DOSIFICACIONES = [
  {
    id: "f150",
    fc: "f'c = 150 kg/cm²",
    ratio: "1 : 3 : 6",
    desc: "Replantillos, andenes, pisos",
    cemento: 5.5,   // sacos por m³
    arena:   0.56,  // m³ por m³ de concreto
    piedra:  0.84,  // m³ por m³ de concreto
    agua:    216,   // litros por m³
    pesoSaco: 42.5,
  },
  {
    id: "f180",
    fc: "f'c = 180 kg/cm²",
    ratio: "1 : 2.5 : 4",
    desc: "Losas, escaleras, muros",
    cemento: 6.5,
    arena:   0.52,
    piedra:  0.74,
    agua:    204,
    pesoSaco: 42.5,
  },
  {
    id: "f210",
    fc: "f'c = 210 kg/cm²",
    ratio: "1 : 1.5 : 3",
    desc: "Columnas, vigas, cimentaciones",
    cemento: 7.0,
    arena:   0.50,
    piedra:  0.70,
    agua:    195,
    pesoSaco: 42.5,
  },
];

// ─── DATOS: BIBLIOTECA DE MATERIALES ─────────────────────────
const CATEGORIAS_MATERIALES = [
  {
    id: "estructurales",
    label: "Estructurales",
    color: "#7C3AED",
    materiales: [
      {
        id: "acero",
        nombre: "Acero de Refuerzo",
        categoria: "Material estructural · Metálico",
        norma: "COVENIN 1618",
        icono: "tools",
        propiedades: [
          { label: "Densidad / Peso específico", valor: "7,850", unidad: "kg/m³" },
          { label: "Módulo de elasticidad",      valor: "200,000", unidad: "MPa" },
          { label: "Límite de fluencia fy",      valor: "4,200", unidad: "kg/cm²" },
          { label: "Resistencia a tensión",      valor: "6,300", unidad: "kg/cm²" },
        ],
        presentaciones: ["Ø 3/8\" (9.5 mm)", "Ø 1/2\" (12.7 mm)", "Ø 5/8\" (15.9 mm)", "Ø 3/4\" (19.1 mm)", "Ø 1\" (25.4 mm)"],
        usos: ["Vigas y columnas", "Losas de entrepiso", "Cimentaciones", "Muros estructurales"],
        normas: [
          { codigo: "COVENIN 1638", desc: "Barras de acero de refuerzo" },
          { codigo: "ASTM A615",    desc: "Grado 60" },
        ],
      },
      {
        id: "concreto_mat",
        nombre: "Concreto Estructural",
        categoria: "Material estructural · Pétreo",
        norma: "COVENIN 1753",
        icono: "building",
        propiedades: [
          { label: "Densidad",           valor: "2,400", unidad: "kg/m³" },
          { label: "Resistencia f'c",    valor: "210",   unidad: "kg/cm²" },
          { label: "Módulo de Young",    valor: "21,538", unidad: "MPa" },
          { label: "Coef. de Poisson",   valor: "0.20",  unidad: "" },
        ],
        presentaciones: ["f'c 150 kg/cm²", "f'c 180 kg/cm²", "f'c 210 kg/cm²", "f'c 250 kg/cm²"],
        usos: ["Columnas", "Vigas", "Losas", "Fundaciones"],
        normas: [
          { codigo: "COVENIN 1753", desc: "Estructuras de concreto armado" },
          { codigo: "COVENIN 633",  desc: "Cemento Portland" },
        ],
      },
      {
        id: "bloque_arcilla",
        nombre: "Bloque de Arcilla",
        categoria: "Material de mampostería · Cerámico",
        norma: "COVENIN 42",
        icono: "layout-board",
        propiedades: [
          { label: "Densidad",           valor: "1,800", unidad: "kg/m³" },
          { label: "Resistencia compresión", valor: "40", unidad: "kg/cm²" },
          { label: "Absorción de agua",  valor: "< 15",  unidad: "%" },
          { label: "Dimensiones",        valor: "40×20×15", unidad: "cm" },
        ],
        presentaciones: ["Bloque 10 cm", "Bloque 15 cm", "Bloque 20 cm"],
        usos: ["Paredes interiores", "Paredes exteriores", "Tabiques divisorios"],
        normas: [
          { codigo: "COVENIN 42", desc: "Bloques y ladrillos de arcilla" },
        ],
      },
      {
        id: "bloque_concreto",
        nombre: "Bloque de Concreto",
        categoria: "Material de mampostería · Pétreo",
        norma: "COVENIN 28",
        icono: "layout-board",
        propiedades: [
          { label: "Densidad",               valor: "2,000", unidad: "kg/m³" },
          { label: "Resistencia compresión", valor: "50",    unidad: "kg/cm²" },
          { label: "Absorción de agua",      valor: "< 10",  unidad: "%" },
          { label: "Dimensiones",            valor: "40×20×15", unidad: "cm" },
        ],
        presentaciones: ["Bloque 10 cm", "Bloque 15 cm", "Bloque 20 cm"],
        usos: ["Paredes de carga", "Cercos", "Muros de contención"],
        normas: [
          { codigo: "COVENIN 28", desc: "Bloques de concreto para paredes" },
        ],
      },
    ],
  },
  {
    id: "aridos",
    label: "Áridos",
    color: "#F59E0B",
    materiales: [
      {
        id: "arena",
        nombre: "Arena Fina",
        categoria: "Árido fino · Natural",
        norma: "COVENIN 277",
        icono: "triangle",
        propiedades: [
          { label: "Densidad aparente", valor: "1,600", unidad: "kg/m³" },
          { label: "Tamaño máximo",     valor: "4.75",  unidad: "mm" },
          { label: "Módulo de finura",  valor: "2.3 – 3.1", unidad: "" },
          { label: "Contenido de finos", valor: "< 5",  unidad: "%" },
        ],
        presentaciones: ["Arena lavada", "Arena de río", "Arena de cantera"],
        usos: ["Mezclas de concreto", "Morteros", "Rellenos", "Pega de bloques"],
        normas: [
          { codigo: "COVENIN 277", desc: "Áridos para concreto de cemento Portland" },
        ],
      },
      {
        id: "grava",
        nombre: "Grava / Piedra Picada",
        categoria: "Árido grueso · Natural",
        norma: "COVENIN 277",
        icono: "circle",
        propiedades: [
          { label: "Densidad aparente", valor: "1,550", unidad: "kg/m³" },
          { label: "Tamaño máximo",     valor: "25",    unidad: "mm" },
          { label: "Desgaste Los Ángeles", valor: "< 40", unidad: "%" },
          { label: "Absorción",         valor: "< 2",   unidad: "%" },
        ],
        presentaciones: ["Grava 3/4\"", "Grava 1/2\"", "Grava 3/8\""],
        usos: ["Mezclas de concreto", "Drenajes", "Rellenos granulares"],
        normas: [
          { codigo: "COVENIN 277", desc: "Áridos para concreto de cemento Portland" },
        ],
      },
      {
        id: "cemento",
        nombre: "Cemento Portland",
        categoria: "Aglomerante hidráulico",
        norma: "COVENIN 633",
        icono: "package",
        propiedades: [
          { label: "Peso por saco",     valor: "42.5",  unidad: "kg" },
          { label: "Densidad",          valor: "1,500", unidad: "kg/m³" },
          { label: "Resistencia 28 días", valor: "350", unidad: "kg/cm²" },
          { label: "Fraguado inicial",  valor: "≥ 45",  unidad: "min" },
        ],
        presentaciones: ["Tipo I (uso general)", "Tipo II (moderado)", "Tipo V (sulfatorresistente)"],
        usos: ["Concreto estructural", "Morteros", "Pega de bloques", "Repello"],
        normas: [
          { codigo: "COVENIN 633", desc: "Cemento Portland — especificaciones" },
        ],
      },
    ],
  },
  {
    id: "acabados",
    label: "Acabados",
    color: "#10B981",
    materiales: [
      {
        id: "pintura",
        nombre: "Pintura de Caucho",
        categoria: "Acabado superficial · Látex",
        norma: "COVENIN 1292",
        icono: "paint",
        propiedades: [
          { label: "Rendimiento",       valor: "30",    unidad: "m² / galón" },
          { label: "Tiempo de secado",  valor: "2 – 4", unidad: "horas" },
          { label: "Dilución máxima",   valor: "10",    unidad: "%" },
          { label: "N° de manos",       valor: "2",     unidad: "manos" },
        ],
        presentaciones: ["Galón (3.78 L)", "Cuñete (18.9 L)", "Cubeta (3.78 L)"],
        usos: ["Paredes interiores", "Paredes exteriores", "Cielos rasos"],
        normas: [
          { codigo: "COVENIN 1292", desc: "Pinturas y barnices — terminología" },
        ],
      },
      {
        id: "ceramica",
        nombre: "Cerámica para Piso",
        categoria: "Acabado de piso · Cerámico",
        norma: "COVENIN 1335",
        icono: "layout-grid",
        propiedades: [
          { label: "Rendimiento",         valor: "1.10", unidad: "m² / m²" },
          { label: "Absorción de agua",   valor: "< 3",  unidad: "%" },
          { label: "Resistencia al desgaste", valor: "PEI 4", unidad: "" },
          { label: "Espesor",             valor: "8 – 10", unidad: "mm" },
        ],
        presentaciones: ["30×30 cm", "40×40 cm", "45×45 cm", "60×60 cm"],
        usos: ["Pisos interiores", "Pisos exteriores", "Baños", "Cocinas"],
        normas: [
          { codigo: "COVENIN 1335", desc: "Baldosas cerámicas — clasificación" },
        ],
      },
      {
        id: "porcelanato",
        nombre: "Porcelanato",
        categoria: "Acabado de piso · Gres porcelánico",
        norma: "COVENIN 1335",
        icono: "layout-grid",
        propiedades: [
          { label: "Rendimiento",         valor: "1.10", unidad: "m² / m²" },
          { label: "Absorción de agua",   valor: "< 0.5", unidad: "%" },
          { label: "Resistencia al desgaste", valor: "PEI 5", unidad: "" },
          { label: "Espesor",             valor: "9 – 12", unidad: "mm" },
        ],
        presentaciones: ["60×60 cm", "60×120 cm", "80×80 cm", "120×120 cm"],
        usos: ["Pisos de alto tráfico", "Fachadas", "Zonas húmedas"],
        normas: [
          { codigo: "COVENIN 1335", desc: "Baldosas cerámicas — gres porcelánico" },
        ],
      },
    ],
  },
];

// ─── DATOS: ESTIMACIÓN DE MATERIALES ─────────────────────────
const ACTIVIDADES_ESTIMACION = [
  {
    id: "pintura",
    label: "Pintura",
    icon: "paint",
    campos: [
      { id: "area",   label: "Área total (m²)",  tipo: "number", default: "120" },
      { id: "manos",  label: "N° de manos",       tipo: "number", default: "2"   },
      { id: "tipo",   label: "Tipo de pintura",   tipo: "select",
        opciones: ["Pintura de caucho interior", "Pintura de caucho exterior", "Pintura al aceite"] },
      { id: "proyecto", label: "Proyecto",         tipo: "select",
        opciones: ["Edif. Residencial - Santa Marta", "C. Comercial - Barranquilla", "Otro"] },
    ],
    calcular: (campos) => {
      const area  = parseFloat(campos.area)  || 0;
      const manos = parseFloat(campos.manos) || 1;
      const rendPintura  = 30;
      const rendSellador = 35;
      const galPintura   = Math.ceil((area * manos) / rendPintura);
      const galSellador  = Math.ceil(area / rendSellador);
      const rodillos     = Math.ceil(area / 60);
      return {
        filas: [
          { material: "Pintura de caucho", rendimiento: `${rendPintura} m² / galón`, cantidad: galPintura, unidad: "galones", obs: `${manos} mano(s) × ${Math.ceil(area/rendPintura)} gal/mano` },
          { material: "Sellador / base",   rendimiento: `${rendSellador} m² / galón`, cantidad: galSellador, unidad: "galones", obs: "1 mano antes de pintura" },
          { material: "Rodillo de 9\"",    rendimiento: "—", cantidad: rodillos, unidad: "unidades", obs: "Estimado por área" },
          { material: "Bandeja",           rendimiento: "—", cantidad: rodillos, unidad: "unidades", obs: "Una por rodillo" },
        ],
        resumen: [
          { label: "Área calculada",         valor: `${area} m²` },
          { label: "Rendimiento promedio",    valor: `${rendPintura} m²/gal` },
          { label: "Total pintura principal", valor: `${galPintura} galones`, destacado: true },
        ],
      };
    },
  },
  {
    id: "ceramica",
    label: "Cerámica",
    icon: "layout-grid",
    campos: [
      { id: "area",     label: "Área a cubrir (m²)", tipo: "number", default: "85" },
      { id: "desperdicio", label: "% Desperdicio",   tipo: "number", default: "10" },
      { id: "formato",  label: "Formato de pieza",   tipo: "select",
        opciones: ["30×30 cm", "40×40 cm", "45×45 cm", "60×60 cm"] },
      { id: "proyecto", label: "Proyecto",            tipo: "select",
        opciones: ["Edif. Residencial - Santa Marta", "C. Comercial - Barranquilla", "Otro"] },
    ],
    calcular: (campos) => {
      const area        = parseFloat(campos.area)        || 0;
      const desperdicio = parseFloat(campos.desperdicio) || 10;
      const totalArea   = area * (1 + desperdicio / 100);
      const pegamento   = Math.ceil(totalArea / 5);
      const fragua      = Math.ceil(totalArea / 10);
      return {
        filas: [
          { material: "Cerámica",   rendimiento: "1 m² / m²", cantidad: totalArea.toFixed(2), unidad: "m²",   obs: `Incluye ${desperdicio}% desperdicio` },
          { material: "Pegamento",  rendimiento: "5 m² / saco", cantidad: pegamento, unidad: "sacos", obs: "Saco de 25 kg" },
          { material: "Fragua",     rendimiento: "10 m² / kg",  cantidad: fragua,    unidad: "kg",    obs: "Según junta" },
        ],
        resumen: [
          { label: "Área neta",        valor: `${area} m²` },
          { label: "Con desperdicio",  valor: `${totalArea.toFixed(2)} m²` },
          { label: "Cerámica total",   valor: `${totalArea.toFixed(2)} m²`, destacado: true },
        ],
      };
    },
  },
  {
    id: "repello",
    label: "Repello / Friso",
    icon: "wall",
    campos: [
      { id: "area",    label: "Área de pared (m²)", tipo: "number", default: "60" },
      { id: "espesor", label: "Espesor (cm)",        tipo: "number", default: "1.5" },
      { id: "tipo",    label: "Tipo de mezcla",      tipo: "select",
        opciones: ["1:4 (cemento:arena)", "1:3 (cemento:arena)", "1:6 (cemento:arena)"] },
      { id: "proyecto", label: "Proyecto",           tipo: "select",
        opciones: ["Edif. Residencial - Santa Marta", "C. Comercial - Barranquilla", "Otro"] },
    ],
    calcular: (campos) => {
      const area    = parseFloat(campos.area)    || 0;
      const espesor = parseFloat(campos.espesor) || 1.5;
      const vol     = area * (espesor / 100);
      const sacos   = Math.ceil(vol * 8);
      const arena   = parseFloat((vol * 0.04).toFixed(3));
      return {
        filas: [
          { material: "Cemento", rendimiento: "8 sacos / m³", cantidad: sacos, unidad: "sacos",  obs: "Mezcla 1:4" },
          { material: "Arena",   rendimiento: "0.04 m³ / m²", cantidad: arena, unidad: "m³",     obs: `Espesor ${espesor} cm` },
        ],
        resumen: [
          { label: "Área total",     valor: `${area} m²` },
          { label: "Volumen mezcla", valor: `${vol.toFixed(3)} m³` },
          { label: "Cemento total",  valor: `${sacos} sacos`, destacado: true },
        ],
      };
    },
  },
  {
    id: "enchape",
    label: "Enchape",
    icon: "layers-intersect",
    campos: [
      { id: "area",        label: "Área (m²)",        tipo: "number", default: "40" },
      { id: "desperdicio", label: "% Desperdicio",    tipo: "number", default: "10" },
      { id: "formato",     label: "Formato de pieza", tipo: "select",
        opciones: ["20×40 cm", "30×60 cm", "45×90 cm", "60×120 cm"] },
      { id: "proyecto",    label: "Proyecto",          tipo: "select",
        opciones: ["Edif. Residencial - Santa Marta", "C. Comercial - Barranquilla", "Otro"] },
    ],
    calcular: (campos) => {
      const area        = parseFloat(campos.area)        || 0;
      const desperdicio = parseFloat(campos.desperdicio) || 10;
      const totalArea   = area * (1 + desperdicio / 100);
      const pegamento   = Math.ceil(totalArea / 4);
      const fragua      = Math.ceil(totalArea / 8);
      return {
        filas: [
          { material: "Porcelanato / enchape", rendimiento: "1 m² / m²", cantidad: totalArea.toFixed(2), unidad: "m²",   obs: `Incluye ${desperdicio}% desperdicio` },
          { material: "Pegamento especial",    rendimiento: "4 m² / saco", cantidad: pegamento, unidad: "sacos", obs: "Saco de 25 kg" },
          { material: "Fragua epoxi",          rendimiento: "8 m² / kg",   cantidad: fragua,    unidad: "kg",    obs: "Junta fina" },
        ],
        resumen: [
          { label: "Área neta",       valor: `${area} m²` },
          { label: "Con desperdicio", valor: `${totalArea.toFixed(2)} m²` },
          { label: "Enchape total",   valor: `${totalArea.toFixed(2)} m²`, destacado: true },
        ],
      };
    },
  },
];



// ─── MÓDULO 2: DOSIFICACIÓN DE CONCRETO ─────────────────────
function ModuloConcreto() {
  const [dosifId,  setDosifId]  = useState("f210");
  const [volumen,  setVolumen]  = useState("3.00");
  const [proyecto, setProyecto] = useState("edificio");
  const [nivel,    setNivel]    = useState("nivel1");
  const [calculado, setCalculado] = useState(false);

  const dosif = DOSIFICACIONES.find((d) => d.id === dosifId) || DOSIFICACIONES[2];
  const vol   = parseFloat(volumen) || 0;

  const resultados = {
    cemento: Math.ceil(dosif.cemento * vol),
    arena:   (dosif.arena  * vol).toFixed(2),
    piedra:  (dosif.piedra * vol).toFixed(2),
    agua:    Math.round(dosif.agua   * vol),
  };

  const handleLimpiar = () => {
    setVolumen("3.00");
    setDosifId("f210");
    setProyecto("edificio");
    setNivel("nivel1");
    setCalculado(false);
  };

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>Dosificación de <span className="text-orange">Concreto</span></h1>
        <p>Calcula los materiales necesarios según resistencia y volumen requerido.</p>
      </div>

      <div className="modulo-card">
        {/* PASO 1: Resistencia */}
        <div className="modulo-section-title">1. Seleccionar resistencia (f'c)</div>
        <div className="conc-mix-grid">
          {DOSIFICACIONES.map((d) => (
            <div
              key={d.id}
              className={`conc-mix-card ${dosifId === d.id ? "selected" : ""}`}
              onClick={() => { setDosifId(d.id); setCalculado(false); }}
            >
              <div className="conc-mix-fc">{d.fc}</div>
              <div className="conc-mix-ratio">{d.ratio}</div>
              <div className="conc-mix-desc">{d.desc}</div>
            </div>
          ))}
        </div>

        {/* PASO 2: Volumen y datos */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>2. Volumen y datos del proyecto</div>
        <div className="form-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="form-field">
            <label>Volumen de concreto (m³)</label>
            <input
              type="number"
              value={volumen}
              step="0.10"
              min="0.10"
              onChange={(e) => { setVolumen(e.target.value); setCalculado(false); }}
            />
          </div>
          <div className="form-field">
            <label>Proyecto</label>
            <select value={proyecto} onChange={(e) => setProyecto(e.target.value)}>
              <option value="edificio">Edificio Residencial - Santa Marta</option>
              <option value="comercial">C. Comercial - Barranquilla</option>
              <option value="otro">Otro proyecto</option>
            </select>
          </div>
          <div className="form-field">
            <label>Nivel / Elemento</label>
            <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
              <option value="nivel1">Columnas - Nivel 1</option>
              <option value="nivel2">Vigas - Nivel 2</option>
              <option value="losa">Losa entrepiso</option>
              <option value="fund">Fundaciones</option>
            </select>
          </div>
        </div>

        {/* Fila de mezcla seleccionada */}
        <div className="conc-ratio-row">
          <span className="conc-ratio-lbl">Mezcla seleccionada:</span>
          {dosif.ratio.split(":").map((v, i, arr) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span className="conc-ratio-val">{v.trim()}</span>
              {i < arr.length - 1 && <span className="conc-ratio-sep">:</span>}
            </span>
          ))}
          <span className="conc-ratio-fc">{dosif.fc}</span>
        </div>

        {/* PASO 3: Resultados */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>3. Resultados</div>
        <div className="conc-res-grid">
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🏗️ Cemento</div>
            <div className="conc-res-val">{calculado ? resultados.cemento : "—"}</div>
            <div className="conc-res-unit">sacos ({dosif.pesoSaco} kg c/u)</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🏜️ Arena</div>
            <div className="conc-res-val">{calculado ? resultados.arena : "—"}</div>
            <div className="conc-res-unit">m³</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🪨 Piedra</div>
            <div className="conc-res-val">{calculado ? resultados.piedra : "—"}</div>
            <div className="conc-res-unit">m³</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">💧 Agua</div>
            <div className="conc-res-val">{calculado ? resultados.agua : "—"}</div>
            <div className="conc-res-unit">litros</div>
          </div>
        </div>

        {/* Botones */}
        <div className="action-row" style={{ marginTop: 16 }}>
          <button className="btn btn-ghost" onClick={handleLimpiar}>
            <Icon name="trash" size={15} /> Limpiar
          </button>
          <button className="btn btn-ghost">
            <Icon name="export" size={15} /> Exportar PDF
          </button>
          <button
            className="btn btn-orange"
            onClick={() => setCalculado(true)}
            disabled={vol <= 0}
          >
            <Icon name="calc" size={15} /> Calcular
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MÓDULO 3: BIBLIOTECA DE MATERIALES ──────────────────────
function ModuloBiblioteca() {
  const [busqueda,      setBusqueda]      = useState("");
  const [materialActivo, setMaterialActivo] = useState(
    CATEGORIAS_MATERIALES[0].materiales[0]
  );

  // Filtra materiales según búsqueda
  const categoriasFiltradas = CATEGORIAS_MATERIALES.map((cat) => ({
    ...cat,
    materiales: cat.materiales.filter((m) =>
      m.nombre.toLowerCase().includes(busqueda.toLowerCase())
    ),
  })).filter((cat) => cat.materiales.length > 0);

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>Biblioteca de <span className="text-purple">Materiales</span></h1>
        <p>Consulta información técnica de materiales de construcción y sus propiedades.</p>
      </div>

      <div className="bib-layout">
        {/* PANEL IZQUIERDO — Lista */}
        <div className="bib-panel-left">
          {/* Buscador */}
          <div className="bib-search">
            <Icon name="search" size={15} />
            <input
              type="text"
              placeholder="Buscar material..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {/* Lista por categorías */}
          {categoriasFiltradas.map((cat) => (
            <div key={cat.id}>
              <div className="bib-cat-label">{cat.label}</div>
              {cat.materiales.map((mat) => (
                <div
                  key={mat.id}
                  className={`bib-mat-item ${materialActivo?.id === mat.id ? "active" : ""}`}
                  onClick={() => setMaterialActivo(mat)}
                >
                  <span className="bib-mat-dot" style={{ background: cat.color }} />
                  {mat.nombre}
                </div>
              ))}
            </div>
          ))}

          {categoriasFiltradas.length === 0 && (
            <div className="bib-empty">
              <Icon name="search" size={20} />
              <p>Sin resultados</p>
            </div>
          )}
        </div>

        {/* PANEL DERECHO — Ficha técnica */}
        {materialActivo && (
          <div className="bib-panel-right">
            {/* Header */}
            <div className="bib-det-header">
              <div className="bib-det-icon">
                <Icon name={materialActivo.icono} size={24} />
              </div>
              <div>
                <div className="bib-det-name">{materialActivo.nombre}</div>
                <div className="bib-det-cat">{materialActivo.categoria}</div>
                <span className="bib-det-badge">{materialActivo.norma}</span>
              </div>
            </div>

            {/* Propiedades físicas */}
            <div className="bib-section-title">Propiedades físicas</div>
            <div className="bib-props-grid">
              {materialActivo.propiedades.map((p, i) => (
                <div key={i} className="bib-prop">
                  <div className="bib-prop-label">{p.label}</div>
                  <div className="bib-prop-val">
                    {p.valor} <span className="bib-prop-unit">{p.unidad}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Presentaciones */}
            <div className="bib-section-title">Presentaciones disponibles</div>
            <div className="bib-tag-row">
              {materialActivo.presentaciones.map((t, i) => (
                <span key={i} className="bib-tag">{t}</span>
              ))}
            </div>

            {/* Usos */}
            <div className="bib-section-title">Usos principales</div>
            <div className="bib-tag-row">
              {materialActivo.usos.map((u, i) => (
                <span key={i} className="bib-tag">{u}</span>
              ))}
            </div>

            {/* Normas */}
            <div className="bib-section-title">Normas aplicables</div>
            {materialActivo.normas.map((n, i) => (
              <div key={i} className="bib-norm-row">
                <span>{n.desc}</span>
                <span className="bib-norm-code">{n.codigo}</span>
              </div>
            ))}

            {/* Acciones */}
            <div className="bib-action-row">
              <button className="btn btn-ghost">
                <Icon name="export" size={15} /> Exportar ficha
              </button>
              <button className="btn btn-purple">
                <Icon name="calc" size={15} /> Usar en cálculo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MÓDULO 4: ESTIMACIÓN DE MATERIALES ──────────────────────
function ModuloEstimacion() {
  const [actividadId, setActividadId] = useState("pintura");
  const [campos,      setCampos]      = useState({});
  const [calculado,   setCalculado]   = useState(false);

  const actividad = ACTIVIDADES_ESTIMACION.find((a) => a.id === actividadId);

  // Inicializa campos con defaults cuando cambia la actividad
  const handleActividad = (id) => {
    const act = ACTIVIDADES_ESTIMACION.find((a) => a.id === id);
    const defaults = {};
    act.campos.forEach((c) => { defaults[c.id] = c.default || ""; });
    setActividadId(id);
    setCampos(defaults);
    setCalculado(false);
  };

  // Inicializa al montar
  useState(() => { handleActividad("pintura"); }, []);

  const handleCampo = (id, val) => {
    setCampos((prev) => ({ ...prev, [id]: val }));
    setCalculado(false);
  };

  const resultado = calculado && actividad ? actividad.calcular(campos) : null;

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>Estimación de <span className="text-blue">Materiales</span></h1>
        <p>Selecciona una actividad y calcula los materiales necesarios con sus rendimientos.</p>
      </div>

      {/* CARD 1: Actividad + datos */}
      <div className="modulo-card">

        {/* PASO 1: Actividad */}
        <div className="modulo-section-title">1. Actividad a calcular</div>
        <div className="est-act-grid">
          {ACTIVIDADES_ESTIMACION.map((a) => (
            <button
              key={a.id}
              className={`est-act-btn ${actividadId === a.id ? "active" : ""}`}
              onClick={() => handleActividad(a.id)}
            >
              <Icon name={a.icon} size={22} />
              {a.label}
            </button>
          ))}
        </div>

        {/* PASO 2: Campos dinámicos */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>
          2. Datos de la actividad
        </div>
        <div className="form-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {actividad?.campos.map((c) => (
            <div key={c.id} className="form-field">
              <label>{c.label}</label>
              {c.tipo === "select" ? (
                <select
                  value={campos[c.id] || ""}
                  onChange={(e) => handleCampo(c.id, e.target.value)}
                >
                  {c.opciones.map((op) => (
                    <option key={op} value={op}>{op}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  value={campos[c.id] || ""}
                  step="0.1"
                  min="0"
                  onChange={(e) => handleCampo(c.id, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Botón calcular */}
        <div className="action-row" style={{ marginTop: 14 }}>
          <button className="btn btn-ghost" onClick={() => { handleActividad(actividadId); }}>
            <Icon name="trash" size={15} /> Limpiar
          </button>
          <button
            className="btn btn-blue"
            onClick={() => setCalculado(true)}
          >
            <Icon name="calc" size={15} /> Calcular
          </button>
        </div>
      </div>

      {/* CARD 2: Resultados */}
      <div className="modulo-card">
        <div className="modulo-section-title">3. Resultados de estimación</div>

        {!resultado ? (
          <div className="est-empty">
            <Icon name="calculator" size={28} />
            <p>Ingresa los datos y presiona Calcular para ver los resultados.</p>
          </div>
        ) : (
          <>
            <table className="est-tabla">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Rendimiento</th>
                  <th>Cantidad</th>
                  <th>Unidad</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                {resultado.filas.map((f, i) => (
                  <tr key={i}>
                    <td>{f.material}</td>
                    <td style={{ color: "var(--text-muted)" }}>{f.rendimiento}</td>
                    <td className="est-qty">{f.cantidad}</td>
                    <td style={{ color: "var(--text-muted)" }}>{f.unidad}</td>
                    <td style={{ color: "var(--text-muted)", fontSize: 12 }}>{f.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Resumen */}
            <div className="est-resumen">
              {resultado.resumen.map((r, i) => (
                <div key={i} className={`est-resumen-cell ${r.destacado ? "destacado" : ""}`}>
                  <div className="est-resumen-lbl">{r.label}</div>
                  <div className="est-resumen-val">{r.valor}</div>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className="action-row" style={{ marginTop: 14 }}>
              <button className="btn btn-ghost">
                <Icon name="export" size={15} /> Exportar Excel
              </button>
              <button className="btn btn-ghost">
                <Icon name="export" size={15} /> Exportar PDF
              </button>
              <button className="btn btn-blue">
                <Icon name="save" size={15} /> Guardar estimación
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


// ─── PLACEHOLDER para módulos pendientes ──────────────────────
function ModuloPendiente({ modulo }) {
  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          {modulo.icon} {modulo.label}
        </h1>
        <p>Este módulo está en desarrollo. Próximamente disponible.</p>
      </div>
      <div className="modulo-pendiente-box">
        <span style={{ fontSize: 48 }}>{modulo.icon}</span>
        <h3>{modulo.label}</h3>
        <p>
          La vista de este módulo será implementada en la siguiente fase del
          proyecto.
        </p>
      </div>
    </div>
  );
}

// ─── MOBILE HOME ──────────────────────────────────────────────
function MobileHome({
  onNavigate,
  darkMode,
  setDarkMode,
  user,
  dashboardData,
}) {
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
        <button className="menu-btn">
          <Icon name="menu" size={22} />
        </button>
        <div className="logo-row">
          <img src={logoImg} alt="CIVCALPRO logo" />
          <strong>
            CIVCA<span>LPRO</span>
          </strong>
        </div>
        <div className="mobile-topbar-actions">
          <ThemeToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
          <button className="notif-btn mobile-notif-btn">
            <Icon name="bell" size={22} />
            <span className="notif-badge">3</span>
          </button>
        </div>
      </header>

      <div className="mobile-page">
        <div className="mobile-greeting">
          <h2>
            Bienvenido a <span style={{color:"var(--green)"}}>CivCalPro</span>
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
                {m.icon}
              </div>
              <div className="mobile-module-card-info">
                <h4><span className="module-label">{m.label}</span></h4>
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
        <button className="mobile-nav-item active">
          <Icon name="home" size={22} /> Inicio
        </button>
        <button className="mobile-nav-item">
          <Icon name="folder" size={22} /> Proyectos
        </button>
        <button className="mobile-fab">
          <Icon name="plus" size={26} />
        </button>
        <button className="mobile-nav-item">
          <Icon name="calc" size={22} /> Cálculos
        </button>
        <button className="mobile-nav-item">
          <Icon name="user" size={22} /> Perfil
        </button>
      </nav>
    </>
  );
}

// ─── MOBILE MÓDULO ────────────────────────────────────────────
function MobileModulo({ onBack, darkMode, setDarkMode, moduloKey }) {
  const [elemento, setElemento] = useState("columna");
  const [largo, setLargo] = useState("0.30");
  const [ancho, setAncho] = useState("0.30");
  const [altura, setAltura] = useState("3.00");
  const [cantidad, setCantidad] = useState("12");

  const volUnitario =
    (parseFloat(largo) || 0) *
    (parseFloat(ancho) || 0) *
    (parseFloat(altura) || 0);
  const volTotal = volUnitario * (parseFloat(cantidad) || 0);

  const modulo = MODULES.find((m) => m.key === moduloKey) || MODULES[0];
  const pasosMobile = ["Elemento", "Dimensiones", "Resultados", "Guardar"];

  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>
        <h2>{modulo.label}</h2>
        <div className="mobile-topbar-actions">
          <ThemeToggleButton
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            className="mobile-theme-btn"
          />
          <button className="mobile-save-btn">
            <Icon name="save" size={22} />
          </button>
        </div>
      </header>
      <div className="mobile-stepper">
        {pasosMobile.map((label, i) => (
          <div key={i} className={`mobile-step ${i === 0 ? "active" : ""}`}>
            <div className="mobile-step-num">{i + 1}</div>
            <div className="mobile-step-label">{label}</div>
          </div>
        ))}
      </div>
      <div className="mobile-form-content">
        <div className="mobile-section-h">1. Seleccionar elemento</div>
        <div className="mobile-section-sub">
          Elige el tipo de elemento que deseas calcular
        </div>
        <div className="mobile-element-grid">
          {ELEMENTOS.map((el) => (
            <button
              key={el.id}
              className={`mobile-element-btn ${elemento === el.id ? "active" : ""}`}
              onClick={() => setElemento(el.id)}
            >
              <span className="mobile-element-btn-icon">{el.icon}</span>
              {el.label}
            </button>
          ))}
        </div>
        <div className="mobile-section-h">2. Ingresar dimensiones</div>
        <div className="mobile-section-sub" style={{ marginBottom: 14 }}>
          Ingresa las medidas requeridas
        </div>
        <div className="mobile-form-grid">
          <div className="mobile-field">
            <label>Largo (m)</label>
            <input
              type="number"
              value={largo}
              step="0.01"
              onChange={(e) => setLargo(e.target.value)}
            />
          </div>
          <div className="mobile-field">
            <label>Ancho (m)</label>
            <input
              type="number"
              value={ancho}
              step="0.01"
              onChange={(e) => setAncho(e.target.value)}
            />
          </div>
          <div className="mobile-field">
            <label>Altura (m)</label>
            <input
              type="number"
              value={altura}
              step="0.01"
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <div className="mobile-field">
            <label>Cantidad</label>
            <input
              type="number"
              value={cantidad}
              min="1"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div>
        </div>
        <div className="mobile-form-grid full">
          <div className="mobile-field">
            <label>Proyecto</label>
            <select defaultValue="edificio">
              <option value="edificio">
                Edificio Residencial - Santa Marta
              </option>
              <option value="otro">Otro proyecto</option>
            </select>
          </div>
          <div className="mobile-field">
            <label>Nivel / Piso</label>
            <select defaultValue="nivel1">
              <option value="nivel1">Nivel 1</option>
              <option value="nivel2">Nivel 2</option>
            </select>
          </div>
        </div>
        <div className="mobile-result-box">
          <div className="mobile-result-cell">
            <label>Volumen unitario</label>
            <div className="val val-secondary">{volUnitario.toFixed(2)} m³</div>
          </div>
          <div className="mobile-result-cell">
            <label>Volumen total</label>
            <div className="val">{volTotal.toFixed(2)} m³</div>
          </div>
        </div>
      </div>
      <div className="mobile-action-row">
        <button className="btn btn-ghost">
          <Icon name="trash" size={15} /> Limpiar
        </button>
        <button className="btn btn-green">
          Siguiente <Icon name="arrow_r" size={15} />
        </button>
      </div>
    </>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────
export default function App() {
  const [activeModule, setActiveModule] = useState("inicio");
  const [mobileView, setMobileView] = useState("home");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser
        ? JSON.parse(storedUser)
        : { isLoggedIn: false, name: null, role: "Invitado" };
    } catch {
      return { isLoggedIn: false, name: null, role: "Invitado" };
    }
  });
  const [dashboardData, setDashboardData] = useState(EMPTY_DASHBOARD);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch {
      // No-op
    }
  }, [user]);

  const isMobile = window.innerWidth <= 768;

  const handleNavigate = (key) => {
    setActiveModule(key);
    if (isMobile && key !== "inicio") setMobileView("modulo");
    else if (isMobile) setMobileView("home");
  };

  const pageTitle = () => {
    if (activeModule === "inicio") return "Inicio";
    const m = MODULES.find((m) => m.key === activeModule);
    return m
      ? m.label
      : activeModule.charAt(0).toUpperCase() + activeModule.slice(1);
  };

  const renderDesktopPage = () => {
    if (activeModule === "inicio")
      return (
        <DesktopHome
          onNavigate={handleNavigate}
          user={user}
          dashboardData={dashboardData}
        />
      );
    if (activeModule === "computos") return <ModuloComputos />;
    if (activeModule === "concreto")  return <ModuloConcreto />;
    if (activeModule === "biblioteca") return <ModuloBiblioteca />;
    if (activeModule === "estimacion") return <ModuloEstimacion />;


    const m = MODULES.find((mod) => mod.key === activeModule);
    if (m) return <ModuloPendiente modulo={m} />;
    return (
      <DesktopHome
        onNavigate={handleNavigate}
        user={user}
        dashboardData={dashboardData}
      />
    );
  };

  return (
    <div className={darkMode ? "dark-theme" : ""}>
      {/* DESKTOP */}
      <div className="app-layout desktop-only">
        <Sidebar
          activeModule={activeModule}
          onNavigate={handleNavigate}
          user={user}
        />
        <div className="main-content">
          <Topbar
            title={pageTitle()}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            showOnline={activeModule === "inicio"}
          />
          {renderDesktopPage()}
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="mobile-only"
        style={{ minHeight: "100vh", background: "var(--bg)" }}
      >
        {mobileView === "home" ? (
          <MobileHome
            onNavigate={handleNavigate}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            user={user}
            dashboardData={dashboardData}
          />
        ) : (
          <MobileModulo
            onBack={() => setMobileView("home")}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            moduloKey={activeModule}
          />
        )}
      </div>
    </div>
  );
}