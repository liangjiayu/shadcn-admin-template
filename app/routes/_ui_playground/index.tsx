import { ListTree } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ExampleDirectory } from './components/example-directory';

export const handle = { name: '组件演示' };

export default function UiPlayground() {
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width >= 768) setDirectoryOpen(false);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="@container/playground -m-4 flex-1 md:-m-6">
      <div className="flex min-h-dvh min-w-0 items-start">
        <div className="sticky top-0 hidden h-dvh w-[232px] shrink-0 flex-col border-r border-border bg-background p-3 @[768px]/playground:flex">
          <div className="min-h-0 flex-1">
            <ExampleDirectory />
          </div>
        </div>
        <div className="max-w-[calc(64rem+3rem)] min-w-0 flex-1 space-y-6 p-4 pb-8 md:p-6">
          <div className="@[768px]/playground:hidden">
            <Sheet open={directoryOpen} onOpenChange={setDirectoryOpen}>
              <SheetTrigger render={<Button variant="outline" size="sm" />}>
                <ListTree className="size-4" />
                组件目录
              </SheetTrigger>
              <SheetContent side="left" className="w-80 max-w-[85vw] gap-0">
                <SheetHeader>
                  <SheetTitle>组件目录</SheetTitle>
                  <SheetDescription>选择组件，查看全部演示用例。</SheetDescription>
                </SheetHeader>
                <div className="min-h-0 flex-1 px-4 pb-4">
                  <ExampleDirectory onNavigate={() => setDirectoryOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
