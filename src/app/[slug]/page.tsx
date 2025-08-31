import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/page-queries'
import { PageSections } from '@/components/PageSections'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps) {
  const page = await getPageBySlug(params.slug)
  
  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || page.heroSection?.subheadline,
    openGraph: page.seo?.ogImage ? {
      images: [urlFor(page.seo.ogImage).url()],
    } : undefined,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const page = await getPageBySlug(params.slug)

  if (!page || !page.isPublished) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      {page.heroSection && (
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
                  {page.heroSection.headline || page.title}
                </h1>
                {page.heroSection.subheadline && (
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    {page.heroSection.subheadline}
                  </p>
                )}
                {page.heroSection.ctaButton?.text && page.heroSection.ctaButton?.link && (
                  <div>
                    <a
                      href={page.heroSection.ctaButton.link}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                    >
                      {page.heroSection.ctaButton.text}
                    </a>
                  </div>
                )}
              </div>
              {page.heroSection.heroImage && (
                <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={urlFor(page.heroSection.heroImage).url()}
                    alt={page.heroSection.headline || page.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Page Sections */}
      {page.sections && page.sections.length > 0 && (
        <PageSections sections={page.sections} />
      )}

      {/* Main Content */}
      {page.content && (
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              {/* You'll need to render the blockContent here */}
              {/* This requires a PortableText component */}
            </div>
          </div>
        </section>
      )}
    </>
  )
}