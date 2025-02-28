import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Artists | Boogie Media",
  description: "Meet the talented artists in the Boogie collective.",
};

export default function ArtistsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Our Artists
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
          Meet the talented creators pushing boundaries and defining new sounds in the Boogie collective.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Count Nine */}
        <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
          <Link href="/artists/count-nine" className="block">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/blog-optimized/countninestanding.webp"
                alt="Count Nine"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white">Count Nine</h2>
                <p className="text-lg text-gray-200">Electronic Music Producer</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. With releases like "Ninth Dimension" and "Esoteric Circuit," his music invites listeners into realms where shadows dance with light.
              </p>
              <span className="mt-4 inline-block text-blue-600 dark:text-blue-400">
                View Artist Profile →
              </span>
            </div>
          </Link>
        </div>

        {/* Proteus */}
        <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src="/images/blog/proteus_gemini.jpeg"
              alt="Proteus"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-bold text-white">Proteus</h2>
              <p className="text-lg text-gray-200">Avant-garde Sound Designer</p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 dark:text-gray-300">
              Proteus harnesses the transformative power of sound to guide listeners through the depths of human experience and beyond. Her shape-shifting compositions blend haunting vocals with intricate electronic textures.
            </p>
            <span className="mt-4 inline-block text-gray-500 dark:text-gray-400">
              Profile Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">Join Our Collective</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-blue-100">
          We're always looking for innovative artists to join our growing family. If you're pushing boundaries and creating unique sonic experiences, we want to hear from you.
        </p>
        <Link
          href="/contact?subject=Artist Submission"
          className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-blue-700 transition-colors hover:bg-gray-100"
        >
          Submit Your Work
        </Link>
      </div>
    </div>
  );
}