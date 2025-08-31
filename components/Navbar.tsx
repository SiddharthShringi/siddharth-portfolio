import React from "react";
import { navItems } from "@/lib/constant";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold text-foreground">SS</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <Link
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-color duration-200"
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
