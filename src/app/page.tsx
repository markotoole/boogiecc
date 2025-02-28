import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to <span className="text-blue-600 dark:text-blue-500">boog.ie</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Where digital innovation meets creative expression. We're a multifaceted media company pushing boundaries across app development, music production, and digital publishing. Our passionate team of developers, musicians, writers, and designers collaborates to create meaningful digital experiences that resonate with audiences worldwide.
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                At boog.ie, we believe in the power of technology to amplify creative voices and build communities around shared passions. Whether you're looking for cutting-edge apps, fresh musical talents, or thought-provoking content, you've found your digital home. Explore our ecosystem of innovation and discover what happens when technical expertise meets artistic vision.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link 
                  href="/work" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  View Our Work
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/images/blog-optimized/boogielogoa.webp"
                  alt="Boogie Media Logo"
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
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            {/* Count Nine Profile */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-6 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog/count_nine_album_cover.png"
                    alt="Count Nine"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Count Nine</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. Drawing from occult symbolism and quantum physics alike, his productions pulse with otherworldly energy while maintaining dance floor appeal. With releases like "Ninth Dimension" and "Esoteric Circuit," Count Nine invites listeners into a realm where shadows dance with light, revealing deeper truths through carefully constructed sonic journeys. His performances are immersive rituals, transforming venues into temporary temples where collective consciousness expands through rhythmic communion.
              </p>
            </div>
            
            {/* Proteus Profile */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <div className="mb-6 flex justify-center">
                <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/blog/proteus_gemini.jpeg"
                    alt="Proteus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Proteus</h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Proteus harnesses the transformative power of sound to guide listeners through the depths of human experience and beyond. Her shape-shifting compositions blend haunting vocals with intricate electronic textures, creating a sonic alchemy that's both introspective and expansive. Named for the ancient deity of elemental change, Proteus embraces musical metamorphosis as spiritual practice. Her breakthrough EP "Divine Dissolution" explores the beauty found in embracing life's inevitable cycles of creation and destruction. On stage, she's a commanding presence – a modern mystic using technology to channel ancient wisdom through contemporary electronic expressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              Explore our range of offerings that help creative minds bring their vision to life.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">App Development</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Cutting-edge mobile and web applications built with the latest technologies and user-centric design.
              </p>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Music Production</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Professional audio engineering, mixing, mastering, and artist development services for emerging talent.
              </p>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Digital Publishing</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                End-to-end publishing solutions for digital content creators, from conception to distribution.
              </p>
            </div>
            {/* Service 4 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Content Creation</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                High-quality written and visual content that engages audiences and tells compelling stories.
              </p>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Creative Direction</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Strategic guidance for artistic projects, helping to shape vision, identity, and execution.
              </p>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Community Building</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Creating and nurturing digital spaces where like-minded creators can connect and collaborate.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-4 py-16 text-white dark:bg-blue-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Creative Community</h2>
            <p className="mt-4 max-w-[700px] text-blue-100">
              Connect with us to explore collaborations, discover new artists, or bring your creative vision to life.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
