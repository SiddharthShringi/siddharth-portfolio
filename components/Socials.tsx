import React from 'react';
import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './icons/SocialIcon';

export default function Socials() {
  return (
    <div className="flex space-x-6 justify-center sm:justify-start">
      <Link href="https://github.com/SiddharthShringi" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="w-6 h-6 transition-transform duration-300 hover:scale-125 cursor-pointer" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/siddharthshringi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className="w-6 h-6 transition-transform duration-300 hover:scale-125 cursor-pointer" />
      </Link>
      <Link
        href="mailto:siddharthshringi@gmail.com"
        className="hover:text-foreground transition-colors flex items-center gap-1"
      >
        <GmailIcon className="w-6 h-6 transition-transform duration-300 hover:scale-125 cursor-pointer" />
      </Link>
    </div>
  );
}
