import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

export function TypesExample() {
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

export function ActionExample() {
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
