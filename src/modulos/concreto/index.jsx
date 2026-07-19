import { Icon } from "../../components/common/Icon.jsx";
import { DOSIFICACIONES } from "./concreto.data.js";
import { useConcreto } from "./useConcreto.js";

export default function ModuloConcreto() {
  const {
    dosifId,
    setDosifId,
    volumen,
    setVolumen,
    proyecto,
    setProyecto,
    nivel,
    setNivel,
    calculado,
    setCalculado,
    dosif,
    vol,
    resultados,
    handleLimpiar,
  } = useConcreto();

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Dosificación de <span className="text-orange">Concreto</span>
        </h1>
        <p>
          Calcula los materiales necesarios según resistencia y volumen
          requerido.
        </p>
      </div>

      <div className="modulo-card">
        {/* PASO 1: Resistencia */}
        <div className="modulo-section-title">
          1. Seleccionar resistencia (f'c)
        </div>
        <div className="conc-mix-grid">
          {DOSIFICACIONES.map((d) => (
            <div
              key={d.id}
              className={`conc-mix-card ${dosifId === d.id ? "selected" : ""}`}
              onClick={() => {
                setDosifId(d.id);
                setCalculado(false);
              }}
            >
              <div className="conc-mix-fc">{d.fc}</div>
              <div className="conc-mix-ratio">{d.ratio}</div>
              <div className="conc-mix-desc">{d.desc}</div>
            </div>
          ))}
        </div>

        {/* PASO 2: Volumen y datos */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>
          2. Volumen y datos del proyecto
        </div>
        <div className="form-grid form-grid-3">
          <div className="form-field">
            <label>Volumen de concreto (m³)</label>
            <input
              type="number"
              value={volumen}
              step="0.10"
              min="0.10"
              onChange={(e) => {
                setVolumen(e.target.value);
                setCalculado(false);
              }}
            />
          </div>
          <div className="form-field">
            <label>Proyecto</label>
            <select
              value={proyecto}
              onChange={(e) => setProyecto(e.target.value)}
            >
              <option value="edificio">
                Edificio Residencial - Santa Marta
              </option>
              <option value="comercial">C. Comercial - Barranquilla</option>
              <option value="otro">Otro proyecto</option>
            </select>
          </div>
          <div className="form-field">
            <label>Nivel / Elemento</label>
            <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
              <option value="nivel1">Columnas - Nivel 1</option>
              <option value="nivel2">Vigas - Nivel 2</option>
              <option value="losa">Losa entrepiso</option>
              <option value="fund">Fundaciones</option>
            </select>
          </div>
        </div>

        {/* Fila de mezcla seleccionada */}
        <div className="conc-ratio-row">
          <span className="conc-ratio-lbl">Mezcla seleccionada:</span>
          {dosif.ratio.split(":").map((v, i, arr) => (
            <span
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <span className="conc-ratio-val">{v.trim()}</span>
              {i < arr.length - 1 && <span className="conc-ratio-sep">:</span>}
            </span>
          ))}
          <span className="conc-ratio-fc">{dosif.fc}</span>
        </div>

        {/* PASO 3: Resultados */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>
          3. Resultados
        </div>
        <div className="conc-res-grid">
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🏗️ Cemento</div>
            <div className="conc-res-val">
              {calculado ? resultados.cemento : "—"}
            </div>
            <div className="conc-res-unit">sacos ({dosif.pesoSaco} kg c/u)</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🏜️ Arena</div>
            <div className="conc-res-val">
              {calculado ? resultados.arena : "—"}
            </div>
            <div className="conc-res-unit">m³</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">🪨 Piedra</div>
            <div className="conc-res-val">
              {calculado ? resultados.piedra : "—"}
            </div>
            <div className="conc-res-unit">m³</div>
          </div>
          <div className={`conc-res-cell ${calculado ? "calculado" : ""}`}>
            <div className="conc-res-label">💧 Agua</div>
            <div className="conc-res-val">
              {calculado ? resultados.agua : "—"}
            </div>
            <div className="conc-res-unit">litros</div>
          </div>
        </div>

        {/* Botones */}
        <div className="action-row" style={{ marginTop: 16 }}>
          <button className="btn btn-ghost" onClick={handleLimpiar}>
            <Icon name="trash" size={15} /> Limpiar
          </button>
          <button className="btn btn-ghost">
            <Icon name="export" size={15} /> Exportar PDF
          </button>
          <button
            className="btn btn-orange"
            onClick={() => setCalculado(true)}
            disabled={vol <= 0}
          >
            <Icon name="calc" size={15} /> Calcular
          </button>
        </div>
      </div>
    </div>
  );
}
