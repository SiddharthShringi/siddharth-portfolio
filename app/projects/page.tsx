import projects from '@/lib/data/projects';
import { Project } from '@/lib/types/project';
import { Hammer } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 my-6 sm:my-10">
      <div className="mx-auto max-w-7xl">
        <div className="my-4 sm:my-5 mb-6 sm:mb-10">
          <div className="flex items-center space-x-2">
            <div className="border-b-2 border-transparent hover:border-chart-2 flex items-center gap-2 pb-2 pr-1">
              <Hammer className="h-4 w-4 sm:h-5 sm:w-5" />
              <h2 className="text-lg sm:text-xl font-medium">Projects</h2>
            </div>
          </div>
        </div>

        {projects.length === 0 ? (
          <p className="text-sm text-muted-foreground">No projects yet.</p>
        ) : (
          <div className="py-2 sm:py-4 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: Project) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
