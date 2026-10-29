import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-hover-card" className="space-y-4">
      <HoverCard>
        <HoverCardTrigger
          render={
            <a href="#example-hover-card" className="font-medium underline underline-offset-4" />
          }
        >
          查看张三的资料
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="font-medium">张三</div>
          <div className="mt-2 text-sm text-muted-foreground">
            产品设计师，负责团队的交互设计与视觉规范。
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

function DirectionsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger render={<Button variant="outline" />}>{side}</HoverCardTrigger>
          <HoverCardContent side={side}>补充说明</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}

export default function HoverCardExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="悬停或聚焦查看成员的补充资料。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="directions" title="显示方向" description="比较浮层在触发器四周的显示效果。">
        <DirectionsExample />
      </ExampleCard>
    </div>
  );
}
