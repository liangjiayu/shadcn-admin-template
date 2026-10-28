import { Plus } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export function BasicExample() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-3">
      <Button onClick={() => setSaved(true)}>保存</Button>
      <div role="status">{saved ? '已保存' : '点击按钮执行保存操作'}</div>
    </div>
  );
}

export function DisabledExample() {
  return <Button disabled>禁用按钮</Button>;
}

export function VariantsExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {(['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const).map(
        (variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ),
      )}
    </div>
  );
}

export function SizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
      <Button size="icon" aria-label="添加">
        <Plus />
      </Button>
      <Button>
        <Plus />
        新建项目
      </Button>
      <Button disabled>
        <Spinner />
        保存中
      </Button>
    </div>
  );
}
