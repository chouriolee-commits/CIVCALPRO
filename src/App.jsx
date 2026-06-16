import { useState } from 'react'
import './App.css'

const icons = {
  metricas: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="10" y="14" width="44" height="36" rx="10" fill="#DFF6FF" />
      <path d="M22 24h20" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 34h28" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 44h18" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
      <circle cx="48" cy="26" r="6" fill="#7DD3FC" />
      <circle cx="48" cy="42" r="6" fill="#38BDF8" />
    </svg>
  ),
  dosificacion: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="10" y="16" width="44" height="32" rx="10" fill="#FFF7CD" />
      <path d="M22 40h20" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 24l-6 8h12l-6-8z" fill="#F59E0B" />
      <circle cx="44" cy="28" r="6" fill="#FBBF24" />
    </svg>
  ),
  biblioteca: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="12" y="16" width="12" height="32" rx="4" fill="#EDE9FE" />
      <rect x="26" y="14" width="12" height="34" rx="4" fill="#C7D2FE" />
      <rect x="40" y="18" width="12" height="30" rx="4" fill="#A78BFA" />
      <path d="M16 20h4" stroke="#5B21B6" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 18h4" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
      <path d="M44 22h4" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  estimacion: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="12" y="16" width="40" height="32" rx="8" fill="#DBEAFE" />
      <path d="M18 24h28" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 32h20" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 40h16" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
      <rect x="22" y="46" width="20" height="6" rx="3" fill="#3B82F6" />
    </svg>
  ),
  columna: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="26" y="12" width="12" height="40" rx="4" fill="#D1FAE5" />
      <path d="M30 10h4v4h-4z" fill="#10B981" />
      <path d="M24 14h16" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 52h16" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  viga: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="14" y="24" width="36" height="12" rx="6" fill="#DBEAFE" />
      <path d="M22 20v24" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 20v24" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
      <path d="M24 22h16" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 42h16" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  losa: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="12" y="18" width="40" height="28" rx="6" fill="#FCE7F3" />
      <path d="M16 24h32" stroke="#9D174D" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 38h32" stroke="#BE185D" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="34" r="5" fill="#F9A8D4" />
    </svg>
  ),
  muro: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="16" y="14" width="32" height="36" rx="4" fill="#E0F2FE" />
      <path d="M20 20h24" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 28h24" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 36h24" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 44h24" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  zapata: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path d="M14 34h36v16H14z" fill="#D1FAE5" />
      <path d="M14 30l8-10h20l8 10" fill="#10B981" opacity="0.9" />
      <path d="M18 34v14" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
      <path d="M46 34v14" stroke="#047857" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  piso: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <rect x="15" y="20" width="34" height="24" rx="4" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
      <path d="M20 24h24" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 32h24" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 40h24" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
  excavacion: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path d="M14 34l10-14h16l10 14v14H14z" fill="#FDE68A" />
      <path d="M24 20l6-8 6 8" stroke="#B45309" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 34l10 8h16l10-8" stroke="#92400E" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  otro: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
      <circle cx="32" cy="32" r="18" fill="#EDE9FE" />
      <path d="M32 22v8" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 38v4" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
      <circle cx="32" cy="18" r="2" fill="#7C3AED" />
    </svg>
  ),
}

const modules = [
  {
    title: '1. Cómputos Métricos',
    description: 'Calcula cantidades de obra a partir de las dimensiones de tu proyecto.',
    icon: icons.metricas,
    colorClass: 'module-card--green',
  },
  {
    title: '2. Dosificación de Concreto',
    description: 'Calcula la proporción de materiales para obtener el concreto que necesitas.',
    icon: icons.dosificacion,
    colorClass: 'module-card--orange',
  },
  {
    title: '3. Biblioteca de Materiales',
    description: 'Consulta información técnica de materiales de construcción y sus propiedades.',
    icon: icons.biblioteca,
    colorClass: 'module-card--purple',
  },
  {
    title: '4. Estimación de Materiales',
    description: 'Obtén la cantidad y costo de materiales necesarios para tu proyecto.',
    icon: icons.estimacion,
    colorClass: 'module-card--blue',
  },
]

const elements = [
  { id: 'columna', label: 'Columna', icon: icons.columna },
  { id: 'viga', label: 'Viga', icon: icons.viga },
  { id: 'losa', label: 'Losa', icon: icons.losa },
  { id: 'muro', label: 'Muro', icon: icons.muro },
  { id: 'zapata', label: 'Zapata', icon: icons.zapata },
  { id: 'piso', label: 'Piso', icon: icons.piso },
  { id: 'excavacion', label: 'Excavación', icon: icons.excavacion },
  { id: 'otro', label: 'Otro', icon: icons.otro },
]

function App() {
  const [selectedElement, setSelectedElement] = useState('columna')
  const [projectName, setProjectName] = useState('Edificio Residencial - Santa Marta')
  const [level, setLevel] = useState('Nivel 1')
  const [dimensions, setDimensions] = useState({
    largo: 0.3,
    ancho: 0.3,
    altura: 3.0,
    cantidad: 12,
  })

  const unitVolume =
    Number(dimensions.largo || 0) *
    Number(dimensions.ancho || 0) *
    Number(dimensions.altura || 0)
  const totalVolume = unitVolume * Number(dimensions.cantidad || 0)

  return (
    <div className="app">
      <div className="layout">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-logo">C</div>
            <div className="brand-text">
              <span className="brand-title">CIVCALPRO</span>
              <span className="brand-subtitle">Software de Cálculo</span>
            </div>
          </div>

          <div className="sidebar-section sidebar-mainnav">
            <button className="nav-link active">Inicio</button>
            <button className="nav-link">Proyectos</button>
            <button className="nav-link">Cálculos</button>
            <button className="nav-link">Perfil</button>
          </div>

          <div className="sidebar-section">
            <p className="sidebar-heading">MÓDULOS PRINCIPALES</p>
            <button className="module-link active">1. Cómputos Métricos</button>
            <button className="module-link">2. Dosificación de Concreto</button>
            <button className="module-link">3. Biblioteca de Materiales</button>
            <button className="module-link">4. Estimación de Materiales</button>
          </div>

          <div className="sidebar-section">
            <p className="sidebar-heading">GESTIÓN</p>
            <button className="module-link">Proyectos</button>
            <button className="module-link">Historial de Cálculos</button>
            <button className="module-link">Reportes</button>
          </div>

          <div className="sidebar-section">
            <p className="sidebar-heading">AJUSTES</p>
            <button className="module-link">Configuración</button>
            <button className="module-link">Ayuda</button>
          </div>

          <div className="user-card">
            <div className="user-avatar">CR</div>
            <div>
              <p className="user-name">Carlos Rodríguez</p>
              <p className="user-role">Administrador</p>
            </div>
          </div>
        </aside>

        <main className="content">
          <div className="hero-card">
            <div>
              <p className="eyebrow">¡Bienvenido a CIVCALPRO!</p>
              <h1>Selecciona un módulo para comenzar a trabajar en tu proyecto.</h1>
            </div>
            <button className="hero-notification">Notificaciones 3</button>
          </div>

          <section className="module-cards">
            {modules.map((module) => (
              <article key={module.title} className={`module-card ${module.colorClass}`}>
                <div className="module-icon">{module.icon}</div>
                <div className="module-copy">
                  <h2>{module.title}</h2>
                  <p>{module.description}</p>
                </div>
                <button className="module-action">Ingresar al módulo →</button>
              </article>
            ))}
          </section>

          <section className="calculator-card">
            <div className="calculator-head">
              <div>
                <p className="eyebrow">1. CÓMPUTOS MÉTRICOS</p>
                <h2>Seleccionar elemento a calcular</h2>
                <p>Elige el tipo de elemento que deseas calcular para tu cómputo métrico.</p>
              </div>
            </div>

            <div className="calculator-grid">
              <aside className="calculator-steps">
                <div className="step active">
                  <span>1</span>
                  <div>
                    <strong>Seleccionar elemento</strong>
                    <p>Elige el tipo de elemento a calcular</p>
                  </div>
                </div>
                <div className="step">
                  <span>2</span>
                  <div>
                    <strong>Ingresar dimensiones</strong>
                    <p>Ingresa las medidas requeridas</p>
                  </div>
                </div>
                <div className="step">
                  <span>3</span>
                  <div>
                    <strong>Resultados</strong>
                    <p>Visualiza los resultados del cálculo</p>
                  </div>
                </div>
                <div className="step">
                  <span>4</span>
                  <div>
                    <strong>Guardar</strong>
                    <p>Guarda el cómputo en tu proyecto</p>
                  </div>
                </div>
              </aside>

              <div className="calculator-panel">
                <div className="selector-row">
                  {elements.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`element-card ${
                        selectedElement === item.id ? 'element-card--selected' : ''
                      }`}
                      onClick={() => setSelectedElement(item.id)}
                    >
                      <div className="element-icon">{item.icon}</div>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label>Proyecto</label>
                    <input
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Nivel / Piso</label>
                    <select value={level} onChange={(e) => setLevel(e.target.value)}>
                      <option>Nivel 1</option>
                      <option>Nivel 2</option>
                      <option>Nivel 3</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid form-grid--4">
                  <div className="field">
                    <label>Largo (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={dimensions.largo}
                      onChange={(e) =>
                        setDimensions({ ...dimensions, largo: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Ancho (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={dimensions.ancho}
                      onChange={(e) =>
                        setDimensions({ ...dimensions, ancho: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Altura (m)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={dimensions.altura}
                      onChange={(e) =>
                        setDimensions({ ...dimensions, altura: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Cantidad</label>
                    <input
                      type="number"
                      step="1"
                      min="0"
                      value={dimensions.cantidad}
                      onChange={(e) =>
                        setDimensions({ ...dimensions, cantidad: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="results-summary">
                  <div>
                    <p>Volumen unitario</p>
                    <strong>{unitVolume.toFixed(2)} m³</strong>
                  </div>
                  <div className="results-total">
                    <p>Volumen total</p>
                    <strong>{totalVolume.toFixed(2)} m³</strong>
                  </div>
                </div>

                <div className="calculator-actions">
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={() =>
                      setDimensions({ largo: 0, ancho: 0, altura: 0, cantidad: 0 })
                    }
                  >
                    Limpiar
                  </button>
                  <button type="button" className="button-primary">
                    Calcular
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="mobile-bottom-nav">
        <button type="button">Inicio</button>
        <button type="button">Proyectos</button>
        <button type="button" className="mobile-action">
          +
        </button>
        <button type="button">Cálculos</button>
        <button type="button">Perfil</button>
      </div>
    </div>
  )
}

export default App