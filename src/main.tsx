import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './styles/main.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found in `index.html`');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
