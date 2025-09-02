import Link from "next/link";
import Image from "next/image";
import { getAllPosts, Post } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Boogie Media",
  description: "Latest insights, news, and articles from Boogie Media",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Insights, news, and articles from the Boogie team about our artists, 
          events, media productions, and the ever-evolving worlds of digital art and publishing.
        </p>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No blog posts found. Check back soon for new content!
            </p>
            <Link 
              href="/studio"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add your first post in Sanity Studio
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post: Post) => (
              <article key={post._id} className="border-b pb-10 last:border-0 dark:border-gray-800">
                <div className="grid md:grid-cols-[250px_1fr] gap-6">
                  {post.mainImage && (
                    <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(250).height(180).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold leading-tight">
                        <Link 
                          href={`/blog/${post.slug.current}`} 
                          className="hover:text-blue-600 dark:hover:text-blue-500"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {post.author && (
                          <>
                            <span>•</span>
                            <span>{post.author.name}</span>
                          </>
                        )}
                      </div>
                    </div>
                    {post.excerpt && (
                      <p className="text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((category) => (
                          <span 
                            key={category.slug.current}
                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
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
                    <div>
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
