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
