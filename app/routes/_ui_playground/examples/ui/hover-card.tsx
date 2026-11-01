import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import { ExampleCard } from '../../components/example-card';

function HoverCardBasicExample() {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link" />}>
        悬停此处
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@nextjs</div>
        <div>由 @vercel 创建并维护的 React 框架。</div>
        <div className="mt-1 text-xs text-muted-foreground">加入于 2021 年 12 月</div>
      </HoverCardContent>
    </HoverCard>
  );
}

const HOVER_CARD_SIDESSides = ['left', 'top', 'bottom', 'right'] as const;
function HoverCardSidesExample() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {HOVER_CARD_SIDESSides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={<Button variant="outline" className="capitalize" />}
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <div className="font-medium">悬浮卡片</div>
              <div>此卡片显示在触发器的{side}方向。</div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}

export default function HoverCardExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法">
        <HoverCardBasicExample />
      </ExampleCard>
      <ExampleCard id="sides" title="方向">
        <HoverCardSidesExample />
      </ExampleCard>
    </div>
  );
}
