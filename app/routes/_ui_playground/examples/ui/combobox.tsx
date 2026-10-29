import { useState } from 'react';

import {
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox';
import { Label } from '@/components/ui/label';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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

function MultipleExample() {
  const items = ['React', 'Vue', 'Svelte', 'Angular'];
  const [values, setValues] = useState<string[]>(['React']);
  const anchor = useComboboxAnchor();
  return (
    <div className="max-w-sm space-y-3">
      <Combobox multiple items={items} value={values} onValueChange={setValues}>
        <ComboboxChips ref={anchor}>
          <ComboboxValue>
            {(selected: string[]) => (
              <>
                {selected.map((item) => (
                  <ComboboxChip key={item} aria-label={`移除 ${item}`}>
                    {item}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput aria-label="搜索并选择技术栈" placeholder="添加技术栈" />
              </>
            )}
          </ComboboxValue>
        </ComboboxChips>
        <ComboboxContent anchor={anchor}>
          <ComboboxEmpty>没有匹配项</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <div role="status">已选：{values.join('、') || '无'}</div>
      <Combobox items={items} disabled>
        <ComboboxInput
          id="combobox-disabled-input"
          disabled
          aria-label="禁用搜索选择"
          placeholder="暂不可用"
        />
      </Combobox>
    </div>
  );
}

export default function ComboboxExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="输入名称筛选选项，支持清空和空结果。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="multiple"
        title="多选标签"
        description="搜索并选择多个选项，点击标签上的关闭按钮移除。"
      >
        <MultipleExample />
      </ExampleCard>
    </div>
  );
}
