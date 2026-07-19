import { ChevronRightIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';

import type { SideMenuItem } from './side-menu-config';

export function NavMain({ items }: { items: SideMenuItem[] }) {
  const { pathname } = useLocation();
  const { state, isMobile } = useSidebar();
  const isIconCollapsed = state === 'collapsed' && !isMobile;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.path || (item.path !== '/' && pathname.startsWith(`${item.path}/`));

          if (item.children?.length) {
            if (isIconCollapsed) {
              return (
                <SidebarMenuItem key={item.path}>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <SidebarMenuButton isActive={isActive} className="cursor-pointer">
                          {Icon && <Icon />}
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      }
                    />
                    <DropdownMenuContent side="right" align="start" className="min-w-40">
                      <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.path} render={<Link to={child.path} />}>
                          {child.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              );
            }

            return (
              <Collapsible key={item.path} defaultOpen={isActive}>
                <SidebarMenuItem className="group/collapsible">
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton tooltip={item.name}>
                        {Icon && <Icon />}
                        <span>{item.name}</span>
                        <ChevronRightIcon className="ml-auto transition-transform duration-200 group-has-data-panel-open/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    }
                  />
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.path}>
                          <SidebarMenuSubButton
                            render={<Link to={child.path} />}
                            isActive={pathname === child.path}
                          >
                            <span>{child.name}</span>
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
              <SidebarMenuButton
                render={<Link to={item.path} />}
                tooltip={item.name}
                isActive={isActive}
              >
                {Icon && <Icon />}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
