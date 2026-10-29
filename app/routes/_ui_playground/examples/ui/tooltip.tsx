import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-tooltip" className="space-y-4">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>保存说明</TooltipTrigger>
        <TooltipContent>保存后会同步更新项目资料。</TooltipContent>
      </Tooltip>
    </div>
  );
}

function DirectionsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>{side}</TooltipTrigger>
          <TooltipContent side={side}>补充说明</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export default function TooltipExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="悬停或键盘聚焦按钮查看提示。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="directions" title="显示方向" description="比较浮层在触发器四周的显示效果。">
        <DirectionsExample />
      </ExampleCard>
    </div>
  );
}
