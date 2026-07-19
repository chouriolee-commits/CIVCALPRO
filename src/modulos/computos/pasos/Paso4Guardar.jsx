import { Icon } from "../../../components/common/Icon.jsx";
import { ELEMENTOS } from "../computos.data.js";
import { TIPOS_ACCION } from "../computosReducer.js";

const NIVEL_LABEL = { nivel1: "Nivel 1", nivel2: "Nivel 2", nivel3: "Nivel 3" };
const PROYECTO_LABEL = {
  edificio: "Edificio Residencial - Santa Marta",
  otro: "Otro proyecto",
};

export function Paso4Guardar({ state, dispatch, onGuardar, nuevoCalculo, mobile }) {
  const fieldClass = mobile ? "mobile-field" : "form-field";
  const gridClass = mobile ? "mobile-form-grid full" : "form-grid";

  const setGuardado = (campo, valor) =>
    dispatch({ type: TIPOS_ACCION.SET_GUARDADO, campo, valor });

  const elementoLabel = ELEMENTOS.find((el) => el.id === state.elemento)?.label || state.elemento;

  if (state.guardadoOk) {
    return (
      <div className="comp-paso2-pendiente">
        <Icon name="check_circle" size={28} />
        <p>Cómputo guardado correctamente como "{state.nombreCalculo}".</p>
        <button type="button" className="btn btn-green" onClick={nuevoCalculo}>
          Nuevo cálculo
        </button>
      </div>
    );
  }

  return (
    <>
      <div className={gridClass}>
        <div className={fieldClass}>
          <label>Nombre del cálculo</label>
          <input
            type="text"
            value={state.nombreCalculo}
            onChange={(e) => setGuardado("nombreCalculo", e.target.value)}
            placeholder="Ej. Columnas Nivel 1 - Bloque A"
          />
        </div>
      </div>

      <div className="result-bar" style={{ marginTop: 4 }}>
        <span className="result-bar-left">
          {elementoLabel} · {NIVEL_LABEL[state.nivel] || state.nivel}
        </span>
        <span className="result-bar-right">
          {PROYECTO_LABEL[state.proyecto] || state.proyecto}
        </span>
      </div>

      <div className={gridClass} style={{ marginTop: 14 }}>
        <div className={fieldClass}>
          <label>Observaciones (opcional)</label>
          <textarea
            value={state.observaciones}
            onChange={(e) => setGuardado("observaciones", e.target.value)}
            rows={3}
          />
        </div>
      </div>

      <div className={mobile ? "mobile-action-row" : "action-row"} style={{ marginTop: 14 }}>
        <button type="button" className="btn btn-green" onClick={onGuardar}>
          <Icon name="save" size={15} /> Guardar cómputo
        </button>
      </div>
    </>
  );
}
