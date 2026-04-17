import { ChevronRightIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import type { SideMenuItem } from '@config/side-menu-config';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';

export function NavMain({ items }: { items: SideMenuItem[] }) {
  const { pathname } = useLocation();
  const { state, isMobile } = useSidebar();
  const isIconCollapsed = state === 'collapsed' && !isMobile;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>导航菜单</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));

          if (item.children?.length) {
            if (isIconCollapsed) {
              return (
                <SidebarMenuItem key={item.path}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton isActive={isActive} className="cursor-pointer">
                        {Icon && <Icon />}
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start" className="min-w-40">
                      <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.path} asChild>
                          <Link to={child.path}>{child.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              );
            }

            return (
              <Collapsible
                key={item.path}
                asChild
                defaultOpen={isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.name}>
                      {Icon && <Icon />}
                      <span>{item.name}</span>
                      <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.path}>
                          <SidebarMenuSubButton asChild isActive={pathname === child.path}>
                            <Link to={child.path}>
                              <span>{child.name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          return (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild tooltip={item.name} isActive={isActive}>
                <Link to={item.path}>
                  {Icon && <Icon />}
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
