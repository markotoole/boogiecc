import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface CustomBlockProps {
  value: {
    blockType: string
    title?: string
    subtitle?: string
    content?: any[]
    htmlContent?: string
    htmlDescription?: string
    colorScheme?: string
    alignment?: string
    items?: Array<{
      title?: string
      content?: any[]
      icon?: string
      image?: any
      link?: { text: string; url: string }
    }>
    backgroundImage?: any
    ctaButton?: {
      text: string
      url: string
      style: string
    }
    spacing?: string
  }
}

export default function CustomBlockRenderer({ value }: CustomBlockProps) {
  const {
    blockType,
    title,
    subtitle,
    content,
    htmlContent,
    htmlDescription,
    colorScheme = 'default',
    alignment = 'left',
    items = [],
    backgroundImage,
    ctaButton,
    spacing = 'medium'
  } = value

  // Spacing classes matching your site
  const getSpacingClasses = (spacing: string) => {
    switch (spacing) {
      case 'small':
        return 'py-12'
      case 'large':
        return 'py-32'
      default:
        return 'py-20'
    }
  }

  // Button styles matching your site
  const getButtonClasses = (style: string) => {
    switch (style) {
      case 'secondary':
        return 'inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50'
      case 'outline':
        return 'inline-flex h-10 items-center justify-center rounded-md border-2 border-blue-600 px-8 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700'
      default:
        return 'inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700'
    }
  }

  const spacingClasses = getSpacingClasses(spacing)
  const alignmentClasses = alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'

  // Render different block types using your site's exact styling
  switch (blockType) {
    case 'customHtml':
      return (
        <section className={`px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            {/* Show title/description for editors */}
            {(title || htmlDescription) && (
              <div className="mb-6">
                {title && (
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                )}
                {htmlDescription && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {htmlDescription}
                  </p>
                )}
              </div>
            )}
            
            {/* Render HTML content safely with improved iframe styling for all embed types */}
            {htmlContent && (
              <div 
                className="custom-html-content 
                  [&_iframe]:w-full 
                  [&_iframe]:max-w-full 
                  [&_iframe]:rounded-lg 
                  [&_iframe]:shadow-sm 
                  [&_iframe]:border-0
                  [&_iframe[src*='spotify']]:h-[352px] 
                  [&_iframe[src*='soundcloud']]:h-[166px] 
                  [&_iframe[src*='youtube']]:aspect-video 
                  [&_iframe[src*='bandcamp']]:h-[470px]
                  [&_iframe[src*='google.com/maps']]:h-[400px]
                  [&_iframe[src*='google.com/forms']]:h-[600px]
                  [&_iframe[src*='docs.google.com']]:h-[600px]
                  [&_iframe[src*='calendar.google.com']]:h-[600px]
                  [&_iframe]:min-h-[300px]"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
            
            {!htmlContent && (
              <div className="bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 rounded p-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  No HTML content provided. Add HTML content in the Sanity editor.
                </p>
              </div>
            )}
          </div>
        </section>
      )

    case 'callout':
      return (
        <section className={`px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            <div className={`rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 ${alignmentClasses}`}>
              {title && (
                <h3 className="text-xl font-bold mb-2">{title}</h3>
              )}
              {subtitle && (
                <p className="text-gray-500 dark:text-gray-400 mb-4">{subtitle}</p>
              )}
              {content && (
                <div className="prose max-w-none dark:prose-invert">
                  <PortableText value={content} />
                </div>
              )}
              {ctaButton && (
                <div className="mt-6">
                  <a href={ctaButton.url} className={getButtonClasses(ctaButton.style)}>
                    {ctaButton.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )

    case 'valuesGrid':
      return (
        <section className={`px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            {title && (
              <div className={`flex flex-col items-center justify-center text-center mb-16`}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
                {subtitle && (
                  <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                  {item.icon && (
                    <div className="text-4xl mb-6 text-center">{item.icon}</div>
                  )}
                  {item.image && (
                    <div className="mb-6 flex justify-center">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.title || ''}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  {item.title && (
                    <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">{item.title}</h3>
                  )}
                  {item.content && (
                    <div className="text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                      <PortableText 
                        value={item.content}
                        components={{
                          block: {
                            normal: ({children}) => <p className="mb-2 last:mb-0">{children}</p>
                          }
                        }}
                      />
                    </div>
                  )}
                  {item.link && (
                    <div className="mt-6 text-center">
                      <a
                        href={item.link.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {item.link.text}
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'twoColumn':
      return (
        <section className={`px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            {title && (
              <div className={`flex flex-col items-center justify-center text-center mb-16`}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
                {subtitle && (
                  <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {items.slice(0, 2).map((item, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                  {item.image && (
                    <div className="mb-6 flex justify-center">
                      <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.title || ''}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  {item.title && (
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  )}
                  {item.content && (
                    <div className="text-gray-500 dark:text-gray-400 mb-4">
                      <PortableText value={item.content} />
                    </div>
                  )}
                  {item.link && (
                    <div className="mt-6">
                      <a
                        href={item.link.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {item.link.text}
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'threeColumn':
      return (
        <section className={`px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            {title && (
              <div className={`flex flex-col items-center justify-center text-center mb-16`}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
                {subtitle && (
                  <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {items.slice(0, 3).map((item, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
                  {item.image && (
                    <div className="mb-6 flex justify-center">
                      <div className="relative h-[250px] w-full overflow-hidden rounded-lg">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.title || ''}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  {item.icon && (
                    <div className="text-3xl mb-4 text-center">{item.icon}</div>
                  )}
                  {item.title && (
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  )}
                  {item.content && (
                    <div className="text-gray-500 dark:text-gray-400 mb-4">
                      <PortableText value={item.content} />
                    </div>
                  )}
                  {item.link && (
                    <div className="mt-auto">
                      <a
                        href={item.link.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {item.link.text}
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    case 'featureBox':
      return (
        <section className={`bg-blue-600 px-4 ${spacingClasses.replace('py-20', 'py-16')} text-white dark:bg-blue-700`}>
          <div className="container mx-auto max-w-6xl">
            <div className={`flex flex-col items-center justify-center text-center`}>
              {title && (
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
              )}
              {subtitle && (
                <p className="mt-4 max-w-[700px] text-blue-100">{subtitle}</p>
              )}
              {content && (
                <div className="mt-4 max-w-[700px] text-blue-100 prose prose-invert">
                  <PortableText value={content} />
                </div>
              )}
              {ctaButton && (
                <div className="mt-8">
                  <a
                    href={ctaButton.url}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                  >
                    {ctaButton.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )

    case 'quoteSection':
      return (
        <section className={`bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            <div className={`rounded-lg p-8 ${alignmentClasses}`}>
              {content && (
                <blockquote className="text-2xl italic font-medium mb-6 text-gray-800 dark:text-gray-200">
                  <PortableText value={content} />
                </blockquote>
              )}
              {title && (
                <cite className="text-lg font-semibold not-italic text-gray-600 dark:text-gray-400">— {title}</cite>
              )}
              {subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
              )}
            </div>
          </div>
        </section>
      )

    case 'imageTextOverlay':
      return (
        <section className={`relative ${spacingClasses} px-4`}>
          {backgroundImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={urlFor(backgroundImage).url()}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          )}
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className={`text-white ${alignmentClasses} max-w-4xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
              {title && (
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">{title}</h2>
              )}
              {subtitle && (
                <p className="text-xl mb-8">{subtitle}</p>
              )}
              {content && (
                <div className="prose prose-lg prose-invert max-w-none mb-8">
                  <PortableText value={content} />
                </div>
              )}
              {ctaButton && (
                <div>
                  <a href={ctaButton.url} className={getButtonClasses(ctaButton.style)}>
                    {ctaButton.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )

    case 'statsSection':
      return (
        <section className={`px-4 ${spacingClasses}`}>
          <div className="container mx-auto max-w-6xl">
            {title && (
              <div className={`flex flex-col items-center justify-center text-center mb-16`}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
                {subtitle && (
                  <p className="mt-4 max-w-[700px] text-gray-500 dark:text-gray-400">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <div key={index} className={`text-center`}>
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    {item.title}
                  </div>
                  {item.content && (
                    <div className="text-lg text-gray-500 dark:text-gray-400">
                      <PortableText value={item.content} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )

    default:
      return (
        <div className="py-4">
          <div className="container mx-auto px-4">
            <div className="bg-gray-100 border border-dashed border-gray-300 rounded p-4 text-center text-gray-600">
              Unknown block type: {blockType}
            </div>
          </div>
        </div>
      )
  }
}
