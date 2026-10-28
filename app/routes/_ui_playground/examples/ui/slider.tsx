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
