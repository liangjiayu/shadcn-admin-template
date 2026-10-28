import { useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div id="example-checkbox" className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="demo-checkbox" checked={agreed} onCheckedChange={setAgreed} />
        <Label htmlFor="demo-checkbox">接收邮件通知</Label>
      </div>
      <div>当前状态：{agreed ? '已勾选' : '未勾选'}</div>
    </div>
  );
}
