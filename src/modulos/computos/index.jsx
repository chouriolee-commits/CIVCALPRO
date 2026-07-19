import { Icon } from "../../components/common/Icon.jsx";
import { ThemeToggleButton } from "../../components/ThemeToggleButton.jsx";
import { LearnButton } from "../../components/LearnButton.jsx";
import { useComputos } from "./useComputos.js";
import { StepperComputos } from "./pasos/StepperComputos.jsx";
import { Paso1Elemento } from "./pasos/Paso1Elemento.jsx";
import { Paso2Dimensiones } from "./pasos/Paso2Dimensiones.jsx";
import { Paso3Resultados } from "./pasos/Paso3Resultados.jsx";
import { Paso4Guardar } from "./pasos/Paso4Guardar.jsx";

const TITULOS_PASO = {
  1: "Seleccionar elemento a calcular",
  2: "Ingresar dimensiones y configuración",
  3: "Resultados del cómputo",
  4: "Guardar cómputo",
};

export default function ModuloComputos({
  mobile = false,
  onBack = () => {},
  darkMode,
  setDarkMode,
}) {
  const {
    state,
    dispatch,
    validacionPaso1,
    validacionPaso2,
    irSiguiente,
    irAtras,
    irAPaso,
    guardarComputo,
    nuevoCalculo,
  } = useComputos();

  function renderPaso() {
    if (state.paso === 1) return <Paso1Elemento state={state} dispatch={dispatch} mobile={mobile} />;
    if (state.paso === 2) return <Paso2Dimensiones state={state} dispatch={dispatch} mobile={mobile} />;
    if (state.paso === 3) return <Paso3Resultados resultados={state.resultados} mobile={mobile} />;
    return (
      <Paso4Guardar
        state={state}
        dispatch={dispatch}
        onGuardar={guardarComputo}
        nuevoCalculo={nuevoCalculo}
        mobile={mobile}
      />
    );
  }

  const puedeAvanzar =
    state.paso === 1 ? validacionPaso1.valido : state.paso === 2 ? validacionPaso2.valido : true;

  const accionesRow = () => {
    if (state.paso === 4 || state.guardadoOk) return null;

    return (
      <div className={mobile ? "mobile-action-row" : "action-row"} style={mobile ? {} : { marginTop: 18 }}>
        {state.paso > 1 && (
          <button className="btn btn-ghost" onClick={irAtras}>
            <Icon name="back" size={15} /> Atrás
          </button>
        )}
        {state.paso === 1 && <button className="btn btn-ghost" onClick={nuevoCalculo}>
          <Icon name="trash" size={15} /> Limpiar
        </button>}
        <button className="btn btn-green" onClick={irSiguiente} disabled={!puedeAvanzar}>
          {state.paso === 3 ? "Continuar" : "Siguiente"} <Icon name="arrow_r" size={15} />
        </button>
      </div>
    );
  };

  if (mobile) {
    return (
      <>
        <header className="mobile-module-topbar">
          <button className="mobile-back-btn" onClick={onBack}>
            <Icon name="back" size={22} />
          </button>
          <h2>Cómputos Métricos</h2>
          <div className="mobile-topbar-actions">
            <LearnButton />
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
        <StepperComputos paso={state.paso} mobile />
        <div className="mobile-form-content">
          <div className="mobile-section-h">{TITULOS_PASO[state.paso]}</div>
          {renderPaso()}
        </div>
        {accionesRow()}
      </>
    );
  }

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
        <StepperComputos paso={state.paso} onIrAPaso={irAPaso} />
        <div className="preview-content">
          <h2>{TITULOS_PASO[state.paso]}</h2>
          {renderPaso()}
          {accionesRow()}
        </div>
      </div>
    </div>
  );
}
