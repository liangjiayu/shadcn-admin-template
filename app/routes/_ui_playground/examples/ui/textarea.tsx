import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function BasicExample() {
  const [description, setDescription] = useState('');
  return (
    <div id="example-textarea" className="space-y-4">
      <Label htmlFor="demo-textarea">项目说明</Label>
      <Textarea
        id="demo-textarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="请输入项目说明"
      />
      <div>已输入 {description.length} 字</div>
    </div>
  );
}

export function StatesExample() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Textarea aria-label="只读内容" readOnly defaultValue="只读内容" />
      <Textarea aria-label="禁用内容" disabled defaultValue="禁用内容" />
      <div className="space-y-2">
        <Textarea
          aria-label="错误输入"
          aria-invalid="true"
          aria-describedby="textarea-state-error"
          defaultValue="不符合要求的内容"
        />
        <div id="textarea-state-error" className="text-destructive">
          请检查输入内容。
        </div>
      </div>
    </div>
  );
}
