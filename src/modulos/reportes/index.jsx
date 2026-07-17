import { EXPORTS_LIST } from "./reportes.data.js";

export default function ModuloReportes() {
  return (
    <div className="reports-page">
      <div className="reports-title">
        <h1>
          Reportes <span>Generados</span>
        </h1>

        <p>Documentos exportados y generación de informes.</p>
      </div>

      <div className="reports-stats">
        <div className="report-stat-card">
          <h4>Exportaciones</h4>

          <strong>42</strong>
        </div>

        <div className="report-stat-card">
          <h4>PDF</h4>

          <strong>28</strong>
        </div>

        <div className="report-stat-card">
          <h4>Excel</h4>

          <strong>14</strong>
        </div>

        <div className="report-stat-card">
          <h4>Proyectos</h4>

          <strong>12</strong>
        </div>
      </div>

      <div className="report-main-grid">
        <div className="report-card">
          <h3>Exportaciones recientes</h3>

          {EXPORTS_LIST.map((item, index) => (
            <div key={index} className="report-file-item">
              <div>
                <strong>{item.name}</strong>

                <small>{item.date}</small>
              </div>

              <span>{item.size}</span>
            </div>
          ))}
        </div>

        <div className="report-card">
          <h3>Generar reporte</h3>

          <button className="report-btn">Proyecto completo</button>

          <button className="report-btn">Historial mensual</button>

          <button className="report-btn">Dosificaciones</button>

          <button className="report-btn">Cómputos métricos</button>

          <button className="report-btn">Biblioteca</button>
        </div>
      </div>

      <button className="report-export-general">
        Exportar reporte general
      </button>
    </div>
  );
}
