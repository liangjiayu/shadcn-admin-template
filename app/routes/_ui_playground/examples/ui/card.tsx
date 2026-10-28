import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { CardAction } from '@/components/ui/card';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function BasicExample() {
  const [joined, setJoined] = useState(false);
  return (
    <div id="example-card" className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>设计协作</CardTitle>
          <CardDescription>统一管理团队的设计资源。</CardDescription>
        </CardHeader>
        <CardContent>
          <div>{joined ? '你已加入项目，可以开始协作。' : '项目共有 8 位成员，欢迎加入。'}</div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setJoined(!joined)}>{joined ? '退出项目' : '加入项目'}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function ActionExample() {
  const [message, setMessage] = useState('');
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {(['default', 'sm'] as const).map((size) => (
        <Card key={size} size={size}>
          <CardHeader>
            <CardTitle>项目概览</CardTitle>
            <CardDescription>{size} 尺寸</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm" onClick={() => setMessage('已刷新')}>
                刷新
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>本周完成 12 项任务</CardContent>
          <CardFooter>
            <Button size="sm" onClick={() => setMessage('已关注项目')}>
              关注
            </Button>
          </CardFooter>
        </Card>
      ))}
      <div role="status">{message}</div>
    </div>
  );
}
