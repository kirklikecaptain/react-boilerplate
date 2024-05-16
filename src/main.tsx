import React from 'react';
import ReactDOM from 'react-dom/client';

import '~/styles/main.css';

function App() {
  return (
    <div>
      <h1>React App Boilerplate</h1>
    </div>
  );
}

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found in `index.html`');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
