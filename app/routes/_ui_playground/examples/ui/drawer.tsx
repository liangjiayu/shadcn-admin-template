import { Button } from '@/components/ui/button';
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

export function BasicExample() {
  return (
    <div id="example-drawer" className="space-y-4">
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
    </div>
  );
}

export function DirectionsExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {(['up', 'right', 'down', 'left'] as const).map((side) => (
        <Drawer key={side} swipeDirection={side} showSwipeHandle>
          <DrawerTrigger render={<Button variant="outline" />}>{side}</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{side} 面板</DrawerTitle>
              <DrawerDescription>使用关闭按钮返回演示。</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">面板内容</div>
            <DrawerFooter>
              <DrawerClose render={<Button />}>关闭</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
