import { ReactNode } from 'react';

export function NoteItem({
  icon,
  chip,
  children,
}: {
  icon: ReactNode;
  chip?: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <div className="space-y-2 text-sm">
        <p>{children}</p>
        {chip && (
          <span className="inline-block rounded bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
            {chip}
          </span>
        )}
      </div>
    </li>
  );
}

export function NoteFooter({ left, right }: { left: string; right: string }) {
  return (
    <div className="mt-auto flex justify-between pt-6 font-mono text-xs text-muted-foreground">
      <span>{left}</span>
      <span className="text-foreground">{right}</span>
    </div>
  );
}
