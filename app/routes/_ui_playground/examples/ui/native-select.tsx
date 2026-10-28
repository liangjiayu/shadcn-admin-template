import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { NativeSelectOptGroup } from '@/components/ui/native-select';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

export function BasicExample() {
  const [region, setRegion] = useState('shanghai');
  return (
    <div id="example-native-select" className="space-y-4">
      <Label htmlFor="demo-native-select">所在城市</Label>
      <NativeSelect
        id="demo-native-select"
        value={region}
        onChange={(event) => setRegion(event.target.value)}
      >
        <NativeSelectOption value="shanghai">上海</NativeSelectOption>
        <NativeSelectOption value="beijing">北京</NativeSelectOption>
      </NativeSelect>
      <div>当前城市：{region === 'shanghai' ? '上海' : '北京'}</div>
    </div>
  );
}

export function GroupedExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <NativeSelect aria-label="选择城市" defaultValue="">
        <NativeSelectOption value="" disabled>
          选择城市
        </NativeSelectOption>
        <NativeSelectOptGroup label="华东">
          <NativeSelectOption value="shanghai">上海</NativeSelectOption>
          <NativeSelectOption value="hangzhou">杭州</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOption value="beijing" disabled>
          北京（暂不可用）
        </NativeSelectOption>
      </NativeSelect>
      <NativeSelect disabled aria-label="禁用城市选择">
        <NativeSelectOption>暂不可用</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
