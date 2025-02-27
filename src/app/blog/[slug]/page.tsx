import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// In a real implementation, you would use these functions
// import { getFileBySlug, getAllFilesFrontmatter } from '@/lib/mdx';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// This would dynamically generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real implementation, we would fetch the post data
  // const post = await getFileBySlug('posts', params.slug);
  
  // For demonstration, we'll use mock data based on the slug
  const posts = getMockPosts();
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Boogie Media Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// This would generate static paths for all blog posts
export async function generateStaticParams() {
  // In a real implementation, we would fetch all posts
  // const posts = getAllFilesFrontmatter('posts');
  
  // For demonstration, we'll use mock data
  const posts = getMockPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Mock function to get posts (in a real app, this would come from files)
function getMockPosts() {
  return [
    {
      slug: "content-marketing-trends",
      title: "5 Content Marketing Trends for 2025",
      date: "2025-02-15",
      description: "Stay ahead of the curve with these emerging content marketing trends that will shape the industry in 2025.",
      author: "Jane Smith",
      tags: ["content", "marketing", "trends"],
      image: "/images/blog-new/cyberpunk-city-night-1.webp",
      content: `
# 5 Content Marketing Trends for 2025

Stay ahead of the curve with these emerging content marketing trends that will shape the industry in 2025.

## 1. AI-Generated Content Becomes Mainstream

Artificial intelligence tools are revolutionizing content creation. In 2025, we expect to see more brands using AI to:

- Generate first drafts of articles and social posts
- Create personalized content variations at scale
- Optimize content for specific platforms and audiences

However, human creativity and oversight will remain essential for maintaining brand voice and ensuring content quality.

## 2. Interactive and Immersive Experiences

Static content is giving way to interactive experiences that engage audiences on a deeper level:

- Interactive infographics and data visualizations
- Augmented reality (AR) experiences embedded in content
- Gamified content that rewards engagement

Brands that create participatory content will see higher engagement and retention rates.

## 3. Voice Search Optimization

With voice assistants becoming ubiquitous, optimizing for voice search is no longer optional:

- Conversational, question-based content
- Featured snippet optimization
- Local SEO for voice-driven discovery

Content structured to answer specific questions will perform best in voice search results.

## 4. Hyper-Personalization

Generic content is losing effectiveness as audiences expect personalized experiences:

- Dynamic content that adapts based on user behavior
- Segment-specific content journeys
- Real-time content recommendations

The most successful brands will leverage data to deliver highly relevant content at the right moment.

## 5. Sustainability Storytelling

Environmental and social responsibility is becoming central to brand narratives:

- Transparent reporting on sustainability initiatives
- Content highlighting ethical business practices
- User-generated content showcasing sustainable product use

Authentic sustainability storytelling will help brands connect with increasingly conscious consumers.

---

By embracing these trends while maintaining focus on creating valuable, relevant content, marketers can position themselves for success in 2025 and beyond.
      `
    },
    {
      slug: "video-production-guide",
      title: "The Ultimate Video Production Guide for Brands",
      date: "2025-02-01",
      description: "Learn the essential steps to create high-quality video content that resonates with your audience and strengthens your brand.",
      author: "John Doe",
      tags: ["video", "production", "guide"],
      image: "/images/blog/proteus_gemini.jpeg",
      content: "This would be a comprehensive guide about video production..."
    },
    {
      slug: "social-media-strategy",
      title: "Building an Effective Social Media Strategy",
      date: "2025-01-20",
      description: "Discover key principles for developing a social media strategy that drives engagement and supports your business goals.",
      author: "Alex Johnson",
      tags: ["social media", "strategy", "digital marketing"],
      image: "/images/blog-new/cyberpunk-city-night-2.webp",
      content: "This would be an article about social media strategy development..."
    },
  ];
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const posts = getMockPosts();
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        <Link href="/blog" className="text-blue-600 hover:underline dark:text-blue-500 no-underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 mb-4">
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
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          {post.image && (
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </header>
        
        {/* In a real implementation, we would use MDXRemote to render the content */}
        <div className="markdown">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}