import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store/global-store';

export function ThemeToggle() {
  const themeMode = useGlobalStore((state) => state.themeMode);
  const setThemeMode = useGlobalStore((state) => state.setThemeMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', themeMode === ThemeMode.Dark);
  }, [themeMode]);

  const isDark = themeMode === ThemeMode.Dark;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
      onClick={() => setThemeMode(isDark ? ThemeMode.Light : ThemeMode.Dark)}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
