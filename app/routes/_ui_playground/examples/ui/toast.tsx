import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

import { ExampleCard } from '../../components/example-card';

function TypesExample() {
  const labels: Record<string, string> = {
    success: '保存成功',
    info: '消息提醒',
    warning: '需要注意',
    error: '操作失败',
  };
  return (
    <div className="flex flex-wrap gap-3">
      {['success', 'info', 'warning', 'error'].map((type) => (
        <Button
          key={type}
          variant="outline"
          onClick={() =>
            toast.add({ title: labels[type], description: '这是一条演示通知，可手动关闭。', type })
          }
        >
          {labels[type]}
        </Button>
      ))}
    </div>
  );
}

function ActionExample() {
  const [archived, setArchived] = useState(false);
  return (
    <div className="space-y-3">
      <Button
        onClick={() => {
          setArchived(true);
          toast.add({
            title: '项目已归档',
            actionProps: { children: '撤销', onClick: () => setArchived(false) },
          });
        }}
      >
        归档项目
      </Button>
      <div role="status">{archived ? '已归档' : '未归档'}</div>
    </div>
  );
}

export default function ToastExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="types" title="通知类型" description="集中体验成功、信息、警告与错误通知。">
        <TypesExample />
      </ExampleCard>
      <ExampleCard id="action" title="带操作的通知" description="通过通知中的操作撤销本地修改。">
        <ActionExample />
      </ExampleCard>
    </div>
  );
}
