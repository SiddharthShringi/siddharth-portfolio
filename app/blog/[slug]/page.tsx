import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { Calendar, ArrowLeft } from 'lucide-react';
import MDXContent from '@/components/MDXContent';
import { formatDate } from '@/lib/utils';

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
    <section className="mx-auto max-w-4xl py-6 sm:py-10">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="space-y-5 sm:space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 md:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <header className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-pretty leading-tight">
              {title}
            </h1>

            {publishedAt && readingTime && (
              <div className="flex items-center gap-2 text-base sm:text-sm">
                <div className="flex items-center gap-2 text-chart-2">
                  <Calendar className="h-4 w-4 shrink-0" />
                  <span>{formatDate(publishedAt)}</span>
                </div>

                <span className="text-muted-foreground">•</span>

                <span className="text-muted-foreground">{readingTime}</span>
              </div>
            )}
          </header>

          {image && (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl bg-muted">
              <Image
                src={image}
                alt={title || 'Blog Post Image'}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <main>
            <article
              className="prose prose-base sm:prose-lg prose-neutral tracking-wide dark:prose-invert
                prose-p:text-base sm:prose-p:text-lg
                prose-headings:text-xl sm:prose-headings:text-2xl
                [&>p:first-of-type::first-letter]:text-2xl
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
