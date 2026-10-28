import { ScrollArea } from '@/components/ui/scroll-area';

export function BasicExample() {
  return (
    <div id="example-scroll-area" className="space-y-4">
      <ScrollArea className="h-56 rounded-lg border" tabIndex={0} aria-label="版本记录">
        <div className="divide-y px-4">
          {Array.from({ length: 20 }, (_, index) => (
            <p key={index} className="py-3">
              版本 1.{20 - index}.0 · 更新记录
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
