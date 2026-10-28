import { useState } from 'react';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export function BasicExample() {
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

export function RangeExample() {
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

export function StatesExample() {
  return (
    <div className="flex h-48 gap-12">
      <Slider orientation="vertical" aria-label="垂直音量" defaultValue={[40]} />
      <div className="w-48 pt-4">
        <Slider disabled aria-label="禁用滑块" defaultValue={[30]} />
      </div>
    </div>
  );
}
