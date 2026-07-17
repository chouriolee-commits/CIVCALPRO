import { Icon } from "../../components/common/Icon.jsx";
import { useBiblioteca } from "./useBiblioteca.js";

export default function ModuloBiblioteca() {
  const {
    busqueda,
    setBusqueda,
    materialActivo,
    setMaterialActivo,
    categoriasFiltradas,
  } = useBiblioteca();

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Biblioteca de <span className="text-purple">Materiales</span>
        </h1>
        <p>
          Consulta información técnica de materiales de construcción y sus
          propiedades.
        </p>
      </div>

      <div className="bib-layout">
        {/* PANEL IZQUIERDO — Lista */}
        <div className="bib-panel-left">
          {/* Buscador */}
          <div className="bib-search">
            <Icon name="search" size={15} />
            <input
              type="text"
              placeholder="Buscar material..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {/* Lista por categorías */}
          {categoriasFiltradas.map((cat) => (
            <div key={cat.id}>
              <div className="bib-cat-label">{cat.label}</div>
              {cat.materiales.map((mat) => (
                <div
                  key={mat.id}
                  className={`bib-mat-item ${materialActivo?.id === mat.id ? "active" : ""}`}
                  onClick={() => setMaterialActivo(mat)}
                >
                  <span
                    className="bib-mat-dot"
                    style={{ background: cat.color }}
                  />
                  {mat.nombre}
                </div>
              ))}
            </div>
          ))}

          {categoriasFiltradas.length === 0 && (
            <div className="bib-empty">
              <Icon name="search" size={20} />
              <p>Sin resultados</p>
            </div>
          )}
        </div>

        {/* PANEL DERECHO — Ficha técnica */}
        {materialActivo && (
          <div className="bib-panel-right">
            {/* Header */}
            <div className="bib-det-header">
              <div>
                <div className="bib-det-name">{materialActivo.nombre}</div>
                <div className="bib-det-cat">{materialActivo.categoria}</div>
                <span className="bib-det-badge">{materialActivo.norma}</span>
              </div>
            </div>

            {/* Propiedades físicas */}
            <div className="bib-section-title">Propiedades físicas</div>
            <div className="bib-props-grid">
              {materialActivo.propiedades.map((p, i) => (
                <div key={i} className="bib-prop">
                  <div className="bib-prop-label">{p.label}</div>
                  <div className="bib-prop-val">
                    {p.valor} <span className="bib-prop-unit">{p.unidad}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Presentaciones */}
            <div className="bib-section-title">Presentaciones disponibles</div>
            <div className="bib-tag-row">
              {materialActivo.presentaciones.map((t, i) => (
                <span key={i} className="bib-tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Usos */}
            <div className="bib-section-title">Usos principales</div>
            <div className="bib-tag-row">
              {materialActivo.usos.map((u, i) => (
                <span key={i} className="bib-tag">
                  {u}
                </span>
              ))}
            </div>

            {/* Normas */}
            <div className="bib-section-title">Normas aplicables</div>
            {materialActivo.normas.map((n, i) => (
              <div key={i} className="bib-norm-row">
                <span>{n.desc}</span>
                <span className="bib-norm-code">{n.codigo}</span>
              </div>
            ))}

            {/* Acciones */}
            <div className="bib-action-row">
              <button className="btn btn-ghost">
                <Icon name="export" size={15} /> Exportar ficha
              </button>
              <button className="btn btn-purple">
                <Icon name="calc" size={15} /> Usar en cálculo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
