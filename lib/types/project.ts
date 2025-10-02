export type ProjectLink = {
  type: 'live' | 'github' | 'demo' | 'case-study';
  label: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
};
