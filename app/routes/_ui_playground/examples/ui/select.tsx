import { useState } from 'react';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function BasicExample() {
  const [status, setStatus] = useState<string | null>('draft');
  return (
    <div id="example-select" className="space-y-4">
      <Label id="demo-select-label">发布状态</Label>
      <Select
        value={status}
        onValueChange={setStatus}
        items={[
          { value: 'draft', label: '草稿' },
          { value: 'published', label: '已发布' },
        ]}
      >
        <SelectTrigger aria-labelledby="demo-select-label">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="draft">草稿</SelectItem>
          <SelectItem value="published">已发布</SelectItem>
        </SelectContent>
      </Select>
      <p>当前值：{status}</p>
    </div>
  );
}
