import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FastApiServices } from '@/services';

export const handle = { name: '任务演示' };

export default function TaskDemoPage() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['task', 'list', { page: 1, pageSize: 10 }],
    queryFn: () => FastApiServices.Task.getTasks({ page: 1, pageSize: 10 }),
  });

  return (
    <div className="space-y-4 p-6">
      <Card>
        <CardHeader>
          <CardTitle>任务列表 - 接口演示</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => refetch()} disabled={isFetching}>
            {isFetching ? '加载中...' : '发起请求'}
          </Button>
          <pre className="max-h-[500px] overflow-auto rounded-md bg-muted p-4 text-sm">
            {data ? JSON.stringify(data, null, 2) : '点击按钮发起请求'}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
