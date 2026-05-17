import articles from '@/lib/data/articles';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Publications() {
  return (
    <div className="flex flex-col gap-4">
      {articles.map((article, index: number) => (
        <Link className="gap-2 py-1" key={index} href={article.link} target="_blank">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <Link href={article.publicationLink} target="_blank">
                <p className="text-chart-2 text-sm hover:text-chart-2/80">{article.publication}</p>
              </Link>
              <p className="text-lg font-semibold tracking-tight transition-colors hover:text-foreground/80">
                {article.title}
              </p>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground/80 hover:text-muted-foreground/50" />
          </div>
        </Link>
      ))}
    </div>
  );
}
