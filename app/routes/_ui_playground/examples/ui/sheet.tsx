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

export function BasicExample() {
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

export function DirectionsExample() {
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
