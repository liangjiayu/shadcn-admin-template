import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group';

export function BasicExample() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div id="example-button-group" className="space-y-4">
      <ButtonGroup aria-label="调整数量">
        <Button
          variant="outline"
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
          aria-label="减少数量"
        >
          −
        </Button>
        <ButtonGroupText aria-live="polite">{quantity}</ButtonGroupText>
        <Button variant="outline" onClick={() => setQuantity(quantity + 1)} aria-label="增加数量">
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}
