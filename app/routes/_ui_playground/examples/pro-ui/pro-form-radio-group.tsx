import { ProFormRadioGroup } from '@/components/pro-form';

import { ExampleCard } from '../../components/example-card';
import { FormExample } from '../../components/pro-form-example';

export default function ProFormRadioGroupExamples() {
  return (
    <div className="space-y-6">
      <ExampleCard id="basic" title="基础用法" description="选择一个通知渠道，提交对应的字符串值。">
        <FormExample defaultValues={{ channel: 'email' }}>
          <ProFormRadioGroup
            name="channel"
            label="通知渠道"
            options={[
              { label: '邮件', value: 'email' },
              { label: '站内信', value: 'inbox' },
            ]}
          />
        </FormExample>
      </ExampleCard>
      <ExampleCard
        id="numeric"
        title="数字选项与禁用选项"
        description="选择结果保持数字类型，已停用的选项不可选择。"
      >
        <FormExample defaultValues={{ priority: 1 }}>
          <ProFormRadioGroup
            name="priority"
            label="优先级"
            options={[
              { label: '普通', value: 1 },
              { label: '紧急', value: 2 },
              { label: '特急（停用）', value: 3, disabled: true },
            ]}
          />
        </FormExample>
      </ExampleCard>
    </div>
  );
}
