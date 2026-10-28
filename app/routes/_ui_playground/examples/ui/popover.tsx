import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';

export function BasicExample() {
  return (
    <div id="example-popover" className="space-y-4">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>查看统计</PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>本周统计</PopoverTitle>
            <PopoverDescription>已完成 12 项任务，较上周增加 3 项。</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
}
