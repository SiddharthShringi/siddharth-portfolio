import { Lightbulb } from 'lucide-react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title = 'Note', children }: Props) {
  console.log(title);
  return (
    <div className="my-8 rounded-xl border border-gray-200/60 border-l-4 border-l-gray-500  bg-gray-50/40 px-5 py-4 dark:border-gray-950/40 dark:bg-gray-950/10 dark:border-l-gray-400">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-7 w-7 shrink-0 text-gray-500 dark:text-gray-400 mt-1.5" />
        <div
          className="mt-2 text-sm leading-7 text-foreground
        [&>p:first-child]:mt-0
        [&>p:last-child]:mb-0"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
