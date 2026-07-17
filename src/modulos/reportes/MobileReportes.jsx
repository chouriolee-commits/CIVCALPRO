import { Icon } from "../../components/common/Icon.jsx";
import { REPORTES_MOBILE } from "./reportes.data.js";

export default function MobileReportes({ onBack }) {
  return (
    <>
      <header className="mobile-module-topbar">
        <button className="mobile-back-btn" onClick={onBack}>
          <Icon name="back" size={22} />
        </button>

        <h2>Reportes</h2>
      </header>

      <div className="mobile-page">
        <div className="mobile-reportes-banner">
          <h3>Centro de Reportes</h3>

          <p>Genera, consulta y exporta resultados de tus proyectos.</p>
        </div>

        <div className="mobile-reportes-stats">
          <div className="report-stat-card">
            <strong>24</strong>

            <span>PDF</span>
          </div>

          <div className="report-stat-card">
            <strong>13</strong>

            <span>Excel</span>
          </div>

          <div className="report-stat-card">
            <strong>37</strong>

            <span>Total</span>
          </div>
        </div>

        <div className="mobile-section-label">Acciones rápidas</div>

        <div className="mobile-report-actions">
          <button className="report-btn">
            <Icon name="file" size={18} />
            Generar PDF
          </button>

          <button className="report-btn">
            <Icon name="table" size={18} />
            Exportar Excel
          </button>

          <button className="report-btn">
            <Icon name="share" size={18} />
            Compartir
          </button>
        </div>

        <div className="mobile-section-label">Reportes recientes</div>

        <div className="mobile-report-list">
          {REPORTES_MOBILE.map((r, i) => (
            <div key={i} className="mobile-report-card">
              <div>
                <strong>{r.nombre}</strong>

                <small>{r.fecha}</small>
              </div>

              <span>{r.tipo}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
