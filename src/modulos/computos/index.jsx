import { Icon } from "../../components/common/Icon.jsx";
import { ThemeToggleButton } from "../../components/ThemeToggleButton.jsx";
import { ELEMENTOS, PASOS } from "./computos.data.js";
import { useComputos } from "./useComputos.js";

export default function ModuloComputos({
  mobile = false,
  onBack = () => {},
  darkMode,
  setDarkMode,
}) {
  const {
    elemento,
    setElemento,
    largo,
    setLargo,
    ancho,
    setAncho,
    altura,
    setAltura,
    cantidad,
    setCantidad,
    volUnitario,
    volTotal,
  } = useComputos();

  if (mobile) {
    return (
      <>
        <header className="mobile-module-topbar">
          <button className="mobile-back-btn" onClick={onBack}>
            <Icon name="back" size={22} />
          </button>
          <h2>Cómputos Métricos</h2>
          <div className="mobile-topbar-actions">
            <ThemeToggleButton
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              className="mobile-theme-btn"
            />
            <button className="mobile-save-btn">
              <Icon name="save" size={22} />
            </button>
          </div>
        </header>
        <div className="mobile-stepper">
          {PASOS.map((p, i) => (
            <div key={p.num} className={`mobile-step ${i === 0 ? "active" : ""}`}>
              <div className="mobile-step-num">{p.num}</div>
              <div className="mobile-step-label">{p.label}</div>
            </div>
          ))}
        </div>
        <div className="mobile-form-content">
          <div className="mobile-section-h">1. Seleccionar elemento</div>
          <div className="mobile-section-sub">
            Elige el tipo de elemento que deseas calcular
          </div>
          <div className="mobile-element-grid">
            {ELEMENTOS.map((el) => (
              <button
                key={el.id}
                className={`mobile-element-btn ${elemento === el.id ? "active" : ""}`}
                onClick={() => setElemento(el.id)}
              >
                <span className="mobile-element-btn-icon">
                  <img src={el.iconSrc} alt={el.label} />
                </span>
                {el.label}
              </button>
            ))}
          </div>
          <div className="mobile-section-h">2. Ingresar dimensiones</div>
          <div className="mobile-section-sub" style={{ marginBottom: 14 }}>
            Ingresa las medidas requeridas
          </div>
          <div className="mobile-form-grid">
            <div className="mobile-field">
              <label>Largo (m)</label>
              <input
                type="number"
                value={largo}
                step="0.01"
                onChange={(e) => setLargo(e.target.value)}
              />
            </div>
            <div className="mobile-field">
              <label>Ancho (m)</label>
              <input
                type="number"
                value={ancho}
                step="0.01"
                onChange={(e) => setAncho(e.target.value)}
              />
            </div>
            <div className="mobile-field">
              <label>Altura (m)</label>
              <input
                type="number"
                value={altura}
                step="0.01"
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
            <div className="mobile-field">
              <label>Cantidad</label>
              <input
                type="number"
                value={cantidad}
                min="1"
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          </div>
          <div className="mobile-form-grid full">
            <div className="mobile-field">
              <label>Proyecto</label>
              <select defaultValue="edificio">
                <option value="edificio">
                  Edificio Residencial - Santa Marta
                </option>
                <option value="otro">Otro proyecto</option>
              </select>
            </div>
            <div className="mobile-field">
              <label>Nivel / Piso</label>
              <select defaultValue="nivel1">
                <option value="nivel1">Nivel 1</option>
                <option value="nivel2">Nivel 2</option>
              </select>
            </div>
          </div>
          <div className="mobile-result-box">
            <div className="mobile-result-cell">
              <label>Volumen unitario</label>
              <div className="val val-secondary">
                {volUnitario.toFixed(2)} m³
              </div>
            </div>
            <div className="mobile-result-cell">
              <label>Volumen total</label>
              <div className="val">{volTotal.toFixed(2)} m³</div>
            </div>
          </div>
        </div>
        <div className="mobile-action-row">
          <button className="btn btn-ghost">
            <Icon name="trash" size={15} /> Limpiar
          </button>
          <button className="btn btn-green">
            Siguiente <Icon name="arrow_r" size={15} />
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="page">
      <div className="page-greeting">
        <h1>
          Cómputos <span>Métricos</span>
        </h1>
        <p>
          Calcula cantidades de obra a partir de las dimensiones de tu proyecto.
        </p>
      </div>
      <div className="module-preview">
        <div className="stepper-sidebar">
          <div className="stepper-sidebar-title">1. Cómputos Métricos</div>
          {PASOS.map((p) => (
            <div
              key={p.num}
              className={`stepper-step ${p.num === 1 ? "active" : ""}`}
            >
              <div className="step-num">{p.num}</div>
              <div className="step-info">
                <strong>{p.label}</strong>
                <small>{p.sub}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="preview-content">
          <h2>Seleccionar elemento a calcular</h2>
          <p>
            Elige el tipo de elemento que deseas calcular para tu cómputo
            métrico.
          </p>
          <div className="element-selector">
            {ELEMENTOS.map((el) => (
              <button
                key={el.id}
                className={`element-btn ${elemento === el.id ? "active" : ""}`}
                onClick={() => setElemento(el.id)}
              >
                <span className="element-btn-icon">
                  <img src={el.iconSrc} alt={el.label} />
                </span>
                {el.label}
              </button>
            ))}
          </div>
          <div className="form-section-title">Datos del elemento</div>
          <div className="form-grid">
            <div className="form-field">
              <label>Proyecto</label>
              <select defaultValue="edificio">
                <option value="edificio">
                  Edificio Residencial - Santa Marta
                </option>
                <option value="otro">Otro proyecto</option>
              </select>
            </div>
            <div className="form-field">
              <label>Nivel / Piso</label>
              <select defaultValue="nivel1">
                <option value="nivel1">Nivel 1</option>
                <option value="nivel2">Nivel 2</option>
                <option value="nivel3">Nivel 3</option>
              </select>
            </div>
          </div>
          <div className="form-grid form-grid-4">
            <div className="form-field">
              <label>Largo (m)</label>
              <input
                type="number"
                value={largo}
                step="0.01"
                onChange={(e) => setLargo(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Ancho (m)</label>
              <input
                type="number"
                value={ancho}
                step="0.01"
                onChange={(e) => setAncho(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Altura (m)</label>
              <input
                type="number"
                value={altura}
                step="0.01"
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Cantidad</label>
              <input
                type="number"
                value={cantidad}
                min="1"
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          </div>
          <div className="result-bar">
            <span className="result-bar-left">
              Volumen unitario:&nbsp;&nbsp;
              <strong>{volUnitario.toFixed(2)} m³</strong>
            </span>
            <span className="result-bar-right">
              Volumen total: {volTotal.toFixed(2)} m³
            </span>
          </div>
          <div className="action-row">
            <button className="btn btn-ghost">
              <Icon name="trash" size={15} /> Limpiar
            </button>
            <button className="btn btn-green">
              <Icon name="calc" size={15} /> Calcular
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
