import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div className="space-y-4">
      <div role="status" className="flex items-center gap-2">
        <Spinner aria-hidden="true" />
        <span>正在加载内容…</span>
      </div>
    </div>
  );
}

function ButtonExample() {
  return (
    <div className="space-y-4">
      <Button disabled>
        <Spinner aria-hidden="true" />
        正在提交
      </Button>
    </div>
  );
}

function SizesExample() {
  return (
    <div className="flex items-center gap-6" role="status" aria-label="正在加载">
      <Spinner className="size-3" />
      <Spinner className="size-5" />
      <Spinner className="size-8" />
    </div>
  );
}

export default function SpinnerExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="内容加载" description="在内容区域展示加载状态。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="button" title="按钮加载" description="在按钮内展示提交中的状态。">
        <ButtonExample />
      </ExampleCard>
      <ExampleCard
        id="sizes"
        title="尺寸对比"
        description="在不同密度的内容区域使用相应大小的加载图标。"
      >
        <SizesExample />
      </ExampleCard>
    </div>
  );
}
