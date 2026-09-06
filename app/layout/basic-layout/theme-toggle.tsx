import { Monitor, Moon, Sun } from 'lucide-react';

import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store/global-store';

const options = [
  { mode: ThemeMode.System, label: '跟随系统', icon: Monitor },
  { mode: ThemeMode.Light, label: '浅色模式', icon: Sun },
  { mode: ThemeMode.Dark, label: '深色模式', icon: Moon },
];

export function ThemeToggle() {
  const themeMode = useGlobalStore((state) => state.themeMode);
  const setThemeMode = useGlobalStore((state) => state.setThemeMode);

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Sun />
        主题模式
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuRadioGroup
          value={themeMode}
          onValueChange={(value) => {
            const option = options.find((item) => item.mode === value);
            if (option) setThemeMode(option.mode);
          }}
        >
          {options.map(({ mode, label, icon: Icon }) => (
            <DropdownMenuRadioItem key={mode} value={mode} closeOnClick={false}>
              <Icon />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}
