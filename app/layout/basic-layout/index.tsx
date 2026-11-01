import { useState } from 'react';
import { Outlet } from 'react-router';

import { LayoutSidebar } from './layout-sidebar';

export default function BasicLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <LayoutSidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
      <main className="flex min-w-0 flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}
