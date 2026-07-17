import { useEffect, useState } from "react";
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
