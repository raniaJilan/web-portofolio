import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ActiveSectionProvider } from './context/ActiveSectionContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ActiveSectionProvider>
          <App />
        </ActiveSectionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
