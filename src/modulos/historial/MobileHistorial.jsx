import { useState } from "react";
import { Icon } from "../../components/common/Icon.jsx";
import { HISTORIAL_MOBILE } from "./historial.data.js";

export default function MobileHistorial({ onBack }) {
  const [filtroModulo, setFiltroModulo] = useState("Todos");
  const [filtroTexto, setFiltroTexto] = useState("");

  const historialCompleto = HISTORIAL_MOBILE;

  const historialFiltrado = historialCompleto.filter((item) => {
    const cumpleFiltroModulo =
      filtroModulo === "Todos" || item.modulo === filtroModulo;
    const cumpleTexto =
      filtroTexto === "" ||
      item.descripcion.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      item.proyecto.toLowerCase().includes(filtroTexto.toLowerCase());
    return cumpleFiltroModulo && cumpleTexto;
  });

  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>

        <h2>Historial</h2>
      </header>

      <div className="mobile-page">
        <div className="mobile-historial">
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>Buscar</h3>
        <div className="search-box" style={{ marginBottom: "0.75rem" }}>
          <Icon name="search" size={13} />
          <input
            type="text"
            placeholder="Búsqueda..."
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
          />
        </div>
        <div className="filter-chips-mobile">
          {["Todos", "Cómputos", "Concreto", "Biblioteca", "Estimación"].map(
            (chip) => (
              <button
                key={chip}
                className={`filter-chip-mobile ${filtroModulo === chip ? "active" : ""}`}
                onClick={() => setFiltroModulo(chip)}
              >
                {chip}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="mobile-historial-list">
        {historialFiltrado.length > 0 ? (
          historialFiltrado.map((item) => (
            <div key={item.id} className="mobile-historial-item">
              <div className="mobile-historial-header">
                <span className="mobile-historial-fecha">{item.fecha}</span>
                <span
                  className="mobile-historial-badge"
                  style={{
                    background: item.badgeBg,
                    color: item.badgeColor,
                  }}
                >
                  {item.modulo}
                </span>
              </div>
              <div className="mobile-historial-desc">{item.descripcion}</div>
              <div className="mobile-historial-proyecto">{item.proyecto}</div>
              <div className="mobile-historial-result">{item.resultado}</div>
              <div className="mobile-historial-actions">
                <button className="mobile-action-small" title="Ver">
                  <Icon name="eye" size={13} />
                </button>
                <button className="mobile-action-small" title="Copiar">
                  <Icon name="copy" size={13} />
                </button>
                <button className="mobile-action-small" title="Descargar">
                  <Icon name="download" size={13} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              color: "var(--text-muted)",
            }}
          >
            No hay cálculos que coincidan
          </div>
        )}
      </div>
        </div>
      </div>
    </>
  );
}
