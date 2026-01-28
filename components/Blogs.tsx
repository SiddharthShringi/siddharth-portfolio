import Link from 'next/link';
import Image from 'next/image';
import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Badge } from '@/components/ui/badge';

export default function Blogs({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="flex flex-col gap-4 ">
      {posts.map((post) => (
        <div
          className="border rounded-xl mx-5 hover:border-muted-foreground transition-transform duration-300 ease-out hover:scale-99"
          key={post.slug}
        >
          <Link href={`/blog/${post.slug}`} className="flex flex-col gap-2 py-2 px-2 transition">
            {/* Mobile Index */}
            <div className="flex flex-col justify-start gap-2 p-5 md:hidden">
              <h2 className="text-2xl font-semibold font-sans text-foreground hover:text-chart-2 transition-colors !cursor-pointer">
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
            <div className="hidden md:flex items-center justify-between gap-6 p-2">
              <div className="flex flex-1 flex-col space-y-2 max-w-lg lg:max-w-xl">
                <h2 className="text-xl font-semibold font-sans text-foreground hover:text-chart-2 transition-colors !cursor-pointer">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="line-clamp-2 font-light text-sm font-sans text-muted-foreground">
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
              <div className="w-50 shrink-0 overflow-hidden rounded-lg">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={post.image || '/default-blog-image.jpg'}
                    alt={post.title || 'Blog Post Image'}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
