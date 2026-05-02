import React from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './pages/Index'
import { LanguageProvider } from './contexts/LanguageContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Index />
    </LanguageProvider>
  </React.StrictMode>,
)
