import { CommonFields } from './components/common-fields';
import { LayoutExamples } from './components/layout-examples';
import { PreferencesExample } from './components/preferences-example';
import { SelectionExample } from './components/selection-example';
import { StateExample } from './components/state-example';
import { ValidationExample } from './components/validation-example';

export const handle = { name: '组件演示' };

export default function UiPlayground() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-xl font-semibold">ProForm 使用用例</h1>
        <p className="text-sm text-muted-foreground">
          按功能查看表单样式，跟随操作提示体验输入、选择、布局、校验与提交。每个用例可独立操作，提交后查看结果，重置恢复初始内容。
        </p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <CommonFields />
        <SelectionExample />
      </div>
      <PreferencesExample />
      <LayoutExamples />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <ValidationExample />
        <StateExample />
      </div>
    </div>
  );
}
