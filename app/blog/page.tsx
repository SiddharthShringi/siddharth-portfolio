import Blogs from '@/components/Blogs';
import { Separator } from '@/components/ui/separator';
import { getAllPosts } from '@/lib/posts';
import { BookText, PenLine } from 'lucide-react';
import React from 'react';

async function Blog() {
  const posts = await getAllPosts();
  return (
    <section className="my-10">
      <div className="mx-auto max-w-7xl">
        <div className="mt-5 mb-10">
          <div className="flex items-center space-x-2">
            <PenLine className="h-5 w-5" />
            <h1 className="text-xl text-foreground font-semibold">Writings</h1>
          </div>
          <Separator className="my-4 bg-foreground/50 h-0.5" />
        </div>
        <Blogs posts={posts} />
        <div className="mt-10">
          <div className="flex items-center space-x-2">
            <BookText className="h-5 w-5" />
            <h1 className="text-xl text-foreground font-semibold">Publications</h1>
          </div>
          <Separator className="my-4 bg-foreground/50 h-0.5" />
        </div>
      </div>
    </section>
  );
}

export default Blog;
