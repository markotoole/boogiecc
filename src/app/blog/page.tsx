import Link from "next/link";
import Image from "next/image";
import { getAllFilesFrontmatter } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Boogie Media",
  description: "Latest insights, news, and articles from Boogie Media",
};

export default function BlogPage() {
  // In a real implementation, you would use the getAllFilesFrontmatter function
  // For now, we'll use mock data
  const posts = [
    {
      slug: "content-marketing-trends",
      title: "5 Content Marketing Trends for 2025",
      date: "2025-02-15",
      description: "Stay ahead of the curve with these emerging content marketing trends that will shape the industry in 2025.",
      author: "Jane Smith",
      tags: ["content", "marketing", "trends"],
      image: "/images/blog-new/cyberpunk-city-night-1.webp"
    },
    {
      slug: "video-production-guide",
      title: "The Ultimate Video Production Guide for Brands",
      date: "2025-02-01",
      description: "Learn the essential steps to create high-quality video content that resonates with your audience and strengthens your brand.",
      author: "John Doe",
      tags: ["video", "production", "guide"],
      image: "/images/blog/proteus_gemini.jpeg"
    },
    {
      slug: "social-media-strategy",
      title: "Building an Effective Social Media Strategy",
      date: "2025-01-20",
      description: "Discover key principles for developing a social media strategy that drives engagement and supports your business goals.",
      author: "Alex Johnson",
      tags: ["social media", "strategy", "digital marketing"],
      image: "/images/blog-new/cyberpunk-city-night-2.webp"
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Insights, news, and articles from the Boogie team on content strategy, 
          media production, and the ever-evolving world of digital publishing.
        </p>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-10 last:border-0 dark:border-gray-800">
              <div className="grid md:grid-cols-[250px_1fr] gap-6">
                {post.image && (
                  <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-500">
                        {post.title}
                      </Link>
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Link
                      href={`/blog/${post.slug}`}
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
      </div>
    </div>
  );
}