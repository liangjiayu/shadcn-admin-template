import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  const [text, setText] = useState('示例项目');
  return (
    <div id="example-input" className="space-y-4">
      <Label htmlFor="demo-input">项目名称</Label>
      <Input id="demo-input" value={text} onChange={(event) => setText(event.target.value)} />
      <div className="break-all">当前值：{text || '未填写'}</div>
    </div>
  );
}

export function StatesExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Input aria-label="只读内容" readOnly defaultValue="只读内容" />
      <Input aria-label="禁用内容" disabled defaultValue="禁用内容" />
      <div className="space-y-2">
        <Input
          aria-label="错误输入"
          aria-invalid="true"
          aria-describedby="input-state-error"
          defaultValue="不符合要求的内容"
        />
        <div id="input-state-error" className="text-destructive">
          请检查输入内容。
        </div>
      </div>
    </div>
  );
}

export function TypesExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Input type="email" aria-label="邮箱" placeholder="name@example.com" />
      <Input type="password" aria-label="密码" autoComplete="new-password" placeholder="输入密码" />
      <Input type="number" aria-label="数量" min={1} max={100} defaultValue={1} />
      <Input type="file" aria-label="选择文件" />
    </div>
  );
}
