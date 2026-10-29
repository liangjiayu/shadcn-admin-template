import { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [formats, setFormats] = useState<string[]>(['italic']);
  return (
    <div id="example-toggle-group" className="space-y-4">
      <ToggleGroup
        multiple
        value={formats}
        onValueChange={setFormats}
        variant="outline"
        aria-label="文字格式"
      >
        <ToggleGroupItem value="bold" aria-label="粗体">
          粗体
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="斜体">
          斜体
        </ToggleGroupItem>
      </ToggleGroup>
      <div
        style={{
          fontWeight: formats.includes('bold') ? 700 : 400,
          fontStyle: formats.includes('italic') ? 'italic' : 'normal',
        }}
      >
        文字格式预览
      </div>
    </div>
  );
}

function SingleExample() {
  return (
    <ToggleGroup defaultValue={['left']} aria-label="对齐方式">
      <ToggleGroupItem value="left">左对齐</ToggleGroupItem>
      <ToggleGroupItem value="center">居中</ToggleGroupItem>
      <ToggleGroupItem value="right">右对齐</ToggleGroupItem>
      <ToggleGroupItem value="justify" disabled>
        两端对齐
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default function ToggleGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="同时启用多种文字格式。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="single" title="单选与禁用项" description="单选按钮组用于切换对齐方式。">
        <SingleExample />
      </ExampleCard>
    </div>
  );
}
