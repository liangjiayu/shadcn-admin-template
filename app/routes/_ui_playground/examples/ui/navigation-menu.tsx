import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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
          <NavigationMenuItem>
            <NavigationMenuLink href="/_ui_playground/ui/button">按钮示例</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default function NavigationMenuExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="展开导航面板，跳转到其他组件的演示页面。"
      >
        <BasicExample />
      </ExampleCard>
    </div>
  );
}
