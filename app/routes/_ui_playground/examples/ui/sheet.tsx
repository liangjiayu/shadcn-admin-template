import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

function SheetDemoExample() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>打开</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>编辑个人资料</SheetTitle>
          <SheetDescription>在此修改个人资料，完成后点击保存。</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-sheet-demo-name">姓名</Label>
            <Input id="sheet-demo-sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-sheet-demo-username">用户名</Label>
            <Input id="sheet-demo-sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">保存更改</Button>
          <SheetClose render={<Button variant="outline" />}>关闭</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const SHEET_SIDESSide = ['top', 'right', 'bottom', 'left'] as const;
function SheetSideExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDESSide.map((side) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" className="capitalize" />}>
            {side}
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>编辑个人资料</SheetTitle>
              <SheetDescription>在此修改个人资料，完成后点击保存。</SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="mb-2 leading-relaxed">
                  这是一段用于展示滚动效果的示例文字。内容较长时，可以在面板内滚动阅读；标题和操作区的布局由对应示例决定。重复的段落用于模拟真实内容的长度，便于观察滚动区域、边界和留白。
                </div>
              ))}
            </div>
            <SheetFooter>
              <Button type="submit">保存更改</Button>
              <SheetClose render={<Button variant="outline" />}>取消</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

function SheetNoCloseButtonExample() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>打开侧边面板</SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>隐藏关闭按钮</SheetTitle>
          <SheetDescription>
            此侧边面板隐藏了右上角关闭按钮，点击面板外部即可关闭。
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default function SheetExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <SheetDemoExample />
      </ExampleCard>
      <ExampleCard id="side" title="方向">
        <SheetSideExample />
      </ExampleCard>
      <ExampleCard id="no-close-button" title="隐藏关闭按钮">
        <SheetNoCloseButtonExample />
      </ExampleCard>
    </div>
  );
}
