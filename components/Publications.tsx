import articles from '@/lib/data/articles';
import { BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Publications() {
  if (articles.length === 0) {
    return <p className="py-6 text-sm text-muted-foreground">No publications yet.</p>;
  }

  return (
    <div className="divide-y divide-border/60">
      {articles.map((article) => (
        <Link
          key={article.link}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between gap-4 rounded-md px-2 py-4 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-5"
        >
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
              <BookOpen className="h-3.5 w-3.5 shrink-0 text-chart-2" />
              <span>{article.publication}</span>
            </div>

            <h3 className="text-base font-medium leading-relaxed text-foreground/90 transition-colors group-hover:text-chart-2 sm:text-lg">
              {article.title}
            </h3>
          </div>

          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-chart-2" />
        </Link>
      ))}
    </div>
  );
}
