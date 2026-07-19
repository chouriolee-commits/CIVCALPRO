/* ════════════════════════════════════════════════════════════════
   CONTENT.JS — Base de conocimiento de CivCalPro
   ────────────────────────────────────────────────────────────────
   Todo el contenido textual, código fuente real y metadatos de la
   documentación interactiva vive en este archivo como datos JS puros
   (sin JSX, sin dependencias). app.js lo consume para renderizar.
═══════════════════════════════════════════════════════════════ */

const CIVCALPRO_DOCS = {

  meta: {
    generadoEl: "2026-07-19",
    version: "1.0.0",
    nota: "Generado a partir de lectura directa del repositorio. Todo el código mostrado es real y fue extraído de los archivos citados; las rutas de línea pueden desactualizarse si el código cambia después de esta fecha.",
  },

  /* ───────────────────────────────────────────────────────────
     ARCHIVOS FUENTE REALES (código completo, verbatim)
     Cada entrada: { path, lang, code, resumen }
  ─────────────────────────────────────────────────────────── */
  archivos: {

"src/main.jsx": {
  lang: "jsx",
  responsabilidad: "Punto de entrada real de la aplicación. Es el primer archivo JS que se ejecuta en el navegador. Su único trabajo es: importar todos los CSS del proyecto (en un orden específico), importar el componente raíz App, y decirle a React dónde \"montarse\" en el HTML.",
  code: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* ─── Base (variables, reset, layout, utilidades) ───────────── */
import './modulos/styles/variables.css'
import './modulos/styles/globals.css'
import './modulos/styles/layout.css'
import './modulos/styles/utilities.css'

/* ─── Componentes reutilizables ─────────────────────────────── */
import './modulos/styles/components/buttons.css'
import './modulos/styles/components/forms.css'
import './modulos/styles/components/badges.css'
import './modulos/styles/components/cards.css'
import './modulos/styles/components/tables.css'
import './modulos/styles/components/navigation.css'
import './modulos/styles/components/drawers.css'
import './modulos/styles/components/animations.css'

/* ─── Estilos por módulo ────────────────────────────────────── */
import './modulos/styles/modules/dashboards.css'
import './modulos/styles/modules/proyectos.css'
import './modulos/styles/modules/computos.css'
import './modulos/styles/modules/concreto.css'
import './modulos/styles/modules/biblioteca.css'
import './modulos/styles/modules/estimacion.css'
import './modulos/styles/modules/historial.css'
import './modulos/styles/modules/reportes.css'
import './modulos/styles/modules/configuracion.css'
import './modulos/styles/modules/ayuda.css'
import './modulos/styles/modules/normas.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`,
  bloques: [
    { titulo: "Imports de React", lineas: "1-2", texto: "`StrictMode` es un componente especial de React que no renderiza nada visible; envuelve la app para activar advertencias adicionales en desarrollo (detecta efectos secundarios inseguros). `createRoot` es la función moderna de React 18+ para crear la raíz de renderizado — reemplazó a `ReactDOM.render` de versiones anteriores." },
    { titulo: "21 imports de CSS en cascada", lineas: "3-30", texto: "Vite no usa un bundler de CSS automático aquí: cada archivo `.css` se importa explícitamente y en un orden que importa. El orden sigue la cascada CSS a propósito: primero las variables (tokens de color/espaciado), luego el reset global, luego el layout estructural, luego utilidades, luego componentes reutilizables (botones, forms, cards...), y al final los estilos específicos de cada módulo de negocio. Si un módulo se agrega y su CSS no se importa aquí, sus clases simplemente no tendrán estilo — es un punto de fallo común a tener en cuenta." },
    { titulo: "Montaje de React en el DOM", lineas: "33-37", texto: "`document.getElementById('root')` busca el `<div id=\"root\">` que existe en `index.html` (la única etiqueta HTML \"real\" de toda la app — todo lo demás lo genera React). `createRoot(...).render(<App/>)` le dice a React: toma el árbol de componentes que empieza en `<App/>` y conviértelo en nodos DOM reales dentro de ese div." },
  ],
  siguienteConcepto: "Para entender qué hace `<App/>`, continúa con src/App.jsx.",
},

"src/App.jsx": {
  lang: "jsx",
  responsabilidad: "Componente raíz de toda la aplicación. No usa ninguna librería de routing (no hay React Router): la \"navegación\" es en realidad un estado (`activeModule`) que decide, mediante funciones con muchos `if`, qué componente de módulo renderizar. También decide si mostrar la versión desktop o mobile, y aplica el tema oscuro/claro a toda la app.",
  code: `import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { Topbar } from "./components/Topbar.jsx";
import { DesktopHome } from "./components/DesktopHome.jsx";
import { MobileHome } from "./components/MobileHome.jsx";
import { MobileModuloRouter } from "./components/MobileModuloRouter.jsx";
import { ModuloPendiente } from "./components/common/ModuloPendiente.jsx";
import ModuloProyectos from "./modulos/proyectos/index.jsx";
import ModuloComputos from "./modulos/computos/index.jsx";
import ModuloConcreto from "./modulos/concreto/index.jsx";
import ModuloBiblioteca from "./modulos/biblioteca/index.jsx";
import ModuloEstimacion from "./modulos/estimacion/index.jsx";
import ModuloHistorial from "./modulos/historial/index.jsx";
import MobileHistorial from "./modulos/historial/MobileHistorial.jsx";
import ModuloReportes from "./modulos/reportes/index.jsx";
import MobileReportes from "./modulos/reportes/MobileReportes.jsx";
import ModuloConfiguracion from "./modulos/configuracion/index.jsx";
import MobileConfiguracion from "./modulos/configuracion/MobileConfiguracion.jsx";
import ModuloAyuda from "./modulos/ayuda/index.jsx";
import ModuloNormas from "./modulos/normas/index.jsx";
import { useSettings } from "./hooks/useSettings.js";
import { useTheme } from "./hooks/useTheme.js";
import { useUser } from "./hooks/useUser.js";
import { getLocalStorageUsage } from "./utils/storage.js";
import { MODULES, EMPTY_DASHBOARD, FONT_SCALES, DEFAULT_SETTINGS, DEFAULT_USER, SETTINGS_KEY, USER_KEY, THEME_KEY } from "./data/constants.js";

export default function App() {
  const [activeModule, setActiveModule] = useState("inicio");
  const [mobileView, setMobileView] = useState("home");

  const [settings, setSettings] = useSettings();
  const { darkMode, setDarkMode } = useTheme(settings, setSettings);
  const [, setUser] = useUser();

  const [dashboardData, setDashboardData] = useState(EMPTY_DASHBOARD);

  // Aplica tamaño de fuente global y lenguaje del documento
  useEffect(() => {
    try {
      document.documentElement.style.setProperty(
        "--app-scale",
        String(FONT_SCALES[settings.fontSize] || 1),
      );
      document.documentElement.lang = settings.language || "es";
    } catch {}
  }, [settings.fontSize, settings.language]);

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
    setUser(DEFAULT_USER);
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
    if (activeModule === "normas") return <ModuloNormas />;

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
    if (activeModule === "normas") {
      return <ModuloNormas mobile onBack={() => setMobileView("home")} />;
    }

    return (
      <MobileModuloRouter
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
        <Sidebar activeModule={activeModule} onNavigate={handleNavigate} />
        <div className="main-content">
          <Topbar
            title={pageTitle()}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            activeModule={activeModule}
          />
          {renderDesktopPage()}
        </div>
      </div>

      {/* MOBILE */}
      <div className="mobile-only" style={{ minHeight: "100vh", background: "var(--bg)" }}>
        {renderMobilePage()}
      </div>
    </div>
  );
}`,
  bloques: [
    { titulo: "Imports", lineas: "1-25", texto: "Importa TODOS los módulos de negocio de una vez (Proyectos, Cómputos, Concreto, Biblioteca, Estimación, Historial, Reportes, Configuración, Ayuda, Normas) más sus variantes móviles cuando existen como archivo separado. Esto significa que el JavaScript de todos los módulos se descarga junto al inicio de la app — no hay \"code splitting\" ni carga perezosa (`lazy`/`Suspense`)." },
    { titulo: "Estado de navegación: activeModule + mobileView", lineas: "28-29", texto: "`activeModule` (string, ej. \"inicio\", \"computos\", \"proyectos\") reemplaza lo que en una app con router sería la URL. `mobileView` (\"home\" | \"modulo\") es un estado adicional solo relevante en móvil: home muestra el dashboard móvil con tarjetas de módulos, modulo muestra el módulo activo en pantalla completa con un botón de \"volver\"." },
    { titulo: "Composición de hooks: settings → theme → user", lineas: "31-33", texto: "`useSettings()` da `[settings, setSettings]` (persistido en localStorage). Ese `settings` se le pasa a `useTheme(settings, setSettings)`, que deriva `darkMode` de `settings.themeMode` y expone `setDarkMode`. `useUser()` también existe pero aquí solo se usa su setter (`[, setUser]` — la coma vacía indica que el primer valor del array, el usuario en sí, se ignora deliberadamente en este archivo)." },
    { titulo: "useEffect: aplicar escala de fuente global", lineas: "38-46", texto: "Cada vez que `settings.fontSize` o `settings.language` cambian, este efecto escribe una CSS custom property (`--app-scale`) directamente en `<html>` y cambia el atributo `lang`. Es la única vía por la que la Configuración del usuario (tamaño de fuente) afecta visualmente TODA la app: el CSS en otros archivos usa `var(--app-scale)` para escalar tamaños." },
    { titulo: "Detección de mobile: sin listener de resize", lineas: "48", texto: "`const isMobile = window.innerWidth <= 768;` se calcula UNA vez en cada render, leyendo el ancho de ventana actual. No hay ningún listener de `resize` — si redimensionas la ventana del navegador sin que ocurra otro re-render (como un clic), `isMobile` no se actualiza solo. En la práctica casi siempre coincide porque cualquier interacción dispara un re-render." },
    { titulo: "handleResetAllData: vuelve todo a los valores por defecto", lineas: "56-68", texto: "Borra 3 claves de localStorage y resetea 3 piezas de estado. Nota que esto NO borra `computos_guardados` (la clave donde el módulo de Cómputos guarda cálculos) — ese localStorage sigue vivo aunque se resetee \"todo\", una inconsistencia real del código actual." },
    { titulo: "renderDesktopPage / renderMobilePage: el \"router\" manual", lineas: "95-143 y 145-194", texto: "Son funciones que retornan JSX, llamadas directamente dentro del render (no son componentes con mayúscula inicial, son funciones auxiliares). Cada una es una cadena de `if (activeModule === \"x\") return <ComponenteX/>`. Esto ES el sistema de rutas de CivCalPro — equivalente a lo que en React Router serían `<Route path=\"/x\" element={<ComponenteX/>}/>`." },
    { titulo: "Render final: ambos árboles montados siempre", lineas: "196-231", texto: "Fíjate que NO hay un `if (isMobile) return <mobile/> else return <desktop/>` — React monta AMBOS `<div className=\"app-layout desktop-only\">` y `<div className=\"mobile-only\">` simultáneamente en cada render. Es el CSS (`layout.css`, con `@media (max-width: 768px) { .desktop-only { display:none } .mobile-only{display:block} }`) el que oculta uno u otro visualmente. Esto es una decisión arquitectónica importante: significa que ambas versiones existen en el DOM al mismo tiempo (más nodos DOM de los estrictamente necesarios, pero evita re-montar componentes al cambiar de tamaño de ventana)." },
  ],
  siguienteConcepto: "Ahora que sabes cómo App.jsx decide qué módulo mostrar, explora el caso de estudio completo: el módulo Cómputos Métricos.",
},

"src/hooks/useProyecto.js": {
  lang: "js",
  nombreReal: "usePersistentState",
  advertencia: "El archivo se llama useProyecto.js pero NO exporta nada llamado \"useProyecto\" ni tiene relación semántica con proyectos — exporta un hook genérico llamado usePersistentState. Es el hook de infraestructura del que dependen useUser y useSettings, y que el módulo de Cómputos usa directamente para guardar cálculos.",
  responsabilidad: "Sincronizar un valor de estado de React con localStorage automáticamente, en ambas direcciones: al iniciar, lee el valor guardado (si existe); cada vez que cambia, lo vuelve a guardar.",
  code: `import { useEffect, useState } from "react";

const readStoredValue = (key, fallback) => {
  if (typeof window === "undefined") return fallback;

  try {
    const serializedValue = window.localStorage.getItem(key);
    if (serializedValue === null) return fallback;

    const parsedValue = JSON.parse(serializedValue);

    if (
      typeof fallback === "object" &&
      fallback !== null &&
      !Array.isArray(fallback)
    ) {
      return { ...fallback, ...parsedValue };
    }

    return parsedValue;
  } catch {
    return fallback;
  }
};

export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => readStoredValue(key, initialValue));

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (value === undefined) {
        window.localStorage.removeItem(key);
        return;
      }

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);

  return [value, setValue];
}`,
  bloques: [
    { titulo: "readStoredValue: lectura defensiva", lineas: "3-24", texto: "localStorage solo guarda strings, por eso `JSON.parse` convierte el texto guardado de vuelta a un objeto/array/número real. El `try/catch` protege contra JSON corrupto (por ejemplo si alguien edita localStorage a mano y rompe el formato) — en ese caso, en vez de que la app crashee, simplemente usa el `fallback`. El caso especial de las líneas 12-18: si el valor por defecto es un objeto plano (no array, no null), hace un merge (`{...fallback, ...parsedValue}`) en vez de reemplazo total — esto es importante porque si agregas un campo nuevo a `DEFAULT_SETTINGS` en el futuro, los usuarios que ya tenían settings guardados sin ese campo lo recibirán con su valor por defecto en vez de `undefined`." },
    { titulo: "useState con función inicializadora", lineas: "27", texto: "`useState(() => readStoredValue(...))` usa la forma de \"lazy initial state\" de React: pasar una función en vez de un valor directo. React solo ejecuta esa función UNA vez, en el primer render — así `readStoredValue` (que toca `localStorage`, una operación relativamente costosa) no se ejecuta en cada re-render, solo al montar el componente." },
    { titulo: "useEffect: sincronizar de vuelta hacia localStorage", lineas: "29-40", texto: "Cada vez que `value` cambia (o `key`, aunque en la práctica `key` es constante), este efecto vuelve a escribir en localStorage. El caso `value === undefined` borra la clave en vez de guardar el string `\"undefined\"`." },
    { titulo: "Por qué esto es un hook y no una función normal", texto: "Usa `useState` y `useEffect` internamente, que son Hooks de React — funciones especiales que solo pueden llamarse dentro de componentes o de otros hooks. Por convención (y porque React lo exige para que funcionen las reglas de hooks), toda función que use hooks debe empezar con `use`." },
  ],
},

"src/hooks/useTheme.js": {
  lang: "js",
  responsabilidad: "Calcular si la app debe mostrarse en modo oscuro, combinando la preferencia guardada del usuario (settings.themeMode: \"light\"/\"dark\"/\"system\") con la preferencia real del sistema operativo cuando el modo es \"system\".",
  code: `import { useEffect } from "react";
import { useSystemTheme } from "./useSync.js";
import { SYSTEM_THEME_QUERY, THEME_KEY } from "../data/constants.js";

const resolveDarkMode = (themeMode, prefersDark) =>
  themeMode === "dark" || (themeMode === "system" && prefersDark);

// Deriva darkMode a partir de settings.themeMode + preferencia del
// sistema, y expone un setDarkMode(bool) que escribe themeMode de
// vuelta en settings (igual al comportamiento original de App).
export function useTheme(settings, setSettings) {
  const prefersDark = useSystemTheme(SYSTEM_THEME_QUERY);
  const darkMode = resolveDarkMode(settings.themeMode, prefersDark);

  const setDarkMode = (nextDark) => {
    setSettings((prev) => ({
      ...prev,
      themeMode: nextDark ? "dark" : "light",
    }));
  };

  // Persistencia vestigial: nada vuelve a leer THEME_KEY (el modo
  // oscuro real se deriva de settings.themeMode), pero se conserva
  // el mismo efecto secundario que existía antes del refactor.
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, darkMode ? "dark" : "light");
    } catch {}
  }, [darkMode]);

  return { darkMode, setDarkMode };
}`,
  bloques: [
    { titulo: "resolveDarkMode: función pura auxiliar", lineas: "5-6", texto: "Fuera del hook, sin usar `useState` ni `useEffect` — es lógica pura (mismo input, mismo output, sin efectos secundarios). Devuelve `true` si el modo es directamente \"dark\", O si el modo es \"system\" Y el sistema operativo prefiere oscuro." },
    { titulo: "Composición con otro hook: useSystemTheme", lineas: "12", texto: "`useTheme` no detecta la preferencia del sistema por sí mismo — delega esa responsabilidad a `useSystemTheme` (definido en useSync.js). Esto es \"composición de hooks\": construir hooks más complejos combinando hooks más simples." },
    { titulo: "setDarkMode no cambia un booleano directamente", lineas: "15-20", texto: "Aunque el consumidor de este hook llama `setDarkMode(true)` como si fuera un simple toggle, internamente NO existe un estado booleano — lo que en realidad ocurre es que se sobreescribe `settings.themeMode` a \"dark\" o \"light\" (nunca vuelve a \"system\" desde aquí). Es una capa de abstracción: el componente que llama a `setDarkMode` no necesita saber que por debajo se está tocando el objeto de settings completo." },
    { titulo: "\"Persistencia vestigial\" (comentario del propio código)", lineas: "22-29", texto: "El propio comentario del código admite que esto es un remanente de una versión anterior: escribe en `THEME_KEY` (localStorage) pero NINGÚN otro archivo vuelve a leer esa clave — el modo oscuro real siempre se deriva de `settings.themeMode`. Es un ejemplo real de \"código que ya no hace falta pero no se ha limpiado\" — útil para aprender a identificar deuda técnica en un proyecto real." },
  ],
},

"src/hooks/useSync.js": {
  lang: "js",
  nombreReal: "useSystemTheme",
  advertencia: "El archivo se llama useSync.js pero no sincroniza nada con un servidor — exporta useSystemTheme, que solo detecta la preferencia de tema del sistema operativo del usuario.",
  responsabilidad: "Usar la Media Query API del navegador (matchMedia) para saber si el sistema operativo tiene activado el modo oscuro, y reaccionar en tiempo real si el usuario lo cambia mientras la app está abierta.",
  code: `import { useEffect, useState } from "react";

export function useSystemTheme(query = "(prefers-color-scheme: dark)") {
  const [prefersDark, setPrefersDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.(query)?.matches ?? false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia?.(query);
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
  }, [query]);

  return prefersDark;
}`,
  bloques: [
    { titulo: "window.matchMedia: la Media Query API en JS", lineas: "5", texto: "`matchMedia(query)` devuelve un objeto `MediaQueryList` con una propiedad `.matches` (true/false) y la capacidad de escuchar cambios. Es el equivalente en JavaScript a escribir `@media (prefers-color-scheme: dark)` en CSS, pero consultable y observable desde código." },
    { titulo: "Optional chaining (?.) y nullish coalescing (??)", lineas: "5-6", texto: "`window.matchMedia?.(query)?.matches ?? false`: el `?.` evita un error si `matchMedia` no existe (navegadores muy viejos, o entornos sin `window` como server-side rendering). El `?? false` da un valor por defecto solo si el resultado es `null` o `undefined` (a diferencia de `||`, que también reemplazaría `0` o `\"\"` — aquí no importa porque el valor es boolean, pero es el operador correcto para este patrón)." },
    { titulo: "Cleanup function en useEffect", lineas: "20-25", texto: "El `return () => mediaQuery.removeEventListener(...)` dentro del efecto es la \"función de limpieza\": React la ejecuta automáticamente antes de que el efecto se vuelva a ejecutar o cuando el componente se desmonta. Sin esto, cada vez que el componente se re-renderiza se acumularían listeners nuevos sin quitar los viejos (memory leak)." },
    { titulo: "Compatibilidad con API antigua (addListener/removeListener)", lineas: "22-24", texto: "`addEventListener`/`removeEventListener` en `MediaQueryList` es la API moderna; `addListener`/`removeListener` es la versión antigua (deprecada pero aún soportada en algunos navegadores). El código intenta la moderna primero y cae a la antigua si no existe — un patrón de \"feature detection\" común en JS." },
  ],
},

"src/hooks/useUser.js": {
  lang: "js",
  responsabilidad: "Dar acceso al estado del usuario actual, persistido automáticamente en localStorage.",
  code: `import { usePersistentState } from "./useProyecto.js";
import { USER_KEY, DEFAULT_USER } from "../data/constants.js";

// Usuario local, sincronizado con localStorage bajo USER_KEY.
export function useUser() {
  return usePersistentState(USER_KEY, DEFAULT_USER);
}`,
  bloques: [
    { titulo: "Un hook de una línea: envolver otro hook", lineas: "5-7", texto: "Este es el ejemplo más simple de \"composición de hooks\" en todo el proyecto: `useUser` no tiene lógica propia, solo llama a `usePersistentState` con argumentos ya decididos (la clave `\"user\"` y el valor por defecto `DEFAULT_USER`). Esto le da un nombre semántico y específico a un uso concreto de un hook genérico — el componente que llama `useUser()` no necesita saber ni la clave de localStorage ni el valor por defecto." },
  ],
},

"src/hooks/useSettings.js": {
  lang: "js",
  responsabilidad: "Dar acceso a los ajustes/preferencias del usuario (tema, tamaño de fuente, idioma, autoguardado), persistidos automáticamente.",
  code: `import { usePersistentState } from "./useProyecto.js";
import { DEFAULT_SETTINGS, SETTINGS_KEY } from "../data/constants.js";

// Ajustes del usuario, sincronizados con localStorage bajo SETTINGS_KEY.
export function useSettings() {
  return usePersistentState(SETTINGS_KEY, DEFAULT_SETTINGS);
}`,
  bloques: [
    { titulo: "Mismo patrón que useUser", texto: "Idéntica estructura a `useUser.js`, cambiando solo la clave (`SETTINGS_KEY`) y el valor inicial (`DEFAULT_SETTINGS`, que incluye `themeMode`, `fontSize`, `language`, `autosave` — ver data/constants.js)." },
  ],
},

"src/data/constants.js": {
  lang: "js",
  responsabilidad: "Catálogo de constantes compartidas por más de un archivo, o usadas directamente por App.jsx. Cada módulo de negocio (computos, concreto, etc.) tiene su PROPIO archivo de datos — este es solo para lo que es realmente global a la app: los 4 módulos principales, accesos rápidos del dashboard, claves de localStorage y valores por defecto.",
  code: `import reglaImg from "../assets/img/regla.png";
import mezcladoraImg from "../assets/img/mezcladora.png";
import libroImg from "../assets/img/libro.png";
import calculadoraImg from "../assets/img/calculadora.png";

export const MODULES = [
  { id: 1, key: "computos", label: "Cómputos Métricos", desc: "Bloques, columnas, vigas, losas y más.", iconSrc: reglaImg, color: "card-green", btnColor: "btn-green", bg: "#E8F8EF" },
  { id: 2, key: "concreto", label: "Dosificación de Concreto", desc: "f'c 150 / 180 / 210 kg/cm².", iconSrc: mezcladoraImg, color: "card-orange", btnColor: "btn-orange", bg: "#FEF3E8" },
  { id: 3, key: "biblioteca", label: "Biblioteca de Materiales", desc: "Acero, bloques, áridos y acabados.", iconSrc: libroImg, color: "card-purple", btnColor: "btn-purple", bg: "#F3EFFE" },
  { id: 4, key: "estimacion", label: "Estimación de Materiales", desc: "Pintura, cerámica, repello y enchape.", iconSrc: calculadoraImg, color: "card-blue", btnColor: "btn-blue", bg: "#EFF4FF" },
];

export const ACCESOS = [
  { label: "Nuevo proyecto", sub: "Organiza tus cálculos en un proyecto", icon: "plus", bg: "#E8F8EF", iconColor: "#166534" },
  { label: "Exportar último cálculo", sub: "Descarga el PDF de la columna de hoy", icon: "export", bg: "#EFF4FF", iconColor: "#1D4ED8" },
  { label: "Normas COVENIN ", sub: "Biblioteca normativa integrada", icon: "refresh", bg: "#FEF3E8", iconColor: "#9A3412" },
];

export const EMPTY_DASHBOARD = {
  projectsCount: null, activeProjects: null, calculationsCount: null,
  calculationsWeek: null, exportsCount: null, exportDetail: null,
  normsStatus: null, normsDetail: null, recentProjects: [], recentCalculations: [],
};

export const APP_VERSION = "v1.0.0";
export const SETTINGS_KEY = "civcalpro.settings";
export const THEME_KEY = "theme";
export const USER_KEY = "user";
export const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

export const DEFAULT_SETTINGS = { themeMode: "system", fontSize: "normal", language: "es", autosave: true };
export const FONT_SCALES = { small: 1.05, normal: 1.25, large: 1.45 };
export const DEFAULT_USER = { isLoggedIn: false, name: null, role: "Invitado" };`,
  bloques: [
    { titulo: "iconSrc en vez de JSX embebido", lineas: "6-11", texto: "El comentario original del archivo explica por qué: un archivo `.js` (no `.jsx`) no puede contener JSX directamente (`<img .../>` no es válido ahí). Por eso cada entrada guarda solo la ruta de la imagen (`iconSrc`) y es el componente consumidor (ej. `Sidebar.jsx`) quien arma `<img src={m.iconSrc}/>`." },
    { titulo: "EMPTY_DASHBOARD: todo en null", lineas: "84-95 (aprox.)", texto: "Este objeto define la \"forma\" que debería tener el dashboard si tuviera datos reales, pero todos sus valores son `null` o arrays vacíos. App.jsx lo usa como estado inicial de `dashboardData` y nunca lo reemplaza con datos reales — es la razón por la que el dashboard principal siempre muestra guiones/vacíos en vez de números." },
    { titulo: "Constantes de configuración global", texto: "`SETTINGS_KEY`, `THEME_KEY`, `USER_KEY` son los nombres de clave literales usados en `localStorage`. Definirlos como constantes en un solo lugar (en vez de escribir el string \"civcalpro.settings\" repetido en varios archivos) evita errores de tipeo y facilita cambiarlos." },
  ],
},

"src/modulos/computos/computos.data.js": {
  lang: "js",
  responsabilidad: "Catálogo estático del módulo Cómputos: los 8 tipos de elemento seleccionables, los 4 pasos del wizard, cuáles elementos tienen formulario implementado, y catálogos pequeños de resistencia de concreto y tipos de refuerzo.",
  code: `import columnaImg from "../../assets/img/columna.png";
import vigaImg from "../../assets/img/viga.png";
import losaImg from "../../assets/img/losa.png";
import muroImg from "../../assets/img/muro.png";
import zapataImg from "../../assets/img/zapata.png";
import pisoImg from "../../assets/img/piso.png";
import excavacionImg from "../../assets/img/excavacion.png";
import otroImg from "../../assets/img/otro.png";

export const ELEMENTOS = [
  { id: "columna", label: "Columna", iconSrc: columnaImg },
  { id: "viga", label: "Viga", iconSrc: vigaImg },
  { id: "losa", label: "Losa", iconSrc: losaImg },
  { id: "muro", label: "Muro", iconSrc: muroImg },
  { id: "zapata", label: "Zapata", iconSrc: zapataImg },
  { id: "piso", label: "Piso", iconSrc: pisoImg },
  { id: "excavacion", label: "Excavación", iconSrc: excavacionImg },
  { id: "otro", label: "Otro", iconSrc: otroImg },
];

export const PASOS = [
  { num: 1, label: "Seleccionar elemento", sub: "Elige el tipo de elemento a calcular" },
  { num: 2, label: "Ingresar dimensiones", sub: "Ingresa las medidas requeridas" },
  { num: 3, label: "Resultados", sub: "Visualiza los resultados del cálculo" },
  { num: 4, label: "Guardar", sub: "Guarda el cómputo en tu proyecto" },
];

// Elementos con formulario de dimensiones implementado; el resto muestra
// un aviso de "próximamente" en el paso 2 sin bloquear la navegación.
export const ELEMENTOS_DISPONIBLES = ["columna"];

export const RESISTENCIAS_CONCRETO = [
  { id: "f180", label: "f'c = 180 kg/cm²" },
  { id: "f210", label: "f'c = 210 kg/cm²" },
  { id: "f240", label: "f'c = 240 kg/cm²" },
];

export const TIPOS_REFUERZO = [
  { id: "longitudinal", label: "Barra longitudinal" },
  { id: "estribo", label: "Estribo" },
];`,
  bloques: [
    { titulo: "ELEMENTOS_DISPONIBLES: la lista \"real\" dentro de la lista completa", texto: "Este es el dato clave que explica por qué solo Columna funciona hoy: `ELEMENTOS` tiene 8 tipos seleccionables en el paso 1, pero `ELEMENTOS_DISPONIBLES` solo incluye `\"columna\"`. El paso 2 (`Paso2Dimensiones.jsx`) consulta este segundo array para decidir si muestra el formulario real o un aviso de \"próximamente\"." },
  ],
},

"src/modulos/computos/computosReducer.js": {
  lang: "js",
  responsabilidad: "El cerebro del estado del wizard. Define la forma inicial de TODO el estado del módulo (estadoInicial), el catálogo de acciones posibles (TIPOS_ACCION) y la función reducer que, dado un estado actual y una acción, calcula el siguiente estado.",
  code: `export const estadoInicial = {
  paso: 1,
  elemento: "columna",
  proyecto: "edificio",
  nivel: "nivel1",
  descripcion: "",
  geometria: { largo: "0.30", ancho: "0.30", altura: "3.00", cantidad: "12" },
  resistenciaId: "f210",
  refuerzos: [],
  desperdicioConcreto: 5,
  resultados: null,
  nombreCalculo: "",
  observaciones: "",
  guardadoOk: false,
};

let contadorRefuerzo = 0;
function generarIdRefuerzo() {
  contadorRefuerzo += 1;
  return \`refuerzo-\$\{Date.now()\}-\$\{contadorRefuerzo\}\`;
}

export const TIPOS_ACCION = {
  SET_CAMPO_PASO1: "SET_CAMPO_PASO1",
  SET_GEOMETRIA: "SET_GEOMETRIA",
  SET_RESISTENCIA: "SET_RESISTENCIA",
  SET_DESPERDICIO: "SET_DESPERDICIO",
  AGREGAR_REFUERZO: "AGREGAR_REFUERZO",
  EDITAR_REFUERZO: "EDITAR_REFUERZO",
  ELIMINAR_REFUERZO: "ELIMINAR_REFUERZO",
  AVANZAR: "AVANZAR",
  RETROCEDER: "RETROCEDER",
  IR_A_PASO: "IR_A_PASO",
  SET_GUARDADO: "SET_GUARDADO",
  MARCAR_GUARDADO: "MARCAR_GUARDADO",
  RESET: "RESET",
};

export function computosReducer(state, action) {
  switch (action.type) {
    case TIPOS_ACCION.SET_CAMPO_PASO1:
      return { ...state, [action.campo]: action.valor };

    case TIPOS_ACCION.SET_GEOMETRIA:
      return {
        ...state,
        geometria: { ...state.geometria, [action.campo]: action.valor },
        resultados: null,
      };

    case TIPOS_ACCION.SET_RESISTENCIA:
      return { ...state, resistenciaId: action.resistenciaId, resultados: null };

    case TIPOS_ACCION.SET_DESPERDICIO:
      return { ...state, desperdicioConcreto: action.valor, resultados: null };

    case TIPOS_ACCION.AGREGAR_REFUERZO:
      return {
        ...state,
        refuerzos: [...state.refuerzos, { ...action.refuerzo, id: generarIdRefuerzo() }],
        resultados: null,
      };

    case TIPOS_ACCION.EDITAR_REFUERZO:
      return {
        ...state,
        refuerzos: state.refuerzos.map((r) =>
          r.id === action.id ? { ...r, ...action.cambios } : r
        ),
        resultados: null,
      };

    case TIPOS_ACCION.ELIMINAR_REFUERZO:
      return {
        ...state,
        refuerzos: state.refuerzos.filter((r) => r.id !== action.id),
        resultados: null,
      };

    case TIPOS_ACCION.AVANZAR:
      return {
        ...state,
        paso: Math.min(4, state.paso + 1),
        ...(action.resultados ? { resultados: action.resultados } : {}),
      };

    case TIPOS_ACCION.RETROCEDER:
      return { ...state, paso: Math.max(1, state.paso - 1) };

    case TIPOS_ACCION.IR_A_PASO:
      return { ...state, paso: Math.min(4, Math.max(1, action.paso)) };

    case TIPOS_ACCION.SET_GUARDADO:
      return { ...state, [action.campo]: action.valor };

    case TIPOS_ACCION.MARCAR_GUARDADO:
      return { ...state, guardadoOk: true };

    case TIPOS_ACCION.RESET:
      return { ...estadoInicial };

    default:
      return state;
  }
}`,
  bloques: [
    { titulo: "¿Qué es un reducer? (concepto desde cero)", texto: "Un reducer es una función con la forma `(estadoActual, accion) => nuevoEstado`. NUNCA modifica el estado actual directamente (mutación) — siempre construye y retorna un objeto NUEVO. La idea viene originalmente de Redux, pero React la incluye nativamente en el hook `useReducer`. Es una alternativa a tener muchos `useState` sueltos cuando el estado es complejo y las actualizaciones dependen unas de otras." },
    { titulo: "Por qué useReducer aquí y no varios useState", texto: "Este wizard tiene un requisito clave: CUALQUIER cambio en geometría, resistencia, desperdicio o acero debe invalidar los resultados ya calculados (poner `resultados: null`). Con `useReducer`, esa regla se escribe UNA vez por cada acción relevante, en un solo lugar. Con `useState` sueltos, habría que recordar poner `setResultados(null)` manualmente en cada `onChange` de cada input — fácil de olvidar en alguno." },
    { titulo: "El patrón spread (...) para \"actualizar sin mutar\"", lineas: "46, 51, 64, 71, 80", texto: "`{ ...state, paso: 2 }` crea un OBJETO NUEVO copiando todas las propiedades de `state` y luego sobreescribe `paso`. Es el patrón central de \"inmutabilidad\" en React: nunca se hace `state.paso = 2` (eso mutaría el objeto original); siempre se construye una copia con el cambio aplicado. React necesita esto para poder comparar \"¿cambió el estado?\" simplemente comparando si el objeto es el mismo (por referencia), no comparando campo por campo." },
    { titulo: "Computed property names: [action.campo]", lineas: "46, 98", texto: "`{ ...state, [action.campo]: action.valor }` usa una característica de JS llamada \"computed property name\": lo que hay entre corchetes se evalúa como expresión para decidir el NOMBRE de la propiedad. Si `action.campo` vale `\"proyecto\"`, esto es equivalente a escribir `{ ...state, proyecto: action.valor }`. Permite que UNA sola línea de código maneje la actualización de cualquier campo del paso 1 (proyecto, nivel, descripción, elemento), sin repetir código por cada campo." },
    { titulo: "generarIdRefuerzo: closure con contador persistente", lineas: "21-25", texto: "`contadorRefuerzo` vive FUERA de la función `computosReducer` y de `generarIdRefuerzo`, en el ámbito del módulo — por eso conserva su valor entre llamadas (a diferencia de una variable declarada dentro de una función, que se reinicia cada vez). Combina el contador con `Date.now()` (milisegundos desde 1970) para generar IDs únicos como `\"refuerzo-1784431916328-2\"`." },
    { titulo: "action.resultados ? {...} : {} — spread condicional", lineas: "88", texto: "Este patrón mete un `spread` dentro de un operador ternario: si `action.resultados` existe, agrega la propiedad `resultados` al objeto resultante; si no, agrega un objeto vacío (que no aporta nada). Es una forma compacta de decir \"solo actualiza resultados si me pasaron resultados nuevos\"." },
  ],
  siguienteConcepto: "El reducer es puro y no calcula nada por sí mismo — para ver qué calcula los resultados reales, continúa con utils/calcularResultadosColumna.js.",
},

"src/modulos/computos/useComputos.js": {
  lang: "js",
  responsabilidad: "Conectar el reducer con React (useReducer), añadir persistencia de los cálculos guardados (usePersistentState), y exponer funciones con nombres claros (irSiguiente, irAtras, guardarComputo...) para que los componentes de UI no necesiten conocer los detalles de TIPOS_ACCION.",
  code: `import { useReducer } from "react";
import { usePersistentState } from "../../hooks/useProyecto.js";
import { computosReducer, estadoInicial, TIPOS_ACCION } from "./computosReducer.js";
import { validarPaso1, validarPaso2, validarPaso4 } from "./validaciones.js";
import { calcularResultadosColumna } from "./utils/calcularResultadosColumna.js";

export function useComputos() {
  const [state, dispatch] = useReducer(computosReducer, estadoInicial);
  const [guardados, setGuardados] = usePersistentState("computos_guardados", []);

  const validacionPaso1 = validarPaso1(state);
  const validacionPaso2 = validarPaso2(state);
  const validacionPaso4 = validarPaso4(state);

  function irSiguiente() {
    if (state.paso === 1 && !validacionPaso1.valido) return;
    if (state.paso === 2 && !validacionPaso2.valido) return;

    if (state.paso === 2) {
      const resultados = calcularResultadosColumna(state);
      dispatch({ type: TIPOS_ACCION.AVANZAR, resultados });
      return;
    }

    dispatch({ type: TIPOS_ACCION.AVANZAR });
  }

  function irAtras() {
    dispatch({ type: TIPOS_ACCION.RETROCEDER });
  }

  function irAPaso(paso) {
    dispatch({ type: TIPOS_ACCION.IR_A_PASO, paso });
  }

  function guardarComputo() {
    if (!validacionPaso4.valido) return;

    const registro = {
      id: \`calculo-\$\{Date.now()\}\`,
      fecha: new Date().toISOString(),
      proyecto: state.proyecto,
      nivel: state.nivel,
      elemento: state.elemento,
      nombre: state.nombreCalculo,
      geometria: state.geometria,
      resistenciaId: state.resistenciaId,
      refuerzos: state.refuerzos,
      resultados: state.resultados,
      observaciones: state.observaciones,
    };

    setGuardados((prev) => [...(prev || []), registro]);
    dispatch({ type: TIPOS_ACCION.MARCAR_GUARDADO });
  }

  function nuevoCalculo() {
    dispatch({ type: TIPOS_ACCION.RESET });
  }

  return {
    state, dispatch, guardados,
    validacionPaso1, validacionPaso2, validacionPaso4,
    irSiguiente, irAtras, irAPaso, guardarComputo, nuevoCalculo,
  };
}`,
  bloques: [
    { titulo: "useReducer: la versión de React de un reducer", lineas: "8", texto: "`useReducer(reducerFn, estadoInicial)` devuelve `[state, dispatch]`. `state` es el valor actual (de solo lectura); `dispatch(accion)` es la única forma de pedir un cambio — internamente React llama a `computosReducer(state, accion)` y vuelve a renderizar el componente con el nuevo estado devuelto." },
    { titulo: "irSiguiente: dónde ocurre el cálculo real", lineas: "15-26", texto: "Este es el punto de conexión más importante del módulo: cuando el usuario está en el paso 2 y pulsa \"Siguiente\", ANTES de despachar la acción `AVANZAR`, se llama a `calcularResultadosColumna(state)` (una función pura de `utils/`) y su resultado se adjunta como parte de la acción. El reducer nunca calcula nada — solo recibe el resultado ya calculado y lo guarda. Esto mantiene la matemática (`utils/`) separada de la gestión de estado (`computosReducer.js`), que es exactamente el principio arquitectónico pedido: \"la lógica matemática no debe estar dentro del JSX\" ni mezclada con el reducer." },
    { titulo: "guardarComputo: arma un \"snapshot\" completo", lineas: "36-55", texto: "Construye un objeto nuevo (`registro`) que copia los campos relevantes del estado actual del wizard y lo agrega a un array persistido en localStorage bajo la clave `\"computos_guardados\"`. `setGuardados((prev) => [...(prev || []), registro])` usa la forma funcional de actualización de estado — recibe el valor previo y devuelve uno nuevo con el registro añadido al final." },
    { titulo: "Por qué el hook expone funciones con nombre y no dispatch crudo para todo", texto: "Aunque `dispatch` se devuelve (los componentes de paso lo usan para acciones granulares como `SET_GEOMETRIA`), las operaciones más importantes del flujo (`irSiguiente`, `guardarComputo`) se envuelven en funciones con nombre propio porque tienen lógica adicional (validación, cálculo) que no le corresponde al componente de UI decidir." },
  ],
},

"src/modulos/computos/validaciones.js": {
  lang: "js",
  responsabilidad: "Funciones puras que revisan si el estado actual cumple los requisitos mínimos para avanzar de paso. Cada función retorna { valido: boolean, errores: {...} }, nunca lanza excepciones ni modifica nada.",
  code: `export function validarPaso1(state) {
  const errores = {};
  if (!state.elemento) errores.elemento = "Selecciona un elemento";
  if (!state.proyecto) errores.proyecto = "Selecciona un proyecto";
  if (!state.nivel) errores.nivel = "Selecciona un nivel";
  return { valido: Object.keys(errores).length === 0, errores };
}

export function validarPaso2(state) {
  const errores = {};

  if (state.elemento !== "columna") {
    return { valido: true, errores };
  }

  const { largo, ancho, altura, cantidad } = state.geometria;
  if (!(Number(largo) > 0)) errores.largo = "El largo debe ser mayor a 0";
  if (!(Number(ancho) > 0)) errores.ancho = "El ancho debe ser mayor a 0";
  if (!(Number(altura) > 0)) errores.altura = "La altura debe ser mayor a 0";
  if (!(Number(cantidad) >= 1)) errores.cantidad = "La cantidad debe ser al menos 1";

  return { valido: Object.keys(errores).length === 0, errores };
}

export function validarPaso4(state) {
  const errores = {};
  if (!state.nombreCalculo || !state.nombreCalculo.trim()) {
    errores.nombreCalculo = "El nombre del cálculo es obligatorio";
  }
  return { valido: Object.keys(errores).length === 0, errores };
}`,
  bloques: [
    { titulo: "Object.keys(errores).length === 0", texto: "En vez de mantener un booleano `valido` separado que hay que recordar actualizar, esta técnica lo DERIVA del objeto `errores`: si nadie agregó ninguna propiedad de error, el objeto está vacío y por lo tanto es válido. Es imposible que quede desincronizado con los errores reales porque se calcula a partir de ellos." },
    { titulo: "validarPaso2: escape temprano para elementos no soportados", lineas: "12-14", texto: "Si el elemento no es \"columna\" (o sea, es uno de los 7 sin formulario implementado), la validación devuelve `valido: true` inmediatamente sin revisar geometría — tiene sentido, porque esos elementos no tienen campos que validar todavía (solo muestran un aviso de \"próximamente\"), así que no debe bloquearse la navegación." },
    { titulo: "Destructuring de objeto anidado", lineas: "16", texto: "`const { largo, ancho, altura, cantidad } = state.geometria;` extrae 4 propiedades del objeto anidado `state.geometria` en variables sueltas, evitando escribir `state.geometria.largo`, `state.geometria.ancho`... repetidamente." },
  ],
},

"src/modulos/computos/utils/calcularConcreto.js": {
  lang: "js",
  responsabilidad: "Calcular el volumen de concreto necesario para columnas rectangulares, incluyendo el porcentaje de desperdicio.",
  code: `export function calcularConcretoColumna({ largo, ancho, altura, cantidad, desperdicioPct }) {
  const volumenUnitario = largo * ancho * altura;
  const volumenSinDesperdicio = volumenUnitario * cantidad;
  const volumenConDesperdicio = volumenSinDesperdicio * (1 + desperdicioPct / 100);

  return { volumenUnitario, volumenSinDesperdicio, volumenConDesperdicio };
}`,
  bloques: [
    { titulo: "Fórmula real, sin invención", texto: "Volumen de un prisma rectangular = largo × ancho × altura (geometría básica). Se multiplica por la cantidad de columnas iguales, y luego se aplica el desperdicio como un porcentaje extra: multiplicar por `(1 + desperdicioPct/100)` — si el desperdicio es 5, el factor es 1.05, es decir, un 5% más de material del estrictamente necesario, para cubrir mermas de obra." },
    { titulo: "Destructuring como parámetro de función", lineas: "1", texto: "`function calcularConcretoColumna({ largo, ancho, altura, cantidad, desperdicioPct })` extrae directamente las propiedades del objeto que se le pase como argumento único, en vez de recibir 5 parámetros posicionales sueltos. Esto hace que el orden de los argumentos no importe al llamar la función, y que sea autoexplicativo en el punto de llamada: `calcularConcretoColumna({ largo: 0.3, ancho: 0.3, ... })`." },
  ],
},

"src/modulos/computos/utils/calcularEncofrado.js": {
  lang: "js",
  responsabilidad: "Calcular el área de encofrado (la superficie de moldes/tablas de madera o metal que envuelve el concreto mientras fragua) para columnas rectangulares.",
  code: `export function calcularEncofradoColumna({ largo, ancho, altura, cantidad }) {
  const perimetro = 2 * (largo + ancho);
  return perimetro * altura * cantidad;
}`,
  bloques: [
    { titulo: "Fórmula: perímetro × altura × cantidad", texto: "El encofrado envuelve los 4 lados de la columna, no la sección transversal completa (por eso no se usa área = largo×ancho). El perímetro de una sección rectangular es 2×(largo+ancho); multiplicado por la altura da el área total de las 4 caras laterales de UNA columna; multiplicado por la cantidad de columnas da el área total de encofrado necesaria para todo el lote." },
  ],
},

"src/modulos/computos/utils/pesoAcero.data.js": {
  lang: "js",
  responsabilidad: "Tabla de referencia: cuántos kilogramos pesa un metro lineal de barra de acero corrugado, según su diámetro nominal en pulgadas.",
  code: `// Pesos nominales (kg/m) de barras de acero de refuerzo corrugadas,
// según COVENIN 316 / equivalencia ASTM A615 (diámetros nominales en pulgadas).
// No existe una tabla previa en el repo (src/data/*.json están vacíos);
// esta es la única fuente de verdad hasta que se incorpore un catálogo oficial.
export const PESO_ACERO_KG_M = {
  "3/8": 0.559,
  "1/2": 0.994,
  "5/8": 1.552,
  "3/4": 2.235,
  "1": 3.973,
};

export const DIAMETROS_ACERO = Object.keys(PESO_ACERO_KG_M);`,
  bloques: [
    { titulo: "Object.keys(): de objeto a array", lineas: "13", texto: "`Object.keys(PESO_ACERO_KG_M)` devuelve un array con los nombres de las propiedades del objeto: `[\"3/8\", \"1/2\", \"5/8\", \"3/4\", \"1\"]`. Esto evita mantener la lista de diámetros por duplicado en dos sitios — siempre se deriva de las claves reales de la tabla de pesos." },
    { titulo: "Transparencia sobre el origen del dato (comentario)", texto: "El propio comentario documenta explícitamente que esta tabla NO viene de ningún archivo de datos existente en el repo (los JSON de src/data/ están vacíos) y que son valores estándar de la industria documentados aquí mismo como única fuente. Es un buen ejemplo de cómo documentar el origen de un dato \"mágico\" dentro del propio código." },
  ],
},

"src/modulos/computos/utils/calcularAcero.js": {
  lang: "js",
  responsabilidad: "Calcular longitud total y peso de cada configuración de refuerzo (barra longitudinal o estribo) ingresada por el usuario, y sumar el peso total de acero del cómputo.",
  code: `import { PESO_ACERO_KG_M } from "./pesoAcero.data.js";

function calcularLongitudinal(refuerzo, cantidadElementos) {
  const longitudTotal = refuerzo.cantidad * refuerzo.longitudUnitaria * cantidadElementos;
  return { longitudTotal, cantidadPiezas: refuerzo.cantidad * cantidadElementos };
}

function calcularEstribo(refuerzo, cantidadElementos, geometria) {
  const numEstribos = Math.ceil(geometria.altura / refuerzo.separacion) + 1;
  const perimetro = 2 * (geometria.largo + geometria.ancho);
  const cantidadPiezas = numEstribos * cantidadElementos;
  const longitudTotal = cantidadPiezas * perimetro;
  return { longitudTotal, cantidadPiezas };
}

export function calcularAcero(refuerzos, cantidadElementos, geometria) {
  const detalle = refuerzos.map((refuerzo) => {
    const { longitudTotal, cantidadPiezas } =
      refuerzo.tipo === "estribo"
        ? calcularEstribo(refuerzo, cantidadElementos, geometria)
        : calcularLongitudinal(refuerzo, cantidadElementos);

    const pesoKgM = PESO_ACERO_KG_M[refuerzo.diametro] || 0;
    const pesoKg = longitudTotal * pesoKgM;

    return {
      id: refuerzo.id,
      tipo: refuerzo.tipo,
      diametro: refuerzo.diametro,
      cantidadPiezas,
      longitudTotal,
      pesoKg,
    };
  });

  const pesoTotalKg = detalle.reduce((acc, d) => acc + d.pesoKg, 0);

  return { detalle, pesoTotalKg };
}`,
  bloques: [
    { titulo: "Dos fórmulas distintas según el tipo de barra", texto: "Una barra LONGITUDINAL (vertical, corre a lo largo de la columna) es simple: cantidad de barras × longitud de cada una × número de columnas. Un ESTRIBO (anillo horizontal que envuelve las barras longitudinales, cada cierta separación) requiere calcular primero CUÁNTOS estribos caben en la altura de la columna: `Math.ceil(altura / separacion) + 1` — se redondea hacia arriba (`Math.ceil`) porque no puedes poner \"0.7 de un estribo\", y se suma 1 para incluir el estribo del extremo. Luego cada estribo mide el perímetro de la sección (no la altura), porque un estribo es un anillo horizontal." },
    { titulo: ".map(): transformar cada refuerzo en su detalle calculado", lineas: "17-34", texto: "`refuerzos.map((refuerzo) => {...})` recorre el array de refuerzos ingresados por el usuario y devuelve un array NUEVO con un objeto de resultado por cada uno (mismo número de elementos, pero transformados). `map` nunca modifica el array original — es el patrón central para \"transformar una lista en otra lista\" en JavaScript funcional." },
    { titulo: "Operador ternario para elegir la fórmula correcta", lineas: "18-21", texto: "`refuerzo.tipo === \"estribo\" ? calcularEstribo(...) : calcularLongitudinal(...)` — según el campo `tipo` de cada refuerzo, se llama a una función u otra, y el resultado (desestructurado con `{ longitudTotal, cantidadPiezas }`) se usa igual sin importar cuál función lo generó." },
    { titulo: ".reduce(): sumar todo el detalle en un solo número", lineas: "36", texto: "`detalle.reduce((acc, d) => acc + d.pesoKg, 0)` recorre el array `detalle` acumulando una suma: empieza en `0` (segundo argumento de reduce) y en cada paso suma `d.pesoKg` al acumulador `acc`. Al terminar, `pesoTotalKg` es la suma de todos los pesos individuales — el peso total de acero del cómputo completo." },
  ],
},

"src/modulos/computos/utils/calcularResultadosColumna.js": {
  lang: "js",
  responsabilidad: "El orquestador: la única función de utils/ que useComputos.js llama directamente. Convierte los strings del formulario a números, y llama a las 3 funciones de cálculo (concreto, acero, encofrado) para armar el objeto final de resultados.",
  code: `import { calcularConcretoColumna } from "./calcularConcreto.js";
import { calcularAcero } from "./calcularAcero.js";
import { calcularEncofradoColumna } from "./calcularEncofrado.js";

export function calcularResultadosColumna(state) {
  const geometria = {
    largo: Number(state.geometria.largo) || 0,
    ancho: Number(state.geometria.ancho) || 0,
    altura: Number(state.geometria.altura) || 0,
    cantidad: Number(state.geometria.cantidad) || 0,
  };
  const desperdicioPct = Number(state.desperdicioConcreto) || 0;

  const concreto = calcularConcretoColumna({ ...geometria, desperdicioPct });
  const acero = calcularAcero(state.refuerzos, geometria.cantidad, geometria);
  const encofradoM2 = calcularEncofradoColumna(geometria);

  return {
    volumenUnitarioM3: concreto.volumenUnitario,
    concretoM3: concreto.volumenConDesperdicio,
    cantidadElementos: geometria.cantidad,
    aceroKg: acero.pesoTotalKg,
    aceroDetalle: acero.detalle,
    encofradoM2,
    desperdicioPct,
  };
}`,
  bloques: [
    { titulo: "Por qué convertir a Number aquí y no antes", texto: "Los inputs de formulario en React siempre entregan strings en `e.target.value`, incluso para `<input type=\"number\">`. El estado del wizard (`state.geometria.largo`) guarda esos strings tal cual (por ejemplo `\"0.30\"`). Recién en este punto, justo antes de calcular, se convierten a números reales con `Number(...)`. El `|| 0` es un fallback: si `Number(\"\")` da `NaN` o el campo está vacío, se usa `0` en vez de propagar un `NaN` que rompería silenciosamente todos los cálculos siguientes." },
    { titulo: "Un solo punto de entrada para 3 cálculos independientes", texto: "Este archivo no calcula nada por sí mismo — delega en las 3 funciones especializadas y simplemente arma el objeto de resultado final combinando lo que cada una devuelve. Este patrón (una función \"orquestadora\" que junta varias funciones puras más pequeñas) facilita agregar un cálculo nuevo (por ejemplo, para otro elemento en el futuro) sin tocar las funciones existentes." },
  ],
  siguienteConcepto: "Este es el mismo objeto que consume Paso3Resultados.jsx para pintar las tarjetas KPI y la tabla de acero.",
},

"src/modulos/computos/pasos/StepperComputos.jsx": {
  lang: "jsx",
  responsabilidad: "Componente puramente visual: dibuja el indicador de 4 pasos, resaltando el paso actual. No contiene ninguna lógica de negocio — solo recibe el número de paso actual como prop y calcula clases CSS.",
  code: `import { PASOS } from "../computos.data.js";

export function StepperComputos({ paso, mobile, onIrAPaso }) {
  if (mobile) {
    return (
      <div className="mobile-stepper">
        {PASOS.map((p) => (
          <div
            key={p.num}
            className={\`mobile-step \$\{p.num < paso ? "done" : ""\} \$\{p.num === paso ? "active" : ""\}\`}
          >
            <div className="mobile-step-num">{p.num}</div>
            <div className="mobile-step-label">{p.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="stepper-sidebar">
      <div className="stepper-sidebar-title">1. Cómputos Métricos</div>
      {PASOS.map((p) => (
        <div
          key={p.num}
          className={\`stepper-step \$\{p.num === paso ? "active" : ""\}\`}
          onClick={() => p.num < paso && onIrAPaso?.(p.num)}
        >
          <div className="step-num">{p.num}</div>
          <div className="step-info">
            <strong>{p.label}</strong>
            <small>{p.sub}</small>
          </div>
        </div>
      ))}
    </div>
  );
}`,
  bloques: [
    { titulo: "Template literals para construir className dinámico", lineas: "10, 26", texto: "\\`mobile-step \\${p.num < paso ? \"done\" : \"\"} \\${p.num === paso ? \"active\" : \"\"}\\` construye un string combinando texto fijo y expresiones entre \\${...}. El resultado es una lista de clases CSS separadas por espacio, donde \"done\" y \"active\" se agregan condicionalmente según la posición relativa del paso." },
    { titulo: ".map() con key: renderizar listas en React", lineas: "7, 23", texto: "`PASOS.map((p) => <div key={p.num}>...)` es el patrón estándar de React para convertir un array de datos en una lista de elementos JSX. La prop `key` (aquí `p.num`) es OBLIGATORIA y debe ser única entre hermanos — React la usa internamente para saber qué elemento cambió, se agregó o se eliminó entre renders, sin tener que comparar todo el árbol." },
    { titulo: "onClick con optional chaining: navegación opcional", lineas: "27", texto: "`onClick={() => p.num < paso && onIrAPaso?.(p.num)}` solo ejecuta algo si `p.num < paso` es verdadero (o sea, clicar un paso YA completado) Y si la función `onIrAPaso` fue proporcionada (el `?.` evita un error si no se pasó esa prop, como ocurre en la versión `mobile`, que no la recibe)." },
  ],
},

"src/modulos/computos/pasos/Paso3Resultados.jsx": {
  lang: "jsx",
  responsabilidad: "Mostrar el objeto de resultados calculado por calcularResultadosColumna: tarjetas KPI (concreto, elementos, acero, encofrado), tabla de detalle de acero, y la fila de volumen unitario/total.",
  codeNota: "Ver el árbol de archivos interactivo para el código completo — se omite aquí por espacio; usa las funciones de utils/ ya documentadas arriba como referencia de qué datos recibe.",
  bloques: [
    { titulo: "Guard clause: ¿qué pasa si no hay resultados todavía?", texto: "El componente empieza comprobando `if (!resultados) return (<div className=\"est-empty\">...)` — un mensaje pidiendo volver al paso anterior. Esto evita que el componente intente leer `resultados.concretoM3` cuando `resultados` es `null` (lo que causaría un error \"Cannot read property of null\")." },
    { titulo: "toFixed(): formatear números para mostrar", texto: "Todos los números calculados (que pueden tener muchos decimales, como `3.4020000000000006` por errores de precisión de punto flotante en JS) se muestran con `.toFixed(2)` o `.toFixed(1)`, que redondean a un número fijo de decimales y devuelven un string listo para mostrar." },
  ],
},

  }, // fin archivos

  /* ───────────────────────────────────────────────────────────
     MÓDULOS DE NEGOCIO — resumen estructurado de cada uno
  ─────────────────────────────────────────────────────────── */
  modulos: {
    computos: {
      nombre: "Cómputos Métricos",
      color: "green",
      esCasoDeEstudio: true,
      proposito: "Calcular cantidades de obra (concreto, acero, encofrado) a partir de la geometría de un elemento estructural, mediante un asistente guiado de 4 pasos.",
      entrada: "Tipo de elemento, proyecto, nivel, geometría (largo/ancho/altura/cantidad), resistencia de concreto, % de desperdicio, y una colección editable de configuraciones de acero de refuerzo.",
      estado: "useReducer con un objeto de estado compuesto (paso actual + todos los datos del formulario + resultados calculados + estado de guardado). Ver computosReducer.js.",
      componentes: ["ModuloComputos (index.jsx, orquestador)", "StepperComputos", "Paso1Elemento", "Paso2Dimensiones", "SelectorAcero", "Paso3Resultados", "Paso4Guardar"],
      hooks: ["useComputos (propio del módulo)", "usePersistentState (reutilizado de hooks/useProyecto.js)"],
      logica: ["utils/calcularConcreto.js", "utils/calcularAcero.js", "utils/calcularEncofrado.js", "utils/calcularResultadosColumna.js (orquestador)", "validaciones.js"],
      datos: ["computos.data.js (ELEMENTOS, PASOS, ELEMENTOS_DISPONIBLES, catálogos)", "utils/pesoAcero.data.js"],
      salida: "Objeto de resultados con volumen de concreto (unitario y con desperdicio), peso total de acero + detalle por barra, área de encofrado; y opcionalmente, un registro persistido en localStorage bajo la clave computos_guardados.",
      flujoUsuario: [
        "1. El usuario elige un tipo de elemento (8 disponibles, pero solo Columna tiene formulario real), proyecto y nivel.",
        "2. Si eligió Columna: ingresa geometría, resistencia de concreto, % de desperdicio, y agrega/edita/elimina configuraciones de acero (barras longitudinales y estribos).",
        "3. Al pulsar Siguiente desde el paso 2, se calculan los resultados (utils/calcularResultadosColumna.js) y se muestran agrupados: tarjetas KPI + tabla de detalle de acero.",
        "4. El usuario nombra el cálculo, opcionalmente añade observaciones, y lo guarda — persistiendo un snapshot completo en localStorage.",
      ],
      archivosInvolucrados: [
        "src/modulos/computos/index.jsx", "src/modulos/computos/useComputos.js", "src/modulos/computos/computosReducer.js",
        "src/modulos/computos/validaciones.js", "src/modulos/computos/computos.data.js",
        "src/modulos/computos/pasos/StepperComputos.jsx", "src/modulos/computos/pasos/Paso1Elemento.jsx",
        "src/modulos/computos/pasos/Paso2Dimensiones.jsx", "src/modulos/computos/pasos/SelectorAcero.jsx",
        "src/modulos/computos/pasos/Paso3Resultados.jsx", "src/modulos/computos/pasos/Paso4Guardar.jsx",
        "src/modulos/computos/utils/calcularConcreto.js", "src/modulos/computos/utils/calcularAcero.js",
        "src/modulos/computos/utils/calcularEncofrado.js", "src/modulos/computos/utils/calcularResultadosColumna.js",
        "src/modulos/computos/utils/pesoAcero.data.js",
      ],
      nota: "Único módulo del proyecto con arquitectura de \"wizard\" real (useReducer + subcarpeta pasos/ + subcarpeta utils/). Los demás módulos usan un patrón más simple: index.jsx + use<Nombre>.js + <nombre>.data.js con useState planos.",
    },

    concreto: {
      nombre: "Dosificación de Concreto",
      color: "orange",
      proposito: "Calcular cantidades de cemento, arena, piedra y agua necesarias para un volumen de concreto dado, según la resistencia (f'c) elegida.",
      entrada: "Volumen de concreto requerido (m³), proyecto, nivel/elemento, y selección de una de 3 dosificaciones predefinidas (f'c 150/180/210).",
      estado: "useState planos en useConcreto.js: dosifId, volumen, proyecto, nivel, calculado (booleano que decide si se muestran resultados o guiones).",
      logica: "El cálculo vive directamente en useConcreto.js (no tiene carpeta utils/ separada): multiplica los ratios de la dosificación elegida (de concreto.data.js) por el volumen ingresado.",
      datos: "concreto.data.js exporta DOSIFICACIONES: 3 mezclas con ratio cemento:arena:piedra y consumo de agua por m³.",
      archivosInvolucrados: ["src/modulos/concreto/index.jsx", "src/modulos/concreto/useConcreto.js", "src/modulos/concreto/concreto.data.js"],
      nota: "Documentado según la lógica real encontrada en el código — no se inventan fórmulas de dosificación adicionales a las presentes en concreto.data.js.",
    },

    biblioteca: {
      nombre: "Biblioteca de Materiales",
      color: "purple",
      proposito: "Consultar información técnica de referencia (propiedades físicas, presentaciones comerciales, usos, normas aplicables) de materiales de construcción comunes.",
      entrada: "Texto de búsqueda (filtra por nombre) y selección de un material de la lista.",
      estado: "useState planos en useBiblioteca.js: busqueda (string) y materialActivo (objeto del material seleccionado o null).",
      logica: "Filtrado simple con .filter()/.includes() sobre el catálogo — no hay cálculos numéricos en este módulo.",
      datos: "biblioteca.data.js exporta CATEGORIAS_MATERIALES: 3 categorías (Estructurales, Áridos, Acabados) con 10 materiales en total, cada uno con propiedades, presentaciones, usos y normas COVENIN reales.",
      archivosInvolucrados: ["src/modulos/biblioteca/index.jsx", "src/modulos/biblioteca/useBiblioteca.js", "src/modulos/biblioteca/biblioteca.data.js"],
      nota: "Es un módulo de consulta, no de cálculo — su 'salida' es visual (ficha técnica), no un resultado numérico.",
    },

    estimacion: {
      nombre: "Estimación de Materiales",
      color: "blue",
      proposito: "Calcular materiales necesarios para actividades de acabado (pintura, cerámica, repello/friso, enchape) según rendimientos por unidad de área.",
      entrada: "Actividad seleccionada (determina qué campos dinámicos se muestran) y sus valores específicos (área, número de manos, tipo de material, etc. — varían por actividad).",
      estado: "useState planos en useEstimacion.js: actividadId y campos (objeto dinámico cuyas claves dependen de la actividad elegida).",
      logica: "Peculiaridad de este módulo: la función de cálculo (calcular(campos)) vive EMBEBIDA dentro de cada entrada de ACTIVIDADES_ESTIMACION en estimacion.data.js, no en un archivo utils/ separado — cada actividad trae su propia fórmula junto a sus campos.",
      datos: "estimacion.data.js exporta ACTIVIDADES_ESTIMACION: 4 actividades, cada una con su definición de formulario dinámico (campos) y su función calcular.",
      archivosInvolucrados: ["src/modulos/estimacion/index.jsx", "src/modulos/estimacion/useEstimacion.js", "src/modulos/estimacion/estimacion.data.js"],
      nota: "Único módulo donde la lógica de cálculo vive dentro del archivo de datos en vez de en un archivo separado — útil para contrastar con el patrón de Cómputos (utils/ separado).",
    },

    proyectos: { nombre: "Proyectos", color: "green", proposito: "Listar proyectos con progreso, en una grilla de tarjetas.", entrada: "Ninguna (solo lectura de datos mock).", estado: "Sin hook propio — el componente calcula estadísticas (cuántos en progreso/completados) en línea, directamente en el render.", datos: "proyectos.data.js exporta PROYECTOS: 3 proyectos de ejemplo con nombre, porcentaje de avance y color.", archivosInvolucrados: ["src/modulos/proyectos/index.jsx", "src/modulos/proyectos/proyectos.data.js"], nota: "El botón 'Nuevo proyecto' no tiene funcionalidad real conectada todavía — es un módulo mayormente de presentación." },

    historial: { nombre: "Historial de Cálculos", color: "neutral", proposito: "Mostrar un listado filtrable y paginado de cálculos previos (mock).", entrada: "Filtros de búsqueda/tipo, número de página.", datos: "historial.data.js exporta DOS arrays deliberadamente separados: HISTORIAL_DESKTOP y HISTORIAL_MOBILE — el propio comentario del archivo indica 'no fusionar', son catálogos independientes con datos casi idénticos.", archivosInvolucrados: ["src/modulos/historial/index.jsx", "src/modulos/historial/MobileHistorial.jsx", "src/modulos/historial/historial.data.js"], nota: "No está conectado al módulo de Cómputos: los cálculos guardados ahí (computos_guardados en localStorage) NO aparecen en este historial — son dos sistemas de datos independientes hoy." },

    reportes: { nombre: "Reportes", color: "neutral", proposito: "Panel de estadísticas y exportación (visual).", datos: "reportes.data.js exporta EXPORTS_LIST (desktop) y REPORTES_MOBILE (mobile) — de nuevo, catálogos independientes según comentario del propio archivo.", archivosInvolucrados: ["src/modulos/reportes/index.jsx", "src/modulos/reportes/MobileReportes.jsx", "src/modulos/reportes/reportes.data.js"], nota: "Las estadísticas mostradas (ej. '42 cálculos') están hardcodeadas directamente en el JSX del componente, no vienen de reportes.data.js ni de ninguna fuente calculada — son números de ejemplo fijos." },

    configuracion: { nombre: "Configuración", color: "neutral", proposito: "Ajustar tema, tamaño de fuente, idioma y gestionar datos locales (ver uso de almacenamiento, restablecer todo).", estado: "Recibe settings y onSettingsChange como props desde App.jsx (no tiene su propio hook de persistencia — reutiliza useSettings ya conectado en App).", archivosInvolucrados: ["src/modulos/configuracion/index.jsx", "src/modulos/configuracion/MobileConfiguracion.jsx", "src/modulos/configuracion/useConfiguracion.js", "src/modulos/configuracion/configuracion.data.js"] },

    ayuda: { nombre: "Ayuda", color: "neutral", proposito: "Centro de ayuda con FAQ, categorías y canales de soporte.", archivosInvolucrados: ["src/modulos/ayuda/index.jsx", "src/modulos/ayuda/useAyuda.js", "src/modulos/ayuda/ayuda.data.js"] },

    normas: { nombre: "Normas COVENIN", color: "neutral", proposito: "Consultar documentos normativos venezolanos (COVENIN) reales referenciados por nombre.", archivosInvolucrados: ["src/modulos/normas/index.jsx", "src/modulos/normas/useNormas.js", "src/modulos/normas/normas.data.js"] },
  },

  /* ───────────────────────────────────────────────────────────
     TECNOLOGÍAS — explicadas desde cero, con ejemplos reales
  ─────────────────────────────────────────────────────────── */
  tecnologias: {
    javascript: {
      titulo: "JavaScript",
      resumen: "El lenguaje de programación en el que está escrito TODO el código de CivCalPro (incluyendo React, que es 'solo' una librería de JavaScript).",
      temas: [
        { titulo: "Variables: let, const", texto: "`const` declara una variable que NUNCA se reasigna (aunque si es un objeto/array, su CONTENIDO sí puede cambiar). `let` declara una variable que sí puede reasignarse. CivCalPro usa `const` para casi todo — busca en cualquier archivo del proyecto y verás que `let` aparece muy poco (un ejemplo real: `let contadorRefuerzo = 0;` en computosReducer.js, porque ese valor SÍ se reasigna con `contadorRefuerzo += 1`)." },
        { titulo: "Funciones flecha (arrow functions)", texto: "`const suma = (a, b) => a + b;` es la forma corta de escribir una función. CivCalPro las usa constantemente para callbacks: `onClick={() => setElemento(el.id)}` en Paso1Elemento.jsx es una arrow function que se ejecuta cuando el usuario hace clic." },
        { titulo: "Objetos y arrays", texto: "Un objeto `{ largo: \"0.30\", ancho: \"0.30\" }` agrupa datos con nombre (como `estadoInicial.geometria` en computosReducer.js). Un array `[\"3/8\", \"1/2\", \"5/8\"]` es una lista ordenada (como `DIAMETROS_ACERO` en pesoAcero.data.js)." },
        { titulo: "Destructuring", texto: "Extraer valores de objetos/arrays directamente en variables: `const { largo, ancho, altura } = state.geometria;` (visto en validaciones.js) es mucho más corto que escribir `state.geometria.largo` tres veces." },
        { titulo: "Spread (...)", texto: "`{ ...state, paso: 2 }` copia todas las propiedades de `state` en un objeto nuevo y sobreescribe `paso`. Es la base de la inmutabilidad en computosReducer.js — nunca se modifica el objeto original, siempre se crea uno nuevo." },
        { titulo: "map, filter, reduce", texto: "Los 3 métodos de array más usados en el proyecto: `.map()` transforma cada elemento (usado en TODOS los módulos para renderizar listas, ej. `ELEMENTOS.map(el => <button>...)`); `.filter()` selecciona un subconjunto (usado en useBiblioteca.js para la búsqueda); `.reduce()` acumula un solo valor a partir de una lista (usado en calcularAcero.js para sumar el peso total)." },
        { titulo: "Módulos ES (import/export)", texto: "Cada archivo `.js`/`.jsx` es un 'módulo': declara qué exporta (`export function calcularAcero(...)`) y qué importa de otros archivos (`import { PESO_ACERO_KG_M } from \"./pesoAcero.data.js\"`). Esto es lo que permite dividir el código en ~50 archivos pequeños en vez de uno gigante." },
        { titulo: "Template literals", texto: "Strings con backticks que permiten interpolar variables: \\`refuerzo-\\${Date.now()}-\\${contadorRefuerzo}\\` (visto en computosReducer.js) construye un string combinando texto fijo con el resultado de expresiones." },
        { titulo: "Optional chaining (?.) y nullish coalescing (??)", texto: "`window.matchMedia?.(query)?.matches ?? false` (useSync.js): el `?.` evita errores si algo en la cadena es `null`/`undefined`; el `??` da un valor por defecto solo si el resultado es exactamente `null`/`undefined`." },
      ],
    },
    react: {
      titulo: "React",
      resumen: "La librería que CivCalPro usa para construir la interfaz de usuario de forma declarativa: en vez de decirle al navegador paso a paso cómo cambiar el DOM, describes CÓMO se debe ver la UI para un estado dado, y React se encarga de aplicar los cambios necesarios.",
      temas: [
        { titulo: "Componentes", texto: "Una función que devuelve JSX (una descripción de UI) es un componente. `export default function ModuloComputos({ mobile, onBack }) {...}` es un componente — recibe props y devuelve lo que se debe mostrar." },
        { titulo: "Props", texto: "Los 'argumentos' de un componente. `<StepperComputos paso={state.paso} mobile onIrAPaso={irAPaso} />` le pasa 3 props al componente StepperComputos: paso, mobile (shorthand de mobile={true}) y onIrAPaso (una función)." },
        { titulo: "Estado (useState)", texto: "`const [busqueda, setBusqueda] = useState(\"\")` (useBiblioteca.js) crea una variable de estado que, al cambiar con `setBusqueda(...)`, provoca que React vuelva a ejecutar el componente y actualice la UI." },
        { titulo: "useEffect", texto: "Ejecuta código DESPUÉS de que React actualiza el DOM, en respuesta a cambios en ciertas variables (su 'array de dependencias'). Ejemplo real en App.jsx: cada vez que cambian settings.fontSize o settings.language, se actualiza una CSS variable global." },
        { titulo: "useReducer", texto: "Alternativa a useState para estado complejo con muchas formas de actualizarse. Ver computosReducer.js — es EL ejemplo de referencia de este concepto en todo el proyecto." },
        { titulo: "Hooks personalizados", texto: "Funciones que empiezan con 'use' y usan otros hooks internamente. usePersistentState, useTheme, useComputos son todos hooks personalizados de este proyecto." },
        { titulo: "Renderizado condicional", texto: "Mostrar JSX distinto según una condición. El patrón MÁS repetido en CivCalPro: `if (activeModule === \"computos\") return <ModuloComputos/>;` en App.jsx, o `{!resultados ? <Vacio/> : <Resultados/>}` en Paso3Resultados.jsx." },
        { titulo: "Listas y keys", texto: "`array.map(item => <div key={item.id}>...)` — la prop key ayuda a React a identificar qué elementos cambiaron entre renders." },
        { titulo: "Composición", texto: "Construir componentes grandes combinando componentes pequeños. ModuloComputos (index.jsx) no dibuja el formulario directamente — delega en Paso1Elemento, Paso2Dimensiones, etc., cada uno responsable de su propia parte." },
        { titulo: "Flujo de datos: unidireccional, de arriba hacia abajo", texto: "Los datos (props) fluyen del componente padre al hijo. Para que un hijo pueda 'avisar' al padre, el padre le pasa una FUNCIÓN como prop (ej. dispatch, onIrAPaso) que el hijo llama — nunca al revés." },
        { titulo: "Re-renderizado", texto: "Cuando cambia un estado (useState o useReducer), React vuelve a ejecutar la función del componente completa para calcular el nuevo JSX, y actualiza solo las partes del DOM real que cambiaron." },
        { titulo: "Eventos", texto: "onClick, onChange, onSubmit... son props especiales que reciben una función a ejecutar cuando ocurre el evento. `onChange={(e) => setBusqueda(e.target.value)}` — 'e' es el objeto de evento; e.target.value es el valor actual del input." },
      ],
    },
    vite: {
      titulo: "Vite",
      resumen: "La herramienta de build y servidor de desarrollo de CivCalPro (reemplaza a herramientas más antiguas como Create React App/Webpack). Su nombre es 'rápido' en francés.",
      temas: [
        { titulo: "Servidor de desarrollo (npm run dev)", texto: "Levanta un servidor local que sirve los archivos y actualiza el navegador automáticamente cuando guardas un cambio (Hot Module Replacement) — sin recargar toda la página, React reemplaza solo el componente que cambió." },
        { titulo: "Build (npm run build)", texto: "Empaqueta todo el proyecto (JS + CSS + assets) en archivos optimizados para producción dentro de la carpeta dist/ — minificados, con nombres de archivo únicos por contenido (hashing) para cache busting." },
        { titulo: "index.html como punto de partida", texto: "A diferencia de un servidor tradicional, Vite empieza desde index.html, que contiene `<div id=\"root\"></div>` y `<script type=\"module\" src=\"/src/main.jsx\">`. Vite procesa ese script y todo lo que importa." },
        { titulo: "src/main.jsx", texto: "El primer archivo JS ejecutado. Ver la documentación completa de este archivo en la sección de Archivos." },
        { titulo: "Resolución de imports", texto: "Cuando escribes `import App from './App.jsx'`, Vite resuelve esa ruta relativa al archivo que hace el import, y sabe cómo procesar JSX gracias al plugin @vitejs/plugin-react (visible en vite.config.js)." },
        { titulo: "Assets", texto: "`import columnaImg from \"../../assets/img/columna.png\"` (computos.data.js) — Vite trata las imágenes importadas como módulos: en desarrollo sirve la ruta real, en build las copia a dist/assets/ con un nombre hasheado y reemplaza el import por esa ruta final." },
      ],
    },
    css: {
      titulo: "CSS",
      resumen: "CivCalPro tiene ~3940 líneas de CSS repartidas en 23 archivos, organizados en una jerarquía deliberada: variables → globales → layout → utilidades → componentes reutilizables → estilos por módulo.",
      temas: [
        { titulo: "Cascada", texto: "El orden de los `<link>`/imports importa: reglas definidas después pueden sobreescribir reglas anteriores con la misma especificidad. Por eso main.jsx importa los CSS en un orden específico (ver la documentación de ese archivo)." },
        { titulo: "Especificidad", texto: "Un selector de clase (`.btn`) es más específico que una etiqueta (`button`), y un ID más específico que una clase. CivCalPro usa casi exclusivamente clases (BEM-like: `.conc-res-cell`, `.acero-item-actions`), evitando IDs para estilos." },
        { titulo: "Variables CSS (custom properties)", texto: "`:root { --green: #1DB954; }` define una variable reutilizable en cualquier parte del CSS con `var(--green)`. Ver variables.css — es el archivo de 'design tokens' del proyecto: todos los colores, radios de borde y sombras se definen ahí una sola vez." },
        { titulo: "Responsive design y media queries", texto: "`@media (max-width: 768px) { .sidebar { display: none; } }` (layout.css) aplica reglas solo cuando el ancho de pantalla cumple la condición. Es el mecanismo por el que la misma app se ve distinta en desktop y mobile, sin JavaScript." },
        { titulo: "Arquitectura modular", texto: "Cada módulo de negocio tiene su propio archivo CSS (modules/computos.css, modules/concreto.css...) que solo contiene clases con el prefijo de ese módulo (comp-*, conc-*, bib-*, est-*, proy-*), evitando colisiones de nombres entre módulos." },
        { titulo: "Tokens visuales", texto: "Además de colores, variables.css define --radius-sm/md/lg (bordes redondeados) y --shadow-sm/md (sombras) — reutilizados consistentemente en vez de valores sueltos por componente." },
        { titulo: "Modo oscuro", texto: "La clase `.dark-theme` en el elemento raíz (aplicada por App.jsx cuando darkMode es true) redefine las MISMAS variables CSS con otros valores (`.dark-theme { --bg: #0F172A; --text-main: #E2E8F0; ...}`). Como el resto del CSS usa `var(--bg)` en vez de colores fijos, todo el tema cambia automáticamente sin duplicar reglas." },
      ],
    },
    nodenpm: {
      titulo: "Node.js y npm",
      resumen: "Node.js es el entorno que ejecuta JavaScript FUERA del navegador (necesario para correr Vite, instalar paquetes, etc.). npm es el gestor de paquetes que viene con Node.",
      temas: [
        { titulo: "package.json", texto: "El archivo de configuración raíz del proyecto: nombre, versión, scripts ejecutables, y las dos listas de dependencias (dependencies: se necesitan en producción; devDependencies: solo durante desarrollo/build)." },
        { titulo: "Dependencias reales de CivCalPro", texto: "Solo 2 dependencias de runtime: react y react-dom (^19.2.6). Sin librerías de routing, sin gestor de estado externo, sin cliente HTTP — todo lo demás (~8 devDependencies) es tooling de desarrollo (Vite, ESLint y sus plugins)." },
        { titulo: "Scripts", texto: "`npm run dev` → `vite` (servidor de desarrollo). `npm run build` → `vite build` (genera dist/). `npm run lint` → `eslint .` (revisa el código en busca de errores de estilo/patrones peligrosos). `npm run preview` → `vite preview` (sirve el build de producción localmente para probarlo)." },
        { titulo: "node_modules", texto: "Carpeta (no versionada en git) donde npm descarga físicamente el código de todas las dependencias y sus propias dependencias transitivas. Se recrea con npm install a partir de package.json + package-lock.json." },
        { titulo: "npm install", texto: "Lee package.json, descarga todas las dependencias listadas (y las de sus dependencias) y las coloca en node_modules/, fijando versiones exactas en package-lock.json para builds reproducibles." },
      ],
    },
  },

  /* ───────────────────────────────────────────────────────────
     RUTA DE APRENDIZAJE — 12 etapas progresivas
  ─────────────────────────────────────────────────────────── */
  rutaAprendizaje: [
    { etapa: 1, titulo: "HTML, CSS y JavaScript básico", aprender: "Cómo un navegador convierte HTML+CSS+JS en una página interactiva.", archivos: ["index.html", "src/index.css"], observar: "index.html solo tiene un <div id=\"root\">; todo lo demás lo genera JS.", ejercicio: "Abre index.html en el navegador con las devtools abiertas y localiza el nodo <div id=\"root\"> antes y después de que React lo llene.", pregunta: "¿Por qué el HTML inicial está casi vacío?" },
    { etapa: 2, titulo: "Módulos JavaScript (import/export)", aprender: "Cómo se dividen ~50 archivos y se conectan entre sí.", archivos: ["src/hooks/useUser.js", "src/hooks/useSettings.js"], observar: "Ambos archivos importan el mismo usePersistentState de useProyecto.js.", ejercicio: "Dibuja a mano el grafo de imports de los 5 archivos en src/hooks/.", pregunta: "¿Qué pasaría si borraras el export de usePersistentState?" },
    { etapa: 3, titulo: "React y componentes", aprender: "Qué es JSX y cómo un componente describe UI.", archivos: ["src/components/common/Icon.jsx", "src/modulos/computos/pasos/StepperComputos.jsx"], observar: "StepperComputos no tiene estado propio — solo recibe props y calcula className.", ejercicio: "Cambia manualmente la prop paso en React DevTools y observa qué clase CSS cambia.", pregunta: "¿Por qué StepperComputos no necesita useState?" },
    { etapa: 4, titulo: "Estado y eventos", aprender: "useState y cómo los eventos disparan actualizaciones.", archivos: ["src/modulos/biblioteca/useBiblioteca.js"], observar: "setBusqueda(e.target.value) en cada tecla presionada.", ejercicio: "Agrega un console.log dentro de useBiblioteca cada vez que cambia busqueda.", pregunta: "¿Cuántas veces se re-renderiza el componente al escribir 'acero' letra por letra?" },
    { etapa: 5, titulo: "Hooks (useEffect, useReducer, hooks personalizados)", aprender: "Cómo useReducer maneja estado complejo y useEffect sincroniza con el mundo exterior.", archivos: ["src/modulos/computos/computosReducer.js", "src/hooks/useSync.js"], observar: "Cada acción del reducer que cambia datos también pone resultados: null.", ejercicio: "Traza a mano qué pasa en el estado al despachar SET_GEOMETRIA seguido de AVANZAR.", pregunta: "¿Por qué el reducer nunca llama a calcularResultadosColumna directamente?" },
    { etapa: 6, titulo: "Arquitectura de CivCalPro", aprender: "Cómo App.jsx actúa como router manual y por qué se organiza por módulos.", archivos: ["src/App.jsx"], observar: "renderDesktopPage y renderMobilePage son cadenas de if, no un switch ni una librería de routing.", ejercicio: "Agrega mentalmente un módulo nuevo 'inventario' — enumera todos los archivos que tendrías que tocar en App.jsx.", pregunta: "¿Qué reemplazaría activeModule si se instalara React Router?" },
    { etapa: 7, titulo: "Vite y proceso de desarrollo", aprender: "Qué hace vite, cómo arranca la app y cómo se construye para producción.", archivos: ["vite.config.js", "src/main.jsx"], observar: "El orden de los 21 imports de CSS en main.jsx.", ejercicio: "Corre npm run build y localiza los archivos generados en dist/assets/.", pregunta: "¿Por qué los nombres de archivo en dist/ tienen un hash aleatorio?" },
    { etapa: 8, titulo: "Sistema CSS", aprender: "Variables CSS, cascada y cómo funciona el modo oscuro sin duplicar reglas.", archivos: ["src/modulos/styles/variables.css", "src/modulos/styles/layout.css"], observar: ".dark-theme redefine las mismas variables con otros valores.", ejercicio: "Cambia --green en variables.css y observa cuántos módulos distintos cambian de color.", pregunta: "¿Qué pasaría si un componente usara un color fijo (#1DB954) en vez de var(--green)?" },
    { etapa: 9, titulo: "Lógica de negocio (utils/)", aprender: "Cómo mantener el cálculo separado de la UI.", archivos: ["src/modulos/computos/utils/calcularAcero.js", "src/modulos/computos/utils/calcularResultadosColumna.js"], observar: "Ninguna función en utils/ importa React ni toca el DOM.", ejercicio: "Copia calcularAcero.js a un archivo suelto y pruébalo con console.log sin ejecutar la app.", pregunta: "¿Por qué esto es posible aquí y no lo sería si el cálculo estuviera dentro del JSX?" },
    { etapa: 10, titulo: "Cómputos Métricos (caso de estudio completo)", aprender: "Todo el flujo de punta a punta: selección → geometría → acero → cálculo → guardado.", archivos: ["Los 16 archivos de src/modulos/computos/"], observar: "irSiguiente() en useComputos.js es el único lugar donde se conectan el reducer y las funciones de cálculo.", ejercicio: "Sigue el flujo completo en la app real (npm run dev) mientras tienes abierto useComputos.js, y marca con el dedo cada línea que se ejecuta en cada clic.", pregunta: "¿Qué cambiarías para que Viga también tuviera un formulario real?" },
    { etapa: 11, titulo: "Persistencia e historial", aprender: "Cómo localStorage guarda datos entre sesiones, y por qué el historial de Cómputos no aparece en el módulo Historial.", archivos: ["src/hooks/useProyecto.js", "src/modulos/historial/historial.data.js"], observar: "computos_guardados vive en localStorage; HISTORIAL_DESKTOP es un array hardcodeado sin relación con ese localStorage.", ejercicio: "Abre las DevTools → Application → Local Storage y busca la clave computos_guardados después de guardar un cómputo.", pregunta: "¿Cómo conectarías ambos sistemas si quisieras que los cómputos guardados aparecieran en el Historial?" },
    { etapa: 12, titulo: "Refactorización y escalabilidad", aprender: "Cómo CivCalPro pasó de un App.jsx monolítico a una arquitectura modular, y qué patrones seguir para agregar el siguiente módulo.", archivos: ["Comparar cualquier modulos/*/index.jsx entre sí"], observar: "Todos los módulos comparten el patrón page > page-greeting > modulo-card, pero solo Cómputos tiene subcarpetas pasos/ y utils/.", ejercicio: "Diseña en papel cómo lucirían los archivos de un futuro módulo 'Presupuestos', siguiendo el patrón de Cómputos si es complejo, o el patrón simple de Concreto si no.", pregunta: "¿Cuándo se justifica usar useReducer + subcarpetas vs. useState simple?" },
  ],
};

if (typeof window !== "undefined") window.CIVCALPRO_DOCS = CIVCALPRO_DOCS;
if (typeof module !== "undefined") module.exports = CIVCALPRO_DOCS;
