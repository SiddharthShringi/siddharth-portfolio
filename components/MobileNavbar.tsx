'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from './ui/button';
import ThemeToggle from './ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavbarProps {
  items: NavItem[];
  activeHref: string | null;
}

export default function MobileNavbar({ items, activeHref }: MobileNavbarProps) {
  return (
    <div className="flex items-center gap-2 md:hidden">
      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open navigation menu"
            className="rounded-lg"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          side="bottom"
          sideOffset={8}
          className="w-56 rounded-xl border bg-popover p-2 shadow-lg"
        >
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <DropdownMenuItem
                key={item.href}
                asChild
                className={cn(
                  'min-h-11 cursor-pointer rounded-lg px-3',
                  'text-[15px] font-medium tracking-tight',
                  'transition-colors duration-150',
                  'focus:bg-accent',
                  isActive
                    ? 'text-chart-2 focus:text-chart-2'
                    : 'text-muted-foreground hover:text-foreground focus:text-foreground'
                )}
              >
                <Link href={item.href} aria-current={isActive ? 'page' : undefined}>
                  {item.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
