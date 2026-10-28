import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  const [text, setText] = useState('示例项目');
  return (
    <div id="example-input" className="space-y-4">
      <Label htmlFor="demo-input">项目名称</Label>
      <Input id="demo-input" value={text} onChange={(event) => setText(event.target.value)} />
      <p className="break-all">当前值：{text || '未填写'}</p>
    </div>
  );
}
