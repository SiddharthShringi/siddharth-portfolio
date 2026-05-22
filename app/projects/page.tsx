import React from 'react';
import projects from '@/lib/data/projects';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Project } from '@/lib/types/project';
import { Hammer } from 'lucide-react';

export default function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 my-6 sm:my-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="my-4 sm:my-5 mb-6 sm:mb-10">
          <div className="flex items-center space-x-2">
            <Hammer className="h-4 w-4 sm:h-5 sm:w-5" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Projects</h1>
          </div>
          <Separator className="my-3 sm:my-4 bg-foreground/20 h-0.5" />
        </div>

        {/* Grid */}
        <div className="py-2 sm:py-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p: Project) => (
            <div
              className="rounded-2xl border p-4 sm:p-5 flex flex-col bg-background/30 hover:bg-background/70 transition-colors"
              key={`project-${p.title}-${p.links[0]?.url}`}
            >
              <h2 className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl font-semibold text-chart-2">
                {p.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                {p.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4">
                {p.links
                  .filter((l) => l.type === 'live' || l.type === 'github')
                  .map((l) => (
                    <Link
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-light underline-offset-4 text-muted-foreground hover:text-foreground hover:underline"
                    >
                      {l.label}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
