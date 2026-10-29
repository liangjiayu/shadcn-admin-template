import { AspectRatio } from '@/components/ui/aspect-ratio';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-aspect-ratio" className="space-y-4">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30 text-lg font-medium">
          16 : 9
        </div>
      </AspectRatio>
    </div>
  );
}

function RatiosExample() {
  return (
    <div className="grid max-w-lg grid-cols-2 gap-4">
      {[1, 4 / 3].map((ratio) => (
        <AspectRatio
          key={ratio}
          ratio={ratio}
          className="flex items-center justify-center rounded-lg bg-muted"
        >
          {ratio === 1 ? '1:1' : '4:3'}
        </AspectRatio>
      ))}
    </div>
  );
}

export default function AspectRatioExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="容器宽度变化时保持 16:9 比例。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="ratios" title="常见比例" description="比较正方形和 4:3 容器。">
        <RatiosExample />
      </ExampleCard>
    </div>
  );
}
