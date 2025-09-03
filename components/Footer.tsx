import Link from 'next/link';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        {/* Left side */}
        <p>&copy; 2025 Siddharth Shringi. All rights reserved.</p>

        {/* Right side */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link
            href="https://github.com/SiddharthShringi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground cursor-pointer"
          >
            <Github className="transition-transform duration-300 hover:scale-125" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/siddharthshringi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="transition-transform duration-300 hover:scale-125 hover:text-foreground cursor-pointer" />
          </Link>
          <Link
            href="mailto:siddharthshringi@gmail.com"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Mail className="transition-transform duration-300 hover:scale-125 hover:text-foreground cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
