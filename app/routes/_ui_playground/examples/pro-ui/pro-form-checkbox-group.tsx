import { ProFormCheckboxGroup } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormCheckboxGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard
        id="basic"
        title="基础用法"
        description="可同时勾选多个选项，提交值为选项值数组。"
      >
        <FormExample defaultValues={{ notifications: [] as string[] }}>
          <ProFormCheckboxGroup
            name="notifications"
            label="消息类型"
            options={[
              { label: '系统通知', value: 'system' },
              { label: '项目更新', value: 'project' },
            ]}
          />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="defaults"
        title="默认选中与禁用选项"
        description="重置恢复默认选中项，已停用的选项不可勾选。"
      >
        <FormExample defaultValues={{ notifications: ['system'] }}>
          <ProFormCheckboxGroup
            name="notifications"
            label="消息类型"
            options={[
              { label: '系统通知', value: 'system' },
              { label: '项目更新', value: 'project' },
              { label: '营销消息（停用）', value: 'marketing', disabled: true },
            ]}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
