import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Calendar } from 'lucide-react';

export function BlogListItem({ post }: { post: PostMetadata }) {
  const { title, description, publishedAt, readingTime, tags } = post;

  return (
    <article className="group space-y-2">
      <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
        {publishedAt && (
          <div className="flex items-center gap-1.5 text-chart-2 font-stretch-semi-expanded">
            <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5" />
            <span>{formatDate(publishedAt)}</span>
          </div>
        )}

        {readingTime && (
          <>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-muted-foreground">{readingTime}</span>
          </>
        )}

        {tags && tags.length > 0 && (
          <>
            <span className="text-muted-foreground/50">•</span>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-md px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-[11px] font-normal uppercase"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="space-y-1">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground/90 tracking-tight transition-colors group-hover:text-foreground">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-xs md:text-sm leading-5 md:leading-6 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
