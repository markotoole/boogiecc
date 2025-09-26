# Static artist pages removed

The following static artist pages have been removed and migrated to Sanity CMS:

- Count Nine (`src/app/artists/count-nine/`)
- Noesis (`src/app/artists/noesis/`)

These artists are now fully managed through Sanity CMS and can be edited in Sanity Studio. The dynamic route at `src/app/artists/[slug]/page.tsx` will handle displaying their content.

All content including bios, images, and social links has been migrated to the CMS. Custom HTML blocks can now be added through the "Additional Content & Embeds" section in Sanity Studio.
