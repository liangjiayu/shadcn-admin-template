import { useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { DialogExample } from './dialog-example';
import { DropdownMenuExample } from './dropdown-menu-example';
import { ExampleCard } from './example-card';

export function OverlayExamples() {
  const [archived, setArchived] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [contextAction, setContextAction] = useState('尚未选择操作');

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <DialogExample />
      <ExampleCard
        component="alert-dialog"
        title="AlertDialog · 确认对话框"
        description="确认或取消需要用户明确选择的操作。"
      >
        <AlertDialog open={archiveOpen} onOpenChange={setArchiveOpen}>
          <AlertDialogTrigger render={<Button variant="outline" />}>
            归档示例项目
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>归档项目？</AlertDialogTitle>
              <AlertDialogDescription>确认后将标记当前示例项目为已归档。</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>取消</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setArchived(true);
                  setArchiveOpen(false);
                }}
              >
                确认归档
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <p role="status">项目状态：{archived ? '已归档' : '进行中'}</p>
        {archived && (
          <Button variant="ghost" onClick={() => setArchived(false)}>
            恢复项目
          </Button>
        )}
      </ExampleCard>
      <ExampleCard
        component="drawer"
        title="Drawer · 抽屉"
        description="从底部打开面板，可通过按钮或手势关闭。"
      >
        <Drawer showSwipeHandle>
          <DrawerTrigger render={<Button variant="outline" />}>打开底部抽屉</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>项目概览</DrawerTitle>
              <DrawerDescription>查看当前项目的简要信息。</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 py-6 text-sm">本周已完成 12 项任务，还有 3 项待处理。</div>
            <DrawerFooter>
              <DrawerClose render={<Button />}>完成</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ExampleCard>
      <ExampleCard
        component="sheet"
        title="Sheet · 侧边面板"
        description="从右侧打开补充信息面板。"
      >
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>打开侧边面板</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>项目详情</SheetTitle>
              <SheetDescription>在保留当前页面的同时查看详情。</SheetDescription>
            </SheetHeader>
            <div className="px-4 py-6 text-sm">
              负责人：张三
              <br />
              状态：进行中
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>关闭</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ExampleCard>
      <ExampleCard
        component="popover"
        title="Popover · 气泡面板"
        description="点击触发按钮展示补充内容。"
      >
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>查看统计</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>本周统计</PopoverTitle>
              <PopoverDescription>已完成 12 项任务，较上周增加 3 项。</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </ExampleCard>
      <ExampleCard
        component="tooltip"
        title="Tooltip · 文字提示"
        description="悬停或键盘聚焦按钮查看提示。"
      >
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>保存说明</TooltipTrigger>
          <TooltipContent>保存后会同步更新项目资料。</TooltipContent>
        </Tooltip>
      </ExampleCard>
      <ExampleCard
        component="hover-card"
        title="HoverCard · 悬浮卡片"
        description="悬停或聚焦查看成员的补充资料。"
      >
        <HoverCard>
          <HoverCardTrigger
            render={
              <a href="#example-hover-card" className="font-medium underline underline-offset-4" />
            }
          >
            查看张三的资料
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="font-medium">张三</p>
            <p className="mt-2 text-sm text-muted-foreground">
              产品设计师，负责团队的交互设计与视觉规范。
            </p>
          </HoverCardContent>
        </HoverCard>
      </ExampleCard>
      <ExampleCard
        component="context-menu"
        title="ContextMenu · 右键菜单"
        description="在虚线区域内右键，或聚焦后使用菜单键打开。"
      >
        <ContextMenu>
          <ContextMenuTrigger
            tabIndex={0}
            className="flex min-h-28 items-center justify-center rounded-lg border border-dashed p-4 text-muted-foreground"
          >
            在此处右键打开菜单
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={() => setContextAction('已打开文件')}>
              打开文件
            </ContextMenuItem>
            <ContextMenuItem onClick={() => setContextAction('已收藏文件')}>
              收藏文件
            </ContextMenuItem>
            <ContextMenuItem disabled>删除文件</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <p role="status">{contextAction}</p>
      </ExampleCard>
      <DropdownMenuExample />
    </div>
  );
}
