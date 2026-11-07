'use client';

import Blogs from '@/components/Blogs';
import Publications from '@/components/Publications';
import { Pencil, BookCheck } from 'lucide-react';
import { PostMetadata } from '@/lib/posts';
import Container from './ui/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BlogTabsProps {
  posts: PostMetadata[];
  tags: string[];
  activeTag: string | undefined;
}

export default function BlogTabs({ posts, tags, activeTag }: BlogTabsProps) {
  return (
    <section className="my-6 sm:my-10">
      <Container>
        <Tabs defaultValue="writings">
          <TabsList className="h-auto w-fit justify-start gap-5 rounded-none border-b border-border/60 bg-transparent p-0 sm:gap-8">
            <TabsTrigger
              value="writings"
              className="gap-2 rounded-none border-b-2 border-transparent px-1 pb-3 text-base font-medium text-muted-foreground shadow-none transition-colors hover:text-foreground data-[state=active]:border-chart-2 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none sm:text-lg"
            >
              <Pencil className="h-4 w-4 sm:h-5 sm:w-5" />
              Writings
            </TabsTrigger>

            <TabsTrigger
              value="publications"
              className="gap-2 rounded-none border-b-2 border-transparent px-1 pb-3 text-base font-medium text-muted-foreground shadow-none transition-colors hover:text-foreground data-[state=active]:border-chart-2 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none sm:text-lg"
            >
              <BookCheck className="h-4 w-4 sm:h-5 sm:w-5" />
              Publications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="writings" className="mt-6">
            <Blogs posts={posts} tags={tags} activeTag={activeTag} />
          </TabsContent>

          <TabsContent value="publications" className="mt-6">
            <Publications />
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
