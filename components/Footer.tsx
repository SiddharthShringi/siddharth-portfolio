import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, GmailIcon } from './icons/SocialIcon';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="py-4 sm:py-0">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground min-h-16">
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
              className="hover:text-foreground"
            >
              <GitHubIcon className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/siddharthshringi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              <LinkedInIcon className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
            </Link>

            <Link
              href="mailto:siddharthshringi@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              <GmailIcon className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:text-foreground" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
