import Blogs from '@/components/Blogs';
import { getAllPosts } from '@/lib/posts';
import React from 'react';

async function Blog() {
  // const posts = await getAllPosts();
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* <Blogs posts={posts} /> */}
        <h1 className="text-chart-2 text-5xl"> 🚧 Coming Soon </h1>
      </div>
    </section>
  );
}

export default Blog;
