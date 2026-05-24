import { JSX } from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import Pre from '@/components/Pre';

const components = {
  pre: Pre,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">
      <table>{children}</table>
    </div>
  ),
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
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
        ...props.options,
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
