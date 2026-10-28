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
      <p>已输入 {description.length} 字</p>
    </div>
  );
}
