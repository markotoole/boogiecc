import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Define the content types
export type ContentType = 'posts' | 'pages';

// Define the frontmatter structure
export interface Frontmatter {
  title: string;
  date?: string;
  description?: string;
  author?: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
  [key: string]: any;
}

export interface MDXContent {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content');

// Get all files from a directory
export const getFiles = (type: ContentType): string[] => {
  const directory = path.join(contentDirectory, type);
  return fs.readdirSync(directory).filter(file => {
    const filePath = path.join(directory, file);
    return fs.statSync(filePath).isFile() && (file.endsWith('.mdx') || file.endsWith('.md'));
  });
};

// Get a single file by slug
export const getFileBySlug = async (type: ContentType, slug: string): Promise<{ mdxSource: any; frontmatter: Frontmatter }> => {
  const directory = path.join(contentDirectory, type);
  const filePath = path.join(directory, `${slug}.mdx`);
  const mdxPath = fs.existsSync(filePath) ? filePath : path.join(directory, `${slug}.md`);
  
  const source = fs.readFileSync(mdxPath, 'utf8');
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    },
    scope: data,
  });

  return {
    mdxSource,
    frontmatter: {
      slug,
      ...data,
    } as Frontmatter,
  };
};

// Get all files frontmatter
export const getAllFilesFrontmatter = (type: ContentType): Frontmatter[] => {
  const files = getFiles(type);

  return files.map((file) => {
    const filePath = path.join(contentDirectory, type, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);
    
    return {
      ...data,
      slug: file.replace(/\.(mdx|md)$/, ''),
    } as Frontmatter;
  })
  .filter(post => process.env.NODE_ENV === 'development' || !post.draft)
  .sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};