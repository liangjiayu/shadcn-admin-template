import { CircleAlertIcon, CircleCheckIcon, CircleDashedIcon } from 'lucide-react';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { ExampleCard } from '../../components/example-card';

const componentsDemo: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: '确认对话框',
    href: '/_ui_playground/ui/alert-dialog',
    description: '使用重要内容提示用户，并等待用户明确回应的模态对话框。',
  },
  {
    title: '悬浮卡片',
    href: '/_ui_playground/ui/hover-card',
    description: '预览链接中的补充内容。',
  },
  {
    title: '进度条',
    href: '/_ui_playground/ui/progress',
    description: '通过进度条等指示器展示任务完成进度。',
  },
  {
    title: '滚动区域',
    href: '/_ui_playground/ui/scroll-area',
    description: '在视觉或语义上分隔内容。',
  },
  {
    title: '页签',
    href: '/_ui_playground/ui/tabs',
    description: '使用页签将内容分组，每次显示一个面板。',
  },
  {
    title: '文字提示',
    href: '/_ui_playground/ui/tooltip',
    description: '元素获得键盘焦点或鼠标悬停时，显示相关信息的浮层。',
  },
];
function NavigationMenuDemoExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>开始使用</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItemDemo href="/_ui_playground" title="介绍">
                使用 Tailwind CSS 构建的可复用组件。
              </ListItemDemo>
              <ListItemDemo href="https://ui.shadcn.com/docs/installation" title="安装">
                了解如何安装依赖并组织应用结构。
              </ListItemDemo>
              <ListItemDemo href="https://ui.shadcn.com/docs/primitives/typography" title="排版">
                标题、段落和列表等内容的排版样式。
              </ListItemDemo>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex">
          <NavigationMenuTrigger>组件</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] grid-cols-2 gap-2">
              {componentsDemo.map((component) => (
                <ListItemDemo key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItemDemo>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>带图标</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink render={<a href="#" className="flex-row items-center gap-2" />}>
                  <CircleAlertIcon />
                  待处理
                </NavigationMenuLink>
                <NavigationMenuLink render={<a href="#" className="flex-row items-center gap-2" />}>
                  <CircleDashedIcon />
                  待办
                </NavigationMenuLink>
                <NavigationMenuLink render={<a href="#" className="flex-row items-center gap-2" />}>
                  <CircleCheckIcon />
                  已完成
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<a href="/_ui_playground" />}
            className={navigationMenuTriggerStyle()}
          >
            文档
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
function ListItemDemo({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & {
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<a href={href} />}>
        <div className="flex flex-col gap-1 text-sm">
          <div className="leading-none font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  );
}

function NavigationMenuLinkComponentExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<a href="/_ui_playground" />}
            className={navigationMenuTriggerStyle()}
          >
            文档
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function NavigationMenuExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <NavigationMenuDemoExample />
      </ExampleCard>
      <ExampleCard id="link-component" title="链接组件">
        <NavigationMenuLinkComponentExample />
      </ExampleCard>
    </div>
  );
}
