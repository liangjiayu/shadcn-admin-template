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

export function RatiosExample() {
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
