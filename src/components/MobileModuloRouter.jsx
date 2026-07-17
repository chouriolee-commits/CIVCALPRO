import { Icon } from "./common/Icon.jsx";
import { ThemeToggleButton } from "./ThemeToggleButton.jsx";
import { ModuloPendiente } from "./common/ModuloPendiente.jsx";
import { MODULES } from "../data/constants.js";
import ModuloComputos from "../modulos/computos/index.jsx";
import ModuloConcreto from "../modulos/concreto/index.jsx";
import ModuloBiblioteca from "../modulos/biblioteca/index.jsx";
import ModuloProyectos from "../modulos/proyectos/index.jsx";
import ModuloEstimacion from "../modulos/estimacion/index.jsx";
import MobileHistorial from "../modulos/historial/MobileHistorial.jsx";

// Pseudo-módulo usado solo como fallback visual cuando moduloKey no
// coincide con ningún MODULES[].key (caso "normas" desde el router
// móvil) — no es parte de los datos reales de Normas.
const NORMAS_MODULE_PREVIEW = {
  label: "Normas COVENIN incluidas",
  icon: <Icon name="book" size={48} />,
};

export function MobileModuloRouter({ onBack, darkMode, setDarkMode, moduloKey }) {
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

  // Cómputos: unificado en un solo componente con prop `mobile`.
  if (moduloKey === "computos") {
    return (
      <ModuloComputos
        mobile
        onBack={onBack}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
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
