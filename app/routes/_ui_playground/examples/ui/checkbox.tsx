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

export function GroupExample() {
  const [selected, setSelected] = useState<string[]>(['邮件']);
  return (
    <div className="space-y-3">
      <Label>
        <Checkbox
          checked={selected.length === 3}
          indeterminate={selected.length > 0 && selected.length < 3}
          onCheckedChange={(checked) => setSelected(checked ? ['邮件', '短信', '站内信'] : [])}
        />
        全选通知渠道
      </Label>
      {['邮件', '短信', '站内信'].map((item) => (
        <Label key={item}>
          <Checkbox
            checked={selected.includes(item)}
            onCheckedChange={(checked) =>
              setSelected(
                checked ? [...selected, item] : selected.filter((value) => value !== item),
              )
            }
          />
          {item}
        </Label>
      ))}
      <Label>
        <Checkbox disabled />
        暂不可用
      </Label>
      <div role="status">已选：{selected.join('、') || '无'}</div>
    </div>
  );
}
