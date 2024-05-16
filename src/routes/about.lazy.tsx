import { createLazyFileRoute } from '@tanstack/react-router';

function About() {
  return <h1>About Page</h1>;
}

export const Route = createLazyFileRoute('/about')({
  component: About,
});
