import projects from '@/lib/data/projects';
import { Project } from '@/lib/types/project';
import { Boxes, FolderGit2, Hammer } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 my-6 sm:my-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 border-b-2 border-foreground/80 pb-2 pr-2">
            <Hammer className="h-5 w-5 text-chart-2" />
            <h1 className="text-lg sm:text-xl font-medium">Projects</h1>
          </div>
        </div>

        {projects.length === 0 ? (
          <p className="text-sm text-muted-foreground">No projects yet.</p>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: Project) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
