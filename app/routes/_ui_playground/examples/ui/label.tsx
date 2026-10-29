import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-label" className="space-y-4">
      <Label htmlFor="demo-label">项目名称</Label>
      <Input id="demo-label" placeholder="请输入项目名称" />
    </div>
  );
}

function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="label-disabled">账号（不可修改）</Label>
      <Input id="label-disabled" disabled defaultValue="admin" />
    </div>
  );
}

export default function LabelExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="点击标签可聚焦关联的输入框。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用控件" description="标签与禁用输入框保持关联。">
        <DisabledExample />
      </ExampleCard>
    </div>
  );
}
