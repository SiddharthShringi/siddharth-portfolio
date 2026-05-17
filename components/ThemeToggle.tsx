'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, SunMedium } from 'lucide-react';
import { Switch } from './ui/switch';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2 px-2">
      <SunMedium
        className={`h-4.5 w-4.5 transition-colors font-bold ${
          resolvedTheme === 'light' ? 'text-chart-2' : 'text-muted-foreground'
        }`}
      />
      <Switch
        checked={resolvedTheme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
      <Moon
        className={`h-4.5 w-4.5 transition-colors ${
          resolvedTheme === 'dark' ? 'text-chart-2' : 'text-muted-foreground'
        }`}
      />
    </div>
  );
}
