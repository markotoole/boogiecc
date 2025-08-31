import { client } from '../sanity/lib/client'

// GROQ query for page by slug
export const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug && isPublished == true][0] {
    _id,
    title,
    slug,
    pageType,
    heroSection {
      headline,
      subheadline,
      heroImage {
        asset->,
        alt
      },
      ctaButton {
        text,
        link
      }
    },
    content,
    sections[] {
      _type == "textSection" => {
        _type,
        title,
        content
      },
      _type == "imageGallery" => {
        _type,
        title,
        layout,
        images[] {
          asset->,
          alt,
          caption
        }
      },
      _type == "teamSection" => {
        _type,
        title,
        members[] {
          name,
          role,
          bio,
          image {
            asset->,
            alt
          },
          socialLinks
        }
      },
      _type == "contactSection" => {
        _type,
        title,
        contactInfo,
        showContactForm
      },
      _type == "servicesSection" => {
        _type,
        title,
        services[] {
          name,
          description,
          icon {
            asset->,
            alt
          },
          features
        }
      }
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->,
        alt
      }
    },
    publishedAt,
    isPublished
  }
`

// Helper function
export async function getPageBySlug(slug: string) {
  return await client.fetch(pageBySlugQuery, { slug })
}

// Get all published pages for sitemap/navigation
export const allPagesQuery = `
  *[_type == "page" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    pageType,
    publishedAt
  }
`

export async function getAllPages() {
  return await client.fetch(allPagesQuery)
}