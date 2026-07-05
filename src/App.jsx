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
    palette: (
      <>
        <path
          d="M12 3a9 9 0 100 18h1.5a1.5 1.5 0 010 3H12a12 12 0 110-24c6.63 0 12 5.37 12 12 0 2.76-1.24 5.22-3.18 6.89A3.5 3.5 0 0121 18.5a3.5 3.5 0 01-3.5-3.5V13a10 10 0 00-5.5-10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="7.5" cy="9" r="1" fill="currentColor" />
        <circle cx="6" cy="14" r="1" fill="currentColor" />
        <circle cx="10" cy="17" r="1" fill="currentColor" />
        <circle cx="15" cy="17" r="1" fill="currentColor" />
      </>
    ),
    text: (
      <>
        <path
          d="M4 5h16M9 19h6M12 5v14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    globe: (
      <>
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="4"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
    database: (
      <>
        <ellipse
          cx="12"
          cy="5"
          rx="8"
          ry="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    monitor: (
      <>
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 21h8M12 17v4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    moon: (
      <>
        <path
          d="M21 12.8A9 9 0 1111.2 3 7.5 7.5 0 0021 12.8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    trash2: (
      <>
        <path
          d="M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m-8 0l1 14a2 2 0 002 2h2a2 2 0 002-2l1-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 11v6M14 11v6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 10v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="7.5" r="1" fill="currentColor" />
      </>
    ),
    check_circle: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12.5l2.8 2.8L16.5 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
    chat: (
      <>
        <path
          d="M20 14a4 4 0 01-4 4H9l-5 3v-3a4 4 0 01-2-3.46V7a4 4 0 014-4h10a4 4 0 014 4v7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </>
    ),
    mail: (
      <>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M3 7l9 6 9-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </>
    ),
    phone: (
      <>
        <path
          d="M7.5 3.5h3a1.5 1.5 0 011.5 1.5v2.2a1.5 1.5 0 01-.88 1.36l-1.2.55a14.5 14.5 0 006.3 6.3l.55-1.2A1.5 1.5 0 0118.14 13H20a1.5 1.5 0 011.5 1.5v3a2 2 0 01-2 2C11.94 19.5 4.5 12.06 4.5 2.5a2 2 0 012-2h1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </>
    ),
    lock: (
      <>
        <rect
          x="5"
          y="11"
          width="14"
          height="10"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 11V8a4 4 0 018 0v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
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
    file: (
      <>
        <path
          d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline
          points="14 2 14 8 20 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    table: (
      <>
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M3 10h18M3 16h18M9 4v16M15 4v16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="18" cy="19" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 11l8-4M8 13l8 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    check: (
      <path
        d="M5 13l4 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    filter: (
      <path
        d="M4 5h16l-6 7v5l-4 2v-7L4 5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    ),
    "sort-ascending": (
      <>
        <path
          d="M7 17V5M7 5l-3 3M7 5l3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 6h6M13 12h4M13 18h2"
          fill="none"
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
        <path
          d="M4 19.5A2.5 2.5 0 016.5 17H20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    device: (
      <>
        <rect
          x="5"
          y="2"
          width="14"
          height="20"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </>
    ),
    search: (
      <>
        <circle
          cx="11"
          cy="11"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M21 21l-4.35-4.35"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    eye: (
      <>
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    copy: (
      <>
        <rect
          x="9"
          y="9"
          width="13"
          height="13"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    download: (
      <>
        <path
          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polyline
          points="7 10 12 15 17 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="12"
          y1="15"
          x2="12"
          y2="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    ruler: (
      <>
        <path
          d="M3 21h18M3 7h1M5 7h1M7 7h1M9 7h1M11 7h1M13 7h1M15 7h1M17 7h1M19 7h1M21 7h1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="4"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
    building: (
      <>
        <path
          d="M4 20V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="6"
          y="9"
          width="3"
          height="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="15"
          y="9"
          width="3"
          height="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="6"
          y="13"
          width="3"
          height="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="15"
          y="13"
          width="3"
          height="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="4"
          y1="20"
          x2="20"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
        />
      </>
    ),
  };
 return (
    <svg
      style={{
        width: `calc(${size}px * var(--app-scale, 1))`,
        height: `calc(${size}px * var(--app-scale, 1))`,
      }}
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

const NORMAS_MODULE_PREVIEW = {
  label: "Normas COVENIN incluidas",
  icon: <Icon name="book" size={48} />,
};

const NORMAS_DOCUMENTS = [
  {
    id: "covenin-1753-2006",
    code: "COVENIN 1753-2006",
    title: "Proyecto y construcción de obras de concreto estructural",
    type: "Concreto estructural",
    source: "Covenin 1753-2006 Proyecto Construccion Obras Concreto Estructural.pdf",
    summary: "Documento base para proyectos y construcción en concreto estructural.",
    tags: ["Diseño", "Concreto", "Estructuras"],
    tone: "blue",
  },
  {
    id: "covenin-1756-2018",
    code: "COVENIN 1756-2018",
    title: "Norma incluida en la biblioteca",
    type: "Complementaria",
    source: "COVENIN 1756-2018.pdf",
    summary: "Referencia técnica incorporada a la biblioteca del proyecto.",
    tags: ["Norma", "Referencia", "Incluida"],
    tone: "green",
  },
  {
    id: "covenin-2002-88",
    code: "COVENIN 2002-88",
    title: "Acciones mínimas",
    type: "Acciones y cargas",
    source: "COVENIN 2002-88 acciones minimas.pdf",
    summary: "Base normativa para acciones mínimas aplicables al análisis.",
    tags: ["Cargas", "Acciones", "Análisis"],
    tone: "orange",
  },
  {
    id: "diseno-estructural-concreto-armado",
    code: "Manual de apoyo",
    title: "Diseño estructural en concreto armado",
    type: "Guía técnica",
    source: "DISEÑO_ESTRUCTURAL_EN_CONCRETO_ARMADO.pdf",
    summary: "Material de consulta para reforzar criterios de diseño y cálculo.",
    tags: ["Guía", "Diseño", "Apoyo"],
    tone: "purple",
  },
  {
    id: "covenin-1618-1998",
    code: "COVENIN 1618-1998",
    title: "Estructuras de acero",
    type: "Acero estructural",
    source: "Norma COVENIN 1618-1998 ESTRUCTURAS DE ACERO.pdf.crdownload.pdf",
    summary: "Norma de referencia para estructuras de acero incorporada en la biblioteca.",
    tags: ["Acero", "Estructuras", "Referencia"],
    tone: "blue",
  },
];

const NORMAS_CATEGORIES = [
  { key: "todas", label: "Todas" },
  { key: "concreto estructural", label: "Concreto" },
  { key: "acciones y cargas", label: "Acciones" },
  { key: "acero estructural", label: "Acero" },
  { key: "guía técnica", label: "Guías" },
  { key: "complementaria", label: "Complementarias" },
];

const HELP_QUICK_ACTIONS = [
  {
    title: "Guía rápida",
    subtitle: "Primeros pasos",
    icon: "book",
    query: "cómputos",
  },
  {
    title: "Preguntas frecuentes",
    subtitle: "Dudas comunes",
    icon: "help",
    query: "pdf",
  },
  {
    title: "Contactar soporte",
    subtitle: "Estamos para ayudarte",
    icon: "chat",
    query: "soporte",
  },
  {
    title: "Novedades",
    subtitle: "Últimas actualizaciones",
    icon: "refresh",
    query: "novedades",
    badge: "Nuevo",
  },
];

const HELP_CATEGORIES = [
  {
    title: "Cómputos",
    description: "Aprende a crear y gestionar tus cómputos",
    icon: "calc",
    query: "cómputos",
  },
  {
    title: "Reportes",
    description: "Genera y exporta reportes personalizados",
    icon: "export",
    query: "reporte",
  },
  {
    title: "Base de datos",
    description: "Materiales, referencias y respaldos",
    icon: "database",
    query: "datos",
  },
  {
    title: "Configuración",
    description: "Ajustes visuales y preferencias",
    icon: "settings",
    query: "configuración",
  },
  {
    title: "Privacidad y respaldo",
    description: "Protege y conserva tu información local",
    icon: "lock",
    query: "respaldo",
  },
  {
    title: "Solución de problemas",
    description: "Diagnóstico de errores y ajustes comunes",
    icon: "help",
    query: "problemas",
  },
];

const HELP_FAQS = [
  {
    id: "nuevo-computo",
    question: "¿Cómo creo un nuevo cómputo?",
    answer:
      "Entra a Cómputos Métricos, elige el elemento, completa las dimensiones y guarda el resultado en un proyecto.",
  },
  {
    id: "exportar-pdf",
    question: "¿Cómo exporto un reporte a PDF?",
    answer:
      "Ve a Reportes y usa las opciones de exportación para generar un archivo PDF o Excel según lo necesites.",
  },
  {
    id: "datos-locales",
    question: "¿Dónde se almacenan mis datos?",
    answer:
      "La información se guarda localmente en este dispositivo para que puedas trabajar incluso sin internet.",
  },
  {
    id: "copia-seguridad",
    question: "¿Cómo hago una copia de seguridad?",
    answer:
      "Desde Datos y almacenamiento puedes respaldar la información antes de limpiar o cambiar de equipo.",
  },
  {
    id: "novedades",
    question: "¿Qué novedades incluye la aplicación?",
    answer:
      "La sección de novedades agrupa mejoras de interfaz, ajustes visuales y nuevas opciones disponibles dentro del proyecto.",
  },
];

const HELP_SUPPORT_CHANNELS = [
  {
    title: "Chat",
    subtitle: "Respuesta rápida",
    icon: "chat",
    tone: "blue",
  },
  {
    title: "Correo",
    subtitle: "Soporte escrito",
    icon: "mail",
    tone: "purple",
  },
  {
    title: "WhatsApp",
    subtitle: "Atención directa",
    icon: "phone",
    tone: "green",
  },
];

const HELP_TIPS = [
  "Usa la búsqueda para encontrar ayudas específicas.",
  "Las categorías te llevan al tema correcto más rápido.",
  "Mantén el modo oscuro para trabajar cómodo de noche.",
];

const ELEMENTOS = [
  {
    id: "columna",
    label: "Columna",
    icon: <img src={columnaImg} alt="Columna" />,
  },
  { id: "viga", label: "Viga", icon: <img src={vigaImg} alt="Viga" /> },
  { id: "losa", label: "Losa", icon: <img src={losaImg} alt="Losa" /> },
  { id: "muro", label: "Muro", icon: <img src={muroImg} alt="Muro" /> },
  { id: "zapata", label: "Zapata", icon: <img src={zapataImg} alt="Zapata" /> },
  { id: "piso", label: "Piso", icon: <img src={pisoImg} alt="Piso" /> },
  {
    id: "excavacion",
    label: "Excavación",
    icon: <img src={excavacionImg} alt="Excavación" />,
  },
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
    value: "Listas",
    sub: "Normas COVENIN ",
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
    label: "Normas COVENIN ",
    sub: "Biblioteca normativa integrada",
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

const APP_VERSION = "v1.0.0";
const SETTINGS_KEY = "civcalpro.settings";
const THEME_KEY = "theme";
const USER_KEY = "user";
const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

const DEFAULT_SETTINGS = {
  themeMode: "system",
  fontSize: "normal",
  language: "es",
  autosave: true,
};

const FONT_SCALES = {
  small: 1.05,
  normal: 1.25,
  large: 1.45,
};

const readJSON = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const readStoredSettings = () => ({
  ...DEFAULT_SETTINGS,
  ...readJSON(SETTINGS_KEY, DEFAULT_SETTINGS),
});

const getSystemTheme = () =>
  window.matchMedia?.(SYSTEM_THEME_QUERY)?.matches ?? false;

const resolveDarkMode = (themeMode, prefersDark) =>
  themeMode === "dark" || (themeMode === "system" && prefersDark);

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
function Sidebar({ activeModule, onNavigate }) {
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

const SETTINGS_SECTIONS = [
  {
    key: "apariencia",
    label: "Apariencia",
    icon: "palette",
    desc: "Tema, tamaño y lenguaje",
  },
  {
    key: "dispositivo",
    label: "Dispositivo",
    icon: "monitor",
    desc: "Modo de operación y pantalla",
  },
  {
    key: "datos",
    label: "Datos",
    icon: "database",
    desc: "Autoguardar y limpieza",
  },
  {
    key: "exportacion",
    label: "Exportación",
    icon: "export",
    desc: "PDF, Excel y compartir",
  },
  {
    key: "acerca",
    label: "Acerca de",
    icon: "info",
    desc: "Versión y normas incluidas",
  },
];

const THEME_OPTIONS = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Oscuro" },
  { value: "system", label: "Sistema" },
];

const FONT_OPTIONS = [
  { value: "small", label: "Pequeño" },
  { value: "normal", label: "Normal" },
  { value: "large", label: "Grande" },
];

const LANGUAGE_OPTIONS = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
];

const SETTINGS_COPY = {
  apariencia: {
    title: "Apariencia",
    subtitle: "Personaliza la interfaz visual de CivCalPro.",
  },
  dispositivo: {
    title: "Dispositivo",
    subtitle: "Ajustes pensados para escritorio y móvil.",
  },
  datos: {
    title: "Datos y almacenamiento",
    subtitle: "Controla lo que se guarda en este dispositivo.",
  },
  exportacion: {
    title: "Exportación",
    subtitle: "Prepara tus entregables para compartir o archivar.",
  },
  acerca: {
    title: "Acerca de CivCalPro",
    subtitle: "Estado general de la aplicación.",
  },
};

const formatStorageSize = (bytes) => {
  if (!bytes) return "0.0 MB";
  const mb = bytes / (1024 * 1024);
  return `${mb < 0.1 ? mb.toFixed(2) : mb.toFixed(1)} MB`;
};

const getLocalStorageUsage = () => {
  try {
    let total = 0;
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (!key || value === null) continue;
      total += key.length + value.length;
    }
    return total * 2;
  } catch {
    return 0;
  }
};

function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="settings-segmented">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`settings-segment ${value === option.value ? "active" : ""}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function SettingsRow({ title, subtitle, action, icon, destructive = false }) {
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

function SettingsCard({ title, subtitle, icon, children, accent = "neutral" }) {
  return (
    <section className={`settings-card accent-${accent}`}>
      <div className="settings-card-header">
        <div className="settings-card-title">
          <span className="settings-card-icon">
            <Icon name={icon} size={18} />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

function SettingsToggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`settings-toggle ${checked ? "checked" : ""}`}
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
    >
      <span className="settings-toggle-knob" />
    </button>
  );
}

function ModuloConfiguracion({
  settings,
  onSettingsChange,
  onResetAllData,
  storageUsage,
  darkMode,
}) {
  const [activeSection, setActiveSection] = useState("apariencia");

  const updateSetting = (key, value) => {
    onSettingsChange((prev) => ({ ...prev, [key]: value }));
  };

  const themeLabel =
    THEME_OPTIONS.find((option) => option.value === settings.themeMode)?.label ||
    "Sistema";

  const fontLabel =
    FONT_OPTIONS.find((option) => option.value === settings.fontSize)?.label ||
    "Normal";

  const languageLabel =
    LANGUAGE_OPTIONS.find((option) => option.value === settings.language)?.label ||
    "Español";

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

// ─── TOPBAR ───────────────────────────────────────────────────
// ─── TOPBAR ───────────────────────────────────────────────────
function Topbar({ title, darkMode, setDarkMode, activeModule, onOpenMenu = () => {} }) {
  const modulo = MODULES.find((m) => m.key === activeModule);

  return (
    <header className="topbar desktop-only">
      <div className="topbar-left">
        <button className="menu-btn" onClick={onOpenMenu}>
          <Icon name="menu" size={22} />
        </button>

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
                {modulo.icon}
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

// ─── DESKTOP HOME (NUEVO DASHBOARD) ───────────────────────────
function DesktopHome({ onNavigate, dashboardData }) {
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
                  {m.icon}
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

function ModuloProyectos() {
  return (
    <div className="page">
      <div className="proy-header">
        <div>
          <div className="proy-breadcrumb">
            <Icon name="folder" size={16} />
            <span>Proyectos</span>
          </div>
          <p className="proy-subtitle">
            Organiza y gestiona tus cálculos por proyecto.
          </p>
        </div>

        <button className="proy-btn-new">
          <Icon name="plus" size={14} /> Nuevo proyecto
        </button>
      </div>

      <div className="proy-stats">
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="folder" size={14} /> Total proyectos
          </div>
          <div className="proy-stat-value">{PROYECTOS.length}</div>
          <div className="proy-stat-note">Proyectos registrados</div>
        </div>
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="clock" size={14} /> En progreso
          </div>
          <div className="proy-stat-value">
            {PROYECTOS.filter((p) => p.pct < 100).length}
          </div>
          <div className="proy-stat-note">Proyectos activos</div>
        </div>
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="check" size={14} /> Completados
          </div>
          <div className="proy-stat-value">
            {PROYECTOS.filter((p) => p.pct === 100).length}
          </div>
          <div className="proy-stat-note">Proyectos finalizados</div>
        </div>
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="calc" size={14} /> Cálculos
          </div>
          <div className="proy-stat-value">—</div>
          <div className="proy-stat-note">Pendiente de datos</div>
        </div>
      </div>

      <div className="proy-toolbar">
        <div className="proy-search">
          <Icon name="search" size={14} />
          <span>Buscar proyecto...</span>
        </div>
        <button className="proy-filter-btn">
          <Icon name="filter" size={14} /> Filtrar
        </button>
        <button className="proy-filter-btn">
          <Icon name="sort-ascending" size={14} /> Ordenar
        </button>
      </div>

      <div className="proy-grid">
        {PROYECTOS.map((p) => (
          <div key={p.nombre} className="proy-card">
            <div className="proy-thumb" style={{ background: p.bg }}>
              {p.emoji}
            </div>
            <div className="proy-card-body">
              <div className="proy-card-title">{p.nombre}</div>
              <div className="proy-card-meta">Actualizado {p.tiempo}</div>
              <div className="proy-progress-bar">
                <div
                  className="proy-progress"
                  style={{ width: `${p.pct}%`, background: p.color }}
                />
              </div>
              <div className="proy-card-footer">
                <span className={`proy-tag ${p.pct === 100 ? "ok" : ""}`}>
                  {p.pct === 100 ? "Completado" : "En progreso"}
                </span>
                <span className="proy-pct">{p.pct}%</span>
              </div>
            </div>
          </div>
        ))}

        <div className="proy-new-card">
          <Icon name="plus" size={24} />
          <span>Nuevo proyecto</span>
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
    cemento: 5.5, // sacos por m³
    arena: 0.56, // m³ por m³ de concreto
    piedra: 0.84, // m³ por m³ de concreto
    agua: 216, // litros por m³
    pesoSaco: 42.5,
  },
  {
    id: "f180",
    fc: "f'c = 180 kg/cm²",
    ratio: "1 : 2.5 : 4",
    desc: "Losas, escaleras, muros",
    cemento: 6.5,
    arena: 0.52,
    piedra: 0.74,
    agua: 204,
    pesoSaco: 42.5,
  },
  {
    id: "f210",
    fc: "f'c = 210 kg/cm²",
    ratio: "1 : 1.5 : 3",
    desc: "Columnas, vigas, cimentaciones",
    cemento: 7.0,
    arena: 0.5,
    piedra: 0.7,
    agua: 195,
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
          {
            label: "Densidad / Peso específico",
            valor: "7,850",
            unidad: "kg/m³",
          },
          { label: "Módulo de elasticidad", valor: "200,000", unidad: "MPa" },
          { label: "Límite de fluencia fy", valor: "4,200", unidad: "kg/cm²" },
          { label: "Resistencia a tensión", valor: "6,300", unidad: "kg/cm²" },
        ],
        presentaciones: [
          'Ø 3/8" (9.5 mm)',
          'Ø 1/2" (12.7 mm)',
          'Ø 5/8" (15.9 mm)',
          'Ø 3/4" (19.1 mm)',
          'Ø 1" (25.4 mm)',
        ],
        usos: [
          "Vigas y columnas",
          "Losas de entrepiso",
          "Cimentaciones",
          "Muros estructurales",
        ],
        normas: [
          { codigo: "COVENIN 1638", desc: "Barras de acero de refuerzo" },
          { codigo: "ASTM A615", desc: "Grado 60" },
        ],
      },
      {
        id: "concreto_mat",
        nombre: "Concreto Estructural",
        categoria: "Material estructural · Pétreo",
        norma: "COVENIN 1753",
        icono: "building",
        propiedades: [
          { label: "Densidad", valor: "2,400", unidad: "kg/m³" },
          { label: "Resistencia f'c", valor: "210", unidad: "kg/cm²" },
          { label: "Módulo de Young", valor: "21,538", unidad: "MPa" },
          { label: "Coef. de Poisson", valor: "0.20", unidad: "" },
        ],
        presentaciones: [
          "f'c 150 kg/cm²",
          "f'c 180 kg/cm²",
          "f'c 210 kg/cm²",
          "f'c 250 kg/cm²",
        ],
        usos: ["Columnas", "Vigas", "Losas", "Fundaciones"],
        normas: [
          { codigo: "COVENIN 1753", desc: "Estructuras de concreto armado" },
          { codigo: "COVENIN 633", desc: "Cemento Portland" },
        ],
      },
      {
        id: "bloque_arcilla",
        nombre: "Bloque de Arcilla",
        categoria: "Material de mampostería · Cerámico",
        norma: "COVENIN 42",
        icono: "layout-board",
        propiedades: [
          { label: "Densidad", valor: "1,800", unidad: "kg/m³" },
          { label: "Resistencia compresión", valor: "40", unidad: "kg/cm²" },
          { label: "Absorción de agua", valor: "< 15", unidad: "%" },
          { label: "Dimensiones", valor: "40×20×15", unidad: "cm" },
        ],
        presentaciones: ["Bloque 10 cm", "Bloque 15 cm", "Bloque 20 cm"],
        usos: [
          "Paredes interiores",
          "Paredes exteriores",
          "Tabiques divisorios",
        ],
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
          { label: "Densidad", valor: "2,000", unidad: "kg/m³" },
          { label: "Resistencia compresión", valor: "50", unidad: "kg/cm²" },
          { label: "Absorción de agua", valor: "< 10", unidad: "%" },
          { label: "Dimensiones", valor: "40×20×15", unidad: "cm" },
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
          { label: "Tamaño máximo", valor: "4.75", unidad: "mm" },
          { label: "Módulo de finura", valor: "2.3 – 3.1", unidad: "" },
          { label: "Contenido de finos", valor: "< 5", unidad: "%" },
        ],
        presentaciones: ["Arena lavada", "Arena de río", "Arena de cantera"],
        usos: [
          "Mezclas de concreto",
          "Morteros",
          "Rellenos",
          "Pega de bloques",
        ],
        normas: [
          {
            codigo: "COVENIN 277",
            desc: "Áridos para concreto de cemento Portland",
          },
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
          { label: "Tamaño máximo", valor: "25", unidad: "mm" },
          { label: "Desgaste Los Ángeles", valor: "< 40", unidad: "%" },
          { label: "Absorción", valor: "< 2", unidad: "%" },
        ],
        presentaciones: ['Grava 3/4"', 'Grava 1/2"', 'Grava 3/8"'],
        usos: ["Mezclas de concreto", "Drenajes", "Rellenos granulares"],
        normas: [
          {
            codigo: "COVENIN 277",
            desc: "Áridos para concreto de cemento Portland",
          },
        ],
      },
      {
        id: "cemento",
        nombre: "Cemento Portland",
        categoria: "Aglomerante hidráulico",
        norma: "COVENIN 633",
        icono: "package",
        propiedades: [
          { label: "Peso por saco", valor: "42.5", unidad: "kg" },
          { label: "Densidad", valor: "1,500", unidad: "kg/m³" },
          { label: "Resistencia 28 días", valor: "350", unidad: "kg/cm²" },
          { label: "Fraguado inicial", valor: "≥ 45", unidad: "min" },
        ],
        presentaciones: [
          "Tipo I (uso general)",
          "Tipo II (moderado)",
          "Tipo V (sulfatorresistente)",
        ],
        usos: [
          "Concreto estructural",
          "Morteros",
          "Pega de bloques",
          "Repello",
        ],
        normas: [
          {
            codigo: "COVENIN 633",
            desc: "Cemento Portland — especificaciones",
          },
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
          { label: "Rendimiento", valor: "30", unidad: "m² / galón" },
          { label: "Tiempo de secado", valor: "2 – 4", unidad: "horas" },
          { label: "Dilución máxima", valor: "10", unidad: "%" },
          { label: "N° de manos", valor: "2", unidad: "manos" },
        ],
        presentaciones: [
          "Galón (3.78 L)",
          "Cuñete (18.9 L)",
          "Cubeta (3.78 L)",
        ],
        usos: ["Paredes interiores", "Paredes exteriores", "Cielos rasos"],
        normas: [
          {
            codigo: "COVENIN 1292",
            desc: "Pinturas y barnices — terminología",
          },
        ],
      },
      {
        id: "ceramica",
        nombre: "Cerámica para Piso",
        categoria: "Acabado de piso · Cerámico",
        norma: "COVENIN 1335",
        icono: "layout-grid",
        propiedades: [
          { label: "Rendimiento", valor: "1.10", unidad: "m² / m²" },
          { label: "Absorción de agua", valor: "< 3", unidad: "%" },
          { label: "Resistencia al desgaste", valor: "PEI 4", unidad: "" },
          { label: "Espesor", valor: "8 – 10", unidad: "mm" },
        ],
        presentaciones: ["30×30 cm", "40×40 cm", "45×45 cm", "60×60 cm"],
        usos: ["Pisos interiores", "Pisos exteriores", "Baños", "Cocinas"],
        normas: [
          {
            codigo: "COVENIN 1335",
            desc: "Baldosas cerámicas — clasificación",
          },
        ],
      },
      {
        id: "porcelanato",
        nombre: "Porcelanato",
        categoria: "Acabado de piso · Gres porcelánico",
        norma: "COVENIN 1335",
        icono: "layout-grid",
        propiedades: [
          { label: "Rendimiento", valor: "1.10", unidad: "m² / m²" },
          { label: "Absorción de agua", valor: "< 0.5", unidad: "%" },
          { label: "Resistencia al desgaste", valor: "PEI 5", unidad: "" },
          { label: "Espesor", valor: "9 – 12", unidad: "mm" },
        ],
        presentaciones: ["60×60 cm", "60×120 cm", "80×80 cm", "120×120 cm"],
        usos: ["Pisos de alto tráfico", "Fachadas", "Zonas húmedas"],
        normas: [
          {
            codigo: "COVENIN 1335",
            desc: "Baldosas cerámicas — gres porcelánico",
          },
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
      { id: "area", label: "Área total (m²)", tipo: "number", default: "120" },
      { id: "manos", label: "N° de manos", tipo: "number", default: "2" },
      {
        id: "tipo",
        label: "Tipo de pintura",
        tipo: "select",
        opciones: [
          "Pintura de caucho interior",
          "Pintura de caucho exterior",
          "Pintura al aceite",
        ],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const manos = parseFloat(campos.manos) || 1;
      const rendPintura = 30;
      const rendSellador = 35;
      const galPintura = Math.ceil((area * manos) / rendPintura);
      const galSellador = Math.ceil(area / rendSellador);
      const rodillos = Math.ceil(area / 60);
      return {
        filas: [
          {
            material: "Pintura de caucho",
            rendimiento: `${rendPintura} m² / galón`,
            cantidad: galPintura,
            unidad: "galones",
            obs: `${manos} mano(s) × ${Math.ceil(area / rendPintura)} gal/mano`,
          },
          {
            material: "Sellador / base",
            rendimiento: `${rendSellador} m² / galón`,
            cantidad: galSellador,
            unidad: "galones",
            obs: "1 mano antes de pintura",
          },
          {
            material: 'Rodillo de 9"',
            rendimiento: "—",
            cantidad: rodillos,
            unidad: "unidades",
            obs: "Estimado por área",
          },
          {
            material: "Bandeja",
            rendimiento: "—",
            cantidad: rodillos,
            unidad: "unidades",
            obs: "Una por rodillo",
          },
        ],
        resumen: [
          { label: "Área calculada", valor: `${area} m²` },
          { label: "Rendimiento promedio", valor: `${rendPintura} m²/gal` },
          {
            label: "Total pintura principal",
            valor: `${galPintura} galones`,
            destacado: true,
          },
        ],
      };
    },
  },
  {
    id: "ceramica",
    label: "Cerámica",
    icon: "layout-grid",
    campos: [
      {
        id: "area",
        label: "Área a cubrir (m²)",
        tipo: "number",
        default: "85",
      },
      {
        id: "desperdicio",
        label: "% Desperdicio",
        tipo: "number",
        default: "10",
      },
      {
        id: "formato",
        label: "Formato de pieza",
        tipo: "select",
        opciones: ["30×30 cm", "40×40 cm", "45×45 cm", "60×60 cm"],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const desperdicio = parseFloat(campos.desperdicio) || 10;
      const totalArea = area * (1 + desperdicio / 100);
      const pegamento = Math.ceil(totalArea / 5);
      const fragua = Math.ceil(totalArea / 10);
      return {
        filas: [
          {
            material: "Cerámica",
            rendimiento: "1 m² / m²",
            cantidad: totalArea.toFixed(2),
            unidad: "m²",
            obs: `Incluye ${desperdicio}% desperdicio`,
          },
          {
            material: "Pegamento",
            rendimiento: "5 m² / saco",
            cantidad: pegamento,
            unidad: "sacos",
            obs: "Saco de 25 kg",
          },
          {
            material: "Fragua",
            rendimiento: "10 m² / kg",
            cantidad: fragua,
            unidad: "kg",
            obs: "Según junta",
          },
        ],
        resumen: [
          { label: "Área neta", valor: `${area} m²` },
          { label: "Con desperdicio", valor: `${totalArea.toFixed(2)} m²` },
          {
            label: "Cerámica total",
            valor: `${totalArea.toFixed(2)} m²`,
            destacado: true,
          },
        ],
      };
    },
  },
  {
    id: "repello",
    label: "Repello / Friso",
    icon: "wall",
    campos: [
      {
        id: "area",
        label: "Área de pared (m²)",
        tipo: "number",
        default: "60",
      },
      { id: "espesor", label: "Espesor (cm)", tipo: "number", default: "1.5" },
      {
        id: "tipo",
        label: "Tipo de mezcla",
        tipo: "select",
        opciones: [
          "1:4 (cemento:arena)",
          "1:3 (cemento:arena)",
          "1:6 (cemento:arena)",
        ],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const espesor = parseFloat(campos.espesor) || 1.5;
      const vol = area * (espesor / 100);
      const sacos = Math.ceil(vol * 8);
      const arena = parseFloat((vol * 0.04).toFixed(3));
      return {
        filas: [
          {
            material: "Cemento",
            rendimiento: "8 sacos / m³",
            cantidad: sacos,
            unidad: "sacos",
            obs: "Mezcla 1:4",
          },
          {
            material: "Arena",
            rendimiento: "0.04 m³ / m²",
            cantidad: arena,
            unidad: "m³",
            obs: `Espesor ${espesor} cm`,
          },
        ],
        resumen: [
          { label: "Área total", valor: `${area} m²` },
          { label: "Volumen mezcla", valor: `${vol.toFixed(3)} m³` },
          { label: "Cemento total", valor: `${sacos} sacos`, destacado: true },
        ],
      };
    },
  },
  {
    id: "enchape",
    label: "Enchape",
    icon: "layers-intersect",
    campos: [
      { id: "area", label: "Área (m²)", tipo: "number", default: "40" },
      {
        id: "desperdicio",
        label: "% Desperdicio",
        tipo: "number",
        default: "10",
      },
      {
        id: "formato",
        label: "Formato de pieza",
        tipo: "select",
        opciones: ["20×40 cm", "30×60 cm", "45×90 cm", "60×120 cm"],
      },
      {
        id: "proyecto",
        label: "Proyecto",
        tipo: "select",
        opciones: [
          "Edif. Residencial - Santa Marta",
          "C. Comercial - Barranquilla",
          "Otro",
        ],
      },
    ],
    calcular: (campos) => {
      const area = parseFloat(campos.area) || 0;
      const desperdicio = parseFloat(campos.desperdicio) || 10;
      const totalArea = area * (1 + desperdicio / 100);
      const pegamento = Math.ceil(totalArea / 4);
      const fragua = Math.ceil(totalArea / 8);
      return {
        filas: [
          {
            material: "Porcelanato / enchape",
            rendimiento: "1 m² / m²",
            cantidad: totalArea.toFixed(2),
            unidad: "m²",
            obs: `Incluye ${desperdicio}% desperdicio`,
          },
          {
            material: "Pegamento especial",
            rendimiento: "4 m² / saco",
            cantidad: pegamento,
            unidad: "sacos",
            obs: "Saco de 25 kg",
          },
          {
            material: "Fragua epoxi",
            rendimiento: "8 m² / kg",
            cantidad: fragua,
            unidad: "kg",
            obs: "Junta fina",
          },
        ],
        resumen: [
          { label: "Área neta", valor: `${area} m²` },
          { label: "Con desperdicio", valor: `${totalArea.toFixed(2)} m²` },
          {
            label: "Enchape total",
            valor: `${totalArea.toFixed(2)} m²`,
            destacado: true,
          },
        ],
      };
    },
  },
];

// ─── MÓDULO 2: DOSIFICACIÓN DE CONCRETO ─────────────────────
function ModuloConcreto() {
  const [dosifId, setDosifId] = useState("f210");
  const [volumen, setVolumen] = useState("3.00");
  const [proyecto, setProyecto] = useState("edificio");
  const [nivel, setNivel] = useState("nivel1");
  const [calculado, setCalculado] = useState(false);

  const dosif =
    DOSIFICACIONES.find((d) => d.id === dosifId) || DOSIFICACIONES[2];
  const vol = parseFloat(volumen) || 0;

  const resultados = {
    cemento: Math.ceil(dosif.cemento * vol),
    arena: (dosif.arena * vol).toFixed(2),
    piedra: (dosif.piedra * vol).toFixed(2),
    agua: Math.round(dosif.agua * vol),
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
        <h1>
          Dosificación de <span className="text-orange">Concreto</span>
        </h1>
        <p>
          Calcula los materiales necesarios según resistencia y volumen
          requerido.
        </p>
      </div>

      <div className="modulo-card">
        {/* PASO 1: Resistencia */}
        <div className="modulo-section-title">
          1. Seleccionar resistencia (f'c)
        </div>
        <div className="conc-mix-grid">
          {DOSIFICACIONES.map((d) => (
            <div
              key={d.id}
              className={`conc-mix-card ${dosifId === d.id ? "selected" : ""}`}
              onClick={() => {
                setDosifId(d.id);
                setCalculado(false);
              }}
            >
              <div className="conc-mix-fc">{d.fc}</div>
              <div className="conc-mix-ratio">{d.ratio}</div>
              <div className="conc-mix-desc">{d.desc}</div>
            </div>
          ))}
        </div>

        {/* PASO 2: Volumen y datos */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>
          2. Volumen y datos del proyecto
        </div>
        <div
          className="form-grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          <div className="form-field">
            <label>Volumen de concreto (m³)</label>
            <input
              type="number"
              value={volumen}
              step="0.10"
              min="0.10"
              onChange={(e) => {
                setVolumen(e.target.value);
                setCalculado(false);
              }}
            />
          </div>
          <div className="form-field">
            <label>Proyecto</label>
            <select
              value={proyecto}
              onChange={(e) => setProyecto(e.target.value)}
            >
              <option value="edificio">
                Edificio Residencial - Santa Marta
              </option>
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
            <span
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <span className="conc-ratio-val">{v.trim()}</span>
              {i < arr.length - 1 && <span className="conc-ratio-sep">:</span>}
            </span>
          ))}
          <span className="conc-ratio-fc">{dosif.fc}</span>
        </div>

        {/* PASO 3: Resultados */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>
          3. Resultados
        </div>
        <div className="conc-res-grid">
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🏗️ Cemento</div>
            <div className="conc-res-val">
              {calculado ? resultados.cemento : "—"}
            </div>
            <div className="conc-res-unit">sacos ({dosif.pesoSaco} kg c/u)</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🏜️ Arena</div>
            <div className="conc-res-val">
              {calculado ? resultados.arena : "—"}
            </div>
            <div className="conc-res-unit">m³</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🪨 Piedra</div>
            <div className="conc-res-val">
              {calculado ? resultados.piedra : "—"}
            </div>
            <div className="conc-res-unit">m³</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">💧 Agua</div>
            <div className="conc-res-val">
              {calculado ? resultados.agua : "—"}
            </div>
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
  const [busqueda, setBusqueda] = useState("");
  const [materialActivo, setMaterialActivo] = useState(
    CATEGORIAS_MATERIALES[0].materiales[0],
  );

  // Filtra materiales según búsqueda
  const categoriasFiltradas = CATEGORIAS_MATERIALES.map((cat) => ({
    ...cat,
    materiales: cat.materiales.filter((m) =>
      m.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    ),
  })).filter((cat) => cat.materiales.length > 0);

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Biblioteca de <span className="text-purple">Materiales</span>
        </h1>
        <p>
          Consulta información técnica de materiales de construcción y sus
          propiedades.
        </p>
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
                  <span
                    className="bib-mat-dot"
                    style={{ background: cat.color }}
                  />
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
                <span key={i} className="bib-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Usos */}
            <div className="bib-section-title">Usos principales</div>
            <div className="bib-tag-row">
              {materialActivo.usos.map((u, i) => (
                <span key={i} className="bib-tag">
                  {u}
                </span>
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
  const [campos, setCampos] = useState({});
  const [calculado, setCalculado] = useState(false);

  const actividad = ACTIVIDADES_ESTIMACION.find((a) => a.id === actividadId);

  // Inicializa campos con defaults cuando cambia la actividad
  const handleActividad = (id) => {
    const act = ACTIVIDADES_ESTIMACION.find((a) => a.id === id);
    const defaults = {};
    act.campos.forEach((c) => {
      defaults[c.id] = c.default || "";
    });
    setActividadId(id);
    setCampos(defaults);
    setCalculado(false);
  };

  // Inicializa al montar
  useState(() => {
    handleActividad("pintura");
  }, []);

  const handleCampo = (id, val) => {
    setCampos((prev) => ({ ...prev, [id]: val }));
    setCalculado(false);
  };

  const resultado = calculado && actividad ? actividad.calcular(campos) : null;

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Estimación de <span className="text-blue">Materiales</span>
        </h1>
        <p>
          Selecciona una actividad y calcula los materiales necesarios con sus
          rendimientos.
        </p>
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
        <div
          className="form-grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {actividad?.campos.map((c) => (
            <div key={c.id} className="form-field">
              <label>{c.label}</label>
              {c.tipo === "select" ? (
                <select
                  value={campos[c.id] || ""}
                  onChange={(e) => handleCampo(c.id, e.target.value)}
                >
                  {c.opciones.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
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
          <button
            className="btn btn-ghost"
            onClick={() => {
              handleActividad(actividadId);
            }}
          >
            <Icon name="trash" size={15} /> Limpiar
          </button>
          <button className="btn btn-blue" onClick={() => setCalculado(true)}>
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
            <p>
              Ingresa los datos y presiona Calcular para ver los resultados.
            </p>
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
                    <td style={{ color: "var(--text-muted)" }}>
                      {f.rendimiento}
                    </td>
                    <td className="est-qty">{f.cantidad}</td>
                    <td style={{ color: "var(--text-muted)" }}>{f.unidad}</td>
                    <td style={{ color: "var(--text-muted)", fontSize: 12 }}>
                      {f.obs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Resumen */}
            <div className="est-resumen">
              {resultado.resumen.map((r, i) => (
                <div
                  key={i}
                  className={`est-resumen-cell ${r.destacado ? "destacado" : ""}`}
                >
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

// ─── HISTORIAL DE CÁLCULOS ────────────────────────────────────
function ModuloHistorial() {
  const [filtroModulo, setFiltroModulo] = useState("Todos");
  const [filtroTexto, setFiltroTexto] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const calculosPorPagina = 6;

  // Datos de ejemplo del historial
  const historialCompleto = [
    {
      id: 1,
      fecha: "Hoy 10:32",
      modulo: "Cómputos",
      descripcion: "Columna 0.30×0.30 m — ×12",
      proyecto: "Edif. Residencial",
      resultado: "3.24 m³",
      moduloKey: "computos",
      badgeBg: "#E8F8EF",
      badgeColor: "#166534",
      icon: "ruler-2",
    },
    {
      id: 2,
      fecha: "Ayer 16:15",
      modulo: "Concreto",
      descripcion: "Dosificación f'c 210 — 3 m³",
      proyecto: "Edif. Residencial",
      resultado: "21 sacos",
      moduloKey: "concreto",
      badgeBg: "#FEF3E8",
      badgeColor: "#9A3412",
      icon: "building",
    },
    {
      id: 3,
      fecha: "Ayer 14:08",
      modulo: "Estimación",
      descripcion: "Pintura interior — 120 m²",
      proyecto: "Edif. Residencial",
      resultado: "8 galones",
      moduloKey: "estimacion",
      badgeBg: "#EFF4FF",
      badgeColor: "#1D4ED8",
      icon: "calculator",
    },
    {
      id: 4,
      fecha: "Hace 3 días",
      modulo: "Cómputos",
      descripcion: "Viga 0.25×0.50 m — ×8",
      proyecto: "C. Comercial",
      resultado: "8.0 m³",
      moduloKey: "computos",
      badgeBg: "#E8F8EF",
      badgeColor: "#166534",
      icon: "ruler-2",
    },
    {
      id: 5,
      fecha: "Hace 5 días",
      modulo: "Concreto",
      descripcion: "Dosificación f'c 180 — 5 m³",
      proyecto: "Colegio Municipal",
      resultado: "30 sacos",
      moduloKey: "concreto",
      badgeBg: "#FEF3E8",
      badgeColor: "#9A3412",
      icon: "building",
    },
    {
      id: 6,
      fecha: "Hace 1 sem",
      modulo: "Estimación",
      descripcion: "Cerámica piso — 85 m²",
      proyecto: "Vivienda Bogotá",
      resultado: "93.5 m²",
      moduloKey: "estimacion",
      badgeBg: "#EFF4FF",
      badgeColor: "#1D4ED8",
      icon: "calculator",
    },
  ];

  // Filtrar datos
  const historialFiltrado = historialCompleto.filter((item) => {
    const cumpleFiltroModulo =
      filtroModulo === "Todos" || item.modulo === filtroModulo;
    const cumpleTexto =
      filtroTexto === "" ||
      item.descripcion.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      item.proyecto.toLowerCase().includes(filtroTexto.toLowerCase());
    return cumpleFiltroModulo && cumpleTexto;
  });

  // Paginación
  const totalPaginas = Math.ceil(historialFiltrado.length / calculosPorPagina);
  const inicio = (paginaActual - 1) * calculosPorPagina;
  const fin = inicio + calculosPorPagina;
  const calculosPagina = historialFiltrado.slice(inicio, fin);

  // Estadísticas
  const totales = {
    total: historialCompleto.length,
    computos: historialCompleto.filter((h) => h.moduloKey === "computos")
      .length,
    concreto: historialCompleto.filter((h) => h.moduloKey === "concreto")
      .length,
    biblioteca: historialCompleto.filter((h) => h.moduloKey === "biblioteca")
      .length,
    estimacion: historialCompleto.filter((h) => h.moduloKey === "estimacion")
      .length,
    exportados: Math.floor(historialCompleto.length * 0.5),
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            Historial de <span>Cálculos</span>
          </h1>
          <p className="page-subtitle">
            Todos los cálculos realizados, ordenados por fecha
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="historial-stats">
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="calc" size={13} /> Total
          </div>
          <div className="stat-value">{totales.total}</div>
          <div className="stat-sub">Cálculos realizados</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="ruler" size={13} /> Cómputos
          </div>
          <div className="stat-value" style={{ color: "var(--green)" }}>
            {totales.computos}
          </div>
          <div className="stat-sub">Mediciones</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="building" size={13} /> Concreto
          </div>
          <div className="stat-value" style={{ color: "var(--orange)" }}>
            {totales.concreto}
          </div>
          <div className="stat-sub">Dosificaciones</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="export" size={13} /> Exportados
          </div>
          <div className="stat-value">{totales.exportados}</div>
          <div className="stat-sub">Archivos descargados</div>
        </div>
      </div>

      {/* Card principal */}
      <div className="historial-card">
        {/* Toolbar */}
        <div className="historial-toolbar">
          <div className="search-box">
            <Icon name="search" size={13} />
            <input
              type="text"
              placeholder="Buscar cálculo..."
              value={filtroTexto}
              onChange={(e) => {
                setFiltroTexto(e.target.value);
                setPaginaActual(1);
              }}
            />
          </div>
          <div className="filter-chips">
            {["Todos", "Cómputos", "Concreto", "Biblioteca", "Estimación"].map(
              (chip) => (
                <button
                  key={chip}
                  className={`filter-chip ${filtroModulo === chip ? "active" : ""}`}
                  onClick={() => {
                    setFiltroModulo(chip);
                    setPaginaActual(1);
                  }}
                >
                  {chip}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Tabla */}
        <div className="historial-table-wrapper">
          <table className="historial-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Módulo</th>
                <th>Descripción</th>
                <th>Proyecto</th>
                <th>Resultado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {calculosPagina.length > 0 ? (
                calculosPagina.map((item) => (
                  <tr key={item.id}>
                    <td className="fecha-col">{item.fecha}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: item.badgeBg,
                          color: item.badgeColor,
                        }}
                      >
                        <Icon
                          name={item.icon}
                          size={10}
                          style={{ marginRight: 4 }}
                        />
                        {item.modulo}
                      </span>
                    </td>
                    <td>{item.descripcion}</td>
                    <td className="proyecto-col">{item.proyecto}</td>
                    <td className="resultado-col">{item.resultado}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn" title="Ver">
                          <Icon name="eye" size={12} />
                        </button>
                        <button className="action-btn" title="Copiar">
                          <Icon name="copy" size={12} />
                        </button>
                        <button className="action-btn" title="Descargar">
                          <Icon name="download" size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: 20 }}>
                    No hay cálculos que coincidan con los filtros
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="historial-pagination">
          <span>
            Mostrando {calculosPagina.length} de {historialFiltrado.length}{" "}
            cálculos
          </span>
          <div className="pagination-buttons">
            <button
              className="page-btn"
              onClick={() => setPaginaActual(Math.max(1, paginaActual - 1))}
              disabled={paginaActual === 1}
            >
              <Icon name="back" size={11} />
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${paginaActual === i + 1 ? "active" : ""}`}
                onClick={() => setPaginaActual(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() =>
                setPaginaActual(Math.min(totalPaginas, paginaActual + 1))
              }
              disabled={paginaActual === totalPaginas}
            >
              <Icon name="chevron" size={11} />
            </button>
          </div>
        </div>
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

function ModuloAyuda({ mobile = false, onBack = () => {} }) {
  const [searchText, setSearchText] = useState("");
  const [openFaq, setOpenFaq] = useState(HELP_FAQS[0]?.id || null);

  const search = searchText.trim().toLowerCase();

  const visibleCategories = HELP_CATEGORIES.filter((item) => {
    if (!search) return true;
    return (
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    );
  });

  const visibleFaqs = HELP_FAQS.filter((item) => {
    if (!search) return true;
    return (
      item.question.toLowerCase().includes(search) ||
      item.answer.toLowerCase().includes(search)
    );
  });

  const activeFaqId =
    openFaq === null
      ? null
      : visibleFaqs.find((item) => item.id === openFaq)?.id || visibleFaqs[0]?.id || null;

  const handleQuickAction = (query) => {
    setSearchText(query);
    setOpenFaq(HELP_FAQS[0]?.id || null);
  };

  const wrapperClass = mobile
    ? "mobile-page help-page help-mobile"
    : "page help-page help-desktop";

  return (
    <>
      {mobile && (
        <header className="mobile-module-topbar">
          <button className="mobile-back-btn" onClick={onBack}>
            <Icon name="back" size={22} />
          </button>
          <h2>Ayuda</h2>
          <button className="mobile-save-btn" type="button" aria-label="Ayuda">
            <Icon name="help" size={22} />
          </button>
        </header>
      )}
      <div className={wrapperClass}>
      <section className="help-hero">
        <div className="help-hero-main">
          <div className="help-hero-icon">
            <Icon name="help" size={18} />
          </div>
          <div>
            <h1>Ayuda</h1>
            <p>Encuentra respuestas, guías y soporte para usar CivCalPro.</p>
          </div>
        </div>
        <span className="help-hero-pill">Centro de ayuda</span>
      </section>

      <div className="help-search">
        <Icon name="search" size={16} />
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Buscar en la ayuda..."
        />
      </div>

      <div className="help-quick-grid">
        {HELP_QUICK_ACTIONS.map((item) => (
          <button
            key={item.title}
            type="button"
            className="help-quick-card"
            onClick={() => handleQuickAction(item.query)}
          >
            {item.badge && <span className="help-quick-badge">{item.badge}</span>}
            <span className="help-quick-icon">
              <Icon name={item.icon} size={16} />
            </span>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </button>
        ))}
      </div>

      <div className="help-layout">
        <div className="help-column">
          <section className="help-panel">
            <div className="help-panel-head">
              <div>
                <h3>Categorías de ayuda</h3>
                <p>Explora los temas más consultados</p>
              </div>
              <span>{visibleCategories.length} temas</span>
            </div>

            <div className="help-category-list">
              {visibleCategories.length > 0 ? (
                visibleCategories.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="help-category-item"
                    onClick={() => handleQuickAction(item.query)}
                  >
                    <span className="help-category-icon">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <span className="help-category-copy">
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                    <Icon name="chevron" size={14} />
                  </button>
                ))
              ) : (
                <div className="help-empty-state">
                  No encontramos categorías para esa búsqueda.
                </div>
              )}
            </div>
          </section>

          <section className="help-panel">
            <div className="help-panel-head">
              <div>
                <h3>Preguntas frecuentes</h3>
                <p>Respuestas cortas a dudas comunes</p>
              </div>
              <button
                type="button"
                className="help-link"
                onClick={() => {
                  setSearchText("");
                  setOpenFaq(HELP_FAQS[0]?.id || null);
                }}
              >
                Ver todo
              </button>
            </div>

            <div className="help-faq-list">
              {visibleFaqs.length > 0 ? (
                visibleFaqs.map((item) => {
                  const isOpen = activeFaqId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`help-faq-item ${isOpen ? "open" : ""}`}
                    >
                      <button
                        type="button"
                        className="help-faq-question"
                        onClick={() => setOpenFaq(isOpen ? null : item.id)}
                      >
                        <span>{item.question}</span>
                        <Icon name="chevron" size={14} />
                      </button>
                      {isOpen && <div className="help-faq-answer">{item.answer}</div>}
                    </div>
                  );
                })
              ) : (
                <div className="help-empty-state">
                  No encontramos preguntas que coincidan con tu búsqueda.
                </div>
              )}
            </div>
          </section>
        </div>

        <aside className="help-sidebar">
          <section className="help-panel help-support-panel">
            <div className="help-panel-head">
              <div>
                <h3>¿Necesitas más ayuda?</h3>
                <p>Escoge el canal que prefieras</p>
              </div>
            </div>

            <div className="help-support-grid">
              {HELP_SUPPORT_CHANNELS.map((item) => (
                <div key={item.title} className={`help-support-card tone-${item.tone}`}>
                  <span className="help-support-icon">
                    <Icon name={item.icon} size={16} />
                  </span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="help-panel help-tips-panel">
            <div className="help-panel-head">
              <div>
                <h3>Consejos rápidos</h3>
                <p>Pequeñas ayudas para trabajar más cómodo</p>
              </div>
            </div>

            <ul className="help-tips-list">
              {HELP_TIPS.map((tip, index) => (
                <li key={tip}>
                  <span>{index + 1}</span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
      </div>
    </>
  );
}

function ModuloNormas({ mobile = false, onBack = () => {} }) {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("todas");
  const [selectedId, setSelectedId] = useState(NORMAS_DOCUMENTS[0]?.id || null);

  const search = searchText.trim().toLowerCase();

  const filteredDocs = NORMAS_DOCUMENTS.filter((doc) => {
    const matchesCategory =
      activeCategory === "todas" || doc.type.toLowerCase() === activeCategory;
    const matchesSearch =
      !search ||
      doc.code.toLowerCase().includes(search) ||
      doc.title.toLowerCase().includes(search) ||
      doc.summary.toLowerCase().includes(search) ||
      doc.source.toLowerCase().includes(search) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(search));

    return matchesCategory && matchesSearch;
  });

  const selectedDoc =
    filteredDocs.find((doc) => doc.id === selectedId) || filteredDocs[0] || NORMAS_DOCUMENTS[0];

  const visibleDocs = filteredDocs.length > 0 ? filteredDocs : NORMAS_DOCUMENTS;
  const totalDocs = NORMAS_DOCUMENTS.length;
  const totalCats = new Set(NORMAS_DOCUMENTS.map((doc) => doc.type)).size;

  const wrapperClass = mobile
    ? "mobile-page normas-page normas-mobile"
    : "page normas-page normas-desktop";

  const renderDocCard = (doc) => (
    <button
      key={doc.id}
      type="button"
      className={`normas-doc-card tone-${doc.tone} ${selectedDoc?.id === doc.id ? "active" : ""}`}
      onClick={() => setSelectedId(doc.id)}
    >
      <div className="normas-doc-card-top">
        <span className="normas-doc-badge">
          <Icon name="book" size={14} />
        </span>
        <span className="normas-doc-type">{doc.type}</span>
      </div>

      <strong>{doc.code}</strong>
      <p>{doc.title}</p>
      <small>{doc.summary}</small>

      <div className="normas-doc-tags">
        {doc.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </button>
  );

  return (
    <>
      {mobile && (
        <header className="mobile-module-topbar">
          <button className="mobile-back-btn" onClick={onBack}>
            <Icon name="back" size={22} />
          </button>
          <h2>Normas</h2>
          <button className="mobile-save-btn" type="button" aria-label="Normas">
            <Icon name="book" size={22} />
          </button>
        </header>
      )}

      <div className={wrapperClass}>
        <section className="normas-hero">
          <div className="normas-hero-main">
            <div className="normas-hero-icon">
              <Icon name="book" size={18} />
            </div>
            <div>
              <h1>Normas COVENIN incluidas</h1>
              <p>Biblioteca normativa integrada para consulta y soporte técnico.</p>
            </div>
          </div>
          <div className="normas-hero-stats">
            <div>
              <strong>{totalDocs}</strong>
              <span>Documentos</span>
            </div>
            <div>
              <strong>{totalCats}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </section>

        <div className="normas-searchbar">
          <Icon name="search" size={16} />
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar norma, código o tema..."
          />
        </div>

        <div className="normas-filters">
          {NORMAS_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`normas-filter ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="normas-layout">
          <div className="normas-column">
            <section className="normas-panel">
              <div className="help-panel-head">
                <div>
                  <h3>Biblioteca normativa</h3>
                  <p>Selecciona un documento para ver sus datos clave</p>
                </div>
                <span>{visibleDocs.length} documentos</span>
              </div>

              <div className="normas-doc-grid">
                {visibleDocs.length > 0 ? (
                  visibleDocs.map(renderDocCard)
                ) : (
                  <div className="help-empty-state">
                    No encontramos normas para esa búsqueda.
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="normas-sidebar">
            <section className="normas-panel normas-detail-panel">
              <div className="help-panel-head">
                <div>
                  <h3>Documento seleccionado</h3>
                  <p>Vista rápida para orientar la consulta</p>
                </div>
              </div>

              {selectedDoc ? (
                <div className="normas-detail">
                  <div className={`normas-detail-hero tone-${selectedDoc.tone}`}>
                    <span className="normas-detail-icon">
                      <Icon name="book" size={18} />
                    </span>
                    <div>
                      <strong>{selectedDoc.code}</strong>
                      <p>{selectedDoc.type}</p>
                    </div>
                  </div>

                  <h4>{selectedDoc.title}</h4>
                  <p className="normas-detail-copy">{selectedDoc.summary}</p>

                  <div className="normas-detail-meta">
                    <span className="normas-pill">Incluida</span>
                    <span className="normas-pill">{selectedDoc.type}</span>
                  </div>

                  <div className="normas-source-box">
                    <strong>Archivo fuente</strong>
                    <p>{selectedDoc.source}</p>
                  </div>

                  <div className="normas-action-row">
                    <button type="button" className="btn btn-blue">
                      Ver documento
                    </button>
                    <button type="button" className="btn btn-ghost">
                      Referencia
                    </button>
                  </div>
                </div>
              ) : (
                <div className="help-empty-state">Selecciona una norma para ver sus detalles.</div>
              )}
            </section>

            <section className="normas-panel">
              <div className="help-panel-head">
                <div>
                  <h3>Uso rápido</h3>
                  <p>Ideas para navegar la biblioteca</p>
                </div>
              </div>

              <ul className="help-tips-list">
                <li>
                  <span>1</span>
                  <p>Usa los filtros para separar concreto, acero y guías técnicas.</p>
                </li>
                <li>
                  <span>2</span>
                  <p>Selecciona un documento y revisa su archivo fuente.</p>
                </li>
                <li>
                  <span>3</span>
                  <p>Más adelante podremos enlazar cada tarjeta al PDF correspondiente.</p>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}

// ─── MOBILE HISTORIAL ─────────────────────────────────────────
function MobileHistorial({ onBack }) {
  const [filtroModulo, setFiltroModulo] = useState("Todos");
  const [filtroTexto, setFiltroTexto] = useState("");

  const historialCompleto = [
    {
      id: 1,
      fecha: "Hoy 10:32",
      modulo: "Cómputos",
      descripcion: "Columna 0.30×0.30 m — ×12",
      proyecto: "Edif. Residencial",
      resultado: "3.24 m³",
      moduloKey: "computos",
      badgeBg: "#E8F8EF",
      badgeColor: "#166534",
      icon: "ruler",
    },
    {
      id: 2,
      fecha: "Ayer 16:15",
      modulo: "Concreto",
      descripcion: "Dosificación f'c 210 — 3 m³",
      proyecto: "Edif. Residencial",
      resultado: "21 sacos",
      moduloKey: "concreto",
      badgeBg: "#FEF3E8",
      badgeColor: "#9A3412",
      icon: "building",
    },
    {
      id: 3,
      fecha: "Ayer 14:08",
      modulo: "Estimación",
      descripcion: "Pintura interior — 120 m²",
      proyecto: "Edif. Residencial",
      resultado: "8 galones",
      moduloKey: "estimacion",
      badgeBg: "#EFF4FF",
      badgeColor: "#1D4ED8",
      icon: "calculator",
    },
    {
      id: 4,
      fecha: "Hace 3 días",
      modulo: "Cómputos",
      descripcion: "Viga 0.25×0.50 m — ×8",
      proyecto: "C. Comercial",
      resultado: "8.0 m³",
      moduloKey: "computos",
      badgeBg: "#E8F8EF",
      badgeColor: "#166534",
      icon: "ruler",
    },
    {
      id: 5,
      fecha: "Hace 5 días",
      modulo: "Concreto",
      descripcion: "Dosificación f'c 180 — 5 m³",
      proyecto: "Colegio Municipal",
      resultado: "30 sacos",
      moduloKey: "concreto",
      badgeBg: "#FEF3E8",
      badgeColor: "#9A3412",
      icon: "building",
    },
    {
      id: 6,
      fecha: "Hace 1 sem",
      modulo: "Estimación",
      descripcion: "Cerámica piso — 85 m²",
      proyecto: "Vivienda Bogotá",
      resultado: "93.5 m²",
      moduloKey: "estimacion",
      badgeBg: "#EFF4FF",
      badgeColor: "#1D4ED8",
      icon: "calculator",
    },
  ];

  const historialFiltrado = historialCompleto.filter((item) => {
    const cumpleFiltroModulo =
      filtroModulo === "Todos" || item.modulo === filtroModulo;
    const cumpleTexto =
      filtroTexto === "" ||
      item.descripcion.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      item.proyecto.toLowerCase().includes(filtroTexto.toLowerCase());
    return cumpleFiltroModulo && cumpleTexto;
  });

  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>

        <h2>Historial</h2>
      </header>

      <div className="mobile-page">
        <div className="mobile-historial">
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>Buscar</h3>
        <div className="search-box" style={{ marginBottom: "0.75rem" }}>
          <Icon name="search" size={13} />
          <input
            type="text"
            placeholder="Búsqueda..."
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
          />
        </div>
        <div className="filter-chips-mobile">
          {["Todos", "Cómputos", "Concreto", "Biblioteca", "Estimación"].map(
            (chip) => (
              <button
                key={chip}
                className={`filter-chip-mobile ${filtroModulo === chip ? "active" : ""}`}
                onClick={() => setFiltroModulo(chip)}
              >
                {chip}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="mobile-historial-list">
        {historialFiltrado.length > 0 ? (
          historialFiltrado.map((item) => (
            <div key={item.id} className="mobile-historial-item">
              <div className="mobile-historial-header">
                <span className="mobile-historial-fecha">{item.fecha}</span>
                <span
                  className="mobile-historial-badge"
                  style={{
                    background: item.badgeBg,
                    color: item.badgeColor,
                  }}
                >
                  {item.modulo}
                </span>
              </div>
              <div className="mobile-historial-desc">{item.descripcion}</div>
              <div className="mobile-historial-proyecto">{item.proyecto}</div>
              <div className="mobile-historial-result">{item.resultado}</div>
              <div className="mobile-historial-actions">
                <button className="mobile-action-small" title="Ver">
                  <Icon name="eye" size={13} />
                </button>
                <button className="mobile-action-small" title="Copiar">
                  <Icon name="copy" size={13} />
                </button>
                <button className="mobile-action-small" title="Descargar">
                  <Icon name="download" size={13} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              color: "var(--text-muted)",
            }}
          >
            No hay cálculos que coincidan
          </div>
        )}
      </div>
        </div>
      </div>
    </>
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
                {m.icon}
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

function ModuloReportes() {
  const exportsList = [
    {
      name: "Columna 0.30x0.30.pdf",
      date: "Hoy",
      size: "320 KB",
    },

    {
      name: "Dosificacion_fc210.xlsx",
      date: "Ayer",
      size: "180 KB",
    },

    {
      name: "Vivienda_Bogota.pdf",
      date: "Hace 3 días",
      size: "1.2 MB",
    },
  ];

  return (
    <div className="reports-page">
      <div className="reports-title">
        <h1>
          Reportes <span>Generados</span>
        </h1>

        <p>Documentos exportados y generación de informes.</p>
      </div>

      <div className="reports-stats">
        <div className="report-stat-card">
          <h4>Exportaciones</h4>

          <strong>42</strong>
        </div>

        <div className="report-stat-card">
          <h4>PDF</h4>

          <strong>28</strong>
        </div>

        <div className="report-stat-card">
          <h4>Excel</h4>

          <strong>14</strong>
        </div>

        <div className="report-stat-card">
          <h4>Proyectos</h4>

          <strong>12</strong>
        </div>
      </div>

      <div className="report-main-grid">
        <div className="report-card">
          <h3>Exportaciones recientes</h3>

          {exportsList.map((item, index) => (
            <div key={index} className="report-file-item">
              <div>
                <strong>{item.name}</strong>

                <small>{item.date}</small>
              </div>

              <span>{item.size}</span>
            </div>
          ))}
        </div>

        <div className="report-card">
          <h3>Generar reporte</h3>

          <button className="report-btn">Proyecto completo</button>

          <button className="report-btn">Historial mensual</button>

          <button className="report-btn">Dosificaciones</button>

          <button className="report-btn">Cómputos métricos</button>

          <button className="report-btn">Biblioteca</button>
        </div>
      </div>

      <button className="report-export-general">
        Exportar reporte general
      </button>
    </div>
  );
}

// ─── MOBILE MÓDULO ────────────────────────────────────────────
function MobileModulo({ onBack, darkMode, setDarkMode, moduloKey }) {
  const modulo =
    MODULES.find((m) => m.key === moduloKey) ||
    (moduloKey === "normas" ? NORMAS_MODULE_PREVIEW : MODULES[0]);

  const TITULOS_EXTRA = {
    proyectos: "Proyectos",
    historial: "Historial",
    reportes: "Reportes",
    normas: "Normas COVENIN ",
  };
  const tituloHeader = TITULOS_EXTRA[moduloKey] || modulo.label;

  const headerJsx = (
    <header className="mobile-module-topbar">
      <button className="mobile-back-btn" onClick={onBack}>
        <Icon name="back" size={22} />
      </button>
      <h2>{tituloHeader}</h2>
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
  );

  // Render específico por módulo en móvil
  if (moduloKey === "computos") {
    // Mismo UI móvil para Cómputos (implementación existente)
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
        {headerJsx}
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
              <div className="val val-secondary">
                {volUnitario.toFixed(2)} m³
              </div>
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

  // Reusar los módulos existentes para móvil: concreto, biblioteca, estimación
  if (moduloKey === "concreto") {
    return (
      <>
        {headerJsx}
        <div className="mobile-page">
          <ModuloConcreto />
        </div>
      </>
    );
  }

  if (moduloKey === "biblioteca") {
    return (
      <>
        {headerJsx}
        <div className="mobile-page">
          <ModuloBiblioteca />
        </div>
      </>
    );
  }

  if (moduloKey === "proyectos") {
    return (
      <>
        {headerJsx}
        <div className="mobile-page">
          <ModuloProyectos />
        </div>
      </>
    );
  }

  if (moduloKey === "historial" || moduloKey === "reportes") {
    return <MobileHistorial onBack={onBack} />;
  }

  if (moduloKey === "estimacion") {
    return (
      <>
        {headerJsx}
        <div className="mobile-page">
          <ModuloEstimacion />
        </div>
      </>
    );
  }

  // Fallback para módulos no implementados
  return (
    <>
      {headerJsx}
      <div className="mobile-page">
        <ModuloPendiente modulo={modulo} />
      </div>
    </>
  );
}

function MobileReportes({ onBack }) {
  const reportes = [
    {
      nombre: "Concreto Vivienda A",
      fecha: "Hace 2 horas",
      tipo: "PDF",
    },
    {
      nombre: "Cómputos Torre Norte",
      fecha: "Ayer",
      tipo: "Excel",
    },
    {
      nombre: "Estimación Materiales",
      fecha: "Hace 3 días",
      tipo: "PDF",
    },
  ];

  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>

        <h2>Reportes</h2>
      </header>

      <div className="mobile-page">
        <div className="mobile-reportes-banner">
          <h3>Centro de Reportes</h3>

          <p>Genera, consulta y exporta resultados de tus proyectos.</p>
        </div>

        <div className="mobile-reportes-stats">
          <div className="report-stat-card">
            <strong>24</strong>

            <span>PDF</span>
          </div>

          <div className="report-stat-card">
            <strong>13</strong>

            <span>Excel</span>
          </div>

          <div className="report-stat-card">
            <strong>37</strong>

            <span>Total</span>
          </div>
        </div>

        <div className="mobile-section-label">Acciones rápidas</div>

        <div className="mobile-report-actions">
          <button className="report-btn">
            <Icon name="file" size={18} />
            Generar PDF
          </button>

          <button className="report-btn">
            <Icon name="table" size={18} />
            Exportar Excel
          </button>

          <button className="report-btn">
            <Icon name="share" size={18} />
            Compartir
          </button>
        </div>

        <div className="mobile-section-label">Reportes recientes</div>

        <div className="mobile-report-list">
          {reportes.map((r, i) => (
            <div key={i} className="mobile-report-card">
              <div>
                <strong>{r.nombre}</strong>

                <small>{r.fecha}</small>
              </div>

              <span>{r.tipo}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MobileConfiguracion({
  onBack,
  settings,
  onSettingsChange,
  onResetAllData,
  storageUsage,
  darkMode,
}) {
  const updateSetting = (key, value) => {
    onSettingsChange((prev) => ({ ...prev, [key]: value }));
  };

  const themeLabel =
    THEME_OPTIONS.find((option) => option.value === settings.themeMode)?.label ||
    "Sistema";

  const fontLabel =
    FONT_OPTIONS.find((option) => option.value === settings.fontSize)?.label ||
    "Normal";

  const languageLabel =
    LANGUAGE_OPTIONS.find((option) => option.value === settings.language)?.label ||
    "Español";

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

// ─── ROOT APP ─────────────────────────────────────────────────
export default function App() {
  const [activeModule, setActiveModule] = useState("inicio");

  const [mobileView, setMobileView] = useState("home");

  const [settings, setSettings] = useState(() => readStoredSettings());

  const [prefersDark, setPrefersDark] = useState(() => getSystemTheme());

  const darkMode = resolveDarkMode(settings.themeMode, prefersDark);

  const setDarkMode = (nextDark) => {
    setSettings((prev) => ({
      ...prev,
      themeMode: nextDark ? "dark" : "light",
    }));
  };

  const [user, setUser] = useState(() => {
    const storedUser = readJSON(USER_KEY, null);

    return storedUser || {
      isLoggedIn: false,
      name: null,
      role: "Invitado",
    };
  });

  const [dashboardData, setDashboardData] = useState(EMPTY_DASHBOARD);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(SYSTEM_THEME_QUERY);
    if (!mediaQuery) return undefined;

    const handleChange = (event) => {
      setPrefersDark(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings]);

  useEffect(() => {
    try {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch {}
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
      document.documentElement.style.setProperty(
        "--app-scale",
        String(FONT_SCALES[settings.fontSize] || 1),
      );
      document.documentElement.lang = settings.language || "es";
    } catch {}
  }, [darkMode, settings.fontSize, settings.language]);

  const isMobile = window.innerWidth <= 768;

  const handleSettingsChange = (updater) => {
    setSettings((prev) =>
      typeof updater === "function" ? updater(prev) : { ...prev, ...updater },
    );
  };

  const handleResetAllData = () => {
    try {
      localStorage.removeItem(SETTINGS_KEY);
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(THEME_KEY);
    } catch {}

    setSettings(DEFAULT_SETTINGS);
    setUser({
      isLoggedIn: false,
      name: null,
      role: "Invitado",
    });
    setDashboardData(EMPTY_DASHBOARD);
    setActiveModule("inicio");
    setMobileView("home");
  };

  const handleNavigate = (key) => {
    setActiveModule(key);

    if (isMobile) {
      if (key === "inicio") {
        setMobileView("home");
      } else {
        setMobileView("modulo");
      }
    }
  };

  const pageTitle = () => {
    if (activeModule === "inicio") return "Inicio";
    if (activeModule === "configuracion") return "Configuración";
    if (activeModule === "ayuda") return "Ayuda";
    if (activeModule === "normas") return "Normas COVENIN ";

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
          dashboardData={dashboardData}
        />
      );

    if (activeModule === "proyectos") return <ModuloProyectos />;

    if (activeModule === "historial") return <ModuloHistorial />;

    if (activeModule === "reportes") return <ModuloReportes />;

    if (activeModule === "configuracion")
      return (
        <ModuloConfiguracion
          settings={settings}
          onSettingsChange={handleSettingsChange}
          onResetAllData={handleResetAllData}
          storageUsage={getLocalStorageUsage()}
          darkMode={darkMode}
        />
      );

    if (activeModule === "ayuda") return <ModuloAyuda />;

    if (activeModule === "computos") return <ModuloComputos />;

    if (activeModule === "concreto") return <ModuloConcreto />;

    if (activeModule === "biblioteca") return <ModuloBiblioteca />;

    if (activeModule === "estimacion") return <ModuloEstimacion />;

    if (activeModule === "normas")
      return <ModuloPendiente modulo={NORMAS_MODULE_PREVIEW} />;

    const m = MODULES.find((mod) => mod.key === activeModule);

    if (m) return <ModuloPendiente modulo={m} />;

    return (
      <DesktopHome
        onNavigate={handleNavigate}
        dashboardData={dashboardData}
      />
    );
  };

  const renderMobilePage = () => {
    if (mobileView === "home") {
      return (
        <MobileHome
          onNavigate={handleNavigate}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          dashboardData={dashboardData}
        />
      );
    }

    if (activeModule === "ayuda") {
      return <ModuloAyuda mobile onBack={() => setMobileView("home")} />;
    }

    if (activeModule === "reportes") {
      return <MobileReportes onBack={() => setMobileView("home")} />;
    }

    if (activeModule === "historial") {
      return <MobileHistorial onBack={() => setMobileView("home")} />;
    }

    if (activeModule === "configuracion") {
      return (
        <MobileConfiguracion
          onBack={() => setMobileView("home")}
          settings={settings}
          onSettingsChange={handleSettingsChange}
          onResetAllData={handleResetAllData}
          storageUsage={getLocalStorageUsage()}
          darkMode={darkMode}
        />
      );
    }

    return (
      <MobileModulo
        onBack={() => setMobileView("home")}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        moduloKey={activeModule}
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
        />

        <div className="main-content">
          <Topbar
            title={pageTitle()}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            showOnline={activeModule === "inicio"}
            activeModule={activeModule}
            onOpenMenu={() => {}}
          />

          {renderDesktopPage()}
        </div>
      </div>

      {/* MOBILE */}

      <div
        className="mobile-only"
        style={{
          minHeight: "100vh",

          background: "var(--bg)",
        }}
      >
        {renderMobilePage()}
      </div>
    </div>
  );
}
