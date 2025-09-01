import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeToggle from './ThemeToggle';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/constant';
import Link from 'next/link';
import { Button } from './ui/button';

export default function MobileNavbar() {
  return (
    <div className="flex items-center space-x-2 md:hidden">
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-6 h-6 cursor-pointer hover:text-foreground transition-color duration-200" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, idx) => (
                <Link
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color duration-200"
                  href={item.href}
                  key={idx}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
