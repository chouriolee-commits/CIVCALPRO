// ─── ICONS ───────────────────────────────────────────────────
// Data pura: cada ícono es un array de tuplas [tagSVG, props].
// El componente que consume esto (components/common/Icon.jsx) arma
// <svg>{tuplas.map(([tag, props]) => createElement(tag, props))}</svg>.
// No puede haber JSX aquí porque Vite solo transforma JSX en .jsx/.tsx.
export const ICON_PATHS = {
  home: [
    ["path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }],
  ],
  folder: [
    ["rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M2 7l4-4h6l2 2h8", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  clock: [
    ["circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M12 7v5l3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  chart: [
    ["rect", { x: "3", y: "12", width: "4", height: "8", rx: "1", fill: "currentColor" }],
    ["rect", { x: "10", y: "7", width: "4", height: "13", rx: "1", fill: "currentColor" }],
    ["rect", { x: "17", y: "3", width: "4", height: "17", rx: "1", fill: "currentColor" }],
  ],
  settings: [
    ["circle", { cx: "12", cy: "12", r: "3", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  palette: [
    ["path", { d: "M12 3a9 9 0 100 18h1.5a1.5 1.5 0 010 3H12a12 12 0 110-24c6.63 0 12 5.37 12 12 0 2.76-1.24 5.22-3.18 6.89A3.5 3.5 0 0121 18.5a3.5 3.5 0 01-3.5-3.5V13a10 10 0 00-5.5-10z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["circle", { cx: "7.5", cy: "9", r: "1", fill: "currentColor" }],
    ["circle", { cx: "6", cy: "14", r: "1", fill: "currentColor" }],
    ["circle", { cx: "10", cy: "17", r: "1", fill: "currentColor" }],
    ["circle", { cx: "15", cy: "17", r: "1", fill: "currentColor" }],
  ],
  text: [
    ["path", { d: "M4 5h16M9 19h6M12 5v14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  globe: [
    ["circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["ellipse", { cx: "12", cy: "12", rx: "4", ry: "9", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }],
  ],
  database: [
    ["ellipse", { cx: "12", cy: "5", rx: "8", ry: "3", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  monitor: [
    ["rect", { x: "3", y: "4", width: "18", height: "13", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M8 21h8M12 17v4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  moon: [
    ["path", { d: "M21 12.8A9 9 0 1111.2 3 7.5 7.5 0 0021 12.8z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  sun: [
    ["circle", { cx: "12", cy: "12", r: "4", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  trash2: [
    ["path", { d: "M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2m-8 0l1 14a2 2 0 002 2h2a2 2 0 002-2l1-14", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M10 11v6M14 11v6", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  info: [
    ["circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M12 10v6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["circle", { cx: "12", cy: "7.5", r: "1", fill: "currentColor" }],
  ],
  check_circle: [
    ["circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M8 12.5l2.8 2.8L16.5 9", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }],
  ],
  help: [
    ["circle", { cx: "12", cy: "12", r: "9", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["circle", { cx: "12", cy: "17", r: "1", fill: "currentColor" }],
  ],
  chat: [
    ["path", { d: "M20 14a4 4 0 01-4 4H9l-5 3v-3a4 4 0 01-2-3.46V7a4 4 0 014-4h10a4 4 0 014 4v7z", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }],
    ["circle", { cx: "9", cy: "10", r: "1", fill: "currentColor" }],
    ["circle", { cx: "12", cy: "10", r: "1", fill: "currentColor" }],
    ["circle", { cx: "15", cy: "10", r: "1", fill: "currentColor" }],
  ],
  mail: [
    ["rect", { x: "3", y: "5", width: "18", height: "14", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M3 7l9 6 9-6", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }],
  ],
  phone: [
    ["path", { d: "M7.5 3.5h3a1.5 1.5 0 011.5 1.5v2.2a1.5 1.5 0 01-.88 1.36l-1.2.55a14.5 14.5 0 006.3 6.3l.55-1.2A1.5 1.5 0 0118.14 13H20a1.5 1.5 0 011.5 1.5v3a2 2 0 01-2 2C11.94 19.5 4.5 12.06 4.5 2.5a2 2 0 012-2h1z", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }],
  ],
  lock: [
    ["rect", { x: "5", y: "11", width: "14", height: "10", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M8 11V8a4 4 0 018 0v3", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  bell: [
    ["path", { d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  menu: [
    ["line", { x1: "3", y1: "6", x2: "21", y2: "6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["line", { x1: "3", y1: "12", x2: "21", y2: "12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["line", { x1: "3", y1: "18", x2: "21", y2: "18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  chevron: [
    ["path", { d: "M9 18l6-6-6-6", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }],
  ],
  back: [
    ["path", { d: "M15 18l-6-6 6-6", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }],
  ],
  save: [
    ["path", { d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["polyline", { points: "17 21 17 13 7 13 7 21", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["polyline", { points: "7 3 7 8 15 8", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  trash: [
    ["polyline", { points: "3 6 5 6 21 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M10 11v6M14 11v6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  plus: [
    ["line", { x1: "12", y1: "5", x2: "12", y2: "19", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }],
    ["line", { x1: "5", y1: "12", x2: "19", y2: "12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }],
  ],
  calc: [
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["line", { x1: "8", y1: "6", x2: "16", y2: "6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["circle", { cx: "8", cy: "11", r: "1", fill: "currentColor" }],
    ["circle", { cx: "12", cy: "11", r: "1", fill: "currentColor" }],
    ["circle", { cx: "16", cy: "11", r: "1", fill: "currentColor" }],
    ["circle", { cx: "8", cy: "15", r: "1", fill: "currentColor" }],
    ["circle", { cx: "12", cy: "15", r: "1", fill: "currentColor" }],
    ["circle", { cx: "16", cy: "15", r: "1", fill: "currentColor" }],
    ["circle", { cx: "8", cy: "19", r: "1", fill: "currentColor" }],
    ["circle", { cx: "12", cy: "19", r: "1", fill: "currentColor" }],
  ],
  user: [
    ["path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["circle", { cx: "12", cy: "7", r: "4", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  arrow_r: [
    ["path", { d: "M5 12h14M12 5l7 7-7 7", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }],
  ],
  wifi: [
    ["path", { d: "M5 12.55a11 11 0 0114.08 0", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M1.42 9a16 16 0 0121.16 0", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M8.53 16.11a6 6 0 016.95 0", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["circle", { cx: "12", cy: "20", r: "1", fill: "currentColor" }],
  ],
  export: [
    ["path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["polyline", { points: "17 8 12 3 7 8", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["line", { x1: "12", y1: "3", x2: "12", y2: "15", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  file: [
    ["path", { d: "M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["polyline", { points: "14 2 14 8 20 8", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  table: [
    ["rect", { x: "3", y: "4", width: "18", height: "16", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M3 10h18M3 16h18M9 4v16M15 4v16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  share: [
    ["circle", { cx: "18", cy: "5", r: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["circle", { cx: "6", cy: "12", r: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["circle", { cx: "18", cy: "19", r: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M8 11l8-4M8 13l8 4", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  check: [
    ["path", { d: "M5 13l4 4L19 7", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }],
  ],
  filter: [
    ["path", { d: "M4 5h16l-6 7v5l-4 2v-7L4 5z", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }],
  ],
  "sort-ascending": [
    ["path", { d: "M7 17V5M7 5l-3 3M7 5l3 3", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }],
    ["path", { d: "M13 6h6M13 12h4M13 18h2", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  refresh: [
    ["polyline", { points: "23 4 23 10 17 10", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M20.49 15a9 9 0 11-2.12-9.36L23 10", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  bulb: [
    ["path", { d: "M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  book: [
    ["path", { d: "M4 19.5A2.5 2.5 0 016.5 17H20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  device: [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["circle", { cx: "12", cy: "17", r: "1", fill: "currentColor" }],
  ],
  search: [
    ["circle", { cx: "11", cy: "11", r: "8", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M21 21l-4.35-4.35", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  eye: [
    ["path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["circle", { cx: "12", cy: "12", r: "3", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  copy: [
    ["rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  download: [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["polyline", { points: "7 10 12 15 17 10", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
    ["line", { x1: "12", y1: "15", x2: "12", y2: "3", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
  ],
  ruler: [
    ["path", { d: "M3 21h18M3 7h1M5 7h1M7 7h1M9 7h1M11 7h1M13 7h1M15 7h1M17 7h1M19 7h1M21 7h1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["rect", { x: "3", y: "3", width: "18", height: "4", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "2" }],
  ],
  building: [
    ["path", { d: "M4 20V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }],
    ["rect", { x: "6", y: "9", width: "3", height: "3", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }],
    ["rect", { x: "15", y: "9", width: "3", height: "3", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }],
    ["rect", { x: "6", y: "13", width: "3", height: "3", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }],
    ["rect", { x: "15", y: "13", width: "3", height: "3", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }],
    ["line", { x1: "4", y1: "20", x2: "20", y2: "20", stroke: "currentColor", strokeWidth: "2" }],
  ],
};
