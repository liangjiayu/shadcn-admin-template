import { useState } from 'react';
import { Outlet } from 'react-router';

import { useTitleUpdater } from '@/hooks';

import { LayoutSidebar } from './layout-sidebar';

export default function BasicLayout() {
  useTitleUpdater();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <LayoutSidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex min-w-0 flex-1 flex-col p-4 md:p-8 lg:p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
