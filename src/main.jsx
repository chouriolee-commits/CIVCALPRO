import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './modulos/styles/variables.css'
import './modulos/styles/globals.css'
import './modulos/styles/layout.css'
import './modulos/styles/utilities.css'
import './modulos/styles/components/buttons.css'
import './modulos/styles/components/forms.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
