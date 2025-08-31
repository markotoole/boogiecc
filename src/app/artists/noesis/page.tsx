import Image from "next/image";
import Link from "next/link";

export default function NoesisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-purple-600 dark:text-purple-400">Noesis</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Sonic Alchemist & Shape-Shifting Composer
              </p>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-lg leading-relaxed">
                Noesis harnesses the transformative power of sound to guide listeners through the depths of human experience and beyond. Her shape-shifting compositions blend haunting sounds with intricate electronic textures, creating a sonic alchemy that's both introspective and expansive.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/images/blog-new/noesis.png"
                  alt="Noesis"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Biography</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              <strong>Noesis</strong> emerged from the underground electronic scene with an almost mystical presence, her identity as fluid as her sound. Born Elena Vasquez in the industrial outskirts of Detroit, she discovered her calling during late nights spent in abandoned warehouses, where the city's mechanical heartbeat became her first instrument. Her artist name, drawn from the Greek concept of intuitive knowledge, reflects her belief that music can access truths beyond ordinary perception.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Known for her ethereal live performances where she appears draped in flowing fabrics that seem to move with the music itself, she has cultivated a devoted following who describe her concerts as "spiritual journeys through sound." Her performances are immersive experiences that blur the boundaries between artist and audience, creating spaces where collective consciousness can emerge through sonic exploration.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Her creative process is deeply ritualistic—she begins each composition during the liminal hours between night and dawn, believing these threshold moments hold special creative power. Drawing inspiration from everything from ancient mythology to quantum physics, her work explores themes of transformation, consciousness, and the interconnectedness of all things.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Release Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Upcoming Release: <span className="text-yellow-300">"Tarot"</span>
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                A revolutionary chiptune album expected before Christmas 2025
              </p>
              <p className="text-lg leading-relaxed mb-6 text-blue-100">
                This winter, Noesis ventures into uncharted territory with <strong>"Tarot,"</strong> her highly anticipated chiptune album. The project represents a radical departure from her usual atmospheric soundscapes, as she channels the archetypal wisdom of the tarot through the nostalgic pulse of 8-bit electronics.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-blue-100">
                Each track corresponds to a major arcana card, with "The Fool's Journey" serving as both the opening track and thematic backbone. Early demos suggest she's retained her signature vocal layering while embracing the playful constraints of chiptune, creating something that feels both ancient and futuristic—a digital divination deck for the modern age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Vision Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Artistic Vision</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Sonic Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Noesis constructs her compositions like architectural spaces, building layered environments where listeners can explore different emotional and spiritual territories. Each piece is designed as a journey rather than a destination.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Transformative Sound</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Drawing from her belief in sound's healing properties, Noesis creates music intended to facilitate personal transformation and collective awakening, using specific frequencies and harmonic progressions.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Ritual & Performance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Her live performances are ceremonial experiences, incorporating elements of ancient ritual with cutting-edge technology to create immersive environments that transcend traditional concert formats.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Digital Mysticism</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Noesis explores the intersection of technology and spirituality, using digital tools to create sounds that connect listeners to both their inner worlds and the cosmic web of existence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Connect Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Experience the Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Follow Noesis on her sonic explorations and be the first to experience new releases and performance announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
            >
              Book Performance
            </Link>
            <Link
              href="/artists"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            >
              All Artists
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}