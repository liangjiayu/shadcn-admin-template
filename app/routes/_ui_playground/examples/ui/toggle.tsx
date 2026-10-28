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
