import { defineField, defineType } from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artists',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
      description: 'URL-friendly version of the name'
    }),
    defineField({
      name: 'stageName',
      title: 'Stage Name',
      type: 'string',
      description: 'Alternative or preferred performance name'
    }),
    defineField({
      name: 'role',
      title: 'Role/Genre',
      type: 'string',
      description: 'e.g., Electronic Music Producer, Sound Artist, etc.'
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO and accessibility'
        }
      ]
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text'
        }
      ],
      description: 'Optional larger hero image for artist pages'
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      description: 'Brief description for homepage and card views'
    }),
    defineField({
      name: 'fullBio',
      title: 'Full Biography',
      type: 'blockContent',
      description: 'Complete artist biography with rich text formatting'
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'website',
          title: 'Website',
          type: 'url'
        }),
        defineField({
          name: 'spotify',
          title: 'Spotify',
          type: 'url'
        }),
        defineField({
          name: 'soundcloud',
          title: 'SoundCloud',
          type: 'url'
        }),
        defineField({
          name: 'bandcamp',
          title: 'Bandcamp',
          type: 'url'
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url'
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url'
        })
      ]
    }),
    defineField({
      name: 'musicSamples',
      title: 'Music Samples',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Track Title',
              type: 'string'
            }),
            defineField({
              name: 'embedUrl',
              title: 'Embed URL',
              type: 'url',
              description: 'Spotify, SoundCloud, YouTube embed URL'
            }),
            defineField({
              name: 'description',
              title: 'Track Description',
              type: 'text',
              rows: 2
            })
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            }
          }
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'featured',
      title: 'Featured Artist',
      type: 'boolean',
      description: 'Show this artist prominently on homepage',
      initialValue: false
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this artist on the website',
      initialValue: true
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.max(60)
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: Rule => Rule.max(160)
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'profileImage',
      featured: 'featured',
      active: 'isActive'
    },
    prepare(selection) {
      const { title, subtitle, media, featured, active } = selection
      return {
        title: title,
        subtitle: `${subtitle || 'Artist'} ${featured ? '⭐ Featured' : ''} ${!active ? '🚫 Inactive' : ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'sortOrder', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Sort Order',
      name: 'sortOrder',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    },
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }]
    }
  ]
})
