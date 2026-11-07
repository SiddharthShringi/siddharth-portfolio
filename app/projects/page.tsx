import projects from '@/lib/data/projects';
import { Project } from '@/lib/types/project';
import { Folder } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import Container from '@/components/ui/Container';

export default function Projects() {
  return (
    <section className="my-6 sm:my-10">
      <Container>
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5">
            <Folder className="h-5 w-5 text-chart-2 sm:h-6 sm:w-6" />

            <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Projects
            </h1>
          </div>

          <div className="mt-4 border-b border-border/60" />
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <p className="py-6 text-sm text-muted-foreground sm:text-base">No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {projects.map((project: Project) => (
              <ProjectCard key={project.title} p={project} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
