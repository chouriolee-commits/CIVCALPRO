import { useState } from "react";
import { Icon } from "../../components/common/Icon.jsx";
import { HISTORIAL_DESKTOP } from "./historial.data.js";

export default function ModuloHistorial() {
  const [filtroModulo, setFiltroModulo] = useState("Todos");
  const [filtroTexto, setFiltroTexto] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const calculosPorPagina = 6;

  const historialCompleto = HISTORIAL_DESKTOP;

  // Filtrar datos
  const historialFiltrado = historialCompleto.filter((item) => {
    const cumpleFiltroModulo =
      filtroModulo === "Todos" || item.modulo === filtroModulo;
    const cumpleTexto =
      filtroTexto === "" ||
      item.descripcion.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      item.proyecto.toLowerCase().includes(filtroTexto.toLowerCase());
    return cumpleFiltroModulo && cumpleTexto;
  });

  // Paginación
  const totalPaginas = Math.ceil(historialFiltrado.length / calculosPorPagina);
  const inicio = (paginaActual - 1) * calculosPorPagina;
  const fin = inicio + calculosPorPagina;
  const calculosPagina = historialFiltrado.slice(inicio, fin);

  // Estadísticas
  const totales = {
    total: historialCompleto.length,
    computos: historialCompleto.filter((h) => h.moduloKey === "computos")
      .length,
    concreto: historialCompleto.filter((h) => h.moduloKey === "concreto")
      .length,
    biblioteca: historialCompleto.filter((h) => h.moduloKey === "biblioteca")
      .length,
    estimacion: historialCompleto.filter((h) => h.moduloKey === "estimacion")
      .length,
    exportados: Math.floor(historialCompleto.length * 0.5),
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            Historial de <span>Cálculos</span>
          </h1>
          <p className="page-subtitle">
            Todos los cálculos realizados, ordenados por fecha
          </p>
        </div>
      </div>

      {/* Stats cards */}
      <div className="historial-stats">
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="calc" size={13} /> Total
          </div>
          <div className="stat-value">{totales.total}</div>
          <div className="stat-sub">Cálculos realizados</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="ruler" size={13} /> Cómputos
          </div>
          <div className="stat-value" style={{ color: "var(--green)" }}>
            {totales.computos}
          </div>
          <div className="stat-sub">Mediciones</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="building" size={13} /> Concreto
          </div>
          <div className="stat-value" style={{ color: "var(--orange)" }}>
            {totales.concreto}
          </div>
          <div className="stat-sub">Dosificaciones</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">
            <Icon name="export" size={13} /> Exportados
          </div>
          <div className="stat-value">{totales.exportados}</div>
          <div className="stat-sub">Archivos descargados</div>
        </div>
      </div>

      {/* Card principal */}
      <div className="historial-card">
        {/* Toolbar */}
        <div className="historial-toolbar">
          <div className="search-box">
            <Icon name="search" size={13} />
            <input
              type="text"
              placeholder="Buscar cálculo..."
              value={filtroTexto}
              onChange={(e) => {
                setFiltroTexto(e.target.value);
                setPaginaActual(1);
              }}
            />
          </div>
          <div className="filter-chips">
            {["Todos", "Cómputos", "Concreto", "Biblioteca", "Estimación"].map(
              (chip) => (
                <button
                  key={chip}
                  className={`filter-chip ${filtroModulo === chip ? "active" : ""}`}
                  onClick={() => {
                    setFiltroModulo(chip);
                    setPaginaActual(1);
                  }}
                >
                  {chip}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Tabla */}
        <div className="historial-table-wrapper">
          <table className="historial-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Módulo</th>
                <th>Descripción</th>
                <th>Proyecto</th>
                <th>Resultado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {calculosPagina.length > 0 ? (
                calculosPagina.map((item) => (
                  <tr key={item.id}>
                    <td className="fecha-col">{item.fecha}</td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: item.badgeBg,
                          color: item.badgeColor,
                        }}
                      >
                        <Icon
                          name={item.icon}
                          size={10}
                          style={{ marginRight: 4 }}
                        />
                        {item.modulo}
                      </span>
                    </td>
                    <td>{item.descripcion}</td>
                    <td className="proyecto-col">{item.proyecto}</td>
                    <td className="resultado-col">{item.resultado}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn" title="Ver">
                          <Icon name="eye" size={12} />
                        </button>
                        <button className="action-btn" title="Copiar">
                          <Icon name="copy" size={12} />
                        </button>
                        <button className="action-btn" title="Descargar">
                          <Icon name="download" size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", padding: 20 }}>
                    No hay cálculos que coincidan con los filtros
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="historial-pagination">
          <span>
            Mostrando {calculosPagina.length} de {historialFiltrado.length}{" "}
            cálculos
          </span>
          <div className="pagination-buttons">
            <button
              className="page-btn"
              onClick={() => setPaginaActual(Math.max(1, paginaActual - 1))}
              disabled={paginaActual === 1}
            >
              <Icon name="back" size={11} />
            </button>
            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${paginaActual === i + 1 ? "active" : ""}`}
                onClick={() => setPaginaActual(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() =>
                setPaginaActual(Math.min(totalPaginas, paginaActual + 1))
              }
              disabled={paginaActual === totalPaginas}
            >
              <Icon name="chevron" size={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
