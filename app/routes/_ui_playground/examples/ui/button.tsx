import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function BasicExample() {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => setClicks(clicks + 1)}>点击计数</Button>
        <Button variant="outline" onClick={() => setClicks(0)}>
          重置
        </Button>
      </div>
      <div role="status">已点击 {clicks} 次</div>
    </div>
  );
}

export function DisabledExample() {
  return <Button disabled>禁用按钮</Button>;
}

export function SecondaryExample() {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="space-y-4">
      <Button variant="secondary" onClick={() => setClicks(clicks + 1)}>
        次要按钮
      </Button>
      <div role="status">已点击 {clicks} 次</div>
    </div>
  );
}
