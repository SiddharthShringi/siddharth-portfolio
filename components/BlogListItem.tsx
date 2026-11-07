import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { Badge } from './ui/badge';
import { Calendar, Clock } from 'lucide-react';

export function BlogListItem({ post }: { post: PostMetadata }) {
  const { title, description, publishedAt, readingTime, tags } = post;

  return (
    <article className="group space-y-2 rounded-md px-3 py-4 transition-colors hover:bg-muted/40">
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {publishedAt && (
          <time
            dateTime={publishedAt}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground sm:text-sm"
          >
            <Calendar className="h-3.5 w-3.5 text-chart-2 sm:h-4 sm:w-4" />
            {formatDate(publishedAt)}
          </time>
        )}

        {readingTime && (
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
            <Clock className="h-3.5 w-3.5 text-chart-2 sm:h-4 sm:w-4" />
            {readingTime}
          </span>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-sm px-2 py-0.5 text-[12px] font-normal tracking-wide sm:px-2.5 sm:py-1 sm:text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <h2 className="text-base font-medium leading-snug tracking-tight text-foreground/90 transition-colors group-hover:text-chart-2 sm:text-lg">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
