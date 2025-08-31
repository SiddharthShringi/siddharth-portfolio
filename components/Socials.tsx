import React from 'react';
import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

export default function Socials() {
  return (
    <div className="flex space-x-4 justify-center sm:justify-start">
      <Link
        href="https://github.com/SiddharthShringi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="transition-transform duration-300 hover:scale-125" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/siddharthshringi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="transition-transform duration-300 hover:scale-125" />
      </Link>
    </div>
  );
}
