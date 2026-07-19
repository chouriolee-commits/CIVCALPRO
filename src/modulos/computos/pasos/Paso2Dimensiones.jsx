import { Icon } from "../../../components/common/Icon.jsx";
import { ELEMENTOS, ELEMENTOS_DISPONIBLES, RESISTENCIAS_CONCRETO } from "../computos.data.js";
import { TIPOS_ACCION } from "../computosReducer.js";
import { SelectorAcero } from "./SelectorAcero.jsx";

export function Paso2Dimensiones({ state, dispatch, mobile }) {
  const soportado = ELEMENTOS_DISPONIBLES.includes(state.elemento);
  const gridClass = mobile ? "mobile-form-grid" : "form-grid form-grid-4";
  const fieldClass = mobile ? "mobile-field" : "form-field";
  const seccionTitulo = mobile ? "mobile-section-h" : "form-section-title";

  const setGeometria = (campo, valor) =>
    dispatch({ type: TIPOS_ACCION.SET_GEOMETRIA, campo, valor });

  if (!soportado) {
    const label = ELEMENTOS.find((el) => el.id === state.elemento)?.label || state.elemento;
    return (
      <div className="comp-paso2-pendiente">
        <Icon name="info" size={28} />
        <p>Formulario para {label} próximamente disponible.</p>
      </div>
    );
  }

  return (
    <>
      <div className={seccionTitulo}>Geometría</div>
      <div className={gridClass}>
        <div className={fieldClass}>
          <label>Largo (m)</label>
          <input
            type="number"
            step="0.01"
            value={state.geometria.largo}
            onChange={(e) => setGeometria("largo", e.target.value)}
          />
        </div>
        <div className={fieldClass}>
          <label>Ancho (m)</label>
          <input
            type="number"
            step="0.01"
            value={state.geometria.ancho}
            onChange={(e) => setGeometria("ancho", e.target.value)}
          />
        </div>
        <div className={fieldClass}>
          <label>Altura (m)</label>
          <input
            type="number"
            step="0.01"
            value={state.geometria.altura}
            onChange={(e) => setGeometria("altura", e.target.value)}
          />
        </div>
        <div className={fieldClass}>
          <label>Cantidad</label>
          <input
            type="number"
            min="1"
            value={state.geometria.cantidad}
            onChange={(e) => setGeometria("cantidad", e.target.value)}
          />
        </div>
      </div>

      <div className={seccionTitulo} style={{ marginTop: 16 }}>Concreto</div>
      <div className={gridClass}>
        <div className={fieldClass}>
          <label>Resistencia</label>
          <select
            value={state.resistenciaId}
            onChange={(e) =>
              dispatch({ type: TIPOS_ACCION.SET_RESISTENCIA, resistenciaId: e.target.value })
            }
          >
            {RESISTENCIAS_CONCRETO.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </div>
        <div className={fieldClass}>
          <label>Desperdicio (%)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            value={state.desperdicioConcreto}
            onChange={(e) =>
              dispatch({ type: TIPOS_ACCION.SET_DESPERDICIO, valor: e.target.value })
            }
          />
        </div>
      </div>

      <div className={seccionTitulo} style={{ marginTop: 16 }}>Acero de refuerzo</div>
      <SelectorAcero refuerzos={state.refuerzos} dispatch={dispatch} mobile={mobile} />
    </>
  );
}
