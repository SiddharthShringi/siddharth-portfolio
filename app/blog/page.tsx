import Blogs from '@/components/Blogs';
import Publications from '@/components/Publications';
import { Separator } from '@/components/ui/separator';
import { getAllPosts } from '@/lib/posts';
import { BookText, PenLine } from 'lucide-react';
import React from 'react';

async function Blog() {
  const posts = await getAllPosts();
  return (
    <section className="my-6 sm:my-10 px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Writings */}
        <div className="my-4 sm:my-5">
          <div className="flex items-center space-x-2">
            <PenLine className="h-4 w-4 sm:h-5 sm:w-5" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Writings</h1>
          </div>
          <Separator className="my-3 sm:my-4 bg-foreground/20 h-0.5" />
        </div>

        <Blogs posts={posts} />

        {/* Publications */}
        <div className="my-4 sm:my-5 mt-8 sm:mt-12">
          <div className="flex items-center space-x-2">
            <BookText className="h-4 w-4 sm:h-5 sm:w-5" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Publications</h1>
          </div>
          <Separator className="my-3 sm:my-4 bg-foreground/20 h-0.5" />
        </div>

        <Publications />
      </div>
    </section>
  );
}

export default Blog;
