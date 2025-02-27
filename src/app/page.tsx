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
                Modern <span className="text-blue-600 dark:text-blue-500">Publishing</span> & Media Production
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Boogie creates compelling content and meaningful experiences for forward-thinking brands and organizations.
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
                  src="/images/blog/count_nine_album_cover.png"
                  alt="Count Nine Album Cover - Boogie Media"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              We offer a range of services to help brands tell their stories and connect with their audiences.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Content Creation</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                High-quality written and visual content that engages your audience and tells your brand's story.
              </p>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Digital Publishing</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                End-to-end publishing solutions for digital magazines, newsletters, and multimedia platforms.
              </p>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Media Production</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Professional video, audio, and photography services to elevate your brand's visual presence.
              </p>
            </div>
            {/* Service 4 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Brand Strategy</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Strategic direction for your brand's identity, messaging, and content marketing approach.
              </p>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Modern, responsive websites and digital platforms built with the latest technologies.
              </p>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-bold">Social Media</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Comprehensive social media strategies, content creation, and community management.
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

      {/* Featured Work Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
              Take a look at some of our recent projects and collaborations.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-300 dark:text-gray-700">
                  PROJECT 1
                </div>
                {/* Replace with actual project image */}
                {/* <Image
                  src="/path-to-project-image.jpg"
                  alt="Project title"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Brief description of the project and the services provided.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-300 dark:text-gray-700">
                  PROJECT 2
                </div>
                {/* Replace with actual project image */}
                {/* <Image
                  src="/path-to-project-image.jpg"
                  alt="Project title"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Brief description of the project and the services provided.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-300 dark:text-gray-700">
                  PROJECT 3
                </div>
                {/* Replace with actual project image */}
                {/* <Image
                  src="/path-to-project-image.jpg"
                  alt="Project title"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Project Title</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Brief description of the project and the services provided.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/work"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 px-4 py-16 text-white dark:bg-blue-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
            <p className="mt-4 max-w-[700px] text-blue-100">
              Let's collaborate to create something amazing together. Get in touch to discuss your project.
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
