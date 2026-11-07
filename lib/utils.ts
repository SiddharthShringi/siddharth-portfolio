import { clsx, type ClassValue } from 'clsx';
import GithubSlugger from 'github-slugger';
import { twMerge } from 'tailwind-merge';
import { Heading } from './types/toc';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  const slugger = new GithubSlugger();

  let inCodeBlock = false;
  let codeFence = '';

  for (const line of markdown.split('\n')) {
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);

    if (fenceMatch) {
      const fence = fenceMatch[1][0];

      if (!inCodeBlock) {
        inCodeBlock = true;
        codeFence = fence;
      } else if (fence === codeFence) {
        inCodeBlock = false;
      }

      continue;
    }

    if (inCodeBlock) continue;

    const match = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);

    if (!match) continue;

    const level = match[1].length;
    const text = match[2].trim();

    headings.push({
      id: slugger.slug(text),
      text,
      level,
    });
  }

  return headings;
}
