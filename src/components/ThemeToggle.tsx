import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Circle } from "lucide-react"

type ColorScheme = 'light' | 'dark-black' | 'dark-gray' | 'dark-gray-blue';

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ColorScheme>('light');

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as ColorScheme | null;
    setTheme(storedTheme || 'light');
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      root.classList.remove('light', 'dark-black', 'dark-gray', 'dark-gray-blue');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  const colorSchemeIcons = {
    'light': <Sun className="h-[1.2rem] w-[1.2rem]" />,
    'dark-black': <Moon className="h-[1.2rem] w-[1.2rem]" />,
    'dark-gray': <Circle className="h-[1.2rem] w-[1.2rem]" />,
    'dark-gray-blue': <Circle className="h-[1.2rem] w-[1.2rem] text-blue-400" />
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {colorSchemeIcons[theme]}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark-black')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark Black</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark-gray')}>
          <Circle className="mr-2 h-4 w-4" />
          <span>Dark Gray</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark-gray-blue')}>
          <Circle className="mr-2 h-4 w-4 text-blue-400" />
          <span>Dark Gray Blue</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;