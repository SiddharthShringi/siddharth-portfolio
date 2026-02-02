import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { Calendar } from 'lucide-react';
import MDXContent from '@/components/MDXContent';
import { formatDate } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { metadata, content } = post;
  const { title, publishedAt, image } = metadata;

  return (
    <section className="mx-auto max-w-4xl py-10">
      <div className="px-6 lg:px-8 xl:px-10">
        <header className="mt-10 mb-2">
          <h1 className="text-4xl font-extrabold text-chart-3 dark:text-chart-2 font-sans text-pretty my-2 sm:my-2">
            {title}
          </h1>
          {publishedAt && (
            <div className="flex items-center pt-2 pb-4">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <p className="text-xs text-muted-foreground px-2">{formatDate(publishedAt)}</p>
            </div>
          )}
        </header>
        {/* Post Image */}

        {image && (
          <div className="sm:mb-6 h-64 sm:h-96 rounded-xl shadow-xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={image}
                alt={title || 'Blog Post Image'}
                fill
                className="object-cover"
                priority
              />
            </AspectRatio>
          </div>
        )}
        <main className="mx-auto max-w-4xl py-4">
          <article className="prose prose-lg prose-neutral dark:prose-invert">
            <MDXContent source={content} />
          </article>
        </main>
      </div>
    </section>
  );
}
