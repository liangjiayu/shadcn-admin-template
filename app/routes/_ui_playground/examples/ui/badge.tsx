import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

export function VariantsExample() {
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
