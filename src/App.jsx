import { useEffect, useState } from "react";
import leeDevLogo from "./assets/img/lee-dev-logo.png";
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
        <Sidebar
          activeModule={activeModule}
          onNavigate={handleNavigate}
        />

        <div className="main-content">
          <Topbar
            title={pageTitle()}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            activeModule={activeModule}
          />

          {renderDesktopPage()}

          <AppFooter />
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

        <AppFooter />
      </div>
    </div>
  );
}

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer-dev">
        <img src={leeDevLogo} alt="Lee-Dev" className="app-footer-logo" />
        <span>Desarrollado por: lee-dev</span>
      </div>

      <div className="app-footer-contacts">
        <a
          href="https://wa.me/573012304365"
          target="_blank"
          rel="noopener noreferrer"
          className="app-footer-contact"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="16" height="16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16.004 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.44 1.73 6.36L3.2 28.8l6.42-1.68a12.75 12.75 0 0 0 6.38 1.72h.005c7.07 0 12.8-5.73 12.8-12.8s-5.73-12.84-12.8-12.84zm0 23.15h-.004a10.62 10.62 0 0 1-5.42-1.49l-.39-.23-3.81 1 1.02-3.71-.25-.38a10.6 10.6 0 0 1-1.63-5.64c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.54 3.13a10.58 10.58 0 0 1 3.12 7.53c0 5.87-4.78 10.44-10.66 10.44zm5.84-7.86c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55-.19-.01-.4-.01-.61-.01-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z"
            />
          </svg>
          <span>301-2304365</span>
        </a>

        <a
          href="mailto:chouriolee@gmail.com"
          className="app-footer-contact"
          aria-label="Enviar correo"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              fill="#EA4335"
              d="M12 13.09 1.636 5.727A1.636 1.636 0 0 1 3.06 4H20.94a1.636 1.636 0 0 1 1.424 1.727L12 13.09z"
            />
            <path
              fill="#EA4335"
              d="M22.364 6.988 12 14.51 1.636 6.988V18a1.636 1.636 0 0 0 1.636 1.636h17.456A1.636 1.636 0 0 0 22.364 18V6.988z"
            />
          </svg>
          <span>chouriolee@gmail.com</span>
        </a>
      </div>
    </footer>
  );
}
