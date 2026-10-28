import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export function BasicExample() {
  return (
    <div className="space-y-4">
      <div role="status" className="flex items-center gap-2">
        <Spinner aria-hidden="true" />
        <span>正在加载内容…</span>
      </div>
    </div>
  );
}

export function ButtonExample() {
  return (
    <div className="space-y-4">
      <Button disabled>
        <Spinner aria-hidden="true" />
        正在提交
      </Button>
    </div>
  );
}

export function SizesExample() {
  return (
    <div className="flex items-center gap-6" role="status" aria-label="正在加载">
      <Spinner className="size-3" />
      <Spinner className="size-5" />
      <Spinner className="size-8" />
    </div>
  );
}
