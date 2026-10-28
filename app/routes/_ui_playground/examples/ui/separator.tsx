import { Separator } from '@/components/ui/separator';

export function BasicExample() {
  return (
    <div className="space-y-4">
      <p>项目概览</p>
      <Separator />
      <p>项目详情</p>
    </div>
  );
}

export function VerticalExample() {
  return (
    <div className="space-y-4">
      <div className="flex h-5 items-center gap-3">
        <span>文档</span>
        <Separator orientation="vertical" />
        <span>设置</span>
      </div>
    </div>
  );
}
