import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  return (
    <div id="example-label" className="space-y-4">
      <Label htmlFor="demo-label">项目名称</Label>
      <Input id="demo-label" placeholder="请输入项目名称" />
    </div>
  );
}

export function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="label-disabled">账号（不可修改）</Label>
      <Input id="label-disabled" disabled defaultValue="admin" />
    </div>
  );
}
