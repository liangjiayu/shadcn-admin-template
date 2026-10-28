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
