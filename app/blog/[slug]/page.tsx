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
      images: metadata.ogImage
        ? [
            {
              url: metadata.ogImage,
              width: 1200,
              height: 630,
              alt: metadata.title,
            },
          ]
        : [],
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
        <header className="mt-10 mb-2">
          <p className="text-4xl font-extrabold font-sans text-pretty my-2 sm:my-2">{title}</p>
          {publishedAt && readingTime && (
            <div className="flex items-center pt-2 pb-4">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground px-2">
                {formatDate(publishedAt)} • {readingTime}
              </p>
            </div>
          )}
        </header>
        {/* Post Image */}

        {image && (
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt={title || 'Blog Post Image'}
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
            />
          </AspectRatio>
        )}
        <main className="mx-auto max-w-4xl py-4 my-10">
          <article
            className="prose prose-lg prose-neutral 
              dark:prose-invert tracking-wide 
              [&>p:first-of-type::first-letter]:font-bold
              [&>p:first-of-type::first-letter]:text-3xl
              sm:[&>p:first-of-type::first-letter]:text-4xl"
          >
            <MDXContent source={content} />
          </article>
        </main>
      </div>
    </section>
  );
}
