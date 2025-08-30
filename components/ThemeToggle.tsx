'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
  return (
    <div className='flex items-center space-x-2'>
        <Sun className={`h-4 w-4 transition-colors ${
            theme === "light" ? "text-yellow-500" : "text-muted-foreground"}`}
        />
        <Switch checked={theme === "dark"} onCheckedChange={(checked) => setTheme(
            checked ? "dark" : "light"
        )} />
        <Moon className={`h-4 w-4 transition-colors ${theme === "dark" ? "text-blue-500" : ""}`}/>
    </div>
  )
}
