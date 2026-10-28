import { Skeleton } from '@/components/ui/skeleton';

export function BasicExample() {
  return (
    <div id="example-skeleton" className="space-y-4">
      <div role="status" className="flex items-center gap-4">
        <Skeleton className="size-12 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <span className="sr-only">内容加载中</span>
      </div>
    </div>
  );
}
