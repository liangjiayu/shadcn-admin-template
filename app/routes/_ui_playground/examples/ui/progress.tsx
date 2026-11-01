import * as React from 'react';

import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';

import { ExampleCard } from '../../components/example-card';

function ProgressDemoExample() {
  const [progress, setProgress] = React.useState(13);
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-[60%]" />;
}

function ProgressLabelExample() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>上传进度</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}

function ProgressControlledExample() {
  const [value, setValue] = React.useState(50);
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value} className="w-full" />
      <Slider
        value={value}
        onValueChange={(nextValue) => setValue(nextValue as number)}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}

export default function ProgressExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <ProgressDemoExample />
      </ExampleCard>
      <ExampleCard id="label" title="标签">
        <ProgressLabelExample />
      </ExampleCard>
      <ExampleCard id="controlled" title="受控状态">
        <ProgressControlledExample />
      </ExampleCard>
    </div>
  );
}
