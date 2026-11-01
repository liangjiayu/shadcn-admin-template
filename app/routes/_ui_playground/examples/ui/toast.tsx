import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

import { ExampleCard } from '../../components/example-card';

function showToast() {
  const id = toast.add({
    title: '活动已创建',
    description: '12 月 3 日，星期日，上午 9:00',
    actionProps: {
      children: '撤销',
      onClick() {
        toast.close(id);
      },
    },
  });
}

function ToastDemoExample() {
  return (
    <Button variant="outline" onClick={showToast}>
      显示通知
    </Button>
  );
}

function ToastTypesExample() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast.add({ description: '活动已创建。' })}>
        默认
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'success',
            description: '活动已创建。',
          })
        }
      >
        成功
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'info',
            description: '请在活动开始前 10 分钟到达。',
          })
        }
      >
        信息
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'warning',
            description: '活动不能早于上午 8:00 开始。',
          })
        }
      >
        警告
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.add({
            type: 'error',
            description: '无法创建活动。',
            priority: 'high',
          })
        }
      >
        错误
      </Button>
    </div>
  );
}

export default function ToastExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <ToastDemoExample />
      </ExampleCard>
      <ExampleCard id="types" title="通知类型">
        <ToastTypesExample />
      </ExampleCard>
    </div>
  );
}
