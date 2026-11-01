import { Separator } from '@/components/ui/separator';

import { ExampleCard } from '../../components/example-card';

function SeparatorDemoExample() {
  return (
    <div className="flex max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <div className="leading-none font-medium">shadcn/ui</div>
        <div className="text-muted-foreground">设计系统的基础</div>
      </div>
      <Separator />
      <div>一组精心设计的组件，可按需定制、扩展并用于构建应用。</div>
    </div>
  );
}

function SeparatorVerticalExample() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>博客</div>
      <Separator orientation="vertical" />
      <div>文档</div>
      <Separator orientation="vertical" />
      <div>源码</div>
    </div>
  );
}

function SeparatorMenuExample() {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex flex-col gap-1">
        <span className="font-medium">设置</span>
        <span className="text-xs text-muted-foreground">管理偏好设置</span>
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">账户</span>
        <span className="text-xs text-muted-foreground">个人资料与安全</span>
      </div>
      <Separator orientation="vertical" className="block" />
      <div className="flex flex-col gap-1">
        <span className="font-medium">帮助</span>
        <span className="text-xs text-muted-foreground">支持与文档</span>
      </div>
    </div>
  );
}

function SeparatorListExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      <dl className="flex items-center justify-between">
        <dt>项目 1</dt>
        <dd className="text-muted-foreground">内容 1</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>项目 2</dt>
        <dd className="text-muted-foreground">内容 2</dd>
      </dl>
      <Separator />
      <dl className="flex items-center justify-between">
        <dt>项目 3</dt>
        <dd className="text-muted-foreground">内容 3</dd>
      </dl>
    </div>
  );
}

export default function SeparatorExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <SeparatorDemoExample />
      </ExampleCard>
      <ExampleCard id="vertical" title="垂直排列">
        <SeparatorVerticalExample />
      </ExampleCard>
      <ExampleCard id="menu" title="菜单">
        <SeparatorMenuExample />
      </ExampleCard>
      <ExampleCard id="list" title="列表">
        <SeparatorListExample />
      </ExampleCard>
    </div>
  );
}
