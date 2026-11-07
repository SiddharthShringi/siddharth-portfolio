import { getAllPosts } from '@/lib/posts';
import RecentPosts from '@/components/RecentPosts';
import Introduction from '@/components/Introduction';
import Container from '@/components/ui/Container';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      <section className="my-6 sm:my-10">
        <Container>
          <Introduction />
          <RecentPosts posts={posts.slice(0, 3)} />
        </Container>
      </section>
    </main>
  );
}
