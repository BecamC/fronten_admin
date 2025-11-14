import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { TokenProvider } from './contexts/TokenContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </StrictMode>,
)
