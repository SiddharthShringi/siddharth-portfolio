'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-4 w-4 transition-colors ${
          resolvedTheme === 'light' ? 'text-amber-600' : 'text-muted-foreground'
        }`}
      />
      <Switch
        checked={resolvedTheme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
      <Moon
        className={`h-4 w-4 transition-colors ${
          resolvedTheme === 'dark' ? 'text-blue-500' : 'text-muted-foreground'
        }`}
      />
    </div>
  );
}
