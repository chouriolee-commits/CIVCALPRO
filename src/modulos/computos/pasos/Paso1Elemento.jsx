import { ELEMENTOS } from "../computos.data.js";
import { TIPOS_ACCION } from "../computosReducer.js";

export function Paso1Elemento({ state, dispatch, mobile }) {
  const setCampo = (campo, valor) =>
    dispatch({ type: TIPOS_ACCION.SET_CAMPO_PASO1, campo, valor });

  if (mobile) {
    return (
      <>
        <div className="mobile-section-sub">
          Elige el tipo de elemento que deseas calcular
        </div>
        <div className="mobile-element-grid">
          {ELEMENTOS.map((el) => (
            <button
              key={el.id}
              className={`mobile-element-btn ${state.elemento === el.id ? "active" : ""}`}
              onClick={() => setCampo("elemento", el.id)}
            >
              <span className="mobile-element-btn-icon">
                <img src={el.iconSrc} alt={el.label} />
              </span>
              {el.label}
            </button>
          ))}
        </div>
        <div className="mobile-form-grid full">
          <div className="mobile-field">
            <label>Proyecto</label>
            <select
              value={state.proyecto}
              onChange={(e) => setCampo("proyecto", e.target.value)}
            >
              <option value="edificio">Edificio Residencial - Santa Marta</option>
              <option value="otro">Otro proyecto</option>
            </select>
          </div>
          <div className="mobile-field">
            <label>Nivel / Piso</label>
            <select
              value={state.nivel}
              onChange={(e) => setCampo("nivel", e.target.value)}
            >
              <option value="nivel1">Nivel 1</option>
              <option value="nivel2">Nivel 2</option>
            </select>
          </div>
          <div className="mobile-field">
            <label>Descripción (opcional)</label>
            <input
              type="text"
              value={state.descripcion}
              onChange={(e) => setCampo("descripcion", e.target.value)}
              placeholder="Ej. Bloque A"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <p>Elige el tipo de elemento que deseas calcular para tu cómputo métrico.</p>
      <div className="element-selector">
        {ELEMENTOS.map((el) => (
          <button
            key={el.id}
            className={`element-btn ${state.elemento === el.id ? "active" : ""}`}
            onClick={() => setCampo("elemento", el.id)}
          >
            <span className="element-btn-icon">
              <img src={el.iconSrc} alt={el.label} />
            </span>
            {el.label}
          </button>
        ))}
      </div>
      <div className="form-section-title">Datos del elemento</div>
      <div className="form-grid">
        <div className="form-field">
          <label>Proyecto</label>
          <select
            value={state.proyecto}
            onChange={(e) => setCampo("proyecto", e.target.value)}
          >
            <option value="edificio">Edificio Residencial - Santa Marta</option>
            <option value="otro">Otro proyecto</option>
          </select>
        </div>
        <div className="form-field">
          <label>Nivel / Piso</label>
          <select
            value={state.nivel}
            onChange={(e) => setCampo("nivel", e.target.value)}
          >
            <option value="nivel1">Nivel 1</option>
            <option value="nivel2">Nivel 2</option>
            <option value="nivel3">Nivel 3</option>
          </select>
        </div>
        <div className="form-field">
          <label>Descripción (opcional)</label>
          <input
            type="text"
            value={state.descripcion}
            onChange={(e) => setCampo("descripcion", e.target.value)}
            placeholder="Ej. Bloque A"
          />
        </div>
      </div>
    </>
  );
}
