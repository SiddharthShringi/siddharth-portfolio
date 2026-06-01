import articles from '@/lib/data/articles';
import { BookOpen, BookOpenText, ExternalLink, Newspaper } from 'lucide-react';
import Link from 'next/link';

export default function Publications() {
  return (
    <div className="flex flex-col">
      {articles.map((article, index: number) => (
        <div
          key={index}
          className="py-3 px-2 transition-colors hover:bg-muted/40 rounded-md cursor-pointer"
        >
          <Link href={article.link} target="_blank">
            <div className="flex items-start justify-between gap-4 cursor-pointer">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-1.5 text-sm text-foreground/70">
                  <BookOpen className="h-3.5 w-3.5 text-chart-2" />
                  <span>{article.publication}</span>
                </div>

                <div className="group mt-1 block">
                  <p className="text-base md:text-lg lg:text-xl font-semibold leading-snug transition-colors text-foreground/90 group-hover:text-foreground wrap-break-word line-clamp-2">
                    {article.title}
                  </p>
                </div>
              </div>

              <div className="shrink-0 mt-1">
                <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4 text-muted-foreground/80 transition-colors hover:text-muted-foreground/50" />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
