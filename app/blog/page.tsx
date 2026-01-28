import Blogs from '@/components/Blogs';
import { getAllPosts } from '@/lib/posts';
import React from 'react';

async function Blog() {
  const posts = await getAllPosts();
  return (
    <section className="">
      <div className="mx-auto max-w-7xl">
        <div className="mx-5 py-5 text-center">
          <h1 className="text-5xl text-chart-2 font-bold">Posts</h1>
          <p className="text-muted-foreground py-2">
            Thoughts, tutorials, and insights on engineering, and programming.
          </p>
          <div className="border-t my-2"></div>
        </div>
        <Blogs posts={posts} />
      </div>
      {/* <h1 className="text-chart-2 text-5xl"> 🚧 Coming Soon </h1> */}
    </section>
  );
}

export default Blog;
