'use client';

import { useState } from 'react';
import Blogs from '@/components/Blogs';
import Publications from '@/components/Publications';
import { BookText, Pencil } from 'lucide-react';
import { PostMetadata } from '@/lib/posts';
import { cn } from '@/lib/utils';

interface BlogTabsProps {
  posts: PostMetadata[];
}

export default function BlogTabs({ posts }: BlogTabsProps) {
  const [activeTab, setActiveTab] = useState<'writings' | 'publications'>('writings');

  return (
    <section className="my-6 sm:my-10 px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-8">
          <button
            onClick={() => setActiveTab('writings')}
            className={cn(
              'flex items-center gap-2 pb-2 pr-2 border-b-2 transition-colors cursor-pointer',
              activeTab === 'writings' ? 'border-chart-2' : 'border-transparent'
            )}
          >
            <Pencil className="h-4 w-4" />
            <span className="text-lg sm:text-xl font-medium">Writings</span>
          </button>

          <button
            onClick={() => setActiveTab('publications')}
            className={cn(
              'flex items-center gap-2 pb-2 pr-2 border-b-2 transition-colors cursor-pointer',
              activeTab === 'publications' ? 'border-chart-2' : 'border-transparent'
            )}
          >
            <BookText className="h-4 w-4" />
            <span className="text-lg sm:text-xl font-medium">Publications</span>
          </button>
        </div>

        <div className="mt-6">
          {activeTab === 'writings' && <Blogs posts={posts} />}
          {activeTab === 'publications' && <Publications />}
        </div>
      </div>
    </section>
  );
}
