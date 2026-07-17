import { Icon } from "../../components/common/Icon.jsx";
import { NORMAS_CATEGORIES } from "./normas.data.js";
import { useNormas } from "./useNormas.js";

export default function ModuloNormas({ mobile = false, onBack = () => {} }) {
  const {
    searchText,
    setSearchText,
    activeCategory,
    setActiveCategory,
    setSelectedId,
    selectedDoc,
    visibleDocs,
    totalDocs,
    totalCats,
  } = useNormas();

  const wrapperClass = mobile
    ? "mobile-page normas-page normas-mobile"
    : "page normas-page normas-desktop";

  const renderDocCard = (doc) => (
    <button
      key={doc.id}
      type="button"
      className={`normas-doc-card tone-${doc.tone} ${selectedDoc?.id === doc.id ? "active" : ""}`}
      onClick={() => setSelectedId(doc.id)}
    >
      <div className="normas-doc-card-top">
        <span className="normas-doc-badge">
          <Icon name="book" size={14} />
        </span>
        <span className="normas-doc-type">{doc.type}</span>
      </div>

      <strong>{doc.code}</strong>
      <p>{doc.title}</p>
      <small>{doc.summary}</small>

      <div className="normas-doc-tags">
        {doc.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </button>
  );

  return (
    <>
      {mobile && (
        <header className="mobile-module-topbar">
          <button className="mobile-back-btn" onClick={onBack}>
            <Icon name="back" size={22} />
          </button>
          <h2>Normas</h2>
          <button className="mobile-save-btn" type="button" aria-label="Normas">
            <Icon name="book" size={22} />
          </button>
        </header>
      )}

      <div className={wrapperClass}>
        <section className="normas-hero">
          <div className="normas-hero-main">
            <div className="normas-hero-icon">
              <Icon name="book" size={18} />
            </div>
            <div>
              <h1>Normas COVENIN incluidas</h1>
              <p>Biblioteca normativa integrada para consulta y soporte técnico.</p>
            </div>
          </div>
          <div className="normas-hero-stats">
            <div>
              <strong>{totalDocs}</strong>
              <span>Documentos</span>
            </div>
            <div>
              <strong>{totalCats}</strong>
              <span>Categorías</span>
            </div>
          </div>
        </section>

        <div className="normas-searchbar">
          <Icon name="search" size={16} />
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar norma, código o tema..."
          />
        </div>

        <div className="normas-filters">
          {NORMAS_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`normas-filter ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="normas-layout">
          <div className="normas-column">
            <section className="normas-panel">
              <div className="help-panel-head">
                <div>
                  <h3>Biblioteca normativa</h3>
                  <p>Selecciona un documento para ver sus datos clave</p>
                </div>
                <span>{visibleDocs.length} documentos</span>
              </div>

              <div className="normas-doc-grid">
                {visibleDocs.length > 0 ? (
                  visibleDocs.map(renderDocCard)
                ) : (
                  <div className="help-empty-state">
                    No encontramos normas para esa búsqueda.
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="normas-sidebar">
            <section className="normas-panel normas-detail-panel">
              <div className="help-panel-head">
                <div>
                  <h3>Documento seleccionado</h3>
                  <p>Vista rápida para orientar la consulta</p>
                </div>
              </div>

              {selectedDoc ? (
                <div className="normas-detail">
                  <div className={`normas-detail-hero tone-${selectedDoc.tone}`}>
                    <span className="normas-detail-icon">
                      <Icon name="book" size={18} />
                    </span>
                    <div>
                      <strong>{selectedDoc.code}</strong>
                      <p>{selectedDoc.type}</p>
                    </div>
                  </div>

                  <h4>{selectedDoc.title}</h4>
                  <p className="normas-detail-copy">{selectedDoc.summary}</p>

                  <div className="normas-detail-meta">
                    <span className="normas-pill">Incluida</span>
                    <span className="normas-pill">{selectedDoc.type}</span>
                  </div>

                  <div className="normas-source-box">
                    <strong>Archivo fuente</strong>
                    <p>{selectedDoc.source}</p>
                  </div>

                  <div className="normas-action-row">
                    <button type="button" className="btn btn-blue">
                      Ver documento
                    </button>
                    <button type="button" className="btn btn-ghost">
                      Referencia
                    </button>
                  </div>
                </div>
              ) : (
                <div className="help-empty-state">Selecciona una norma para ver sus detalles.</div>
              )}
            </section>

            <section className="normas-panel">
              <div className="help-panel-head">
                <div>
                  <h3>Uso rápido</h3>
                  <p>Ideas para navegar la biblioteca</p>
                </div>
              </div>

              <ul className="help-tips-list">
                <li>
                  <span>1</span>
                  <p>Usa los filtros para separar concreto, acero y guías técnicas.</p>
                </li>
                <li>
                  <span>2</span>
                  <p>Selecciona un documento y revisa su archivo fuente.</p>
                </li>
                <li>
                  <span>3</span>
                  <p>Más adelante podremos enlazar cada tarjeta al PDF correspondiente.</p>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </>
  );
}
