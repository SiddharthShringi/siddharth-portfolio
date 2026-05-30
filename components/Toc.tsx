import { Heading } from '@/lib/types/toc';

export function TableOfContents({ headings }: { headings: Heading[] }) {
  return (
    <nav className="border-l p-4 mb-8">
      <h2 className="font-semibold mb-3">Table of Contents</h2>

      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 1 ? '' : heading.level === 2 ? 'ml-4' : 'ml-8'}
          >
            <a href={`#${heading.id}`} className="text-muted-foreground hover:text-foreground">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
