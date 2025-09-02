import { JSX } from 'react';
import { highlight } from 'sugar-high';
import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote-client/rsc';

function Code({ children, ...props }: any) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = { code: Code };

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
