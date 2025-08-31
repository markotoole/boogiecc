import { defineType } from 'sanity'

export default defineType({
  name: 'customBlock',
  title: 'Custom Block',
  type: 'object',
  fields: [
    {
      name: 'blockType',
      title: 'Block Type',
      type: 'string',
      options: {
        list: [
          { title: 'Callout Box', value: 'callout' },
          { title: 'Values Grid', value: 'valuesGrid' },
          { title: 'Two Column Layout', value: 'twoColumn' },
          { title: 'Three Column Layout', value: 'threeColumn' },
          { title: 'Feature Box', value: 'featureBox' },
          { title: 'Quote Section', value: 'quoteSection' },
          { title: 'Image with Text Overlay', value: 'imageTextOverlay' },
          { title: 'Stats Section', value: 'statsSection' },
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'string',
      options: {
        list: [
          { title: 'Default (White)', value: 'default' },
          { title: 'Light Blue', value: 'lightBlue' },
          { title: 'Light Gray', value: 'lightGray' },
          { title: 'Dark', value: 'dark' },
          { title: 'Red Accent', value: 'redAccent' },
          { title: 'Green Accent', value: 'greenAccent' },
          { title: 'Purple Accent', value: 'purpleAccent' },
        ],
        layout: 'dropdown'
      },
      initialValue: 'default'
    },
    {
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ],
        layout: 'radio'
      },
      initialValue: 'left'
    },
    {
      name: 'items',
      title: 'Items (for grid layouts)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Item Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Item Content',
              type: 'array',
              of: [{ type: 'block' }]
            },
            {
              name: 'icon',
              title: 'Icon Emoji',
              type: 'string',
              description: 'Add an emoji like 🎨, ⭐, 🚀, etc.'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'link',
              title: 'Link',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Link Text',
                  type: 'string'
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'url'
                }
              ]
            }
          ]
        }
      ],
      hidden: ({ parent }) => !['valuesGrid', 'twoColumn', 'threeColumn', 'statsSection'].includes(parent?.blockType)
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      hidden: ({ parent }) => parent?.blockType !== 'imageTextOverlay'
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string'
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'url'
        },
        {
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary (Blue)', value: 'primary' },
              { title: 'Secondary (Gray)', value: 'secondary' },
              { title: 'Outline', value: 'outline' }
            ]
          },
          initialValue: 'primary'
        }
      ]
    },
    {
      name: 'spacing',
      title: 'Section Spacing',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' }
        ]
      },
      initialValue: 'medium'
    }
  ],
  preview: {
    select: {
      title: 'title',
      blockType: 'blockType',
      colorScheme: 'colorScheme'
    },
    prepare(selection) {
      const { title, blockType, colorScheme } = selection
      return {
        title: title || `Custom Block`,
        subtitle: `${blockType} • ${colorScheme} theme`
      }
    }
  }
})
