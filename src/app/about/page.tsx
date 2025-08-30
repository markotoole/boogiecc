import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Boogie Media",
  description: "Learn about Boogie, a modern publishing and media production company.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
                About Boogie
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                Boogie is a modern publishing and media production company
                dedicated to creating and publishing compelling content and meaningful experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Founded in 2023, we collaborate with forward-thinking brands and
                organizations to tell stories that resonate and drive results.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <Image
                src="/images/blog/count_nine_album_cover.png"
                alt="Boogie Team"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Our mission is to elevate artists and brands through exceptional storytelling and
              innovative media production, creating content that informs, inspires,
              and drives meaningful connections.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in the power of storytelling to transform how people
              perceive brands and interact with them. By combining creative
              expertise with strategic thinking, we help our clients communicate
              their unique value and build lasting relationships with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Value 1 */}
            <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Creativity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We approach every project with fresh thinking and innovative ideas,
                pushing boundaries to create content that stands out.
              </p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We maintain the highest standards in everything we create,
                from concept to execution, ensuring exceptional results.
              </p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We work closely with our clients, building partnerships based on
                trust, open communication, and shared goals.
              </p>
            </div>
            {/* Value 4 */}
            <div className="flex flex-col p-6 rounded-lg bg-white shadow-sm dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We focus on creating content that drives real results, whether
                building brand awareness, engaging audiences, or driving conversions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
