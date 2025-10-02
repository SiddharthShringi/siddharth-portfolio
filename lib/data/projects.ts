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
];

export default projects;
