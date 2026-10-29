import { Info } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { ExampleCard } from '../../components/example-card';

function BasicExample() {
  return (
    <div className="space-y-4">
      <Alert>
        <Info />
        <AlertTitle>使用提示</AlertTitle>
        <AlertDescription>所有演示数据仅在当前用例中生效。</AlertDescription>
      </Alert>
    </div>
  );
}

function DestructiveExample() {
  return (
    <div className="space-y-4">
      <Alert variant="destructive">
        <AlertTitle>提交失败</AlertTitle>
        <AlertDescription>请检查必填字段后重试。</AlertDescription>
      </Alert>
    </div>
  );
}

export default function AlertExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="信息提示" description="在页面内展示提示信息。">
        <BasicExample />
      </ExampleCard>
      <ExampleCard id="destructive" title="错误提示" description="使用危险样式展示错误信息。">
        <DestructiveExample />
      </ExampleCard>
    </div>
  );
}
