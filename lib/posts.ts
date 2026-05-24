import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cache } from 'react';

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
  ogImage?: string;
  readingTime?: string;
};

async function readPostFile(fileName: string) {
  const filePath = path.join(blogsDirectory, fileName);

  return fs.promises.readFile(filePath, 'utf8');
}

async function parsePost(fileName: string) {
  const slug = fileName.replace(/\.mdx?$/, '');

  const fileContents = await readPostFile(fileName);

  const { data, content } = matter(fileContents);

  return {
    metadata: {
      ...data,
      slug,
      readingTime: readingTime(content).text,
    },
    content,
  };
}

function sortPostsByDate(posts: PostMetadata[]) {
  return posts.sort((a, b) => {
    return new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime();
  });
}

export async function getPostMetadata(fileName: string): Promise<PostMetadata> {
  const { metadata } = await parsePost(fileName);

  return metadata;
}

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  try {
    return await parsePost(`${slug}.mdx`);
  } catch {
    return null;
  }
});

export async function getAllPosts(limit?: number): Promise<PostMetadata[]> {
  const fileNames = await fs.promises.readdir(blogsDirectory);

  const posts = await Promise.all(fileNames.map(getPostMetadata));

  const sortedPosts = sortPostsByDate(posts);

  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}
