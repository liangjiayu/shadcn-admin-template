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
      <p
        style={{
          fontWeight: formats.includes('bold') ? 700 : 400,
          fontStyle: formats.includes('italic') ? 'italic' : 'normal',
        }}
      >
        文字格式预览
      </p>
    </div>
  );
}
