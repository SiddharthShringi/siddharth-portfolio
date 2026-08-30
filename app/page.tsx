import { getAllPosts } from '@/lib/posts';
import RecentPosts from '@/components/RecentPosts';
import Introduction from '@/components/Introduction';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      <section className="px-4 sm:px-6 lg:px-8 xl:px-10 mt-10 sm:mt-20">
        <div className="container mx-auto max-w-7xl">
          <Introduction />
          <RecentPosts posts={posts.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
