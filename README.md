# Boogie Website

This is the official website for Boogie, a modern publishing and media production company. The site is built using Next.js, Tailwind CSS, and Sanity CMS for content management.

## Features

- Modern, responsive design
- Blog with Sanity CMS content management
- Rich text editing with images and code blocks
- Real-time content collaboration
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
git clone https://github.com/markotoole/boogiecc.git
cd boogiecc
```

2. Install dependencies
```bash
npm install
```

3. Set up Sanity CMS (see [SANITY_SETUP.md](./SANITY_SETUP.md) for detailed instructions)
```bash
# Copy environment variables
cp .env.example .env.local

# Initialize Sanity project
npx sanity init --env=.env.local

# Deploy Sanity Studio
npx sanity deploy
```

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Content Management with Sanity CMS

The website now uses Sanity CMS for content management, providing:

- **Rich Text Editor**: WYSIWYG editing with support for images, code blocks, and custom formatting
- **Real-time Collaboration**: Multiple editors can work simultaneously
- **Image Optimization**: Automatic image processing and CDN delivery
- **Version History**: Track all content changes
- **Live Preview**: See changes in real-time on your site

### Accessing Sanity Studio

- **Embedded Studio**: Visit [http://localhost:3000/studio](http://localhost:3000/studio)
- **Standalone Studio**: Run `npm run studio` and visit [http://localhost:3333](http://localhost:3333)

### Content Types

1. **Blog Posts** - Rich text articles with images, categories, and SEO
2. **Authors** - Writer profiles with bios and social links
3. **Categories** - Organized content tags with custom colors

For detailed setup instructions, see [SANITY_SETUP.md](./SANITY_SETUP.md)

## Deployment

This site is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Import the repository into Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN` (optional)
4. Configure your domain settings

## Development

### Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready site
- `npm run start` - Start the production server (after building)
- `npm run lint` - Run ESLint
- `npm run studio` - Start Sanity Studio (standalone)

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity.io
- **Content**: Rich text with PortableText
- **Images**: Next.js Image + Sanity CDN
- **Deployment**: Vercel

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [PortableText Guide](https://portabletext.org/)

## Migration from MDX

If you have existing MDX content, you can migrate it to Sanity by:

1. Creating authors and categories in Sanity Studio
2. Creating new posts and copying your MDX content
3. Converting markdown to Sanity's rich text format

The old MDX files are preserved for reference.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries, please contact [hello@boog.ie](mailto:hello@boog.ie)
