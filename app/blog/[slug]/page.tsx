import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';

import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { extractHeadings, formatDate } from '@/lib/utils';

import Container from '@/components/ui/Container';
import MDXContent from '@/components/MDXContent';
import { TableOfContents } from '@/components/Toc';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
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

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { metadata, content } = post;
  const { title, publishedAt, showToc, image, readingTime } = metadata;

  const headings = extractHeadings(content);

  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div className="flex flex-col gap-8 xl:flex-row xl:justify-between xl:gap-12">
          {/* Article */}
          <main className="min-w-0 w-full xl:max-w-4xl">
            <div className="space-y-6 sm:space-y-8">
              {/* Back Navigation */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 xl:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Article Header */}
              <header className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-pretty text-foreground sm:text-4xl lg:text-[2.625rem]">
                  {title}
                </h1>

                {(publishedAt || readingTime) && (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm">
                    {publishedAt && (
                      <time
                        dateTime={publishedAt}
                        className="inline-flex items-center gap-1.5 font-mono text-muted-foreground"
                      >
                        <Calendar className="h-4 w-4 text-chart-2" />
                        {formatDate(publishedAt)}
                      </time>
                    )}

                    {publishedAt && readingTime && (
                      <span className="text-muted-foreground/50">•</span>
                    )}
                    {readingTime && (
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-4 w-4 text-chart-2" />
                        {readingTime}
                      </span>
                    )}
                  </div>
                )}
              </header>

              {/* Cover Image */}
              {image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-muted">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 896px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Mobile and Tablet TOC */}
              {showToc && (
                <div className="xl:hidden">
                  <TableOfContents headings={headings} />
                </div>
              )}

              {/* Article Content */}
              <article
                className="
                  prose prose-base max-w-3xl wrap-break-word dark:prose-invert
                  prose-p:text-base prose-p:leading-relaxed
                  sm:prose-p:text-lg sm:prose-p:leading-[1.75]
                  prose-headings:scroll-mt-24
                  prose-headings:font-semibold
                  prose-headings:tracking-tight
                  prose-h2:text-2xl sm:prose-h2:text-[1.75rem]
                  prose-h3:text-xl sm:prose-h3:text-[1.375rem]
                  prose-li:text-base sm:prose-li:text-lg
                  prose-li:leading-relaxed
                  prose-blockquote:font-normal
                  [&>p:first-of-type::first-letter]:text-2xl
                  [&>p:first-of-type::first-letter]:font-bold
                  sm:[&>p:first-of-type::first-letter]:text-4xl
                "
              >
                <MDXContent source={content} />
              </article>
            </div>
          </main>

          {/* Desktop TOC */}
          {showToc && (
            <aside className="hidden w-60 shrink-0 xl:block 2xl:w-64">
              <div className="sticky top-24">
                <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
                  <TableOfContents headings={headings} />
                </div>
              </div>
            </aside>
          )}
        </div>
      </Container>
    </section>
  );
}
