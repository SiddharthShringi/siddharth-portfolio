import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';
import { BlogListItem } from './BlogListItem';
import TagFilter from './TagFilter';

export default function Blogs({
  posts,
  tags,
  activeTag,
}: {
  posts: PostMetadata[];
  tags: string[];
  activeTag: string | undefined;
}) {
  const filteredPosts = activeTag ? posts.filter((post) => post.tags?.includes(activeTag)) : posts;

  return (
    <div>
      <TagFilter tags={tags} activeTag={activeTag} />

      {filteredPosts.length === 0 ? (
        <p className="py-8 text-sm text-muted-foreground">No posts found for this tag.</p>
      ) : (
        <div className="mt-5 flex flex-col divide-y divide-border/60">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="py-5 first:pt-2">
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <BlogListItem post={post} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
