import { AspectRatio } from '@/components/ui/aspect-ratio';

import { ExampleCard } from '../../components/example-card';

function AspectRatioDemoExample() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="照片"
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  );
}

function AspectRatioSquareExample() {
  return (
    <AspectRatio ratio={1 / 1} className="w-full max-w-[12rem] rounded-lg bg-muted">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="照片"
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  );
}

function AspectRatioPortraitExample() {
  return (
    <AspectRatio ratio={9 / 16} className="w-full max-w-[10rem] rounded-lg bg-muted">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="照片"
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  );
}

export default function AspectRatioExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <AspectRatioDemoExample />
      </ExampleCard>
      <ExampleCard id="square" title="正方形">
        <AspectRatioSquareExample />
      </ExampleCard>
      <ExampleCard id="portrait" title="竖图">
        <AspectRatioPortraitExample />
      </ExampleCard>
    </div>
  );
}
