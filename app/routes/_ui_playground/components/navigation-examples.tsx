import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ExampleCard } from './example-card';

export function NavigationExamples() {
  const [expanded, setExpanded] = useState(false);
  const [menuAction, setMenuAction] = useState('尚未执行操作');
  const [page, setPage] = useState(1);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard
        component="accordion"
        title="Accordion · 手风琴"
        description="点击标题展开或收起对应的内容。"
      >
        <Accordion defaultValue={['usage']}>
          <AccordionItem value="usage">
            <AccordionTrigger>如何使用演示页？</AccordionTrigger>
            <AccordionContent>
              通过顶部分类浏览组件，每个卡片提供一个可操作的基础用例。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="storage">
            <AccordionTrigger>数据会被保存吗？</AccordionTrigger>
            <AccordionContent>演示仅使用本地状态，刷新页面后恢复初始值。</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ExampleCard>
      <ExampleCard
        component="collapsible"
        title="Collapsible · 折叠内容"
        description="通过单个按钮控制补充内容的显示。"
      >
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <CollapsibleTrigger render={<Button variant="outline" />}>
            {expanded ? '收起更新记录' : '展开更新记录'}
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <p>新增组件演示页，支持分类切换和交互体验。</p>
          </CollapsibleContent>
        </Collapsible>
      </ExampleCard>
      <ExampleCard
        component="breadcrumb"
        title="Breadcrumb · 面包屑"
        description="展示当前内容的位置，链接定位到本页区域。"
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#playground-title">组件演示</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#example-breadcrumb">导航</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>面包屑</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ExampleCard>
      <ExampleCard
        component="menubar"
        title="Menubar · 菜单栏"
        description="打开菜单并选择操作，支持键盘导航。"
      >
        <Menubar aria-label="文档操作">
          <MenubarMenu>
            <MenubarTrigger>文件</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setMenuAction('已新建示例文档')}>新建文档</MenubarItem>
              <MenubarItem onClick={() => setMenuAction('已保存示例文档')}>保存文档</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>编辑</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setMenuAction('已撤销示例操作')}>撤销</MenubarItem>
              <MenubarItem disabled>重做</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <p role="status">{menuAction}</p>
      </ExampleCard>
      <ExampleCard
        component="navigation-menu"
        title="NavigationMenu · 导航菜单"
        description="展开导航面板，跳转到本分类中的用例。"
      >
        <NavigationMenu aria-label="用例快捷导航">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>浏览用例</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-52 gap-1">
                  <NavigationMenuLink href="#example-accordion">手风琴</NavigationMenuLink>
                  <NavigationMenuLink href="#example-tabs">页签</NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ExampleCard>
      <ExampleCard
        component="pagination"
        title="Pagination · 分页"
        description="切换页码查看对应的示例记录。"
      >
        <ul className="space-y-2">
          {Array.from({ length: 3 }, (_, index) => (
            <li key={index} className="rounded-md bg-muted/50 p-2">
              示例记录 {(page - 1) * 3 + index + 1}
            </li>
          ))}
        </ul>
        <Pagination aria-label="示例记录分页">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#example-pagination"
                text="上一页"
                aria-label="上一页"
                aria-disabled={page === 1}
                tabIndex={page === 1 ? -1 : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(Math.max(1, page - 1));
                }}
              />
            </PaginationItem>
            {[1, 2, 3].map((value) => (
              <PaginationItem key={value}>
                <PaginationLink
                  href="#example-pagination"
                  aria-label={`第 ${value} 页`}
                  isActive={page === value}
                  onClick={(event) => {
                    event.preventDefault();
                    setPage(value);
                  }}
                >
                  {value}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#example-pagination"
                text="下一页"
                aria-label="下一页"
                aria-disabled={page === 3}
                tabIndex={page === 3 ? -1 : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  setPage(Math.min(3, page + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <p role="status">第 {page} 页，共 3 页</p>
      </ExampleCard>
      <ExampleCard
        component="tabs"
        title="Tabs · 页签"
        description="切换页签查看不同内容，支持方向键操作。"
        wide
      >
        <Tabs defaultValue="overview">
          <TabsList aria-label="项目详情">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="members">成员</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4">
            项目进行中，已完成 12 项任务。
          </TabsContent>
          <TabsContent value="members" className="pt-4">
            张三 · 产品设计，李四 · 前端开发。
          </TabsContent>
        </Tabs>
      </ExampleCard>
    </div>
  );
}
