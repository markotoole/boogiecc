import { getAllPages } from '@/lib/page-queries'
import { getAllArtists } from '@/lib/artist-queries'

export default async function sitemap() {
  // Get all published pages from Sanity
  const pages = await getAllPages()
  const artists = await getAllArtists()

  // Base URL
  const baseUrl = 'https://boogiecc.vercel.app'

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/artists`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/count-nine-interview`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic pages from Sanity
  const pageRoutes = pages.map((page: any) => ({
    url: `${baseUrl}/${page.slug.current}`,
    lastModified: new Date(page.publishedAt || page._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: page.slug.current === 'about' ? 0.9 : 0.7,
  }))

  // Artist pages
  const artistRoutes = artists.map((artist: any) => ({
    url: `${baseUrl}/artists/${artist.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...pageRoutes, ...artistRoutes]
}