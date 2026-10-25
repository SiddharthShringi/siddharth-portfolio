import CopyButton from '@/components/CopyButton';
import React from 'react';

function extractText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (!children) return '';

  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return extractText(children.props.children);
  }

  return '';
}

export default function Pre({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const code = extractText(children);

  return (
    <div className="relative group">
      <CopyButton code={code} />
      <pre {...props} className={`overflow-x-auto max-w-full ${props.className ?? ''}`}>
        {children}
      </pre>
    </div>
  );
}
