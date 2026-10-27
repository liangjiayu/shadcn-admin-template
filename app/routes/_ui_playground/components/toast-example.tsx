import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/toast';

export function ToastExample() {
  return (
    <Card id="example-toast" data-example="toast" className="min-w-0">
      <CardHeader>
        <CardTitle>Toast · 操作消息反馈</CardTitle>
        <CardDescription>
          点击按钮体验不同类型的通知，通知会自动消失，也可手动关闭。
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        <Button
          onClick={() =>
            toast.add({ title: '保存成功', description: '你的修改已保存。', type: 'success' })
          }
        >
          成功提示
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            toast.add({
              title: '保存失败',
              description: '暂时无法保存，请稍后重试。',
              type: 'error',
            })
          }
        >
          错误提示
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({ title: '操作提醒', description: '你有一条新的待办消息。', type: 'info' })
          }
        >
          信息提示
        </Button>
      </CardContent>
    </Card>
  );
}
