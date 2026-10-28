import { useState } from 'react';

import { Button } from '@/components/ui/button';
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
