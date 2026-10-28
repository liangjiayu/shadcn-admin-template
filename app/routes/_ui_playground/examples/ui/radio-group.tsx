import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function BasicExample() {
  const [plan, setPlan] = useState('basic');
  return (
    <div id="example-radio-group" className="space-y-4">
      <RadioGroup value={plan} onValueChange={setPlan} aria-label="订阅方案">
        <div className="flex items-center gap-2">
          <RadioGroupItem id="demo-plan-basic" value="basic" />
          <Label htmlFor="demo-plan-basic">基础版</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem id="demo-plan-pro" value="pro" />
          <Label htmlFor="demo-plan-pro">专业版</Label>
        </div>
      </RadioGroup>
      <div>当前方案：{plan === 'basic' ? '基础版' : '专业版'}</div>
    </div>
  );
}

export function StatesExample() {
  return (
    <RadioGroup defaultValue="basic" aria-label="套餐选择">
      <Label>
        <RadioGroupItem value="basic" />
        基础版：适合个人使用
      </Label>
      <Label>
        <RadioGroupItem value="team" />
        团队版：支持成员协作
      </Label>
      <Label>
        <RadioGroupItem value="enterprise" disabled />
        企业版：暂未开放
      </Label>
    </RadioGroup>
  );
}
