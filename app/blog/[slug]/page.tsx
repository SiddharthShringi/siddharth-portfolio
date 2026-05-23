import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { Calendar } from 'lucide-react';
import MDXContent from '@/components/MDXContent';
import { formatDate } from '@/lib/utils';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { metadata } = post;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: `/blog/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { metadata, content } = post;
  const { title, publishedAt, image, readingTime } = metadata;

  return (
    <section className="mx-auto max-w-4xl py-10">
      <div className="px-6 lg:px-8 xl:px-10">
        <div className="space-y-8">
          <header className="space-y-3">
            <h1 className="text-4xl font-extrabold font-serif text-pretty">{title}</h1>

            {publishedAt && readingTime && (
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-2 text-chart-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(publishedAt)}</span>
                </div>

                <span className="text-muted-foreground">•</span>

                <span className="text-muted-foreground">{readingTime}</span>
              </div>
            )}
          </header>

          {image && (
            <AspectRatio ratio={16 / 9}>
              <Image
                src={image}
                alt={title || 'Blog Post Image'}
                fill
                className="rounded-lg object-cover shadow-2xl"
                priority
              />
            </AspectRatio>
          )}

          <main>
            <article
              className="prose prose-lg prose-neutral tracking-wide dark:prose-invert
            [&>p:first-of-type::first-letter]:text-3xl
            [&>p:first-of-type::first-letter]:font-bold
            sm:[&>p:first-of-type::first-letter]:text-4xl"
            >
              <MDXContent source={content} />
            </article>
          </main>
        </div>
      </div>
    </section>
  );
}
