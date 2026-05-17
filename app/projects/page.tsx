import React from 'react';
import projects from '@/lib/data/projects';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Project } from '@/lib/types/project';
import { Hammer } from 'lucide-react';

export default function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 my-10">
      <div className="mx-auto max-w-7xl ">
        <div className="my-5 mb-10">
          <div className="flex items-center space-x-2">
            <Hammer className="h-5 w-5" />
            <h1 className="text-xl font-semibold">Projects</h1>
          </div>
          <Separator className="my-4 bg-foreground/20 h-0.5" />
        </div>
        <main className="py-4 space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p: Project) => (
              <div className="rounded-2xl border p-5" key={`project-${p.title}-${p.links[0]?.url}`}>
                <h2 className="mt-4 text-xl font-semibold text-chart-2">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
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
        </main>
      </div>
    </section>
  );
}
