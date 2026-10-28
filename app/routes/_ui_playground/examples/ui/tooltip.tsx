import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function BasicExample() {
  return (
    <div id="example-tooltip" className="space-y-4">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>保存说明</TooltipTrigger>
        <TooltipContent>保存后会同步更新项目资料。</TooltipContent>
      </Tooltip>
    </div>
  );
}

export function DirectionsExample() {
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
