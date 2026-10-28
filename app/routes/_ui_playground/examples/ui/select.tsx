import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { SelectGroup, SelectLabel } from '@/components/ui/select';
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
      <div>当前值：{status}</div>
    </div>
  );
}

export function GroupedExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Select
        items={[
          { value: 'design', label: '设计' },
          { value: 'frontend', label: '前端' },
        ]}
      >
        <SelectTrigger aria-label="选择岗位">
          <SelectValue placeholder="选择岗位" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>产品研发</SelectLabel>
            <SelectItem value="design">设计</SelectItem>
            <SelectItem value="frontend">前端</SelectItem>
            <SelectItem value="backend" disabled>
              后端（暂无名额）
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select disabled>
        <SelectTrigger aria-label="禁用选择器">
          <SelectValue placeholder="暂不可用" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">无</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
