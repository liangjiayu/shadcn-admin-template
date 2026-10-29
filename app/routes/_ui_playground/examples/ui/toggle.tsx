import { cn } from 'cn';
import { useState } from 'react';

import { Toggle } from '@/components/ui/toggle';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [bold, setBold] = useState(false);
  return (
    <div id="example-toggle" className="space-y-4">
      <Toggle pressed={bold} onPressedChange={setBold} aria-label="切换粗体" variant="outline">
        粗体
      </Toggle>
      <div className={cn(bold && 'font-bold')}>这段文字展示当前粗体效果。</div>
    </div>
  );
}

function StatesExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <Toggle key={size} size={size} aria-label={`${size} 粗体`}>
          粗体
        </Toggle>
      ))}
      <Toggle variant="outline" defaultPressed aria-label="切换斜体">
        斜体
      </Toggle>
      <Toggle disabled aria-label="禁用下划线">
        下划线
      </Toggle>
    </div>
  );
}

export default function ToggleExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="点击切换按下状态。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="states"
        title="样式、尺寸与禁用"
        description="对比默认和描边样式，以及常见尺寸。"
      >
        <StatesExample />
      </ExampleCard>
    </div>
  );
}
