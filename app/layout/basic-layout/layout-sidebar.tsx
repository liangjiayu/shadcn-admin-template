import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SITE_APP_TITLE, SITE_LOGO_URL } from '@/constants';
import { cn } from '@/utils';

import { Navigation } from './navigation';
import { ThemeToggle } from './theme-toggle';
import { UserMenu } from './user-menu';

function Brand({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      aria-label={SITE_APP_TITLE}
      className={cn(
        'flex h-14 min-w-0 shrink-0 items-center gap-2 px-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
        collapsed && 'justify-center px-0',
      )}
    >
      <img src={SITE_LOGO_URL} alt="" className="size-8 shrink-0" />
      {!collapsed && <span className="truncate text-sm font-semibold">{SITE_APP_TITLE}</span>}
    </Link>
  );
}

function SidebarFooter({
  collapsed = false,
  onToggle,
  mobile = false,
}: {
  collapsed?: boolean;
  onToggle?: () => void;
  mobile?: boolean;
}) {
  return (
    <div className="shrink-0 space-y-2 p-2">
      <div className={cn('flex items-center justify-between', collapsed && 'flex-col gap-2')}>
        <ThemeToggle />
        {onToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            aria-label={collapsed ? '展开侧栏' : '折叠侧栏'}
            aria-expanded={!collapsed}
            aria-controls="desktop-navigation"
          >
            {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
          </Button>
        )}
      </div>
      <UserMenu collapsed={collapsed} mobile={mobile} />
    </div>
  );
}

export function LayoutSidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <aside
      id="desktop-navigation"
      aria-label="侧栏"
      className={cn(
        'sticky top-0 hidden h-dvh shrink-0 flex-col border-r bg-[oklch(0.985_0_0)] transition-[width] duration-200 motion-reduce:transition-none md:flex dark:bg-[oklch(0.205_0_0)]',
        collapsed ? 'w-12' : 'w-64',
      )}
    >
      <Brand collapsed={collapsed} />
      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <Navigation collapsed={collapsed} />
      </div>
      <SidebarFooter collapsed={collapsed} onToggle={onToggle} />
    </aside>
  );
}

export function MobileNavigation({ onNavigate }: { onNavigate: () => void }) {
  return (
    <SheetContent
      side="left"
      className="w-72 max-w-[calc(100vw-3rem)] gap-0 bg-[oklch(0.985_0_0)] p-0 dark:bg-[oklch(0.205_0_0)]"
      aria-describedby={undefined}
    >
      <SheetHeader className="sr-only">
        <SheetTitle>主导航</SheetTitle>
      </SheetHeader>
      <div className="pr-10">
        <Brand onNavigate={onNavigate} />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-2">
        <Navigation onNavigate={onNavigate} />
      </div>
      <SidebarFooter mobile />
    </SheetContent>
  );
}
