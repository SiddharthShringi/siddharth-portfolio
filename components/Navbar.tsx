'use client';

import { navItems } from '@/lib/constant';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileNavbar from './MobileNavbar';
import * as motion from 'motion/react-client';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="container mx-auto max-w-7xl ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <motion.div
              className="inline-block relative cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <span className="text-lg sm:text-xl font-jet-brains-mono font-bold text-foreground">
                <Link href="/">
                  siddharth<span className="text-chart-2 font-bold">.</span>
                </Link>
              </span>
              <motion.div
                className="absolute left-0 -bottom-1 h-0.5 bg-chart-3 dark:bg-chart-2"
                variants={{
                  rest: { width: 0 },
                  hover: { width: '100%' },
                }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link
                className="text-xs lg:text-sm font-medium tracking-wider text-muted-foreground hover:text-foreground transition-color duration-200"
                href={item.href}
                key={idx}
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          {/* Mobile Navigation */}
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
