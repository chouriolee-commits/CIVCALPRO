import { useState } from "react";
import { Icon } from "../../../components/common/Icon.jsx";
import { TIPOS_REFUERZO } from "../computos.data.js";
import { DIAMETROS_ACERO } from "../utils/pesoAcero.data.js";
import { TIPOS_ACCION } from "../computosReducer.js";

const BORRADOR_INICIAL = {
  tipo: "longitudinal",
  cantidad: "4",
  diametro: "1/2",
  longitudUnitaria: "3.00",
  separacion: "0.20",
};

function resumenRefuerzo(r) {
  const etiquetaTipo =
    TIPOS_REFUERZO.find((t) => t.id === r.tipo)?.label || r.tipo;
  return `${r.cantidad} × Ø ${r.diametro}" — ${etiquetaTipo}`;
}

export function SelectorAcero({ refuerzos, dispatch, mobile }) {
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [borrador, setBorrador] = useState(BORRADOR_INICIAL);

  const gridClass = mobile ? "mobile-form-grid" : "form-grid";
  const fieldClass = mobile ? "mobile-field" : "form-field";

  function abrirAlta() {
    setEditandoId(null);
    setBorrador(BORRADOR_INICIAL);
    setMostrandoFormulario(true);
  }

  function abrirEdicion(refuerzo) {
    setEditandoId(refuerzo.id);
    setBorrador({
      tipo: refuerzo.tipo,
      cantidad: String(refuerzo.cantidad),
      diametro: refuerzo.diametro,
      longitudUnitaria: String(refuerzo.longitudUnitaria || "3.00"),
      separacion: String(refuerzo.separacion || "0.20"),
    });
    setMostrandoFormulario(true);
  }

  function cancelar() {
    setMostrandoFormulario(false);
    setEditandoId(null);
  }

  function confirmar() {
    const refuerzo = {
      tipo: borrador.tipo,
      cantidad: Number(borrador.cantidad) || 0,
      diametro: borrador.diametro,
      ...(borrador.tipo === "longitudinal"
        ? { longitudUnitaria: Number(borrador.longitudUnitaria) || 0 }
        : { separacion: Number(borrador.separacion) || 0 }),
    };

    if (editandoId) {
      dispatch({ type: TIPOS_ACCION.EDITAR_REFUERZO, id: editandoId, cambios: refuerzo });
    } else {
      dispatch({ type: TIPOS_ACCION.AGREGAR_REFUERZO, refuerzo });
    }

    setMostrandoFormulario(false);
    setEditandoId(null);
  }

  function eliminar(id) {
    dispatch({ type: TIPOS_ACCION.ELIMINAR_REFUERZO, id });
  }

  return (
    <div>
      <div className="acero-list">
        {refuerzos.length === 0 && (
          <div className="acero-empty">Aún no has agregado acero de refuerzo.</div>
        )}
        {refuerzos.map((r) => (
          <div key={r.id} className="acero-item">
            <span>{resumenRefuerzo(r)}</span>
            <div className="acero-item-actions">
              <button type="button" onClick={() => abrirEdicion(r)} aria-label="Editar">
                Editar
              </button>
              <button type="button" onClick={() => eliminar(r.id)} aria-label="Eliminar">
                <Icon name="trash" size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {!mostrandoFormulario && (
        <button type="button" className="acero-add-btn" onClick={abrirAlta}>
          <Icon name="plus" size={14} /> Agregar acero
        </button>
      )}

      {mostrandoFormulario && (
        <div className="acero-form">
          <div className={gridClass}>
            <div className={fieldClass}>
              <label>Tipo</label>
              <select
                value={borrador.tipo}
                onChange={(e) => setBorrador({ ...borrador, tipo: e.target.value })}
              >
                {TIPOS_REFUERZO.map((t) => (
                  <option key={t.id} value={t.id}>{t.label}</option>
                ))}
              </select>
            </div>
            <div className={fieldClass}>
              <label>Cantidad</label>
              <input
                type="number"
                min="1"
                value={borrador.cantidad}
                onChange={(e) => setBorrador({ ...borrador, cantidad: e.target.value })}
              />
            </div>
            <div className={fieldClass}>
              <label>Diámetro</label>
              <select
                value={borrador.diametro}
                onChange={(e) => setBorrador({ ...borrador, diametro: e.target.value })}
              >
                {DIAMETROS_ACERO.map((d) => (
                  <option key={d} value={d}>Ø {d}"</option>
                ))}
              </select>
            </div>
            {borrador.tipo === "longitudinal" ? (
              <div className={fieldClass}>
                <label>Longitud unitaria (m)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={borrador.longitudUnitaria}
                  onChange={(e) => setBorrador({ ...borrador, longitudUnitaria: e.target.value })}
                />
              </div>
            ) : (
              <div className={fieldClass}>
                <label>Separación (m)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  value={borrador.separacion}
                  onChange={(e) => setBorrador({ ...borrador, separacion: e.target.value })}
                />
              </div>
            )}
          </div>
          <div className="action-row" style={{ marginTop: 10 }}>
            <button type="button" className="btn btn-ghost" onClick={cancelar}>
              Cancelar
            </button>
            <button type="button" className="btn btn-green" onClick={confirmar}>
              {editandoId ? "Guardar cambios" : "Agregar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
