import { useState } from 'react';

import { proConfirm } from '@/components/pro-ui';
import { Button } from '@/components/ui/button';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  const [result, setResult] = useState('点击按钮打开确认弹窗');

  const handleConfirm = async () => {
    const confirmed = await proConfirm({
      title: '确认执行操作？',
      content: '这是一个演示操作，不会修改实际数据。',
    });
    setResult(confirmed ? '已确认操作' : '已取消操作');
  };

  return (
    <div className="space-y-3">
      <Button onClick={handleConfirm}>打开确认弹窗</Button>
      <div role="status" className="text-muted-foreground">
        {result}
      </div>
    </div>
  );
}

export default function ProConfirmExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="打开确认弹窗，查看确认或取消的操作结果。"
      >
        <BasicExample />
      </ExampleCard>
    </div>
  );
}
