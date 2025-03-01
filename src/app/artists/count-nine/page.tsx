import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Count Nine | Boogie Media",
  description: "Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence.",
};

export default function CountNinePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="relative order-2 w-full lg:order-1 lg:w-1/2 space-y-6">
          <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/blog-optimized/countninestanding.webp"
              alt="Count Nine artist photo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/blog/count_nine_album_cover.png"
              alt="Count Nine album cover - Ninth Dimension EP"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 lg:w-1/2 lg:pl-12">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Count Nine
          </h1>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. Drawing from occult symbolism and quantum physics alike, his productions pulse with otherworldly energy while maintaining dance floor appeal.
            </p>
            <p>
              With releases like "Ninth Dimension" and "Esoteric Circuit," Count Nine invites listeners into a realm where shadows dance with light, revealing deeper truths through carefully constructed sonic journeys.
            </p>
            <p>
              His performances are immersive rituals, transforming venues into temporary temples where collective consciousness expands through rhythmic communion.
            </p>
          </div>
          
          <div className="mt-6 mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <Link 
              href="/blog/count-nine-interview" 
              className="flex items-center space-x-3 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="font-medium">Read our exclusive interview: "Into the Shadows: An Exclusive Interview with Count Nine"</span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="https://soundcloud.com/countnine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              SoundCloud
            </a>
            <a 
              href="https://instagram.com/countninemusic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              Instagram
            </a>
            <a 
              href="https://spotify.com/artist/countnine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
      
      {/* Discography Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Discography</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/blog/count_nine_album_cover.png"
                alt="Ninth Dimension EP"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Ninth Dimension EP</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Released: 2023
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                A journey through parallel realities and quantum possibilities, featuring the hit track "Quantum Pulse".
              </p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="relative aspect-square w-full bg-gradient-to-br from-indigo-900 to-purple-900">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80">
                <span className="text-5xl font-bold">EC</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Esoteric Circuit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Released: 2022
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                A deep exploration of ritualistic rhythms and ethereal soundscapes that transcend conventional electronic music.
              </p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
            <div className="relative aspect-square w-full bg-gradient-to-br from-gray-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-80">
                <span className="text-5xl font-bold">DMD</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">Dark Matter Descent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Released: 2021
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Count Nine's debut release, establishing his signature blend of dark atmospheric textures and driving beats.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Shows Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Upcoming Shows</h2>
        <div className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-col p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Quantum Field Festival</h3>
                <p className="text-gray-600 dark:text-gray-300">Berlin, Germany</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  June 15, 2025
                </span>
              </div>
            </div>
            
            <div className="flex flex-col p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Ethereal Nights</h3>
                <p className="text-gray-600 dark:text-gray-300">London, UK</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  July 8, 2025
                </span>
              </div>
            </div>
            
            <div className="flex flex-col p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">Mystic Underground</h3>
                <p className="text-gray-600 dark:text-gray-300">Tokyo, Japan</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  August 22, 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section>
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Connect with Count Nine</h2>
              <p className="mb-6">
                For bookings, collaborations, or press inquiries, please get in touch.
              </p>
              <Link
                href="/contact?artist=count-nine"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-blue-700 transition-colors hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-blue-100">
                "My mission is to create sonic experiences that transport listeners beyond the ordinary, into realms where music becomes a vehicle for transformation and collective awakening."
              </p>
              <p className="mt-4 font-medium italic">— Count Nine</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}