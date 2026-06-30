import { Sparkle } from 'lucide-react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title = 'Note', children }: Props) {
  console.log(title);
  return (
    <div className="my-8 flex gap-3 sm:gap-5">
      {/* Accent */}
      <div className="w-0.5 shrink-0 rounded-full bg-cyan-400" />

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="mb-2 sm:mb-3 flex items-center gap-2">
          <Sparkle className="h-4 w-4 shrink-0 text-cyan-600" />

          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-cyan-600">
            {title}
          </span>
        </div>

        <div
          className="
        [&>p:first-child]:mt-0
        [&>p:last-child]:mb-0
      "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
