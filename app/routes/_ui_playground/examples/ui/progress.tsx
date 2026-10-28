import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress';

export function BasicExample() {
  const [progress, setProgress] = useState(40);
  return (
    <div id="example-progress" className="space-y-4">
      <Progress value={progress}>
        <ProgressLabel>上传进度</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex gap-2">
        <Button
          variant="outline"
          disabled={progress === 0}
          onClick={() => setProgress(Math.max(0, progress - 20))}
        >
          减少
        </Button>
        <Button
          disabled={progress === 100}
          onClick={() => setProgress(Math.min(100, progress + 20))}
        >
          增加
        </Button>
      </div>
    </div>
  );
}
