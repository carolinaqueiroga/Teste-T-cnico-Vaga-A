// Importações do React e ReactDOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importação do CSS global
import './index.css'

// Importação do componente principal da aplicação
import App from './App.jsx'

// Cria a raiz da aplicação React e renderiza o App dentro do StrictMode para desenvolvimento
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
