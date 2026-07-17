import { Icon } from "../../components/common/Icon.jsx";
import { HELP_QUICK_ACTIONS, HELP_FAQS, HELP_SUPPORT_CHANNELS, HELP_TIPS } from "./ayuda.data.js";
import { useAyuda } from "./useAyuda.js";

export default function ModuloAyuda({ mobile = false, onBack = () => {} }) {
  const {
    searchText,
    setSearchText,
    setOpenFaq,
    visibleCategories,
    visibleFaqs,
    activeFaqId,
    handleQuickAction,
  } = useAyuda();

  const wrapperClass = mobile
    ? "mobile-page help-page help-mobile"
    : "page help-page help-desktop";

  return (
    <>
      {mobile && (
        <header className="mobile-module-topbar">
          <button className="mobile-back-btn" onClick={onBack}>
            <Icon name="back" size={22} />
          </button>
          <h2>Ayuda</h2>
          <button className="mobile-save-btn" type="button" aria-label="Ayuda">
            <Icon name="help" size={22} />
          </button>
        </header>
      )}
      <div className={wrapperClass}>
      <section className="help-hero">
        <div className="help-hero-main">
          <div className="help-hero-icon">
            <Icon name="help" size={18} />
          </div>
          <div>
            <h1>Ayuda</h1>
            <p>Encuentra respuestas, guías y soporte para usar CivCalPro.</p>
          </div>
        </div>
        <span className="help-hero-pill">Centro de ayuda</span>
      </section>

      <div className="help-search">
        <Icon name="search" size={16} />
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Buscar en la ayuda..."
        />
      </div>

      <div className="help-quick-grid">
        {HELP_QUICK_ACTIONS.map((item) => (
          <button
            key={item.title}
            type="button"
            className="help-quick-card"
            onClick={() => handleQuickAction(item.query)}
          >
            {item.badge && <span className="help-quick-badge">{item.badge}</span>}
            <span className="help-quick-icon">
              <Icon name={item.icon} size={16} />
            </span>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </button>
        ))}
      </div>

      <div className="help-layout">
        <div className="help-column">
          <section className="help-panel">
            <div className="help-panel-head">
              <div>
                <h3>Categorías de ayuda</h3>
                <p>Explora los temas más consultados</p>
              </div>
              <span>{visibleCategories.length} temas</span>
            </div>

            <div className="help-category-list">
              {visibleCategories.length > 0 ? (
                visibleCategories.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    className="help-category-item"
                    onClick={() => handleQuickAction(item.query)}
                  >
                    <span className="help-category-icon">
                      <Icon name={item.icon} size={16} />
                    </span>
                    <span className="help-category-copy">
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                    <Icon name="chevron" size={14} />
                  </button>
                ))
              ) : (
                <div className="help-empty-state">
                  No encontramos categorías para esa búsqueda.
                </div>
              )}
            </div>
          </section>

          <section className="help-panel">
            <div className="help-panel-head">
              <div>
                <h3>Preguntas frecuentes</h3>
                <p>Respuestas cortas a dudas comunes</p>
              </div>
              <button
                type="button"
                className="help-link"
                onClick={() => {
                  setSearchText("");
                  setOpenFaq(HELP_FAQS[0]?.id || null);
                }}
              >
                Ver todo
              </button>
            </div>

            <div className="help-faq-list">
              {visibleFaqs.length > 0 ? (
                visibleFaqs.map((item) => {
                  const isOpen = activeFaqId === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`help-faq-item ${isOpen ? "open" : ""}`}
                    >
                      <button
                        type="button"
                        className="help-faq-question"
                        onClick={() => setOpenFaq(isOpen ? null : item.id)}
                      >
                        <span>{item.question}</span>
                        <Icon name="chevron" size={14} />
                      </button>
                      {isOpen && <div className="help-faq-answer">{item.answer}</div>}
                    </div>
                  );
                })
              ) : (
                <div className="help-empty-state">
                  No encontramos preguntas que coincidan con tu búsqueda.
                </div>
              )}
            </div>
          </section>
        </div>

        <aside className="help-sidebar">
          <section className="help-panel help-support-panel">
            <div className="help-panel-head">
              <div>
                <h3>¿Necesitas más ayuda?</h3>
                <p>Escoge el canal que prefieras</p>
              </div>
            </div>

            <div className="help-support-grid">
              {HELP_SUPPORT_CHANNELS.map((item) => (
                <div key={item.title} className={`help-support-card tone-${item.tone}`}>
                  <span className="help-support-icon">
                    <Icon name={item.icon} size={16} />
                  </span>
                  <strong>{item.title}</strong>
                  <small>{item.subtitle}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="help-panel help-tips-panel">
            <div className="help-panel-head">
              <div>
                <h3>Consejos rápidos</h3>
                <p>Pequeñas ayudas para trabajar más cómodo</p>
              </div>
            </div>

            <ul className="help-tips-list">
              {HELP_TIPS.map((tip, index) => (
                <li key={tip}>
                  <span>{index + 1}</span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
      </div>
    </>
  );
}
