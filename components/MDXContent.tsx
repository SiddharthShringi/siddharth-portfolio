import { JSX } from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'github-dark-dimmed',
    light: 'one-light',
  },
};

const components = {};

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
