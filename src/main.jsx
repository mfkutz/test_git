import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ActivityProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </StrictMode>,
)
