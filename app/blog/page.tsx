import Blogs from '@/components/Blogs';
import { getAllPosts } from '@/lib/posts';
import React from 'react';

async function Blog() {
  const posts = await getAllPosts();
  return (
    <section className="mx-20 my-10">
      <div className="max-w-7xl mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <h1 className="text-4xl font-bold font-sans mb-10">Blog</h1>
        <Blogs posts={posts} />
      </div>
    </section>
  );
}

export default Blog;
