import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [volume, setVolume] = useState<number[]>([40]);
  return (
    <div id="example-slider" className="space-y-4">
      <Label id="demo-slider-label">音量</Label>
      <Slider
        aria-labelledby="demo-slider-label"
        value={volume}
        onValueChange={(value) => setVolume(Array.isArray(value) ? value : [value])}
        min={0}
        max={100}
      />
      <div>当前音量：{volume[0]}%</div>
    </div>
  );
}

function RangeExample() {
  const [range, setRange] = useState([200, 600]);
  return (
    <div className="space-y-4">
      <Slider
        aria-label="价格范围"
        value={range}
        onValueChange={(value) => setRange(Array.isArray(value) ? value : [value])}
        min={0}
        max={1000}
        step={10}
      />
      <div role="status">
        ¥{range[0]} — ¥{range[1]}
      </div>
    </div>
  );
}

function StatesExample() {
  return (
    <div className="flex h-48 gap-12">
      <Slider orientation="vertical" aria-label="垂直音量" defaultValue={[40]} />
      <div className="w-48 pt-4">
        <Slider disabled aria-label="禁用滑块" defaultValue={[30]} />
      </div>
    </div>
  );
}

export default function SliderExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="拖动或使用方向键调整数值。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="range" title="双端范围与步长" description="以 10 为步长选择价格范围。">
        <RangeExample />
      </ExampleCard>
      <ExampleCard id="states" title="垂直与禁用" description="比较垂直滑块和禁用滑块。">
        <StatesExample />
      </ExampleCard>
    </div>
  );
}
