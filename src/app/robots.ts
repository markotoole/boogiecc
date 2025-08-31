export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      }
    ],
    sitemap: 'https://boog.ie/sitemap.xml',
    host: 'https://boog.ie'
  }
}