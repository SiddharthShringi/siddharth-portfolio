'use client';

import { useState } from 'react';
import Blogs from '@/components/Blogs';
import Publications from '@/components/Publications';
import { Pencil, BookCheck } from 'lucide-react';
import { PostMetadata } from '@/lib/posts';
import Container from './ui/Container';
import { cn } from '@/lib/utils';

interface BlogTabsProps {
  posts: PostMetadata[];
  tags: string[];
  activeTag: string | undefined;
}

type Tab = 'writings' | 'publications';

export default function BlogTabs({ posts, tags, activeTag }: BlogTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('writings');

  const tabs = [
    { id: 'writings' as const, label: 'Writings', icon: Pencil },
    { id: 'publications' as const, label: 'Publications', icon: BookCheck },
  ];

  return (
    <section className="my-6 sm:my-10">
      <Container>
        {/* Tab Navigation */}
        <div className="flex w-fit items-center gap-5 sm:gap-8">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex min-h-11 items-center gap-2 whitespace-nowrap',
                  'border-b-2 px-0 py-2.5 sm:py-3',
                  'text-sm font-medium tracking-tight transition-colors duration-200',
                  'sm:text-base lg:text-lg',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4',
                  isActive
                    ? 'border-chart-2 text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon
                  className={cn(
                    'h-4 w-4 shrink-0 transition-colors duration-200 sm:h-4.5 sm:w-4.5',
                    isActive ? 'text-chart-2' : 'text-muted-foreground'
                  )}
                  strokeWidth={1.8}
                />

                {label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-4 sm:mt-5">
          {activeTab === 'writings' && <Blogs posts={posts} tags={tags} activeTag={activeTag} />}

          {activeTab === 'publications' && <Publications />}
        </div>
      </Container>
    </section>
  );
}
