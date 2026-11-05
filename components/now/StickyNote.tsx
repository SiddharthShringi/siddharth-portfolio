import { ReactNode } from 'react';

type StickyNoteProps = {
  children: ReactNode;
  tapePosition?: number; // 0-100
  tapeColor?: string; // full class, e.g. "bg-emerald-800/70"
  tilt?: string; // full class, e.g. "rotate-2"
  tapeTilt?: string;
  className?: string;
};

export function StickyNote({
  children,
  tapePosition = 50,
  tapeColor = 'bg-emerald-800/70',
  tilt = 'rotate-2',
  tapeTilt = 'rotate-2',
  className = '',
}: StickyNoteProps) {
  const left = Math.min(85, Math.max(15, tapePosition));

  return (
    <div
      className={`relative flex flex-col rounded-xl border border-secondary-foreground/10 bg-accent p-5 shadow-xl transition-transform duration-300 hover:rotate-0 ${tilt} hover:rotate-0 ${className}`}
    >
      <div
        className={`absolute -top-3 h-5 w-15 -translate-x-1/2 shadow-sm backdrop-blur-sm opacity-85 ${tapeColor} ${tapeTilt}`}
        style={{ left: `${left}%` }}
      />
      {children}
    </div>
  );
}
