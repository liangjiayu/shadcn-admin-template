import { Plus } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-3">
      <Button onClick={() => setSaved(true)}>保存</Button>
      <div role="status">{saved ? '已保存' : '点击按钮执行保存操作'}</div>
    </div>
  );
}

function DisabledExample() {
  return <Button disabled>禁用按钮</Button>;
}

function VariantsExample() {
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

function SizesExample() {
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

export default function ButtonExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="点击保存按钮，在当前用例内查看操作反馈。"
      >
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态" description="禁用按钮无法触发点击操作。">
        <DisabledExample />
      </ExampleCard>
      <ExampleCard
        id="variants"
        title="样式对比"
        description="对比主要、次要、描边、轻量、危险和链接按钮。"
      >
        <VariantsExample />
      </ExampleCard>
      <ExampleCard
        id="sizes"
        title="尺寸与图标"
        description="按操作密度选择按钮尺寸，图标按钮提供可访问名称。"
      >
        <SizesExample />
      </ExampleCard>
    </div>
  );
}
