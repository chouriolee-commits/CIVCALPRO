import { Icon } from "../../components/common/Icon.jsx";
import { ACTIVIDADES_ESTIMACION } from "./estimacion.data.js";
import { useEstimacion } from "./useEstimacion.js";

export default function ModuloEstimacion() {
  const {
    actividadId,
    campos,
    actividad,
    handleActividad,
    handleCampo,
    setCalculado,
    resultado,
  } = useEstimacion();

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Estimación de <span className="text-blue">Materiales</span>
        </h1>
        <p>
          Selecciona una actividad y calcula los materiales necesarios con sus
          rendimientos.
        </p>
      </div>

      {/* CARD 1: Actividad + datos */}
      <div className="modulo-card">
        {/* PASO 1: Actividad */}
        <div className="modulo-section-title">1. Actividad a calcular</div>
        <div className="est-act-grid">
          {ACTIVIDADES_ESTIMACION.map((a) => (
            <button
              key={a.id}
              className={`est-act-btn ${actividadId === a.id ? "active" : ""}`}
              onClick={() => handleActividad(a.id)}
            >
              <Icon name={a.icon} size={22} />
              {a.label}
            </button>
          ))}
        </div>

        {/* PASO 2: Campos dinámicos */}
        <div className="modulo-section-title" style={{ marginTop: 18 }}>
          2. Datos de la actividad
        </div>
        <div className="form-grid form-grid-4">
          {actividad?.campos.map((c) => (
            <div key={c.id} className="form-field">
              <label>{c.label}</label>
              {c.tipo === "select" ? (
                <select
                  value={campos[c.id] || ""}
                  onChange={(e) => handleCampo(c.id, e.target.value)}
                >
                  {c.opciones.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="number"
                  value={campos[c.id] || ""}
                  step="0.1"
                  min="0"
                  onChange={(e) => handleCampo(c.id, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Botón calcular */}
        <div className="action-row" style={{ marginTop: 14 }}>
          <button
            className="btn btn-ghost"
            onClick={() => {
              handleActividad(actividadId);
            }}
          >
            <Icon name="trash" size={15} /> Limpiar
          </button>
          <button className="btn btn-blue" onClick={() => setCalculado(true)}>
            <Icon name="calc" size={15} /> Calcular
          </button>
        </div>
      </div>

      {/* CARD 2: Resultados */}
      <div className="modulo-card">
        <div className="modulo-section-title">3. Resultados de estimación</div>

        {!resultado ? (
          <div className="est-empty">
            <Icon name="calculator" size={28} />
            <p>
              Ingresa los datos y presiona Calcular para ver los resultados.
            </p>
          </div>
        ) : (
          <>
            <div className="est-tabla-wrap">
            <table className="est-tabla">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Rendimiento</th>
                  <th>Cantidad</th>
                  <th>Unidad</th>
                  <th>Observación</th>
                </tr>
              </thead>
              <tbody>
                {resultado.filas.map((f, i) => (
                  <tr key={i}>
                    <td>{f.material}</td>
                    <td style={{ color: "var(--text-muted)" }}>
                      {f.rendimiento}
                    </td>
                    <td className="est-qty">{f.cantidad}</td>
                    <td style={{ color: "var(--text-muted)" }}>{f.unidad}</td>
                    <td style={{ color: "var(--text-muted)", fontSize: 12 }}>
                      {f.obs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div className="est-resumen">
              {resultado.resumen.map((r, i) => (
                <div
                  key={i}
                  className={`est-resumen-cell ${r.destacado ? "destacado" : ""}`}
                >
                  <div className="est-resumen-lbl">{r.label}</div>
                  <div className="est-resumen-val">{r.valor}</div>
                </div>
              ))}
            </div>

            {/* Botones */}
            <div className="action-row" style={{ marginTop: 14 }}>
              <button className="btn btn-ghost">
                <Icon name="export" size={15} /> Exportar Excel
              </button>
              <button className="btn btn-ghost">
                <Icon name="export" size={15} /> Exportar PDF
              </button>
              <button className="btn btn-blue">
                <Icon name="save" size={15} /> Guardar estimación
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
