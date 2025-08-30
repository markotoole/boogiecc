import { getArtistBySlug, getAllArtists } from '../../../lib/artist-queries'
import { urlFor } from '../../../sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ArtistPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all artists
export async function generateStaticParams() {
  const artists = await getAllArtists()
  
  return artists.map((artist) => ({
    slug: artist.slug.current,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArtistPageProps) {
  const artist = await getArtistBySlug(params.slug)
  
  if (!artist) {
    return {
      title: 'Artist Not Found',
    }
  }
  
  const displayName = artist.stageName || artist.name
  
  return {
    title: artist.seo?.metaTitle || `${displayName} | Boogie Artists`,
    description: artist.seo?.metaDescription || artist.shortBio || `Learn about ${displayName}, ${artist.role || 'artist'} in the Boogie collective.`,
  }
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const artist = await getArtistBySlug(params.slug)
  
  if (!artist) {
    notFound()
  }
  
  const displayName = artist.stageName || artist.name
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        {artist.coverImage?.asset ? (
          <div className="relative h-[60vh] overflow-hidden">
            <Image
              src={urlFor(artist.coverImage).url()}
              alt={artist.coverImage.alt || displayName}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          </div>
        ) : (
          <div className="h-[40vh] bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-end gap-6">
              {/* Profile Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                {artist.profileImage?.asset ? (
                  <Image
                    src={urlFor(artist.profileImage).url()}
                    alt={artist.profileImage.alt || displayName}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200">
                    <span className="text-gray-400 text-sm">No Image</span>
                  </div>
                )}
              </div>
              
              {/* Artist Info */}
              <div className="text-white flex-grow">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">{displayName}</h1>
                {artist.role && (
                  <p className="text-xl md:text-2xl text-blue-200 mb-4">{artist.role}</p>
                )}
                {artist.shortBio && (
                  <p className="text-lg text-gray-200 max-w-3xl">{artist.shortBio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Full Biography */}
              {artist.fullBio && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">About {displayName}</h2>
                  <div className="prose prose-lg max-w-none">
                    <PortableText value={artist.fullBio} />
                  </div>
                </div>
              )}

              {/* Music Samples */}
              {artist.musicSamples && artist.musicSamples.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Music</h2>
                  <div className="space-y-6">
                    {artist.musicSamples.map((sample, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">{sample.title}</h3>
                        {sample.description && (
                          <p className="text-gray-600 mb-4">{sample.description}</p>
                        )}
                        {sample.embedUrl && (
                          <div className="aspect-video">
                            <iframe
                              src={sample.embedUrl}
                              title={sample.title}
                              className="w-full h-full rounded"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Photo Gallery */}
              {artist.gallery && artist.gallery.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {artist.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={urlFor(image).url()}
                          alt={image.alt || `${displayName} gallery image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {image.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                            <p className="text-sm">{image.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Social Links */}
                {artist.socialLinks && (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>
                    <div className="space-y-3">
                      {artist.socialLinks.website && (
                        <a
                          href={artist.socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          <span>🌐</span>
                          <span className="ml-2">Website</span>
                        </a>
                      )}
                      {artist.socialLinks.spotify && (
                        <a
                          href={artist.socialLinks.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-green-600 hover:text-green-800"
                        >
                          <span>🎵</span>
                          <span className="ml-2">Spotify</span>
                        </a>
                      )}
                      {artist.socialLinks.soundcloud && (
                        <a
                          href={artist.socialLinks.soundcloud}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-orange-600 hover:text-orange-800"
                        >
                          <span>🔊</span>
                          <span className="ml-2">SoundCloud</span>
                        </a>
                      )}
                      {artist.socialLinks.bandcamp && (
                        <a
                          href={artist.socialLinks.bandcamp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-700 hover:text-blue-900"
                        >
                          <span>🎧</span>
                          <span className="ml-2">Bandcamp</span>
                        </a>
                      )}
                      {artist.socialLinks.youtube && (
                        <a
                          href={artist.socialLinks.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-red-600 hover:text-red-800"
                        >
                          <span>📹</span>
                          <span className="ml-2">YouTube</span>
                        </a>
                      )}
                      {artist.socialLinks.instagram && (
                        <a
                          href={artist.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-pink-600 hover:text-pink-800"
                        >
                          <span>📷</span>
                          <span className="ml-2">Instagram</span>
                        </a>
                      )}
                      {artist.socialLinks.twitter && (
                        <a
                          href={artist.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-500 hover:text-blue-700"
                        >
                          <span>🐦</span>
                          <span className="ml-2">Twitter</span>
                        </a>
                      )}
                      {artist.socialLinks.facebook && (
                        <a
                          href={artist.socialLinks.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-800 hover:text-blue-900"
                        >
                          <span>📘</span>
                          <span className="ml-2">Facebook</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Back to Artists */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border">
                  <Link
                    href="/artists"
                    className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  >
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Artists
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
