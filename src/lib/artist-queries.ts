import { client } from '@/src/sanity/lib/client'

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
  return await client.fetch(artistBySlugQuery, { slug })
}
