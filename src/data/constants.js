// ─── CONSTANTES DE ALCANCE APP-SHELL ────────────────────────────
// Solo datos usados por más de un módulo o por App.jsx directamente.
// Cada módulo (modulos/<nombre>/) tiene su propio *.data.js para su
// catálogo específico.
import reglaImg from "../assets/img/regla.png";
import mezcladoraImg from "../assets/img/mezcladora.png";
import libroImg from "../assets/img/libro.png";
import calculadoraImg from "../assets/img/calculadora.png";

// Módulos principales del sidebar/topbar/dashboard.
// `iconSrc` reemplaza al antiguo `icon: <img .../>` (JSX no permitido
// en un archivo .js); cada consumidor arma <img src={m.iconSrc}/>.
export const MODULES = [
  {
    id: 1,
    key: "computos",
    label: "Cómputos Métricos",
    desc: "Bloques, columnas, vigas, losas y más.",
    iconSrc: reglaImg,
    color: "card-green",
    btnColor: "btn-green",
    bg: "#E8F8EF",
  },
  {
    id: 2,
    key: "concreto",
    label: "Dosificación de Concreto",
    desc: "f'c 150 / 180 / 210 kg/cm².",
    iconSrc: mezcladoraImg,
    color: "card-orange",
    btnColor: "btn-orange",
    bg: "#FEF3E8",
  },
  {
    id: 3,
    key: "biblioteca",
    label: "Biblioteca de Materiales",
    desc: "Acero, bloques, áridos y acabados.",
    iconSrc: libroImg,
    color: "card-purple",
    btnColor: "btn-purple",
    bg: "#F3EFFE",
  },
  {
    id: 4,
    key: "estimacion",
    label: "Estimación de Materiales",
    desc: "Pintura, cerámica, repello y enchape.",
    iconSrc: calculadoraImg,
    color: "card-blue",
    btnColor: "btn-blue",
    bg: "#EFF4FF",
  },
];

// Accesos rápidos del dashboard de escritorio (DesktopHome).
export const ACCESOS = [
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
    label: "Normas COVENIN ",
    sub: "Biblioteca normativa integrada",
    icon: "refresh",
    bg: "#FEF3E8",
    iconColor: "#9A3412",
  },
];

// Estado inicial/"vacío" del dashboard — hoy nunca se popula desde
// ninguna fuente real, App.jsx solo lo usa como valor inicial y como
// blanco de reset ("Restablecer todo").
export const EMPTY_DASHBOARD = {
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

export const APP_VERSION = "v1.0.0";
export const SETTINGS_KEY = "civcalpro.settings";
export const THEME_KEY = "theme";
export const USER_KEY = "user";
export const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

export const DEFAULT_SETTINGS = {
  themeMode: "system",
  fontSize: "normal",
  language: "es",
  autosave: true,
};

export const FONT_SCALES = {
  small: 1.05,
  normal: 1.25,
  large: 1.45,
};

export const DEFAULT_USER = {
  isLoggedIn: false,
  name: null,
  role: "Invitado",
};
