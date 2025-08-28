import { getPageByType, getAllPages, Page } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/portableTextComponents'
import { PageSection } from '@/components/PageSections'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const pages = await getAllPages()
  return pages.map((page) => ({
    slug: page.slug.current,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Try to get page by slug first, then by page type
  let page = await getPageByType(params.slug)
  
  if (!page) {
    // If no page found by type, this will be handled by notFound()
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.seo?.metaTitle || page.title,
    description: page.seo?.metaDescription || `${page.title} - Boogie Media`,
    openGraph: {
      title: page.seo?.metaTitle || page.title,
      description: page.seo?.metaDescription || `${page.title} - Boogie Media`,
      images: page.seo?.ogImage 
        ? [urlFor(page.seo.ogImage).width(1200).height(630).url()] 
        : page.heroSection?.heroImage 
          ? [urlFor(page.heroSection.heroImage).width(1200).height(630).url()]
          : [],
    },
  }
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function DynamicPage({ params }: Props) {
  // Try to get page by page type (e.g., 'about' for /about)
  const page = await getPageByType(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {page.heroSection && (
        <section className="relative">
          {page.heroSection.heroImage && (
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src={urlFor(page.heroSection.heroImage).width(1200).height(500).url()}
                alt={page.heroSection.headline || page.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
          )}
          
          <div className={`${
            page.heroSection.heroImage ? 'absolute inset-0' : 'py-20'
          } flex items-center justify-center`}>
            <div className="container mx-auto px-4 text-center">
              <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${
                page.heroSection.heroImage ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {page.heroSection.headline || page.title}
              </h1>
              
              {page.heroSection.subheadline && (
                <p className={`text-xl lg:text-2xl mb-8 max-w-3xl mx-auto ${
                  page.heroSection.heroImage ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {page.heroSection.subheadline}
                </p>
              )}
              
              {page.heroSection.ctaButton && page.heroSection.ctaButton.text && (
                <Link
                  href={page.heroSection.ctaButton.link || '#'}
                  className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {page.heroSection.ctaButton.text}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Basic content (if no hero section) */}
        {!page.heroSection && (
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{page.title}</h1>
          </div>
        )}

        {/* Render main content */}
        {page.content && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <PortableText 
                value={page.content}
                components={portableTextComponents}
              />
            </div>
          </div>
        )}

        {/* Render dynamic sections */}
        {page.sections && page.sections.length > 0 && (
          <div className="space-y-12">
            {page.sections.map((section, index) => (
              <PageSection key={section._key || index} section={section} />
            ))}
          </div>
        )}

        {/* Fallback content for empty pages */}
        {!page.content && (!page.sections || page.sections.length === 0) && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              This page is ready for content! Visit the{' '}
              <Link 
                href="/studio"
                className="text-blue-600 hover:underline"
              >
                Sanity Studio
              </Link>{' '}
              to add content and sections.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
