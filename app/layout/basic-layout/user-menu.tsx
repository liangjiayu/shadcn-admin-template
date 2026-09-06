import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
    <DropdownMenu>
      <DropdownMenuTrigger
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
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={collapsed ? 'right' : 'top'}
        align={collapsed ? 'end' : 'start'}
        sideOffset={8}
        className="w-60"
        aria-label="用户菜单"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="flex min-w-0 items-center gap-2">
              {avatar}
              <div className="grid min-w-0 flex-1 gap-0.5">
                <span className="truncate text-sm font-medium text-foreground">{name}</span>
                {user?.email && (
                  <span className="truncate text-xs text-muted-foreground" title={user.email}>
                    {user.email}
                  </span>
                )}
              </div>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <ThemeToggle />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/login', { replace: true })}>
          <LogOut className="size-4" />
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
