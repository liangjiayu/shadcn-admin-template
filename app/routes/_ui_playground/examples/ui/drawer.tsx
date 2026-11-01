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

import { ExampleCard } from '../../components/example-card';

function DrawerPositionExample() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger render={<Button variant="secondary" />}>打开左侧抽屉</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>活动目标</DrawerTitle>
          <DrawerDescription>设置您的每日活动目标。</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="size-full rounded-2xl bg-muted" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>关闭</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function DrawerSwipeHandleExample() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="secondary" />}>打开抽屉</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>抽屉</DrawerTitle>
          <DrawerDescription>带有拖动手柄的抽屉。</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button />}>关闭</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function DrawerExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="position" title="位置">
        <DrawerPositionExample />
      </ExampleCard>
      <ExampleCard id="swipe-handle" title="拖动手柄">
        <DrawerSwipeHandleExample />
      </ExampleCard>
    </div>
  );
}
