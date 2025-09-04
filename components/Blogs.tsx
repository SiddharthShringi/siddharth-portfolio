import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';

export default function Blogs({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2 py-2 px-2 transition">
            {/* Mobile Index */}
            <div className="flex flex-col justify-start gap-2 p-5 md:hidden">
              <h2 className="text-2xl font-semibold font-sans text-foreground hover:text-chart-2 transition-colors !cursor-pointer">
                {post.title}
              </h2>
              {post.publishedAt && (
                <p className="mt-1 text-xs font-light font-sans text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </p>
              )}
              {post.description && (
                <p className="mt-1 line-clamp-2 font-light text-base font-sans text-muted-foreground">
                  {post.description}
                </p>
              )}
            </div>
            {/* Desktop Index */}
            <div className="hidden md:flex items-center justify-between p-5">
              <div className="flex flex-1 flex-col space-y-2 max-w-lg lg:max-w-xl">
                <h2 className="text-2xl font-semibold font-sans text-foreground hover:text-chart-2 transition-colors !cursor-pointer">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-1 line-clamp-2 font-light text-md font-sans text-muted-foreground">
                    {post.description}
                  </p>
                )}
              </div>
              {post.publishedAt && (
                <p className="mt-1 p-2 text-sm font-light font-sans text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
