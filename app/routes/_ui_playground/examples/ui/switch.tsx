import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div id="example-switch" className="space-y-4">
      <div className="flex items-center gap-2">
        <Switch id="demo-switch" checked={enabled} onCheckedChange={setEnabled} />
        <Label htmlFor="demo-switch">自动保存</Label>
      </div>
      <div>自动保存：{enabled ? '开启' : '关闭'}</div>
    </div>
  );
}

function StatesExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Switch id="switch-state-notification" defaultChecked />
        <div>
          <Label htmlFor="switch-state-notification">邮件通知</Label>
          <div className="text-muted-foreground">接收项目进度更新。</div>
        </div>
      </div>
      <Label>
        <Switch disabled />
        暂不可用
      </Label>
      <Label>
        <Switch disabled defaultChecked />
        已启用且不可修改
      </Label>
    </div>
  );
}

export default function SwitchExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="切换即时生效的设置。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="states" title="说明与禁用" description="为设置提供说明，并展示禁用状态。">
        <StatesExample />
      </ExampleCard>
    </div>
  );
}
