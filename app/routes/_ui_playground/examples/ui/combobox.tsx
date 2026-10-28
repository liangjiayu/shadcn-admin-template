import { useState } from 'react';

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';

export function BasicExample() {
  const frameworks = ['React', 'Vue', 'Svelte'];
  const [framework, setFramework] = useState<string | null>('React');
  return (
    <div id="example-combobox" className="space-y-4">
      <Label htmlFor="demo-combobox">技术框架</Label>
      <Combobox items={frameworks} value={framework} onValueChange={setFramework}>
        <ComboboxInput id="demo-combobox" placeholder="搜索框架" showClear />
        <ComboboxContent>
          <ComboboxEmpty>没有匹配的框架</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <div>当前选择：{framework ?? '未选择'}</div>
    </div>
  );
}
