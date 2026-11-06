import type { ReactNode } from 'react';

type StickyNoteProps = {
  children: ReactNode;
  tapePosition?: number;
  tapeColor?: string;
  tilt?: string;
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
    <article
      className={`
        relative flex h-full flex-col
        rounded-sm
        border border-border/50
        bg-card text-card-foreground
        p-6 pt-8 sm:p-7 sm:pt-9
        shadow-[0_4px_12px_rgba(0,0,0,0.06),0_16px_32px_rgba(0,0,0,0.08)]
        transition-transform duration-300
        hover:rotate-0
        ${tilt}
        ${className}
      `}
    >
      {/* Decorative washi tape */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute -top-3
          z-10
          h-6 w-20
          -translate-x-1/2
          opacity-85
          shadow-sm
          backdrop-blur-[2px]
          ${tapeColor}
          ${tapeTilt}
        `}
        style={{
          left: `${left}%`,
          clipPath:
            'polygon(2% 5%, 98% 0%, 95% 85%, 88% 100%, 78% 88%, 68% 100%, 56% 88%, 44% 100%, 32% 88%, 20% 100%, 10% 88%, 3% 100%)',
        }}
      />

      {children}
    </article>
  );
}
