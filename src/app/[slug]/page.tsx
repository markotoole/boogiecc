import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/page-queries'
import { PageSections } from '@/components/PageSections'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import CustomBlockRenderer from '@/components/CustomBlockRenderer'

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

      {/* Main Content with Enhanced Custom Block Support */}
      {page.content && (
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
              <PortableText 
                value={page.content}
                components={{
                  block: {
                    normal: ({children}) => <p className="mb-6">{children}</p>,
                    h1: ({children}) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
                    h2: ({children}) => <h2 className="text-3xl font-bold mb-4">{children}</h2>,
                    h3: ({children}) => <h3 className="text-2xl font-bold mb-4">{children}</h3>,
                    h4: ({children}) => <h4 className="text-xl font-bold mb-3">{children}</h4>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-blue-500 pl-6 italic my-6">
                        {children}
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({children}) => <ul className="list-disc pl-6 mb-6">{children}</ul>,
                    number: ({children}) => <ol className="list-decimal pl-6 mb-6">{children}</ol>,
                  },
                  listItem: ({children}) => <li className="mb-2">{children}</li>,
                  marks: {
                    strong: ({children}) => <strong className="font-bold">{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>,
                    link: ({value, children}) => (
                      <a 
                        href={value.href} 
                        className="text-blue-600 hover:text-blue-800 underline"
                        target={value.blank ? '_blank' : undefined}
                        rel={value.blank ? 'noopener noreferrer' : undefined}
                      >
                        {children}
                      </a>
                    ),
                  },
                  types: {
                    // Handle regular images in content
                    image: ({value}) => (
                      <div className="my-8">
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || ''}
                          width={800}
                          height={600}
                          className="rounded-lg mx-auto"
                        />
                        {value.caption && (
                          <p className="text-center text-sm text-gray-600 mt-2">
                            {value.caption}
                          </p>
                        )}
                      </div>
                    ),
                    // Handle code blocks
                    codeBlock: ({value}) => (
                      <div className="my-8">
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          {value.language && (
                            <div className="text-gray-400 text-sm mb-2">{value.language}</div>
                          )}
                          <pre className="text-gray-100">
                            <code>{value.code}</code>
                          </pre>
                        </div>
                      </div>
                    ),
                    // Handle custom blocks with our new renderer
                    customBlock: ({value}) => (
                      <div className="not-prose">
                        <CustomBlockRenderer value={value} />
                      </div>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
