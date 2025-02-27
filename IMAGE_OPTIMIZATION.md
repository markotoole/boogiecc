# Image Optimization in Boogie Website

This document explains how images are handled and optimized in the Boogie website.

## Next.js Image Component

The website uses Next.js's built-in `Image` component to optimize images automatically. Here's what the Image component provides:

1. **Automatic Optimization**
   - Images are optimized in terms of size and format
   - Modern formats like WebP are used when supported by the browser
   - Only the required size for the specific viewport is loaded

2. **Responsive Behavior**
   - Images adapt to different screen sizes
   - Proper aspect ratios are maintained
   - Layout shifts are prevented

3. **Lazy Loading**
   - Images are only loaded when they enter the viewport
   - Improves initial page load time
   - Reduces bandwidth usage

## How Images Are Implemented

Images are implemented in several key areas of the site:

1. **Logo in Header and Footer**
   ```jsx
   <Image 
     src="/images/blog/BoogieLogo.png" 
     alt="Boogie Logo" 
     width={40} 
     height={40} 
     className="h-10 w-auto"
   />
   ```

2. **Hero Image on Homepage**
   ```jsx
   <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
     <Image
       src="/images/blog/count_nine_album_cover.png"
       alt="Count Nine Album Cover - Boogie Media"
       fill
       priority
       className="object-contain"
     />
   </div>
   ```

3. **Blog Post Images**
   ```jsx
   <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
     <Image
       src={post.image}
       alt={post.title}
       fill
       priority
       className="object-cover"
     />
   </div>
   ```

4. **Team Member Photos**
   ```jsx
   <div className="relative w-full h-full">
     <Image
       src="/images/blog/b9c40c6c-c019-44de-a721-ed9c94f788fc.png"
       alt="Jane Smith"
       fill
       className="object-cover"
     />
   </div>
   ```

## Key Image Properties

- **`fill`**: Used for responsive images to fill their parent container
- **`priority`**: Used for above-the-fold images to load with higher priority
- **`object-cover`** and **`object-contain`**: CSS properties to control how images fit within their containers
- **`width`** and **`height`**: Used when a specific size is needed, especially for static elements like logos

## Adding New Images

To add new images to the site:

1. Place image files in the appropriate directory in `/public/images/`
2. Use the Next.js `Image` component to display them
3. Ensure proper alt text for accessibility
4. For blog posts, include the image path in the post's frontmatter

## Image Directories

- `/public/images/blog/` - Blog post images, general site images
- `/public/images/team/` - Team member photos (create when needed)
- `/public/images/hero/` - Hero images for the homepage (create when needed)
- `/public/images/work/` - Project/portfolio images (create when needed)

## Best Practices

1. Always specify a meaningful `alt` text for accessibility
2. Use appropriately sized images (don't use a 5000px image for a 400px container)
3. Consider using `priority` for above-the-fold images
4. Consider image aspect ratios when designing layouts

By using Next.js Image component, the site automatically optimizes images for performance while maintaining quality across devices.