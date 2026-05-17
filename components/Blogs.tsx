import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';
import { BlogListItem } from './BlogListItem';

export default function Blogs({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div className="py-2" key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2">
            <BlogListItem post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}
