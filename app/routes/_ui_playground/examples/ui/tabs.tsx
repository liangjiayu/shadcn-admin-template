import { AppWindowIcon, CodeIcon } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ExampleCard } from '../../components/example-card';

function TabsDemoExample() {
  return (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">概览</TabsTrigger>
        <TabsTrigger value="analytics">分析</TabsTrigger>
        <TabsTrigger value="reports">报告</TabsTrigger>
        <TabsTrigger value="settings">设置</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>概览</CardTitle>
            <CardDescription>
              查看关键指标和最近的项目动态，跟踪所有进行中项目的进度。
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            您有 12 个进行中的项目和 3 个待办任务。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>分析</CardTitle>
            <CardDescription>跟踪性能与用户参与度指标，监测趋势并发现增长机会。</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            页面浏览量较上月增长 25%。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>报告</CardTitle>
            <CardDescription>生成并下载详细报告，以多种格式导出数据用于分析。</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            您有 5 份报告已准备就绪，可以导出。
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>设置</CardTitle>
            <CardDescription>管理账户偏好和选项，按需定制使用体验。</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            配置通知、安全和主题。
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

function TabsLineExample() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="overview">概览</TabsTrigger>
        <TabsTrigger value="analytics">分析</TabsTrigger>
        <TabsTrigger value="reports">报告</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function TabsVerticalExample() {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTrigger value="account">账户</TabsTrigger>
        <TabsTrigger value="password">密码</TabsTrigger>
        <TabsTrigger value="notifications">通知</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function TabsDisabledExample() {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">首页</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          禁用
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

function TabsIconsExample() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          预览
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          代码
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default function TabsExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="demo" title="总览">
        <TabsDemoExample />
      </ExampleCard>
      <ExampleCard id="line" title="线条样式">
        <TabsLineExample />
      </ExampleCard>
      <ExampleCard id="vertical" title="垂直排列">
        <TabsVerticalExample />
      </ExampleCard>
      <ExampleCard id="disabled" title="禁用状态">
        <TabsDisabledExample />
      </ExampleCard>
      <ExampleCard id="icons" title="图标">
        <TabsIconsExample />
      </ExampleCard>
    </div>
  );
}
