import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { ExampleCard } from '../../components/example-card';

function DialogDemoExample() {
  return (
    <Dialog>
      <form onSubmit={(event) => event.preventDefault()}>
        <DialogTrigger render={<Button variant="outline" />}>打开对话框</DialogTrigger>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>编辑个人资料</DialogTitle>
            <DialogDescription>在此修改个人资料，完成后点击保存。</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="dialog-demo-name-1">姓名</Label>
              <Input id="dialog-demo-name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="dialog-demo-username-1">用户名</Label>
              <Input id="dialog-demo-username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>取消</DialogClose>
            <Button type="submit">保存更改</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

function DialogCustomCloseButtonExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>共享</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>共享链接</DialogTitle>
          <DialogDescription>拥有此链接的任何人都可以查看内容。</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="dialog-custom-close-button-link" className="sr-only">
              链接
            </Label>
            <Input
              id="dialog-custom-close-button-link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="justify-start">
          <DialogClose render={<Button type="button" />}>关闭</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DialogNoCloseButtonExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>隐藏关闭按钮</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>隐藏关闭按钮</DialogTitle>
          <DialogDescription>此对话框隐藏了右上角的关闭按钮。</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function DialogStickyFooterExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>固定页脚</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>固定页脚</DialogTitle>
          <DialogDescription>正文滚动时，页脚操作始终保持可见。</DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="mb-4 leading-normal">
              这是一段用于展示滚动效果的示例文字。内容较长时，可以在面板内滚动阅读；标题和操作区的布局由对应示例决定。重复的段落用于模拟真实内容的长度，便于观察滚动区域、边界和留白。
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>关闭</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DialogScrollableContentExample() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>滚动内容</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>滚动内容</DialogTitle>
          <DialogDescription>此对话框的内容可以滚动。</DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="mb-4 leading-normal">
              这是一段用于展示滚动效果的示例文字。内容较长时，可以在面板内滚动阅读；标题和操作区的布局由对应示例决定。重复的段落用于模拟真实内容的长度，便于观察滚动区域、边界和留白。
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function DialogExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <DialogDemoExample />
      </ExampleCard>
      <ExampleCard id="custom-close-button" title="自定义关闭按钮">
        <DialogCustomCloseButtonExample />
      </ExampleCard>
      <ExampleCard id="no-close-button" title="隐藏关闭按钮">
        <DialogNoCloseButtonExample />
      </ExampleCard>
      <ExampleCard id="sticky-footer" title="固定页脚">
        <DialogStickyFooterExample />
      </ExampleCard>
      <ExampleCard id="scrollable-content" title="滚动内容">
        <DialogScrollableContentExample />
      </ExampleCard>
    </div>
  );
}
