import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div id="example-tabs" className="space-y-4">
      <Tabs defaultValue="overview">
        <TabsList aria-label="项目详情">
          <TabsTrigger value="overview">概览</TabsTrigger>
          <TabsTrigger value="members">成员</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="pt-4">
          项目进行中，已完成 12 项任务。
        </TabsContent>
        <TabsContent value="members" className="pt-4">
          张三 · 产品设计，李四 · 前端开发。
        </TabsContent>
      </Tabs>
    </div>
  );
}

function VariantsExample() {
  return (
    <div className="space-y-6">
      {(['horizontal', 'vertical'] as const).map((orientation) => (
        <Tabs key={orientation} orientation={orientation} defaultValue="overview">
          <TabsList variant="line" aria-label={`${orientation} 项目信息`}>
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="members">成员</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              设置
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">项目概览内容</TabsContent>
          <TabsContent value="members">项目成员内容</TabsContent>
        </Tabs>
      ))}
    </div>
  );
}

export default function TabsExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="切换页签查看不同内容，支持方向键操作。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard
        id="variants"
        title="线条样式与垂直布局"
        description="比较线条页签和垂直页签，禁用项不可切换。"
      >
        <VariantsExample />
      </ExampleCard>
    </div>
  );
}
