// components/CopyButton.tsx
'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      data-copy-button
      data-copied={copied || undefined}
      className="absolute top-2 right-2 p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 bg-muted hover:bg-muted-foreground/20 text-muted-foreground hover:text-foreground cursor-pointer"
      aria-label="Copy code"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
