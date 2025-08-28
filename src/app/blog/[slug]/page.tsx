import { getPostBySlug, getAllPosts } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/lib/portableTextComponents";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  };
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Blog
        </Link>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-700">{post.title}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).width(32).height(32).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <span>By {post.author.name}</span>
            </div>
          )}
          <span>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <span 
                key={category.slug.current}
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                style={{
                  backgroundColor: category.color?.hex ? `${category.color.hex}20` : undefined,
                  color: category.color?.hex || undefined
                }}
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        {/* Main Image */}
        {post.mainImage && (
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image
              src={urlFor(post.mainImage).width(800).height(450).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <div className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 p-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-900 rounded-r">
            {post.excerpt}
          </div>
        )}
      </header>

      {/* Article Content */}
      {post.body && (
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
          <PortableText 
            value={post.body}
            components={portableTextComponents}
          />
        </div>
      )}

      {/* Author Bio */}
      {post.author && post.author.bio && (
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div className="flex gap-4">
            {post.author.image && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={urlFor(post.author.image).width(64).height(64).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold mb-2">About {post.author.name}</h3>
              <div className="prose prose-sm dark:prose-invert">
                <PortableText 
                  value={post.author.bio}
                  components={portableTextComponents}
                />
              </div>
              {post.author.socialLinks && (
                <div className="flex gap-3 mt-4">
                  {post.author.socialLinks.website && (
                    <Link 
                      href={post.author.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Website
                    </Link>
                  )}
                  {post.author.socialLinks.twitter && (
                    <Link 
                      href={post.author.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Twitter
                    </Link>
                  )}
                  {post.author.socialLinks.linkedin && (
                    <Link 
                      href={post.author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="mt-12 text-center">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}
