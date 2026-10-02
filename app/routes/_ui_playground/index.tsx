import { BasicExample } from './components/basic-example';
import { CustomFieldExample } from './components/custom-field-example';
import { DependencyExample } from './components/dependency-example';
import { DynamicFieldsExample } from './components/dynamic-fields-example';
import { LayoutExamples } from './components/layout-examples';
import { StateExample } from './components/state-example';
import { ValidationExample } from './components/validation-example';

export const handle = { name: '组件演示' };

export default function UiPlayground() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">ProForm 使用用例</h1>
        <p className="text-sm text-muted-foreground">
          从基础控件到校验、布局、字段联动与提交，每个用例均可独立填写、提交和重置。
        </p>
      </div>
      <BasicExample />
      <ValidationExample />
      <LayoutExamples />
      <DependencyExample />
      <DynamicFieldsExample />
      <StateExample />
      <CustomFieldExample />
    </div>
  );
}
