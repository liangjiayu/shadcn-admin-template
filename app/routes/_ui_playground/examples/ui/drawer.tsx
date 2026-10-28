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
