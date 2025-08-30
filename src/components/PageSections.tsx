import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

// Component for rendering page sections
export function PageSections({ sections = [] }) {
  return (
    <div className="page-sections">
      {sections.map((section, index) => {
        switch (section._type) {
          case 'textSection':
            return <TextSection key={index} {...section} />
          case 'imageGallery':
            return <ImageGallery key={index} {...section} />
          case 'teamSection':
            return <TeamSection key={index} {...section} />
          case 'contactSection':
            return <ContactSection key={index} {...section} />
          case 'servicesSection':
            return <ServicesSection key={index} {...section} />
          default:
            return null
        }
      })}
    </div>
  )
}

// Hero Section Component
export function HeroSection({ heroSection }) {
  if (!heroSection) return null

  const { headline, subheadline, heroImage, ctaButton } = heroSection

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(heroImage).url()}
            alt={heroImage.alt || ''}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {headline && (
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {headline}
          </h1>
        )}
        
        {subheadline && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {subheadline}
          </p>
        )}
        
        {ctaButton?.text && (
          <a
            href={ctaButton.link}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            {ctaButton.text}
          </a>
        )}
      </div>
    </section>
  )
}

// Text Section Component
function TextSection({ title, content }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl font-bold mb-8 text-center">
            {title}
          </h2>
        )}
        
        {content && (
          <div className="prose prose-lg max-w-none">
            <PortableText value={content} />
          </div>
        )}
      </div>
    </section>
  )
}

// Image Gallery Component
function ImageGallery({ title, images = [], layout = 'grid' }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}
        
        <div className={`
          ${layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : ''}
          ${layout === 'masonry' ? 'columns-1 md:columns-2 lg:columns-3 gap-6' : ''}
          ${layout === 'carousel' ? 'flex overflow-x-auto gap-6 pb-4' : ''}
        `}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`
                ${layout === 'carousel' ? 'flex-none w-80' : ''}
                transition-transform hover:scale-105
              `}
            >
              <div className="relative aspect-video">
                <Image
                  src={urlFor(image).url()}
                  alt={image.alt || ''}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              {image.caption && (
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section Component
function TeamSection({ title, members = [] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              {member.image && (
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={urlFor(member.image).url()}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                {member.role && (
                  <p className="text-blue-600 mb-3">{member.role}</p>
                )}
                {member.bio && (
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                )}
                
                {member.socialLinks && (
                  <div className="flex justify-center space-x-4">
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className="text-gray-400 hover:text-blue-500">
                        Twitter
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className="text-gray-400 hover:text-blue-700">
                        LinkedIn
                      </a>
                    )}
                    {member.socialLinks.website && (
                      <a href={member.socialLinks.website} className="text-gray-400 hover:text-gray-700">
                        Website
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section Component
function ContactSection({ title, contactInfo, showContactForm }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}
        
        <div className="grid md:grid-cols-2 gap-12">
          {contactInfo && (
            <div className="space-y-6">
              {contactInfo.email && (
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
              )}
              
              {contactInfo.phone && (
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
              )}
              
              {contactInfo.address && (
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <address className="not-italic text-gray-600">
                    {contactInfo.address}
                  </address>
                </div>
              )}
            </div>
          )}
          
          {showContactForm && (
            <div>
              <p className="text-gray-600">
                Ready to get started? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> to discuss your project.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection({ title, services = [] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              {service.icon && (
                <div className="w-12 h-12 mb-4">
                  <Image
                    src={urlFor(service.icon).url()}
                    alt={service.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              
              {service.description && (
                <p className="text-gray-600 mb-4">{service.description}</p>
              )}
              
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
