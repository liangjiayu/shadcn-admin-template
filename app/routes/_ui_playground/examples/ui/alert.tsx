import { Info } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function BasicExample() {
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

export function DestructiveExample() {
  return (
    <div className="space-y-4">
      <Alert variant="destructive">
        <AlertTitle>提交失败</AlertTitle>
        <AlertDescription>请检查必填字段后重试。</AlertDescription>
      </Alert>
    </div>
  );
}
