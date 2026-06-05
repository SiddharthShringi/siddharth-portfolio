import { Lightbulb } from 'lucide-react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title = 'Note', children }: Props) {
  console.log(title);
  return (
    <div className="my-8 rounded-xl border border-amber-200/50 border-l-4 border-l-amber-500 bg-amber-50/50 px-5 py-4 dark:border-amber-900/50 dark:bg-amber-950/10">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-7 w-7 shrink-0 text-amber-500 mt-3" />
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
