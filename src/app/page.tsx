import Image from "next/image";
import Link from "next/link";
import { getFeaturedArtists } from '../lib/artist-queries'
import { FeaturedArtistCard } from '../components/ArtistCard'

export default async function Home() {
  // Fetch featured artists from Sanity
  const featuredArtists = await getFeaturedArtists()

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to <span className="text-blue-600 dark:text-blue-500">Boogie!</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Where digital innovation meets creative expression. We're a multifaceted media company pushing boundaries across app development, music production, and digital publishing. Our passionate team of developers, musicians, writers, and designers collaborates to create meaningful digital experiences that resonate with audiences worldwide.
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                At boog.ie, we believe in the power of technology to amplify creative voices and build communities around shared passions. Whether you're looking for cutting-edge apps, fresh musical talents, or thought-provoking content, you've found your digital home. Explore our ecosystem of innovation and discover what happens when technical expertise meets artistic vision.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/images/blog-new/boogiehero.png"
                  alt="Boogie Hero"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Profiles Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Artist Profiles</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              Meet the talented artists pushing boundaries and creating exceptional work in our collective.
            </p>
          </div>
          
          {/* Dynamic Artists from Sanity */}
          {featuredArtists.length > 0 ? (
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {featuredArtists.map((artist) => (
                <FeaturedArtistCard key={artist._id} artist={artist} />
              ))}
            </div>
          ) : (
            /* Fallback to static content if no Sanity artists */
            <div className="mt-16 grid gap-12 md:grid-cols-2">
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
                <h3 className="text-2xl font-bold">Count Nine</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. Drawing from occult symbolism and quantum physics alike, his productions pulse with otherworldly energy while maintaining dance floor appeal.
                </p>
                <div className="mt-6">
                  <Link 
                    href="/artists/count-nine"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Full Profile
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24
