import { Button } from '@/components/ui/button';
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

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-sheet" className="space-y-4">
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
    </div>
  );
}

function DirectionsExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>{side}</SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>{side} 面板</SheetTitle>
              <SheetDescription>使用关闭按钮返回演示。</SheetDescription>
            </SheetHeader>
            <div className="p-4">面板内容</div>
            <SheetFooter>
              <SheetClose render={<Button />}>关闭</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

export default function SheetExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="从右侧打开补充信息面板。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="directions"
        title="方向对比"
        description="分别打开不同方向的面板，关闭后可继续体验其他方向。"
      >
        <DirectionsExample />
      </ExampleCard>
    </div>
  );
}
