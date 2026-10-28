import { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function BasicExample() {
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

export function SingleExample() {
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
