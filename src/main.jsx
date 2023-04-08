import(/* webpackPreload: true */ './assets/fonts/B612Mono-Regular.woff');
import(/* webpackPreload: true */ './assets/fonts/B612Mono-Bold.woff');
import(/* webpackPreload: true */ './assets/fonts/Brush-Flower.woff');
import(
  /* webpackPreload: true */ './assets/fonts/SaolDisplay-LightItalic.woff'
);
import(
  /* webpackPreload: true */ './assets/fonts/SaolDisplay-SemiboldItalic.woff'
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
