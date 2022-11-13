import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactGA.initialize('G-RM96H420F4', { standardImplementation: true });

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);