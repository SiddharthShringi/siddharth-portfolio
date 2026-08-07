import { Project } from '@/lib/types/project';

const projects: Project[] = [
  {
    title: 'DAS Score',
    description: 'A comprehensive dashboard for tracking and visualizing key performance metrics.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: [
      { type: 'live', url: 'https://das-score.vercel.app', label: 'View Live' },
      { type: 'github', url: 'https://github.com/SiddharthShringi/DAS-Score', label: 'Github' },
    ],
  },
  {
    title: 'WorkNotes (In Progress)',
    description:
      'A Time Tracking and Note Taking App built with Next.js, TypeScript, Tailwind CSS, and PostgreSQL.',
    stack: ['Ruby on Rails', 'PostgreSQL', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/SiddharthShringi/worknotesapp-web',
        label: 'Frontend',
      },
      {
        type: 'github',
        url: 'https://github.com/SiddharthShringi/worknotesapp-api',
        label: 'Backend',
      },
    ],
  },
];

export default projects;
