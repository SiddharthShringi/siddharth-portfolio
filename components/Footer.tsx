import Link from 'next/link';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 xl:px-1 py-4 sm:py-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground h-16">
        {/* Left side */}
        <p>
          <b>&copy;</b> {new Date().getFullYear()} Siddharth Shringi
        </p>

        {/* Right side */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link
            href="https://github.com/SiddharthShringi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground cursor-pointer"
          >
            <FaGithub className="text-2xl transition-transform duration-300 hover:scale-125" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/siddharthshringi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl transition-transform duration-300 hover:scale-125 hover:text-foreground cursor-pointer" />
          </Link>
          <Link
            href="mailto:siddharthshringi@gmail.com"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <SiGmail className="text-2xl transition-transform duration-300 hover:scale-125 hover:text-foreground cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
