import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { Calendar, ArrowLeft } from 'lucide-react';
import MDXContent from '@/components/MDXContent';
import { TableOfContents } from '@/components/Toc';
import { extractHeadings, formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

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
  const { title, publishedAt, showToc, image, readingTime } = metadata;
  const headings = extractHeadings(content);

  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 my-6 sm:my-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col xl:flex-row xl:justify-between gap-6 lg:gap-8 xl:gap-12">
          <main className="w-full min-w-0 xl:max-w-4xl">
            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              {/* Back Button */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 md:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              {/* Header */}
              <header className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-pretty leading-tight">
                  {title}
                </h1>

                {publishedAt && readingTime && (
                  <div className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="flex items-center gap-2 text-chart-2">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>{formatDate(publishedAt)}</span>
                    </div>

                    <span className="text-muted-foreground">•</span>

                    <span className="text-muted-foreground">{readingTime}</span>
                  </div>
                )}
              </header>
              {/* Cover Image */}
              {image && (
                <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl bg-muted">
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

              {/* Mobile + Tablet TOC */}
              {showToc && (
                <div className="xl:hidden">
                  <TableOfContents headings={headings} />
                </div>
              )}

              <article
                className="prose prose-base max-w-3xl sm:prose-lg prose-neutral wrap-break-word tracking-wide dark:prose-invert
              prose-p:text-base sm:prose-p:text-lg
              prose-headings:scroll-mt-24
              prose-headings:text-xl sm:prose-headings:text-2xl
              [&>p:first-of-type::first-letter]:text-2xl
              [&>p:first-of-type::first-letter]:font-bold
              sm:[&>p:first-of-type::first-letter]:text-4xl"
              >
                <MDXContent source={content} />
              </article>
            </div>
          </main>

          {showToc && (
            <aside className="hidden xl:block w-78 shrink-0">
              <div className="sticky top-24">
                <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
                  <TableOfContents headings={headings} />
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
