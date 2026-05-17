import Link from 'next/link';
import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BlogListItem } from './BlogListItem';

export default function Blogs({ posts }: { posts: PostMetadata[] }) {
  console.log('Posts in Blogs component:', posts);
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div className="py-2" key={post.slug}>
          <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2">
            {/* Mobile Index */}
            <div className="flex flex-col justify-start gap-2 md:hidden">
              <h2 className="text-2xl font-semibold font-sans text-foreground hover:text-chart-2 transition-colors cursor-pointer!">
                {post.title}
              </h2>
              {post.description && (
                <p className="mt-1 line-clamp-2 font-light text-base font-sans text-muted-foreground">
                  {post.description}
                </p>
              )}
              {post.publishedAt && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                  <p className="mt-1 text-sm font-light font-sans text-muted-foreground">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            {/* Desktop Index */}
            <BlogListItem post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}
