# CLAUDE.md - Development Guidelines

## Commands
- Build: `npm run build` (Next.js build)
- Dev: `npm run dev` (Next.js dev server)
- Start: `npm run start` (Production server after build)
- Lint: `npm run lint` (ESLint)
- Format: Use Prettier (add a format script if needed)

## Code Style
- **TypeScript**: Strict mode enabled, use proper type definitions, avoid `any`
- **Components**: Use functional components with proper type annotations
- **Imports**: Group external/internal, use path aliases (@/* for src directory)
- **CSS**: Use Tailwind utility classes with consistent naming
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Images**: Use Next.js Image component with proper optimization attributes
- **MDX**: Content in src/content directory with proper frontmatter
- **Error Handling**: Use TypeScript's strict null checks, handle async errors explicitly

## Project Structure
- `/src/app/`: Next.js App Router pages and layouts
- `/src/components/`: Reusable React components
- `/src/content/`: MDX content files (posts, pages)
- `/src/lib/`: Utility functions and shared code
- `/public/`: Static assets including optimized images