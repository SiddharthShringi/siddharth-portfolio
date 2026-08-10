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
    <div className="flex flex-col gap-4">
      <TagFilter tags={tags} activeTag={activeTag} />
      {filteredPosts.map((post) => (
        <div className="py-2" key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2">
            <BlogListItem post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}
