import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './data/theme.js'
import MaterialMode from './components/MaterialMode/MaterialMode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MaterialMode /> */}
  </StrictMode>,
)
