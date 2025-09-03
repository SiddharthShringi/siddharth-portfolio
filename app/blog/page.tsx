import Blogs from '@/components/Blogs';
import { getAllPosts } from '@/lib/posts';
import React from 'react';

async function Blog() {
  const posts = await getAllPosts();
  return (
    <section className="my-10">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
        <h1 className="text-4xl font-bold font-sans mb-10">Blogs</h1>
        <Blogs posts={posts} />
      </div>
    </section>
  );
}

export default Blog;
