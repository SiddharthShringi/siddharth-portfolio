import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { ArrowLeft, Calendar } from 'lucide-react';
import MDXContent from '@/components/MDXContent';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { metadata, content } = post;
  const { title, publishedAt, author, image } = metadata;

  return (
    <section className="md:flex md:items-center md:justify-center my-10">
      <div className="px-6 lg:px-8 xl:px-10">
        <Link href="/blog" className="flex items-center text-sm text-muted-foreground mb-4">
          <Badge className="mb-1 mr-2 bg-foreground hover:bg-muted-foreground cursor-pointer transition-transform duration-300 ease-out hover:scale-95">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Blog</span>
          </Badge>
        </Link>

        <header>
          <h1 className="text-4xl font-bold font-sans text-balance my-2 sm:my-2">{title}</h1>
          {publishedAt && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">{formatDate(publishedAt)}</p>
            </div>
          )}
          {author && <p className="text-sm text-muted-foreground mt-2 mb-4">By {author}</p>}
        </header>
        {/* Post Image */}

        {image && (
          <div className="relative w-full sm:mb-6 h-64 sm:h-96 overflow-hidden">
            <Image
              src={image}
              alt={title || 'Blog Post Image'}
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        )}
        <main className="prose dark:prose-invert prose-pre:bg-accent dark:prose-pre:bg-accent mt-5">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
