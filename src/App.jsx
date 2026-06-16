import { useState, useEffect } from "react";
import "./App.css";

// ─── ICONS (SVG inline simples) ──────────────────────────────
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
      <>
        <path
          d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
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
    desc: "Calcula cantidades de obra a partir de las dimensiones de tu proyecto.",
    icon: "📐",
    color: "card-green",
    btnColor: "btn-green",
  },
  {
    id: 2,
    key: "concreto",
    label: "Dosificación de Concreto",
    desc: "Calcula la proporción de materiales para el concreto que necesitas.",
    icon: "🚧",
    color: "card-orange",
    btnColor: "btn-orange",
  },
  {
    id: 3,
    key: "biblioteca",
    label: "Biblioteca de Materiales",
    desc: "Consulta información técnica de materiales de construcción y sus propiedades.",
    icon: "📚",
    color: "card-purple",
    btnColor: "btn-purple",
  },
  {
    id: 4,
    key: "estimacion",
    label: "Estimación de Materiales",
    desc: "Obtén la cantidad y costo de materiales necesarios para tu proyecto.",
    icon: "🧮",
    color: "card-blue",
    btnColor: "btn-blue",
  },
];

const ELEMENTOS = [
  { id: "columna", label: "Columna", emoji: "🏛️" },
  { id: "viga", label: "Viga", emoji: "➖" },
  { id: "losa", label: "Losa", emoji: "🔲" },
  { id: "muro", label: "Muro", emoji: "🧱" },
  { id: "zapata", label: "Zapata", emoji: "⬛" },
  { id: "piso", label: "Piso", emoji: "🪟" },
  { id: "excavacion", label: "Excavación", emoji: "⛏️" },
  { id: "otro", label: "Otro", emoji: "📦" },
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

// ─── DESKTOP SIDEBAR ──────────────────────────────────────────
function Sidebar({ activeModule, onNavigate }) {
  return (
    <aside className="sidebar desktop-only">
      <div className="sidebar-logo">
        <div className="logo-icon">🏗️</div>
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
            className={`sidebar-item ${activeModule === m.key ? "active" : ""}`}
            onClick={() => onNavigate(m.key)}
          >
            <span className="item-icon">{m.icon}</span>
            {m.id}. {m.label}
          </button>
        ))}

        <div className="sidebar-section-label">Gestión</div>
        <button className="sidebar-item">
          <span className="item-icon">
            <Icon name="folder" size={15} />
          </span>
          Proyectos
        </button>
        <button className="sidebar-item">
          <span className="item-icon">
            <Icon name="clock" size={15} />
          </span>
          Historial de Cálculos
        </button>
        <button className="sidebar-item">
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
        <div className="user-avatar">CR</div>
        <div className="user-info">
          <strong>Carlos Rodríguez</strong>
          <small>Administrador</small>
        </div>
      </div>
    </aside>
  );
}

// ─── DESKTOP TOPBAR ───────────────────────────────────────────
function Topbar({ title, darkMode, setDarkMode }) {
  return (
    <header className="topbar desktop-only">
      <div className="topbar-left">
        <span className="topbar-title">{title}</span>
      </div>

      <div className="topbar-right">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="notif-btn">
          <Icon name="bell" size={22} />
          <span className="notif-badge">3</span>
        </button>
      </div>
    </header>
  );
}
// ─── DESKTOP HOME PAGE ────────────────────────────────────────
function DesktopHome({ onNavigate }) {
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
          ¡Bienvenido a <span>CIVCALPRO</span>!
        </h1>
        <p>Selecciona un módulo para comenzar a trabajar en tu proyecto.</p>
      </div>

      {/* Module cards */}
      <div className="module-grid">
        {MODULES.map((m) => (
          <div
            key={m.id}
            className={`module-card ${m.color}`}
            onClick={() => onNavigate(m.key)}
          >
            <div className="module-card-icon">{m.icon}</div>
            <h3>
              {m.id}. {m.label}
            </h3>
            <p>{m.desc}</p>
            <button className={`module-card-btn ${m.btnColor}`}>
              Ingresar al módulo →
            </button>
          </div>
        ))}
      </div>

      {/* Module preview: Cómputos Métricos */}
      <div className="module-preview">
        {/* Stepper sidebar */}
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

        {/* Content */}
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
                <span className="element-btn-icon">{el.emoji}</span>
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

// ─── MOBILE HOME ──────────────────────────────────────────────
function MobileHome({ onNavigate }) {
  return (
    <>
      <header className="mobile-topbar">
        <button className="menu-btn">
          <Icon name="menu" size={22} />
        </button>
        <div className="logo-row">
          <span style={{ fontSize: 24 }}>🏗️</span>
          <strong>
            CIVCA<span>LPRO</span>
          </strong>
        </div>
        <button
          className="notif-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Icon name="bell" size={22} />
          <span className="notif-badge">3</span>
        </button>
      </header>

      <div className="mobile-page">
        <div className="mobile-greeting">
          <h2>Bienvenido, Carlos 👋</h2>
          p¿Qué deseas calcular hoy?</p>
        </div>

        <div className="mobile-section-label">Módulos Principales</div>
        <div className="mobile-module-list">
          {MODULES.map((m) => {
            const colors = ["#1DB954", "#F97316", "#7C3AED", "#2563EB"];
            const bgs = ["#E8F8EF", "#FEF3E8", "#F3EFFE", "#EFF4FF"];
            return (
              <div
                key={m.id}
                className="mobile-module-card"
                onClick={() => onNavigate(m.key)}
              >
                <div
                  className="mobile-module-card-icon"
                  style={{ background: bgs[m.id - 1] }}
                >
                  {m.icon}
                </div>
                <div className="mobile-module-card-info">
                  <h4>{m.label}</h4>
                  <p>{m.desc}</p>
                </div>
                <span
                  className="mobile-num-badge"
                  style={{ background: colors[m.id - 1] }}
                >
                  {m.id}
                </span>
                <span className="mobile-chevron">
                  <Icon name="chevron" size={16} />
                </span>
              </div>
            );
          })}
        </div>

        <div className="recent-section">
          <div className="recent-header">
            <div className="mobile-section-label" style={{ margin: 0 }}>
              Proyectos Recientes
            </div>
            <span>Ver todos</span>
          </div>
          <div className="recent-card">
            <div className="recent-thumb">🏢</div>
            <div className="recent-info">
              <strong>Edificio Residencial - Santa Marta</strong>
              <small>Actualizado hace 2 días</small>
              <div className="recent-progress">
                <div className="recent-progress-bar" style={{ width: "65%" }} />
              </div>
            </div>
            <span className="mobile-chevron">
              <Icon name="chevron" size={16} />
            </span>
          </div>
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

// ─── MOBILE MODULE (Cómputos Métricos) ───────────────────────
function MobileModulo({ onBack }) {
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

  const pasosMobile = ["Elemento", "Dimensiones", "Resultados", "Guardar"];

  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>
        <h2>Cómputos Métricos</h2>
        <button className="mobile-save-btn">
          <Icon name="save" size={22} />
        </button>
      </header>

      {/* Stepper */}
      <div className="mobile-stepper">
        {pasosMobile.map((label, i) => (
          <div
            key={i}
            className={`mobile-step ${i === 0 ? "active" : ""} ${i < 0 ? "done" : ""}`}
          >
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
              <span className="mobile-element-btn-icon">{el.emoji}</span>
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
  const [mobileView, setMobileView] = useState("home"); // "home" | "modulo"

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const isMobile = window.innerWidth <= 768;

  const handleNavigate = (key) => {
    setActiveModule(key);
    if (isMobile && key !== "inicio") setMobileView("modulo");
    else if (isMobile) setMobileView("home");
  };

  const pageTitle = () => {
    if (activeModule === "inicio") return "Inicio";
    const m = MODULES.find((m) => m.key === activeModule);
    return m ? m.label : "Inicio";
  };

  return (
    <div className={darkMode ? "dark-theme" : ""}>
      {/* ── DESKTOP LAYOUT ── */}
      <div className="app-layout desktop-only">
        <Sidebar activeModule={activeModule} onNavigate={handleNavigate} />
        <div className="main-content">
          <Topbar
            title={pageTitle()}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          {activeModule === "inicio" && (
            <DesktopHome onNavigate={handleNavigate} />
          )}
          {activeModule === "computos" && (
            <div className="page">
              <DesktopHome onNavigate={handleNavigate} />
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div
        className="mobile-only"
        style={{ minHeight: "100vh", background: "var(--bg)" }}
      >
        {mobileView === "home" ? (
          <MobileHome onNavigate={handleNavigate} />
        ) : (
          <MobileModulo onBack={() => setMobileView("home")} />
        )}
      </div>
    </div>
  );
}
