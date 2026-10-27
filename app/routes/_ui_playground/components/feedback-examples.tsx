import { Inbox, Info } from 'lucide-react';
import { useState } from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { Progress, ProgressLabel, ProgressValue } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Spinner } from '@/components/ui/spinner';

import { ExampleCard } from './example-card';
import { ToastExample } from './toast-example';

export function FeedbackExamples() {
  const [progress, setProgress] = useState(40);
  const [created, setCreated] = useState(false);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard
        component="alert"
        title="Alert · 警告信息"
        description="在页面内展示提示和错误信息。"
      >
        <Alert>
          <Info />
          <AlertTitle>使用提示</AlertTitle>
          <AlertDescription>所有演示数据仅在当前页面中生效。</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>提交失败</AlertTitle>
          <AlertDescription>请检查必填字段后重试。</AlertDescription>
        </Alert>
      </ExampleCard>
      <ExampleCard
        component="empty"
        title="Empty · 空状态"
        description="没有内容时提供说明和下一步操作。"
      >
        {created ? (
          <div className="space-y-4 rounded-lg border p-6">
            <p role="status">已创建“我的第一个项目”。</p>
            <Button variant="outline" onClick={() => setCreated(false)}>
              恢复空状态
            </Button>
          </div>
        ) : (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Inbox />
              </EmptyMedia>
              <EmptyTitle>暂无项目</EmptyTitle>
              <EmptyDescription>创建一个项目，开始团队协作。</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button onClick={() => setCreated(true)}>创建项目</Button>
            </EmptyContent>
          </Empty>
        )}
      </ExampleCard>
      <ExampleCard
        component="progress"
        title="Progress · 进度条"
        description="通过按钮调整进度，范围为 0% 至 100%。"
      >
        <Progress value={progress}>
          <ProgressLabel>上传进度</ProgressLabel>
          <ProgressValue />
        </Progress>
        <div className="flex gap-2">
          <Button
            variant="outline"
            disabled={progress === 0}
            onClick={() => setProgress(Math.max(0, progress - 20))}
          >
            减少
          </Button>
          <Button
            disabled={progress === 100}
            onClick={() => setProgress(Math.min(100, progress + 20))}
          >
            增加
          </Button>
        </div>
      </ExampleCard>
      <ExampleCard
        component="skeleton"
        title="Skeleton · 骨架屏"
        description="用占位形状表示内容正在加载。"
      >
        <div role="status" className="flex items-center gap-4">
          <Skeleton className="size-12 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <span className="sr-only">内容加载中</span>
        </div>
      </ExampleCard>
      <ExampleCard
        component="spinner"
        title="Spinner · 加载图标"
        description="在内容区域或按钮中展示加载状态。"
      >
        <div role="status" className="flex items-center gap-2">
          <Spinner aria-hidden="true" />
          <span>正在加载内容…</span>
        </div>
        <Button disabled>
          <Spinner aria-hidden="true" />
          正在提交
        </Button>
      </ExampleCard>
      <ToastExample />
    </div>
  );
}
