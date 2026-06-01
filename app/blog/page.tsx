import { getAllPosts } from '@/lib/posts';
import BlogTabs from '@/components/BlogTabs';

export default async function Blog() {
  const posts = await getAllPosts();

  return <BlogTabs posts={posts} />;
}
