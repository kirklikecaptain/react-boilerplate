import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css';

import '~/styles/main.css';
import { queryClient } from './libs/tanstack/query/config';
import { router } from './libs/tanstack/router/config';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found in `index.html`');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
