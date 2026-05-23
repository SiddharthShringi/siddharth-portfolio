import { JSX } from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import Pre from '@/components/Pre';

const components = {
  pre: Pre, // 👈 override the default pre
};

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'material-theme-darker',
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
