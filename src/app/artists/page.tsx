import { getAllArtists } from '../../lib/artist-queries'
import { ArtistGrid } from '../../components/ArtistCard'
import Image from "next/image";
import Link from "next/link";

export default async function ArtistsPage() {
  // Fetch all artists from Sanity
  const artists = await getAllArtists()

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Artists</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet the talented creators pushing boundaries and crafting exceptional work in our collective. 
            Each artist brings their unique vision and sound to our creative community.
          </p>
        </div>

        {/* Dynamic Artists from Sanity */}
        {artists.length > 0 ? (
          <ArtistGrid artists={artists} showBios={true} maxColumns={3} />
        ) : (
          /* Fallback to static content if no Sanity artists */
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Count Nine Profile - Fallback */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-6 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog-optimized/countninestanding.webp"
                    alt="Count Nine"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Count Nine</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">
                Electronic Music Producer
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. Drawing from occult symbolism and quantum physics alike, his productions pulse with otherworldly energy while maintaining dance floor appeal.
              </p>
              <div className="mt-auto">
                <Link 
                  href="/artists/count-nine"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Full Profile
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Noesis Profile - Fallback */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-6 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog-new/noesis.png"
                    alt="Noesis"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Noesis</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">
                Sound Artist
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Noesis harnesses the transformative power of sound to guide listeners through the depths of human experience and beyond. Her shape-shifting compositions blend haunting vocals with intricate electronic textures, creating a sonic alchemy that's both introspective and expansive.
              </p>
              <div className="mt-auto">
                <Link 
                  href="/artists/noesis"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Full Profile
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Blackwood Chapel (Wade Corrigan) Profile - Fallback */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-6 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog-new/wadecorrigan2.png"
                    alt="Wade Corrigan - Blackwood Chapel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Blackwood Chapel</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3 font-medium">
                Wade Corrigan
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                In an era of oversharing and manufactured personas, Wade Corrigan remains an enigma by choice. The singer, guitarist, and primary songwriter for Blackwood Chapel has only recently begun sharing his music with the world, emerging from years of quiet creation with a catalog that speaks to the depth of a life fully lived. Those who know Corrigan describe him as possessing the steady presence of a river—calm on the surface but carrying powerful undercurrents.
              </p>
              <div className="mt-auto">
                <Link 
                  href="/artists/wade-corrigan"
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
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Interested in Joining Our Collective?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              We're always looking for talented artists who share our passion for pushing creative boundaries. 
              If you're creating something exceptional, we'd love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
