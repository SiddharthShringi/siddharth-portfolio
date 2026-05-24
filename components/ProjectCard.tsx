import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Project, ProjectLink } from '@/lib/types/project';
import { GitHubIcon } from './icons/SocialIcon';

const LINK_ICONS: Record<string, React.ReactNode> = {
  live: <ExternalLink className="h-4 w-4" />,
  github: <GitHubIcon className="h-4 w-4" />,
};

const MAX_STACK = 4;

export default function ProjectCard({ p }: { p: Project }) {
  const visibleLinks = p.links.filter((l: ProjectLink) => l.type === 'live' || l.type === 'github');
  const visibleStack = p.stack.slice(0, MAX_STACK);
  const extraStack = p.stack.length - MAX_STACK;

  return (
    <div className="rounded-2xl border p-4 sm:p-5 flex flex-col hover:bg-muted/60 transition-colors">
      <h3 className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl font-semibold text-chart-2">
        {p.title}
      </h3>

      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {p.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
        {visibleStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {extraStack > 0 && (
          <span className="rounded-full border px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-muted-foreground">
            +{extraStack} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-auto pt-4">
        {visibleLinks.map((l: ProjectLink) => (
          <Link
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.label} for ${p.title}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {LINK_ICONS[l.type]}
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
