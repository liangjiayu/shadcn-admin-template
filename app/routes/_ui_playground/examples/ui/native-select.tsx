import { useState } from 'react';

import { Label } from '@/components/ui/label';
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
      <p>当前城市：{region === 'shanghai' ? '上海' : '北京'}</p>
    </div>
  );
}
