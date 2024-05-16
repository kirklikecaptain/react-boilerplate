import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

const devToolsEnabled = import.meta.env.VITE_DEV_TOOLS === 'enabled';

const RouterDevTools = lazy(() =>
  import('@tanstack/router-devtools').then((res) => ({
    default: res.TanStackRouterDevtools,
  })),
);

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <Suspense>{devToolsEnabled && <RouterDevTools />}</Suspense>
    </>
  ),
});
