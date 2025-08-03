import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarShopApp from './CarShopApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarShopApp />
  </StrictMode>,
)
