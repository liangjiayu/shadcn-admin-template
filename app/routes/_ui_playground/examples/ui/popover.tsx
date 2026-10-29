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

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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

function DirectionsExample() {
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

function SettingsExample() {
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

export default function PopoverExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="点击触发按钮展示补充内容。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="directions" title="显示方向" description="比较浮层在触发器四周的显示效果。">
        <DirectionsExample />
      </ExampleCard>
      <ExampleCard
        id="settings"
        title="简单设置"
        description="在气泡面板内修改设置，并在页面显示结果。"
      >
        <SettingsExample />
      </ExampleCard>
    </div>
  );
}
