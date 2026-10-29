import { Separator } from '@/components/ui/separator';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div className="space-y-4">
      <div>项目概览</div>
      <Separator />
      <div>项目详情</div>
    </div>
  );
}

function VerticalExample() {
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

export default function SeparatorExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="水平分隔线" description="使用水平分隔线划分内容区域。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="vertical" title="垂直分隔线" description="使用垂直分隔线划分行内内容。">
        <VerticalExample />
      </ExampleCard>
    </div>
  );
}
