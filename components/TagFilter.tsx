import Link from 'next/link';

function TagFilter({ tags, activeTag }: { tags: string[]; activeTag: string | undefined }) {
  return (
    <div className="flex gap-2 flex-wrap mt-5">
      <Link
        href="/blog"
        className={`px-3 py-1 rounded-full text-sm border transition-colors ${
          !activeTag
            ? 'bg-chart-2 text-background border-chart-2/10'
            : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
        }`}
      >
        All
      </Link>
      {tags.map((t) => (
        <Link
          key={t}
          href={`/blog?tag=${encodeURIComponent(t)}`}
          className={`px-3 py-1 rounded-full text-sm border transition-colors font-mono ${
            activeTag === t
              ? 'bg-chart-2 text-background border-chart-2/10'
              : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
          }`}
        >
          {t}
        </Link>
      ))}
    </div>
  );
}

export default TagFilter;
