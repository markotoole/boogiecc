import { client } from './sanity'

export interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt: string
  mainImage?: any
  body?: any[]
  author?: {
    name: string
    slug: { current: string }
    image?: any
    bio?: any[]
    email?: string
    socialLinks?: {
      twitter?: string
      linkedin?: string
      website?: string
    }
  }
  categories?: Array<{
    title: string
    slug: { current: string }
    color?: { hex: string }
  }>
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface Author {
  _id: string
  name: string
  slug: { current: string }
  image?: any
  bio?: any[]
  email?: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    website?: string
  }
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  color?: { hex: string }
}

// GROQ Queries
export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  author->{name, slug, image},
  categories[]->{title, slug, color}
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  body,
  author->{name, slug, image, bio, email, socialLinks},
  categories[]->{title, slug, color},
  seo
}`

export const authorsQuery = `*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  bio,
  email,
  socialLinks
}`

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`

// Query Functions
export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(postsQuery)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(postBySlugQuery, { slug })
}

export async function getAllAuthors(): Promise<Author[]> {
  return client.fetch(authorsQuery)
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(categoriesQuery)
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const query = `*[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    author->{name, slug, image},
    categories[]->{title, slug, color}
  }`
  return client.fetch(query, { categorySlug })
}

export async function getPostsByAuthor(authorSlug: string): Promise<Post[]> {
  const query = `*[_type == "post" && author->slug.current == $authorSlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    author->{name, slug, image},
    categories[]->{title, slug, color}
  }`
  return client.fetch(query, { authorSlug })
}
