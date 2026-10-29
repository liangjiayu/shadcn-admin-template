import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { ButtonGroupSeparator } from '@/components/ui/button-group';
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
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

function VerticalExample() {
  const [zoom, setZoom] = useState(100);
  const [action, setAction] = useState('');
  return (
    <div className="flex gap-6">
      <ButtonGroup orientation="vertical" aria-label="缩放操作">
        <Button variant="outline" onClick={() => setZoom(zoom + 10)}>
          放大
        </Button>
        <ButtonGroupText>{zoom}%</ButtonGroupText>
        <Button variant="outline" disabled={zoom <= 10} onClick={() => setZoom(zoom - 10)}>
          缩小
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="文档操作">
        <Button variant="outline" onClick={() => setAction('已保存')}>
          保存
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline" onClick={() => setAction('已导出')}>
          导出
        </Button>
      </ButtonGroup>
      <span role="status">{action}</span>
    </div>
  );
}

export default function ButtonGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="将相关操作组合在一起。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="vertical"
        title="垂直操作与分隔"
        description="将相关操作垂直排列，使用分隔符区分操作。"
      >
        <VerticalExample />
      </ExampleCard>
    </div>
  );
}
