import { client } from '../sanity/lib/client'

// GROQ queries for artists
export const allArtistsQuery = `
  *[_type == "artist" && isActive == true] | order(featured desc, sortOrder asc, name asc) {
    _id,
    name,
    slug,
    stageName,
    role,
    profileImage {
      asset->,
      alt
    },
    shortBio,
    socialLinks,
    featured,
    sortOrder
  }
`

export const featuredArtistsQuery = `
  *[_type == "artist" && isActive == true && featured == true] | order(sortOrder asc, name asc) [0...4] {
    _id,
    name,
    slug,
    stageName,
    role,
    profileImage {
      asset->,
      alt
    },
    shortBio,
    socialLinks
  }
`

// Simplified query for debugging
export const artistBySlugQueryDebug = `
  *[_type == "artist" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    slug,
    customContent
  }
`

export const artistBySlugQuery = `
  *[_type == "artist" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    slug,
    stageName,
    role,
    profileImage {
      asset->,
      alt
    },
    coverImage {
      asset->,
      alt
    },
    shortBio,
    fullBio,
    customContent[] {
      _type,
      _key,
      blockType,
      title,
      subtitle,
      content,
      htmlContent,
      htmlDescription,
      colorScheme,
      alignment,
      items[] {
        title,
        content,
        icon,
        image {
          asset->,
          alt
        },
        link {
          text,
          url
        }
      },
      backgroundImage {
        asset->,
        alt
      },
      ctaButton {
        text,
        url,
        style
      },
      spacing,
      asset->,
      alt,
      caption
    },
    socialLinks,
    musicSamples[] {
      title,
      embedUrl,
      description
    },
    gallery[] {
      asset->,
      alt,
      caption
    },
    seo {
      metaTitle,
      metaDescription
    }
  }
`

// Helper functions
export async function getAllArtists() {
  return await client.fetch(allArtistsQuery)
}

export async function getFeaturedArtists() {
  return await client.fetch(featuredArtistsQuery)
}

export async function getArtistBySlug(slug: string) {
  const result = await client.fetch(artistBySlugQuery, { slug })
  console.log('Full artist query result for', slug, ':', result)
  return result
}

// Debug function
export async function getArtistDebug(slug: string) {
  const result = await client.fetch(artistBySlugQueryDebug, { slug })
  console.log('Debug artist query result for', slug, ':', result)
  return result
}
