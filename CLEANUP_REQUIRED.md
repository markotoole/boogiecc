# Manual Directory Cleanup

The empty static page files need to be deleted manually. Here's what needs to be removed:

1. Delete the entire `src/app/artists/count-nine/` directory
2. Delete the entire `src/app/artists/noesis/` directory

These empty directories are preventing the dynamic routes from working properly.

## Why This Matters

In Next.js App Router:
- Static routes take priority over dynamic routes
- Even empty page.tsx files block dynamic routes
- The directories need to be completely removed

## After Deletion

The dynamic route at `src/app/artists/[slug]/page.tsx` will handle:
- `/artists/count-nine` → Sanity CMS data
- `/artists/noesis` → Sanity CMS data  
- `/artists/blackwood-chapel` → Sanity CMS data (already working)

All HTML embeds will work once the static directories are removed.
