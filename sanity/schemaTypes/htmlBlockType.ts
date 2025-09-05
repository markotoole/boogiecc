import { defineType } from 'sanity'

export default defineType({
  name: 'htmlBlock',
  title: 'HTML Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Block Title (for reference)',
      type: 'string',
      description: 'This helps you identify the block in the editor (not displayed on site)'
    },
    {
      name: 'htmlContent',
      title: 'HTML Content',
      type: 'text',
      rows: 10,
      description: 'Add your HTML code here. Be careful with scripts and ensure HTML is valid.',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'sanitizeHtml',
      title: 'Sanitize HTML',
      type: 'boolean',
      description: 'Recommended: Remove potentially dangerous HTML tags for security',
      initialValue: true
    },
    {
      name: 'allowedTags',
      title: 'Allowed HTML Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Specify which HTML tags are allowed (leave empty to allow common safe tags)',
      hidden: ({ parent }) => !parent?.sanitizeHtml,
      options: {
        list: [
          { title: 'Paragraphs (p)', value: 'p' },
          { title: 'Headings (h1, h2, h3, h4, h5, h6)', value: 'h1,h2,h3,h4,h5,h6' },
          { title: 'Links (a)', value: 'a' },
          { title: 'Images (img)', value: 'img' },
          { title: 'Lists (ul, ol, li)', value: 'ul,ol,li' },
          { title: 'Emphasis (strong, em, b, i)', value: 'strong,em,b,i' },
          { title: 'Divs and Spans (div, span)', value: 'div,span' },
          { title: 'Line breaks (br, hr)', value: 'br,hr' },
          { title: 'Tables (table, tr, td, th, thead, tbody)', value: 'table,tr,td,th,thead,tbody' },
          { title: 'Forms (form, input, textarea, button, select, option)', value: 'form,input,textarea,button,select,option' },
          { title: 'Media (video, audio, iframe)', value: 'video,audio,iframe' },
          { title: 'Code (code, pre)', value: 'code,pre' }
        ]
      }
    },
    {
      name: 'cssClasses',
      title: 'Additional CSS Classes',
      type: 'string',
      description: 'Add custom CSS classes to the wrapper div (space-separated)'
    },
    {
      name: 'inlineStyles',
      title: 'Inline Styles',
      type: 'text',
      rows: 3,
      description: 'Add custom CSS styles to the wrapper div (e.g., "margin: 20px; padding: 10px;")'
    },
    {
      name: 'environment',
      title: 'Show In Environment',
      type: 'string',
      options: {
        list: [
          { title: 'All Environments', value: 'all' },
          { title: 'Production Only', value: 'production' },
          { title: 'Development Only', value: 'development' }
        ]
      },
      initialValue: 'all',
      description: 'Control where this HTML block appears'
    }
  ],
  preview: {
    select: {
      title: 'title',
      htmlContent: 'htmlContent',
      sanitizeHtml: 'sanitizeHtml'
    },
    prepare(selection) {
      const { title, htmlContent, sanitizeHtml } = selection
      const preview = htmlContent ? htmlContent.slice(0, 50) + '...' : 'No content'
      const security = sanitizeHtml ? '🔒 Sanitized' : '⚠️ Raw HTML'
      
      return {
        title: title || 'HTML Block',
        subtitle: `${security} • ${preview}`
      }
    }
  }
})
