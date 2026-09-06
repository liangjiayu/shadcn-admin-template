import { PanelLeft } from 'lucide-react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
import { SITE_APP_TITLE } from '@/constants';
import { cn } from '@/utils';

import { Navigation } from './navigation';
import { UserMenu } from './user-menu';

function SidebarHeading({
  collapsed = false,
  onToggle,
}: {
  collapsed?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div
      className={cn(
        'flex h-14 min-w-0 shrink-0 items-center gap-2 px-3',
        collapsed && 'justify-center px-0',
      )}
    >
      {!collapsed && (
        <Link
          to="/"
          title={SITE_APP_TITLE}
          className="min-w-0 flex-1 truncate rounded-sm font-serif text-xl leading-tight font-medium tracking-tight text-foreground transition-opacity outline-none hover:opacity-75 focus-visible:ring-2 focus-visible:ring-ring"
        >
          {SITE_APP_TITLE}
        </Link>
      )}
      {onToggle && (
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 rounded-md text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
          onClick={onToggle}
          aria-label={collapsed ? '展开侧栏' : '折叠侧栏'}
          aria-expanded={!collapsed}
          aria-controls="desktop-navigation"
        >
          <PanelLeft className="size-[18px]" strokeWidth={1.5} />
        </Button>
      )}
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
        'sticky top-0 flex h-dvh shrink-0 flex-col border-r border-black/5 bg-[#f0f0f0] transition-[width] duration-200 motion-reduce:transition-none dark:border-white/5 dark:bg-[#202020]',
        collapsed ? 'w-12' : 'w-64',
      )}
    >
      <SidebarHeading collapsed={collapsed} onToggle={onToggle} />
      <div className={cn('min-h-0 flex-1 overflow-y-auto px-2', collapsed && 'px-1')}>
        <Navigation collapsed={collapsed} />
      </div>
      <div className={cn('shrink-0 p-2', collapsed && 'px-1')}>
        <UserMenu collapsed={collapsed} />
      </div>
    </aside>
  );
}
