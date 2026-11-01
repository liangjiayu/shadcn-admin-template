import * as React from 'react';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

import { ExampleCard } from '../../components/example-card';

function SliderDemoExample() {
  return <Slider defaultValue={[75]} max={100} step={1} className="mx-auto w-full max-w-xs" />;
}

function SliderRangeExample() {
  return <Slider defaultValue={[25, 50]} max={100} step={5} className="mx-auto w-full max-w-xs" />;
}

function SliderMultipleThumbsExample() {
  return (
    <Slider defaultValue={[10, 20, 70]} max={100} step={10} className="mx-auto w-full max-w-xs" />
  );
}

function SliderVerticalExample() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
      <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" className="h-40" />
      <Slider defaultValue={[25]} max={100} step={1} orientation="vertical" className="h-40" />
    </div>
  );
}

function SliderControlledExample() {
  const [value, setValue] = React.useState([0.3, 0.7]);
  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor="slider-controlled-slider-demo-temperature">温度</Label>
        <span className="text-sm text-muted-foreground">{value.join(', ')}</span>
      </div>
      <Slider
        id="slider-controlled-slider-demo-temperature"
        value={value}
        onValueChange={(nextValue) => setValue(nextValue as number[])}
        min={0}
        max={1}
        step={0.1}
      />
    </div>
  );
}

function SliderDisabledExample() {
  return (
    <Slider defaultValue={[50]} max={100} step={1} disabled className="mx-auto w-full max-w-xs" />
  );
}

export default function SliderExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <SliderDemoExample />
      </ExampleCard>
      <ExampleCard id="range" title="范围">
        <SliderRangeExample />
      </ExampleCard>
      <ExampleCard id="multiple-thumbs" title="多个滑块">
        <SliderMultipleThumbsExample />
      </ExampleCard>
      <ExampleCard id="vertical" title="垂直排列">
        <SliderVerticalExample />
      </ExampleCard>
      <ExampleCard id="controlled" title="受控状态">
        <SliderControlledExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <SliderDisabledExample />
      </ExampleCard>
    </div>
  );
}
