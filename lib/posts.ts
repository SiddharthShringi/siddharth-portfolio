import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  description?: string;
  publishedAt?: string;
  slug?: string;
  author?: string;
  tags?: string[];
  image?: string;
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.mdx`);
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      metadata: { ...data, slug },
      content,
    };
  } catch (error) {
    console.error(`Error reading post with slug ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(limit?: number): Promise<PostMetadata[]> {
  const fileNames = await fs.promises.readdir(blogsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const metadata = getPostMetadata(fileName);
      return metadata;
    })
  );

  // Sort posts by published date in descending order
  posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt || '').getTime();
    const dateB = new Date(b.publishedAt || '').getTime();
    return dateB - dateA;
  });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export function getPostMetadata(fileName: string): PostMetadata {
  const slug = fileName.replace(/\.mdx?$/, '');
  const filePath = path.join(blogsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return { ...data, slug };
}
