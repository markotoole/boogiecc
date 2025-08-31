import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper function to generate organization structured data
export const getOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boogie",
    "description": "Professional music production and artist management services",
    "url": "https://boog.ie",
    "logo": {
      "@type": "ImageObject",
      "url": "https://boog.ie/images/blog-new/boogieredw.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "hello@boog.ie"
    },
    "sameAs": [
      // Add social media profiles here when available
    ]
  }
}

// Helper function to generate website structured data
export const getWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Boogie",
    "url": "https://boog.ie",
    "description": "Professional music production and artist management services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://boog.ie/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

// Helper function to generate artist/person structured data
export const getPersonStructuredData = (artist: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": artist.name,
    "description": artist.bio || artist.description,
    "url": `https://boog.ie/artists/${artist.slug?.current}`,
    "image": artist.image ? `https://boog.ie${artist.image}` : undefined,
    "memberOf": {
      "@type": "Organization",
      "name": "Boogie"
    }
  }
}

// Helper function for music group structured data
export const getMusicGroupStructuredData = (artist: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": artist.name,
    "description": artist.bio || artist.description,
    "url": `https://boog.ie/artists/${artist.slug?.current}`,
    "image": artist.image ? `https://boog.ie${artist.image}` : undefined,
    "genre": artist.genres || [],
    "foundingDate": artist.foundingDate,
    "recordLabel": {
      "@type": "Organization",
      "name": "Boogie"
    }
  }
}