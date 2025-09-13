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

  // Filter out posts without valid slugs before rendering
  const validPosts = posts.filter(post => post && post.slug && post.slug.current);

  // Debug: log all posts data
  console.log('All posts data:', validPosts.map(post => ({
    title: post.title,
    hasCategories: !!post.categories,
    categoriesLength: post.categories?.length || 0,
    categories: post.categories?.map(cat => ({ title: cat?.title, slug: cat?.slug?.current }))
  })));

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* DEBUG INFO for blog listing */}
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-sm">
            <strong className="text-blue-800 dark:text-blue-200">Blog Listing Debug:</strong>
            <div className="text-xs text-blue-700 dark:text-blue-300 mt-2">
              Total posts: {validPosts.length}
              <br />Posts with categories: {validPosts.filter(post => post.categories && post.categories.length > 0).length}
              <br />Check console for detailed post data
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Insights, news, articles, fiction, thoughts and experiments from the Boogie team about our artists, 
          events, media productions, and about the ever-evolving worlds of music, art and publishing.
        </p>

        {validPosts.length === 0 ? (
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
            {validPosts.map((post: Post) => (
              <article key={post._id} className="border-b pb-10 last:border-0 dark:border-gray-800">
                <div className="grid md:grid-cols-[250px_1fr] gap-6">
                  {post.mainImage && (
                    <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(250).height(180).url()}
                        alt={post.title || ''}
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
                        {post.publishedAt && (
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </time>
                        )}
                        {post.author?.name && (
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
                    
                    {/* Debug info per post */}
                    <div className="text-xs bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded">
                      Categories for "{post.title}": {post.categories?.length || 0}
                      {post.categories && post.categories.length > 0 && (
                        <div>Data: {JSON.stringify(post.categories.map(cat => ({ title: cat?.title, slug: cat?.slug?.current })))}</div>
                      )}
                    </div>

                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.categories
                          .filter(category => category && category.slug && category.slug.current && category.title)
                          .map((category) => (
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
