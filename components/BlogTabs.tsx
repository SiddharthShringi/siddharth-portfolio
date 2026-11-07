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
        <div className="flex w-fit items-center gap-6 sm:gap-8">
          {tabs.map(({ id, label, icon: Icon }) => {
            const isActive = activeTab === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={cn(
                  'flex items-center gap-2 border-b-2 px-0 py-3',
                  'text-sm font-medium transition-colors duration-200 sm:text-base',
                  isActive
                    ? 'border-chart-2 text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon
                  className={cn(
                    'h-4 w-4 transition-colors duration-200',
                    isActive ? 'text-chart-2' : 'text-muted-foreground'
                  )}
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
