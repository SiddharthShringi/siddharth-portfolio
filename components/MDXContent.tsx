import { JSX } from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import Pre from '@/components/Pre';
import { Callout } from '@/components/Callout';
import Image from 'next/image';

const components = {
  pre: Pre,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">
      <table>{children}</table>
    </div>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null;
    return (
      <span className="block relative w-full aspect-video my-4">
        <Image
          src={src}
          alt={alt || ''}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full max-w-3xl h-auto rounded-lg my-4"
        />
      </span>
    );
  },
  Callout,
};

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'vesper',
    light: 'one-light',
  },
};

export default function MDXContent(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
        },
        ...props.options,
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
