import { cn } from 'cn';
import { useState } from 'react';

import { Toggle } from '@/components/ui/toggle';

export function BasicExample() {
  const [bold, setBold] = useState(false);
  return (
    <div id="example-toggle" className="space-y-4">
      <Toggle pressed={bold} onPressedChange={setBold} aria-label="切换粗体" variant="outline">
        粗体
      </Toggle>
      <div className={cn(bold && 'font-bold')}>这段文字展示当前粗体效果。</div>
    </div>
  );
}

export function StatesExample() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <Toggle key={size} size={size} aria-label={`${size} 粗体`}>
          粗体
        </Toggle>
      ))}
      <Toggle variant="outline" defaultPressed aria-label="切换斜体">
        斜体
      </Toggle>
      <Toggle disabled aria-label="禁用下划线">
        下划线
      </Toggle>
    </div>
  );
}
