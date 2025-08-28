# Sanity CMS Setup Guide

This guide will walk you through setting up Sanity CMS for your Boogie website.

## Prerequisites

- Node.js 18.17.0 or later
- A Sanity account (free at [sanity.io](https://sanity.io))

## Quick Setup

### 1. Install Dependencies

The dependencies have already been added to `package.json`. Install them:

```bash
npm install
```

### 2. Create a Sanity Project

If you don't have a Sanity project yet, create one:

```bash
# Install Sanity CLI globally (optional)
npm install -g @sanity/cli

# Initialize Sanity project
npx sanity init --env=.env.local
```

This will:
- Create a new Sanity project in the cloud
- Generate your project ID and dataset name
- Add the configuration to `.env.local`

### 3. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Update `.env.local` with your Sanity project details:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

**Getting your API token:**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "API" → "Tokens"
4. Create a new token with "Editor" permissions

### 4. Deploy Sanity Studio

Deploy your Sanity Studio schema:

```bash
npx sanity deploy
```

### 5. Start Development

```bash
# Start your Next.js site
npm run dev

# In another terminal, start Sanity Studio (optional - you can also use the embedded studio)
npm run studio
```

## Using Sanity

### Content Types

The following content types are available:

1. **Posts** - Blog posts with rich text content
2. **Authors** - Writer profiles with bio and social links
3. **Categories** - Post categories with colors

### Accessing Sanity Studio

You can access Sanity Studio in two ways:

1. **Embedded Studio** (recommended): Visit `http://localhost:3000/studio`
2. **Standalone Studio**: Run `npm run studio` and visit `http://localhost:3333`

### Creating Content

1. Go to Sanity Studio
2. Create authors first (you'll reference them in posts)
3. Create categories (optional)
4. Create your first blog post

### Content Fields

#### Blog Posts
- **Title**: Post title (required)
- **Slug**: URL-friendly version (auto-generated from title)
- **Author**: Reference to an author
- **Main Image**: Featured image with hotspot editing
- **Categories**: Multiple category tags
- **Published At**: Publication date
- **Body**: Rich text content with images, code blocks, and formatting
- **Excerpt**: Short description for previews and SEO
- **SEO**: Meta title and description

#### Authors
- **Name**: Author's name (required)
- **Slug**: URL-friendly version
- **Image**: Profile photo
- **Bio**: Rich text biography
- **Email**: Contact email
- **Social Links**: Twitter, LinkedIn, website URLs

#### Categories
- **Title**: Category name (required)
- **Slug**: URL-friendly version
- **Description**: Category description
- **Color**: Brand color for the category

## Migrating from MDX

If you have existing MDX content, you can migrate it to Sanity by:

1. Creating corresponding authors and categories in Sanity
2. Creating posts and copying content from your MDX files
3. Converting markdown content to Sanity's rich text format

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN` (optional, for write operations)

### Other Platforms

Make sure to set the environment variables on your hosting platform.

## Advanced Configuration

### Custom Schema

You can extend the schema by modifying files in `sanity/schemaTypes/`:

- `postType.ts` - Blog post fields
- `authorType.ts` - Author fields
- `categoryType.ts` - Category fields
- `blockContentType.ts` - Rich text configuration

### Custom Queries

Add custom queries in `src/lib/queries.ts` for specific content needs.

### Live Preview

For live preview functionality, you can set up Sanity's preview mode by following their [official documentation](https://www.sanity.io/docs/preview-content-on-site).

## Troubleshooting

### Common Issues

1. **"Project ID not found"**: Make sure your `.env.local` file has the correct project ID
2. **"Dataset not found"**: Verify the dataset name (usually 'production')
3. **Images not loading**: Check that `@sanity/image-url` is properly configured
4. **Studio not loading**: Ensure all dependencies are installed

### Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://slack.sanity.io/)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/nextjs)

## Features

✅ Rich text editing with images and code blocks  
✅ Image optimization and CDN  
✅ Real-time collaboration  
✅ Version history  
✅ Custom content types  
✅ SEO optimization  
✅ Embedded studio at `/studio`  
✅ TypeScript support  
✅ Responsive design  
