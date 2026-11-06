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
      {icon && (
        <span aria-hidden="true" className={`mt-1 shrink-0 ${iconColor}`}>
          {icon}
        </span>
      )}

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
              wrap-break-word
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

type NoteSubsectionProps = {
  title: string;
  description: ReactNode;
  headingColor: string;
  icon?: ReactNode;
};

export function NoteSubsection({ title, description, headingColor, icon }: NoteSubsectionProps) {
  return (
    <li className="space-y-2">
      <div className="flex items-center gap-2.5">
        {icon && (
          <span aria-hidden="true" className={`flex shrink-0 items-center ${headingColor}`}>
            {icon}
          </span>
        )}

        <h3
          className={`
            font-semibold tracking-tight
            text-base
            sm:text-lg
            ${headingColor}
          `}
        >
          {title}
        </h3>
      </div>

      <p className="text-sm leading-6 text-card-foreground sm:text-base sm:leading-7">
        {description}
      </p>
    </li>
  );
}

type NoteLinkProps = {
  href: string;
  children: ReactNode;
  color?: string;
};

export function NoteLink({ href, children, color = 'text-brand' }: NoteLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`
        font-medium
        ${color}
        underline decoration-current/40
        underline-offset-4
        transition-colors
        hover:decoration-current
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-current
      `}
    >
      {children}
    </a>
  );
}
