import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppPage from "./App"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppPage />
  </StrictMode>,
)
