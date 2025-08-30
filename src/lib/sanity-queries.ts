import { client } from '@/src/sanity/lib/client'

// GROQ queries for pages
export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
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
      ctaButton
    },
    content,
    sections[] {
      _type,
      _type == "textSection" => {
        title,
        content
      },
      _type == "imageGallery" => {
        title,
        layout,
        images[] {
          asset->,
          alt,
          caption
        }
      },
      _type == "teamSection" => {
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
        title,
        contactInfo,
        showContactForm
      },
      _type == "servicesSection" => {
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
        asset->
      }
    },
    isPublished
  }
`

export const allPagesQuery = `
  *[_type == "page" && isPublished == true] {
    title,
    slug,
    pageType,
    _updatedAt
  }
`

// Helper function to get page data
export async function getPageBySlug(slug: string) {
  return await client.fetch(pageQuery, { slug })
}

export async function getAllPages() {
  return await client.fetch(allPagesQuery)
}
