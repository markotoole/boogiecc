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
4. **Pages** - Static pages (About, Artists, Contact, etc.)

### Accessing Sanity Studio

You can access Sanity Studio in two ways:

1. **Embedded Studio** (recommended): Visit `http://localhost:3000/studio`
2. **Standalone Studio**: Run `npm run studio` and visit `http://localhost:3333`

### Creating Content

1. Go to Sanity Studio
2. Create authors first (you'll reference them in posts)
3. Create categories (optional)
4. Create your first blog post
5. Create pages for your static content

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

#### Pages (New!)
- **Title**: Page title (required)
- **Slug**: URL path (e.g., "about" for /about)
- **Page Type**: About, Artists, Contact, Work, Services, or Custom
- **Hero Section**: Optional hero with headline, image, and CTA button
- **Content**: Main page content using rich text
- **Sections**: Modular content sections:
  - **Text Sections**: Rich text content with optional titles
  - **Image Galleries**: Grid, masonry, or carousel layouts
  - **Team Sections**: Staff profiles with photos and bios
  - **Contact Sections**: Contact info and form placeholder
  - **Services Sections**: Service listings with icons and features
- **SEO**: Meta title, description, and social share image

## Page Management Features

### Dynamic Page Routing
All pages created in Sanity automatically get routes based on their page type:
- About page type → `/about`
- Artists page type → `/artists`  
- Contact page type → `/contact`
- Custom pages use their slug

### Flexible Page Builder
Each page can have multiple sections in any order:

1. **Text Sections** - Rich content with headings
2. **Image Galleries** - Multiple layout options
3. **Team Sections** - Staff profiles with social links
4. **Contact Sections** - Contact information display
5. **Services Sections** - Service listings with features

### Hero Sections
Every page can have an optional hero section with:
- Custom headline and subheadline
- Background image with overlay
- Call-to-action button
- Responsive design

## Migrating Existing Pages

To migrate your existing static pages (About, Artists, Contact, etc.) to Sanity:

1. **Visit Sanity Studio** at `/studio`
2. **Create a new Page** document
3. **Set the Page Type** to match your existing page (e.g., "about")
4. **Copy your existing content** into the appropriate sections
5. **Add images** and structure using the section builder
6. **Set SEO information** for better search visibility
7. **Publish** when ready

### Example: Migrating the About Page

1. Create a new Page with:
   - Title: "About Boogie"
   - Page Type: "about" 
   - Hero Section: Add headline and hero image
2. Add sections:
   - Text section with company story
   - Team section with staff profiles
   - Image gallery with office/work photos
3. Configure SEO settings
4. Publish

The page will automatically be available at `/about`

## Advanced Configuration

### Custom Schema

You can extend the schema by modifying files in `sanity/schemaTypes/`:

- `postType.ts` - Blog post fields
- `authorType.ts` - Author fields
- `categoryType.ts` - Category fields
- `pageType.ts` - Page fields and sections
- `blockContentType.ts` - Rich text configuration

### Custom Queries

Add custom queries in `src/lib/queries.ts` for specific content needs.

### Page Components

Page sections are rendered by components in `src/components/PageSections.tsx`. You can:
- Modify existing section components
- Add new section types
- Customize styling and layout

### Live Preview

For live preview functionality, you can set up Sanity's preview mode by following their [official documentation](https://www.sanity.io/docs/preview-content-on-site).

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

## Troubleshooting

### Common Issues

1. **"Project ID not found"**: Make sure your `.env.local` file has the correct project ID
2. **"Dataset not found"**: Verify the dataset name (usually 'production')
3. **Images not loading**: Check that `@sanity/image-url` is properly configured
4. **Studio not loading**: Ensure all dependencies are installed
5. **Pages not showing**: Make sure pages are marked as "Published" in Sanity Studio

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
✅ **Page management system**  
✅ **Modular page builder**  
✅ **Hero sections**  
✅ **Dynamic routing**  
✅ **Team profiles**  
✅ **Image galleries**  
✅ **Contact sections**  
✅ **Service listings**  
