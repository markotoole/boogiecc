import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/lib/portableTextComponents'

interface TextSectionProps {
  title?: string
  content: any[]
}

export function TextSection({ title, content }: TextSectionProps) {
  return (
    <div className="py-8">
      {title && (
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
      )}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <PortableText 
          value={content}
          components={portableTextComponents}
        />
      </div>
    </div>
  )
}

interface ImageGalleryProps {
  title?: string
  images: Array<{
    asset: any
    alt?: string
    caption?: string
  }>
  layout?: 'grid' | 'masonry' | 'carousel'
}

export function ImageGallery({ title, images, layout = 'grid' }: ImageGalleryProps) {
  if (!images || images.length === 0) return null

  const gridClass = layout === 'masonry' 
    ? 'columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'

  return (
    <div className="py-8">
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      )}
      
      {layout === 'carousel' ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-80">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={urlFor(image).width(320).height(240).url()}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={gridClass}>
          {images.map((image, index) => (
            <div key={index} className={layout === 'masonry' ? 'break-inside-avoid' : ''}>
              <div className={`relative rounded-lg overflow-hidden ${
                layout === 'masonry' ? 'aspect-auto' : 'aspect-video'
              }`}>
                <Image
                  src={urlFor(image).width(400).height(300).url()}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              {image.caption && (
                <p className="text-sm text-gray-600 mt-2">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

interface TeamMember {
  name: string
  role: string
  bio?: string
  image?: any
  socialLinks?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

interface TeamSectionProps {
  title?: string
  members: TeamMember[]
}

export function TeamSection({ title, members }: TeamSectionProps) {
  if (!members || members.length === 0) return null

  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
      )}
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            {member.image && (
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={urlFor(member.image).width(128).height(128).url()}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              
              {member.bio && (
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {member.bio}
                </p>
              )}
              
              {member.socialLinks && (
                <div className="flex justify-center gap-4">
                  {member.socialLinks.website && (
                    <Link 
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Website
                    </Link>
                  )}
                  {member.socialLinks.twitter && (
                    <Link 
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Twitter
                    </Link>
                  )}
                  {member.socialLinks.linkedin && (
                    <Link 
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      LinkedIn
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ContactSectionProps {
  title?: string
  contactInfo?: {
    email?: string
    phone?: string
    address?: string
  }
  showContactForm?: boolean
}

export function ContactSection({ title, contactInfo, showContactForm }: ContactSectionProps) {
  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      )}
      
      <div className="grid gap-8 lg:grid-cols-2">
        {contactInfo && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            
            {contactInfo.email && (
              <div>
                <strong className="block text-gray-900 dark:text-white mb-1">Email</strong>
                <Link 
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactInfo.email}
                </Link>
              </div>
            )}
            
            {contactInfo.phone && (
              <div>
                <strong className="block text-gray-900 dark:text-white mb-1">Phone</strong>
                <Link 
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:underline"
                >
                  {contactInfo.phone}
                </Link>
              </div>
            )}
            
            {contactInfo.address && (
              <div>
                <strong className="block text-gray-900 dark:text-white mb-1">Address</strong>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {contactInfo.address}
                </p>
              </div>
            )}
          </div>
        )}
        
        {showContactForm && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400">
                Contact form integration can be added here. This could connect to services like 
                Formspree, Netlify Forms, or a custom backend.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface Service {
  name: string
  description: string
  icon?: any
  features?: string[]
}

interface ServicesSectionProps {
  title?: string
  services: Service[]
}

export function ServicesSection({ title, services }: ServicesSectionProps) {
  if (!services || services.length === 0) return null

  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
      )}
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
            {service.icon && (
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={urlFor(service.icon).width(64).height(64).url()}
                  alt={`${service.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            <h3 className="text-xl font-semibold mb-3 text-center">{service.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
              {service.description}
            </p>
            
            {service.features && service.features.length > 0 && (
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Main section renderer component
interface PageSectionProps {
  section: {
    _type: string
    _key: string
    [key: string]: any
  }
}

export function PageSection({ section }: PageSectionProps) {
  switch (section._type) {
    case 'textSection':
      return <TextSection title={section.title} content={section.content} />
    
    case 'imageGallery':
      return (
        <ImageGallery 
          title={section.title}
          images={section.images}
          layout={section.layout}
        />
      )
    
    case 'teamSection':
      return <TeamSection title={section.title} members={section.members} />
    
    case 'contactSection':
      return (
        <ContactSection 
          title={section.title}
          contactInfo={section.contactInfo}
          showContactForm={section.showContactForm}
        />
      )
    
    case 'servicesSection':
      return <ServicesSection title={section.title} services={section.services} />
    
    default:
      return null
  }
}
