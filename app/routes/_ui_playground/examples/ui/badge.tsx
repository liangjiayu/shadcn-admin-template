import { Badge } from '@/components/ui/badge';

export function BasicExample() {
  return (
    <div className="space-y-4">
      <Badge>进行中</Badge>
    </div>
  );
}

export function DestructiveExample() {
  return (
    <div className="space-y-4">
      <Badge variant="destructive">失败</Badge>
    </div>
  );
}

export function OutlineExample() {
  return (
    <div className="space-y-4">
      <Badge variant="outline">已归档</Badge>
    </div>
  );
}

export function SecondaryExample() {
  return (
    <div className="space-y-4">
      <Badge variant="secondary">草稿</Badge>
    </div>
  );
}
