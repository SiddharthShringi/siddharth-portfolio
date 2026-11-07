'use client';

import { useEffect, useState } from 'react';
import { Heading } from '@/lib/types/toc';
import { BookMarked, CircleSmall } from 'lucide-react';
import clsx from 'clsx';

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? '');

  useEffect(() => {
    if (!headings.length) return;

    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!headingElements.length) return;

    const updateActiveHeading = () => {
      const scrollPosition = window.scrollY;
      const isAtBottom =
        window.innerHeight + scrollPosition >= document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        setActiveId(headingElements[headingElements.length - 1].id);
        return;
      }

      const threshold = 150;

      // Find the last heading that has crossed the reading threshold.
      const currentHeading = [...headingElements]
        .reverse()
        .find((heading) => heading.getBoundingClientRect().top <= threshold);

      setActiveId(currentHeading?.id ?? headingElements[0].id);
    };

    updateActiveHeading();

    window.addEventListener('scroll', updateActiveHeading, {
      passive: true,
    });

    window.addEventListener('resize', updateActiveHeading);

    return () => {
      window.removeEventListener('scroll', updateActiveHeading);
      window.removeEventListener('resize', updateActiveHeading);
    };
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="
        mb-8 rounded-lg border border-border/60 bg-muted/20 p-4
        xl:mb-0 xl:rounded-none xl:border-0 xl:border-l-2
        xl:border-l-foreground/20 xl:bg-transparent xl:py-0 xl:pr-0 xl:pl-4
      "
    >
      {/* Heading */}
      <div className="mb-4 flex items-center gap-2">
        <BookMarked className="h-5 w-5 shrink-0 text-chart-2" />

        <h2 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
          Contents
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="ml-1 space-y-2.5">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;

          return (
            <li
              key={heading.id}
              className={clsx(
                'flex items-start gap-2.5',
                heading.level === 1 ? '' : heading.level === 2 ? 'ml-3' : 'ml-6'
              )}
            >
              {/* Active Indicator */}
              <CircleSmall
                aria-hidden="true"
                className={clsx(
                  'mt-1 h-3 w-3 shrink-0 transition-colors duration-200',
                  isActive ? 'fill-chart-2 text-chart-2' : 'text-muted-foreground/50'
                )}
              />

              <a
                href={`#${heading.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={clsx(
                  'text-sm leading-relaxed transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  isActive
                    ? 'font-semibold text-chart-2'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
