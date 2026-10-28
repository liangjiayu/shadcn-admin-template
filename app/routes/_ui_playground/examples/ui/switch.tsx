import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function BasicExample() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div id="example-switch" className="space-y-4">
      <div className="flex items-center gap-2">
        <Switch id="demo-switch" checked={enabled} onCheckedChange={setEnabled} />
        <Label htmlFor="demo-switch">自动保存</Label>
      </div>
      <p>自动保存：{enabled ? '开启' : '关闭'}</p>
    </div>
  );
}
