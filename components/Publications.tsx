import articles from '@/lib/data/articles';
import { ExternalLink, Newspaper } from 'lucide-react';
import Link from 'next/link';

export default function Publications() {
  return (
    <div className="flex flex-col">
      {articles.map((article, index: number) => (
        <div key={index} className="py-2 pr-2 transition-colors hover:bg-muted/30">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <Link href={article.publicationLink} target="_blank" className="inline-block">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Newspaper className="h-3.5 w-3.5" />
                  <p>
                    Published at{' '}
                    <span className="text-chart-2 font-medium">{article.publication}</span>
                  </p>
                </div>
              </Link>

              <Link href={article.link} target="_blank" className="group mt-1 block">
                <p className="text-base sm:text-lg font-semibold tracking-tight leading-snug transition-colors text-foreground/80 group-hover:text-foreground wrap-break-word">
                  {article.title}
                </p>
              </Link>
            </div>

            <Link href={article.link} target="_blank" className="shrink-0 mt-1">
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground/80 transition-colors hover:text-muted-foreground/50" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
