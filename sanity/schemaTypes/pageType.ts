import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      description: 'This will be the URL path (e.g., "about" for /about)',
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'About', value: 'about'},
          {title: 'Artists', value: 'artists'},
          {title: 'Contact', value: 'contact'},
          {title: 'Work/Portfolio', value: 'work'},
          {title: 'Services', value: 'services'},
          {title: 'Custom', value: 'custom'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'ctaButton',
          title: 'Call to Action Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Button Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'blockContent',
      description: 'The main content of the page',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        defineField({
          name: 'textSection',
          title: 'Text Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Section Content',
              type: 'blockContent',
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Text Section',
                subtitle: 'Text Content',
              }
            },
          },
        }),
        defineField({
          name: 'imageGallery',
          title: 'Image Gallery',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Gallery Title',
              type: 'string',
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                defineField({
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                    }),
                    defineField({
                      name: 'caption',
                      title: 'Caption',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'layout',
              title: 'Gallery Layout',
              type: 'string',
              options: {
                list: [
                  {title: 'Grid', value: 'grid'},
                  {title: 'Masonry', value: 'masonry'},
                  {title: 'Carousel', value: 'carousel'},
                ],
              },
              initialValue: 'grid',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'images.0',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Image Gallery',
                subtitle: 'Gallery Section',
                media: selection.media,
              }
            },
          },
        }),
        defineField({
          name: 'teamSection',
          title: 'Team Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'members',
              title: 'Team Members',
              type: 'array',
              of: [
                defineField({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'role',
                      title: 'Role/Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'bio',
                      title: 'Bio',
                      type: 'text',
                    }),
                    defineField({
                      name: 'image',
                      title: 'Photo',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    }),
                    defineField({
                      name: 'socialLinks',
                      title: 'Social Links',
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'twitter',
                          title: 'Twitter',
                          type: 'url',
                        }),
                        defineField({
                          name: 'linkedin',
                          title: 'LinkedIn',
                          type: 'url',
                        }),
                        defineField({
                          name: 'website',
                          title: 'Website',
                          type: 'url',
                        }),
                      ],
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'role',
                      media: 'image',
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Team Section',
                subtitle: 'Team Members',
              }
            },
          },
        }),
        defineField({
          name: 'contactSection',
          title: 'Contact Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'contactInfo',
              title: 'Contact Information',
              type: 'object',
              fields: [
                defineField({
                  name: 'email',
                  title: 'Email',
                  type: 'string',
                }),
                defineField({
                  name: 'phone',
                  title: 'Phone',
                  type: 'string',
                }),
                defineField({
                  name: 'address',
                  title: 'Address',
                  type: 'text',
                }),
              ],
            }),
            defineField({
              name: 'showContactForm',
              title: 'Show Contact Form',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            prepare() {
              return {
                title: 'Contact Section',
                subtitle: 'Contact Info & Form',
              }
            },
          },
        }),
        defineField({
          name: 'servicesSection',
          title: 'Services Section',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'services',
              title: 'Services',
              type: 'array',
              of: [
                defineField({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Service Name',
                      type: 'string',
                    }),
                    defineField({
                      name: 'description',
                      title: 'Description',
                      type: 'text',
                    }),
                    defineField({
                      name: 'icon',
                      title: 'Icon',
                      type: 'image',
                    }),
                    defineField({
                      name: 'features',
                      title: 'Features',
                      type: 'array',
                      of: [{type: 'string'}],
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'description',
                      media: 'icon',
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Services Section',
                subtitle: 'Services List',
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (rule) => rule.max(160),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description: 'Image that appears when this page is shared on social media',
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
      media: 'heroSection.heroImage',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `${selection.subtitle} page`,
        media: selection.media,
      }
    },
  },
})
