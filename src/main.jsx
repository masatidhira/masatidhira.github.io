import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/fonts/Brush-Flower.otf'
import './assets/fonts/SaolDisplay-LightItalic.ttf'
import './index.css'
import NoiseLayer from './components/NoiseLayer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoiseLayer />
    <App />
  </React.StrictMode>,
)
