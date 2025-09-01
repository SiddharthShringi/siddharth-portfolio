import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export default function Blogs({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-2 cursor-pointer border-b-2 border-transparent hover:border-foreground/20 pb-2 transition-all duration-200 transition-transform duration-300 hover:scale-102"
          >
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold font-sans text-foreground">
                {post.title}
              </h2>
              {post.description && (
                <p className="mt-1 line-clamp-2 font-light font-sans text-muted-foreground">
                  {post.description}
                </p>
              )}
            </div>
            {post.publishedAt && (
              <p className="mt -1 text-sm font-light font-sans text-muted-foreground">
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
