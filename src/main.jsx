import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/fonts/B612Mono-Regular.ttf'
import './assets/fonts/B612Mono-Bold.ttf'
import './assets/fonts/Brush-Flower.otf'
import './assets/fonts/SaolDisplay-LightItalic.ttf'
import './assets/fonts/SaolDisplay-SemiboldItalic.ttf'
import './index.css'
import App from './App'
import NoiseLayer from './components/NoiseLayer'
import Navigation from './components/Navigation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoiseLayer />
    <Navigation />
    <App />
  </React.StrictMode>,
)
