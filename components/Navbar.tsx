'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as motion from 'motion/react-client';

import { navItems } from '@/lib/constant';
import Container from '@/components/ui/Container';
import ThemeToggle from './ThemeToggle';
import MobileNavbar from './MobileNavbar';
import DesktopNavLinks from './DesktopNavLinks';

export default function Navbar() {
  const pathname = usePathname();

  const activeHref =
    navItems.find(
      (item) =>
        pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
    )?.href ?? null;

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            className="relative inline-block shrink-0"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link
              href="/"
              className="text-lg font-jet-brains-mono font-bold text-foreground sm:text-xl"
            >
              siddharth<span className="font-bold text-chart-2">.</span>
            </Link>

            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-chart-3 dark:bg-chart-2"
              variants={{
                rest: { width: 0 },
                hover: { width: '100%' },
              }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <DesktopNavLinks items={navItems} activeHref={activeHref} />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <MobileNavbar items={navItems} activeHref={activeHref} />
        </div>
      </Container>
    </nav>
  );
}
