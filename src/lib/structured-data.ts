export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Boogie Media',
    description: 'Professional music production and artist management services',
    url: 'https://boogiecc.vercel.app',
    logo: 'https://boogiecc.vercel.app/images/blog-new/boogieredw.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@boog.ie',
      url: 'https://boogiecc.vercel.app/contact'
    },
    sameAs: [
      // Add your social media URLs here when available
      // 'https://twitter.com/boogiemedia',
      // 'https://instagram.com/boogiemedia',
    ],
    industry: 'Music Production',
    foundingDate: '2023'
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Boogie Media',
    description: 'Professional music production and artist management services',
    url: 'https://boogiecc.vercel.app',
    inLanguage: 'en-US',
    copyrightYear: 2025,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Boogie Media'
    }
  }
}

export function generatePersonSchema(artist: any) {
  if (!artist) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    description: artist.shortBio,
    url: `https://boogiecc.vercel.app/artists/${artist.slug.current}`,
    image: artist.profileImage?.asset?.url,
    jobTitle: artist.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Boogie Media'
    },
    sameAs: artist.socialLinks ? Object.values(artist.socialLinks).filter(Boolean) : []
  }
}

export function generateMusicGroupSchema(artist: any) {
  if (!artist) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: artist.stageName || artist.name,
    description: artist.shortBio,
    url: `https://boogiecc.vercel.app/artists/${artist.slug.current}`,
    image: artist.profileImage?.asset?.url,
    genre: 'Electronic Music', // You could make this dynamic
    recordLabel: 'Boogie Media',
    sameAs: artist.socialLinks ? Object.values(artist.socialLinks).filter(Boolean) : []
  }
}