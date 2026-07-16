import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './modulos/styles/variables.css'
import './modulos/styles/globals.css'
import './modulos/styles/layout.css'
import './modulos/styles/utilities.css'
import './modulos/styles/components/buttons.css'
import './modulos/styles/components/forms.css'
import './App.css'
import './modulos/styles/components/badges.css'
import './modulos/styles/components/tables.css'
import './modulos/styles/components/navigation.css'
import './modulos/styles/components/animations.css'
import './modulos/styles/modules/dashboards.css'
import './modulos/styles/modules/computos.css'
import './modulos/styles/modules/concreto.css'
import './modulos/styles/modules/biblioteca.css'
import './modulos/styles/modules/estimacion.css'
import './modulos/styles/modules/historial.css'
import './modulos/styles/modules/reportes.css'
import './modulos/styles/modules/configuracion.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
