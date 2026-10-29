import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import { ExampleCard } from '../../components/example-card';

function VariantsExample() {
  return (
    <div className="flex flex-wrap gap-3">
      {(['default', 'secondary', 'outline', 'destructive', 'ghost', 'link'] as const).map(
        (variant) => (
          <Badge key={variant} variant={variant}>
            {variant}
          </Badge>
        ),
      )}
      <Badge>
        <Check />
        已完成
      </Badge>
    </div>
  );
}

export default function BadgeExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="variants" title="样式与图标" description="集中比较常见状态样式及图标徽章。">
        <VariantsExample />
      </ExampleCard>
    </div>
  );
}
