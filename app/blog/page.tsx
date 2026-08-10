import { getAllPosts, getAllTags } from '@/lib/posts';
import BlogTabs from '@/components/BlogTabs';

export default async function Blog({ searchParams }: { searchParams: Promise<{ tag?: string }> }) {
  const { tag } = await searchParams;
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return <BlogTabs posts={posts} tags={tags} activeTag={tag} />;
}
