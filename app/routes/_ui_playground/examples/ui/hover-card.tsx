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
          <p className="font-medium">张三</p>
          <p className="mt-2 text-sm text-muted-foreground">
            产品设计师，负责团队的交互设计与视觉规范。
          </p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
