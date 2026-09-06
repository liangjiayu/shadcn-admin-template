import { Monitor, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store/global-store';
import { cn } from '@/utils';

const options = [
  { mode: ThemeMode.System, label: '跟随系统', icon: Monitor },
  { mode: ThemeMode.Light, label: '浅色模式', icon: Sun },
  { mode: ThemeMode.Dark, label: '深色模式', icon: Moon },
];

export function ThemeToggle() {
  const themeMode = useGlobalStore((state) => state.themeMode);
  const setThemeMode = useGlobalStore((state) => state.setThemeMode);

  return (
    <div role="group" aria-label="主题模式" className="inline-flex gap-1 rounded-lg bg-muted p-1">
      {options.map(({ mode, label, icon: Icon }) => (
        <Button
          key={mode}
          variant="ghost"
          size="icon"
          aria-label={label}
          title={label}
          aria-pressed={themeMode === mode}
          onClick={() => setThemeMode(mode)}
          className={cn(
            'size-7 rounded-md text-muted-foreground',
            themeMode === mode && 'bg-background text-foreground shadow-sm hover:bg-background',
          )}
        >
          <Icon className="size-4" />
        </Button>
      ))}
    </div>
  );
}
