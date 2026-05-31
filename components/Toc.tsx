'use client';

import { useState, useEffect } from 'react';
import { Heading } from '@/lib/types/toc';
import { BookMarked } from 'lucide-react';
import clsx from 'clsx';

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px',
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="border-l-2 border-l-foreground/20 px-4 pb-4 mb-8">
      <div className="mb-4 flex items-center gap-2">
        <BookMarked className="w-6 h-6 text-chart-2" />
        <h2 className="text-lg lg:text-xl font-semibold mb-1 text-foreground/70">Contents</h2>
      </div>

      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`
        flex items-start gap-2
        ${heading.level === 1 ? '' : heading.level === 2 ? 'ml-4' : 'ml-8'}
      `}
          >
            <span
              className={`
                mt-2 shrink-0 rounded-full
                ${heading.level === 1 ? 'h-1.5 w-1.5 bg-foreground/60' : 'h-1.5 w-1.5 border border-foreground/60'}
              `}
            />
            <a
              href={`#${heading.id}`}
              className={clsx(
                'text-sm lg:text-base hover:text-foreground transition-colors',
                activeId === heading.id ? 'text-chart-2 font-semibold' : 'text-foreground/70'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
