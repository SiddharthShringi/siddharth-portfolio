import Link from 'next/link';
import * as motion from 'motion/react-client';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CircleSmall,
  Dot,
  GitCommitHorizontal,
  SendHorizonal,
} from 'lucide-react';

import { formatDate } from '@/lib/utils';
import { PostMetadata } from '@/lib/posts';

type RecentPostsProps = {
  posts: PostMetadata[];
};

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-2xl mx-auto mt-8 mb-8 text-center sm:mt-10 sm:mb-10 lg:mx-0 lg:text-left"
    >
      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 lg:justify-start">
        <h2 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
          Recent posts
        </h2>

        <span aria-hidden="true" className="text-muted-foreground">
          •
        </span>

        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-md text-primary underline-offset-4 hover:underline sm:base"
        >
          View All
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Posts */}
      <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-wrap items-baseline justify-center gap-x-2 text-base sm:text-lg lg:justify-start"
          >
            <span aria-hidden="true" className="shrink-0 text-muted-foreground">
              <Dot className="h-3 w-3" />
            </span>

            {post.publishedAt && (
              <time
                dateTime={post.publishedAt}
                className="shrink-0 font-mono text-sm text-muted-foreground sm:text-md"
              >
                {formatDate(post.publishedAt)}
              </time>
            )}

            <span aria-hidden="true" className="text-muted-foreground">
              <ChevronRight className="h-3 w-3" />
            </span>

            <Link
              href={`/blog/${post.slug}`}
              className="text-accent-foreground underline-offset-4 hover:underline text-md sm:text-base"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
