import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    TanStackRouterVite({
      generatedRouteTree: 'src/libs/tanstack/router/generated.router-tree.ts',
    }),
  ],
  server: {
    port: 3000,
  },
});
