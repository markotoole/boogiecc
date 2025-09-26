# Static Artist Pages Removed

The following static artist page directories have been removed:
- count-nine/
- noesis/

These artists are now managed through Sanity CMS and use the dynamic route at `/artists/[slug]/page.tsx`.

If you're still seeing 404 errors:
1. Clear your browser cache
2. Check that the artists are published in Sanity Studio
3. Verify the slugs match exactly: 'count-nine' and 'noesis'
