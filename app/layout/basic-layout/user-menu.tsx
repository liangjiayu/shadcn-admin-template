import { ChevronsUpDown, LogOut } from 'lucide-react';
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

export function UserMenu({
  collapsed = false,
  mobile = false,
}: {
  collapsed?: boolean;
  mobile?: boolean;
}) {
  const user = useGlobalStore((state) => state.currentUser);
  const navigate = useNavigate();
  const name = user?.name?.trim() || '用户';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className={cn(
              'h-12 w-full justify-start gap-2 px-2 data-popup-open:bg-accent',
              collapsed && 'h-8 justify-center p-0',
            )}
            aria-label="用户菜单"
          />
        }
      >
        <Avatar className="size-8 shrink-0 rounded-lg">
          <AvatarImage src={user?.avatar || undefined} alt={name} />
          <AvatarFallback className="rounded-lg">{Array.from(name)[0]}</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <>
            <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{name}</span>
              {user?.email && <span className="truncate text-xs font-normal">{user.email}</span>}
            </div>
            <ChevronsUpDown className="ml-auto size-4 shrink-0" />
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={mobile ? 'top' : 'right'}
        align="end"
        className="w-56 max-w-[calc(100vw-2rem)]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="truncate text-sm font-medium text-foreground">{name}</div>
            {user?.email && <div className="truncate font-normal">{user.email}</div>}
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/login', { replace: true })}>
          <LogOut />
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
