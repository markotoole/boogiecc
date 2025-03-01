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
      content: `
# Building an Effective Social Media Strategy

In today's digital landscape, a well-crafted social media strategy is essential for businesses of all sizes. This comprehensive guide will walk you through creating a social media plan that drives meaningful engagement, builds your brand, and delivers measurable results.

## Understanding Your Audience: The Foundation of Success

Every effective social media strategy begins with a deep understanding of your target audience. Without this crucial knowledge, even the most creatively crafted content will fail to resonate.

![A diverse group of people using various digital devices for social media](https://www.pexels.com/photo/people-office-team-collaboration-7647913/ "Photo by RDNE Stock project from Pexels")

*Caption: Understanding audience demographics and behavior is essential for targeting your social media strategy effectively. Photo by RDNE Stock project from Pexels.*

### Key steps for audience analysis:

1. **Develop detailed buyer personas** that include demographics, interests, pain points, and online behavior patterns
2. **Analyze your existing audience data** from website analytics, email subscribers, and current social media followers
3. **Conduct surveys and interviews** with your current customers to gain qualitative insights
4. **Research which platforms** your target audience frequents and how they use each one

Remember that different demographic groups prefer different platforms. For instance, younger audiences (Gen Z) gravitate toward TikTok and Instagram, while business professionals remain active on LinkedIn and Twitter.

## Setting Clear, Measurable Objectives

Vague goals like "increase social media presence" don't provide direction or a way to measure success. Instead, set SMART objectives (Specific, Measurable, Achievable, Relevant, Time-bound).

### Example SMART social media objectives:

- Increase Instagram follower count by 25% within six months
- Achieve a 15% engagement rate on LinkedIn posts by Q3
- Generate 200 qualified leads from social media channels this quarter
- Improve social media conversion rate from 1.5% to 3% by year-end

![A person analyzing social media metrics on computer screens](https://pixabay.com/illustrations/social-media-social-marketing-2786261/ "Image by Mohamed Hassan from Pixabay")

*Caption: Tracking analytics is crucial for measuring the effectiveness of your social media strategy. Image by Mohamed Hassan from Pixabay.*

## Content Strategy: The Heart of Social Media Success

With audience insights and clear objectives established, you can develop a content strategy that resonates with your target users and advances your business goals.

### The content mix framework:

- **Educational content (30%)**: Articles, how-to guides, explainer videos, and infographics that solve problems
- **Entertaining content (20%)**: Humorous posts, behind-the-scenes looks, team spotlights, and industry memes
- **Inspirational content (20%)**: Success stories, testimonials, thought leadership, and motivational content
- **Promotional content (30%)**: Product announcements, special offers, and direct calls-to-action

This balanced approach prevents the common mistake of over-promoting, which can alienate followers.

### Content pillars approach:

Another effective framework is to establish 3-5 content pillars—key themes that align with your brand values and audience interests. For example, a fitness brand might use pillars like:

1. Workout Tips and Techniques
2. Nutrition Advice
3. Mental Health and Wellness
4. Community Spotlights
5. Product Innovations

## Platform Selection and Optimization

Not all platforms deserve your attention and resources. Focus on those where your audience is most active and where your content format works best.

![Various social media platform logos with a strategic planning document](https://www.vecteezy.com/vector-art/8649428-social-media-apps-icons-collection-isolated-on-transparent-background "Image by Vecteezy")

*Caption: Choosing the right platforms for your business is a critical strategic decision. Image from Vecteezy.*

### Platform-specific considerations:

- **Instagram**: Visual-first platform ideal for lifestyle, fashion, food, fitness, and travel brands
- **LinkedIn**: Professional network best for B2B companies, thought leadership, and recruitment
- **TikTok**: Short-form video platform with high organic reach potential, especially for creative, entertaining content
- **X (Twitter)**: Real-time platform for news, customer service, and industry conversations
- **Facebook**: Broad demographic reach with strong community-building and advertising capabilities
- **Pinterest**: Visual discovery platform excellent for DIY, home decor, fashion, and aspirational content

For each selected platform, optimize your profile with:
- Complete, keyword-rich descriptions
- Consistent branding elements 
- High-quality profile and cover images
- Relevant links to your website or landing pages

## Community Building and Engagement Strategies

Social media is fundamentally about building relationships, not broadcasting messages.

### Effective engagement tactics:

1. **Respond promptly to all comments and messages**, ideally within 1-2 hours
2. **Ask questions** in posts to stimulate conversation
3. **Create polls and interactive content** that invites participation
4. **Highlight user-generated content** to make followers feel valued
5. **Join relevant conversations** by monitoring hashtags and industry discussions
6. **Collaborate with complementary brands** and influencers to expand reach

![People discussing social media strategy around a table](https://www.shutterstock.com/image-photo/group-business-people-meeting-office-discussing-1676998306 "Image by Prostock-studio on Shutterstock")

*Caption: Collaborative strategy sessions can help teams develop more effective social media approaches. Image by Prostock-studio on Shutterstock.*

## Measurement, Analysis, and Optimization

A data-driven approach allows you to continually refine your social media strategy based on real performance metrics.

### Key metrics to track:

- **Reach and impressions**: Visibility of your content
- **Engagement rate**: Likes, comments, shares, and saves relative to followers
- **Click-through rate**: Percentage of people taking action from your posts
- **Conversion rate**: Followers who complete desired actions (purchases, sign-ups, etc.)
- **Share of voice**: Your brand mentions compared to competitors
- **Sentiment analysis**: The positive, negative, or neutral tone of conversations about your brand

Establish a regular cadence for reviewing these metrics—weekly for tactical adjustments and monthly or quarterly for strategic shifts.

## Tools for Social Media Success

The right tools can dramatically improve efficiency and effectiveness.

### Essential tool categories:

1. **Content scheduling platforms**: Buffer, Hootsuite, Sprout Social, or Later
2. **Analytics tools**: Native platform analytics plus Google Analytics, Brandwatch, or Sprout Social
3. **Design resources**: Canva, Adobe Express, or Piktochart for creating visual content
4. **Video creation tools**: Descript, Premiere Rush, or CapCut
5. **Social listening tools**: Mention, Brandwatch, or Hootsuite

## Conclusion: Iterative Improvement Is Key

The most successful social media strategies evolve constantly. By establishing solid fundamentals, consistently analyzing results, and making data-driven adjustments, you can build a social media presence that genuinely supports your business objectives.

Remember that authenticity remains the cornerstone of social media success. In an increasingly sophisticated digital world, audiences can easily detect and will quickly dismiss inauthentic content and engagement.

Start where you are, focus on quality over quantity, and commit to continuous improvement based on audience feedback and performance data.
      `
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