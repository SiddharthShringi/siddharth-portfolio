import { JSX } from 'react';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'one-dark-pro',
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
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
        ...props.options,
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
