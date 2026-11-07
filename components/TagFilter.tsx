import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  tags: string[];
  activeTag: string | undefined;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  const filters = [
    { label: 'All', href: '/blog', active: !activeTag },
    ...tags.map((tag) => ({
      label: tag,
      href: `/blog?tag=${encodeURIComponent(tag)}`,
      active: activeTag === tag,
    })),
  ];

  return (
    <nav aria-label="Filter blog posts by tag" className="mt-5">
      <ul className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <li key={filter.label}>
            <Link
              href={filter.href}
              aria-current={filter.active ? 'page' : undefined}
              className={cn(
                'inline-flex min-h-8 items-center justify-center rounded-full border px-3 py-1.5',
                'font-mono text-xs transition-colors duration-200 sm:min-h-9 sm:px-3.5 sm:text-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                filter.active
                  ? 'border-chart-2 bg-chart-2 text-background'
                  : 'border-border/70 bg-transparent text-muted-foreground hover:border-chart-2/60 hover:bg-muted/50 hover:text-foreground'
              )}
            >
              {filter.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
