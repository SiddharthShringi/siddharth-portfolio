import React from 'react';
import Link from 'next/link';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex space-x-6 justify-center sm:justify-start">
      <Link href="https://github.com/SiddharthShringi" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl transition-transform duration-300 hover:scale-125" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/siddharthshringi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-2xl transition-transform duration-300 hover:scale-125" />
      </Link>
      <Link
        href="mailto:siddharthshringi@gmail.com"
        className="hover:text-foreground transition-colors flex items-center gap-1"
      >
        <SiGmail className="text-2xl transition-transform duration-300 hover:scale-125 hover:text-foreground cursor-pointer" />
      </Link>
    </div>
  );
}
