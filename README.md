# Boogie Website

This is the official website for Boogie, a modern publishing and media production company. The site is built using Next.js, Tailwind CSS, and MDX for content management.

## Features

- Modern, responsive design
- Blog with MDX content management
- Dark mode support
- SEO optimized
- Contact form
- Ready for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/boogiecc.git
cd boogiecc
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Content Management

The website uses MDX for content management. Content files are stored in the following directories:

- `/src/content/posts/` - Blog posts
- `/src/content/pages/` - Static pages

### Creating a New Blog Post

1. Create a new `.mdx` file in the `/src/content/posts/` directory
2. Add frontmatter at the top of the file:
```
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2"]
image: "/blog/your-image.jpg"
---
```
3. Write your content using Markdown syntax

## Deployment

This site is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Import the repository into Vercel
3. Configure your domain settings in the Vercel dashboard

## Development

### Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready site
- `npm run start` - Start the production server (after building)
- `npm run lint` - Run ESLint

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/docs/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries, please contact [hello@boog.ie](mailto:hello@boog.ie)
