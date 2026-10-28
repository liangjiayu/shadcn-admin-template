import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

export function ErrorExample() {
  return (
    <div className="space-y-4">
      <Button
        variant="destructive"
        onClick={() =>
          toast.add({ title: '保存失败', description: '暂时无法保存，请稍后重试。', type: 'error' })
        }
      >
        错误提示
      </Button>
    </div>
  );
}

export function InfoExample() {
  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        onClick={() =>
          toast.add({ title: '操作提醒', description: '你有一条新的待办消息。', type: 'info' })
        }
      >
        信息提示
      </Button>
    </div>
  );
}

export function SuccessExample() {
  return (
    <div className="space-y-4">
      <Button
        variant="default"
        onClick={() =>
          toast.add({ title: '保存成功', description: '你的修改已保存。', type: 'success' })
        }
      >
        成功提示
      </Button>
    </div>
  );
}
