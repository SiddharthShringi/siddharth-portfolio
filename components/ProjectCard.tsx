import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project, ProjectLink } from '@/lib/types/project';
import { GitHubIcon } from './icons/SocialIcon';
import { cn } from '@/lib/utils';

const LINK_ICONS: Record<string, React.ReactNode> = {
  live: <ExternalLink className="h-4 w-4" />,
  github: <GitHubIcon className="h-4 w-4" />,
};

const MAX_STACK = 4;

export default function ProjectCard({ p }: { p: Project }) {
  const visibleLinks = (p.links || []).filter(
    (link: ProjectLink) => link.type === 'live' || link.type === 'github'
  );

  const visibleStack = p.stack.slice(0, MAX_STACK);
  const extraStack = p.stack.length - MAX_STACK;

  return (
    <article
      className="
        flex h-full flex-col gap-3
        rounded-xl border border-border/70
        p-4 transition-colors duration-200
        hover:border-chart-2/40 hover:bg-muted/40
        sm:gap-3.5 sm:p-5
      "
    >
      {/* Project Information */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
          {p.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {p.description}
        </p>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {visibleStack.map((tech) => (
          <span
            key={tech}
            className="
              inline-flex items-center rounded-full
              border border-border/70 px-2.5 py-1
              text-[11px] leading-none text-muted-foreground
              sm:text-xs
            "
          >
            {tech}
          </span>
        ))}

        {extraStack > 0 && (
          <span
            className="
              inline-flex items-center rounded-full
              border border-border/70 px-2.5 py-1
              text-[11px] leading-none text-muted-foreground
              sm:text-xs
            "
          >
            +{extraStack} more
          </span>
        )}
      </div>

      {/* Project Links */}
      {visibleLinks.length > 0 && (
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          {visibleLinks.map((link: ProjectLink) => (
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} for ${p.title}`}
              className={cn(
                'inline-flex min-h-9 items-center gap-1.5 rounded-md px-3 py-2',
                'text-xs font-medium text-muted-foreground transition-colors duration-200',
                'hover:bg-muted hover:text-foreground',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                'sm:text-sm'
              )}
            >
              {LINK_ICONS[link.type]}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
