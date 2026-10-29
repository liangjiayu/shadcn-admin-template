import { ScrollBar } from '@/components/ui/scroll-area';
import { ScrollArea } from '@/components/ui/scroll-area';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-scroll-area" className="space-y-4">
      <ScrollArea className="h-56 rounded-lg border" tabIndex={0} aria-label="版本记录">
        <div className="divide-y px-4">
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className="py-3">
              版本 1.{20 - index}.0 · 更新记录
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function HorizontalExample() {
  return (
    <div className="space-y-4">
      <ScrollArea className="w-full rounded-lg border">
        <div className="flex w-max gap-4 p-4">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="w-32 rounded bg-muted p-4">
              项目 {i + 1}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="h-48 w-full rounded-lg border">
        <div className="w-[900px] space-y-4 p-4">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i}>第 {i + 1} 行：向水平与垂直方向滚动查看更多内容。</div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default function ScrollAreaExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="在固定高度内滚动长列表。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="horizontal"
        title="水平与双向滚动"
        description="内容宽度超出容器时可水平滚动。"
      >
        <HorizontalExample />
      </ExampleCard>
    </div>
  );
}
