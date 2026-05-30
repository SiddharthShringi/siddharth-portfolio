import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Heading } from './types/toc';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];

  let inCodeBlock = false;

  for (const line of markdown.split('\n')) {
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    const match = line.match(/^(#{1,6})\s+(.+)$/);

    if (!match) continue;

    const level = match[1].length;
    const text = match[2].trim();

    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}
