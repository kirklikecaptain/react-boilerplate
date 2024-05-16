import { createLazyFileRoute } from '@tanstack/react-router';

function Index() {
  return <h1>Home Page</h1>;
}

export const Route = createLazyFileRoute('/')({
  component: Index,
});
