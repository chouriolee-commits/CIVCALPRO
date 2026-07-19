/* ════════════════════════════════════════════════════════════════
   APP.JS — Navegación, render e interactividad de la base de
   conocimiento de CivCalPro. Sin dependencias externas: DOM puro.
═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const DOCS = window.CIVCALPRO_DOCS;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ─── Árbol de archivos real (estructura de carpetas) ────────── */
  const FILE_TREE = {
    "src": {
      "main.jsx": "src/main.jsx",
      "App.jsx": "src/App.jsx",
      "index.css": null,
      "components": {
        "Sidebar.jsx": null, "Topbar.jsx": null, "DesktopHome.jsx": null,
        "MobileHome.jsx": null, "MobileModuloRouter.jsx": null, "ThemeToggleButton.jsx": null,
        "common": { "Icon.jsx": null, "ModuloPendiente.jsx": null, "SegmentedControl.jsx": null, "SettingsCard.jsx": null, "SettingsRow.jsx": null, "SettingsToggle.jsx": null },
      },
      "hooks": {
        "useProyecto.js": "src/hooks/useProyecto.js",
        "useTheme.js": "src/hooks/useTheme.js",
        "useSync.js": "src/hooks/useSync.js",
        "useUser.js": "src/hooks/useUser.js",
        "useSettings.js": "src/hooks/useSettings.js",
      },
      "data": { "constants.js": "src/data/constants.js", "icons.js": null, "materiales.json (vacío)": null, "rendimientos.json (vacío)": null, "actividades_estimation.json (vacío)": null, "covenin.json (vacío)": null, "dosificacion.json (vacío)": null },
      "utils": { "format.js": null, "storage.js": null, "exportar.js (vacío)": null },
      "modulos": {
        "computos": {
          "index.jsx": "src/modulos/computos/index.jsx",
          "computos.data.js": "src/modulos/computos/computos.data.js",
          "computosReducer.js": "src/modulos/computos/computosReducer.js",
          "useComputos.js": "src/modulos/computos/useComputos.js",
          "validaciones.js": "src/modulos/computos/validaciones.js",
          "pasos": {
            "StepperComputos.jsx": "src/modulos/computos/pasos/StepperComputos.jsx",
            "Paso1Elemento.jsx": null, "Paso2Dimensiones.jsx": null, "SelectorAcero.jsx": null,
            "Paso3Resultados.jsx": "src/modulos/computos/pasos/Paso3Resultados.jsx",
            "Paso4Guardar.jsx": null,
          },
          "utils": {
            "calcularConcreto.js": "src/modulos/computos/utils/calcularConcreto.js",
            "calcularAcero.js": "src/modulos/computos/utils/calcularAcero.js",
            "calcularEncofrado.js": "src/modulos/computos/utils/calcularEncofrado.js",
            "calcularResultadosColumna.js": "src/modulos/computos/utils/calcularResultadosColumna.js",
            "pesoAcero.data.js": "src/modulos/computos/utils/pesoAcero.data.js",
          },
        },
        "concreto": { "index.jsx": null, "useConcreto.js": null, "concreto.data.js": null },
        "biblioteca": { "index.jsx": null, "useBiblioteca.js": null, "biblioteca.data.js": null },
        "estimacion": { "index.jsx": null, "useEstimacion.js": null, "estimacion.data.js": null },
        "proyectos": { "index.jsx": null, "proyectos.data.js": null },
        "historial": { "index.jsx": null, "MobileHistorial.jsx": null, "historial.data.js": null },
        "reportes": { "index.jsx": null, "MobileReportes.jsx": null, "reportes.data.js": null },
        "configuracion": { "index.jsx": null, "MobileConfiguracion.jsx": null, "useConfiguracion.js": null, "configuracion.data.js": null },
        "ayuda": { "index.jsx": null, "useAyuda.js": null, "ayuda.data.js": null },
        "normas": { "index.jsx": null, "useNormas.js": null, "normas.data.js": null },
      },
      "styles": {
        "variables.css": null, "globals.css": null, "layout.css": null, "utilities.css": null,
        "components": { "buttons.css": null, "forms.css": null, "badges.css": null, "cards.css": null, "tables.css": null, "navigation.css": null, "drawers.css": null, "animations.css": null },
        "modules": { "dashboards.css": null, "proyectos.css": null, "computos.css": null, "concreto.css": null, "biblioteca.css": null, "estimacion.css": null, "historial.css": null, "reportes.css": null, "configuracion.css": null, "ayuda.css": null, "normas.css": null },
      },
    },
  };

  /* ─── Rutas de navegación (sidebar) ──────────────────────────── */
  const ROUTES = [
    { key: "inicio", label: "Inicio", icon: "🏠" },
    { key: "arquitectura", label: "Arquitectura", icon: "🏗️" },
    { key: "tecnologias", label: "Tecnologías", icon: "⚙️" },
    { key: "modulos", label: "Módulos", icon: "🧩" },
    { key: "archivos", label: "Explorador de archivos", icon: "📁" },
    { key: "estilos", label: "Sistema de estilos", icon: "🎨" },
    { key: "flujo", label: "Flujo de ejecución", icon: "🔀" },
    { key: "ruta", label: "Ruta de aprendizaje", icon: "🎓" },
  ];

  /* ─── Estado de progreso (localStorage) ──────────────────────── */
  const PROGRESS_KEY = "civcalpro_docs_progress";
  function getProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch { return {}; }
  }
  function setProgress(etapa, done) {
    const p = getProgress();
    p[etapa] = done;
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch {}
  }

  /* ─── Tema ────────────────────────────────────────────────────── */
  const THEME_KEY = "civcalpro_docs_theme";
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $("#themeIcon").textContent = theme === "dark" ? "☀️" : "🌙";
    $("#themeLabel").textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }
  function initTheme() {
    let theme = "light";
    try { theme = localStorage.getItem(THEME_KEY); } catch {}
    if (!theme) theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(theme);
  }
  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* ─── Resaltado de sintaxis mínimo (sin librerías) ───────────── */
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function highlight(code, lang) {
    let html = escapeHtml(code);
    // comentarios de línea
    html = html.replace(/(\/\/.*$)/gm, '<span class="tok-com">$1</span>');
    // strings (simple, no perfecto pero suficiente para lectura)
    html = html.replace(/(&quot;.*?&quot;|'[^']*'|`[^`]*`)/g, '<span class="tok-str">$1</span>');
    // palabras clave
    const kws = ["import","export","from","const","let","var","function","return","if","else","for","while","switch","case","default","class","extends","new","typeof","instanceof","true","false","null","undefined","try","catch","finally","throw","async","await","of","in","break","continue"];
    html = html.replace(new RegExp("\\b(" + kws.join("|") + ")\\b", "g"), '<span class="tok-kw">$1</span>');
    // números
    html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="tok-num">$1</span>');
    return html;
  }

  let copyBtnCounter = 0;
  function codeBlock(code, lang, filename) {
    const id = "code-" + (++copyBtnCounter);
    return `
      <div class="kb-code-block">
        <div class="kb-code-block-header">
          <span>${filename ? escapeHtml(filename) : (lang || "").toUpperCase()}</span>
          <button class="kb-copy-btn" data-copy-target="${id}">Copiar</button>
        </div>
        <pre><code id="${id}" data-raw="${encodeURIComponent(code)}">${highlight(code, lang)}</code></pre>
      </div>`;
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".kb-copy-btn");
    if (!btn) return;
    const target = document.getElementById(btn.dataset.copyTarget);
    const raw = decodeURIComponent(target.dataset.raw);
    navigator.clipboard?.writeText(raw).then(() => {
      const original = btn.textContent;
      btn.textContent = "¡Copiado!";
      setTimeout(() => { btn.textContent = original; }, 1400);
    }).catch(() => {});
  });

  /* ─── Bloque de explicación por líneas ───────────────────────── */
  function bloquesHtml(bloques) {
    if (!bloques || !bloques.length) return "";
    return bloques.map(b => `
      <div class="kb-explain">
        <div class="kb-explain-title">${escapeHtml(b.titulo)} ${b.lineas ? `<span class="kb-explain-lines">líneas ${escapeHtml(b.lineas)}</span>` : ""}</div>
        <p>${escapeHtml(b.texto)}</p>
      </div>`).join("");
  }

  function archivoDetailHtml(path) {
    const a = DOCS.archivos[path];
    if (!a) {
      return `<div class="kb-file-empty">No hay documentación detallada para este archivo todavía (o está vacío en el repositorio real).</div>`;
    }
    let html = `<div class="kb-file-path">${escapeHtml(path)}</div>`;
    if (a.nombreReal) {
      html += `<div class="kb-callout warn"><strong>⚠️ El nombre del archivo no coincide con lo que exporta</strong>${escapeHtml(a.advertencia || "")}</div>`;
    }
    html += `<p>${escapeHtml(a.responsabilidad || "")}</p>`;
    if (a.code) html += codeBlock(a.code, a.lang, path);
    if (a.codeNota) html += `<div class="kb-callout">${escapeHtml(a.codeNota)}</div>`;
    if (a.bloques) html += `<h3>Explicación por bloques</h3>` + bloquesHtml(a.bloques);
    if (a.siguienteConcepto) html += `<div class="kb-callout"><strong>Siguiente paso sugerido</strong>${escapeHtml(a.siguienteConcepto)}</div>`;
    return html;
  }

  /* ═══════════════════════════════════════════════════════════
     RENDER DE CADA PÁGINA
  ═══════════════════════════════════════════════════════════ */

  function renderInicio() {
    return `
      <div class="kb-breadcrumb"><span>CivCalPro Docs</span></div>
      <h1 class="kb-page-title">Bienvenido a la base de conocimiento de CivCalPro</h1>
      <p class="kb-page-sub">Esta documentación explica, con el código real del repositorio, cómo funciona cada tecnología, cómo se conectan las capas y cómo fluyen los datos desde que el usuario hace clic hasta que ve un resultado.</p>

      <div class="kb-callout">
        <strong>¿Qué es CivCalPro?</strong>
        Una aplicación web (React + Vite) para cálculos de construcción: cómputos métricos, dosificación de concreto, biblioteca de materiales de referencia y estimación de materiales por actividad. No usa librería de routing ni gestor de estado externo — toda la navegación y el estado se manejan con herramientas nativas de React (useState, useReducer, hooks personalizados).
      </div>

      <h3>Explora por tema</h3>
      <div class="kb-grid">
        <div class="kb-card" data-nav="tecnologias"><div class="kb-card-icon">⚛️</div><h4>Tecnologías</h4><p>React, JavaScript, Vite, CSS y npm explicados desde cero, con ejemplos del propio código.</p></div>
        <div class="kb-card" data-nav="arquitectura"><div class="kb-card-icon">🏗️</div><h4>Arquitectura</h4><p>Cómo se organiza el código en capas: UI, estado, lógica de negocio y datos.</p></div>
        <div class="kb-card" data-nav="modulos"><div class="kb-card-icon">🧩</div><h4>Módulos</h4><p>Cómo funciona cada módulo de negocio: propósito, estado, componentes y datos.</p></div>
        <div class="kb-card" data-nav="archivos"><div class="kb-card-icon">📁</div><h4>Código</h4><p>Explora el árbol de archivos real y lee el código fuente completo con explicaciones.</p></div>
        <div class="kb-card" data-nav="flujo"><div class="kb-card-icon">🔀</div><h4>Flujo de datos</h4><p>Sigue una acción real, desde el clic del usuario hasta el nuevo render.</p></div>
        <div class="kb-card" data-nav="ruta"><div class="kb-card-icon">🎓</div><h4>Aprendizaje</h4><p>Ruta progresiva de 12 etapas, con ejercicios y preguntas para cada una.</p></div>
      </div>

      <h3>Módulos principales del código</h3>
      <div class="kb-grid cols-2">
        ${Object.entries(DOCS.modulos).filter(([,m]) => ["computos","concreto","biblioteca","estimacion"].includes(Object.keys(DOCS.modulos).find(k=>DOCS.modulos[k]===m))).map(() => "").join("")}
        ${["computos","concreto","biblioteca","estimacion"].map(key => {
          const m = DOCS.modulos[key];
          return `<div class="kb-card" data-nav="modulos" data-sub="${key}">
            <span class="kb-tag ${m.color}">${escapeHtml(m.color)}</span>
            <h4 style="margin-top:8px">${escapeHtml(m.nombre)}</h4><p>${escapeHtml(m.proposito)}</p>
          </div>`;
        }).join("")}
      </div>
    `;
  }

  function renderArquitectura() {
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Arquitectura</span></div>
      <h1 class="kb-page-title">Arquitectura de CivCalPro</h1>
      <p class="kb-page-sub">De arriba hacia abajo: el usuario interactúa con componentes React, que leen y modifican estado mediante hooks, que a veces delegan cálculos a funciones puras de lógica de negocio, que a veces leen datos estáticos o localStorage.</p>

      <div class="kb-diagram">
        <div class="kb-diagram-box"><strong>👤 Usuario</strong><small>hace clic, escribe, navega</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box hl"><strong>Interfaz (UI)</strong><small>Componentes React / JSX — Sidebar, ModuloComputos, Paso2Dimensiones...</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box hl"><strong>Estado y flujo</strong><small>useState / useReducer / hooks personalizados — useComputos, useTheme...</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box hl"><strong>Lógica de negocio</strong><small>utils/ — calcularConcreto, calcularAcero, calcularEncofrado</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box"><strong>Datos</strong><small>*.data.js (catálogos estáticos) + localStorage (computos_guardados, settings, user)</small></div>
      </div>

      <div class="kb-callout">
        <strong>No hay backend ni API real</strong>
        Toda la app corre en el navegador. "Datos" significa: catálogos hardcodeados en archivos *.data.js, y localStorage para lo poco que persiste entre sesiones (settings, usuario, tema, y los cómputos guardados del módulo Cómputos). No hay fetch, ni base de datos, ni servidor propio.
      </div>

      <h3>Evolución arquitectónica</h3>
      <p>El proyecto fue refactorizado deliberadamente para evitar que App.jsx concentrara toda la navegación, lógica y estilos.</p>
      <div class="kb-grid cols-2">
        <div class="kb-card" style="cursor:default">
          <h4>Antes</h4>
          <div class="kb-diagram" style="margin:10px 0">
            <div class="kb-diagram-box"><strong>App.jsx enorme</strong><small>navegación + lógica + UI + estados, todo junto</small></div>
          </div>
        </div>
        <div class="kb-card" style="cursor:default">
          <h4>Después (estado actual)</h4>
          <div class="kb-diagram" style="margin:10px 0">
            <div class="kb-diagram-box hl"><strong>App.jsx</strong><small>solo navegación principal (activeModule)</small></div>
            <span class="kb-diagram-arrow">↓</span>
            <div class="kb-diagram-box"><strong>modulos/&lt;nombre&gt;/</strong><small>index.jsx + hook propio + *.data.js (+ utils/ y pasos/ en Cómputos)</small></div>
          </div>
        </div>
      </div>

      <div class="kb-callout warn">
        <strong>Consistencia parcial</strong>
        Solo el módulo Cómputos Métricos tiene la arquitectura completa (useReducer + subcarpetas pasos/ y utils/). El resto de los módulos (Concreto, Biblioteca, Estimación...) siguen el patrón más simple: index.jsx + un hook con useState planos + un archivo de datos. Ninguno de los dos patrones es "incorrecto" — la complejidad de useReducer se justifica en Cómputos por tener 4 pasos con invalidación cruzada de resultados; los demás módulos son más simples y no lo necesitan.
      </div>
    `;
  }

  function renderTecnologias() {
    const keys = Object.keys(DOCS.tecnologias);
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Tecnologías</span></div>
      <h1 class="kb-page-title">Tecnologías usadas en CivCalPro</h1>
      <p class="kb-page-sub">Cada tecnología explicada desde cero, con ejemplos tomados directamente del código del repositorio — no genéricos.</p>
      <div class="kb-tabs" id="techTabs">
        ${keys.map((k, i) => `<button class="kb-tab ${i===0?"active":""}" data-tech="${k}">${escapeHtml(DOCS.tecnologias[k].titulo)}</button>`).join("")}
      </div>
      <div id="techContent"></div>
    `;
  }

  function renderTechContent(key) {
    const t = DOCS.tecnologias[key];
    $("#techContent").innerHTML = `
      <p>${escapeHtml(t.resumen)}</p>
      ${t.temas.map(tema => `
        <div class="kb-explain">
          <div class="kb-explain-title">${escapeHtml(tema.titulo)}</div>
          <p>${escapeHtml(tema.texto)}</p>
        </div>
      `).join("")}
    `;
  }

  function renderModulos() {
    const keys = Object.keys(DOCS.modulos);
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Módulos</span></div>
      <h1 class="kb-page-title">Módulos de negocio</h1>
      <p class="kb-page-sub">Cada módulo vive en su propia carpeta bajo src/modulos/. Haz clic para ver su propósito, estado, componentes, lógica y archivos involucrados.</p>
      <div class="kb-grid cols-2" id="moduloCards">
        ${keys.map(k => {
          const m = DOCS.modulos[k];
          return `<div class="kb-card" data-modulo="${k}">
            <span class="kb-tag ${m.color}">${m.esCasoDeEstudio ? "caso de estudio" : m.color}</span>
            <h4 style="margin-top:8px">${escapeHtml(m.nombre)}</h4>
            <p>${escapeHtml(m.proposito)}</p>
          </div>`;
        }).join("")}
      </div>
      <div id="moduloDetail"></div>
    `;
  }

  function renderModuloDetail(key) {
    const m = DOCS.modulos[key];
    const box = $("#moduloDetail");
    if (!m) { box.innerHTML = ""; return; }
    box.innerHTML = `
      <div class="kb-section" style="margin-top:24px">
        <h2>${escapeHtml(m.nombre)} ${m.esCasoDeEstudio ? '<span class="kb-tag green">caso de estudio principal</span>' : ""}</h2>
        <p><b>Propósito:</b> ${escapeHtml(m.proposito || "")}</p>
        ${m.entrada ? `<p><b>Entrada:</b> ${escapeHtml(m.entrada)}</p>` : ""}
        ${m.estado ? `<p><b>Estado:</b> ${escapeHtml(m.estado)}</p>` : ""}
        ${m.componentes ? `<p><b>Componentes:</b> ${m.componentes.map(escapeHtml).join(", ")}</p>` : ""}
        ${m.hooks ? `<p><b>Hooks:</b> ${m.hooks.map(escapeHtml).join(", ")}</p>` : ""}
        ${m.logica ? `<p><b>Lógica:</b> ${(Array.isArray(m.logica)?m.logica:[m.logica]).map(escapeHtml).join(", ")}</p>` : ""}
        ${m.datos ? `<p><b>Datos:</b> ${(Array.isArray(m.datos)?m.datos:[m.datos]).map(escapeHtml).join(", ")}</p>` : ""}
        ${m.salida ? `<p><b>Salida:</b> ${escapeHtml(m.salida)}</p>` : ""}
        ${m.flujoUsuario ? `<h3>Flujo de usuario</h3>` + m.flujoUsuario.map(f => `<div class="kb-explain"><p>${escapeHtml(f)}</p></div>`).join("") : ""}
        ${m.nota ? `<div class="kb-callout warn"><strong>Nota</strong>${escapeHtml(m.nota)}</div>` : ""}
        ${m.archivosInvolucrados ? `<h3>Archivos involucrados</h3><div class="kb-grid cols-2">` + m.archivosInvolucrados.map(f => `<div class="kb-card" data-nav="archivos" data-file="${escapeHtml(f)}" style="padding:10px 14px"><code style="font-size:12px">${escapeHtml(f)}</code></div>`).join("") + `</div>` : ""}
      </div>
    `;
  }

  /* ─── Explorador de archivos ──────────────────────────────────── */
  function treeHtml(node, prefix) {
    let html = "";
    for (const name of Object.keys(node)) {
      const value = node[name];
      const isEmpty = /vacío/.test(name);
      if (value && typeof value === "object" && !Array.isArray(value)) {
        html += `<div class="kb-tree-node">
          <div class="kb-tree-folder" data-toggle="1">
            <span class="kb-tree-toggle">▸</span>📁 ${escapeHtml(name)}
          </div>
          <div class="kb-tree-children" style="display:none">${treeHtml(value, prefix)}</div>
        </div>`;
      } else {
        html += `<div class="kb-tree-file ${isEmpty ? "empty" : ""}" data-file="${value ? escapeHtml(value) : ""}">📄 ${escapeHtml(name)}</div>`;
      }
    }
    return html;
  }

  function renderArchivos() {
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Explorador de archivos</span></div>
      <h1 class="kb-page-title">Explorador de archivos</h1>
      <p class="kb-page-sub">Árbol real de <code>src/</code>. Los archivos resaltados en verde tienen código completo y explicación línea por línea; el resto son navegables pero aún no tienen documentación profunda en esta versión.</p>
      <div class="kb-explorer">
        <div class="kb-file-tree" id="fileTree">${treeHtml(FILE_TREE, "")}</div>
        <div class="kb-file-detail" id="fileDetail">
          <div class="kb-file-empty">Selecciona un archivo del árbol para ver su código y explicación.</div>
        </div>
      </div>
    `;
  }

  /* ─── Sistema de estilos ──────────────────────────────────────── */
  function renderEstilos() {
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Sistema de estilos</span></div>
      <h1 class="kb-page-title">Sistema de estilos (CSS)</h1>
      <p class="kb-page-sub">23 archivos CSS, ~3940 líneas, organizados en cascada deliberada e importados en orden explícito desde src/main.jsx.</p>

      <div class="kb-diagram">
        <div class="kb-diagram-box hl"><strong>variables.css</strong><small>design tokens: colores, radios, sombras</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box"><strong>globals.css</strong><small>reset universal, tipografía base</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box"><strong>layout.css</strong><small>sidebar, topbar, responsive desktop/mobile</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box"><strong>components/*.css</strong><small>buttons, forms, cards, tables, navigation... reutilizables</small></div>
        <span class="kb-diagram-arrow">↓</span>
        <div class="kb-diagram-box"><strong>modules/*.css</strong><small>un archivo por módulo de negocio, prefijos propios (comp-, conc-, bib-, est-...)</small></div>
      </div>

      <h3>Variables (design tokens) — src/modulos/styles/variables.css</h3>
      ${codeBlock(`:root {
  --green:       #1DB954;
  --green-dark:  #17A449;
  --green-light: #E8F8EF;
  --orange:      #F97316;
  --purple:      #7C3AED;
  --blue:        #2563EB;
  --text-main:   #0F172A;
  --text-muted:  #64748B;
  --border:      #E2E8F0;
  --bg:          #F8FAFC;
  --white:       #FFFFFF;
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
}

.dark-theme {
  --bg:          #0F172A;
  --white:       #111827;
  --text-main:   #E2E8F0;
  --text-muted:  #94A3B8;
  --border:      #334155;
}`, "css", "variables.css (extracto)")}

      <div class="kb-callout">
        <strong>Cómo funciona el modo oscuro sin duplicar reglas</strong>
        El resto del CSS del proyecto usa <code>var(--bg)</code>, <code>var(--text-main)</code>, etc. — nunca colores fijos. Cuando App.jsx aplica la clase <code>.dark-theme</code> al contenedor raíz, esas MISMAS variables se redefinen con otros valores, y todo el árbol de componentes cambia de tema automáticamente, sin que ningún componente necesite saber que existe un modo oscuro.
      </div>

      <h3>Responsive: el mismo mecanismo en todo el proyecto</h3>
      <p>El breakpoint principal es <code>768px</code>. En vez de que React decida qué renderizar según el ancho de pantalla, casi siempre se monta TODO el árbol (desktop y mobile) y el CSS decide qué mostrar:</p>
      ${codeBlock(`@media (max-width: 768px) {
  .sidebar { display: none; }
  .main-content { margin-left: 0; }
  .topbar { display: none; }
  .mobile-only { display: block; }
  .desktop-only { display: none; }
}`, "css", "layout.css (extracto)")}
    `;
  }

  /* ─── Flujo de ejecución ──────────────────────────────────────── */
  function renderFlujo() {
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Flujo de ejecución</span></div>
      <h1 class="kb-page-title">Flujo de ejecución: seguir una acción real</h1>
      <p class="kb-page-sub">Elige una acción para ver, paso a paso, qué código se ejecuta desde el evento del usuario hasta el nuevo render.</p>

      <div class="kb-tabs" id="flowTabs">
        <button class="kb-tab active" data-flow="navegar">Clic en "Cómputos Métricos"</button>
        <button class="kb-tab" data-flow="calcular">Presionar "Siguiente" en el paso 2</button>
        <button class="kb-tab" data-flow="tema">Cambiar a modo oscuro</button>
      </div>
      <div id="flowContent"></div>
    `;
  }

  const FLOWS = {
    navegar: [
      { titulo: "Usuario hace clic en \"Cómputos Métricos\"", detalle: "En el Sidebar (desktop) o en una tarjeta de MobileHome (mobile)." },
      { titulo: "onNavigate(\"computos\")", detalle: "El componente Sidebar recibe onNavigate como prop desde App.jsx y lo llama con la key del módulo." },
      { titulo: "App.jsx: handleNavigate(\"computos\")", detalle: "setActiveModule(\"computos\") actualiza el estado. Si es mobile, también setMobileView(\"modulo\")." },
      { titulo: "React programa un re-render", detalle: "Cambiar un useState siempre provoca que React vuelva a ejecutar la función del componente." },
      { titulo: "renderDesktopPage() evalúa activeModule", detalle: "La cadena de if encuentra: if (activeModule === \"computos\") return <ModuloComputos/>" },
      { titulo: "React monta/actualiza <ModuloComputos/>", detalle: "useComputos() inicializa su propio estado interno (useReducer) — el wizard empieza en el paso 1." },
      { titulo: "El usuario ve el paso 1 del wizard", detalle: "Selección de elemento, con Columna preseleccionada por defecto (estadoInicial.elemento = \"columna\")." },
    ],
    calcular: [
      { titulo: "Usuario presiona \"Siguiente\" en el paso 2", detalle: "El botón tiene onClick={irSiguiente}, una función expuesta por useComputos()." },
      { titulo: "irSiguiente() valida el paso 2", detalle: "Llama a validarPaso2(state) — si largo/ancho/altura no son mayores a 0, o cantidad < 1, la función retorna sin hacer nada (el usuario no avanza)." },
      { titulo: "calcularResultadosColumna(state)", detalle: "Se ejecuta la función pura que orquesta calcularConcretoColumna, calcularAcero y calcularEncofradoColumna." },
      { titulo: "dispatch({ type: \"AVANZAR\", resultados })", detalle: "Se envía la acción al reducer, adjuntando los resultados ya calculados." },
      { titulo: "computosReducer procesa AVANZAR", detalle: "Devuelve un nuevo estado: paso pasa de 2 a 3, y resultados se llena con el objeto calculado." },
      { titulo: "React re-renderiza ModuloComputos", detalle: "state.paso ahora es 3, así que renderPaso() devuelve <Paso3Resultados resultados={state.resultados}/>." },
      { titulo: "El usuario ve las tarjetas KPI y la tabla de acero", detalle: "Todo el cálculo ya está hecho — Paso3Resultados solo lee y formatea (.toFixed()) los números." },
    ],
    tema: [
      { titulo: "Usuario hace clic en el botón de tema", detalle: "ThemeToggleButton llama a setDarkMode(!darkMode), una función que recibe como prop desde App.jsx." },
      { titulo: "setDarkMode(true) — definido en useTheme.js", detalle: "En vez de cambiar un booleano directo, llama setSettings(prev => ({...prev, themeMode: \"dark\"}))." },
      { titulo: "setSettings actualiza el estado (useSettings → usePersistentState)", detalle: "El nuevo objeto settings se guarda en React Y se escribe en localStorage bajo la clave civcalpro.settings." },
      { titulo: "React re-renderiza App", detalle: "useTheme(settings, setSettings) se vuelve a ejecutar con el settings actualizado." },
      { titulo: "resolveDarkMode(\"dark\", prefersDark) devuelve true", detalle: "darkMode ahora es true." },
      { titulo: "App.jsx aplica la clase .dark-theme", detalle: "<div className={darkMode ? \"dark-theme\" : \"\"}> envuelve toda la app." },
      { titulo: "El CSS reacciona: variables.css redefine los tokens", detalle: "Todos los componentes que usan var(--bg), var(--text-main), etc. cambian de color instantáneamente, sin que React haya tocado sus estilos individualmente." },
    ],
  };

  function renderFlowContent(key) {
    const steps = FLOWS[key];
    $("#flowContent").innerHTML = `
      <div class="kb-flow-row">
        ${steps.map((s, i) => `
          <div class="kb-flow-step">
            <div class="kb-flow-step-box"><strong>${i+1}. ${escapeHtml(s.titulo)}</strong></div>
            ${i < steps.length -1 ? '<span class="kb-flow-arrow">→</span>' : ""}
          </div>
        `).join("")}
      </div>
      <div class="kb-section">
        ${steps.map((s, i) => `<div class="kb-explain"><div class="kb-explain-title">${i+1}. ${escapeHtml(s.titulo)}</div><p>${escapeHtml(s.detalle)}</p></div>`).join("")}
      </div>
    `;
  }

  /* ─── Ruta de aprendizaje ─────────────────────────────────────── */
  function renderRuta() {
    const progress = getProgress();
    const total = DOCS.rutaAprendizaje.length;
    const done = Object.values(progress).filter(Boolean).length;
    const pct = Math.round((done / total) * 100);
    return `
      <div class="kb-breadcrumb"><a data-nav="inicio">Inicio</a> <span>›</span> <span>Ruta de aprendizaje</span></div>
      <h1 class="kb-page-title">Ruta de aprendizaje personalizada</h1>
      <p class="kb-page-sub">12 etapas progresivas, desde fundamentos hasta la arquitectura completa de CivCalPro. Marca cada etapa como comprendida a tu ritmo.</p>
      <div><b>${done} / ${total} etapas completadas (${pct}%)</b></div>
      <div class="kb-progress-bar"><div class="kb-progress-fill" style="width:${pct}%"></div></div>
      <div id="rutaList">
        ${DOCS.rutaAprendizaje.map(e => {
          const isDone = !!progress[e.etapa];
          return `
          <div class="kb-path-item ${isDone ? "done" : ""}" data-etapa="${e.etapa}">
            <div class="kb-path-num">${isDone ? "✓" : e.etapa}</div>
            <div class="kb-path-body">
              <h4>${escapeHtml(e.titulo)}</h4>
              <p><b>Aprender:</b> ${escapeHtml(e.aprender)}</p>
              <p><b>Archivos a estudiar:</b> ${e.archivos.map(escapeHtml).join(", ")}</p>
              <p><b>Observar:</b> ${escapeHtml(e.observar)}</p>
              <p><b>Ejercicio:</b> ${escapeHtml(e.ejercicio)}</p>
              <div class="kb-path-meta"><b>Pregunta que deberías poder responder:</b> ${escapeHtml(e.pregunta)}</div>
            </div>
            <button class="kb-mark-btn" data-toggle-etapa="${e.etapa}">${isDone ? "✓ Comprendido" : "Marcar"}</button>
          </div>`;
        }).join("")}
      </div>
    `;
  }

  /* ═══════════════════════════════════════════════════════════
     ROUTER
  ═══════════════════════════════════════════════════════════ */

  const RENDERERS = {
    inicio: renderInicio,
    arquitectura: renderArquitectura,
    tecnologias: renderTecnologias,
    modulos: renderModulos,
    archivos: renderArchivos,
    estilos: renderEstilos,
    flujo: renderFlujo,
    ruta: renderRuta,
  };

  function buildNav() {
    $("#kbNav").innerHTML = ROUTES.map(r => `
      <button class="kb-nav-item" data-nav="${r.key}">
        <span class="kb-nav-icon">${r.icon}</span>
        <span class="kb-nav-label">${escapeHtml(r.label)}</span>
      </button>
    `).join("");
  }

  function setActiveNav(key) {
    $$(".kb-nav-item").forEach(el => el.classList.toggle("active", el.dataset.nav === key));
    $("#mobileTitle").textContent = (ROUTES.find(r => r.key === key) || {}).label || "CivCalPro Docs";
  }

  function navigate(key, opts) {
    opts = opts || {};
    if (!RENDERERS[key]) key = "inicio";
    location.hash = key;
    $("#kbMain").innerHTML = RENDERERS[key]();
    setActiveNav(key);
    window.scrollTo(0, 0);

    if (key === "tecnologias") {
      const firstTech = Object.keys(DOCS.tecnologias)[0];
      renderTechContent(firstTech);
    }
    if (key === "flujo") renderFlowContent("navegar");
    if (key === "archivos" && opts.file) selectFile(opts.file);
    if (key === "modulos" && opts.sub) {
      const card = $(`.kb-card[data-modulo="${opts.sub}"]`);
      if (card) card.scrollIntoView({ block: "start" });
      renderModuloDetail(opts.sub);
    }
    closeMobileSidebar();
  }

  function selectFile(path) {
    navigate("archivos");
    setTimeout(() => {
      $$(".kb-tree-file").forEach(el => el.classList.toggle("active", el.dataset.file === path));
      $("#fileDetail").innerHTML = archivoDetailHtml(path);
      // expandir carpetas ancestro
      let el = $(`.kb-tree-file[data-file="${CSS.escape(path)}"]`);
      while (el) {
        const parentChildren = el.closest(".kb-tree-children");
        if (parentChildren) { parentChildren.style.display = "block"; }
        el = parentChildren ? parentChildren.closest(".kb-tree-node")?.parentElement?.closest(".kb-tree-node") : null;
        if (!parentChildren) break;
        const folderToggle = parentChildren.previousElementSibling?.querySelector(".kb-tree-toggle");
        if (folderToggle) folderToggle.textContent = "▾";
        el = parentChildren.parentElement;
      }
    }, 0);
  }

  /* ─── Delegación de eventos global ────────────────────────────── */
  document.addEventListener("click", (e) => {
    const navEl = e.target.closest("[data-nav]");
    if (navEl) {
      e.preventDefault();
      navigate(navEl.dataset.nav, { sub: navEl.dataset.sub, file: navEl.dataset.file });
      return;
    }
    const techTab = e.target.closest("[data-tech]");
    if (techTab) {
      $$("#techTabs .kb-tab").forEach(t => t.classList.toggle("active", t === techTab));
      renderTechContent(techTab.dataset.tech);
      return;
    }
    const flowTab = e.target.closest("[data-flow]");
    if (flowTab) {
      $$("#flowTabs .kb-tab").forEach(t => t.classList.toggle("active", t === flowTab));
      renderFlowContent(flowTab.dataset.flow);
      return;
    }
    const moduloCard = e.target.closest("[data-modulo]");
    if (moduloCard) {
      renderModuloDetail(moduloCard.dataset.modulo);
      $("#moduloDetail").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const treeFolder = e.target.closest(".kb-tree-folder");
    if (treeFolder) {
      const children = treeFolder.parentElement.querySelector(".kb-tree-children");
      const toggle = treeFolder.querySelector(".kb-tree-toggle");
      const isOpen = children.style.display !== "none";
      children.style.display = isOpen ? "none" : "block";
      toggle.textContent = isOpen ? "▸" : "▾";
      return;
    }
    const treeFile = e.target.closest(".kb-tree-file");
    if (treeFile && treeFile.dataset.file) {
      $$(".kb-tree-file").forEach(el => el.classList.toggle("active", el === treeFile));
      $("#fileDetail").innerHTML = archivoDetailHtml(treeFile.dataset.file);
      return;
    }
    const markBtn = e.target.closest("[data-toggle-etapa]");
    if (markBtn) {
      const etapa = markBtn.dataset.toggleEtapa;
      const progress = getProgress();
      const newVal = !progress[etapa];
      setProgress(etapa, newVal);
      navigate("ruta");
      return;
    }
  });

  /* ─── Búsqueda global ─────────────────────────────────────────── */
  function buildSearchIndex() {
    const idx = [];
    ROUTES.forEach(r => idx.push({ type: "Sección", label: r.label, nav: r.key }));
    Object.keys(DOCS.modulos).forEach(k => idx.push({ type: "Módulo", label: DOCS.modulos[k].nombre, nav: "modulos", sub: k }));
    Object.keys(DOCS.archivos).forEach(p => idx.push({ type: "Archivo", label: p, nav: "archivos", file: p }));
    Object.keys(DOCS.tecnologias).forEach(k => idx.push({ type: "Tecnología", label: DOCS.tecnologias[k].titulo, nav: "tecnologias" }));
    DOCS.rutaAprendizaje.forEach(e => idx.push({ type: "Ruta de aprendizaje", label: `Etapa ${e.etapa}: ${e.titulo}`, nav: "ruta" }));
    return idx;
  }
  const SEARCH_INDEX = buildSearchIndex();

  const searchInput = $("#globalSearch");
  const searchResults = $("#searchResults");
  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.classList.remove("open"); return; }
    const matches = SEARCH_INDEX.filter(item => item.label.toLowerCase().includes(q)).slice(0, 12);
    if (!matches.length) {
      searchResults.innerHTML = `<div class="kb-search-result-item">Sin resultados para "${escapeHtml(searchInput.value)}"</div>`;
    } else {
      searchResults.innerHTML = matches.map(m => `
        <div class="kb-search-result-item" data-nav="${m.nav}" data-sub="${m.sub||""}" data-file="${m.file||""}">
          ${escapeHtml(m.label)}<small>${escapeHtml(m.type)}</small>
        </div>`).join("");
    }
    searchResults.classList.add("open");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".kb-search-box")) searchResults.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === "Escape") searchResults.classList.remove("open");
  });

  /* ─── Sidebar colapsable / mobile ─────────────────────────────── */
  $("#collapseBtn").addEventListener("click", () => $("#kbSidebar").classList.toggle("collapsed"));
  function openMobileSidebar() { $("#kbSidebar").classList.add("mobile-open"); $("#kbOverlay").classList.add("show"); }
  function closeMobileSidebar() { $("#kbSidebar").classList.remove("mobile-open"); $("#kbOverlay").classList.remove("show"); }
  $("#mobileMenuBtn").addEventListener("click", openMobileSidebar);
  $("#kbOverlay").addEventListener("click", closeMobileSidebar);

  /* ─── Init ────────────────────────────────────────────────────── */
  initTheme();
  buildNav();
  const initialRoute = (location.hash || "#inicio").replace("#", "");
  navigate(RENDERERS[initialRoute] ? initialRoute : "inicio");

})();
