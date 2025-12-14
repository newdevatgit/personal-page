export const posts = [
  {
    id: 'portfolio',
    title: 'How I built my portfolio with React',
    excerpt:
      'A quick story about building a modern portfolio using Vite + React + Tailwind. I cover project structure, routing, and build tips.',
    date: '2025-01-10',
    dateReadable: 'Jan 10, 2025',
    readTime: '4 min read',
    tags: ['react', 'portfolio'],
    image: 'src/assets/sample.jpg',
    url: '/blog/portfolio',
    content: `
## How I built my portfolio with React

I decided to build a fast, minimal portfolio using **Vite** + **React** + **Tailwind CSS**.

I started with a simple scaffold, added a blog grid, and used React Router for navigation. The key to a pleasant dev experience was keeping components small and reusable.

### Structure



I hope this helps you get started with your own portfolio!`
  },
  {
    id: 'tailwind',
    title: 'Why I switched to Tailwind CSS',
    excerpt:
      "After years of writing CSS manually, Tailwind changed everything for me. Here’s my journey and some tips.",
    date: '2025-01-15',
    dateReadable: 'Jan 15, 2025',
    readTime: '3 min read',
    tags: ['tailwind', 'css'],
    image: 'src/assets/sample.jpg',
    url: '/blog/tailwind',
    content: `
## Why I switched to Tailwind CSS

Tailwind's utility-first approach lets me iterate rapidly without leaving HTML. It improved consistency and made responsive design trivial.

### Tips

- Use component classes for repeated patterns.
- Don't be afraid to extract small components when things get verbose.

Tailwind isn't perfect for every project, but for small fast sites it's fantastic.`
  }
];
