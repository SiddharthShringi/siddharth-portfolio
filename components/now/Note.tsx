import type { ReactNode } from 'react';

type NoteItemProps = {
  icon?: ReactNode;
  iconColor?: string;
  chip?: string;
  children: ReactNode;
};

export function NoteItem({
  icon,
  iconColor = 'text-muted-foreground',
  chip,
  children,
}: NoteItemProps) {
  return (
    <li className="flex items-start gap-3">
      {icon && <span className={`mt-1 shrink-0 ${iconColor}`}>{icon}</span>}

      <div className="min-w-0 space-y-2">
        <p className="text-sm leading-6 text-card-foreground sm:text-base sm:leading-7">
          {children}
        </p>

        {chip && (
          <span
            className="
              inline-flex max-w-full
              rounded-sm
              border border-border/50
              bg-background/60
              px-2 py-1
              font-mono text-[10px]
              leading-relaxed
              text-muted-foreground
              sm:text-xs
            "
          >
            {chip}
          </span>
        )}
      </div>
    </li>
  );
}

type NoteFooterProps = {
  left?: string;
  right?: string;
};

export function NoteFooter({ left, right }: NoteFooterProps) {
  if (!left && !right) return null;

  return (
    <footer
      className="
        mt-auto
        flex flex-wrap items-center justify-between
        gap-x-3 gap-y-2
        border-t border-border/50
        pt-5
        font-mono text-[10px]
        leading-relaxed
        text-muted-foreground
        sm:text-xs
      "
    >
      {left && <span>{left}</span>}

      {right && <span className="text-foreground/80">{right}</span>}
    </footer>
  );
}
