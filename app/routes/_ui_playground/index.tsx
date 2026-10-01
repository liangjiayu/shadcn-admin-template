import { CommonFields } from './components/common-fields';
import { LayoutExamples } from './components/layout-examples';
import { StateExample } from './components/state-example';
import { ValidationExample } from './components/validation-example';

export const handle = { name: '组件演示' };

export default function UiPlayground() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">ProForm 组件演示</h1>
        <p className="text-sm text-muted-foreground">
          基于 React Hook Form、Zod 与 shadcn/ui 的组合式表单。展开「查看用法」了解各项功能。
        </p>
      </div>
      <CommonFields />
      <LayoutExamples />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <ValidationExample />
        <StateExample />
      </div>
    </div>
  );
}
