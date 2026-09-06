import { useEffect } from 'react';

import { ThemeMode } from '@/constants';
import { useGlobalStore } from '@/store/global-store';

/** Apply the saved preference independently of the theme picker lifecycle. */
export function useTheme() {
  const themeMode = useGlobalStore((state) => state.themeMode);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const dark =
        themeMode === ThemeMode.Dark || (themeMode === ThemeMode.System && media.matches);
      document.documentElement.classList.toggle('dark', dark);
      document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    };
    applyTheme();
    if (themeMode !== ThemeMode.System) return;
    media.addEventListener('change', applyTheme);
    return () => media.removeEventListener('change', applyTheme);
  }, [themeMode]);
}
