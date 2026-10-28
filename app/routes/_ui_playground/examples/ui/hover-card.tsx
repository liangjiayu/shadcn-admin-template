import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export function BasicExample() {
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

export function DirectionsExample() {
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
