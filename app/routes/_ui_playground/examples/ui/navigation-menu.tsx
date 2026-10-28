import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export function BasicExample() {
  return (
    <div id="example-navigation-menu" className="space-y-4">
      <NavigationMenu aria-label="用例快捷导航">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>浏览用例</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-52 gap-1">
                <NavigationMenuLink href="/_ui_playground/ui/accordion">手风琴</NavigationMenuLink>
                <NavigationMenuLink href="/_ui_playground/ui/tabs">页签</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
