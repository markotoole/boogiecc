import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../sanity/lib/image'

interface Artist {
  _id: string
  name: string
  slug: { current: string }
  stageName?: string
  role?: string
  profileImage?: {
    asset: any
    alt?: string
  }
  shortBio?: string
  socialLinks?: {
    website?: string
    spotify?: string
    soundcloud?: string
    bandcamp?: string
    youtube?: string
    instagram?: string
    twitter?: string
    facebook?: string
  }
}

interface ArtistCardProps {
  artist: Artist
  showBio?: boolean
  size?: 'small' | 'medium' | 'large'
}

export function ArtistCard({ artist, showBio = true, size = 'medium' }: ArtistCardProps) {
  const displayName = artist.stageName || artist.name
  const imageHeight = size === 'small' ? 200 : size === 'large' ? 350 : 250

  return (
    <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      {/* Artist Image */}
      <div className="mb-6 flex justify-center">
        <div className={`relative w-full overflow-hidden rounded-lg`} style={{ height: imageHeight }}>
          {artist.profileImage?.asset ? (
            <Image
              src={urlFor(artist.profileImage).url()}
              alt={artist.profileImage.alt || displayName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
      </div>

      {/* Artist Info */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-2">{displayName}</h3>
        
        {artist.role && (
          <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">
            {artist.role}
          </p>
        )}

        {showBio && artist.shortBio && (
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {artist.shortBio}
          </p>
        )}

        {/* Social Links */}
        {artist.socialLinks && (
          <div className="flex flex-wrap gap-3 mb-4">
            {artist.socialLinks.website && (
              <a
                href={artist.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Website
              </a>
            )}
            {artist.socialLinks.spotify && (
              <a
                href={artist.socialLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:text-green-800"
              >
                Spotify
              </a>
            )}
            {artist.socialLinks.soundcloud && (
              <a
                href={artist.socialLinks.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-600 hover:text-orange-800"
              >
                SoundCloud
              </a>
            )}
            {artist.socialLinks.instagram && (
              <a
                href={artist.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-600 hover:text-pink-800"
              >
                Instagram
              </a>
            )}
          </div>
        )}

        {/* View Profile Link */}
        <div className="mt-auto">
          <Link 
            href={`/artists/${artist.slug.current}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Full Profile
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface ArtistGridProps {
  artists: Artist[]
  showBios?: boolean
  maxColumns?: 2 | 3 | 4
}

export function ArtistGrid({ artists, showBios = true, maxColumns = 3 }: ArtistGridProps) {
  const gridCols = maxColumns === 2 ? 'md:grid-cols-2' : maxColumns === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid gap-8 sm:grid-cols-1 ${gridCols}`}>
      {artists.map((artist) => (
        <ArtistCard
          key={artist._id}
          artist={artist}
          showBio={showBios}
        />
      ))}
    </div>
  )
}

// Simplified artist card for homepage
export function FeaturedArtistCard({ artist }: { artist: Artist }) {
  const displayName = artist.stageName || artist.name

  return (
    <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
      <div className="mb-6 flex justify-center">
        <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
          {artist.profileImage?.asset ? (
            <Image
              src={urlFor(artist.profileImage).url()}
              alt={artist.profileImage.alt || displayName}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold">{displayName}</h3>
      
      {artist.shortBio && (
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          {artist.shortBio}
        </p>
      )}
      
      <div className="mt-6">
        {artist.slug?.current ? (
          <Link 
            href={`/artists/${artist.slug.current}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Full Profile
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        ) : (
          <span className="inline-flex items-center text-gray-400 dark:text-gray-500">
            Profile Coming Soon
          </span>
        )}
      </div>
    </div>
  )
}
