import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useTitleUpdater } from '@/hooks';

import { LayoutSidebar, MobileNavigation } from './layout-sidebar';

export default function BasicLayout() {
  useTitleUpdater();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (media.matches) setMobileOpen(false);
    };
    closeOnDesktop();
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <div className="flex min-h-dvh bg-background text-foreground">
        <LayoutSidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
        <div className="min-w-0 flex-1">
          <main className="min-w-0 p-4 md:p-8 lg:p-12">
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="mb-4 md:hidden"
                  aria-label="打开导航"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <Outlet />
          </main>
        </div>
        <MobileNavigation onNavigate={() => setMobileOpen(false)} />
      </div>
    </Sheet>
  );
}
