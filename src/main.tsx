import { RouterProvider, createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { routeTree } from '~/routeTree.gen';
import '~/styles/main.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found in `index.html`');
}

const router = createRouter({ routeTree });

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
