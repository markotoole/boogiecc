export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      }
    ],
    sitemap: 'https://boogiecc.vercel.app/sitemap.xml',
    host: 'https://boogiecc.vercel.app'
  }
}