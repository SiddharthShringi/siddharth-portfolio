import { Bookmark, Info, StickyNote } from 'lucide-react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export function Callout({ title = 'Note', children }: Props) {
  return (
    <div
      className="
        my-8 flex gap-4 rounded-lg
        bg-chart-2/10 p-4
        dark:bg-emerald-950/20
        sm:p-5
      "
    >
      {/* Accent */}
      <div
        className="
          w-1 shrink-0 rounded-full
          bg-chart-2
          dark:bg-emerald-400/70
        "
      />

      {/* Content */}
      <div className="min-w-0 flex-1 py-0.5">
        <div className="mb-2 flex items-center gap-2">
          <StickyNote
            className="
              h-4 w-4 shrink-0
              text-emerald-700
              dark:text-emerald-400
            "
          />

          <span
            className="
              text-xs font-semibold uppercase
              tracking-[0.18em]
              text-chart-2
              dark:text-emerald-400
              sm:tracking-[0.2em]
            "
          >
            {title}
          </span>
        </div>

        <div
          className="
            leading-7 text-muted-foreground
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
