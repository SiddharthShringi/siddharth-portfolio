// components/mdx/Pre.tsx
import CopyButton from '@/components/CopyButton';
import React from 'react';

function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (!children) return '';

  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }

  if (typeof children === 'object' && 'props' in children) {
    return extractText((children as React.ReactElement).props?.children);
  }

  return '';
}

export default function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const code = extractText(children);

  return (
    <pre {...props} className={`${props.className ?? ''} relative group`}>
      {children}
      <CopyButton code={code} />
    </pre>
  );
}
