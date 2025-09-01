import React from 'react';
import { getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { metadata, content } = post;
  const { title, description, publishedAt, author, image } = metadata;

  return (
    <section className="mx-20 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <Link
          href="/blog"
          className="flex items-center text-sm text-muted-foreground mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Blog</span>
        </Link>
        {/* Post Image */}

        <header>
          <h1 className="text-4xl font-bold font-sans">{title}</h1>
          {publishedAt && (
            <p className="text-sm text-muted-foreground">
              {formatDate(publishedAt)}
            </p>
          )}
          {author && (
            <p className="text-sm text-muted-foreground">By {author}</p>
          )}
        </header>
        <main className="prose dark:prose-invert mt-16">
          <MDXRemote source={content} />
        </main>
      </div>
    </section>
  );
}
