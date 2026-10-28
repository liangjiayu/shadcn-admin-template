import { AspectRatio } from '@/components/ui/aspect-ratio';

export function BasicExample() {
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
