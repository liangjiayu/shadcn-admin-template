import { cn } from 'cn';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import navigationItems, { type NavigationItem } from './navigation-config';

const itemClass =
  'flex min-h-8 w-full min-w-0 items-center gap-2 rounded-[10px] px-2 text-sm text-foreground outline-none hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-ring';
const activeClass = 'bg-sidebar-accent font-medium hover:bg-sidebar-accent text-accent-foreground';

function matchesPath(pathname: string, path: string): boolean {
  return pathname === path || (path !== '/' && pathname.startsWith(`${path}/`));
}

type NavigationProps = { collapsed?: boolean };

function NavigationEntry({ item, collapsed = false }: NavigationProps & { item: NavigationItem }) {
  const { pathname } = useLocation();
  const active = matchesPath(pathname, item.path);
  const [open, setOpen] = useState(active);
  const Icon = item.icon;
  const classes = cn(
    itemClass,
    active && !item.children?.length && activeClass,
    collapsed && 'justify-center px-0',
  );
  const content = (
    <>
      {Icon && <Icon className="size-[18px] shrink-0" />}
      <span className={collapsed ? 'sr-only' : 'truncate'}>{item.name}</span>
    </>
  );

  useEffect(() => {
    if (active) setOpen(true);
  }, [active, pathname]);

  if (item.children?.length) {
    if (collapsed) {
      return (
        <DropdownMenu>
          <Tooltip>
            <TooltipTrigger
              render={
                <DropdownMenuTrigger
                  render={<button type="button" className={classes} aria-label={item.name} />}
                />
              }
            >
              {content}
            </TooltipTrigger>
            <TooltipContent side="right">{item.name}</TooltipContent>
          </Tooltip>
          <DropdownMenuContent side="right" align="start" className="min-w-40">
            <DropdownMenuGroup>
              <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
              {item.children.map((child) => (
                <DropdownMenuItem
                  key={child.path}
                  render={
                    <Link
                      to={child.path}
                      aria-current={matchesPath(pathname, child.path) ? 'page' : undefined}
                    />
                  }
                  className={cn(matchesPath(pathname, child.path) && activeClass)}
                >
                  {child.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className={classes}>
          {content}
          <ChevronRight
            className={cn(
              'ml-auto size-4 shrink-0 transition-transform motion-reduce:transition-none',
              open && 'rotate-90',
            )}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="mt-0.5 ml-3 space-y-0.5 border-l pl-1">
            {item.children.map((child) => (
              <li key={child.path}>
                <NavigationEntry item={child} />
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  const link = (
    <Link to={item.path} aria-current={active ? 'page' : undefined} className={classes}>
      {content}
    </Link>
  );
  return collapsed ? (
    <Tooltip>
      <TooltipTrigger render={link} />
      <TooltipContent side="right">{item.name}</TooltipContent>
    </Tooltip>
  ) : (
    link
  );
}

export function Navigation({ collapsed = false }: NavigationProps) {
  return (
    <nav aria-label="主导航">
      <ul className="space-y-0.5">
        {navigationItems.map((item) => (
          <li key={item.path}>
            <NavigationEntry item={item} collapsed={collapsed} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
