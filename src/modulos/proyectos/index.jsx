import { Icon } from "../../components/common/Icon.jsx";
import { PROYECTOS } from "./proyectos.data.js";

export default function ModuloProyectos() {
  return (
    <div className="page">
      <div className="proy-header">
        <div>
          <div className="proy-breadcrumb">
            <Icon name="folder" size={16} />
            <span>Proyectos</span>
          </div>
          <p className="proy-subtitle">
            Organiza y gestiona tus cálculos por proyecto.
          </p>
        </div>

        <button className="proy-btn-new">
          <Icon name="plus" size={14} /> Nuevo proyecto
        </button>
      </div>

      <div className="proy-stats">
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="folder" size={14} /> Total proyectos
          </div>
          <div className="proy-stat-value">{PROYECTOS.length}</div>
          <div className="proy-stat-note">Proyectos registrados</div>
        </div>
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="clock" size={14} /> En progreso
          </div>
          <div className="proy-stat-value">
            {PROYECTOS.filter((p) => p.pct < 100).length}
          </div>
          <div className="proy-stat-note">Proyectos activos</div>
        </div>
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="check" size={14} /> Completados
          </div>
          <div className="proy-stat-value">
            {PROYECTOS.filter((p) => p.pct === 100).length}
          </div>
          <div className="proy-stat-note">Proyectos finalizados</div>
        </div>
        <div className="proy-stat-card">
          <div className="proy-stat-label">
            <Icon name="calc" size={14} /> Cálculos
          </div>
          <div className="proy-stat-value">—</div>
          <div className="proy-stat-note">Pendiente de datos</div>
        </div>
      </div>

      <div className="proy-toolbar">
        <div className="proy-search">
          <Icon name="search" size={14} />
          <span>Buscar proyecto...</span>
        </div>
        <button className="proy-filter-btn">
          <Icon name="filter" size={14} /> Filtrar
        </button>
        <button className="proy-filter-btn">
          <Icon name="sort-ascending" size={14} /> Ordenar
        </button>
      </div>

      <div className="proy-grid">
        {PROYECTOS.map((p) => (
          <div key={p.nombre} className="proy-card">
            <div className="proy-thumb" style={{ background: p.bg }}>
              {p.emoji}
            </div>
            <div className="proy-card-body">
              <div className="proy-card-title">{p.nombre}</div>
              <div className="proy-card-meta">Actualizado {p.tiempo}</div>
              <div className="proy-progress-bar">
                <div
                  className="proy-progress"
                  style={{ width: `${p.pct}%`, background: p.color }}
                />
              </div>
              <div className="proy-card-footer">
                <span className={`proy-tag ${p.pct === 100 ? "ok" : ""}`}>
                  {p.pct === 100 ? "Completado" : "En progreso"}
                </span>
                <span className="proy-pct">{p.pct}%</span>
              </div>
            </div>
          </div>
        ))}

        <div className="proy-new-card">
          <Icon name="plus" size={24} />
          <span>Nuevo proyecto</span>
        </div>
      </div>
    </div>
  );
}
