'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

interface NavItem {
  name: string;
  href: string;
}

interface DesktopNavLinksProps {
  items: NavItem[];
}

export default function DesktopNavLinks({ items }: DesktopNavLinksProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-8">
      {items.map((item) => {
        const isActive =
          pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`));

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className="group relative rounded-sm py-2 text-xs font-medium tracking-widest transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 lg:text-sm"
          >
            <span
              className={
                isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
              }
            >
              {item.name}
            </span>

            {isActive && (
              <motion.span
                layoutId="navbar-indicator"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-chart-2"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
