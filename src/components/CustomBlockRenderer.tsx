import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface CustomBlockProps {
  value: {
    blockType: string
    title?: string
    subtitle?: string
    content?: any[]
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
    colorScheme = 'default',
    alignment = 'left',
    items = [],
    backgroundImage,
    ctaButton,
    spacing = 'medium'
  } = value

  // Color scheme classes
  const getColorClasses = (scheme: string) => {
    switch (scheme) {
      case 'lightBlue':
        return 'bg-blue-50 border-blue-200 text-blue-900'
      case 'lightGray':
        return 'bg-gray-50 border-gray-200 text-gray-900'
      case 'dark':
        return 'bg-gray-900 border-gray-700 text-white'
      case 'redAccent':
        return 'bg-red-50 border-red-200 text-red-900'
      case 'greenAccent':
        return 'bg-green-50 border-green-200 text-green-900'
      case 'purpleAccent':
        return 'bg-purple-50 border-purple-200 text-purple-900'
      default:
        return 'bg-white border-gray-200 text-gray-900'
    }
  }

  // Spacing classes
  const getSpacingClasses = (spacing: string) => {
    switch (spacing) {
      case 'small':
        return 'py-8 my-4'
      case 'large':
        return 'py-20 my-12'
      default:
        return 'py-12 my-8'
    }
  }

  // Button styles
  const getButtonClasses = (style: string) => {
    switch (style) {
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white'
      case 'outline':
        return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent'
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white'
    }
  }

  const colorClasses = getColorClasses(colorScheme)
  const spacingClasses = getSpacingClasses(spacing)
  const alignmentClasses = alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'

  // Render different block types
  switch (blockType) {
    case 'callout':
      return (
        <div className={`${spacingClasses}`}>
          <div className={`container mx-auto px-4`}>
            <div className={`${colorClasses} rounded-lg p-8 border-2 ${alignmentClasses}`}>
              {title && (
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
              )}
              {subtitle && (
                <p className="text-lg mb-4 opacity-80">{subtitle}</p>
              )}
              {content && (
                <div className="prose max-w-none">
                  <PortableText value={content} />
                </div>
              )}
              {ctaButton && (
                <div className="mt-6">
                  <a
                    href={ctaButton.url}
                    className={`inline-block px-6 py-3 rounded-md font-medium transition-colors ${getButtonClasses(ctaButton.style)}`}
                  >
                    {ctaButton.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )

    case 'valuesGrid':
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            {title && (
              <h2 className={`text-3xl font-bold mb-8 ${alignmentClasses}`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`text-lg mb-12 opacity-80 ${alignmentClasses}`}>{subtitle}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <div key={index} className={`${colorClasses} rounded-lg p-6 border hover:shadow-lg transition-all duration-300 group`}>
                  <div className="text-center">
                    {item.icon && (
                      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    )}
                    {item.image && (
                      <div className="relative w-16 h-16 mx-auto mb-4">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.title || ''}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    )}
                    {item.title && (
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    )}
                    {item.content && (
                      <div className="text-sm leading-relaxed opacity-90">
                        <PortableText value={item.content} />
                      </div>
                    )}
                    {item.link && (
                      <div className="mt-4">
                        <a
                          href={item.link.url}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          {item.link.text} →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'twoColumn':
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            {title && (
              <h2 className={`text-3xl font-bold mb-8 ${alignmentClasses}`}>{title}</h2>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {items.slice(0, 2).map((item, index) => (
                <div key={index} className={`${colorClasses} rounded-lg p-6 border`}>
                  {item.image && (
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.title || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {item.title && (
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  )}
                  {item.content && (
                    <div className="prose max-w-none">
                      <PortableText value={item.content} />
                    </div>
                  )}
                  {item.link && (
                    <div className="mt-4">
                      <a
                        href={item.link.url}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {item.link.text} →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'threeColumn':
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            {title && (
              <h2 className={`text-3xl font-bold mb-8 ${alignmentClasses}`}>{title}</h2>
            )}
            <div className="grid md:grid-cols-3 gap-6">
              {items.slice(0, 3).map((item, index) => (
                <div key={index} className={`${colorClasses} rounded-lg p-6 border`}>
                  {item.image && (
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.title || ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {item.icon && (
                    <div className="text-2xl mb-4">{item.icon}</div>
                  )}
                  {item.title && (
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  )}
                  {item.content && (
                    <div className="prose prose-sm max-w-none">
                      <PortableText value={item.content} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'featureBox':
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            <div className={`${colorClasses} rounded-xl p-12 border-2 ${alignmentClasses}`}>
              {title && (
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
              )}
              {subtitle && (
                <p className="text-xl mb-8 opacity-90">{subtitle}</p>
              )}
              {content && (
                <div className="prose prose-lg max-w-none mb-8">
                  <PortableText value={content} />
                </div>
              )}
              {ctaButton && (
                <div>
                  <a
                    href={ctaButton.url}
                    className={`inline-block px-8 py-4 rounded-lg text-lg font-medium transition-colors ${getButtonClasses(ctaButton.style)}`}
                  >
                    {ctaButton.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )

    case 'quoteSection':
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            <div className={`${colorClasses} rounded-lg p-12 border-l-8 border-blue-500`}>
              {content && (
                <blockquote className="text-2xl font-medium italic mb-6">
                  <PortableText value={content} />
                </blockquote>
              )}
              {title && (
                <cite className="text-lg font-semibold not-italic">— {title}</cite>
              )}
              {subtitle && (
                <div className="text-md opacity-75 mt-1">{subtitle}</div>
              )}
            </div>
          </div>
        </div>
      )

    case 'imageTextOverlay':
      return (
        <div className={`${spacingClasses} relative`}>
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
          <div className="relative z-10 container mx-auto px-4">
            <div className={`text-white ${alignmentClasses} max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
              {title && (
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
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
                  <a
                    href={ctaButton.url}
                    className={`inline-block px-8 py-4 rounded-lg text-lg font-medium transition-colors ${getButtonClasses(ctaButton.style)}`}
                  >
                    {ctaButton.text}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )

    case 'statsSection':
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            {title && (
              <h2 className={`text-3xl font-bold mb-12 ${alignmentClasses}`}>{title}</h2>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {items.map((item, index) => (
                <div key={index} className={`${alignmentClasses}`}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item.title}
                  </div>
                  {item.content && (
                    <div className="text-sm text-gray-600">
                      <PortableText value={item.content} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className={spacingClasses}>
          <div className="container mx-auto px-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-600">Unknown block type: {blockType}</p>
            </div>
          </div>
        </div>
      )
  }
}
