import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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

export function DirectionsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" />}>{side}</PopoverTrigger>
          <PopoverContent side={side}>补充说明</PopoverContent>
        </Popover>
      ))}
    </div>
  );
}

export function SettingsExample() {
  const [name, setName] = useState('张三');
  return (
    <div className="space-y-3">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>设置名称</PopoverTrigger>
        <PopoverContent>
          <Label htmlFor="popover-settings-name">显示名称</Label>
          <Input
            id="popover-settings-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </PopoverContent>
      </Popover>
      <div role="status">当前名称：{name || '未填写'}</div>
    </div>
  );
}
