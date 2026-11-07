import Link from 'next/link';
import * as motion from 'motion/react-client';
import { ArrowRight } from 'lucide-react';

import { formatDate } from '@/lib/utils';
import { PostMetadata } from '@/lib/posts';

type RecentPostsProps = {
  posts: PostMetadata[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      aria-labelledby="recent-posts-heading"
      className="mx-auto my-8 w-full max-w-2xl sm:my-10 lg:mx-0"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h2
          id="recent-posts-heading"
          className="text-xl font-medium tracking-tight text-foreground sm:text-2xl"
        >
          Recent posts
        </h2>

        <Link
          href="/blog"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Posts */}
      <ul className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            {post.publishedAt && (
              <time
                dateTime={post.publishedAt}
                className="shrink-0 font-mono text-xs text-muted-foreground sm:w-27.5 sm:text-sm"
              >
                {formatDate(post.publishedAt)}
              </time>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium leading-relaxed text-foreground/90 underline-offset-4 transition-colors duration-200 hover:text-chart-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-base"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
