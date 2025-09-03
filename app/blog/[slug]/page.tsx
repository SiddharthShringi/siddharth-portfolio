import React from 'react';
import { getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import MDXContent from '@/components/MDXContent';
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
    <section className="flex items-center justify-center my-10">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
        <Link
          href="/blog"
          className="flex items-center text-sm text-muted-foreground mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Blog</span>
        </Link>
        {/* Post Image */}

        <header>
          <h1 className="text-4xl font-bold font-sans text-balance my-2">
            {title}
          </h1>
          {publishedAt && (
            <p className="text-sm text-muted-foreground my-1">
              {formatDate(publishedAt)}
            </p>
          )}
          {author && (
            <p className="text-sm text-muted-foreground my-2">By {author}</p>
          )}
        </header>
        <main className="prose dark:prose-invert prose-pre:bg-accent dark:prose-pre:bg-accent mt-16">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
