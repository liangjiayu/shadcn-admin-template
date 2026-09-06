import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useGlobalStore } from '@/store';
import { cn } from '@/utils';

import { ThemeToggle } from './theme-toggle';

export function UserMenu({ collapsed = false }: { collapsed?: boolean }) {
  const user = useGlobalStore((state) => state.currentUser);
  const navigate = useNavigate();
  const name = user?.name?.trim() || '用户';
  const avatar = (
    <Avatar className="size-8 shrink-0">
      <AvatarImage src={user?.avatar || undefined} alt="" />
      <AvatarFallback className="bg-foreground text-background">
        {Array.from(name)[0]}
      </AvatarFallback>
    </Avatar>
  );

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            className={cn(
              'h-14 w-full justify-start gap-3 rounded-xl px-2 hover:bg-[#e7e7e7] data-popup-open:bg-[#e7e7e7] dark:hover:bg-accent dark:data-popup-open:bg-accent',
              collapsed && 'h-10 justify-center px-0',
            )}
            aria-label="用户菜单"
          />
        }
      >
        {avatar}
        {!collapsed && (
          <div className="grid min-w-0 flex-1 gap-0.5 text-left text-sm leading-tight">
            <span className="truncate font-medium">{name}</span>
            {user?.email && (
              <span className="truncate text-xs font-normal text-muted-foreground">
                {user.email}
              </span>
            )}
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent
        side={collapsed ? 'right' : 'top'}
        align={collapsed ? 'end' : 'start'}
        sideOffset={8}
        className="max-h-(--available-height) w-60 max-w-[calc(100vw-1rem)] gap-0 overflow-y-auto rounded-xl border border-border p-1 shadow-md ring-0"
        aria-describedby={undefined}
      >
        <PopoverTitle className="sr-only">用户菜单</PopoverTitle>
        <div className="flex min-w-0 items-center gap-2 p-2">
          {avatar}
          <div className="grid min-w-0 flex-1 gap-0.5">
            <span className="truncate text-sm font-medium">{name}</span>
            {user?.email && (
              <span className="truncate text-xs text-muted-foreground" title={user.email}>
                {user.email}
              </span>
            )}
          </div>
        </div>
        <Separator />
        <div className="p-2">
          <ThemeToggle />
        </div>
        <Separator />
        <Button
          variant="ghost"
          className="my-1 h-8 w-full justify-start gap-2 rounded-lg px-2 font-normal"
          onClick={() => navigate('/login', { replace: true })}
        >
          <LogOut className="size-4" />
          退出登录
        </Button>
      </PopoverContent>
    </Popover>
  );
}
